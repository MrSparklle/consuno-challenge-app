import { ConstructorCard } from "components";
import styles from "./ConstructorList.module.scss";
import React from "react";

const ConstructorList = () => {
  return (
    <section className={styles.container}>
      <ConstructorCard />
      <ConstructorCard />
    </section>
  );
};

export default ConstructorList;
