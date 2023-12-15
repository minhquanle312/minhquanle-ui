/* eslint-disable react/no-unused-prop-types */
// Libraries
import React, { useEffect, useMemo, useState } from 'react';
import { theme } from 'antd';
import dayjs from 'dayjs';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

// Hooks
import { useDeepCompareEffect } from '../../../../../hooks';

// Icons
import Icon from '@antscorp/icons';
import { EventIcon } from '../../../../icons';

// Atoms
import { Input, InputNumber, Divider, Space, Button, Typography } from 'src/components/atoms';

// Molecules
import { Select, Dropdown, DatePicker } from 'src/components';

// Utils
import { handleError, reorder } from 'src/utils';
import { calculationDateAdvanced } from './utils';

// Styled
import {
  DatePickerCustomInput,
  DatePickerHeader,
  DropdownContent,
  DropdownHeader,
  DatePickerFooter,
  DropdownFooter,
  CalendarIconWrapper,
} from './styled';

// Constants
import {
  CALCULATION_DATES,
  CALCULATION_TYPES,
  DATE_TYPES,
  DEFAULT_DATE_FORMAT,
  VALUE_TYPES,
  TIME_PICKER_TYPE,
  YEAR_PICKER_TYPE,
  ADVANCED_PICKER_TYPE,
} from './constants';
import { THEME } from '../../../../../constants';

// Types
import {
  TAdvancedType,
  TCalculationDate,
  TCalculationType,
  TOperatorKey,
  TOption,
  TShowCalculationTypeCondition,
} from './types';
import { RangePickerProps } from 'antd/es/date-picker';

export interface AdvancedPickerProps {
  label?: string;
  disabled?: boolean;
  dateTypeKeysShow?: string[];
  showCalculationTypeCondition?: TShowCalculationTypeCondition;
  calculationTypeKeysShow?: TCalculationType[];
  defaultDateTypeKey?: string;
  valueType?: string;
  option?: TOption;
  operatorKey?: TOperatorKey;
  type?: TAdvancedType;
  date?: string;
  format?: string;
  formatInputDisplay?: string;
  inputStyle?: React.CSSProperties;
  disableAfterDate?: string;
  disableBeforeDate?: string;
  errorMessage?: string;
  showTime?: boolean;
  onUpdatedNewDate?: (newDate: any) => void;
  onApply?: ({ date, option }: { date: string; option: TOption }) => void;
}

const PATH = 'src/components/molecules/DatePicker/components/Advanced/DatePickerAdvanced.tsx';

const { useToken } = theme;
const { Text } = Typography;

