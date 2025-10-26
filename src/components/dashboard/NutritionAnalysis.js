import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './NutritionAnalysis.css';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const NutritionAnalysis = ({ selectedCrop = 'wheat', sensorData = {} }) => {
  // Use cropConditions to influence nutrition baselines
  const cropConditions = require('../../data/cropConditions').default;
  const crop = cropConditions[selectedCrop] || cropConditions.wheat;

  // Map crop to slight variations in optimal nutrient levels (demo heuristics)
  const baseOptimal = {
    Nitrogen: 75,
    Phosphorus: 60,
    Potassium: 85,
    Calcium: 70,
    Magnesium: 75
  };

  // Adjust optimal levels slightly per crop (demo-only): rice needs slightly more N and K
  const cropAdjust = {
    wheat: { Nitrogen: -5 },
    rice: { Nitrogen: 5, Potassium: 5 },
    corn: { Nitrogen: 3, Phosphorus: 0 },
    cotton: { Potassium: -3 },
    sugarcane: { Nitrogen: 7, Potassium: 3 }
  };

  const optimalLevels = Object.fromEntries(Object.entries(baseOptimal).map(([k, v]) => {
    const adj = (cropAdjust[selectedCrop] && cropAdjust[selectedCrop][k]) || 0;
    return [k, Math.max(40, Math.min(95, v + adj))];
  }));

  // Current (demo) levels: around optimal minus some random small delta
  const currentLevels = Object.keys(optimalLevels).map(k => Math.max(30, Math.min(95, Math.round(optimalLevels[k] - (Math.random() * 20)))));

  const nutritionData = {
    labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'Calcium', 'Magnesium'],
    datasets: [
      {
        label: 'Current Level',
        data: currentLevels,
        backgroundColor: '#4CAF50',
      },
      {
        label: 'Optimal Level',
        data: Object.values(optimalLevels),
        backgroundColor: '#8BC34A',
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
        text: 'Soil Nutrition Levels',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Level (%)'
        }
      }
    }
  };

  // Fertilizer recommendations based on nutrition levels (demo heuristics)
  const getFertilizerRecommendations = () => {
    const recommendations = [];
    const current = nutritionData.datasets[0].data;
    const optimal = nutritionData.datasets[1].data;
    const nutrients = nutritionData.labels;

    nutrients.forEach((nutrient, idx) => {
      if (current[idx] < optimal[idx]) {
        let fertilizer = 'General NPK mix';
        let application = 'Follow label instructions';
        if (nutrient === 'Nitrogen') {
          fertilizer = 'Urea or Ammonium Sulfate';
          application = '2-3 kg per acre';
        }
        if (nutrient === 'Phosphorus') {
          fertilizer = 'Single Super Phosphate';
          application = '4-5 kg per acre';
        }
        if (nutrient === 'Potassium') {
          fertilizer = 'Muriate of Potash';
          application = '1-2 kg per acre';
        }

        recommendations.push({
          nutrient,
          fertilizer,
          application
        });
      }
    });

    return recommendations;
  };

  const recommendations = getFertilizerRecommendations();

  const { translate } = useLanguage();

  return (
    <div className="nutrition-container">
      <h2 className="nutrition-title">{translate('nutrition.title')}</h2>

      <div className="chart-container">
        <Bar data={nutritionData} options={options} />
      </div>

      {recommendations.length > 0 && (
        <div className="recommendations-container">
          <h3>{translate('nutrition.recommendations')}</h3>
          <ul className="recommendations-list">
            {recommendations.map((rec, index) => (
              <li key={index} className="recommendation-item">
                <div className="recommendation-nutrient">{rec.nutrient} Deficiency</div>
                <div className="recommendation-fertilizer">Apply {rec.fertilizer}</div>
                <div className="recommendation-application">Dosage: {rec.application}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NutritionAnalysis;