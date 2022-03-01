import React from "react";
import styles from "./AlertWrapper.module.scss";

type Props = {
  children?: React.ReactNode;
};

const AlertWrapper = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default AlertWrapper;
