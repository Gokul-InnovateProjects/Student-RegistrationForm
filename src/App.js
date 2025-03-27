import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import EmployeeFeedback from "./components/EmployeeFeedback";
import StudentRegistrationForm from "./components/StudentRegistrationForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/student">Student Registration</Link> |{" "}
          <Link to="/employee">Employee Feedback</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/student" />} />
          <Route path="/student" element={<StudentRegistrationForm />} />
          <Route path="/employee" element={<EmployeeFeedback />} />
          {/* Catch-all route for unknown paths */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
