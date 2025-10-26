// Translation dictionary for the app. Keys used across components.
// Keep the structure: { en: { ... }, hi: { ... }, ta: { ... } }

const translations = {
  en: {
    // Navbar / layout
    home: 'Home',
    dashboard: 'Dashboard',
    about: 'About',
    language: 'Language',

    // Demo mode
    demoMode: 'Demo Mode',
    demoEnabled: 'Demo enabled',
    demoDisabled: 'Demo disabled',
    startDemo: 'Start Demo',
    stopDemo: 'Stop Demo',

    // Crop selector
    selectCrop: 'Select Crop',

    // Sensor cards
    temperature: 'Temperature (°C)',
    humidity: 'Humidity (%)',
    soilMoisture: 'Soil moisture (%)',
    statusOptimal: 'Optimal',
    statusWarning: 'Warning',

    // Crop progress
    cropProgressTitle: 'Crop Progress',
    growthStage: 'Growth Stage',
    healthIndex: 'Health Index',

    // Nutrition analysis
    nutritionTitle: 'Nutrition Analysis',
    nutrient: 'Nutrient',
    currentLevel: 'Current',
    optimalLevel: 'Optimal',
    fertilizerRecommendations: 'Fertilizer Recommendations',
    nitrogen: 'Nitrogen (N)',
    phosphorus: 'Phosphorus (P)',
    potassium: 'Potassium (K)',

    // Irrigation
    irrigationTitle: 'Irrigation System',
    startIrrigation: 'Start Irrigation',
    stopIrrigation: 'Stop Irrigation',
    refillTank: 'Refill Tank',
    irrigationOn: 'Irrigation ON',
    irrigationOff: 'Irrigation OFF',
    lowSoilMoistureAlert: 'Soil moisture low — consider irrigation',

    // Simulator
    simulatorTitle: 'Simulator',
    runSimulation: 'Run Simulation',
    simulationResults: 'Simulation Results',

    // About
    aboutTitle: 'About This Project',
    aboutDescription: 'Smart Agriculture — demo app to illustrate crop monitoring and suggestions.',
    acknowledgementsTitle: 'Acknowledgements',

    // Generic
    apply: 'Apply',
    cancel: 'Cancel',
  // Dashboard / cards and titles (dot-keys)
  'dashboard.title': 'Dashboard',
  'dashboard.soilMoisture': 'Soil moisture',
  'dashboard.temperature': 'Temperature',
  'dashboard.humidity': 'Humidity',
  'dashboard.weather': 'Weather',
  'dashboard.currentWeather': 'Current',
  'dashboard.today': 'Today',
  'dashboard.tomorrow': 'Tomorrow',
  'dashboard.lowMoisture': 'Low soil moisture',
  'dashboard.irrigationNeeded': 'Irrigation needed',
  'dashboard.moistureOptimal': 'Moisture optimal',

  // Demo
  'demo.title': 'Demo',
  'demo.toggle': 'Toggle Demo',
  'demo.on': 'demo.on',
  'demo.off': 'demo.off',
  'demo.active': 'Demo Mode Active - Using Simulated Data',

  // Crops
  'crops.title': 'Crops',
  'crops.wheat': 'Wheat',
  'crops.rice': 'Rice',
  'crops.corn': 'Corn',
  'crops.cotton': 'Cotton',
  'crops.sugarcane': 'Sugarcane',

  // Crop progress (dot keys)
  'crop.progress.title': 'Crop Progress',
  'crop.stage': 'Stage',
  'crop.daysPlanted': 'Days planted',
  'crop.estimatedHarvest': 'Estimated harvest',
  'crop.currentHealthStatus': 'Current health status',

  // Status values
  'status.good': 'Good',
  'status.fair': 'Fair',
  'status.poor': 'Poor',

  // Nutrition
  'nutrition.title': 'Nutrition Analysis',
  'nutrition.recommendations': 'Recommendations',

  // Simulator dot-keys
  'simulator.title': 'Simulator',
  'sim.intro': 'Run a short simulation using current or demo data.',
  'sim.run': 'Run Simulation',
  'sim.resultsTitle': 'Simulation Results',
  'sim.waterApplied': 'Water applied (L)',
  'sim.fertilizerApplied': 'Fertilizer applied (kg)',
  'sim.runAgain': 'Run Again',
  'sim.steps.detect': 'Detect sensors',
  'sim.steps.calculateIrrigation': 'Calculate irrigation',
  'sim.steps.determineFertilizer': 'Determine fertilizer',
  'sim.steps.apply': 'Apply recommendations',

  // About page
  'about.title': 'About',
  'about.subtitle': 'Project overview',
  'about.overviewTitle': 'Overview',
  'about.overviewText': 'This project demonstrates a simple smart agriculture dashboard.',
  'about.technologiesTitle': 'Technologies',
  'about.acknowledgementsTitle': 'Acknowledgements',
  'about.acknowledgementsText': 'Thanks to contributors and open-source projects.',
  'about.footerLine1': 'Built with React and Chart.js',
  'about.footerLine2': 'Demo only — not for production use',

    // About page feature strings
    'about.features.realTime.title': 'உண்மையான நேர மேற்பார்வை',
    'about.features.realTime.desc': 'IoT சென்சார்கள் மூலம் மண் ஈரப்பதம், வெப்பநிலை மற்றும் ஈரபதத்தை கண்காணிக்கவும்',
    'about.features.irrigation.title': 'சமர்த்தான நீர்ப்பாசனம்',
    'about.features.irrigation.desc': 'மண் நிலை மற்றும் வானிலை முன்னறிவிப்பின் அடிப்படையில் நீர் பயன்பாட்டை சிறப்புபடுத்துங்கள்',
    'about.features.pest.title': 'பூச்சி மேலாண்மை',
    'about.features.pest.desc': 'பயிர் வகையின் அடிப்படையில் பூச்சி ஒழிப்புக்கான நேரனான பரிந்துரைகளை பெறுங்கள்',
    'about.features.resources.title': 'விவசாய வளங்கள்',
    'about.features.resources.desc': 'விவசாயக் குறிப்புகள், அரசு திட்டங்கள் மற்றும் நிபுணர் ஆலோசனைகளைப் பெறுங்கள்',
  // About page feature strings
  'about.features.realTime.title': 'Real-time Monitoring',
  'about.features.realTime.desc': 'Track soil moisture, temperature, and humidity with IoT sensors',
  'about.features.irrigation.title': 'Smart Irrigation',
  'about.features.irrigation.desc': 'Optimize water usage based on soil conditions and weather forecasts',
  'about.features.pest.title': 'Pest Management',
  'about.features.pest.desc': 'Get timely recommendations for pest control based on crop type',
  'about.features.resources.title': 'Agricultural Resources',
  'about.features.resources.desc': 'Access farming tips, government schemes, and expert consultation',

  // Manual input
  'manual.title': 'Manual Input',
  'manual.instructions': 'Enter manual sensor values to override demo readings.',
  'manual.soilMoisture': 'Soil moisture (%)',
  'manual.temperature': 'Temperature (°C)',
  'manual.humidity': 'Humidity (%)',
  'manual.submit': 'Submit',
  'manual.reset': 'Reset',

  // Navbar keys
  'nav.dashboard': 'Dashboard',
  'nav.pesticides': 'Pesticides',
  'nav.moreInfo': 'More Info',
  'nav.about': 'About',
  'nav.logout': 'Logout',

  // Irrigation keys
  'irrigation.title': 'Irrigation System',
  'irrigation.alert': 'Irrigation required — soil moisture is low',
  'irrigation.waterLevel': 'Water Level',
  'irrigation.refill': 'Refill Tank',
  'irrigation.controls': 'Controls',
  'irrigation.currentSoilMoisture': 'Current soil moisture',
  'irrigation.chanceOfRain': 'Chance of rain',
  'irrigation.irrigationNeeded': 'Irrigation needed (min)',
  'irrigation.start': 'Start Irrigation',
  'irrigation.irrigating': 'Irrigating...',
  // Crop-specific descriptions (used in Dashboard alerts)
  'crop.wheat.temperature.description': 'Wheat requires a cool climate with temperatures around 10-15°C',
  'crop.wheat.soilMoisture.description': 'Moderate soil moisture is ideal for wheat',
  'crop.wheat.humidity.description': 'Moderate humidity levels are best for wheat growth',
  'crop.rice.temperature.description': 'Rice needs a hot climate with temperatures above 25°C',
  'crop.rice.soilMoisture.description': 'Rice requires high soil moisture, often flooded conditions',
  'crop.rice.humidity.description': 'High humidity is ideal for rice cultivation',
  'crop.corn.temperature.description': 'Corn grows best between 18-27°C, slows below 15°C, and suffers above 35°C',
  'crop.corn.soilMoisture.description': 'Optimal soil moisture is 60-80%, critical during tasseling and silking',
  'crop.corn.humidity.description': 'Ideal humidity is 50-70%, high humidity increases disease risk',
  'crop.cotton.temperature.description': 'Cotton thrives in 21-30°C, struggles below 15°C and above 35°C',
  'crop.cotton.soilMoisture.description': 'Optimal soil moisture is 60-75%, critical during flowering and boll formation',
  'crop.cotton.humidity.description': 'Ideal humidity is 50-60%, high humidity increases disease risk',
  'crop.sugarcane.temperature.description': 'Sugarcane grows best between 20-35°C, ideal for tillering is 25-30°C',
  'crop.sugarcane.soilMoisture.description': 'Optimal soil moisture is 70-80%, critical during tillering and elongation',
  'crop.sugarcane.humidity.description': 'Moderate to high humidity is ideal for sugarcane growth',
  // Template for optimal humidity message
  'dashboard.optimalHumidityFor': 'Optimal humidity for {crop}',
  },

  hi: {
    home: 'होम',
    dashboard: 'डैशबोर्ड',
    about: 'परिचय',
    language: 'भाषा',

    demoMode: 'डेमो मोड',
    demoEnabled: 'डेमो चालू है',
    demoDisabled: 'डेमो बंद है',
    startDemo: 'डेमो शुरू करें',
    stopDemo: 'डेमो बंद करें',

    selectCrop: 'फसल चुनें',

    temperature: 'तापमान (°C)',
    humidity: 'नमी (%)',
    soilMoisture: 'मिट्टी की नमी (%)',
    statusOptimal: 'इष्टतम',
    statusWarning: 'चेतावनी',

    cropProgressTitle: 'फसल प्रगति',
    growthStage: 'विकास चरण',
    healthIndex: 'स्वास्थ्य सूचकांक',

    nutritionTitle: 'पोषण विश्लेषण',
    nutrient: 'पोषक तत्व',
    currentLevel: 'वर्तमान',
    optimalLevel: 'इष्टतम',
    fertilizerRecommendations: 'उर्वरक सिफारिशें',
    nitrogen: 'नाइट्रोजन (N)',
    phosphorus: 'फॉस्फोरस (P)',
    potassium: 'पोटैशियम (K)',

    irrigationTitle: 'सिंचाई प्रणाली',
    startIrrigation: 'सिंचाई शुरू करें',
    stopIrrigation: 'सिंचाई बंद करें',
    refillTank: 'टैंक भरें',
    irrigationOn: 'सिंचाई चालू',
    irrigationOff: 'सिंचाई बंद',
    lowSoilMoistureAlert: 'मिट्टी की नमी कम है — सिंचाई पर विचार करें',

    simulatorTitle: 'सिम्युलेटर',
    runSimulation: 'सिमुलेशन चलाएं',
    simulationResults: 'सिमुलेशन परिणाम',

    aboutTitle: 'परियोजना के बारे में',
    aboutDescription: 'स्मार्ट एग्रीकल्चर — फसल निगरानी और सुझावों का डेमो ऐप।',
    acknowledgementsTitle: 'आभार',

    apply: 'लागू करें',
    cancel: 'रद्द करें',
  // Dashboard / dot-keys
  'dashboard.title': 'डैशबोर्ड',
  'dashboard.soilMoisture': 'मिट्टी की नमी',
  'dashboard.temperature': 'तापमान',
  'dashboard.humidity': 'नमी',
  'dashboard.weather': 'मौसम',
  'dashboard.currentWeather': 'वर्तमान',
  'dashboard.today': 'आज',
  'dashboard.tomorrow': 'कल',
  'dashboard.lowMoisture': 'मिट्टी में कम नमी',
  'dashboard.irrigationNeeded': 'सिंचाई आवश्यक',
  'dashboard.moistureOptimal': 'नमी इष्टतम',

  // Demo
  'demo.title': 'डेमो',
  'demo.toggle': 'डेमो टॉगल',
  'demo.on': 'चालू',
  'demo.off': 'बंद',
  'demo.active': 'डेमो मोड सक्रिय - अनुकरणीय डेटा का उपयोग',

  // Crops
  'crops.title': 'फसलें',
  'crops.wheat': 'गेहूं',
  'crops.rice': 'चावल',
  'crops.corn': 'मक्का',
  'crops.cotton': 'कॉटन',
  'crops.sugarcane': 'गन्ना',

  // Crop progress
  'crop.progress.title': 'फसल की प्रगति',
  'crop.stage': 'चरण',
  'crop.daysPlanted': 'रोपण के दिन',
  'crop.estimatedHarvest': 'अनुमानित कटनी',
  'crop.currentHealthStatus': 'वर्तमान स्वास्थ्य स्थिति',

  'status.good': 'अच्छा',
  'status.fair': 'ठीक',
  'status.poor': 'खराब',

  // Nutrition
  'nutrition.title': 'पोषण विश्लेषण',
  'nutrition.recommendations': 'सिफारिशें',

  // Simulator
  'simulator.title': 'सिम्युलेटर',
  'sim.intro': 'वर्तमान या डेमो डेटा का उपयोग करके संक्षिप्त सिमुलेशन चलाएं।',
  'sim.run': 'सिमुलेशन चलाएं',
  'sim.resultsTitle': 'सिमुलेशन परिणाम',
  'sim.waterApplied': 'लागू किया गया पानी (L)',
  'sim.fertilizerApplied': 'लागू किया गया उर्वरक (kg)',
  'sim.runAgain': 'पुनः चलाएं',
  'sim.steps.detect': 'सेंसर पहचानें',
  'sim.steps.calculateIrrigation': 'सिंचाई की गणना करें',
  'sim.steps.determineFertilizer': 'उर्वरक निर्धारित करें',
  'sim.steps.apply': 'सिफारिशें लागू करें',

  // About
  'about.title': 'परियोजना के बारे में',
  'about.subtitle': 'परियोजना का अवलोकन',
  'about.overviewTitle': 'अवलोकन',
  'about.overviewText': 'यह परियोजना एक सरल स्मार्ट एग्रीकल्चर डैशबोर्ड को प्रदर्शित करती है।',
  'about.technologiesTitle': 'प्रौद्योगिकियाँ',
  'about.acknowledgementsTitle': 'आभार',
  'about.acknowledgementsText': 'योगदान करने वालों और ओपन-सोर्स परियोजनाओं का धन्यवाद।',
  'about.footerLine1': 'React और Chart.js का उपयोग करके बनाया गया',
  'about.footerLine2': 'केवल डेमो — उत्पादन के लिए नहीं',

  // About page feature strings
  'about.features.realTime.title': 'रीयल-टाइम मॉनिटरिंग',
  'about.features.realTime.desc': 'IoT सेंसर के साथ मिट्टी की नमी, तापमान और आर्द्रता ट्रैक करें',
  'about.features.irrigation.title': 'स्मार्ट सिंचाई',
  'about.features.irrigation.desc': 'मिट्टी की स्थिति और मौसम की भविष्यवाणियों के आधार पर पानी का उपयोग अनुकूलित करें',
  'about.features.pest.title': 'कीट प्रबंधन',
  'about.features.pest.desc': 'फसल के प्रकार के आधार पर कीट नियंत्रण के लिए समय पर सिफारिशें प्राप्त करें',
  'about.features.resources.title': 'कृषि संसाधन',
  'about.features.resources.desc': 'खेती युक्तियाँ, सरकारी योजनाएँ और विशेषज्ञ परामर्श प्राप्त करें',

  // Manual
  'manual.title': 'मैनुअल इनपुट',
  'manual.instructions': 'डेमो रीडिंग को ओवरराइड करने के लिए मैनुअल सेंसर मान दर्ज करें।',
  'manual.soilMoisture': 'मिट्टी की नमी (%)',
  'manual.temperature': 'तापमान (°C)',
  'manual.humidity': 'नमी (%)',
  'manual.submit': 'सबमिट',
  'manual.reset': 'रीसेट',

  // Navbar
  'nav.dashboard': 'डैशबोर्ड',
  'nav.pesticides': 'कीटनाशक',
  'nav.moreInfo': 'अधिक जानकारी',
  'nav.about': 'परिचय',
  'nav.logout': 'लॉग आउट',

  // Irrigation
  'irrigation.title': 'सिंचाई प्रणाली',
  'irrigation.alert': 'सिंचाई आवश्यक — मिट्टी की नमी कम है',
  'irrigation.waterLevel': 'पानी का स्तर',
  'irrigation.refill': 'टैंक भरें',
  'irrigation.controls': 'नियंत्रण',
  'irrigation.currentSoilMoisture': 'वर्तमान मिट्टी की नमी',
  'irrigation.chanceOfRain': 'बारिश की संभावना',
  'irrigation.irrigationNeeded': 'सिंचाई आवश्यक (मिनट)',
  'irrigation.start': 'सिंचाई शुरू करें',
  'irrigation.irrigating': 'सिंचाई हो रही है...',
  // Crop-specific descriptions (hi)
  'crop.wheat.temperature.description': 'गेहूं को 10-15°C के आसपास ठंडा जलवायु चाहिए',
  'crop.wheat.soilMoisture.description': 'गेहूँ के लिए मध्यम मिट्टी की नमी आदर्श है',
  'crop.wheat.humidity.description': 'गेहूँ की वृद्धि के लिए मध्यम आर्द्रता स्तर बेहतर हैं',
  'crop.rice.temperature.description': 'चावल को 25°C से ऊपर गर्म जलवायु की आवश्यकता होती है',
  'crop.rice.soilMoisture.description': 'चावल को उच्च मिट्टी की नमी की आवश्यकता होती है, अक्सर डूबे हुए स्थितियाँ',
  'crop.rice.humidity.description': 'चावल की खेती के लिए उच्च आर्द्रता आदर्श है',
  'crop.corn.temperature.description': 'मक्का 18-27°C के बीच सबसे अच्छा बढ़ता है, 15°C से नीचे धीमा होता है, और 35°C से ऊपर नुकसान होता है',
  'crop.corn.soilMoisture.description': 'उत्तम मिट्टी की नमी 60-80% है, टैस्लिंग और सिल्किंग के दौरान महत्वपूर्ण है',
  'crop.corn.humidity.description': 'उत्तम आर्द्रता 50-70% है, उच्च आर्द्रता रोग जोखिम बढ़ाती है',
  'crop.cotton.temperature.description': 'कॉटन 21-30°C में पनपता है, 15°C से नीचे और 35°C से ऊपर संघर्ष करता है',
  'crop.cotton.soilMoisture.description': 'विकलन और बॉल गठन के दौरान 60-75% आदर्श मिट्टी की नमी है',
  'crop.cotton.humidity.description': 'उत्तम आर्द्रता 50-60% है, उच्च आर्द्रता रोग जोखिम बढ़ाती है',
  'crop.sugarcane.temperature.description': 'गन्ना 20-35°C के बीच सबसे अच्छा बढ़ता है, टिलरिंग के लिए 25-30°C आदर्श है',
  'crop.sugarcane.soilMoisture.description': '70-80% आदर्श मिट्टी की नमी है, टिलरिंग और विस्तार के दौरान महत्वपूर्ण है',
  'crop.sugarcane.humidity.description': 'मध्यम से उच्च आर्द्रता गन्ना की वृद्धि के लिए आदर्श है',
  'dashboard.optimalHumidityFor': 'के लिए इष्टतम आर्द्रता {crop}',
  },

  ta: {
    home: 'முகப்பு',
    dashboard: 'டேஷ்போர்ட்',
    about: 'பற்றி',
    language: 'மொழி',

    demoMode: 'டெமோ மோட்',
    demoEnabled: 'டெமோ இயங்குகிறது',
    demoDisabled: 'டெமோ நிறுத்தப்பட்டது',
    startDemo: 'டெமோ துவங்கவும்',
    stopDemo: 'டெமோ நிறுத்தவும்',

    selectCrop: 'பயிர் தேர்வு செய்யவும்',

    temperature: 'தாபநிலை (°C)',
    humidity: 'ஈரப்பதம் (%)',
    soilMoisture: 'மண் ஈரப்பதம் (%)',
    statusOptimal: 'உகந்த நிலை',
    statusWarning: 'எச்சரிக்கை',

    cropProgressTitle: 'பயிர் முன்னேற்றம்',
    growthStage: 'வளர்ச்சி நிலை',
    healthIndex: 'ஆரோக்கிய அங்கம்',

    nutritionTitle: 'உணவு சத்துப் பகுப்பாய்வு',
    nutrient: 'சத்து',
    currentLevel: 'தற்போது',
    optimalLevel: 'இல்லைப்படுத்தப்பட்ட',
    fertilizerRecommendations: 'உர பரிந்துரைகள்',
    nitrogen: 'நைட்ரஜன் (N)',
    phosphorus: 'பாஸ்பரஸ் (P)',
    potassium: 'பொட்டாசியம் (K)',

    irrigationTitle: 'சேதிய நீர் முறை',
    startIrrigation: 'நீர்ப்பாசனம் தொடங்கு',
    stopIrrigation: 'நீர்ப்பாசனம் நிறுத்து',
    refillTank: 'டேங்க் நிரப்பவும்',
    irrigationOn: 'நீர்ப்பாசனம் இயங்குகிறது',
    irrigationOff: 'நீர்ப்பாசனம் நிறுத்தப்பட்டது',
    lowSoilMoistureAlert: 'மண் ஈரமின்மை குறைவாக உள்ளது — நீர் பாசம் பரிசீலிக்கவும்',

    simulatorTitle: 'சிமுலேட்டர்',
    runSimulation: 'சிமுலேஷன் இயக்கவும்',
    simulationResults: 'சிமுலேஷன் முடிவுகள்',

    aboutTitle: 'இந்த திட்டத்தைப் பற்றி',
    aboutDescription: 'ஸ்மார்ட் விவசாயம் — பயிர் கண்காணிப்பு மற்றும் பரிந்துரைகளுக்கான டெமோ செயலி.',
    acknowledgementsTitle: 'நன்றி',

    apply: 'மூலப்படுத்து',
    cancel: 'ரத்து செய்',
  // Dashboard / dot-keys
  'dashboard.title': 'டேஷ்போர்ட்',
  'dashboard.soilMoisture': 'மண் ஈரப்பதம்',
  'dashboard.temperature': 'தापநிலை',
  'dashboard.humidity': 'ஈரப்பதம்',
  'dashboard.weather': 'வானிலை',
  'dashboard.currentWeather': 'தற்போது',
  'dashboard.today': 'இன்று',
  'dashboard.tomorrow': 'நாளை',
  'dashboard.lowMoisture': 'மண்ணில் ஈரப்பதம் குறைவு',
  'dashboard.irrigationNeeded': 'நீர்ப்பாசனம் தேவை',
  'dashboard.moistureOptimal': 'ஈரப்பதம் நல்ல நிலை',

  // Demo
  'demo.title': 'டெமோ',
  'demo.toggle': 'டெமோ ஆச்சரியம்',
  'demo.on': 'செயல்பாட்டில்',
  'demo.off': 'நிறுத்தப்பட்டது',
  'demo.active': 'டெமோ மோட் செயலில் - ஒப்பிய தகவலைப் பயன்படுத்துகிறது',

  // Crops
  'crops.title': 'பயிர்கள்',
  'crops.wheat': 'கோதுமை',
  'crops.rice': 'அரிசி',
  'crops.corn': 'சோளம்',
  'crops.cotton': 'பருத்தி',
  'crops.sugarcane': 'தேன்கீழம்',

  // Crop progress
  'crop.progress.title': 'பயிர் முன்னேற்றம்',
  'crop.stage': 'நிலை',
  'crop.daysPlanted': 'நாட்கள் விளைவு',
  'crop.estimatedHarvest': 'கடந்த நேரத்தில் அறுவடை',
  'crop.currentHealthStatus': 'தற்போதைய ஆரோக்கிய நிலை',

  'status.good': 'நன்று',
  'status.fair': 'சராசரி',
  'status.poor': 'மலம்',

  // Nutrition
  'nutrition.title': 'சத்து பகுப்பாய்வு',
  'nutrition.recommendations': 'பரிந்துரைகள்',

  // Simulator
  'simulator.title': 'சிமுலேட்டர்',
  'sim.intro': 'தற்போதைய அல்லது டெமோ தரவைப் பயன்படுத்தி சுருக்கமான சிமுலேஷனை இயக்கவும்.',
  'sim.run': 'சிமுலேஷன் இயக்கவும்',
  'sim.resultsTitle': 'சிமுலேஷன் முடிவுகள்',
  'sim.waterApplied': 'பயன்படுத்திய நீர் (L)',
  'sim.fertilizerApplied': 'பயன்படுத்திய உரம் (kg)',
  'sim.runAgain': 'மீண்டும் இயக்கவும்',
  'sim.steps.detect': ' சென்சார்கள் கண்டறியவும்',
  'sim.steps.calculateIrrigation': 'நீர்ப்பாசனத்தை கணக்கிடு',
  'sim.steps.determineFertilizer': 'உரத்தை தீர்மானிக்கவும்',
  'sim.steps.apply': 'பரிந்துரைகளை பயன்படுத்தவும்',

  // About
  'about.title': 'பற்றி',
  'about.subtitle': 'திட்டம் சுருக்கம்',
  'about.overviewTitle': 'கண்ணோட்டம்',
  'about.overviewText': 'இந்த திட்டம் ஒரு எளிய ஸ்மார்ட் ஆக்ரிக்கல்சர் டேஷ்போர்ட்-ஐ காட்டுகிறது.',
  'about.technologiesTitle': 'தொழில்நுட்பங்கள்',
  'about.acknowledgementsTitle': 'நன்றி',
  'about.acknowledgementsText': 'பங்களிப்பாளர்களுக்கும் திறந்த மூல திட்டங்களுக்கும் நன்றி.',
  'about.footerLine1': 'React மற்றும் Chart.js மூலம் உருவாக்கப்பட்டது',
  'about.footerLine2': 'சோதனை மட்டும் — உற்பத்திக்கு அல்ல',

  // Manual
  'manual.title': 'கையேடு உள்ளீடு',
  'manual.instructions': 'டெமோ வாசிப்புகளை மீற மானுவல் சென்சார் மதிப்புகளை உள்ளிடவும்.',
  'manual.soilMoisture': 'மண் ஈரப்பதம் (%)',
  'manual.temperature': 'தापநிலை (°C)',
  'manual.humidity': 'ஈரப்பதம் (%)',
  'manual.submit': 'சமர்ப்பிக்கவும்',
  'manual.reset': 'மீட்டமை',

  // Navbar
  'nav.dashboard': 'டேஷ்போர்ட்',
  'nav.pesticides': 'பொருட்கள்',
  'nav.moreInfo': 'மேலும் தகவல்',
  'nav.about': 'பற்றி',
  'nav.logout': 'வெளியேறு',

  // Irrigation
  'irrigation.title': 'நீர் வழங்கும் முறை',
  'irrigation.alert': 'நீர்ப்பாசனம் தேவை — மண்ணில் ஈரப்பதம் குறைவு',
  'irrigation.waterLevel': 'நீர் நிலை',
  'irrigation.refill': 'டேங்கு நிரப்பவும்',
  'irrigation.controls': 'கட்டுப்பாடுகள்',
  'irrigation.currentSoilMoisture': 'தற்போதைய மண் ஈரப்பதம்',
  'irrigation.chanceOfRain': 'மழை சாத்தியம்',
  'irrigation.irrigationNeeded': 'நீர்ப்பாசனம் தேவை (நிமിഷங்கள்)',
  'irrigation.start': 'நீர்ப்பாசனம் தொடங்கு',
  'irrigation.irrigating': 'நீர்ப்பாசனம் செயல்படுத்தப்படுகிறது...',
  // Crop-specific descriptions (ta)
  'crop.wheat.temperature.description': 'கோதுமைக்கு 10-15°C சுற்றுப்புற வெப்பநிலையுள்ள இடம் தேவை',
  'crop.wheat.soilMoisture.description': 'கோதுமிக்கான மிதமான மண் ஈரப்பதம் சிறந்தது',
  'crop.wheat.humidity.description': 'கோதுமி வளர்ச்சிக்கான மிதமான ஈரப்பத நிலைகள் சிறந்தது',
  'crop.rice.temperature.description': 'அரிசிக்கு 25°C க்கும் மேற்பட்ட சூடான வானிலை தேவை',
  'crop.rice.soilMoisture.description': 'அரிசி அதிக மண் ஈரப்பதம் தேவை, பரவலாக முளை நிலைகள்',
  'crop.rice.humidity.description': 'அரிசி வளர்ச்சிக்காக அதிக ஈரப்பதம் சிறந்தது',
  'crop.corn.temperature.description': 'சோளம் 18-27°C இடையே சிறந்த வளர்ச்சி காட்டும், 15°C கீழ் மந்தம் மற்றும் 35°C மேல் பாதிப்பு',
  'crop.corn.soilMoisture.description': 'உத்தம மண் ஈரப்பதம் 60-80% ஆகும், tasseling மற்றும் silking போது முக்கியம்',
  'crop.corn.humidity.description': 'உத்தம ஈரப்பதம் 50-70% ஆகும், அதிக ஈரப்பதம் நோய் அபாயத்தை அதிகரிக்கும்',
  'crop.cotton.temperature.description': 'பருத்தி 21-30°C இல் வளரும், 15°C கீழ் மற்றும் 35°C மேல் கடினம்',
  'crop.cotton.soilMoisture.description': 'பூங்கார நிறைவு மற்றும் பால்ப்பகுதி உருவாக்கத்தின் போது 60-75% சிறந்தது',
  'crop.cotton.humidity.description': 'உத்தம ஈரப்பதம் 50-60%, அதிக ஈரப்பதம் நோய் அபாயம்',
  'crop.sugarcane.temperature.description': 'வேந்தை 20-35°C இடையே சிறந்தது, tillering க்கான 25-30°C சிறந்தது',
  'crop.sugarcane.soilMoisture.description': '70-80% உத்தம மண் ஈரப்பதம், tillering மற்றும் நீளம் போது முக்கியம்',
  'crop.sugarcane.humidity.description': 'மிதமான முதல் அதிக ஈரப்பதம் வெல்லை வளர்ச்சிக்கு உதவுகிறது',
  'dashboard.optimalHumidityFor': '{crop} க்கான உத்தம ஈரப்பதம்',
  },
};

export default translations;