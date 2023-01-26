import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { LocationItem, WeatherItem } from "../types";
import { securedGet } from "./networking/fetch-client";
import { cityIdsQuery } from "./service-config";

type LocationApiItem = LocationItem & {
  main: {
    temp: number;
  };
  weather: Array<WeatherItem>;
};

type LocationApiResponse = {
  list: Array<LocationApiItem>;
};

type LocationResponse = Array<LocationItem>;

export const useLocationWeather = () =>
  useQuery<LocationApiResponse, Error, LocationResponse>(
    ["locationWeather"],
    () => securedGet<LocationApiResponse>(`group?id=${cityIdsQuery}&cnt=1`),
    {
      select: useCallback((data: LocationApiResponse) => {
        const parsedLocation = data.list.map((location) => ({
          ...location,
          weather: location.weather[0],
        }));

        return parsedLocation;
      }, []),
    }
  );
