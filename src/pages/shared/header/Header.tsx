import React from "react";
import styles from "./Header.module.scss";

type Props = {
  children?: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return <div className={styles.headerBackground}>{children}</div>;
};

export default Header;
