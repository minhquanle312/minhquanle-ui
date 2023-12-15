/* eslint-disable no-console */
// Libraries
import React, { useMemo, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import dedent from 'ts-dedent';

// Components
import { AdvancedRangePicker } from './AdvancedRangePicker';
import dayjs from 'dayjs';
import { TTimeRange } from './types';

export default {
  title: 'Molecules/DatePicker/AdvancedRangePicker',
  component: AdvancedRangePicker,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'To select a time range dynamic date.',
      },
    },
  },
} as ComponentMeta<typeof AdvancedRangePicker>;

// Default
export const Template: ComponentStory<typeof AdvancedRangePicker> = args => (
  <AdvancedRangePicker {...args} />
);

export const Basic: ComponentStory<typeof AdvancedRangePicker> = () => {
  // State
  const [timeRange, setTimeRange] = useState<TTimeRange>({
    startDate: {
      date: '',
      calculationDate: 'years',
      value: 1,
      calculationType: 'minus',
      dateType: 'today',
    },
    endDate: {
      date: '',
      calculationDate: 'days',
      value: 1,
      calculationType: 'minus',
      dateType: 'today',
    },
  });

  // Memo
  const errorMessage = useMemo(() => {
    const { date: startDate } = timeRange.startDate;
    const { date: endDate } = timeRange.endDate;

    if (dayjs(endDate).diff(dayjs(startDate)) < 0) {
      return 'End date is earlier than start date';
    }

    return '';
  }, [timeRange.startDate, timeRange.endDate]);

  // Handlers
  const onChangeAdvancedRangePicker = ({ timeRange, mode: _mode }) => {
    try {
      setTimeRange(previousTimeRange => ({ ...previousTimeRange, ...timeRange }));
    } catch (error) {
      // Handle Error
    }
  };

  return (
    <AdvancedRangePicker
      timeRange={timeRange}
      errorMessage={errorMessage}
      onChange={onChangeAdvancedRangePicker}
    />
  );
};

Basic.args = {};
Basic.parameters = {
  docs: {
    description: {
      story: 'The basic example about `AdvancedRangePicker` Component',
    },
    source: {
      code: dedent`
      // Libraries
      import { React } from 'react';

      // Components
      import { DatePicker, TAdvancedRangePickerTimeRange } from '@antscorp/antsomi-ui';

      const { AdvancedRangePicker } = DatePicker;

      export const App = () => {
        // State
        const [timeRange, setTimeRange] = useState<TAdvancedRangePickerTimeRange>({
          startDate: {
            date: '',
            calculationDate: 'years',
            value: 1,
            calculationType: 'minus',
            dateType: 'today',
          },
          endDate: {
            date: '',
            calculationDate: 'days',
            value: 1,
            calculationType: 'minus',
            dateType: 'today',
          },
        });

        // Memo
        const errorMessage = useMemo(() => {
          const { date: startDate } = timeRange.startDate;
          const { date: endDate } = timeRange.endDate;

          if (dayjs(endDate).diff(dayjs(startDate)) < 0) {
            return 'End date is earlier than start date';
          }

          return '';
        }, [timeRange.startDate, timeRange.endDate]);

        // Handlers
        const onChangeAdvancedRangePicker = ({ timeRange, mode: _mode }) => {
          try {
            setTimeRange((previousTimeRange) => ({ ...previousTimeRange, ...timeRange }));
          } catch (error) {
            // Handle Error
          }
        };

        return (
          <AdvancedRangePicker
            timeRange={timeRange}
            errorMessage={errorMessage}
            onChange={onChangeAdvancedRangePicker}
          />
        );
      };
      `,
      language: 'tsx',
      type: 'auto',
    },
  },
};

export const HideTimeLabel: ComponentStory<typeof AdvancedRangePicker> = () => {
  // State
  const [timeRange, setTimeRange] = useState<TTimeRange>({
    startDate: {
      date: '',
      calculationDate: 'years',
      value: 1,
      calculationType: 'minus',
      dateType: 'today',
    },
    endDate: {
      date: '',
      calculationDate: 'days',
      value: 1,
      calculationType: 'minus',
      dateType: 'today',
    },
  });

  // Handlers
  const onChangeAdvancedRangePicker = ({ timeRange, mode: _mode }) => {
    try {
      setTimeRange(previousTimeRange => ({ ...previousTimeRange, ...timeRange }));
    } catch (error) {
      // Handle Error
    }
  };

  return (
    <AdvancedRangePicker
      showTime={false}
      timeRange={timeRange}
      onChange={onChangeAdvancedRangePicker}
    />
  );
};

HideTimeLabel.args = {};
HideTimeLabel.parameters = {
  docs: {
    description: {
      story: "Don't want to show time in popup",
    },
    source: {
      code: dedent`
      // Libraries
      import { React } from 'react';

      // Components
      import { DatePicker, TAdvancedRangePickerTimeRange } from '@antscorp/antsomi-ui';

      const { AdvancedRangePicker } = DatePicker;

      export const App = () => {
        // State
        const [timeRange, setTimeRange] = useState<TAdvancedRangePickerTimeRange>({
          startDate: {
            date: '',
            calculationDate: 'years',
            value: 1,
            calculationType: 'minus',
            dateType: 'today',
          },
          endDate: {
            date: '',
            calculationDate: 'days',
            value: 1,
            calculationType: 'minus',
            dateType: 'today',
          },
        });

        // Handlers
        const onChangeAdvancedRangePicker = ({ timeRange, mode: _mode }) => {
          try {
            setTimeRange((previousTimeRange) => ({ ...previousTimeRange, ...timeRange }));
          } catch (error) {
            // Handle Error
          }
        };

        return (
          <AdvancedRangePicker
            showTime={false}
            timeRange={timeRange}
            onChange={onChangeAdvancedRangePicker}
          />
        );
      };
      `,
      language: 'tsx',
      type: 'auto',
    },
  },
};

export const ShowCalculationTypeCondition: ComponentStory<typeof AdvancedRangePicker> = () => {
  // State
  const [timeRange, setTimeRange] = useState<TTimeRange>({
    startDate: {
      date: '',
      calculationDate: 'years',
      value: 1,
      calculationType: 'minus',
      dateType: 'today',
    },
    endDate: {
      date: '',
      calculationDate: 'days',
      value: 1,
      calculationType: 'minus',
      dateType: 'today',
    },
  });

  // Handlers
  const onChangeAdvancedRangePicker = ({ timeRange, mode: _mode }) => {
    try {
      setTimeRange(previousTimeRange => ({ ...previousTimeRange, ...timeRange }));
    } catch (error) {
      // Handle Error
    }
  };

  return (
    <AdvancedRangePicker
      showCalculationTypeCondition={{
        dateType: {
          today: ['minus'],
        },
      }}
      showTime={false}
      timeRange={timeRange}
      onChange={onChangeAdvancedRangePicker}
    />
  );
};

ShowCalculationTypeCondition.args = {};
ShowCalculationTypeCondition.parameters = {
  docs: {
    description: {
      story: 'Here is an example to show the calculation type by dateType',
    },
  },
};
