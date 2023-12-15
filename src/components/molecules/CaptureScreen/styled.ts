// Libraries
import styled, { css } from 'styled-components'
import { Typography } from 'antd'

// Constants
import { THEME } from 'minhquanle-ui/lib/constants'

// Components
const { Text: AntText } = Typography

export const ContainerCapture = styled.div<{
  isRecord: boolean
  imageURL?: string
}>`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 99999;

  /* border: 5px solid ${THEME.token?.blue7}; */
  /* background-color: rgba(0, 0, 0, 0.15); */

  z-index: 9999;

  ${(props) =>
    props.imageURL &&
    css`
      display: block;
      background-image: url(${props.imageURL});
      background-repeat: no-repeat;
      background-size: contain;
      background-origin: border-box;
      -webkit-user-select: none;
      margin: auto;
      cursor: pointer;
      background-color: hsl(0, 0%, 90%);
      transition: background-color 300ms;
    `}

  * > * {
    box-sizing: border-box;
  }

  .tui-image-editor-canvas-container,
  .lower-canvas,
  .upper-canvas {
    max-width: 100% !important;
    max-height: 100% !important;
  }

  .tui-image-editor-canvas-container {
    /* border: 5px solid ${THEME.token?.blue7}; */
    overflow: hidden;
    box-sizing: border-box;
  }

  &.hide-cursor .tui-image-editor-canvas-container .upper-canvas {
    cursor: none !important;
  }

  ${(props) =>
    props.isRecord &&
    css`
      position: unset;
      width: 0px;
      height: 0px;
      /* border: 5px solid ${THEME.token?.blue7}; */
    `}
`
export const BorderOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 999;
  border: 5px solid ${THEME.token?.blue7};
  box-sizing: border-box;
  clip-path: polygon(
    5px 5px,
    5px 100%,
    0 100%,
    0 0,
    100% 0,
    100% 100%,
    5px 100%,
    5px calc(100% - 5px),
    calc(100% - 5px) calc(100% - 5px),
    calc(100% - 5px) 5px
  );
`

export const FlexColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const WrapperIcon = styled.div<{ isRecord?: boolean }>`
  position: absolute;
  top: ${(props) => (props.isRecord ? -5 : 0)}px;
  right: ${(props) => (props.isRecord ? -5 : 0)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: ${THEME.token?.blue7};
  z-index: 10;
`

export const DrawerGroups = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  background-color: ${THEME.token?.bw0};
  z-index: 9999;
`

export const WrapperDraggable = styled.strong`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: move;
`

export const DrawerGroupItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
  cursor: pointer;

  &:not(.active):hover {
    background-color: #deeffe;
    transition: all 0.3s linear;
  }

  &.active {
    color: ${THEME.token?.colorPrimary};
    background-color: #deeffe;
  }

  &:hover .toggle-popup-by-side {
    display: block;
  }

  &.timer-recording:hover,
  &.hide-hover:hover {
    background-color: unset;
  }

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 20px;
    background-color: transparent;
    position: absolute;
    bottom: 80%;
    left: 0px;
  }
`

export const Divider = styled.div<{ isVertical?: boolean }>`
  background-image: linear-gradient(
    to right,
    #d2d2d2 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: center center;
  background-repeat: repeat-x;
  background-size: 4px 2px;
  margin: 0 10px;
  height: 2px;
  max-width: 100%;

  ${(props) =>
    props.isVertical &&
    css`
      margin: 0 -12px;
      width: 36px;
      transform: rotate(90deg);
      background-size: 5px 2px;
    `}
`

export const PopupBySide = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  left: -6px;
  display: none;
  padding: 8px 10px 10px;
  width: 124px;
  min-height: 110px;
  border-radius: ${THEME.token?.borderRadius}px;
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: ${THEME.token?.bw0};
  cursor: default;
`

export const Heading = styled(AntText)`
  color: ${THEME.token?.colorText};
  font-size: ${THEME.token?.fontSize};
  font-weight: normal !important;
`

export const WrapperColor = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const BoxColor = styled.div<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: solid 1px rgba(0, 0, 0, 0.12);
  background-color: ${(props) => props.bgColor || '#0f2eae'};
  cursor: pointer;
`

export const ImageIcon = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
  object-fit: cover;
`

export const OutlineRemoveContainer = styled.div`
  position: absolute;
  display: none;
  width: 200px;
  height: 200px;
  overflow: visible;
  clip-path: polygon(
    2px 2px,
    2px 100%,
    0 100%,
    0 0,
    100% 0,
    100% 100%,
    2px 100%,
    2px calc(100% - 2px),
    calc(100% - 2px) calc(100% - 2px),
    calc(100% - 2px) 2px
  );
  transform: translate(-50%, -50%);
  z-index: 99999;
`

export const WrapperRemoveBtn = styled.div`
  position: absolute;
  display: none;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transform: translate(-50%, -50%);
  z-index: 99999;
`
