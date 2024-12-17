import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

// import { BrowserRouter as Router, Routes, Route } from "react-router";
function App() {
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b2f3d";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          home="Home"
          About="About"
          mode={Mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
        <TextForm
                  heading="Enter the text to analyze below"
                  mode={Mode}
                />
          {/* <Routes>
            <Route
              exact
              path="/about"
              element={
                <About
                  mode={Mode}
                />
              }
            />
          </Routes> */}
          {/* <Routes>
            <Route
              exact
              path="/"
              element={
                
              }
            />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
