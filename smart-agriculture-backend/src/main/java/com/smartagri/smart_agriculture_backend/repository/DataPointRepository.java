package com.smartagri.smart_agriculture_backend.repository;

import com.smartagri.smart_agriculture_backend.model.DataPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for DataPoint entity.
 * Handles automatic CRUD operations.
 */
@Repository
public interface DataPointRepository extends JpaRepository<DataPoint, Long> {

    /**
     * Custom query method to find the single latest data point.
     * JpaRepository parses the method name:
     * - 'findTop' ensures only 1 result is returned.
     * - 'OrderByTimestampDesc' orders by the timestamp descending (most recent first).
     */
    DataPoint findTopByOrderByTimestampDesc();
}