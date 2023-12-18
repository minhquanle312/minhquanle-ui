// Libraries
import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'

// Atoms
import {
  DividerPure,
  Icon,
  Text,
  InputNumber,
} from 'minhquanle-ui/es/components/atoms'

// Styled
import {
  EdgeSettingContent,
  EdgeSettingHeader,
  EdgeSettingWrapper,
} from './styled'

// Utils
import { handleError } from 'minhquanle-ui/es/utils'

// Types
import { AlignEdit } from '../AlignSetting'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

type MarginProps = number | 'auto'
type ValueProps = [MarginProps, MarginProps, MarginProps, MarginProps]
type ValueLabelProps = [string, string, string?, string?]
type AlignTypeProps = 'left' | 'center' | 'right'
type UnitProps = 'px' | '%' | any

export const UNIT = {
  PX: {
    value: 'px',
    label: 'PX',
  },
  PERCENT: {
    value: '%',
    label: '%',
  },
}
const PATH = 'minhquanle-ui/es/components/molecules/EdgeSetting/index.tsx'

type DataProps = {
  values: ValueProps
  linked: boolean
  unit: UnitProps
  align: AlignTypeProps
}
type OnChangeProps = (data: DataProps) => void

interface EdgeSettingProps {
  label: string
  minValue?: number
  maxValue?: number
  edgeLabels?: ValueLabelProps
  edgeLabelClassName?: string
  contentClassName?: string
  values: ValueProps
  unit?: UnitProps
  linked?: boolean
  onChange?: OnChangeProps
  align?: AlignTypeProps | null
  disabledLinked?: boolean | false
}

interface EdgeSettingState {
  values: ValueProps
  unit: UnitProps
  linked: boolean
  lastValueFocus: MarginProps
  align: AlignTypeProps | null
}

export const EdgeSetting: React.FC<EdgeSettingProps> = memo((props) => {
  const {
    label,
    values,
    minValue,
    maxValue,
    edgeLabels = [],
    edgeLabelClassName,
    contentClassName,
    unit,
    linked = false,
    onChange = () => {},
    align,
    disabledLinked = false,
  } = props

  // State
  const [state, setState] = useState<EdgeSettingState>({
    values: [0, 0, 0, 0],
    unit: null,
    linked: false,
    lastValueFocus: 0,
    align: null,
  })

  useEffect(() => {
    setState((state) => ({
      ...state,
      values,
      unit,
      linked,
      align: align as AlignTypeProps,
    }))
  }, [values, unit, linked, align])

  // Handlers
  const onChangeState = (key: string, value: any) => {
    try {
      let draftValues: ValueProps = [...state.values]
      let draftLinked = state.linked
      const draftAlign = state.align

      // Case linked is true set all value is exam
      if (key === 'linked') {
        if (state.align) {
          // disabled
          return
        }
        if (!state.linked) {
          draftValues = draftValues.map(
            () => state.lastValueFocus
          ) as ValueProps
        }
      }

      // Case align set linked = false & set values
      if (key === 'align') {
        draftLinked = false

        draftValues = draftValues.map((value) =>
          value === 'auto' ? 0 : value
        ) as ValueProps

        if (value === state.align) {
          // reset align value
          value = ''
        } else {
          if (value === 'left') {
            // change values right to auto
            draftValues[1] = 'auto'
          } else if (value === 'right') {
            // change values left to auto
            draftValues[3] = 'auto'
          } else if (value === 'center') {
            // change values right + left to auto
            draftValues[1] = 'auto'
            draftValues[3] = 'auto'
          }
        }
      }

      setState((state) => ({
        ...state,
        values: draftValues,
        [key]: value,
      }))

      // Callback onchange
      onChange({
        values: draftValues,
        unit: state.unit,
        align: draftAlign as any,
        linked: draftLinked,
        [key]: value,
      })
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onChangeState',
        args: {},
      })
    }
  }

  const onChangeValue = (value: any, index: number) => {
    try {
      let draftValues = [...state.values]

      if (state.linked) {
        draftValues = draftValues.map(() => value)
      } else {
        draftValues[index] = value
      }

      setState((state) => ({ ...state, lastValueFocus: value }))
      onChangeState('values', draftValues)
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onChangeValue',
        args: {},
      })
    }
  }

  return (
    <EdgeSettingWrapper>
      <EdgeSettingHeader>
        <Text style={{ color: THEME.token?.colorIcon }}>{label}</Text>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 12,
            marginRight: 12,
          }}
        >
          {state.align !== null ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 8,
                marginRight: 8,
              }}
            >
              <AlignEdit
                align={state.align}
                onChange={(value) => onChangeState('align', value)}
              />
              <DividerPure type="vertical" dot height={12} />
            </div>
          ) : null}
          {state.unit ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 8,
                marginRight: 8,
                // borderRight: '2px dashed #D2D2D2',
                height: 18,
              }}
            >
              {Object.values(UNIT).map(({ value, label }, index) => (
                <Text
                  key={value}
                  style={{
                    color:
                      state.unit === value
                        ? THEME.token?.colorPrimary
                        : state.unit !== value
                        ? THEME.token?.colorIcon
                        : 'inherit',
                    fontWeight: state.unit === value ? 'bold' : 'normal',
                    marginLeft:
                      Object.values(UNIT).length - 1 === index ? 6 : 0,
                    cursor: 'pointer',
                    paddingRight: value === '%' ? 8 : 0,
                  }}
                  onClick={() => onChangeState('unit', value)}
                >
                  {label}
                </Text>
              ))}
              <div
                style={{
                  width: 2,
                  height: 24,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon
                  type="icon-ants-vertical-dots"
                  style={{ fontSize: '30px' }}
                  color="#D2D2D2"
                />
              </div>
            </div>
          ) : null}
          <Icon
            type={`icon-ants-${state.linked ? 'hyperlink' : 'hyperlink-off'}`}
            size={18}
            style={{
              cursor: 'pointer',
              color: !state.linked
                ? THEME.token?.colorIcon
                : THEME.token?.colorPrimary,
            }}
            onClick={
              disabledLinked
                ? () => {}
                : () => onChangeState('linked', !state.linked)
            }
            disabled={disabledLinked ? true : !!state.align}
          />
        </div>
      </EdgeSettingHeader>
      <EdgeSettingContent className={contentClassName}>
        {state.values.map((value, index) => {
          if (!edgeLabels[index]) {
            return null
          }

          return (
            <div key={edgeLabels[index]}>
              <Text
                className={classNames(edgeLabelClassName)}
                style={{ marginBottom: 5, color: THEME.token?.colorIcon }}
              >
                {edgeLabels[index]}
              </Text>
              {value !== 'auto' ? (
                <InputNumber
                  disabled={state.linked && index !== 0}
                  value={value}
                  required
                  min={minValue}
                  max={maxValue}
                  onFocus={(e) => {
                    const { value = '' } = e.target

                    setState((state) => ({ ...state, lastValueFocus: +value }))
                  }}
                  onChange={(val) => onChangeValue(val, index)}
                />
              ) : (
                <Text
                  size="medium"
                  className="custom-text-auto"
                  style={{ marginTop: 8, fontSize: '12px' }}
                >
                  AUTO
                </Text>
              )}
            </div>
          )
        })}
      </EdgeSettingContent>
    </EdgeSettingWrapper>
  )
})

EdgeSetting.defaultProps = {
  label: '',
  values: [0, 0, 0, 0],
  minValue: 0,
  maxValue: 9999,
  edgeLabels: ['Top', 'Right', 'Bottom', 'Left'],
  unit: null,
  align: null,
}
