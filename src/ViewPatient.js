import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewPatient() {
  let params = useParams();
  const [patient, setPatient] = useState("");
  const fetchData = async () => {
    let user = await axios.get(`http://localhost:3001/patient/${params.id}`);
    setPatient(user.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-center">Patient Information</h1>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th className="col-auto">First Name</th>
            <th className="col-auto">Last Name</th>
            <th className="col-auto">Sex</th>
            <th className="col-auto">DOB</th>
            <th className="col-auto">Aadhaar Number</th>
            <th className="col-auto">License Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{patient.FirstName}</td>
            <td>{patient.LastName}</td>
            <td>{patient.sex}</td>
            <td>{patient.dob}</td>
            <td>{patient.Aadhaar}</td>
            <td>{patient.License}</td>
          </tr>
        </tbody>
      </table>
      <Link to={"/"}>
        {" "}
        <button className="btn btn-primary ms-3"> Back to Registration</button>
      </Link>
      <Link to={"/PatientList"}>
        <button className="btn btn-warning ms-2"> Back to Users</button>
      </Link>
    </div>
  );
}

export default ViewPatient;
