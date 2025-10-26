// Crop-specific environmental conditions data
const cropConditions = {
  wheat: {
    name: "Wheat",
    temperature: {
      min: 10,
      optimal: [10, 15],
      max: 25,
      description: "Wheat requires a cool climate with temperatures around 10-15°C"
    },
    soilMoisture: {
      min: 40,
      optimal: [50, 70],
      max: 80,
      description: "Moderate soil moisture is ideal for wheat"
    },
    humidity: {
      min: 40,
      optimal: [50, 70],
      max: 80,
      description: "Moderate humidity levels are best for wheat growth"
    }
  },
  rice: {
    name: "Rice",
    temperature: {
      min: 20,
      optimal: [25, 35],
      max: 40,
      description: "Rice needs a hot climate with temperatures above 25°C"
    },
    soilMoisture: {
      min: 70,
      optimal: [80, 90],
      max: 95,
      description: "Rice requires high soil moisture, often flooded conditions"
    },
    humidity: {
      min: 60,
      optimal: [70, 85],
      max: 95,
      description: "High humidity is ideal for rice cultivation"
    }
  },
  corn: {
    name: "Corn",
    temperature: {
      min: 10,
      optimal: [18, 27],
      max: 35,
      description: "Corn grows best between 18-27°C, slows below 15°C, and suffers above 35°C"
    },
    soilMoisture: {
      min: 40,
      optimal: [60, 80],
      max: 85,
      description: "Optimal soil moisture is 60-80%, critical during tasseling and silking"
    },
    humidity: {
      min: 40,
      optimal: [50, 70],
      max: 80,
      description: "Ideal humidity is 50-70%, high humidity increases disease risk"
    }
  },
  cotton: {
    name: "Cotton",
    temperature: {
      min: 18,
      optimal: [21, 30],
      max: 35,
      description: "Cotton thrives in 21-30°C, struggles below 15°C and above 35°C"
    },
    soilMoisture: {
      min: 40,
      optimal: [60, 75],
      max: 80,
      description: "Optimal soil moisture is 60-75%, critical during flowering and boll formation"
    },
    humidity: {
      min: 40,
      optimal: [50, 60],
      max: 70,
      description: "Ideal humidity is 50-60%, high humidity increases disease risk"
    }
  },
  sugarcane: {
    name: "Sugarcane",
    temperature: {
      min: 18,
      optimal: [20, 35],
      max: 38,
      description: "Sugarcane grows best between 20-35°C, ideal for tillering is 25-30°C"
    },
    soilMoisture: {
      min: 50,
      optimal: [70, 80],
      max: 85,
      description: "Optimal soil moisture is 70-80%, critical during tillering and elongation"
    },
    humidity: {
      min: 45,
      optimal: [60, 80],
      max: 85,
      description: "Moderate to high humidity is ideal for sugarcane growth"
    }
  }
};

export default cropConditions;