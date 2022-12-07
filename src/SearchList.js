import React from "react";
import Card from "./Card";

function SearchList({ filteredList }) {
  return (
    <div>
      {filteredList.map((patient) => (
        <Card patient={patient} />
      ))}
    </div>
  );
}

export default SearchList;
