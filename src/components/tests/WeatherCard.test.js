import { render, screen, fireEvent } from "@testing-library/react";
import WeatherCard from "../WeatherCard";

describe("WeatherCard", () => {
  const title = "Temperature";
  const data = 22;
  const unit = "°C";

  test("Renders title and data correctly", () => {
    render(<WeatherCard title={title} data={data} unit={unit} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`${data} ${unit}`)).toBeInTheDocument();

    expect(screen.getByRole("button").querySelector(".fa-eye")).toBeTruthy();
  });

  test("Show and hide card", () => {
    render(<WeatherCard title={title} data={data} unit={unit} />);
    const button = screen.getByRole("button");

    expect(screen.getByText(title).parentElement).toHaveClass("showText");

    // Toggle card class
    fireEvent.click(button);

    expect(screen.getByText(title).parentElement).toHaveClass("hideText");

    expect(button.querySelector(".fa-eye-slash")).toBeTruthy();
  });
});
