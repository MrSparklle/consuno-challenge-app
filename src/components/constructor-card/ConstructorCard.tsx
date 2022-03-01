import React from "react";
import styles from "./ConstructorCard.module.scss";
import { Constructor, Specialtie } from "models";

type Props = {
  constructorData: Constructor;
};

const ConstructorCard = ({ constructorData }: Props) => {
  return (
    <div className={styles.container}>
      <img src={constructorData.logoUrl} alt={constructorData.name} />
      <div>
        <h3>{constructorData.name}</h3>
        <span>{constructorData.city}</span>
      </div>
      {!!constructorData.specialties && (
        <ul>
          {constructorData.specialties.map((specialtie: Specialtie) => (
            <li key={specialtie.id}>{specialtie.specialtie}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConstructorCard;
