import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaUniversity } from 'react-icons/fa';
import './About.css';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { translate } = useLanguage();
  // Sample team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Frontend Developer',
      bio: 'Computer Science student specializing in React and modern web technologies.',
      image: 'team1.svg',
      social: {
        email: 'rahul.sharma@example.com',
        linkedin: 'https://linkedin.com/in/rahulsharma',
        github: 'https://github.com/rahulsharma'
      }
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Backend Developer',
      bio: 'Java enthusiast with experience in Spring Boot and database management.',
      image: 'team2.svg',
      social: {
        email: 'priya.patel@example.com',
        linkedin: 'https://linkedin.com/in/priyapatel',
        github: 'https://github.com/priyapatel'
      }
    },
    {
      id: 3,
      name: 'Amit Kumar',
      role: 'UI/UX Designer',
      bio: 'Design student passionate about creating intuitive and accessible user interfaces.',
      image: 'team3.svg',
      social: {
        email: 'amit.kumar@example.com',
        linkedin: 'https://linkedin.com/in/amitkumar',
        github: 'https://github.com/amitkumar'
      }
    }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <div className="college-logo">
          <FaUniversity className="college-icon" />
        </div>
  <h1 className="about-title">{translate('about.title')}</h1>
  <p className="about-subtitle">{translate('about.subtitle')}</p>
      </div>

      <div className="about-section">
        <h2>{translate('about.overviewTitle')}</h2>
        <p>
          {translate('about.overviewText')}
        </p>
        <div className="project-features">
          <div className="feature">
            <h3>{translate('about.features.realTime.title')}</h3>
            <p>{translate('about.features.realTime.desc')}</p>
          </div>
          <div className="feature">
            <h3>{translate('about.features.irrigation.title')}</h3>
            <p>{translate('about.features.irrigation.desc')}</p>
          </div>
          <div className="feature">
            <h3>{translate('about.features.pest.title')}</h3>
            <p>{translate('about.features.pest.desc')}</p>
          </div>
          <div className="feature">
            <h3>{translate('about.features.resources.title')}</h3>
            <p>{translate('about.features.resources.desc')}</p>
          </div>
        </div>
      </div>

      <div className="technologies-section">
  <h2>{translate('about.technologiesTitle')}</h2>
        <div className="tech-stack">
          <div className="tech">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>Chart.js</li>
              <li>React Icons</li>
            </ul>
          </div>
          <div className="tech">
            <h3>Backend</h3>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>RESTful APIs</li>
              <li>JWT Authentication</li>
            </ul>
          </div>
          <div className="tech">
            <h3>Database</h3>
            <ul>
              <li>MySQL</li>
              <li>JPA/Hibernate</li>
            </ul>
          </div>
          <div className="tech">
            <h3>IoT Integration</h3>
            <ul>
              <li>Arduino</li>
              <li>Soil Moisture Sensors</li>
              <li>Temperature Sensors</li>
              <li>Weather API Integration</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="acknowledgements">
        <h2>{translate('about.acknowledgementsTitle')}</h2>
        <p>
          {translate('about.acknowledgementsText')}
        </p>
      </div>

      <footer className="about-footer">
        <p>{translate('about.footerLine1')}</p>
        <p>{translate('about.footerLine2')}</p>
      </footer>
    </div>
  );
};

export default About;