export const AdvancedPicker: React.FC<AdvancedPickerProps> = props => {
  // Props
  const {
    label,
    inputStyle,
    dateTypeKeysShow,
    calculationTypeKeysShow,
    showCalculationTypeCondition,
    defaultDateTypeKey,
    valueType,
    option: propsOption,
    operatorKey,
    type,
    date: propsDate,
    format,
    formatInputDisplay,
    errorMessage,
    disableAfterDate,
    disableBeforeDate,
    showTime,
    disabled,
    onUpdatedNewDate,
    onApply,
  } = props;

  // Memo
  const newDateTypes = useMemo(() => {
    if (dateTypeKeysShow && dateTypeKeysShow.length) {
      const draftDateTypes = DATE_TYPES.filter(dateType =>
        dateTypeKeysShow.some(key => key === dateType.value),
      );

      return draftDateTypes;
    }

    if (defaultDateTypeKey) {
      const index = DATE_TYPES.findIndex(dateType => dateType.value === defaultDateTypeKey);

      if (index !== -1) {
        return reorder(DATE_TYPES, index, 0);
      }
    }

    return DATE_TYPES;
  }, [dateTypeKeysShow, defaultDateTypeKey]);

  const newCalculationDates = useMemo(() => {
    switch (valueType) {
      case VALUE_TYPES.YEAR_MONTH_DAY:
        return CALCULATION_DATES.filter(
          calculationDate => !['hours', 'minutes', 'seconds'].includes(calculationDate.value),
        );

      case VALUE_TYPES.YEAR_MONTH_DAY_HOUR:
        return CALCULATION_DATES.filter(
          calculationDate => !['minutes', 'seconds'].includes(calculationDate.value),
        );

      case VALUE_TYPES.YEAR_MONTH_DAY_MINUTE:
        return CALCULATION_DATES.filter(
          calculationDate => !['seconds'].includes(calculationDate.value),
        );

      case VALUE_TYPES.YEAR:
        return CALCULATION_DATES.filter(calculationDate =>
          ['years'].includes(calculationDate.value),
        );

      case VALUE_TYPES.YEAR_MONTH:
        return CALCULATION_DATES.filter(calculationDate =>
          ['years', 'months', 'quarters'].includes(calculationDate.value),
        );

      case VALUE_TYPES.YEAR_MONTH_DAY_SECOND:
        return CALCULATION_DATES;

      default:
        return CALCULATION_DATES;
    }
  }, [valueType]);

  const pickerType = useMemo(() => {
    switch (valueType) {
      case VALUE_TYPES.YEAR_MONTH_DAY:
        return TIME_PICKER_TYPE.DATE;

      case VALUE_TYPES.YEAR_MONTH_DAY_HOUR:
        return TIME_PICKER_TYPE.DATE_HOUR;

      case VALUE_TYPES.YEAR_MONTH_DAY_MINUTE:
        return TIME_PICKER_TYPE.DATE_HOUR_MINUTE;

      case VALUE_TYPES.YEAR_MONTH_DAY_SECOND:
        return TIME_PICKER_TYPE.DATE_TIME;

      case VALUE_TYPES.YEAR:
        return YEAR_PICKER_TYPE.YEAR;

      case VALUE_TYPES.YEAR_MONTH:
        return YEAR_PICKER_TYPE.MONTH;

      default:
        return TIME_PICKER_TYPE.DATE;
    }
  }, [valueType]);

  const [formatDisplay, timeFormatDisplay] = useMemo(() => {
    let formatDisplay = '';
    let timeFormatDisplay = '';
    let isStartDate = false;

    // Handle detect day is start or end
    if (operatorKey === 'between') {
      isStartDate = type === 'startDate';
    } else {
      isStartDate = operatorKey === 'after';
    }

    switch (pickerType) {
      case TIME_PICKER_TYPE.DATE_TIME:
        formatDisplay = 'DD/MM/YYYY - HH:mm:ss';
        timeFormatDisplay = 'HH:mm:ss';
        break;
      case TIME_PICKER_TYPE.DATE_HOUR:
        formatDisplay = `DD/MM/YYYY - ${isStartDate ? 'HH:00:00' : 'HH:59:59'}`;
        timeFormatDisplay = isStartDate ? 'HH:00:00' : 'HH:59:59';
        break;
      case TIME_PICKER_TYPE.DATE_HOUR_MINUTE:
        formatDisplay = `DD/MM/YYYY - ${isStartDate ? 'HH:mm:00' : 'HH:mm:59'}`;
        timeFormatDisplay = isStartDate ? 'HH:mm:00' : 'HH:mm:59';
        break;
      case YEAR_PICKER_TYPE.MONTH:
        formatDisplay = 'MM/YYYY';
        break;
      case YEAR_PICKER_TYPE.YEAR:
        formatDisplay = 'YYYY';
        break;
      default:
        formatDisplay = `DD/MM/YYYY - ${isStartDate ? '00:00:00' : '23:59:59'}`;
        timeFormatDisplay = isStartDate ? '00:00:00' : '23:59:59';
        break;
    }

    if (formatInputDisplay) {
      formatDisplay = formatInputDisplay;
    }

    return [formatDisplay, timeFormatDisplay];
  }, [pickerType, operatorKey, type, formatInputDisplay]);

  // State
  const [state, setState] = useState({
    isOpen: false,
    option: {
      dateType: newDateTypes[0],
      calculationType: CALCULATION_TYPES[0],
      calculationDate: newCalculationDates[0],
      value: 0,
    },
    optionSelected: {
      dateType: newDateTypes[0],
      calculationType: CALCULATION_TYPES[0],
      calculationDate: newCalculationDates[0],
      value: 0,
    },
    date: dayjs().format(DEFAULT_DATE_FORMAT),
    dateDisplay: dayjs().format(DEFAULT_DATE_FORMAT),
  });
  const { isOpen, option, date, dateDisplay } = state;

  const newCalculationTypes = useMemo(() => {
    if (calculationTypeKeysShow && calculationTypeKeysShow.length) {
      const draftCalculationTypes = CALCULATION_TYPES.filter(calculationType =>
        calculationTypeKeysShow.some(key => key === calculationType.value),
      );

      return draftCalculationTypes;
    }

    if (showCalculationTypeCondition && option.dateType) {
      if (showCalculationTypeCondition.dateType[option.dateType.value]) {
        const draftCalculationTypes = showCalculationTypeCondition.dateType[
          option.dateType.value
        ]?.map(dateType => CALCULATION_TYPES.find(({ value }) => value === dateType));

        if (!draftCalculationTypes.find(({ value }) => value === option.calculationType.value)) {
          setState(state => ({
            ...state,
            option: { ...state.option, calculationType: draftCalculationTypes[0] },
          }));
        }

        return draftCalculationTypes;
      }
    }

    return CALCULATION_TYPES;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculationTypeKeysShow, showCalculationTypeCondition, option.dateType]);

  // Hooks
  const { token } = useToken();
  const { t } = useTranslation();

  // Variables
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadius,
    boxShadow: token.boxShadowSecondary,
  };

  // Effects
  useDeepCompareEffect(() => {
    try {
      if (isOpen) {
        setState(state => ({ ...state, option: state.optionSelected, date: state.dateDisplay }));
      }
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'useEffect',
        args: {},
      });
    }
  }, [isOpen]);

  useEffect(() => {
    try {
      if (option.dateType.value !== 'fixed') {
        const newDate = calculationDateAdvanced(
          option.dateType.value,
          option.calculationType.value,
          option.calculationDate.value,
          option.value,
          format,
        );

        setState(state => ({ ...state, date: newDate }));
      }
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'useEffectWithDependencies[state.option, format]',
        args: { option, format },
      });
    }
  }, [option, format]);

  useEffect(() => {
    try {
      if (propsOption) {
        const { dateType, calculationType, calculationDate, value = 0 } = propsOption || {};
        const newDateTypes = DATE_TYPES;

        const newDateType = newDateTypes.find(dType => dType.value === dateType);
        const newCalculationType = CALCULATION_TYPES.find(
          calType => calType.value === calculationType,
        );
        const newCalculationDate = newCalculationDates.find(
          calDate => calDate.value === calculationDate,
        );
        let newDate: any = '';

        if (newDateType) {
          if (newDateType.value === 'fixed') {
            newDate = dayjs(propsDate, DEFAULT_DATE_FORMAT, true).isValid()
              ? dayjs(propsDate, DEFAULT_DATE_FORMAT).format(format)
              : propsDate;

            setState(state => ({
              ...state,
              date: newDate,
              dateDisplay: newDate,
              optionSelected: { ...option, dateType: newDateType },
            }));
          } else {
            if (newCalculationDate && newCalculationType) {
              const date = calculationDateAdvanced(
                newDateType.value,
                newCalculationType.value,
                newCalculationDate.value,
                value,
                format,
              );

              setState(state => ({
                ...state,
                dateDisplay: date,
                optionSelected: {
                  dateType: newDateType,
                  calculationDate: newCalculationDate,
                  calculationType: newCalculationType,
                  value,
                },
              }));

              newDate = date;
            }
          }
        }

        if (typeof onUpdatedNewDate === 'function' && propsDate !== newDate) {
          onUpdatedNewDate(newDate);
        }
      }
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'useEffectPropsOption',
        args: {},
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsOption, propsDate, format]);

  // Handlers
  const disableDate: RangePickerProps['disabledDate'] = current =>
    current > dayjs(disableAfterDate, format) || current < dayjs(disableBeforeDate, format);

  const renderLabel = (date: string, locale: string = 'en') => {
    let formatLabel = 'dddd, MMMM D, YYYY';

    switch (valueType) {
      case VALUE_TYPES.YEAR:
        formatLabel = 'YYYY';
        break;
      case VALUE_TYPES.YEAR_MONTH:
        formatLabel = 'MMMM, YYYY';
        break;
      default:
        break;
    }

    return (
      <>
        <div>
          {dayjs(date || new Date(), format)
            .locale(locale || 'en')
            .format(formatLabel)}
        </div>
        {![VALUE_TYPES.YEAR, VALUE_TYPES.YEAR_MONTH].includes(valueType || '') && showTime && (
          <div>
            {dayjs(date || new Date(), format)
              .locale(locale || 'en')
              .format(timeFormatDisplay)}
          </div>
        )}
      </>
    );
  };

  const toggleOpenDropdown = (isOpen?: boolean) => {
    try {
      setState(() => ({ ...state, isOpen: isOpen != null ? isOpen : !state.isOpen }));
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'toggleOpenDropdown',
        args: {},
      });
    }
  };

  const onChangeOption = (params: Record<string, any>) => {
    try {
      setState(state => ({
        ...state,
        option: {
          ...state.option,
          ...params,
        },
      }));
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onChangeOption',
        args: {},
      });
    }
  };

  const onChangeDatePicker = (value: any) => {
    try {
      setState(state => ({ ...state, date: dayjs(value).format(format) }));
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onChangeDatePicker',
        args: { value },
      });
    }
  };

  const onClickApply = () => {
    try {
      const draftOption: TOption = {
        dateType: option.dateType.value,
        calculationDate:
          option.dateType.value === 'fixed'
            ? ''
            : (option.calculationDate.value as TCalculationDate),
        calculationType:
          option.dateType.value === 'fixed'
            ? ''
            : (option.calculationType.value as TCalculationType),
        value: option.dateType.value === 'fixed' ? 0 : option.value,
      };

      setState(state => ({
        ...state,
        optionSelected: option,
        dateDisplay: date,
        isOpen: false,
      }));

      if (typeof onApply === 'function') {
        onApply({
          date,
          option: draftOption,
        });
      }
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onClickApply',
        args: {},
      });
    }
  };

  const onClickNow = () => {
    try {
      setState(state => ({ ...state, date: dayjs().format(format) }));
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onClickNow',
        args: {},
      });
    }
  };

  const renderDropdownLabel = () => {
    const title = Object.values(ADVANCED_PICKER_TYPE).find(({ value }) => value === type)?.label;

    return (
      <div style={{ textAlign: 'center' }}>
        {title && operatorKey === 'between' && (
          <Text className="__title" style={{ color: '#666666' }}>
            {t(title)}
          </Text>
        )}

        {renderLabel(date, 'en')}
      </div>
    );
  };

  const renderDropdownFooter = () => (
    <>
      <Divider />

      <DropdownFooter>
        <Space>
          <Button type="primary" onClick={() => onClickApply()}>
            Apply
          </Button>
          <Button type="default" onClick={() => toggleOpenDropdown(false)}>
            Cancel
          </Button>
        </Space>

        {option.dateType.value === 'fixed' && <Button onClick={() => onClickNow()}>Now</Button>}
      </DropdownFooter>
    </>
  );

  const renderDateTypeOptions = () => (
    <Select
      options={newDateTypes.map(dateType => ({ ...dateType, label: t(dateType.label) }))}
      value={option.dateType.value}
      onChange={value => {
        const dateType = newDateTypes.find(dateType => dateType.value === value);

        toggleOpenDropdown(true);

        setTimeout(() => {
          onChangeOption({ dateType });
        }, 100);
      }}
    />
  );

  const renderErrorMessage = () =>
    errorMessage ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <Icon type="icon-ants-remove-circle" style={{ color: THEME.token?.colorError }} />
        <Text type="danger">{errorMessage}</Text>
      </div>
    ) : null;

  const dropdownRender = () => (
    <div style={contentStyle}>
      <DropdownHeader>{renderDropdownLabel()}</DropdownHeader>

      <DropdownContent>
        {renderDateTypeOptions()}

        <Select
          options={newCalculationTypes.map(({ label, value }) => ({ value, label: t(label) }))}
          value={option.calculationType.value}
          onChange={value => {
            const calculationType = CALCULATION_TYPES.find(
              calculationType => calculationType.value === value,
            );

            onChangeOption({ calculationType });
          }}
        />

        <InputNumber
          value={option.value}
          style={{ width: '100%' }}
          min={0}
          showHandler={false}
          onChange={value => onChangeOption({ value })}
        />

        <Select
          options={newCalculationDates.map(calculationDate => ({
            ...calculationDate,
            label: t(calculationDate.label),
          }))}
          value={option.calculationDate.value}
          onChange={value => {
            const calculationDate = newCalculationDates.find(
              calculationDate => calculationDate.value === value,
            );

            onChangeOption({ calculationDate });
          }}
        />

        {renderErrorMessage()}
      </DropdownContent>

      {renderDropdownFooter()}
    </div>
  );

  return (
    <Space direction="vertical" size={5}>
      {!!label && typeof label === 'string' ? (
        <Text style={{ color: '#666666' }}>{label}</Text>
      ) : (
        label
      )}

      {option.dateType.value === 'fixed' ? (
        <DatePicker
          disabled={disabled}
          open={!disabled && isOpen}
          allowClear={false}
          inputReadOnly
          status={errorMessage ? 'error' : ''}
          inputRender={() => (
            <DatePickerCustomInput
              readOnly
              placeholder="Select Date"
              value={dayjs(dateDisplay, format).format(formatDisplay)}
              onClick={() => toggleOpenDropdown()}
            />
          )}
          value={dayjs(date, format)}
          style={{
            width: 120,
          }}
          disabledDate={disableDate}
          format={formatDisplay}
          showToday={false}
          popupClassName={clsx('antsomi-picker-dropdown__advanced', {
            '--error': errorMessage,
          })}
          renderExtraFooter={() => (
            <>
              <DatePickerHeader>
                {renderDropdownLabel()}

                {renderDateTypeOptions()}
              </DatePickerHeader>

              <DatePickerFooter>
                <div style={{ padding: '0 10px' }}>{renderErrorMessage()}</div>

                {renderDropdownFooter()}
              </DatePickerFooter>

              <Divider />
            </>
          )}
          suffixIcon={
            <CalendarIconWrapper
              style={{
                pointerEvents: disabled ? 'none' : 'all',
              }}
              onClick={() => toggleOpenDropdown()}
            >
              <EventIcon
                width={20}
                height={20}
                fill={errorMessage ? THEME.token?.colorError : THEME.token?.bw10}
              />
            </CalendarIconWrapper>
          }
          dateRender={current => (
            <div
              className="antsomi-picker-cell-inner"
              style={{ pointerEvents: 'all' }}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();

                onChangeDatePicker(current);
              }}
            >
              {current.date()}
            </div>
          )}
          // onChange={onChangeDatePicker}
          onOpenChange={() => toggleOpenDropdown()}
        />
      ) : (
        <Dropdown
          disabled={disabled}
          open={!disabled && isOpen}
          dropdownRender={dropdownRender}
          trigger={['click']}
          onOpenChange={() => toggleOpenDropdown()}
        >
          <Input
            disabled={disabled}
            onClick={() => toggleOpenDropdown()}
            readOnly
            suffix={
              <CalendarIconWrapper
                style={{
                  pointerEvents: disabled ? 'none' : 'all',
                }}
                onClick={() => toggleOpenDropdown()}
              >
                <EventIcon width={19} height={19} />
              </CalendarIconWrapper>
            }
            style={inputStyle}
            value={dayjs(dateDisplay, format).format(formatDisplay)}
            status={errorMessage ? 'error' : ''}
          />
        </Dropdown>
      )}
    </Space>
  );
};

AdvancedPicker.defaultProps = {
  label: '',
  type: ADVANCED_PICKER_TYPE.START_DATE.value,
  operatorKey: 'after',
  dateTypeKeysShow: [],
  date: dayjs().format(DEFAULT_DATE_FORMAT),
  format: DEFAULT_DATE_FORMAT,
  inputStyle: {
    width: 120,
  },
  formatInputDisplay: 'MMM DD, YYYY',
  valueType: VALUE_TYPES.YEAR_MONTH_DAY,
  showTime: true,
  disabled: false,
};
