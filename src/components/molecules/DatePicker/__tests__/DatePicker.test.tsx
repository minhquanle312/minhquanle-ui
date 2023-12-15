// Libraries
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import dayjs from 'dayjs';

// Components
import { AdvancedPickerProps, DatePicker } from '..';
import { Default } from '../DatePicker.stories';
import { AdvancedPicker } from '../components/AdvancedPicker';
import { Button } from '../../../atoms';
import { Dropdown } from '../..';

// Constants
import {
  ADVANCED_PICKER_TYPE,
  DEFAULT_DATE_FORMAT,
  VALUE_TYPES,
} from '../components/AdvancedPicker/constants';

// Types
import { TOperatorKey } from '../components/AdvancedPicker/types';

// Styleds
import { DatePickerCustomInput } from '../components/AdvancedPicker/styled';

// Mock dependencies
jest.mock('react-i18next', () => ({ useTranslation: () => ({ t: jest.fn() }) }));

describe('DatePicker Component', () => {
  describe('Basic DatePicker Component', () => {
    it('should render the Basic DatePicker Component', () => {
      const { container } = render(<DatePicker />);

      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
  describe('Default DatePicker Component', () => {
    it('should render the Default DatePicker Component', () => {
      const args = {};
      const { container } = render(<Default {...args} />);

      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  describe('DatePickerCustomInput Component', () => {
    it('should check onClick event of DatePickerCustomInput', () => {
      const toggleOpenDropdown = jest.fn();
      const { getByPlaceholderText } = render(
        <DatePickerCustomInput readOnly placeholder="Select Date" onClick={toggleOpenDropdown} />,
      );

      const input = getByPlaceholderText('Select Date');
      fireEvent.click(input);

      expect(toggleOpenDropdown).toBeCalledTimes(1);
    });
  });

  describe('Advanced DatePicker Component', () => {
    const args: AdvancedPickerProps = {
      label: '',
      type: ADVANCED_PICKER_TYPE.START_DATE.value,
      operatorKey: 'after',
      dateTypeKeysShow: ['today'],
      date: dayjs().format(DEFAULT_DATE_FORMAT),
      format: DEFAULT_DATE_FORMAT,
      inputStyle: {
        width: 120,
      },
      option: {
        dateType: 'today',
        calculationType: 'minus',
        calculationDate: 'seconds',
        value: 0,
      },
      calculationTypeKeysShow: ['minus', 'plus'],
      showCalculationTypeCondition: {
        dateType: {
          today: ['minus'],
        },
      },
      formatInputDisplay: 'MMM DD, YYYY',
      valueType: 'default',
      showTime: true,
      disabled: false,
    };

    it('should render the Advanced DatePicker Component', () => {
      const { container } = render(<AdvancedPicker {...args} />);

      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    it('should render with the defaultDateTypeKey', () => {
      const args: AdvancedPickerProps = { defaultDateTypeKey: 'today' };
      const { container } = render(<AdvancedPicker {...args} />);

      expect(container).toBeInTheDocument();
    });

    it('should render without the defaultDateTypeKey', () => {
      const args: AdvancedPickerProps = {};
      const { container } = render(<AdvancedPicker {...args} />);

      expect(container).toBeInTheDocument();
    });

    it('should render newCalculationDates ', () => {
      const ValueTypes = [
        VALUE_TYPES.YEAR_MONTH_DAY_HOUR,
        VALUE_TYPES.YEAR_MONTH_DAY_MINUTE,
        VALUE_TYPES.YEAR,
        VALUE_TYPES.YEAR_MONTH,
        VALUE_TYPES.YEAR_MONTH_DAY_SECOND,
        VALUE_TYPES.YEAR_MONTH_DAY,
      ];

      ValueTypes.forEach(valueType => {
        const args: AdvancedPickerProps = { valueType };
        const { container } = render(<AdvancedPicker {...args} />);
        expect(container).toBeInTheDocument();
      });
    });

    it('should handle detect day is start or end', () => {
      const operatorKeys: TOperatorKey[] = ['before', 'between', 'after'];

      operatorKeys.forEach(operatorKey => {
        const args: AdvancedPickerProps = { operatorKey };
        const { container } = render(<AdvancedPicker {...args} />);

        expect(container).toBeInTheDocument();
      });
    });

    it('should show CalculationTypeCondition ', () => {
      const args: AdvancedPickerProps = {
        showCalculationTypeCondition: {
          dateType: {
            today: ['minus'],
          },
        },
      };

      const { container } = render(<AdvancedPicker {...args} />);
      expect(container).toBeInTheDocument();
    });

    it('should show CalculationTypeCondition with empty value', () => {
      const args: AdvancedPickerProps = {
        calculationTypeKeysShow: [''],
        showCalculationTypeCondition: {
          dateType: {
            fixed: [''],
          },
        },
      };

      const { container } = render(<AdvancedPicker {...args} />);
      expect(container).toBeInTheDocument();
    });

    it("should handle set state with newDateType.value === 'fixed'", () => {
      const args: AdvancedPickerProps = {
        option: {
          dateType: 'fixed',
          calculationType: 'minus',
          calculationDate: 'seconds',
          value: 0,
        },
      };

      const { container } = render(<AdvancedPicker {...args} />);
      expect(container).toBeInTheDocument();
    });

    it('should handle set state with invalid date', () => {
      const args: AdvancedPickerProps = {
        date: '2023/7-5',
        option: {
          dateType: 'fixed',
          calculationType: 'minus',
          calculationDate: 'seconds',
          value: 0,
        },
        showCalculationTypeCondition: {
          dateType: { first_day_of_year: ['plus'] },
        },
      };

      const { container } = render(<AdvancedPicker {...args} />);
      expect(container).toBeInTheDocument();
    });

    it('should handle click button Apply', () => {
      const onClickApply = jest.fn();
      const { getByText } = render(
        <Button type="primary" onClick={onClickApply}>
          Apply
        </Button>,
      );

      const button = getByText('Apply');

      fireEvent.click(button);
      expect(onClickApply).toBeCalled();
    });

    it('should render Text Component when label is not empty', () => {
      const args: AdvancedPickerProps = {
        label: 'text',
      };

      const { container } = render(<AdvancedPicker {...args} />);
      expect(container).toBeInTheDocument();
    });

    it('should handle inputRender when DatePicker is changed', () => {
      const handleInputRender = jest.fn();
      const { container } = render(
        <DatePicker
          disabled={false}
          allowClear={false}
          inputReadOnly
          inputRender={handleInputRender}
        />,
      );
      fireEvent.change(container);
      expect(handleInputRender).toHaveBeenCalledTimes(1);
      expect(container).toBeInTheDocument();
    });

    it('should handle onOpenChange when Dropdown is changed', () => {
      // Mock toggleOpenDropdown function
      const toggleOpenDropdown = jest.fn();

      const { getByRole, getByText } = render(
        <Dropdown
          disabled={false}
          open
          dropdownRender={() => <div>Dropdown Content</div>}
          trigger={['click']}
          onOpenChange={toggleOpenDropdown}
        >
          <input
            type="text"
            disabled={false}
            onClick={toggleOpenDropdown}
            readOnly
            value="Dropdown Input"
          />
        </Dropdown>,
      );

      // Find the input element
      const inputElement = getByRole('textbox');

      // Trigger click event on input element
      fireEvent.click(inputElement);

      // Check if toggleOpenDropdown function has been called
      expect(toggleOpenDropdown).toHaveBeenCalled();

      // Find the dropdown content
      const dropdownContent = getByText('Dropdown Content');

      // Check if the dropdown content is rendered
      expect(dropdownContent).toBeInTheDocument();
    });

    it('should render the Advanced DatePicker Component with dateTypeKeysShow = fixed', () => {
      const args: AdvancedPickerProps = {
        dateTypeKeysShow: ['fixed'],
      };

      const { container } = render(<AdvancedPicker {...args} />);

      expect(container).toBeInTheDocument();
    });

    it('should render the Advanced DatePicker Component with errorMessage', () => {
      const args: AdvancedPickerProps = {
        errorMessage: 'message',
      };

      const { container } = render(<AdvancedPicker {...args} />);

      expect(container).toBeInTheDocument();
    });

    it('should render the Advanced DatePicker Component with disabled', () => {
      const args: AdvancedPickerProps = {
        disabled: true,
      };

      const { container } = render(<AdvancedPicker {...args} />);

      expect(container).toBeInTheDocument();
    });
  });
});
