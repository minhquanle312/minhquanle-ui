// Libraries
import styled, { css } from 'styled-components'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

export const PopupContainer = styled.div<{
  isHiddenResizing?: boolean
  isShowResizeHover?: boolean
}>`
  position: fixed !important;
  top: 0px;
  right: 0px;
  min-width: 450px;
  min-height: 50px;
  background-color: ${THEME.token?.bw0};
  box-shadow: 0px 0 6px 2px rgba(0, 0, 0, 0.1);
  z-index: 1003;

  &.no-cursor {
    cursor: auto;
  }

  div {
    box-sizing: border-box !important;
  }

  ${(props) =>
    props.isHiddenResizing &&
    css`
      .react-resizable-handle {
        display: none;
      }
    `}

  ${(props) =>
    props.isShowResizeHover &&
    css`
      &:hover .react-resizable-handle {
        display: block;
        z-index: 99;
      }
    `}
`

export const WrapperIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .icon-close {
    font-size: 12px;
    color: ${THEME.token?.colorIcon};
  }
`
