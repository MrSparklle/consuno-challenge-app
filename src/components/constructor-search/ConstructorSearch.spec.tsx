import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ConstructorSearch from "./ConstructorSearch";

describe("Constructor Search component", () => {
  const setSearch = jest.fn((value) => {});
  const specialties = new Map([
    [1, "teste"],
    [2, "other"],
  ]);

  const setup = () => {
    render(
      <ConstructorSearch specialites={specialties} onSearchFilter={setSearch} />
    );
  };

  it("should update his value when change", () => {
    setup();
    const inputValue = 'Alpha';
    const searchInput =
      screen.getByPlaceholderText<HTMLInputElement>("Constructor name");

    fireEvent.change(searchInput, { target: { value: inputValue } });

    expect(searchInput.value).toBe(inputValue);
    expect(setSearch).toHaveBeenCalledWith(inputValue, new Map());
  });

  it("should present all the specialites on screen", () => {
    setup();

    const spectialtiesArray = Array.from(specialties).map(([, value]) => value);

    spectialtiesArray.forEach((element) => {
      expect(screen.getByText(element.toString())).toBeInTheDocument();
    });
  });
});
