# JoHunt

A modern job-seeking platform connecting job seekers with employers.

### Deployed Link: https://job-hunt-one-kappa.vercel.app/
[Visit JobHunt](https://job-hunt-one-kappa.vercel.app/)

![Screenshot 2024-12-19 081709](https://github.com/user-attachments/assets/7cd3b78e-1a35-429a-8bc2-3cfd59c72747)

![Jobringer Screenshot](https://github.com/user-attachments/assets/9ee2c321-caf5-42a1-8063-e51c3b52720b)

> **Note:** The filter and search bar are not functional at the moment, but all other features are working fine.

---

## Tech Stack

The application relies on the following tools and libraries:

- **React.js:** Component-based framework for building the UI.
- **Tailwind CSS:** Utility-first CSS framework for styling and responsive design.
- **Framer Motion:** Animation library for smooth scrolling and effects.
- **Zustand:** Lightweight state management for global app state.
- **React Dropzone:** Provides drag-and-drop file upload functionality.
- **React Router:** Manages navigation and routing between pages.
- **React Icons:** Supplies icons for enhancing usability and visual appeal.

---

## Application Features

### General Flow

1. **Landing Page:**  
   - Introduction to the application.  
   - Highlights popular job listings.  
   - Provides quick access to key sections (e.g., Job Listings, Employer Profiles, Blog).

2. **User Registration/Login:**  
   - Authentication and personalization for users.

3. **Job Listings Page:**  
   - Allows job seekers to view, search, and filter job openings.

4. **Job Details Page:**  
   - Displays specific job information.  
   - Users can apply directly through the application form.

5. **Employer Profile Page:**  
   - Employers can create company profiles and post job opportunities.  
   - Detailed job descriptions for seekers to review and apply.

---

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

- Node.js and npm should be installed on your system.

### Steps

```bash
# Clone the repository
git clone https://github.com/RounitSingh/Jobringer.git

# Navigate into the project directory
cd Jobringer

# Install dependencies
npm install

# Build the app for production
npm run build

# Start the development server
npm start
