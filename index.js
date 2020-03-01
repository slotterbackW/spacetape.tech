import React from "react";
import ReactDOM from "react-dom";

import './styles.css'

const App = () => (
  <div className="body">
    <h1 className="title">spacetape.tech</h1>
    <p>Website coming soon...</p>
    <p>For now, please submit your order through our</p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2pRI53jkdv-Cgt7D3iwcDOVUc1isWDjcmpc5zZ_dIk6cuaQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="spacetape-form-link"><span className="link-text">Order Form</span></a>
  </div>
)

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
