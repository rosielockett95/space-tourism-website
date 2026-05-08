import { useState } from "react";
import data from "./data/data.json";

export default function Crew() {
  const [selectedCrewName, setSelectedCrewName] = useState("Douglas Hurley");

  // Finds the crew member from the data file that matches the selected destination name
  const selectedCrewMember = data.crew.find(
    (crew) => crew.name === selectedCrewName,
  );

  // Changes the selected crew member on 'name' input in function
  function handleCrewMemberChange(name) {
    setSelectedCrewName(name);
  }
  return (
    <>
      <div className="main-crew-container">
        <div className="destination-container">
          <p>02</p> <h2>Pick your crew</h2>
        </div>
        <div className="main-crew-info-container">
          <div className="crew-facts-container">
            <div className="crew-role">{selectedCrewMember.role}</div>
            <div className="crew-name">{selectedCrewMember.name}</div>
            <div className="description-text">{selectedCrewMember.bio}</div>
          </div>
          <div className="crew-image-container">
            <img src={selectedCrewMember.images.png} />
          </div>
        </div>
        <div className="crew-button-container">
          <button
            className="bullet-btn"
            onClick={() => handleCrewMemberChange("Douglas Hurley")}
          ></button>
          <button
            className="bullet-btn"
            onClick={() => handleCrewMemberChange("Mark Shuttleworth")}
          ></button>
          <button
            className="bullet-btn"
            onClick={() => handleCrewMemberChange("Victor Glover")}
          ></button>
          <button
            className="bullet-btn"
            onClick={() => handleCrewMemberChange("Anousheh Ansari")}
          ></button>
        </div>
      </div>
    </>
  );
}
