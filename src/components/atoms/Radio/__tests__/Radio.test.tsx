// Libraries
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Components
import { Radio } from '..';
import {
  Default,
  Basic,
  Disabled,
  RadioGroup,
  RadioGroupOptional,
  Size,
  RadioGroupAPI,
} from '../Radio.stories';

describe('Radio Component', () => {
  it('should render the Radio Component', () => {
    const { container } = render(<Radio />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  describe('Default Radio Component', () => {
    it('should render the Default Radio Component', () => {
      const args = {};
      const { container } = render(<Default {...args} />);

      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  describe('Basic Radio Component', () => {
    it('should render the Basic Radio Component', () => {
      const { container } = render(<Basic />);
      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  describe('Disabled Radio Component', () => {
    it('should render the Disabled Radio Component', () => {
      const { container } = render(<Disabled />);

      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    it('toggles disabled state on button click', () => {
      const { getByRole } = render(<Disabled />);
      const toggleButton = getByRole('button');
      fireEvent.click(toggleButton);
    });
  });

  describe('Radio Group Component', () => {
    it('should render the Radio Group Component', () => {
      const { container } = render(<RadioGroup />);
      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    it('should call funciton when RadioGroup onChange event', () => {
      const { getAllByRole } = render(<RadioGroup />);

      const radio = getAllByRole('radio')[1];
      fireEvent.click(radio);

      expect(radio).toBeChecked();
    });
  });

  describe('Radio Group Optional Component', () => {
    it('should render the Radio Group Optional Component', () => {
      const { container } = render(<RadioGroupOptional />);

      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    it('should trigger onChange when a Radio Group Optional is changed', () => {
      const { getAllByLabelText } = render(<RadioGroupOptional />);

      const radios = getAllByLabelText('Pear');

      radios.forEach(radio => {
        fireEvent.click(radio);
        expect(radio).toBeChecked();
      });
    });
  });

  describe('Size Radio Component', () => {
    it('should render the Size Radio Component', () => {
      const { container } = render(<Size />);
      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  describe('Radio Group API', () => {
    beforeAll(() => {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        media: query,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }));
    });

    it('should render the Radio Group API Component', () => {
      const { container } = render(<RadioGroupAPI />);
      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
});
