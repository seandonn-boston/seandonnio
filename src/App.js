import React from "react";
import Header from "./Header/Header";
import cx from "classnames";
import styles from "./App.module.scss";

const App = () => (
  <div className={cx(styles.App)}>
    <Header />
  </div>
);

export default App;
