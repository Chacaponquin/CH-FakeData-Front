import React from "react";
import "./principalButton.css";
import Icon from "supercons";

const PrincipalButton = () => {
  return (
    <button className="cssbuttons-io rounded-full text-2xl ">
      <span className="py-3 font-fontBold uppercase ">
        <Icon glyph="sam" />
        Let´s Create
      </span>
    </button>
  );
};

export default PrincipalButton;