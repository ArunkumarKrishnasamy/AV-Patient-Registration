import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PatientList from "./PatientList";
import Home from "./Home";
import ViewPatient from "./ViewPatient";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/PatientList" element={<PatientList />} />
          <Route path="/patient/:id" element={<ViewPatient />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
