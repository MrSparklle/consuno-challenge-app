import React from "react";
import styles from "./ConstructorSearch.module.scss";

const ConstructorSearch = () => {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="constructorSearch">Search:</label>
        <input
          type="search"
          name=""
          id="constructorSearch"
          placeholder="Constructor name"
        />
      </div>
      <fieldset>
        <legend>Specialties Filter</legend>
        <input type="checkbox" name="" id="punbling" />
        <label htmlFor="punbling">Pungling</label>
        <input type="checkbox" name="" id="punbling" />
        <label htmlFor="punbling">Pungling</label>
        <input type="checkbox" name="" id="punbling" />
        <label htmlFor="punbling">Pungling</label>
        <input type="checkbox" name="" id="punbling" />
        <label htmlFor="punbling">Pungling</label>
      </fieldset>
    </div>
  );
};

export default ConstructorSearch;
