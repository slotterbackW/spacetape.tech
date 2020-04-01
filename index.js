import React from "react";
import ReactDOM from "react-dom";

import InstaLogo from "./images/insta_logo.png";
import "./styles.css";

const App = () => (
  <div className="body">
    <div className="container">
      <h1 className="title">spacetape.tech</h1>
      <p className="text-container">
        <img src={InstaLogo} class="ig-logo" />
        <a
          className="ig-link"
          href="https://www.instagram.com/spacetape_tech/"
          target="_blank"
        >
          spacetape_tech
        </a>
      </p>
      <p>Website coming soon...</p>
      <p>For now, please submit your order through our</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSd2pRI53jkdv-Cgt7D3iwcDOVUc1isWDjcmpc5zZ_dIk6cuaQ/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
        className="spacetape-form-link"
      >
        Order Form
      </a>
    </div>
  </div>
);

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
