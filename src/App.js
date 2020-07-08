import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi! Welcome to my portfolio website, currently under construction. As
          you can see, I like using React.
        </p>
        <p>
          Can't wait?{" "}
          <a
            className="App-link"
            href="mailto:sean@seandonn.io"
            target="_blank"
          >
            Email
          </a>{" "}
          me today!1
        </p>
      </header>
    </div>
  );
}

export default App;
