// Importing page components
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";
import ThemeToggler from "./pages/Theme";

// Importing ProtectedRoute to secure private routes
import ProtectedRoute from "./ProtectedRoute";

// Importing necessary libraries for routing and notifications
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Defining all app routes
const allRoutes = createBrowserRouter([
  { path: "/", element: <Login /> },            // Default route (login page)
  { path: "/login", element: <Login /> },       // Login page route
  { path: "/signup", element: <SignUp /> },     // Sign up page route
  {
    path: "/dashboard",                         // Dashboard route, protected
    element: (                                  // Only accessible if the user is logged in
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/editprofile",                        // Edit profile route, protected
    element: (                                   // Only accessible if the user is logged in
      <ProtectedRoute>
        <EditProfile />
      </ProtectedRoute>
    ),
  },
  { path: "*", element: <Login /> },             // if no route matches, redirect to login page
]);


function App() {                                 // Main App component
  return (
    <>
      <RouterProvider router={allRoutes} />
      <ToastContainer position="top-center" autoClose={2000} />
      <ThemeToggler />
    </>
  );
}

export default App;                                // Exporting the App component for use in index.js
