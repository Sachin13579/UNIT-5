import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ login, children }) => {
    if (!login) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };