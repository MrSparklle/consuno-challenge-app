import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ConstructorCard from "./ConstructorCard";

describe("Constructor Card component", () => {
  it("should show all constructor data on screen", () => {
    const constructorData = {
      id: 1,
      name: "Alpha Constructor Co",
      logoUrl: "https://placekitten.com/200/200",
      specialties: [
        { id: 10, specialtie: "painting" },
        { id: 20, specialtie: "eletric" },
      ],
      city: "Berlin",
    };
    render(<ConstructorCard constructorData={constructorData} />);

    expect(screen.getByText(constructorData.name)).toBeInTheDocument();
    expect(screen.getByText(constructorData.city)).toBeInTheDocument();
    expect(screen.getByAltText(constructorData.name)).toHaveAttribute('src', constructorData.logoUrl)

    constructorData.specialties.forEach((specialtie) =>
      expect(screen.getByText(specialtie.specialtie)).toBeInTheDocument()
    );
  });
});
