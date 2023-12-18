/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
// Libraries
import React, { useState, useEffect, ReactNode } from 'react'

// Components
import { Icon, Input, Popover } from 'minhquanle-ui/es/components/atoms'

// Styled
import { ColorPickerWrapper } from './styled'

// Utils
import { hexWithAlpha } from 'minhquanle-ui/es/utils/color'
import CustomPicker from './CustomPicker'

export interface ColorPickerProps {
  className?: string
  color?: string
  presetColors?: any[] | ReactNode
  defaultColor?: string
  icon?: React.ReactNode | string
  onChange?: (color: string) => void
  showInput?: boolean
  positionInput?: 'right' | 'left'
  style?: React.CSSProperties
}

const styleBtnColor = {
  cursor: 'pointer',
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  margin: 0,
  marginLeft: 10,
  padding: 0,
  fontSize: '100%',
  border: 'none',
}

export const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  // Props
  const {
    className = '',
    defaultColor = '#000000',
    presetColors,
    positionInput = 'left',
    icon,
    showInput = true,
    style = {},
  } = props
  const { onChange = () => {} } = props

  // States
  const [color, setColor] = useState(defaultColor)
  const [popoverVisible, setPopoverVisible] = useState(false)

  const [iconNode, setIconNode] = useState<React.ReactNode>()

  // Effects
  useEffect(() => {
    if (props.color) {
      setColor(props.color)
    }
  }, [props.color])

  useEffect(() => {
    if (icon) {
      if (typeof icon === 'string') {
        setIconNode(<Icon type={icon} />)
      } else {
        setIconNode(icon)
      }
    }
  }, [icon])

  // Handlers
  const onChangeColorPicker = (color) => {
    if (['hsv', 'hsl'].includes(color.source)) {
      if (!color?.rgb?.a) {
        setColor(color.hex)

        return
      }
    }

    setColor(hexWithAlpha(color))
  }

  const onChangeComplete = (color) => {
    if (['hsv', 'hsl'].includes(color.source)) {
      if (!color?.rgb?.a) {
        onChange(color.hex)

        return
      }
    }

    onChange(hexWithAlpha(color))
  }

  const onChangeColorInput = (event) => {
    const { value } = event.target

    setColor(value)
    onChange(value)
  }

  const onPopoverVisibleChange = (visible) => {
    setPopoverVisible(visible)
  }

  return (
    <ColorPickerWrapper className={className} style={style}>
      {/* Input value section */}
      {showInput && positionInput === 'left' && (
        <Input
          style={{ textTransform: 'uppercase' }}
          value={color}
          onChange={onChangeColorInput}
        />
      )}

      {/* Color Picker popover section */}
      <Popover
        arrowPointAtCenter
        content={
          <CustomPicker
            color={color}
            presetColors={presetColors}
            onChange={onChangeColorPicker}
            onChangeComplete={onChangeComplete}
          />
        }
        trigger="click"
        visible={popoverVisible}
        getPopupContainer={(triggerNode) => triggerNode}
        onVisibleChange={onPopoverVisibleChange}
      >
        <button style={styleBtnColor}>
          {iconNode || (
            <span
              style={{
                backgroundColor: color,
                display: 'block',
                width: 20,
                height: 20,
                border: '2px solid rgb(224 224 224 / 1)',
              }}
            />
          )}
        </button>
      </Popover>

      {/* Input value section */}
      {showInput && positionInput === 'right' && (
        <Input
          style={{ textTransform: 'uppercase' }}
          value={color}
          onChange={onChangeColorInput}
        />
      )}
    </ColorPickerWrapper>
  )
}

ColorPicker.defaultProps = {
  className: '',
  color: '#000000',
  defaultColor: '#000000',
  onChange: () => {},
  showInput: true,
  positionInput: 'left',
  style: {},
}
