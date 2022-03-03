import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ConstructorList from "./ConstructorList";
import { ConstructorService } from "services/Constructor.service";
import { Constructor } from "models";

const mockConstructors = [
  {
    id: 1,
    name: "Alpha Constructor Co",
    logoUrl: "https://placekitten.com/200/200",
    specialties: [
      { id: 10, specialtie: "painting" },
      { id: 20, specialtie: "eletric" },
    ],
    city: "Berlin",
  },
  {
    id: 2,
    name: "Gamma Corportate",
    logoUrl: "https://placekitten.com/200/200",
    specialties: [
      { id: 10, specialtie: "painting" },
      { id: 60, specialtie: "excavation" },
    ],
    city: "Hamburg",
  },
] as Constructor[];

let mockFindAllConstructors: jest.SpyInstance;

beforeEach(() => {
  mockFindAllConstructors = jest
    .spyOn(ConstructorService, "findAllConstructors")
    .mockImplementation(() => Promise.resolve(mockConstructors));
});

describe("Constructor List component", () => {
  it("should display all constructors", async () => {
    // ConstructorService.findAllConstructors = jest.fn(() => Promise.resolve(mockConstructors));

    render(<ConstructorList />);

    expect(ConstructorService.findAllConstructors).toHaveBeenCalled();
    expect(await screen.findByText("Alpha Constructor Co")).toBeInTheDocument();
    expect(await screen.findByText("Gamma Corportate")).toBeInTheDocument();
  });

  it("should search a constructor by name", async () => {
    const inputValue = "Alpha";

    render(<ConstructorList />);

    const searchInput = await screen.findByPlaceholderText<HTMLInputElement>(
      "Constructor name"
    );

    fireEvent.change(searchInput, { target: { value: inputValue } });

    expect(await screen.findByText("Alpha Constructor Co")).toBeInTheDocument();
    expect(screen.queryByText("Gamma Corportate")).not.toBeInTheDocument();
  });

  it("should filter all constructor with excavation specialtie", async () => {
    render(<ConstructorList />);

    const excavationCheckbox = await screen.findByLabelText("excavation");

    fireEvent.click(excavationCheckbox);

    expect(screen.queryByText("Alpha Constructor Co")).not.toBeInTheDocument();
    expect(await screen.findByText("Gamma Corportate")).toBeInTheDocument();
  });

  it('should display "No constructors found!" when a search don\'t return results', async () => {
    const inputValue = "xkskdjskglksdhewrihjfije";

    render(<ConstructorList />);

    const searchInput = await screen.findByPlaceholderText<HTMLInputElement>(
      "Constructor name"
    );

    fireEvent.change(searchInput, { target: { value: inputValue } });

    expect(
      await screen.findByText("No constructors found!")
    ).toBeInTheDocument();
  });

  it("should display error when something goes wrong", async () => {
    mockFindAllConstructors.mockClear();

    jest
      .spyOn(ConstructorService, "findAllConstructors")
      .mockImplementation(() => Promise.reject("Server error"));

    render(<ConstructorList />);
    expect(
      await screen.findByText("Error while loading constructors")
    ).toBeInTheDocument();
  });
});
