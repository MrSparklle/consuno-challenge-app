import React from "react";
import styles from "./App.module.scss";
import ConstructorList from "pages/constructors-list/ConstructorList";
import Header from "pages/shared/header/Header";

function App() {
  return (
    <div className={styles.app}>
      <ConstructorList />
    </div>
  );
}

export default App;
