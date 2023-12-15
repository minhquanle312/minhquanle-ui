// Libraries
import React from 'react';
import { render } from '@testing-library/react';
// Components
import { Steps } from '../Steps';

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation(query => ({
    media: query,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
});

describe('Steps', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <Steps
        items={[
          {
            title: 'Finished',
            description: 'This is description',
          },
          {
            title: 'In Progress',
            description: 'This is description',

            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Waiting',
            description: 'This is description',
          },
        ]}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });

  it('render step item ', () => {
    const { getByText } = render(
      <Steps
        items={[
          {
            title: 'Finished',
            description: 'This is description',
          },
          {
            title: 'In Progress',
            description: 'This is description',

            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Waiting',
            description: 'This is description',
          },
        ]}
      />,
    );

    const step1 = getByText('Finished');
    const step2 = getByText('In Progress');
    const step3 = getByText('Waiting');

    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
  });

  it('render active item', () => {
    const { getByText } = render(
      <Steps
        current={1}
        items={[
          {
            title: 'Finished',
            description: 'This is description',
          },
          {
            title: 'In Progress',
            description: 'This is description',

            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Waiting',
            description: 'This is description',
          },
        ]}
      />,
    );

    const inProgressStep = getByText('In Progress');
    const stepsItemContent = inProgressStep.parentElement;

    expect(stepsItemContent?.parentNode?.parentNode).toHaveClass('ant-steps-item-active');
  });
});
