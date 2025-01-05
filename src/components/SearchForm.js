import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Css.css";
const SearchForm = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateAdded: "",
    postcode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchCriteria);
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-white"
      style={{
        backgroundImage: `url('/image/bg-search.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="header-container">
        <h2 className="header-title">VistaHomes</h2>
      </div>

      <div className="search-form-card">
        <div className="card-body">
          <h5 className="card-title text-success text-center text-md-start mb-3">
            Find Your Dream Property
          </h5>
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div className="mb-3">
              <label
                htmlFor="type"
                className="form-label"
                style={{ color: "black" }}
              >
                Property Type
              </label>
              <select
                id="type"
                className="form-select"
                defaultValue="any"
                value={searchCriteria.type}
                onChange={handleInputChange}
              >
                <option value="">Any</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
              </select>
            </div>

            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label
                  htmlFor="minPrice"
                  className="form-label"
                  style={{ color: "black" }}
                >
                  Min Price
                </label>
                <input
                  type="number"
                  id="minPrice"
                  className="form-control"
                  name="minPrice"
                  value={searchCriteria.minPrice}
                  onChange={handleInputChange}
                  placeholder="e.g. 200000"
                />
              </div>
              <div className="col-12 col-md-6">
                <label
                  htmlFor="maxPrice"
                  className="form-label"
                  style={{ color: "black" }}
                >
                  Max Price
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  className="form-control"
                  name="maxPrice"
                  value={searchCriteria.maxPrice}
                  onChange={handleInputChange}
                  placeholder="e.g. 800000"
                />
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="postcodeArea"
                className="form-label"
                style={{ color: "black" }}
              >
                Postcode Area
              </label>
              <input
                type="text"
                id="postcodeArea"
                className="form-control"
                name="postcode"
                value={searchCriteria.postcode}
                onChange={handleInputChange}
                placeholder="e.g. BR1, NW1"
              />
            </div>

            <button
              type="submit"
              className="btn btn-success fw-bold w-100"
              style={{ backgroundColor: "#05a569" }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
