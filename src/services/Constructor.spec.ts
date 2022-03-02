import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import { Constructor } from "models";
import { ConstructorService } from "./Constructor.service";

it("should return all constructors data", async () => {
  const res = [
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

  jest.spyOn(axios, "get").mockImplementation(() =>
    Promise.resolve({
      status: 200,
      data: res,
      headers: { "content-type": "application/json" },
    })
  );

  const result = await ConstructorService.findAllConstructors();

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toBeCalledWith("/constructors");
  expect(result).toEqual(res);
  expect(result).toBeInstanceOf(Array);
});
