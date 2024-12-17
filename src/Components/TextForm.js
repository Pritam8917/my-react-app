import React, { useState } from "react";

export default function TextForm(props) {
  const [text, SetText] = useState("enter text here"); // State variable

  const handleonchange = (event) => {
    SetText(event.target.value);
  };

  const handleUpClick = (event) => {
    event.preventDefault(); // Prevent form submission
    let newText = text.toUpperCase();
    SetText(newText);
  };

  const handledownClick = (event) => {
    event.preventDefault(); // Prevent form submission
    let newText = text.toLowerCase();
    SetText(newText);
  };

  const handleExtraSpaces = (event) => {
    event.preventDefault();
    let newText = text.split(/[ ]+/);
    SetText(newText.join(" "));
  };
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          ConvertToUpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handledownClick}>
          ConvertToLowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </form>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} Words & {text.length} Characters are here
        </p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
