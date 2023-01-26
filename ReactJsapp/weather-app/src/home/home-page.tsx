import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import { ActivityIndicator } from "../components/activity-indicator";
import { WeatherLogo } from "../components/weather-logo";
import { useLocationWeather } from "../services/useLocationWeather";
import { WeatherItem } from "../types";
import "./home-page.css";

type ItemProp = {
  locationId: string;
  name: string;
  weather: WeatherItem;
  temp: string;
  onLocationSelected: (locationId: string) => void;
};

export const HomePage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useLocationWeather();

  if (isLoading) {
    return <ActivityIndicator size="medium" />;
  }

  const handleLocationSelected = (locationId: string) => {
    console.log("SHOULD REDIRECT");
    const locationInfo = data?.find(
      (locationItem) => locationId === locationItem.id.toString()
    );
    navigate(`/details/${locationId}`, { state: locationInfo });
  };

  return (
    <div>
      <h2>Weather</h2>
      <ul>
        {data?.map((location) => (
          <LocationItemList
            key={location.id}
            locationId={location.id.toString()}
            name={location.name}
            weather={location.weather}
            temp={location.main.temp.toString()}
            onLocationSelected={handleLocationSelected}
          />
        ))}
      </ul>
    </div>
  );
};

const LocationItemList = ({
  locationId,
  name,
  weather,
  temp,
  onLocationSelected,
}: ItemProp) => {
  const onClick = () => {
    onLocationSelected(locationId);
  };
  return (
    <li data-id={`${locationId}`} className="item-container" onClick={onClick}>
      <WeatherLogo iconId={weather.icon} />
      <div className="item-title">
        <h3>{name}</h3>
        {weather.description}
      </div>
      {temp}
    </li>
  );
};
