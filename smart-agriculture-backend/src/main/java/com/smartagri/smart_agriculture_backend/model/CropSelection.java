package com.smartagri.smart_agriculture_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entity to store the single, currently selected crop type.
 * This table will only ever contain one row (with ID=1) for easy retrieval and update.
 */
@Entity
@Data
@NoArgsConstructor
public class CropSelection {

    // Using a fixed ID ensures only one row exists for the current selection.
    @Id
    private final Long id = 1L;

    private String cropType;

    public CropSelection(String cropType) {
        this.cropType = cropType;
    }

    // You must include the getter for the final ID field
    public Long getId() {
        return id;
    }
}