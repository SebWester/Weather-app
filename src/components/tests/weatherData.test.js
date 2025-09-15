// fetchWeatherData.test.js
import { fetchWeatherData } from "../../services/weatherData";

describe("fetchWeatherData", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("log error if location is missing", async () => {
    console.log = jest.fn();

    await fetchWeatherData(null);

    expect(console.log).toHaveBeenCalledWith("COULD NOT GET CURRENT LOCATION");
  });

  it("fetch and return data when successful", async () => {
    const mockData = { hourly: { temperature_2m: [5, 6, 7] } };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    const location = { lat: 59.33, lon: 18.06 };
    const data = await fetchWeatherData(location);

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("latitude=59.33&longitude=18.06")
    );
    expect(data).toEqual(mockData);
  });

  it("log error if response is not ok", async () => {
    console.log = jest.fn();

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const location = { lat: 59.33, lon: 18.06 };
    const result = await fetchWeatherData(location);

    expect(console.log).toHaveBeenCalledWith("Couldn't fetch weather data");
    expect(result).toBeUndefined();
  });
});
