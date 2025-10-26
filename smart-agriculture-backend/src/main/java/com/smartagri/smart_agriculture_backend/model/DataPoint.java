package com.smartagri.smart_agriculture_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents a single reading of sensor data (moisture, temperature, humidity)
 * saved to the 'data_point' table in the MySQL database, including the selected crop.
 */
@Entity
@Data
@NoArgsConstructor
public class DataPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double moisture; // Soil moisture percentage
    private double temperature; // Temperature in Celsius
    private double humidity; // Air humidity percentage
    private String cropType; // NEW FIELD: To store the current crop selection

    private LocalDateTime timestamp; // Time the data was recorded

    // --- UPDATED CONSTRUCTOR TO INCLUDE CROP TYPE ---
    public DataPoint(double moisture, double temperature, double humidity, String cropType) {
        this.moisture = moisture;
        this.temperature = temperature;
        this.humidity = humidity;
        this.cropType = cropType; // Assign the new field
        this.timestamp = LocalDateTime.now();
    }
}
