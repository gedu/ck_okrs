import { useLocation } from "react-router-dom";
import { WeatherLogo } from "../components/weather-logo";
import { LocationItem } from "../types";
import "./details-page.css";

type DetailsPropsLocation = {
  state: LocationItem;
};

type ExtraInfoItemProps = {
  title: string;
  value: string;
};

export const DetailsPage = () => {
  const { state } = useLocation() as unknown as DetailsPropsLocation;

  return (
    <div>
      <div className="details-header">
        <WeatherLogo iconId={state.weather.icon} />
        <h2>{state.name}</h2>
      </div>
      <div className="content-divider" />

      <ExtraInfoItem title="Humidity" value={state.main.humidity.toString()} />
      <ExtraInfoItem title="Pressure" value={state.main.pressure.toString()} />
      <ExtraInfoItem title="Temperature" value={state.main.temp.toString()} />
    </div>
  );
};

const ExtraInfoItem = ({ title, value }: ExtraInfoItemProps) => {
  return (
    <div className="extra-item">
      <h3>{title}</h3>
      <div className="spacer" />
      {value}
    </div>
  );
};
