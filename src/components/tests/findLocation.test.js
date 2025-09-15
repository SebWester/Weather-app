// getLocation.test.js
import { getLocation } from "../../utils/findLocation";

describe("getLocation", () => {
  let setLocation;
  let setError;

  beforeEach(() => {
    setLocation = jest.fn();
    setError = jest.fn();
    // Rensa innan varje test
    jest.resetAllMocks();
  });

  it("Call setError when geolocation not supported", () => {
    delete global.navigator.geolocation;

    getLocation(setLocation, setError);

    expect(setError).toHaveBeenCalledWith(
      "Geo location not supported in your browser"
    );
    expect(setLocation).not.toHaveBeenCalled();
  });

  it("Should set location and clear error when successful", () => {
    const mockPosition = {
      coords: {
        latitude: 59.33,
        longitude: 18.06,
      },
    };

    global.navigator.geolocation = {
      getCurrentPosition: jest
        .fn()
        .mockImplementationOnce((success) => success(mockPosition)),
    };

    getLocation(setLocation, setError);

    expect(setLocation).toHaveBeenCalledWith({
      lat: 59.33,
      lon: 18.06,
    });
    expect(setError).toHaveBeenCalledWith(null);
  });

  it("Set error when unsuccessful", () => {
    const mockError = "User denied Geolocation";

    global.navigator.geolocation = {
      getCurrentPosition: jest
        .fn()
        .mockImplementationOnce((_, error) => error(mockError)),
    };

    getLocation(setLocation, setError);

    expect(setLocation).not.toHaveBeenCalled();
    expect(setError).toHaveBeenCalledWith(
      `Could not get location: ${mockError}`
    );
  });
});
