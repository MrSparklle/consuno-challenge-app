import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AlertWrapper from "./AlertWrapper";

describe("Alert component", () => {

  it("should display the proper message alert", () => {
    render(
      <AlertWrapper>
        <h3>No constructors found!</h3>
      </AlertWrapper>
    );
    expect(screen.getByText("No constructors found!")).toBeInTheDocument();
  });
});
