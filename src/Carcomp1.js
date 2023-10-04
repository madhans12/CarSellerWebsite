import React from "react";
import { CarsData } from "./CarsData";
import Carcomp from "./Carcomp";
import Footer from "./Footer";
import "./Carcomp.css";

const Carcomp1 = () => {
  const cardata = CarsData.cars0;
  return (
    <div className="content-container">
      <div className="box">
        {cardata.map((car) => (
          <div key={car.id}>
            <Carcomp cars={car} />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Carcomp1;
