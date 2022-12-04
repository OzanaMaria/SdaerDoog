
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp.js";
import { AuthProvider } from "./contexts/AuthContexts";
import Home from "./Home/Home";
import FirstLoginForm from "./Dashboard/FirstForm";
import Dashboard from "./Dashboard/Dashboard";

function App() {

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registerForm" element={<FirstLoginForm />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
