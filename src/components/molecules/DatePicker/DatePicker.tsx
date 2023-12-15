// Libraries
import { DatePicker as AntdDatePicker } from 'antd';

// Components
import { AdvancedPicker } from './components/AdvancedPicker';
import { AdvancedRangePicker } from './components/AdvancedRangePicker';

export type TDatePicker = typeof AntdDatePicker & {
  AdvancedPicker: typeof AdvancedPicker;
  AdvancedRangePicker: typeof AdvancedRangePicker;
};

export const DatePicker = AntdDatePicker as TDatePicker;

DatePicker.AdvancedPicker = AdvancedPicker;
DatePicker.AdvancedRangePicker = AdvancedRangePicker;
