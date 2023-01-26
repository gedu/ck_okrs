export const buildIconUrl = (iconCode: string) =>
  `https://openweathermap.org/img/wn/${iconCode}.png`;

export const WeatherLogo = ({ iconId }: { iconId: string }) => {
  return <img src={buildIconUrl(iconId)} alt="weather-icon" />;
};
