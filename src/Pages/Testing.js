import React from "react";

function Testing() {
  const Dates = [];
  const AddDate = () => {
    const D2 = new Date();
    console.log(D2);
    Dates.push(D2);
  };
  return (
    <div className="Admin">
      <h1>Add a Date</h1>
      <button onClick={AddDate}>Click Me</button>
      {Dates.map((item) => (
        <h6>{item}</h6>
      ))}
    </div>
  );
}

export default Testing;
