import React from "react";
import styles from "./Display.module.css";
function Display({ calVal }) {
  return (
    <input type="text" className={styles.Display} readOnly value={calVal} />
  );
}

export default Display;
