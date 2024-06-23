import React from "react";
import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({ btnHandler }) {
  const CalculatorBtns = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <React.Fragment>
      {CalculatorBtns.map((List) => (
        <button
          className={`${styles.button} button btn btn-info`}
          onClick={() => btnHandler(List)}
        >
          {List}
        </button>
      ))}
    </React.Fragment>
  );
}

export default ButtonsContainer;
