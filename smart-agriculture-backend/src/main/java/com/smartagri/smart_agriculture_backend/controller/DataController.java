package com.smartagri.smart_agriculture_backend.controller;

import com.smartagri.smart_agriculture_backend.model.DataPoint;
import com.smartagri.smart_agriculture_backend.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller for serving sensor data to the frontend.
 */
@RestController
@RequestMapping("/api/data")
@CrossOrigin(origins = "http://localhost:3000") // IMPORTANT: Allows frontend access
public class DataController {

    private final DataService dataService;

    @Autowired
    public DataController(DataService dataService) {
        this.dataService = dataService;
    }

    /**
     * Endpoint to fetch the single latest sensor data point.
     * Accessible via GET /api/data/latest
     * Returns a single DataPoint object, not a List.
     */
    @GetMapping("/latest")
    public DataPoint getLatestData() {
        // Calls the new, correct method to retrieve the single latest DataPoint
        return dataService.getLatestDataPoint();
    }
}