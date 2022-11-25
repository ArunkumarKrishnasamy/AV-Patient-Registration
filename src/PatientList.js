import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PatientList() {
  const [list, setList] = useState([]);
  const FetchData = async () => {
    let patients = await axios.get("http://localhost:3001/patient");
    setList(patients.data);
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="container">
      <div className="m-3">
        <h2 className="text-center">Registered Users List</h2>
        <div className="justify-content-center m-5">
          <Link to={"/"}>
            <input
              type={"submit"}
              className="btn btn-primary btn-lg"
              value={"+ Add New User"}
            ></input>
          </Link>
          <input
            type={"submit"}
            className="btn btn-primary btn-lg mx-2"
            value={"View Specialty specific user Information"}
          ></input>
        </div>
        <table className="table table-hover table-responsive table-primary">
          <thead>
            <tr>
              <th className="col-auto">S.No.</th>
              <th className="col-auto">First Name</th>
              <th className="col-auto">Last Name</th>
              <th className="col-auto">Date of Birth</th>
              <th className="col-auto">Sex</th>
              <th className="col-auto">License Number</th>
              <th className="col-auto">Marital Status</th>
              <th className="col-auto">Billing Note</th>
            </tr>
          </thead>
          <tbody>
            {list.map((values, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{values.FirstName}</td>
                  <td>{values.LastName}</td>
                  <td>{values.dob}</td>
                  <td>{values.sex}</td>
                  <td>{values.License}</td>
                  <td>{values.maritalStatus}</td>
                  <td>{values.billingNote}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientList;
