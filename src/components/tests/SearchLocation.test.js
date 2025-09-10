import { render, screen } from "@testing-library/react";
import SearchLocation from "../SearchLocation";

test("renders input element", () => {
  render(<SearchLocation />);
  const inputField = screen.getByPlaceholderText(/search/i);
  expect(inputField).toBeInTheDocument();
});
