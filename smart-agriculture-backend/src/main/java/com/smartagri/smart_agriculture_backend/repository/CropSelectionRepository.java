package com.smartagri.smart_agriculture_backend.repository;

import com.smartagri.smart_agriculture_backend.model.CropSelection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Repository for the CropSelection entity.
 * Handles persistence for the single, currently selected crop type.
 */
@Repository
public interface CropSelectionRepository extends JpaRepository<CropSelection, Long> {

    /**
     * Finds the single CropSelection record.
     * Since the ID is hardcoded to 1L in the model, this is used to fetch the current selection.
     */
    Optional<CropSelection> findById(Long id);
}
