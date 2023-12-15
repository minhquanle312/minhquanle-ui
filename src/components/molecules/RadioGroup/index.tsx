// Libraries
import React from 'react'

// Components
import { Text } from 'minhquanle-ui/lib/components/atoms'

// Types
import type { RadioGroupProps as AntdRadioGroupProps } from 'antd'

// Styled
import { RadioGroupWrapper, StyledRadioGroup } from './styled'

interface RadioGroupProps extends AntdRadioGroupProps {
  label?: string
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { label, ...restOf } = props

  return (
    <RadioGroupWrapper>
      {label ? <Text>{label}</Text> : null}
      <StyledRadioGroup {...restOf} />
    </RadioGroupWrapper>
  )
}
