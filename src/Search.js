import React, { useState } from "react";
import SearchList from "./SearchList";
import Scroll from "./Scroll";

function Search({ list }) {
  const [searchfield, setSearchfield] = useState("");
  const [result, setResults] = useState(false);
  let filteredList = list.filter((patient) => {
    return (
      patient.FirstName.toLowerCase().includes(searchfield.toLowerCase()) ||
      patient.LastName.toLowerCase().includes(searchfield.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchfield(e.target.value);
    setResults(true);
    if (e.target.value === "") {
      setResults(false);
    }
  };

  const searchList = () => {
    return (
      <Scroll>
        <SearchList filteredList={filteredList} />
      </Scroll>
    );
  };
  return (
    <section>
      <h2 className="m-3"> Search or Add Patient</h2>
      <div>
        <input
          type={"search"}
          className="form-control m-2"
          placeholder="Who"
          onChange={handleChange}
        ></input>
      </div>

      <div className="bg-light">{result ? searchList() : null}</div>
    </section>
  );
}

export default Search;
