import { useState } from "react";
import data from "./data/data.json";

export default function Technology() {
  const [selectedTechnology, setSelectedTechnology] =
    useState("Launch vehicle");

  // Finds the technology from the data file that matches the selected technology name
  const selectedTechnologyType = data.technology.find(
    (technology) => technology.name === selectedTechnology,
  );

  // Changes the selected technology on 'name' input in function
  function handleTechnologyTypeChange(name) {
    setSelectedTechnology(name);
  }

  return (
    <>
      <div className="main-technology-container">
        <div className="technology-container">
          <p>03</p> <h2>Space Launch 101</h2>
        </div>
        <div className="main-technology-info-container">
          <div className="technology-facts-container">
            <div className="terminology-text">
              <p>The Terminology</p>
            </div>
            <div className="technology-name">{selectedTechnologyType.name}</div>
            <div className="description-text">
              {selectedTechnologyType.description}
            </div>
          </div>
          <div className="technology-image-container">
            <img src={selectedTechnologyType.images.portrait} />
          </div>
        </div>
        <div className="technology-button-container">
          <button
            className="bullet-btn"
            onClick={() => handleTechnologyTypeChange("Launch vehicle")}
          ></button>
          <button
            className="bullet-btn"
            onClick={() => handleTechnologyTypeChange("Spaceport")}
          ></button>
          <button
            className="bullet-btn"
            onClick={() => handleTechnologyTypeChange("Space capsule")}
          ></button>
        </div>
      </div>
    </>
  );
}
