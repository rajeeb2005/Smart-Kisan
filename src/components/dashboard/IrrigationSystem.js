import React, { useState, useEffect } from 'react';
import { FaTint, FaFillDrip } from 'react-icons/fa';
import './IrrigationSystem.css';
import { useLanguage } from '../../context/LanguageContext';

const IrrigationSystem = ({ soilMoisture, rainChance, waterLevel, setWaterLevel }) => {
    const [isIrrigating, setIsIrrigating] = useState(false);
    const [droplets, setDroplets] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const { translate } = useLanguage();

    // --- NEW: Backend Data Saving Utility ---
    // We need to fetch the current sensor data to avoid overwriting temperature, etc.,
    // then update ONLY the waterLevel and save the entire record back.
    const saveWaterLevel = async (newWaterLevel) => {
        try {
            // 1. Fetch the latest data record from the server
            const latestResponse = await fetch('/api/data/latest');
            const latestData = latestResponse.ok ? await latestResponse.json() : {};

            // 2. Prepare the payload: use old values, update waterLevel
            const dataToSend = {
                ...latestData,
                // The most critical update:
                waterLevel: newWaterLevel,
                // Ensure required fields for DTO are present, falling back to defaults if necessary
                soilMoisture: latestData.soilMoisture || soilMoisture,
                temperature: latestData.temperature || 28,
                humidity: latestData.humidity || 65,
                selectedCrop: latestData.selectedCrop || 'wheat',
            };

            // 3. Send the complete object to the backend to save the new water level
            const saveResponse = await fetch('/api/data/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            });

            if (!saveResponse.ok) {
                console.error("Failed to save water level to backend:", saveResponse.status);
            }
        } catch (error) {
            console.error("Network error during water level save:", error);
        }
    };
    // -----------------------------------------------------

    // Check soil moisture and show alert if needed
    useEffect(() => {
        if (soilMoisture < 40 && !showAlert) {
            setShowAlert(true);
        } else if (soilMoisture >= 40 && showAlert) {
            setShowAlert(false);
        }
    }, [soilMoisture, showAlert]);

    // Handle irrigation process
    const startIrrigation = () => {
        if (waterLevel <= 10) {
            alert('Water tank is almost empty! Please refill.');
            return;
        }

        setIsIrrigating(true);

        // Create water droplet animation
        const newDroplets = [];
        for (let i = 0; i < 10; i++) {
            newDroplets.push({
                id: Date.now() + i,
                left: 10 + (i * 8) + Math.random() * 5,
                delay: i * 0.2
            });
        }
        setDroplets(newDroplets);

        let finalWaterLevel = waterLevel;
        // Decrease water level every second
        const interval = setInterval(() => {
            setWaterLevel(prev => {
                const nextLevel = Math.max(0, prev - 5);
                finalWaterLevel = nextLevel; // Track the level to save later
                return nextLevel;
            });
        }, 1000);

        // Stop irrigation after 5 seconds
        setTimeout(async () => {
            setIsIrrigating(false);
            setDroplets([]);
            clearInterval(interval);

            // 🛑 CRITICAL: Save the final reduced water level to the backend
            setWaterLevel(finalWaterLevel); // Ensure state is synced before saving
            await saveWaterLevel(finalWaterLevel);

            // OPTIONAL: Log the irrigation event (requires a new Log table/endpoint)
            console.log(`Logged irrigation start at: ${new Date().toISOString()}`);

        }, 5000);
    };

    // Refill water tank
    const refillWaterTank = async () => { // 🛑 Make async
        const newLevel = 100;
        setWaterLevel(newLevel);
        // 🛑 CRITICAL: Save the new level to the backend immediately
        await saveWaterLevel(newLevel);
    };

    // Dynamic irrigation needed (in minutes), updates with rainChance and soilMoisture!
    const calculateIrrigationNeeded = () => {
        const rainFactor = rainChance > 60 ? 0.3 : rainChance > 30 ? 0.6 : 1;
        const moistureFactor = soilMoisture < 30 ? 2 : soilMoisture < 50 ? 1.5 : 1;
        return Math.round(10 * moistureFactor * rainFactor);
    };


    return (
        <div className="irrigation-container">
            <h2 className="irrigation-title">{translate('irrigation.title')}</h2>

            {showAlert && (
                <div className="alert alert-danger">
                    <FaTint /> {translate('irrigation.alert')}
                </div>
            )}

            {/* ... rest of the JSX remains the same ... */}
            <div className="row">
                <div className="col-md-6">
                    <div className="water-tank-container">
                        <h3>{translate('irrigation.waterLevel')}</h3>
                        <div className="water-tank">
                            <div
                                className="water-level"
                                style={{ height: `${waterLevel}%` }}
                            ></div>
                            <div className="water-percentage">{waterLevel}%</div>
                        </div>
                        <button
                            className="btn btn-primary mt-3"
                            onClick={refillWaterTank}
                            disabled={waterLevel === 100}
                        >
                            {translate('irrigation.refill')}
                        </button>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="irrigation-controls">
                        <h3>{translate('irrigation.controls')}</h3>
                        <div className="irrigation-info">
                            <p>
                                <strong>{translate('irrigation.currentSoilMoisture')}:</strong> {soilMoisture}%
                            </p>
                            <p>
                                <strong>{translate('irrigation.chanceOfRain')}:</strong> {rainChance}%
                            </p>
                            <p>
                                <strong>{translate('irrigation.irrigationNeeded')}:</strong> {calculateIrrigationNeeded()} minutes
                            </p>
                        </div>

                        <button
                            className="btn btn-primary mt-3"
                            onClick={startIrrigation}
                            disabled={isIrrigating}
                        >
                            {isIrrigating ? translate('irrigation.irrigating') : translate('irrigation.start')}
                        </button>

                        {isIrrigating && (
                            <div className="irrigation-animation">
                                {droplets.map(droplet => (
                                    <div
                                        key={droplet.id}
                                        className="water-droplet"
                                        style={{
                                            left: `${droplet.left}%`,
                                            animationDelay: `${droplet.delay}s`
                                        }}
                                    ></div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IrrigationSystem;