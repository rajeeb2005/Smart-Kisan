package com.smartagri.smart_agriculture_backend.controller;

import com.smartagri.smart_agriculture_backend.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * REST Controller dedicated to handling user-driven actions, specifically
 * receiving the currently selected crop type from the frontend.
 */
@RestController
@RequestMapping("/api/crop") // Dedicated path for crop-related actions
@CrossOrigin(origins = "http://localhost:3000") // Allows frontend access
public class CropController {

    private final DataService dataService;

    @Autowired
    public CropController(DataService dataService) {
        this.dataService = dataService;
    }

    /**
     * Endpoint to receive the crop type selected by the user.
     * Accessible via POST /api/crop/select
     * The request body should be a JSON object like: {"cropType": "Rice"}
     */
    @PostMapping("/select")
    public ResponseEntity<String> saveCropSelection(@RequestBody Map<String, String> payload) {
        String cropType = payload.get("cropType");

        if (cropType == null || cropType.isEmpty()) {
            return ResponseEntity.badRequest().body("Crop type is required.");
        }

        // The service layer handles saving the single CropSelection record
        dataService.saveCropSelection(cropType);

        return ResponseEntity.ok("Crop selection updated to: " + cropType);
    }
}
