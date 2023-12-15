export type TOption = {
  dateType: TDateType;
  calculationType: TCalculationType;
  calculationDate: TCalculationDate;
  value: number;
};

export type TShowCalculationTypeCondition = {
  dateType: Partial<Record<TDateType, TCalculationType[]>>;
};

export type TDateType =
  | 'today'
  | 'first_day_of_week_mon_sun'
  | 'first_day_of_week_sun_sat'
  | 'first_day_of_month'
  | 'first_day_of_quarter'
  | 'first_day_of_year'
  | 'last_day_of_week_mon_sun'
  | 'last_day_of_week_sun_sat'
  | 'last_day_of_month'
  | 'last_day_of_quarter'
  | 'last_day_of_year'
  | 'fixed';

export type TCalculationType = 'minus' | 'plus' | '';

export type TCalculationDate =
  | 'seconds'
  | 'minutes'
  | 'hours'
  | 'days'
  | 'weeks'
  | 'months'
  | 'quarters'
  | 'years'
  | '';

export type TOperatorKey = 'after' | 'between' | 'before';

export type TAdvancedType = 'startDate' | 'endDate';
