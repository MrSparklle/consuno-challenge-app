import React, { useState } from "react";
import styles from "./ConstructorSearch.module.scss";

type Props = {
  specialites: Map<number, string>;
  onSearchFilter: Function;
};

const ConstructorSearch = ({ specialites, onSearchFilter }: Props) => {
  const [filters, setFilters] = useState(new Map<number, boolean>());
  const [searchTerm, setSearchTerm] = useState("");

  const onCheckHandler = (e: any, id: number) => {
    const newFilters = new Map(filters).set(id, e.target.checked);

    if (!e.target.checked) {
      newFilters.delete(id);
    }

    setFilters(newFilters);
    onSearchFilter(searchTerm, newFilters);
  };

  const onSearchHandler = (e: any) => {
    setSearchTerm(e.target.value);
    onSearchFilter(e.target.value, filters);
  };

  // create the checkboxes based on specialites Map
  const checkBoxes = [] as JSX.Element[];
  specialites.forEach((specialite: string, id: number) =>
    checkBoxes.push(
      <div className={styles.checkboxGroup} key={id}>
        <input
          type="checkbox"
          name={specialite}
          value={specialite}
          id={id.toString()}
          checked={filters.get(id) || false}
          onChange={(e) => onCheckHandler(e, id)}
        />
        <label htmlFor={id.toString()}>{specialite}</label>
      </div>
    )
  );

  return (
    <div className={styles.container}>
      {specialites.forEach((specialite: string, id: number) => (
        <div>
          <input type="checkbox" name="" id={id.toString()} />
          <label htmlFor={id.toString()}>{specialite}</label>
        </div>
      ))}
      <div>
        <label htmlFor="constructorSearch">Search:</label>
        <input
          type="search"
          name="searchTerm"
          value={searchTerm}
          onChange={onSearchHandler}
          id="constructorSearch"
          placeholder="Constructor name"
        />
      </div>

      <fieldset>
        <legend>Specialites Filter</legend>
        {checkBoxes}
      </fieldset>
    </div>
  );
};

export default ConstructorSearch;