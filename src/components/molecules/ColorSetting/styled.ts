// Libraries
import styled from 'styled-components'

// Image
import TransparentSvg from 'minhquanle-ui/es/assets/svg/transparent.svg'

// Components
import { Button } from 'minhquanle-ui/es/components/atoms'

export const ColorSettingWrapper = styled.div``

export const PresetColor = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  overflow: hidden;
  cursor: pointer;
  background: url(${TransparentSvg as any}) repeat !important;

  .__color {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 1;
    border-radius: 9999px;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
`

export const ButtonPreset = styled(Button)`
  width: 24px !important;
  height: 24px !important;
  padding: 0px !important;
  margin: 0px !important;
  min-width: fit-content !important;
`

export const PresetWrapper = styled.div`
  max-height: 100px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`
