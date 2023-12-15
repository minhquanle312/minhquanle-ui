// Libraries
import React from 'react';
import { render } from '@testing-library/react';
// Components
import { Progress } from '../index';

describe('Progress', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Progress />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });

  test('should renders progress bar with correct percent', () => {
    const percent = 50;
    const { getByRole } = render(<Progress percent={percent} />);
    const progressBar = getByRole('progressbar');
    const scroll = progressBar.querySelector('.ant-progress-bg');
    expect(progressBar).toBeInTheDocument();
    expect(scroll).toHaveStyle(`width: ${percent}%`);
  });

  test('renders circle progress bar', () => {
    const { getByRole } = render(<Progress type="circle" />);
    const progressBar = getByRole('progressbar');

    expect(progressBar).toHaveClass('ant-progress-circle');
  });
});
