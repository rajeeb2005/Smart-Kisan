import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './CropSelector.css';

const CropSelector = ({ selectedCrop: selectedCropProp = 'wheat', onSelectCrop }) => {
    const { translate } = useLanguage();

    // Use a local state for the currently loaded crop
    const [currentSelectedCrop, setCurrentSelectedCrop] = useState(selectedCropProp);
    const [isLoading, setIsLoading] = useState(true);

    // Use the prop if available, otherwise use local state (Handles state flow from parent)
    const selectedCrop = selectedCropProp || currentSelectedCrop;

    const crops = [
        { id: 'wheat', name: translate('crops.wheat') },
        { id: 'rice', name: translate('crops.rice') },
        { id: 'corn', name: translate('crops.corn') },
        { id: 'cotton', name: translate('crops.cotton') },
        { id: 'sugarcane', name: translate('crops.sugarcane') }
    ];

    // --- Function to send the crop selection to the dedicated backend endpoint ---
    const saveCropSelection = useCallback(async (cropId) => {
        try {
            // CRITICAL: Call the dedicated CropController endpoint
            const response = await fetch('http://localhost:8080/api/crop/select', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Payload must match the backend's expected JSON key: {"cropType": "Wheat"}
                body: JSON.stringify({ cropType: cropId })
            });

            if (response.ok) {
                console.log(`Successfully saved crop selection to backend: ${cropId}`);
            } else {
                console.error(`Failed to save crop selection. Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Network error while saving crop selection:', error);
        }
    }, []); // Dependency array is empty as the function is self-contained

    // --- NEW: Function to Fetch Latest Crop from Backend (for initial load) ---
    useEffect(() => {
        const fetchInitialCrop = async () => {
            try {
                // Fetch the latest sensor data, which now includes the 'cropType' field
                const response = await fetch('http://localhost:8080/api/data/latest');

                if (response.ok) {
                    const data = await response.json();

                    // Check for the field name used in the DataPoint entity
                    if (data && data.cropType) {
                        const serverCrop = data.cropType;
                        setCurrentSelectedCrop(serverCrop);

                        if (onSelectCrop) {
                            // Update the parent state so the whole dashboard knows the current crop
                            onSelectCrop(serverCrop);
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching latest crop data on load:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInitialCrop();
        // Since the user can change the crop, we don't want this to re-run on every state change
    }, [onSelectCrop]);


    const handleCropChange = (e) => {
        const cropId = e.target.value;

        // 1. Update local state and inform parent component
        if (onSelectCrop) {
            onSelectCrop(cropId);
        }

        // 2. Send the new crop selection to the backend
        saveCropSelection(cropId);
    };

    if (isLoading) {
        return <div className="crop-selector">{translate('loading')}...</div>;
    }

    return (
        <div className="crop-selector">
            <h3>{translate('crops.title')}</h3>
            <div className="crop-select-container">
                <select
                    value={selectedCrop}
                    onChange={handleCropChange}
                    className="crop-select"
                >
                    {crops.map(crop => (
                        <option key={crop.id} value={crop.id}>
                            {crop.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="selected-crop-display">
                <div className={`crop-icon ${selectedCrop}`}></div>
                <span>{crops.find(c => c.id === selectedCrop)?.name || selectedCrop}</span>
            </div>
        </div>
    );
};

export default CropSelector;