import * as React from 'react';
import { render } from '@testing-library/react';

// Components
import { Timeline } from '..';

const items = [
  {
    children: 'Create a services site 2015-09-01',
  },
  {
    children: 'Solve initial network problems 2015-09-01',
  },
  {
    children: 'Technical testing 2015-09-01',
  },
  {
    children: 'Network problems being solved 2015-09-01',
  },
];
describe('<Timeline />', () => {
  it('renders timeline items', () => {
    const { getByText } = render(<Timeline items={items} />);

    items.forEach(event => {
      expect(getByText(event.children)).toBeInTheDocument();
    });
  });
  it('renders number of timeline items', () => {
    const { getAllByRole } = render(<Timeline items={items} />);

    const timelineItems = getAllByRole('listitem');
    expect(timelineItems).toHaveLength(items.length);
  });
  it('renders no timeline items with empty ', () => {
    const { queryByRole } = render(<Timeline items={[]} />);
    const timelineItems = queryByRole('listitem');
    expect(timelineItems).toBeNull();
  });
});
