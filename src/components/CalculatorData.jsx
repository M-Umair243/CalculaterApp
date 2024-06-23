import React, { useState } from "react";
import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";
import styles from "./CalculatorData.module.css";

function CalculatorData() {
  const [calVal, setCalVal] = useState("");
  const btnHandler = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newVal = calVal + buttonText;
      setCalVal(newVal);
    }
  };

  return (
    <div className={styles.wrapperContainer}>
      <Display calVal={calVal} />
      <div className={styles.buttonsContainer}>
        <ButtonsContainer btnHandler={btnHandler} />
      </div>
    </div>
  );
}

export default CalculatorData;
