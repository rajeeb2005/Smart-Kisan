🌾 Smart Kisan: Real-time Smart Agriculture Dashboard
This project implements a full-stack, real-time dashboard for smart agriculture monitoring, simulating sensor data collection, analysis, and visualization. The application uses a robust Spring Boot backend to simulate sensor readings, persist data to MySQL, and provide dedicated API endpoints for a dynamic React frontend.
🛠️ Technology Stack
Component
Technology
Description
Frontend
React.js
Interactive dashboard, real-time data polling, and user crop selection interface.
Backend
Spring Boot (Java)
RESTful API, scheduled data generation, service logic, and persistence layer.
Database
MySQL
Persistent storage for sensor data and user crop selections.
Data Access
Spring Data JPA / Hibernate
Object-Relational Mapping (ORM) for data persistence.

🚀 Key Features
Real-time Sensor Simulation: The backend generates random readings for Soil Moisture, Temperature, and Humidity every 5 seconds, simulating a live IoT feed.
Persistent Data Storage: All sensor readings are stored in the MySQL database.
User-Driven Context: Users can select the current crop type (Wheat, Rice, etc.) via the frontend, and all subsequent sensor data is tagged with that specific crop for contextual analysis.
Optimized API: Uses dedicated, optimized endpoints (/api/data/latest) to ensure the frontend always retrieves the single, most recent sensor reading efficiently.
CORS Configuration: Fully configured to allow seamless communication between the React frontend (port 3000) and the Spring Boot backend (port 8080).
⚙️ Setup and Installation
Prerequisites
Java Development Kit (JDK 17 or later)
MySQL Server (Running locally on port 3306)
Node.js and npm/yarn (for the React Frontend)
A Java IDE (IntelliJ IDEA or Eclipse)
1. Database Setup
Create Database: Create a new MySQL database named smartkisan_db.
CREATE DATABASE smartkisan_db;







Configure Credentials: Ensure your backend's src/main/resources/application.properties file has the correct database connection details:
spring.datasource.url=jdbc:mysql://localhost:3306/smartkisan_db?serverTimezone=UTC&useSSL=false
spring.datasource.username=your_mysql_username 
spring.datasource.password=your_mysql_password






Hibernate will automatically create the required data_point and crop_selection tables.
2. Backend Setup (Smart-Agriculture-Backend)
Open the Backend Project: Open the smart-agriculture-backend folder in your Java IDE (ensure it's recognized as a Maven project).
Run Application: Run the main class: com.smartagri.smart_agriculture_backend.SmartAgricultureBackendApplication.
Verification: Confirm the console logs show the application starting on port 8080 and new "Saved new data point: ..." messages every 5 seconds.
3. Frontend Setup (Smart-Agriculture-Final-main)
Install Dependencies: Navigate to the frontend directory in your terminal and install dependencies:
npm install
# or
yarn install







Verify Proxy: Confirm the package.json file contains the proxy setting for API forwarding:
"proxy": "http://localhost:8080",







Start Application:
npm start
# or
yarn start







🌐 Usage
Navigate to http://localhost:3000 in your browser.
The dashboard sensor readings will update every 3 seconds, reflecting the data being generated and stored by the Java backend.
Use the Crop Selector to change the current crop. The backend will immediately save this change, and subsequent sensor readings will be correctly tagged in the database.
