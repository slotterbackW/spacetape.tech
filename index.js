import React from "react";
import ReactDOM from "react-dom";

import './styles.css'

const App = () => (
  <div className="body">
    <h1 className="title">spacetape.tech</h1>
    <p>Website coming soon...</p>
    <p>For now, please submit your order through our</p>
    <a href="" target="_blank" rel="noopener noreferrer" className="spacetape-form-link"><span className="link-text">Order Form</span></a>
  </div>
)

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
