import React from "react";
import { Questions } from "../../Data";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Register from "../Register/Register";
import "./Question.css";

const Question = () => {
  return (
    <div className="Question">
      <p className="Testimony_question">Frequently Asked Questions</p>
      <div className="Questions_flex">
        {Questions.map((Info) => {
          return (
            <div className="Questions_border">
              <p className="Questions_text">{Info.question}</p>
              <div className="Drop_downborder">
                <div className="Drop_down">
                  <ArrowDropDownIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Register />
    </div>
  );
};

export default Question;
