import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ConstructorSearch from "./ConstructorSearch";

describe("Constructor Search component", () => {
  const mockOnSearchFilter = jest.fn();
  const specialties = new Map([
    [10, "painting"],
    [60, "excavation"],
  ]);

  const setup = () => {
    render(
      <ConstructorSearch specialites={specialties} onSearchFilter={mockOnSearchFilter} />
    );
  };

  it("should update his value when change", () => {
    setup();
    const inputValue = 'Alpha';
    const searchInput =
      screen.getByPlaceholderText<HTMLInputElement>("Constructor name");

    fireEvent.change(searchInput, { target: { value: inputValue } });

    expect(searchInput.value).toBe(inputValue);
    expect(mockOnSearchFilter).toHaveBeenCalledWith(inputValue, new Map());
  });


  it("should be checked when clicked and unchecked when clicked again", async () => {
    setup();
    const excavationCheckbox = await screen.findByLabelText("excavation");

    fireEvent.click(excavationCheckbox);

    expect(excavationCheckbox).toBeChecked();
    
    fireEvent.click(excavationCheckbox);

    expect(excavationCheckbox).not.toBeChecked();
    
  });

  it("should present all the specialites on screen", () => {
    setup();

    const spectialtiesArray = Array.from(specialties).map(([, value]) => value);

    spectialtiesArray.forEach((element) => {
      expect(screen.getByText(element.toString())).toBeInTheDocument();
    });
  });
});
