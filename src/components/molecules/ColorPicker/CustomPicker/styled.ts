// Libraries
import styled from 'styled-components'

// Svg
import TransparentSvg from 'minhquanle-ui/es/assets/svg/transparent.svg'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

export const CustomPickerWrapper = styled.div`
  position: relative;
  width: 260px;
`

export const SaturationPointer = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;
  box-sizing: border-box;
  transform: translate(-10px, -10px);
`

export const HuePointer = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 6px;
  background-color: rgb(248, 248, 248);
  transform: translate(-6px, -1px);
  box-shadow: rgb(0 0 0 / 37%) 0px 1px 4px 0px;
`

export const PreviewColorPoint = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  background: url(${TransparentSvg as any}) repeat;
  border-radius: 9999px;
  overflow: hidden;
  flex-shrink: 0;
`

export const EditableInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    height: 30px;
    width: 100%;
    border-style: none;
    border-radius: 0px;
    padding-left: 5px;
    padding-right: 5px;
    font-family: Roboto;
    font-size: ${THEME.token?.fontSize}px;
    --tw-shadow: 0 1px 0 0 #e0e0e0;
    --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    &::placeholder {
      color: ${THEME.token?.accent5};
    }

    &:hover {
      background-color: ${THEME.token?.blue0};
    }

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    outline-style: none !important;

    &:active,
    &:focus {
      background-color: ${THEME.token?.blue0};
      --tw-shadow: 0 1px 0 0 #194e8d;
      --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:disabled {
      background-color: ${THEME?.token?.accent1};
      color: ${THEME.token?.accent5};
      --tw-shadow: 0 1px 0 0 #e0e0e0;
      --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
  }
`
