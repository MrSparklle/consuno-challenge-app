import React from "react";
import styles from "./App.module.scss";
import ConstructorList from "pages/constructors-list/ConstructorList";

function App() {
  return (
    <div className={styles.app}>
      <ConstructorList />
    </div>
  );
}

export default App;
