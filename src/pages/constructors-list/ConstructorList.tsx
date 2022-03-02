import React, { useEffect, useRef, useState } from "react";
import styles from "./ConstructorList.module.scss";
import { Constructor, Specialtie } from "models";
import { AlertWrapper, ConstructorCard, ConstructorSearch } from "components";
import { ConstructorService } from "services/Constructor.service";

const ConstructorList = () => {
  const [constructors, setConstructors] = useState([{} as Constructor]);
  const [specialties, setspecialties] = useState(new Map());
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  const allConstructors = useRef([{} as Constructor]);

  // load all constructors information and create a new Map with constructor's unique specialities.
  useEffect(() => {
    async function fetchConstructors() {
      try {
        // get all constructor from the backend to display his data
        const constructorsData: Constructor[] = await ConstructorService.findAllConstructors();

        // create an specialties Map with unike values to display the checkboxes filter.
        // in a real world scenario, this data could be returned by an specific api enpoint
        const specialtiesData = constructorsData.reduce((acc, cur) => {
          cur.specialties.forEach((specialtie) =>
            acc.set(specialtie.id, specialtie.specialtie)
          );
          return acc;
        }, new Map<number, string>());

        setspecialties(specialtiesData);

        // using a ref to persist the original constructors array during filters and renders
        allConstructors.current = constructorsData;

        setConstructors(allConstructors.current);
      } catch (error) {
        console.error("Something was wrong: ", error);
        setError("Error while loading constructors"+error);
      } finally {
        setIsLoaded(true);
      }
    }
    fetchConstructors();
  }, []);

  // search and filter the consctructors array
  const searchFilterHandler = (
    searchTerm?: string,
    filters?: Map<number, boolean>
  ) => {
    if (searchTerm || filters?.size) {
      setConstructors(
        // filter constructor based on search term e/or checkboxes filters
        allConstructors.current.filter((constructor: Constructor) => {
          // if search terms is provided, filter constructor by name,
          // else search term is not provided or constructor is not found, so return false
          const validSearch = searchTerm
            ? constructor.name.toLowerCase().includes(searchTerm?.toLowerCase())
            : false;

          // if contructor has specialties and filter is provided, filter constructor specialties
          // based on filters. Else, there is nothing to filter, constructor will be returned
          const validFilter =
            constructor.specialties.length && filters?.size
              ? constructor.specialties.some((specialtie: Specialtie) =>
                  filters?.get(specialtie.id)
                )
              : true;
          // search term provided an found a valid search and valid filters
          // or if search term is no provided, but found valid filter
          return (
            (searchTerm && validSearch && validFilter) ||
            (!searchTerm && validFilter)
          );
        })
      );
    } else {
      // no search term or filter, show all constructors
      setConstructors(allConstructors.current);
    }
  };

  return (
    <main className={styles.container}>
      {error ? (
        <AlertWrapper>
          <h2>{error}</h2>
        </AlertWrapper>
      ) : isLoaded ? (
        <>
          <ConstructorSearch
            specialites={specialties}
            onSearchFilter={(
              searchTerm: string,
              filters: Map<number, boolean>
            ) => searchFilterHandler(searchTerm, filters)}
          />

          {constructors.length > 0 ? (
            constructors.map((constructor: Constructor) => (
              <ConstructorCard
                constructorData={constructor}
                key={constructor.id}
              />
            ))
          ) : (
            <AlertWrapper>
              <h3>No constructors found!</h3>
            </AlertWrapper>
          )}
        </>
      ) : (
        <AlertWrapper>
          <h2>Loading Constructors...</h2>
        </AlertWrapper>
      )}
    </main>
  );
};

export default ConstructorList;
