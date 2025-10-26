package com.smartagri.smart_agriculture_backend.service;

import com.smartagri.smart_agriculture_backend.model.CropSelection;
import com.smartagri.smart_agriculture_backend.model.DataPoint;
import com.smartagri.smart_agriculture_backend.repository.CropSelectionRepository;
import com.smartagri.smart_agriculture_backend.repository.DataPointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

/**
 * Service layer responsible for business logic, including data generation,
 * scheduled persistence, and data retrieval.
 */
@Service
public class DataService {

    private final DataPointRepository dataPointRepository;
    private final CropSelectionRepository cropSelectionRepository; // New repository dependency
    private final Random random = new Random();

    @Autowired
    public DataService(DataPointRepository dataPointRepository, CropSelectionRepository cropSelectionRepository) {
        this.dataPointRepository = dataPointRepository;
        this.cropSelectionRepository = cropSelectionRepository;
    }

    /**
     * Helper method to get the current selected crop from the database.
     * Defaults to "wheat" if no selection has been saved yet.
     * @return The currently selected crop type (String).
     */
    private String getCurrentCropType() {
        // ID is hardcoded to 1L in the CropSelection entity
        Optional<CropSelection> selection = cropSelectionRepository.findById(1L);

        // Return the saved crop type, or default to "Wheat" if the table is empty
        return selection.map(CropSelection::getCropType).orElse("Wheat");
    }

    /**
     * Generates a random DataPoint, reads the current crop selection, and saves it.
     * This method is scheduled to run every 5000 milliseconds (5 seconds).
     */
    @Scheduled(fixedRate = 5000)
    public void generateAndSaveData() {
        // 1. Get the current crop selection from the database
        String currentCrop = getCurrentCropType();

        // 2. Generate random sensor values
        double moisture = 30.0 + (50.0 * random.nextDouble());
        double temperature = 15.0 + (25.0 * random.nextDouble());
        double humidity = 40.0 + (50.0 * random.nextDouble());

        // Round to two decimal places
        moisture = Math.round(moisture * 100.0) / 100.0;
        temperature = Math.round(temperature * 100.0) / 100.0;
        humidity = Math.round(humidity * 100.0) / 100.0;

        // 3. Create DataPoint including the current crop
        DataPoint dataPoint = new DataPoint(moisture, temperature, humidity, currentCrop);
        dataPointRepository.save(dataPoint);

        System.out.println("Saved new data point: " + dataPoint);
    }

    /**
     * Retrieves the single latest data point from the database.
     * @return The latest DataPoint object, or null if the table is empty.
     */
    public DataPoint getLatestDataPoint() {
        return dataPointRepository.findTopByOrderByTimestampDesc();
    }

    /**
     * Saves the user's selected crop to the dedicated CropSelection table.
     * This method is called by the CropController.
     * @param cropType The crop selected by the user.
     */
    public void saveCropSelection(String cropType) {
        // Creates a new CropSelection object (ID is automatically 1L)
        CropSelection selection = new CropSelection(cropType);

        // saveAndFlush ensures the update happens immediately, making the new crop
        // available for the next scheduled data generation.
        cropSelectionRepository.saveAndFlush(selection);
        System.out.println("Updated crop selection in DB to: " + cropType);
    }
}