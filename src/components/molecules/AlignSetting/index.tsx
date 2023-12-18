// Libraries
import React from 'react'

// Atoms
import { Button, Icon } from 'minhquanle-ui/es/components/atoms'

// Molecules
import { SettingWrapper } from '../SettingWrapper'

// Styled
import { AlignSettingWrapper } from './styled'

export type TAlign = 'left' | 'center' | 'right' | undefined
export interface AlignEditProps {
  className?: string
  align?: TAlign
  onChange?: (align: TAlign) => void
  style?: Object
}

export interface AlignSettingProps extends AlignEditProps {
  label?: string
  labelClassName?: string
}

export const ALIGN_TYPE = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
}

export const AlignEdit: React.FC<AlignEditProps> = (props) => {
  const { className, style, onChange, align } = props

  return (
    <AlignSettingWrapper className={className} style={style}>
      <Button
        style={{
          aspectRatio: 1 / 1,
          width: 25,
          color: align !== ALIGN_TYPE.LEFT ? '#aaaaaa' : 'inherit',
        }}
        onClick={() => onChange?.(ALIGN_TYPE.LEFT as TAlign)}
      >
        <Icon type="icon-ants-align-left" />
      </Button>
      <Button
        style={{
          aspectRatio: 1 / 1,
          width: 25,
          color: align !== ALIGN_TYPE.CENTER ? '#aaaaaa' : 'inherit',
        }}
        onClick={() => onChange?.(ALIGN_TYPE.CENTER as TAlign)}
      >
        <Icon type="icon-ants-align-center" />
      </Button>
      <Button
        style={{
          aspectRatio: 1 / 1,
          width: 25,
          color: align !== ALIGN_TYPE.RIGHT ? '#aaaaaa' : 'inherit',
        }}
        onClick={() => onChange?.(ALIGN_TYPE.RIGHT as TAlign)}
      >
        <Icon type="icon-ants-align-right" />
      </Button>
    </AlignSettingWrapper>
  )
}

export const AlignSetting: React.FC<AlignSettingProps> = (props) => {
  // Props
  const { label, labelClassName, ...restOf } = props

  return (
    <SettingWrapper label={label || 'Align'} labelClassName={labelClassName}>
      <AlignEdit {...restOf} />
    </SettingWrapper>
  )
}
