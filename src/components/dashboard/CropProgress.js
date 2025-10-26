import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './CropProgress.css';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CropProgress = ({ selectedCrop = 'wheat', sensorData = {} }) => {
  // Create demo progress data influenced by crop optimal ranges
  const crop = require('../../data/cropConditions').default[selectedCrop] || require('../../data/cropConditions').default.wheat;

  const labels = ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'];
  // Simulate growth curve shaped by crop's preferred temperature (warmer climates -> faster growth)
  const growthBase = (crop.temperature.optimal[0] + crop.temperature.optimal[1]) / 2;
  const speedFactor = Math.max(0.6, Math.min(1.4, (growthBase / 25)));
  const growthData = labels.map((_, i) => Math.min(100, Math.round(((i + 1) / labels.length) * 100 * speedFactor - (Math.random() * 6))));
  const healthData = labels.map(() => Math.max(60, 90 - Math.round(Math.random() * 20)));

  const progressData = {
    labels,
    datasets: [
      {
        label: `${crop.name} Growth (%)`,
        data: growthData,
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Crop Health',
        data: healthData,
        borderColor: '#FFC107',
        backgroundColor: 'rgba(255, 193, 7, 0.1)',
        tension: 0.4,
        fill: false
      }
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Crop Progress Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Progress (%)'
        }
      }
    }
  };
  
  // Current crop status (simple demo values)
  const cropStatus = {
    name: crop.name,
    stage: 'Vegetative Growth',
    daysPlanted: 30,
    estimatedHarvest: '45 days remaining',
    healthStatus: healthData[healthData.length - 1] > 80 ? 'Good' : 'Fair',
    issues: sensorData.soilMoisture && sensorData.soilMoisture < crop.soilMoisture.optimal[0] ? ['Low soil moisture detected'] : ['No major issues']
  };
  
  const { translate } = useLanguage();

  return (
    <div className="crop-progress-container">
      <h2 className="crop-progress-title">{translate('crop.progress.title')}</h2>
      
      <div className="crop-info">
        <div className="crop-name">{cropStatus.name}</div>
        <div className="crop-stage">{translate('crop.stage')}: {cropStatus.stage}</div>
        <div className="crop-days">{translate('crop.daysPlanted')}: {cropStatus.daysPlanted}</div>
        <div className="crop-harvest">{translate('crop.estimatedHarvest')}: {cropStatus.estimatedHarvest}</div>
      </div>
      
      <div className="chart-container">
        <Line data={progressData} options={options} />
      </div>
      
      <div className="crop-health-status">
        <h3>{translate('crop.currentHealthStatus')}: <span className={`status-${cropStatus.healthStatus.toLowerCase()}`}>{translate(`status.${cropStatus.healthStatus.toLowerCase()}`) || cropStatus.healthStatus}</span></h3>
        <ul className="crop-issues">
          {cropStatus.issues.map((issue, index) => (
            <li key={index}>{issue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CropProgress;