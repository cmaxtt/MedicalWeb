# Golden Care Medical Clinic Website

A modern, full-stack medical clinic website built for **Golden Care Medical Clinic**. This application features a responsive frontend and a functional Node.js backend for handling appointments and inquiries.

![Golden Care Medical Clinic](img/hero-bg.jpg)

## 🚀 Features

### Frontend
- **Modern & Responsive Design**: Built with **Bootstrap 5**, ensuring compatibility across all devices (Desktop, Tablet, Mobile).
- **Interactive UI**:
  - Smooth scrolling navigation.
  - Dynamic counters for clinic statistics (Doctors, Departments, Awards).
  - Lightbox gallery for facility images.
  - FAQs accordion.
- **Key Sections**: Home, About Us, Services, Departments, Doctors, Contact.

### Backend
- **Node.js & Express Server**: Serves the application and handles API requests.
- **SQLite Database**: Automatically creates and manages a local database (`medical.db`) to store:
  - **Appointments**: Patient name, contact info, chosen doctor/department, date, and message.
  - **Contact Messages**: General inquiries from the contact form.
- **REST API**:
  - `POST /api/appointments`: Saves new appointment requests.
  - `POST /api/contact`: Saves general contact messages.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5.3
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Libraries**:
  - `sqlite3`: Database driver.
  - `body-parser` & `cors`: Middleware.
  - `aos`: Animate On Scroll.
  - `glightbox`: Lightbox media gallery.
  - `purecounter`: Numeric counters.

## ⚙️ Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/cmaxtt/MedicalWeb.git
    cd MedicalWeb
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start the Application**
    This will start the Node.js server (serving both the frontend and API).
    ```bash
    npm start
    ```

4.  **Access the Website**
    Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## 📂 Project Structure

```
/
├── server.js           # Main Entry Point: Node.js/Express Server & DB Logic
├── medical.db          # SQLite Database (Auto-created on first run)
├── index.html          # Main Frontend Page
├── package.json        # Dependencies & Scripts
├── css/                # Custom Stylesheets
├── js/                 # Client-side JavaScript (Form handling, UI logic)
├── img/                # Images & Assets
└── AGENTS.md           # Developer Guidelines
```

## 📝 Usage

- **Making an Appointment**: Fill out the form in the "Appointment" section. The data is validated and sent to the backend database.
- **Contacting the Clinic**: Use the form in the "Contact" section.
- **Database**: All submissions are stored in `medical.db`. You can view them using any SQLite viewer (e.g., DB Browser for SQLite) or by extending the backend to include an admin dashboard.

## 📄 License

MIT License.