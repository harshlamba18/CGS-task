import { Navigate } from "react-router-dom";                                // Importing Navigate to redirect users to a different route

// ProtectedRoute component to secure private pages like dashboard, edit profile, etc.
const ProtectedRoute = ({ children }) => {                                  
  const isLoggedIn = localStorage.getItem("loggedInUser");

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;    
