import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ThemeToggler from "./pages/Theme";
import ProtectedRoute from "./ProtectedRoute"; 

const allRoutes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/editprofile",
    element: (
      <ProtectedRoute>
        <EditProfile />
      </ProtectedRoute>
    ),
  },
  { path: "*", element: <Login /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={allRoutes} />
      <ToastContainer position="top-center" autoClose={2000} />
      <ThemeToggler />
    </>
  );
}

export default App;
