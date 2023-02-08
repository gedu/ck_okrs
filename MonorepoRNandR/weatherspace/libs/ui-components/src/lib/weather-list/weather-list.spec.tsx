import { render } from '@testing-library/react';

import WeatherList from './weather-list';

describe('WeatherList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherList />);
    expect(baseElement).toBeTruthy();
  });
});
