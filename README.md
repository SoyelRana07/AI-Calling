# AI-Calling

# AI-Calling

**AI-Calling** is an AI-powered customer care solution that enables organizations to automate and manage both incoming and outgoing calls and messages. The platform is designed for businesses and government agencies seeking to streamline customer communication, personalize responses, and efficiently handle large-scale outreach or support operations.

## Features

- **AI Calling**: Make outgoing calls from a toll-free number (e.g., for credit card sales) and handle incoming customer care calls.
- **Personalized Messaging**: Send and receive personalized messages powered by AI for efficient customer communication.
- **Customizable Workflows**: Tailor the app to your specific business needs and communication preferences.
- **Scheduling**: Set up and manage call schedules for outgoing campaigns and incoming support.
- **Team Management**: Efficiently manage your customer care team with AI assistance.
- **Government Focused**: Specially designed features for government agencies and public sector organizations.
- **File Uploads**: Upload and manage CSV and PDF files for bulk operations or reporting.
- **Comprehensive Billing**: Track and manage billing for both calls and messages.
- **Authentication**: Secure user registration, login, password reset (with OTP), and session management.
- **Demo Scheduling**: Allow potential clients to schedule a demo of the platform.

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, multer, nodemailer
- **Frontend**: React, Vite, Tailwind CSS, Axios, React Router, Recharts

## Project Structure

```
AI-Calling/
  backend/      # Express API, MongoDB models, controllers, routes
  frontend/     # React app (Vite), UI components, pages
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd AI-Calling/backend
   npm install
   ```

2. **Configure environment variables:**

   Create a `.env` file in `backend/` with:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. **Start the backend server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd AI-Calling/frontend
   npm install
   ```

2. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as specified by Vite).

### Usage

- Access the frontend in your browser.
- Register or log in as a user.
- Upload files, manage calls/messages, view billing, and schedule demos.
- Admin and team management features are available for authorized users.

## API Endpoints

The backend exposes RESTful endpoints for:

- **Authentication**: `/api/auth`
- **Incoming Calls**: `/api/incoming-calls`
- **Outgoing Calls**: `/api/outgoing-calls`
- **Billing (Calls)**: `/api/billing-logs`
- **Incoming Messages**: `/api/incoming-messages`
- **Outgoing Messages**: `/api/outgoing-messages`
- **Billing (Messages)**: `/api/billing-logs-messages`
- **File Uploads**: `/api/files`
- **Demo Scheduling**: `/api/demo`

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the ISC License.
