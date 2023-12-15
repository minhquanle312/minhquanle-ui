// Libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
// Components
import { Card } from '../Card';

const CardTest = () => (
  <Card title="Card Title" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

describe('Card', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CardTest />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });

  it('render text in card', () => {
    render(<CardTest />);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    const cardContentElements = screen.getAllByText('Card content', { selector: 'p' });
    expect(cardContentElements.length).toBe(3);
  });

  it('test applies custom styles', () => {
    const { container } = render(<CardTest />);
    const cardElement = container.querySelector('.ant-card');
    expect(cardElement).toHaveStyle('width: 300px');
  });
});
