import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Default as Button } from "./Button.stories";

it("renders the button in the default state", () => {
  const { container, getByText } = render(<Button>dummy</Button>);
  expect(getByText("dummy")).toBeInTheDocument();
});
