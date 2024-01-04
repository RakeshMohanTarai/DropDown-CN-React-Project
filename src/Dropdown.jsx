import React, { useState } from "react";
import "./styles/Dropdown.css";
import DropdownList from "./DropdownList";

function Dropdown() {
  const [dropDown, setDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const clickEvent = () => {
    setDropDown(!dropDown);
    setSelectedOption(null);
    console.log("clickEvent");
  };

  const clickOptionEvent = (item) => {
    setDropDown(false);
    console.log("clickOptionEvent");
    console.log("item", item);
    setSelectedOption(item);
  };

  const items = ["Yes", "Probably Not"];

  return (
    <div className="App">
     <h2 style={{color: 'white'}}>Should you use a dropdown?</h2>
      <button className="dropdown-btn" onClick={clickEvent}>
        Select
      </button>
      {dropDown && (
        <div className="dropdown-container">
          <ul className="dropdown-menu">
            {items.map((item) => (
              <li key={item} onClick={() => clickOptionEvent(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
        {selectedOption === 'Yes' && <DropdownList />}
    </div>
  );
}

export default Dropdown;
