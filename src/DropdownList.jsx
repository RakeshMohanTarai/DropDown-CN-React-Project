import React from 'react';
import { dropdownList } from './ListItems';
import './styles/DropdownList.css';

function DropdownList() {

  return (
    <div className="dropdown-list-container">
      <ul className="dropdown-list">
        {dropdownList.map((item) => (
          <li
            key={item.name}
            className="dropdown-item"
          >
            <div className="product-box">
              <div className="product-header">
                <span className="product-name" style={{color:'white'}}>{item.name}</span>
              </div>
              <img src={item.imageUrl} alt={item.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownList;
