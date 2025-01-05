import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import propertyData from "../data/properties.json";
import { useDrag, useDrop } from "react-dnd";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (criteria) => {
    const filteredProperties = propertyData.properties.filter((property) => {
      const matchesType = criteria.type
        ? property.type.toLowerCase() === criteria.type.toLowerCase()
        : true;
      const matchesMinPrice = criteria.minPrice
        ? property.price >= parseInt(criteria.minPrice, 10)
        : true;
      const matchesMaxPrice = criteria.maxPrice
        ? property.price <= parseInt(criteria.maxPrice, 10)
        : true;
      const matchesMinBedrooms = criteria.minBedrooms
        ? property.bedrooms >= parseInt(criteria.minBedrooms, 10)
        : true;
      const matchesMaxBedrooms = criteria.maxBedrooms
        ? property.bedrooms <= parseInt(criteria.maxBedrooms, 10)
        : true;
      const matchesPostcode = criteria.postcode
        ? property.location
            .toLowerCase()
            .includes(criteria.postcode.toLowerCase())
        : true;

      return (
        matchesType &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMinBedrooms &&
        matchesMaxBedrooms &&
        matchesPostcode
      );
    });

    setSearchResults(filteredProperties);
  };

  const addToFavorites = (property) => {
    if (!favorites.find((fav) => fav.id === property.id)) {
      setFavorites((prev) => [...prev, property]);
    }
  };

  const removeFromFavorites = (property) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== property.id));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  // Drag Source
  const DraggableProperty = ({ property }) => {
    const [, drag] = useDrag(() => ({
      type: "property",
      item: property,
    }));

    return (
      <div className="container mt-4 pro-background" ref={drag}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100"
              style={{
                background:
                  "linear-gradient(to right,rgb(77, 124, 130),rgb(187, 216, 211),rgb(216, 184, 175))", // Use quotes around the value
                width: "300px",
              }}
            >
              <img
                src={property.picture} // Fallback for missing image
                className="card-img-top img-thumbnail bg-black"
                alt={property.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="search-page-card-title">{property.title}</h5>
                <h5 className="search-page-card-title">{property.location}</h5>
                <p className="search-page-card-text">
                  {property.description.substring(0, 100)}...
                </p>
                <div className="d-flex align-items-center">
                  <p className="text-success fw-bold mb-0">
                    £{property.price.toLocaleString()}
                  </p>
                  <i
                    className="fa-solid fa-heart text-danger ms-2"
                    onClick={() => addToFavorites(property)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                <a
                  href={`/property/${property.id}`}
                  className="btn mt-auto"
                  style={{ backgroundColor: "#05a569", width: "200px" }}
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Drop Target
  const FavoriteList = () => {
    const [, drop] = useDrop(() => ({
      accept: "property",
      drop: (property) => addToFavorites(property),
    }));

    return (
      <div
        className="favorites-panel"
        ref={drop}
        style={{
          minHeight: "400px",
          border: "2px dashed #ccc",
          padding: "10px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <h4>Favorites</h4>
        {favorites.length > 0 ? (
          favorites.map((property) => (
            <div key={property.id} className="favorite-item">
              <div className="card">
                <img
                  src={property.picture}
                  className="card-img-top"
                  alt={property.location}
                />
                <div className="card-body">
                  <p className="card-title" style={{ fontWeight: "bold" }}>
                    {property.location}
                  </p>
                </div>
              </div>
              <i
                className="fa-solid fa-trash text-secondary ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => removeFromFavorites(property)}
              ></i>
            </div>
          ))
        ) : (
          <p>No favorite properties yet.</p>
        )}
        {favorites.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              className="btn  mt-2"
              onClick={clearFavorites}
              style={{ backgroundColor: "#05a569", color: "white" }}
            >
              Clear Favorites
              <i className="fa-solid fa-trash text-black ms-2"></i>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, rgb(103, 93, 93), rgb(214, 224, 222), rgb(59, 51, 51))",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px",
      }}
    >
      {/* Navigation */}

      <div className="container">
        <div className="row mb-3">
          <div className="col-6 d-flex justify-content-start">
            <nav className="mb-4">
              <Link to="/" className="btn btn-outline-light">
                Home
              </Link>
            </nav>
          </div>
        </div>
        <div className="row mb-3">
          <div className="container mt-5">
            <div className="row">
              <div className="search-panel col-12 col-md-8" style={{ flex: 3 }}>
                <SearchForm onSearch={handleSearch} />
                <div className="mt-4">
                  <h2>Properties</h2>
                  {searchResults.length > 0 ? (
                    <div className="row">
                      {searchResults.map((property) => (
                        <div
                          className="col-lg-4 col-md-6 col-sm-12 mb-4"
                          key={property.id}
                        >
                          <DraggableProperty property={property} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No properties found matching your criteria.</p>
                  )}
                </div>
              </div>
              <div
                className="favorites-panel "
                style={{ flex: 1, marginLeft: "20px" }}
              >
                <FavoriteList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
