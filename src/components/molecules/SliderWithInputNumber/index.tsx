// Libraries
import React, { CSSProperties, useEffect, useState } from 'react'

// Atoms
import { Slider, SliderProps } from 'minhquanle-ui/es/components/atoms/Slider'

// Molecules
import { InputNumber } from 'minhquanle-ui/es/components/molecules/InputNumber'

// Styled
import { SliderWithInputNumberWrapper } from './styled'

// Utils
import { handleError } from 'minhquanle-ui/es/utils'

const PATH =
  'minhquanle-ui/es/components/molecules/SliderWithInputNumber/index.tsx'

interface SliderWithInputNumberProps extends SliderProps {
  precision?: number
  label?: React.ReactNode
  labelClassName?: string
  labelStyling?: Partial<CSSProperties>
  inputStyling?: Partial<CSSProperties>
}

export const SliderWithInputNumber: React.FC<SliderWithInputNumberProps> = (
  props
) => {
  // Props
  const {
    label,
    labelClassName,
    labelStyling,
    inputStyling,
    defaultValue,
    min,
    max,
    step,
    precision,
    ...restOf
  } = props

  // State
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value)
    }
  }, [props.value])

  const onChangeInputNumber = (value: any) => {
    try {
      if (value !== null) {
        setValue(value)

        typeof props.onAfterChange === 'function' && props.onAfterChange(value)
      }
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onChange',
        args: {},
      })
    }
  }

  return (
    <SliderWithInputNumberWrapper>
      <div className={labelClassName} style={labelStyling}>
        {label}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Slider
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          {...restOf}
          onChange={(value) => setValue(value)}
          value={value}
        />
        <InputNumber
          defaultValue={defaultValue}
          value={value}
          min={min}
          max={max}
          step={step || 1}
          style={{ flexShrink: 0, width: 57, marginLeft: 20, ...inputStyling }}
          // precision={precision}
          onChange={onChangeInputNumber}
        />
      </div>
    </SliderWithInputNumberWrapper>
  )
}

SliderWithInputNumber.defaultProps = {
  defaultValue: 0,
}
