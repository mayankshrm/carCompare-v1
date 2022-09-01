import React from "react";
import "./Card.css"
export function Card() {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img 
          src="https://cars.tatamotors.com/images/punch/punch-suv-home-mob.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupSelect01">
              Options
            </label>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
