// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import { Divider } from '../index';
import { Horizontal, TextWithoutHeadingStyle, Vertical, Default } from '../Divider.stories';

describe('Divider Component', () => {
  it('should render the Divider Component', () => {
    const { container } = render(<Divider />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render the Default Divider Component', () => {
    const { container } = render(<Default />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render the Horizontal Divider Component', () => {
    const { container } = render(<Horizontal />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render the Vertical Divider Component', () => {
    const { container } = render(<Vertical />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render the TextWithoutHeadingStyle Divider Component', () => {
    const { container } = render(<TextWithoutHeadingStyle />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
