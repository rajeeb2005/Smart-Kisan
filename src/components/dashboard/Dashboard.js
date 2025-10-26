import React, { useState, useEffect, useCallback } from 'react';
import { FaThermometerHalf, FaTint, FaCloud } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Dashboard.css';
import IrrigationSystem from './IrrigationSystem';
import NutritionAnalysis from './NutritionAnalysis';
import CropProgress from './CropProgress';
import Simulator from '../simulator/Simulator';
import CropSelector from '../crops/CropSelector';
// NOTE: Removed 'cropConditions' import as client-side simulation is removed

const Dashboard = () => {
    const { translate } = useLanguage();
    const [sensorData, setSensorData] = useState({
        soilMoisture: 0, // Initialized to 0 for safety
        temperature: 0,
        humidity: 0
    });

    const [waterLevel, setWaterLevel] = useState(80);
    const [rainChance, setRainChance] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedCrop, setSelectedCrop] = useState('wheat');

    // --- Function to Fetch Latest Sensor Data from Backend ---
    const fetchLatestData = useCallback(async (initialLoad = false) => {
        if (initialLoad) setLoading(true);

        try {
            // Using the full URL to ensure connection from frontend (3000) to backend (8080)
            const response = await fetch('http://localhost:8080/api/data/latest');

            if (response.ok) {
                const data = await response.json();

                // IMPORTANT: Correctly mapping backend 'moisture' field to frontend 'soilMoisture'
                setSensorData({
                    // Backend uses 'moisture', Frontend uses 'soilMoisture'
                    soilMoisture: data.moisture,
                    temperature: data.temperature,
                    humidity: data.humidity,
                });

                // Still simulating rain chance locally (as the backend doesn't provide it)
                setRainChance(Math.round(Math.random() * 100));

                console.log(`Data successfully loaded from backend: M:${data.moisture}, T:${data.temperature}, H:${data.humidity}`);

            } else {
                // Log a warning if the backend is accessible but returns an error status
                console.warn(`Backend fetch failed with status: ${response.status}. Using current data.`);
            }
        } catch (err) {
            // Log the error if the backend is completely unreachable (e.g., connection refused)
            console.error('Network error during data fetch. Is the Spring Boot backend running on port 8080?', err);
        } finally {
            if (initialLoad) setLoading(false);
        }
    }, []); // Empty dependencies since this function is self-contained

    // 🛑 useEffect for Continuous Data Polling
    useEffect(() => {
        // Run initial fetch immediately
        fetchLatestData(true);

        // Set up the interval to poll the backend data every 3 seconds (3000ms)
        const interval = setInterval(() => {
            fetchLatestData(false); // No need to show loading screen on subsequent polls
        }, 3000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [fetchLatestData]); // Depend on fetchLatestData (though it's stable via useCallback)

    if (loading) {
        return <div className="loading-container"><div className="loading"></div></div>;
    }

    // Defensive check before rendering sensor values
    const safeMoisture = sensorData.soilMoisture || 0;
    const safeTemperature = sensorData.temperature || 0;
    const safeHumidity = sensorData.humidity || 0;

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">{translate('dashboard.title')}</h1>
            <div className="row">
                <div className="col-md-12">
                    <CropSelector
                        selectedCrop={selectedCrop}
                        onSelectCrop={setSelectedCrop}
                    />
                </div>
            </div>

            <Simulator
                selectedCrop={selectedCrop}
                sensorData={sensorData} // Pass current live sensor data
                setWaterLevel={setWaterLevel}
            />

            <div className="row">
                {/* Soil Moisture Card */}
                <div className="col-md-4">
                    <div className="sensor-card">
                        <FaTint className="sensor-icon text-green-500" />
                        {/* Use safeMoisture for rendering */}
                        <div className="sensor-value">{safeMoisture.toFixed(2)}%</div>
                        <div className="sensor-label">{translate('dashboard.soilMoisture')}</div>
                    </div>
                </div>

                {/* Temperature Card */}
                <div className="col-md-4">
                    <div className="sensor-card">
                        <FaThermometerHalf className="sensor-icon text-red-500" />
                        {/* Use safeTemperature for rendering */}
                        <div className="sensor-value">{safeTemperature.toFixed(2)}°C</div>
                        <div className="sensor-label">{translate('dashboard.temperature')}</div>
                    </div>
                </div>

                {/* Humidity Card */}
                <div className="col-md-4">
                    <div className="sensor-card">
                        <FaCloud className="sensor-icon text-blue-500" />
                        {/* Use safeHumidity for rendering */}
                        <div className="sensor-value">{safeHumidity.toFixed(2)}%</div>
                        <div className="sensor-label">{translate('dashboard.humidity')}</div>
                    </div>
                </div>
            </div>

            <IrrigationSystem
                soilMoisture={safeMoisture}
                rainChance={rainChance}
                waterLevel={waterLevel}
                setWaterLevel={setWaterLevel}
            />

            <div className="row">
                <div className="col-md-6">
                    <NutritionAnalysis selectedCrop={selectedCrop} sensorData={sensorData} />
                </div>
                <div className="col-md-6">
                    <CropProgress selectedCrop={selectedCrop} sensorData={sensorData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;