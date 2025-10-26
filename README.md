# Smart Agriculture Dashboard

**🌾 Smart Kisan: Real-time Smart Agriculture Dashboard**

This project implements a complete full-stack, real-time dashboard for smart agriculture monitoring. It links a robust **Java Spring Boot** backend for data simulation and persistence with a responsive **React** frontend for visualization and control.

## 🛠️ Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React.js / Chart.js / Bootstrap | Interactive dashboard, real-time data polling, visualization, and user controls. |
| **Backend** | Spring Boot (Java) | RESTful API, scheduled data generation, service logic, and persistence layer. |
| **Database** | MySQL | Persistent storage for sensor data and user crop selections. |
| **Data Access** | Spring Data JPA / Hibernate | Object-Relational Mapping (ORM) for data persistence. |

---

## 🚀 Key Features (Frontend and Backend)

### Real-time Monitoring & Persistence
* **Sensor Simulation:** The backend generates random readings for Soil Moisture, Temperature, and Humidity every 5 seconds, simulating a live IoT feed.
* **User-Driven Context:** Users can select the current crop type (Wheat, Rice, etc.) via the frontend, and all subsequent sensor data is tagged with that specific crop for contextual analysis.
* **Optimized API:** Uses dedicated, optimized endpoints (`/api/data/latest`) to ensure the frontend always retrieves the single, most recent sensor reading efficiently.
* **Smart Irrigation System**: Optimizes water usage based on soil conditions.
* **Nutrition Analysis**: Monitor soil nutrient levels and get fertilizer recommendations.

### Frontend Features
* **Crop Progress Tracking**: Visualize crop growth and health status.
* **Pesticide Recommendations**: Get targeted pesticide suggestions based on crop type and pest issues.
* **Agricultural Resources**: Access farming tips, government schemes, and expert consultation.
* **Demo Mode**: Toggle between real and simulated data for demonstration purposes.

---

## ⚙️ Setup and Installation

### Prerequisites
* Java Development Kit (JDK 17 or later)
* MySQL Server (Running locally on port 3306)
* Node.js and npm/yarn (for the React Frontend)
* A Java IDE (IntelliJ IDEA or Eclipse)

### 1. Database Setup
1.  **Create Database:** Create a new MySQL database named `smartkisan_db`.
    ```sql
    CREATE DATABASE smartkisan_db;
    ```
2.  **Configure Credentials:** Ensure your backend's `src/main/resources/application.properties` file has the correct database connection details (username/password).
    * *Hibernate will automatically create the required `data_point` and `crop_selection` tables.*

### 2. Backend Setup (`smart-agriculture-backend`)
1.  **Open the Backend Project:** Open the `smart-agriculture-backend` folder in your Java IDE (ensure it's recognized as a Maven project).
2.  **Run Application:** Run the main class: `com.smartagri.smart_agriculture_backend.SmartAgricultureBackendApplication`.
3.  **Verification:** Confirm the console logs show the application starting on port 8080 and new "Saved new data point: ..." messages every 5 seconds.

### 3. Frontend Setup (`Smart-Agriculture-Final-main`)
1.  **Install Dependencies:** Navigate to the frontend directory in your terminal and install dependencies:
    ```bash
    npm install
    ```
2.  **Verify Proxy:** Confirm the `package.json` file contains the proxy setting for API forwarding:
    ```json
    "proxy": "http://localhost:8080",
    ```
3.  **Start Application:**
    ```bash
    npm start
    ```

### 🌐 Usage
1.  Navigate to `http://localhost:3000` in your browser.
2.  The dashboard sensor readings will update every 3 seconds, reflecting the data being generated and stored by the Java backend.
3.  Use the Crop Selector to change the current crop. The backend will immediately save this change, and subsequent sensor readings will be correctly tagged in the database.

---

## 💡 Future Enhancements

* Integration with real IoT sensors and devices.
* Crop disease detection using image recognition.
* Weather prediction integration.
* Mobile app with offline capabilities.

## License

This project is licensed under the MIT License - see the LICENSE file for details.