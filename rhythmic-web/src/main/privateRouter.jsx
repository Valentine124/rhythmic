import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext/firebaseContext";

const PrivateRouter = () => {
  const { userLoggedIn } = useAuth();

  return (
    userLoggedIn ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRouter;