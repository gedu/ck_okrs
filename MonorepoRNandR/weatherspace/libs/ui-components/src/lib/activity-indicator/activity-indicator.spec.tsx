import { render } from '@testing-library/react';

import ActivityIndicator from './activity-indicator';

describe('ActivityIndicator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActivityIndicator />);
    expect(baseElement).toBeTruthy();
  });
});
