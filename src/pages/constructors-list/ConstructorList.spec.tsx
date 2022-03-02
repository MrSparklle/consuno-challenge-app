import { findByRole, render, screen, waitFor } from "@testing-library/react";
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
    name: "Gamma Corportate ",
    logoUrl: "https://placekitten.com/200/200",
    specialties: [
      { id: 10, specialtie: "painting" },
      { id: 60, specialtie: "excavation" },
    ],
    city: "Hamburg",
  },
] as Constructor[];

// jest.mock("services/Constructor.service", () => {
//   return {
//     ConstructorService: jest.fn().mockImplementation(() => {
//       return {
//         findAllConstructors: Promise.resolve(mockConstructors),
//       }
//     }),
//   }
// });

// jest.mock("services/Constructor.service", () => {
//   return {
//     findAllConstructors: jest.fn(() => Promise.resolve(mockConstructors)),
//   };
// });
// jest.mock("services/Constructor.service", () => {
//   return jest.fn().mockImplementation(() => {
//     return { findAllConstructors: jest.fn(() => Promise.resolve(mockConstructors)) }
//   })
// });
// jest.mock("services/Constructor.service", () => {
//   return jest.fn(() => {
//     return { findAllConstructors: jest.fn(() => Promise.resolve(mockConstructors)) }
//   })
// });

describe("Constructor List component", () => {
  fit("should display all constructors", async () => {
    jest
      .spyOn(ConstructorService, "findAllConstructors")
      .mockImplementation(() => Promise.resolve(mockConstructors));

    // ConstructorService.findAllConstructors = jest.fn(() => Promise.resolve(mockConstructors));

    render(<ConstructorList />);

    expect(await screen.findByText("Alpha Constructor Co")).toBeInTheDocument();

    expect(ConstructorService.findAllConstructors).toHaveBeenCalled();
  });
});
