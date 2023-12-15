/* eslint-disable max-len */
// Libraries
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

// Constants
import { DEFAULT_DATE_FORMAT } from './constants';

dayjs.extend(isoWeek);
dayjs.extend(quarterOfYear);

/**
 * Calculates a new date based on the given parameters.
 * @param {string} [dateTypeKey='today'] - Key to determine the type of date to be used as the starting point.
 * Valid values are: 'today', 'first_day_of_week_mon_sun', 'first_day_of_week_sun_sat',
 * 'first_day_of_month', 'first_day_of_quarter', 'first_day_of_year', 'last_day_of_week_mon_sun',
 * 'last_day_of_week_sun_sat', 'last_day_of_month', 'last_day_of_quarter', 'last_day_of_year'.
 * @param {string} [calculationTypeKey='minus'] - Key to determine whether to add or subtract the specified value.
 * Valid values are: 'plus', 'minus'.
 * @param {string} [calculationDateKey='days'] - Key to determine the unit of time to be added or subtracted.
 * Valid values are: 'days', 'weeks', 'months', 'quarters', 'years'.
 * @param {number} [value=0] - Value to be added or subtracted.
 * @param {string} [dateFormat=DEFAULT_DATE_FORMAT] - Format in which to return the new date.
 * @returns {string} The new date in the specified format.
 */
export const calculationDateAdvanced = (
  dateTypeKey = 'today',
  calculationTypeKey = 'minus',
  calculationDateKey: any = 'days',
  value = 0,
  dateFormat = DEFAULT_DATE_FORMAT,
) => {
  let date = dayjs();

  switch (dateTypeKey) {
    case 'today':
      date = dayjs();
      break;
    case 'first_day_of_week_mon_sun':
      date = dayjs().startOf('isoWeek');
      break;
    case 'first_day_of_week_sun_sat':
      date = dayjs().startOf('week');
      break;
    case 'first_day_of_month':
      date = dayjs().startOf('month');
      break;
    case 'first_day_of_quarter':
      date = dayjs().startOf('quarter');
      break;
    case 'first_day_of_year':
      date = dayjs().startOf('year');
      break;
    case 'last_day_of_week_mon_sun':
      date = dayjs().endOf('isoWeek');
      break;
    case 'last_day_of_week_sun_sat':
      date = dayjs().endOf('week');
      break;
    case 'last_day_of_month':
      date = dayjs().endOf('month');
      break;
    case 'last_day_of_quarter':
      date = dayjs().endOf('quarter');
      break;
    case 'last_day_of_year':
      date = dayjs().endOf('year');
      break;
    default:
      date = dayjs();
      break;
  }

  let newDate: any = '';

  newDate =
    calculationTypeKey === 'plus'
      ? dayjs(date).add(value, calculationDateKey)
      : dayjs(date).subtract(value, calculationDateKey);

  switch (dateTypeKey) {
    case 'last_day_of_month':
      if (calculationDateKey === 'months' || calculationDateKey === 'quarters') {
        newDate = dayjs(newDate).endOf('month');
      }
      break;
    case 'last_day_of_quarter':
      if (calculationDateKey === 'months' || calculationDateKey === 'quarters') {
        newDate = dayjs(newDate).endOf('month');
      }
      break;

    default:
      break;
  }

  return newDate.format(dateFormat);
};
