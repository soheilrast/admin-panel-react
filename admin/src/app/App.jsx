import { Routes, Route, Navigate } from "react-router-dom";

import Loading from "../pages/auth/login";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import ProtectedRoute from "../guards/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<Loading/>}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<Home />}
        />

        <Route
          path="users"
          element={<Users />}
        />

        <Route
          path="profile"
          element={<Profile />}
        />
      </Route>
    </Routes>
  );
}