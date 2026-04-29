import { useState } from "react";
import data from "./data/data.json";

export default function Destination() {
  const [selectedDestinationName, setSelectedDestination] = useState("Moon");

  // Finds the destination from the data file that matches the selected destination name
  const selectedDestination = data.destinations.find(
    (destination) => destination.name === selectedDestinationName,
  );

  // Changes the selected destination dependant on 'name' input in function
  function handleDestinationChange(name) {
    setSelectedDestination(name);
  }

  // Data is rendered dependant on the selected destination and how this matches to the data file
  return (
    <>
      <div className="main-planet-container">
        <div className="destination-container">
          <p>01</p> <h2>Pick your destination</h2>
        </div>
        <div className="planet-info-container">
          <div>
            <img src={selectedDestination.images.png} />
          </div>
          <div className="planet-facts-container">
            <div className="planet-button-container">
              <button onClick={() => handleDestinationChange("Moon")}>
                Moon
              </button>
              <button onClick={() => handleDestinationChange("Mars")}>
                Mars
              </button>
              <button onClick={() => handleDestinationChange("Europa")}>
                Europa
              </button>
              <button onClick={() => handleDestinationChange("Titan")}>
                Titan
              </button>
            </div>
            <div className="planet-name">{selectedDestination.name}</div>
            <div className="description-text">
              {selectedDestination.description}
            </div>
            <div className="distance-container">
              <div>
                <p className="distance-header">Avg Distance</p>
                <p className="distance-numbers">
                  {selectedDestination.distance}
                </p>
              </div>
              <div>
                <p className="distance-header">Est. Travel Time</p>
                <p className="distance-numbers">{selectedDestination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
