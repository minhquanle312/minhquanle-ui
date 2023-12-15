/* eslint-disable react/destructuring-assignment */
// Libraries
import React, { CSSProperties, ReactNode, useState } from 'react'
import { CustomPicker as CustomPickerHOC } from 'react-color'
import {
  Saturation,
  Hue,
  Alpha,
  EditableInput,
} from 'react-color/lib/components/common'

// Atoms
import { Button, Divider, Icon, Text } from 'minhquanle-ui/lib/components/atoms'

// Molecules
import { InputNumber } from '../../InputNumber'

// Styled
import {
  CustomPickerWrapper,
  HuePointer,
  PreviewColorPoint,
  SaturationPointer,
  EditableInputWrapper,
} from './styled'

// Utils
import { handleError } from 'minhquanle-ui/lib/utils'

const PATH =
  'minhquanle-ui/lib/components/molecules/ColorPicker/CustomPicker/index.tsx'

interface CustomPickerProps {
  [key: string]: any
  className?: string
  children?: ReactNode
  presetColors?: any[] | ReactNode
  style?: CSSProperties
}

const rgbaStyling: Partial<CSSProperties> = {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
}

const rgbaInputStyling: Partial<CSSProperties> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginLeft: 5,
  marginRight: 5,
  gap: '8px',
}

const wrapperStyling: Partial<CSSProperties> = {
  display: 'flex',
  alignItems: 'center',
  margin: '15px 8px 0',
  width: '100%',
}

const styleContainAlpha: Partial<CSSProperties> = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 10,
  marginRight: 10,
  width: '100%',
}

const CustomPicker: React.FC<CustomPickerProps> = (props) => {
  // Props
  const {
    className,
    style,
    children,
    onChange,
    onChangeComplete,
    presetColors,
    ...restOf
  } = props

  // State
  const [isShowRgbaInput, setShowRgbaInput] = useState(true)

  const onChangeRgbaColor = (key: string, value: any) => {
    try {
      const draftRgb = { ...props.rgb, [key]: value }

      onChange(
        `rgba(${draftRgb.r}, ${draftRgb.g}, ${draftRgb.b}, ${draftRgb.a})`
      )
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onChangeRgbaColor',
        args: {},
      })
    }
  }

  return (
    <CustomPickerWrapper className={className} style={style}>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: 143,
        }}
      >
        <Saturation
          {...restOf}
          pointer={SaturationPointer}
          onChange={onChange}
        />
      </div>
      <div style={wrapperStyling}>
        <PreviewColorPoint>
          <div
            style={{
              backgroundColor: props.color,
              position: 'absolute',
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            }}
          />
        </PreviewColorPoint>
        <div style={styleContainAlpha}>
          <div style={{ position: 'relative', width: '100%', height: 12 }}>
            <Hue {...restOf} pointer={HuePointer} onChange={onChange} />
          </div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 12,
              marginTop: 10,
            }}
          >
            <Alpha {...restOf} pointer={HuePointer} onChange={onChange} />
          </div>
        </div>
      </div>
      <div style={{ ...wrapperStyling, paddingBottom: 15 }}>
        <Icon
          type="icon-ants-unfold-more"
          style={{ cursor: 'pointer', fontSize: '20px' }}
          onClick={() => setShowRgbaInput(!isShowRgbaInput)}
        />

        {isShowRgbaInput ? (
          <div style={rgbaInputStyling}>
            <div style={rgbaStyling}>
              <InputNumber
                value={props.rgb?.r}
                controls={false}
                width="auto !important"
                onChange={(value) => onChangeRgbaColor('r', value)}
              />
              <Text style={{ position: 'absolute', bottom: '-20px' }}>R</Text>
            </div>
            <div style={rgbaStyling}>
              <InputNumber
                value={props.rgb?.g}
                controls={false}
                width="auto !important"
                onChange={(value) => onChangeRgbaColor('g', value)}
              />
              <Text style={{ position: 'absolute', bottom: '-20px' }}>G</Text>
            </div>
            <div style={rgbaStyling}>
              <InputNumber
                value={props.rgb?.b}
                controls={false}
                width="auto !important"
                onChange={(value) => onChangeRgbaColor('b', value)}
              />
              <Text style={{ position: 'absolute', bottom: '-20px' }}>B</Text>
            </div>
            <div style={rgbaStyling}>
              <InputNumber
                value={props.rgb?.a}
                controls={false}
                width="auto !important"
                onChange={(value) => onChangeRgbaColor('a', value)}
              />
              <Text style={{ position: 'absolute', bottom: '-20px' }}>A</Text>
            </div>
          </div>
        ) : (
          <EditableInputWrapper>
            <EditableInput value={props.color} onChange={onChange} />
            <Text style={{ position: 'absolute', bottom: '-20px' }}>HEX</Text>
          </EditableInputWrapper>
        )}

        <Button
          onClick={() => {
            setShowRgbaInput(true)
            onChange('rgba(0, 0, 0, 0)')
          }}
        >
          Clear
        </Button>
      </div>
      {presetColors ? (
        <div>
          <Divider />
          {presetColors}
        </div>
      ) : null}
    </CustomPickerWrapper>
  )
}

export default CustomPickerHOC(CustomPicker)
