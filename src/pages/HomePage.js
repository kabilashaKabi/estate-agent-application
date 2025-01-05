import React from "react";
import "../css/Css.css";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div
      className="homepage-wrapper d-flex flex-column"
      style={{ backgroundImage: `url('/image/home-bg.jpg')` }}
    >
      <div className="header-container">
        <h2 className="home-header-title">VistaHomes</h2>
      </div>
      <div className=" homepage-card text-center">
        <div className="home-card-body d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="home-card-title">Welcome to Estate Agent</h1>
          <p className="home-card-text  align-items-center text-center">
            <span className="home-first-word">Discover</span> your dream home
            with ease! With a stylish, intuitive layout, our real estate app
            assists you in managing your favorites.Your next move starts here!
          </p>
          <button
            className=" btn-dark mt-3"
            onClick={() => navigate("/search")}
          >
            Start Searching
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
