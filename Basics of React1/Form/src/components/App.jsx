import React, { useState } from "react";

function App() {
  const [sName, lName] = useState("");
  const [headingText, setHeading] = useState(" ");
  function handleChange(event) {
    // console.log(lName);
    console.log(event.target.value);
    lName(event.target.value);
  }
  function changeH1(event) {
    setHeading(sName);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={changeH1}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={sName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
