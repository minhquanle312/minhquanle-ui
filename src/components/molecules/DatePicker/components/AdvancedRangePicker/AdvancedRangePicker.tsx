// Libraries
import dayjs from 'dayjs'
import React from 'react'
import omit from 'lodash/omit'
import isEqual from 'react-fast-compare'
import { useTranslation } from 'react-i18next'

// Types
import { TOption, TShowCalculationTypeCondition } from '../AdvancedPicker/types'
import {
  TDateConfig,
  TOnChangeMode,
  TOnChangePayload,
  TTimeRange,
} from './types'

// Atoms
import { Space } from '../../../../atoms'

// Molecules
import { AdvancedPicker } from '../AdvancedPicker'

// Constants
import { ADVANCED_RANGE_PICKER_FORMAT } from './constants'

// Utils
import { handleError } from 'minhquanle-ui/es/utils'
import { translations } from 'minhquanle-ui/es/locales/translations'

export interface AdvancedRangePickerProps {
  disabled?: boolean
  showCalculationTypeCondition?: TShowCalculationTypeCondition
  startDateConfig?: TDateConfig
  endDateConfig?: TDateConfig
  timeRange: TTimeRange
  errorMessage?: string
  showLabel?: boolean
  showTime?: boolean
  onChange?: ({ timeRange, mode }: TOnChangePayload) => void
}

const PATH =
  'minhquanle-ui/es/components/molecules/DatePicker/components/AdvancedRangePicker/AdvancedRangePicker.tsx'

export const AdvancedRangePicker: React.FC<AdvancedRangePickerProps> = (
  props
) => {
  const { t } = useTranslation()

  // Props
  const {
    timeRange,
    errorMessage,
    showLabel,
    startDateConfig,
    endDateConfig,
    showTime,
    showCalculationTypeCondition,
    disabled,
    onChange,
  } = props

  // Handles
  const onUpdateTimeRange = (
    key: 'startDate' | 'endDate',
    params: Partial<TOption & { date: string }>,
    mode: TOnChangeMode = 'user'
  ) => {
    try {
      if (typeof onChange === 'function') {
        const newTimeRange = {
          ...timeRange,
          [key]: {
            ...timeRange[key],
            ...params,
          },
        }

        if (!isEqual(newTimeRange, timeRange)) {
          onChange({
            timeRange: newTimeRange,
            mode,
          })
        }
      }
    } catch (error) {
      // Handle Error
      handleError(error, {
        path: PATH,
        name: 'onUpdateTimeRange',
        args: {},
      })
    }
  }

  return (
    <Space size={20}>
      <AdvancedPicker
        disabled={disabled}
        label={showLabel ? t(translations.datePicker.startDate) || '' : ''}
        date={timeRange.startDate.date}
        option={omit(timeRange.startDate, 'date')}
        operatorKey="between"
        type="startDate"
        format={ADVANCED_RANGE_PICKER_FORMAT.startDate}
        errorMessage={errorMessage}
        disableAfterDate={timeRange.endDate.date}
        showTime={showTime}
        calculationTypeKeysShow={startDateConfig?.calculationTypeKeysShow}
        showCalculationTypeCondition={showCalculationTypeCondition}
        onUpdatedNewDate={(date) =>
          onUpdateTimeRange('startDate', { date }, 'system')
        }
        onApply={({ date, option }) =>
          onUpdateTimeRange('startDate', { date, ...option }, 'user')
        }
      />

      <AdvancedPicker
        disabled={disabled}
        label={showLabel ? t(translations.datePicker.endDate) || '' : ''}
        date={timeRange.endDate.date}
        option={omit(timeRange.endDate, 'date')}
        operatorKey="between"
        type="endDate"
        format={ADVANCED_RANGE_PICKER_FORMAT.endDate}
        errorMessage={errorMessage}
        showTime={showTime}
        calculationTypeKeysShow={endDateConfig?.calculationTypeKeysShow}
        showCalculationTypeCondition={showCalculationTypeCondition}
        onUpdatedNewDate={(date) =>
          onUpdateTimeRange('endDate', { date }, 'system')
        }
        onApply={({ date, option }) =>
          onUpdateTimeRange('endDate', { date, ...option }, 'user')
        }
      />
    </Space>
  )
}

AdvancedRangePicker.defaultProps = {
  timeRange: {
    startDate: {
      date: dayjs().format(ADVANCED_RANGE_PICKER_FORMAT.startDate),
      calculationDate: 'years',
      value: 1,
      calculationType: 'minus',
      dateType: 'today',
    },
    endDate: {
      date: dayjs().format(ADVANCED_RANGE_PICKER_FORMAT.endDate),
      calculationDate: 'days',
      value: 1,
      calculationType: 'minus',
      dateType: 'today',
    },
  },
  errorMessage: '',
  disabled: false,
  showLabel: true,
  showTime: true,
}
