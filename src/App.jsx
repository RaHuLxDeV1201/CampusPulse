import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Student Dashboard */}
        <Route path="/dashboard" element={<StudentDashboard />} />

        {/* Other pages - routes will be connected after creating pages */}
        <Route path="/report" element={<Navigate to="/dashboard" replace />} />
        <Route path="/my-complaints" element={<Navigate to="/dashboard" replace />} />
        <Route path="/profile" element={<Navigate to="/dashboard" replace />} />

        {/* Existing routes */}
        <Route path="/complaints" element={<LandingPage />} />
        <Route path="/progress" element={<LandingPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;