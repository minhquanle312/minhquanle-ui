// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import { Statistic } from '../Statistic';

describe('Statistic', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Statistic />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it('render the correct value', () => {
    const value = 30;
    const { getByText } = render(<Statistic value={value} />);
    expect(getByText(`${value}`)).toBeInTheDocument();
  });

  it('render styles Statistic components', () => {
    const { container } = render(<Statistic style={{ color: 'red', fontSize: '24px' }} />);
    const statisticElement = container.querySelector('.ant-statistic');
    expect(statisticElement).toHaveStyle('color: red');
    expect(statisticElement).toHaveStyle('font-size: 24px');
  });
});
