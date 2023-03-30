import React from "react";
import { Testi } from "../../Data";
import "./Testimony.css";
const Testimony = () => {
  return (
    <div className="Testimony">
      <p className="Testimony_text">TESTIMONIALS</p>
      <div className="Testimony_flex">
        {Testi.map((Info) => {
          return (
            <div className="Testimony_border">
              <p className="Testimonytext">{Info.testimony}</p>
              <p className="Testimonyname">{Info.name}</p>
              <p className="Testimonypost">{Info.post}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimony;
