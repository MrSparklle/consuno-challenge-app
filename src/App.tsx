import React from "react";
import styles from "./App.module.scss";
import ConstructorList from "./pages/home/constructors-list/ConstructorList";
import Header from "./pages/shared/header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ConstructorList />
    </div>
  );
}

export default App;
