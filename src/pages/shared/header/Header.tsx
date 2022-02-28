import React from "react";
import { ConstructorSearch } from "components";
import styles from "./Header.module.scss";

const Header = () => {
  return <div className={styles.headerBackground}>
    <ConstructorSearch />
  </div>;
};

export default Header;
