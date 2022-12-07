import React from "react";
import { Link, useParams } from "react-router-dom";

function Card({ patient }) {
  let params = useParams();
  return (
    <div className="container ">
      <div className="card-body  ">
        <Link
          to={`/patient/${patient._id}`}
          className="text-secondary text-decoration-none"
        >
          {" "}
          <button className="btn btn-outline-secondary">
            <span> {patient.FirstName}</span> <span>{patient.LastName}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
