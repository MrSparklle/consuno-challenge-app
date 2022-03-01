import React, { useEffect, useRef, useState } from "react";
import styles from "./ConstructorList.module.scss";
import { Constructor, Specialtie } from "models";
import { ConstructorCard, ConstructorSearch, Loading } from "components";
import { findAllConstructors } from "services/Constructor.service";
import Header from "pages/shared/header/Header";

const ConstructorList = () => {
  const [constructors, setConstructors] = useState([{} as Constructor]);
  const [specialties, setspecialties] = useState(new Map());

  const allConstructors = useRef([{} as Constructor]);

  useEffect(() => {
    async function fetchConstructors() {
      // get all constructor from the backend to display his data
      const constructorsData: Constructor[] = await findAllConstructors();

      // create an specialties map with unike values to display checkboxes filter
      const specialtiesData = constructorsData.reduce((acc, cur) => {
        cur.specialties.map((item) => acc.set(item.id, item.specialtie));
        return acc;
      }, new Map<number, string>());

      setspecialties(specialtiesData);

      allConstructors.current = constructorsData;
      setConstructors(allConstructors.current);
    }
    fetchConstructors();
  }, []);

  const searchFilterHandler = (
    searchTerm?: string,
    filters?: Map<number, boolean>
  ) => {
    // searchTerm.current = search.target.value;
    if (searchTerm || filters?.size) {
      console.log(searchTerm, filters);
      setConstructors(
        allConstructors.current.filter((constructor: Constructor) => {
          const validSearch = searchTerm
            ? constructor.name.toLowerCase().includes(searchTerm?.toLowerCase())
            : false;

          const validFilter = constructor.specialties.some(
            (specialtie: Specialtie) => {
              return filters?.get(specialtie.id);
            }
          );
          // console.log("filter", constructor.id, validSearch, validFilter);
          return validSearch || validFilter;
        })
      );
    } else {
      setConstructors(allConstructors.current);
    }
  };

  return (
    <>
      <Header>
        {specialties.size > 0 && (
          <ConstructorSearch
            specialites={specialties}
            onSearchFilter={(
              searchTerm: string,
              filters: Map<number, boolean>
            ) => searchFilterHandler(searchTerm, filters)}
          />
        )}
      </Header>
      <main className={styles.container}>
        {constructors.length > 0 ? (
          constructors.map((constructor: Constructor) => (
            <ConstructorCard
              constructorData={constructor}
              key={constructor.id}
            />
          ))
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
};

export default ConstructorList;
