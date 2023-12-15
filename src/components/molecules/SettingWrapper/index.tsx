// Libraries
import React, { CSSProperties, memo } from 'react'
import classNames from 'classnames'

// Atoms
import { Text } from 'minhquanle-ui/lib/components/atoms'

// Styled
import { StyledSettingWrapper } from './styled'

interface SettingWrapperProps {
  label: string
  className?: string
  labelColor?: string
  labelClassName?: string
  labelStyle?: Record<string, any>
  containerStyle?: Partial<CSSProperties>
  vertical?: boolean
  children?: React.ReactNode
}

export const SettingWrapper: React.FC<SettingWrapperProps> = memo((props) => {
  // Props
  const {
    label,
    className,
    labelClassName,
    containerStyle,
    labelStyle,
    labelColor,
    vertical,
    children,
  } = props

  return (
    <StyledSettingWrapper
      className={className}
      vertical={vertical}
      style={containerStyle}
    >
      {label && (
        <Text
          className={classNames(labelClassName)}
          color={labelColor}
          style={labelStyle}
          title={label}
        >
          {label}
        </Text>
      )}
      <div style={{ flexShrink: 0 }}>{children}</div>
    </StyledSettingWrapper>
  )
})

SettingWrapper.defaultProps = {
  label: '',
  className: '',
  labelColor: '#666666',
  labelClassName: '',
}
