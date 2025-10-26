package com.smartagri.smart_agriculture_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * Main application class for the Spring Boot backend.
 * The @EnableScheduling annotation is required to run the automated
 * data generation in the DataService class.
 */
@SpringBootApplication
@EnableScheduling // Enables the use of @Scheduled in DataService
public class SmartAgricultureBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SmartAgricultureBackendApplication.class, args);
    }
}
