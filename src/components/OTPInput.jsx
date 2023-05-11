import React, { useRef, useState } from "react";
import "./style.css";

const phoneNumber = "99586-XXXXX";

export const OTPInput = () => {
  const [otpDisplay, setOtpDisplay] = useState(false);

  const inputArray = [
    { name: "input1", currentRef: useRef(null), value: "" },
    { name: "input2", currentRef: useRef(null), value: "" },
    { name: "input3", currentRef: useRef(null), value: "" },
    { name: "input4", currentRef: useRef(null), value: "" },
    { name: "input5", currentRef: useRef(null), value: "" },
    { name: "input6", currentRef: useRef(null), value: "" },
  ];
  const [OTPData, setOTPData] = useState(inputArray);
  console.log("@@@OTPData", OTPData);

  const handleClick = () => {
    setOtpDisplay(true);
    // setbuttonDisplay("none");
    setTimeout(() => {
      handleFocus(0);
    }, 10);
  };
  const handleFocus = (index) => {
    OTPData[index].current.focus();
  };

  function handleChange(event, i) {
    if (event.target.value.length === 1) {
      const regex = /^[0-9]*$/;
      if (regex.test(event.target.value)) {
        const tempArray = [...OTPData];
        tempArray[i]["value"] = event.target.value;
        if (i < tempArray.length - 1) {
          handleFocus(i + 1);
        }

        setOTPData(tempArray);
      }
    } else return;
  }
  const handleKeyPress = (e, index) => {
    console.log("e.target.value", e.target.value);
    console.log("eeee", e.keyCode);
    if (e.keyCode === 37 && index !== 0) {
      handleFocus(index - 1);
    } else if (e.keyCode === 39) {
      handleFocus(index + 1);
    } else if (e.keyCode === 38 || e.keyCode === 40) {
      e.preventDefault();
    } else if (e.keyCode === 8) {
      handleFocus(index - 1 > -1 ? index - 1 : 0);
      const tempArray = [...OTPData];
      tempArray[index]["value"] = "";
      setOTPData(tempArray);
    }
  };

  const handlePaste = (e, index) => {
    console.log("PASTE", e.clipboardData.getData("Text"));
    const pasteData = e.clipboardData.getData("Text");

    const newPasteData = pasteData.split("");
    let tempArray = [...OTPData];
    for (let i = 0; i < 6; i++) {
      tempArray[i]["value"] = newPasteData[i];
    }
    setOTPData(tempArray);
    handleFocus(5);
  };

  const editNumber = () => {
    alert("CHANGE NUMBER CLICKED");
  };
  const resendOTP = () => {
    alert("RESEND OTP CLICKED");
  };
  const handleSubmit = () => {
    alert("SUBMIT BUTTON CLICKED");
  };
  return (
    <div>
      {otpDisplay ? (
        <div className="popup">
          <h1 className="popup-heading">PHONE VERIFICATION</h1>
          <div className="popup-otpWrapper">
            <div className="popup-otpWrapper-phoneNumber">
              Enter the OTP you received on {phoneNumber}
            </div>
            <div className="popup-otpWrapper-inputArea">
              {OTPData.map((input, index) => (
                <div key={index} className="popup-otpWrapper-inputArea-field">
                  <label htmlFor={input.name}>{input.label}</label>
                  <input
                    onPaste={(e) => handlePaste(e, index)}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                    className="input"
                    type="number"
                    name={input.name}
                    ref={OTPData[index]}
                    onChange={(event) => handleChange(event, index)}
                    value={input.value}
                  />
                </div>
              ))}
            </div>
            <div className="popup-otpWrapper-actions">
              <button onClick={editNumber}>Change number</button>
              <button onClick={resendOTP}>Resend OTP</button>
            </div>
            <div className="popup-otpWrapper-submit" onClick={handleSubmit}>
              <button>submit button</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="primaryButton">
          <button className="button" onClick={() => handleClick()}>
            Click to Enter OTP
          </button>
        </div>
      )}

      <div></div>
    </div>
  );
};
