// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { getStoreName } from '@weatherspace/store';
import { Route, Routes, Link } from 'react-router-dom';
import { ActivityIndicator, WeatherList } from '@weatherspace/ui-components';
import { LocationItem } from '@weatherspace/models';

export const mockItems: Array<LocationItem> = [
  {
    id: 3163858,
    name: 'Zocca',
    cod: 200,
    main: {
      temp: 50,
      humidity: 1,
      pressure: 2,
    },
    clouds: { all: 4 },
    wind: { speed: 3 },
    weather: {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  },
  {
    id: 3163857,
    name: 'London',
    cod: 200,
    main: {
      temp: 50,
      humidity: 1,
      pressure: 2,
    },
    clouds: { all: 4 },
    wind: { speed: 3 },
    weather: {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  },
];

export function App() {
  return (
    <>
      {/* <NxWelcome title="weather-web" /> */}
      <div />

      <WeatherList data={mockItems} isLoading={false} onItemPress={() => {}} />
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
