import React, { useState } from "react";
import "./OTPInput.css";
export const OTPInput = () => {
  const [popupDisplay, setPopupDisplay] = useState("none");
  const [buttonDisplay, setbuttonDisplay] = useState("block");
  const handleClick = () => {
    setPopupDisplay("flex");
    setbuttonDisplay("none");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        style={{ display: buttonDisplay }}
        className="button"
        onClick={() => handleClick()}
      >
        Click to Enter OTP
      </button>
      <div
        className="popup"
        style={{
          display: popupDisplay,
          justifyContent: "center",
          //   height: "20vh",
          //   width: "20vw",
        }}
      >
        <input className="input" type="number" />
        <input className="input" type="number" />
        <input className="input" type="number" />
        <input className="input" type="number" />
        <input className="input" type="number" />
        <input className="input" type="number" />
      </div>
    </div>
  );
};
