import React from "react";
import SearchInput from "../";
import { fireEvent, render, screen } from "@testing-library/react";

test("Test search input component", () => {
  const { container } = render(<SearchInput />);
  const input = container.querySelector("input");

  expect(input?.placeholder).toBe("Insert username");
});
