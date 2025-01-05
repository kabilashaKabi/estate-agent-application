import React, { useState } from "react";
import { useParams } from "react-router-dom";
import propertyData from "../data/properties.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
function PropertyDetails() {
  const { id } = useParams();
  const property = propertyData.properties.find((prop) => prop.id === id);

  const [currentImage, setCurrentImage] = useState(() =>
    property && property.images.length > 0 ? `/${property.images[0]}` : ""
  );

  if (!property) {
    return <h2>Property not found</h2>;
  }

  const {
    images,
    longDescription,
    floorPlan,
    description,
    mapCoordinates,
    type,
    price,
    location,
  } = property;

  const handleThumbnailClick = (img) => {
    setCurrentImage(`/${img}`);
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
      <div style={{ width: "100%", height: "100%" }}>
        <div className="container">
          <div className="row mb-3">
            <div className="col-6 d-flex justify-content-start">
              <nav className="mb-4">
                <Link to="/" className="btn btn-outline-light">
                  Home
                </Link>
              </nav>
            </div>

            <div className="col-6 d-flex justify-content-end">
              <nav className="mb-4">
                <Link to="/Search" className="btn btn-outline-light">
                  Search form
                </Link>
              </nav>
            </div>
          </div>

          {/* Property Details */}
          <div className="row">
            <div className="col-lg-8 mb-4">
              <img
                src={currentImage}
                alt={location}
                className="img-fluid mb-3 img-thumbnail bg-black"
                style={{ height: "400px", objectFit: "cover", width: "100%" }}
              />
              <div className="d-flex flex-wrap">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={`/${img}`}
                    alt={`Thumbnail ${index + 1}`}
                    className={`img-thumbnail bg-black m-1 ${
                      currentImage === `/${img}` ? "border-primary" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    onClick={() => handleThumbnailClick(img)}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <p>
                <strong>Type:</strong> {type}
              </p>
              <p>
                <strong>Price:</strong> £{price.toLocaleString()}
              </p>
              <p>
                <strong>Location:</strong> {location}
              </p>
              <p>
                <strong>Description:</strong> {description}
              </p>
            </div>
          </div>

          {/* Tabs for Details */}
          <Tabs className="mt-4">
            <TabList>
              <Tab>Details</Tab>
              <Tab>Floor Plan</Tab>
              <Tab>Map</Tab>
            </TabList>

            <TabPanel>
              <p>{longDescription}</p>
            </TabPanel>
            <TabPanel>
              <img
                src={`/${floorPlan}`}
                alt="Floor Plan"
                className="img-fluid"
                style={{ maxHeight: "500px", width: "100%" }}
              />
            </TabPanel>
            <TabPanel>
              <iframe
                title="Google Map"
                src={`https://www.google.com/maps?q=${mapCoordinates.lat},${mapCoordinates.lng}&output=embed`}
                style={{ border: 0, width: "100%", height: "400px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
