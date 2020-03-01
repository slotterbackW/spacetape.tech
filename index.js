import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <h1>spacetape.tech</h1>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeFR7NegphO9xNVpPoEMKe1ohUArfFv5dJd9UlP1-rN6cwptw/viewform?embedded=true" width="100%" height="380" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
)

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
