# React Authentication App

This is a basic React app that includes login, signup, and a dashboard. It also has features like editing your profile and switching between light and dark themes. The app uses React Router for page navigation and localStorage to keep users logged in.

## Features

- Login and Signup pages
- Protected routes like Dashboard and Edit Profile
- Light and Dark theme toggle
- Edit profile (bio and email)
- Redirects to login page if route is unknown
- Shows pop-up messages using `react-toastify`

## How to Use

Follow these steps to run the project on your computer:

### 1. Run Locally (Without Docker)

1. Open your terminal or command prompt.

2. Clone the project (if you are using GitHub): git clone https://github.com/harshlamba18/CGS-task.git

3. Go inside the project folder: cd CGS-task

4. Install the required packages: npm install

5. Start the app: npm start

6. Open this link in your browser: http://localhost:3000

7. If you want to create a production-ready version of the app (for hosting), use: npm run build
   This will create a `build` folder with all the optimized files.

### 3. Run Using Docker

Make sure you have Docker installed and running in background.

1. Build the Docker image
From the project root directory, run: docker build -t cgs-react-app .

2. Run the Docker container: docker run -p 3000:80 cgs-react-app

3. Now visit this URL in your browser: http://localhost:3000

 This will run the production version of your React app using Nginx inside a Docker container.