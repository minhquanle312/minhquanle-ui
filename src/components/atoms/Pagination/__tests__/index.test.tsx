import React from 'react';
import { render } from '@testing-library/react';
import { Pagination } from 'antd';

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation(query => ({
    media: query,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
});

const PaginationTest = () => <Pagination total={50} pageSize={10} />;

describe('Pagination', () => {
  it('should match snapshot', () => {
    const { container } = render(<PaginationTest />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('render page in the pagination component', () => {
    const { getByText } = render(<PaginationTest />);

    const paginationText = getByText('5');

    expect(paginationText).toBeInTheDocument();
  });
});
