import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi! Welcome to Sean Donnellan's portfolio website. This website is
          currently under construction, and as you can tell I am building it in
          React. I am also going to utilize SASS, Jest, Node, Github, and a few
          other tools of the trade to get the job done ASAP. If you'd like to
          see my work in progress, feel free to checkout my{" "}
          <a
            className="App-Link"
            href="https://github.com/seandonn-boston/seandonnio"
            target="_blank"
          >
            GitHub
          </a>
          . Check back soon for the real thing!
        </p>
        <p>
          Can't wait to get in touch?{" "}
          <a
            className="App-link"
            href="mailto:sean@seandonn.io"
            target="_blank"
          >
            Email
          </a>{" "}
          me today!
        </p>
      </header>
    </div>
  );
}

export default App;
