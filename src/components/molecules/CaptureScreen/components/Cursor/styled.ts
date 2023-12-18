// Libraries
import { THEME } from 'minhquanle-ui/es/constants'

// Constants
import styled, { css } from 'styled-components'

export const PlusCursor = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  width: 30px;
  height: 30px;
  /* border-radius: 50%; */
  background: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
  background-position: center;
  background-size: 90% 2px, 2px 90%; /*thickness = 2px, length = 50% (25px)*/
  background-repeat: no-repeat;
  box-sizing: border-box;
  cursor: none;
  pointer-events: none;
  z-index: 999999;
`

export const TooltipDrag = styled.div`
  position: absolute;
  top: 50%;
  /* left: 50%; */
  left: calc(100% + 10px);
  /* transform: translate(-50%, -50%); */
  transform: translateY(-50%);
  height: 30px;
  padding: 0px 8px;
  border-radius: ${THEME.token?.borderRadius}px;
  background-color: #515151;
  font-size: ${THEME.token?.fontSize}px;
  color: ${THEME.token?.bw0};
  font-family: ${THEME.token?.fontFamily};
  line-height: 30px;
  white-space: nowrap;
  box-sizing: border-box;
  user-select: none;
  z-index: 9999;
`

export const DottedCursor = styled.div<{
  bgColor?: string
  isPointerBox?: boolean
  offset: number
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.bgColor || '#0f2eae'};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid ${THEME.token?.bw0};
  box-sizing: border-box;
  cursor: none;
  pointer-events: none;
  z-index: 999999;

  ${(props) =>
    props.isPointerBox &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      width: ${props.offset * 2}px;
      height: ${props.offset * 2}px;
      border-radius: 50%;

      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.5);
      background-color: ${THEME.token?.bw0};
      color: ${props.bgColor ? props.bgColor : THEME.token?.bw0};
      font-size: 16px;

      font-family: ${THEME.token?.fontFamily};
    `}
`
