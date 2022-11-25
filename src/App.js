import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Patient from "./Patient";
import PatientList from "./PatientList";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Patient />}></Route>
          <Route path="/PatientList" element={<PatientList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
