import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Footer = () => {
  const [current, setCurrent] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <div className="foot-bar">
      <footer>
        <div className="foot">
          <Link to="/"></Link>

          <div>
            <Link to="#">
              <ChevronLeftIcon />
            </Link>
          </div>
          {current.map((page, index) => (
            <div>
              <Link to={`/page${page + 1}`} className="link" key={index}>
                {page + 1}
              </Link>
            </div>
          ))}
          <div>
            <Link to="#">
              <ChevronRightIcon />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
