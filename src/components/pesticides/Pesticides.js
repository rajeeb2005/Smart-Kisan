import React, { useState, useEffect } from 'react';
import { FaBug, FaLeaf, FaMoneyBillWave } from 'react-icons/fa';
import './Pesticides.css';

const Pesticides = () => {
  const [pesticides, setPesticides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [selectedPest, setSelectedPest] = useState('all');
  
  // Sample data for pesticides
  const pesticideData = {
    wheat: [
      {
        id: 1,
        name: 'Nativo 75WG',
        type: 'Fungicide',
        target: ['Rust', 'Powdery Mildew'],
        description: 'Broad-spectrum fungicide for control of major wheat diseases.',
        application: '50-60g per acre',
        cost: '₹850 per 100g',
        safetyPeriod: '30 days',
        image: 'fungicide.svg'
      },
      {
        id: 2,
        name: 'Decis 2.8EC',
        type: 'Insecticide',
        target: ['Aphids', 'Thrips'],
        description: 'Contact and stomach insecticide for control of sucking pests.',
        application: '200ml per acre',
        cost: '₹450 per 250ml',
        safetyPeriod: '15 days',
        image: 'insecticide.svg'
      },
      {
        id: 3,
        name: 'Atlantis OD',
        type: 'Herbicide',
        target: ['Phalaris minor', 'Wild Oats'],
        description: 'Post-emergence herbicide for control of grassy weeds in wheat.',
        application: '400ml per acre',
        cost: '₹1200 per 500ml',
        safetyPeriod: '60 days',
        image: 'herbicide.svg'
      }
    ],
    rice: [
      {
        id: 4,
        name: 'Tricyclazole 75WP',
        type: 'Fungicide',
        target: ['Blast', 'Sheath Blight'],
        description: 'Systemic fungicide for control of rice blast and other diseases.',
        application: '120g per acre',
        cost: '₹650 per 200g',
        safetyPeriod: '25 days',
        image: 'fungicide.svg'
      },
      {
        id: 5,
        name: 'Confidor 17.8SL',
        type: 'Insecticide',
        target: ['Brown Plant Hopper', 'White Backed Plant Hopper'],
        description: 'Systemic insecticide for control of sucking pests in rice.',
        application: '80ml per acre',
        cost: '₹550 per 100ml',
        safetyPeriod: '20 days',
        image: 'insecticide.svg'
      }
    ],
    cotton: [
      {
        id: 6,
        name: 'Acephate 75SP',
        type: 'Insecticide',
        target: ['Bollworms', 'Whitefly'],
        description: 'Broad-spectrum insecticide for control of cotton pests.',
        application: '300g per acre',
        cost: '₹450 per 500g',
        safetyPeriod: '15 days',
        image: 'insecticide.svg'
      },
      {
        id: 7,
        name: 'Propiconazole 25EC',
        type: 'Fungicide',
        target: ['Leaf Spot', 'Boll Rot'],
        description: 'Systemic fungicide for control of cotton diseases.',
        application: '200ml per acre',
        cost: '₹750 per 250ml',
        safetyPeriod: '30 days',
        image: 'fungicide.svg'
      }
    ]
  };
  
  // Pest types for filtering
  const pestTypes = {
    wheat: ['all', 'Rust', 'Powdery Mildew', 'Aphids', 'Thrips', 'Phalaris minor', 'Wild Oats'],
    rice: ['all', 'Blast', 'Sheath Blight', 'Brown Plant Hopper', 'White Backed Plant Hopper'],
    cotton: ['all', 'Bollworms', 'Whitefly', 'Leaf Spot', 'Boll Rot']
  };
  
  // Simulate fetching data from API
  useEffect(() => {
    const fetchPesticides = async () => {
      try {
        // In a real app, this would be an API call
        // const res = await axios.get('/api/pesticides');
        // setPesticides(res.data);
        
        // For demo purposes, we'll use the sample data
        setTimeout(() => {
          setPesticides(pesticideData[selectedCrop]);
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error('Error fetching pesticides:', err);
        setLoading(false);
      }
    };
    
    setLoading(true);
    fetchPesticides();
  }, [selectedCrop]);
  
  // Filter pesticides by pest type
  const filteredPesticides = selectedPest === 'all'
    ? pesticides
    : pesticides.filter(p => p.target.includes(selectedPest));
  
  // Handle crop selection change
  const handleCropChange = (e) => {
    setSelectedCrop(e.target.value);
    setSelectedPest('all');
  };
  
  // Handle pest selection change
  const handlePestChange = (e) => {
    setSelectedPest(e.target.value);
  };
  
  if (loading) {
    return <div className="loading-container"><div className="loading"></div></div>;
  }
  
  return (
    <div className="pesticides-container">
      <h1 className="pesticides-title">Pesticide Recommendations</h1>
      
      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="crop-select">Select Crop:</label>
          <select 
            id="crop-select" 
            value={selectedCrop} 
            onChange={handleCropChange}
            className="filter-select"
          >
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="cotton">Cotton</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="pest-select">Filter by Pest/Disease:</label>
          <select 
            id="pest-select" 
            value={selectedPest} 
            onChange={handlePestChange}
            className="filter-select"
          >
            {pestTypes[selectedCrop].map(pest => (
              <option key={pest} value={pest}>{pest}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="pesticides-list">
        {filteredPesticides.length === 0 ? (
          <div className="no-results">No pesticides found for the selected filters.</div>
        ) : (
          filteredPesticides.map(pesticide => (
            <div key={pesticide.id} className="pesticide-card">
              <div className="pesticide-header">
                <div className="pesticide-type">{pesticide.type}</div>
                <h3 className="pesticide-name">{pesticide.name}</h3>
              </div>
              
              <div className="pesticide-content">
                <div className="pesticide-image-container">
                  {pesticide.type === 'Fungicide' && <FaLeaf className="pesticide-icon fungicide" />}
                  {pesticide.type === 'Insecticide' && <FaBug className="pesticide-icon insecticide" />}
                  {pesticide.type === 'Herbicide' && <FaLeaf className="pesticide-icon herbicide" />}
                </div>
                
                <div className="pesticide-details">
                  <div className="pesticide-target">
                    <strong>Target Pests/Diseases:</strong>
                    <ul>
                      {pesticide.target.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pesticide-description">{pesticide.description}</div>
                  
                  <div className="pesticide-application">
                    <strong>Application Rate:</strong> {pesticide.application}
                  </div>
                  
                  <div className="pesticide-cost">
                    <FaMoneyBillWave className="cost-icon" />
                    <span>{pesticide.cost}</span>
                  </div>
                  
                  <div className="pesticide-safety">
                    <strong>Safety Period:</strong> {pesticide.safetyPeriod}
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary mt-3">View Application Instructions</button>
            </div>
          ))
        )}
      </div>
      
      <div className="pesticide-disclaimer">
        <h3>Important Safety Information</h3>
        <p>Always read and follow the label instructions before using any pesticide. Wear appropriate protective equipment during application. Store pesticides in their original containers out of reach of children and pets.</p>
      </div>
    </div>
  );
};

export default Pesticides;