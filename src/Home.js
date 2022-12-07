import React, { useEffect, useState } from "react";
import Patient from "./Patient";
import Search from "./Search";
import axios from "axios";

function Home() {
  const [list, setList] = useState([]);
  const FetchData = async () => {
    let patients = await axios.get("http://localhost:3001/patient");
    setList(patients.data);
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      <Search list={list} />
      <Patient />
    </div>
  );
}

export default Home;
