// Types
import { TAdvancedType } from './types';

export const DATE_TYPES = [
  { value: 'today', label: 'datePicker.dateTypes.today' },
  { value: 'first_day_of_week_mon_sun', label: 'datePicker.dateTypes.firstDayOfWeekMonSun' },
  { value: 'first_day_of_week_sun_sat', label: 'datePicker.dateTypes.firstDayOfWeekSunSat' },
  { value: 'first_day_of_month', label: 'datePicker.dateTypes.firstDayOfMonth' },
  { value: 'first_day_of_quarter', label: 'datePicker.dateTypes.firstDayOfQuarter' },
  { value: 'first_day_of_year', label: 'datePicker.dateTypes.firstDayOfYear' },
  { value: 'last_day_of_week_mon_sun', label: 'datePicker.dateTypes.lastDayOfWeekMonSun' },
  { value: 'last_day_of_week_sun_sat', label: 'datePicker.dateTypes.lastDayOfWeekSunSat' },
  { value: 'last_day_of_month', label: 'datePicker.dateTypes.lastDayOfMonth' },
  { value: 'last_day_of_quarter', label: 'datePicker.dateTypes.lastDayOfQuarter' },
  { value: 'last_day_of_year', label: 'datePicker.dateTypes.lastDayOfYear' },
  { value: 'fixed', label: 'datePicker.dateTypes.fixed' },
];

export const CALCULATION_TYPES = [
  { value: 'minus', label: 'global.minus' },
  { value: 'plus', label: 'global.plus' },
];

export const CALCULATION_DATES = [
  { value: 'seconds', label: 'datePicker.seconds' },
  { value: 'minutes', label: 'datePicker.minutes' },
  { value: 'hours', label: 'datePicker.hours' },
  { value: 'days', label: 'datePicker.days' },
  { value: 'weeks', label: 'datePicker.weeks' },
  { value: 'months', label: 'datePicker.months' },
  { value: 'quarters', label: 'datePicker.quarters' },
  { value: 'years', label: 'datePicker.years' },
];

export const VALUE_TYPES = {
  INPUT_TEXT: 'INPUT_TEXT',
  INPUT_NUMBER: 'INPUT_NUMBER',
  MATCHES_ANY: 'MATCHES_ANY',
  YEAR: 'YEAR',
  YEAR_QUARTER: 'YEAR_QUARTER',
  YEAR_MONTH: 'YEAR_MONTH',
  YEAR_WEEK: 'YEAR_WEEK',
  YEAR_MONTH_DAY: 'YEAR_MONTH_DAY',
  YEAR_MONTH_DAY_HOUR: 'YEAR_MONTH_DAY_HOUR',
  YEAR_MONTH_DAY_MINUTE: 'YEAR_MONTH_DAY_MINUTE',
  YEAR_MONTH_DAY_SECOND: 'YEAR_MONTH_DAY_SECOND',
  QUARTER: 'QUARTER',
  MONTH: 'MONTH',
  WEEK: 'WEEK',
  MONTH_DAY: 'MONTH_DAY',
  DAY_OF_WEEK: 'DAY_OF_WEEK',
  DAY: 'DAY',
  HOUR: 'HOUR',
  MINUTE: 'MINUTE',
  INPUT_TEXT_NO_FIELD: 'INPUT_TEXT_NO_FIELD',
};

export const DEFAULT_DATE_FORMAT = 'YYYYMMDDHHmmss';
export const DEFAULT_TIME_FORMAT = 'HH:mm:ss';
export const DEFAULT_DATE_DISPLAY_FORMAT = 'DD/MM/YYYY HH:mm:ss';

export const TIME_PICKER_TYPE = {
  DATE_TIME: 'DateTime',
  DATE_HOUR: 'DateHour',
  DATE_HOUR_MINUTE: 'DateHourMinute',
  DATE: 'Date',
};

export const YEAR_PICKER_TYPE = {
  YEAR: 'year',
  MONTH: 'month',
  QUARTER: 'quarter',
};

export const ADVANCED_PICKER_TYPE: Record<string, { value: TAdvancedType; label: string }> = {
  START_DATE: {
    value: 'startDate',
    label: 'datePicker.startDate',
  },
  END_DATE: {
    value: 'endDate',
    label: 'datePicker.endDate',
  },
};
