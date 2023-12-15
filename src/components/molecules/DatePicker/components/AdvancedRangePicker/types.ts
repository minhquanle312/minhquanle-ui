// Types
import { TCalculationType, TOption } from '../AdvancedPicker/types';

export type TOnChangeMode = 'system' | 'user';

export type TTimeRange = {
  startDate: TOption & { date: string };
  endDate: TOption & { date: string };
};

export type TOnChangePayload = {
  timeRange: TTimeRange;
  mode: 'system' | 'user';
};

export type TDateConfig = {
  calculationTypeKeysShow?: TCalculationType[];
};
