import React from "react";
import "./Carcomp.css";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import LocalGasStationSharpIcon from "@mui/icons-material/LocalGasStationSharp";
import SpeedSharpIcon from "@mui/icons-material/SpeedSharp";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

import Footer from "./Footer";

const Carcomp = ({ cars }) => {
  return (
    <div className="container-1">
      <div className="box">
        <div className="row">
          <div className="image">
            <img src={cars.img} alt="car" className="car" />
          </div>
          <div className="row-one">
            <h2>{cars.Car}</h2>
            <p className="year">{cars.year}</p>
          </div>
          <div className="row-two">
            <div className="bar-one">
              <div className="details">
                <PeopleSharpIcon />
                {cars.Persons} People
              </div>
              <div className="details">
                <LocalGasStationSharpIcon />
                {cars.Fuel}
              </div>
            </div>
            <div className="bar-one">
              <div className="details">
                <SpeedSharpIcon />
                {cars.Mileage}km/1-litre
              </div>
              <div className="details">
                <DirectionsCarFilledIcon />
                {cars.Design}
              </div>
            </div>
          </div>
          <hr />
          <div className="row-three">
            <div className="details">
              <h1>${cars.Rent}</h1>
              <p>/ month</p>
            </div>
            <div className="details">
              <FavoriteBorderSharpIcon className="like-icon" />
              <button>Rent now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carcomp;
