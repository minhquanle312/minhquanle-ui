// Libraries
import styled, { css } from 'styled-components'

// Constants
import { THEME } from 'minhquanle-ui/lib/constants'

// Types
import { BoxDimensionProps, CommentPointProps } from './types'

export const CommentPoint = styled.div<CommentPointProps>`
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.offset * 2}px;
  height: ${(props) => props.offset * 2}px;
  border-radius: 50%;

  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.5);
  /* background-color: ${(props) =>
    props.isSubmitted ? `${THEME.token?.bw0}` : `${props.color}`}; */
  background-color: ${(props) =>
    props.color ? props.color : `${THEME.token?.bw0}`};
  /* color: ${(props) =>
    props.isSubmitted ? `${THEME.token?.blue8}` : `${THEME.token?.bw0}`}; */
  color: ${(props) =>
    props.color ? `${THEME.token?.bw0}` : `${THEME.token?.colorText}`};
  font-size: 16px;

  /* pointer-events: ${(props) => (props.isSubmitted ? 'none' : 'visible')}; */
  font-family: ${THEME.token?.fontFamily};
  z-index: 99;
  cursor: grab;

  :hover {
    z-index: 999999;
  }

  :hover .icon-close-comment,
  :hover .rounded-dashed {
    display: block;
  }
`

export const RoundedDashed = styled.div<{ offset: number }>`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  border: 2px dashed #707070;
  width: ${(props) => props.offset * 2 + 1}px;
  height: ${(props) => props.offset * 2 + 1}px;
`

export const CommentBoxed = styled.div<{
  boxDimension: BoxDimensionProps
  isReverseAxisX: boolean
  isReverseAxisY: boolean
}>`
  position: absolute;
  width: ${(props) => props.boxDimension.width}px;
  /* height: 170px; */
  max-height: ${(props) => props.boxDimension.height}px;
  padding: 15px;
  border-radius: ${THEME.token?.borderRadius}px;

  box-shadow: 0px 11px 15px 0 rgba(0, 0, 0, 0.2);
  background-color: ${THEME.token?.bw0};
  font-family: ${THEME.token?.fontFamily};
  cursor: grab;

  ::before {
    content: '';
    position: absolute;
    display: block;
    border: 16px solid transparent;
  }

  :hover ~ .icon-close-comment,
  :hover ~ .rounded-dashed {
    display: none;
  }

  /* Tính toán lại vị trí của box comment khi box bị che */
  ${(props) =>
    props.isReverseAxisY
      ? css`
          bottom: 50%;
          border-bottom-left-radius: 0px;

          ::before {
            bottom: 0;
            border-bottom-color: ${THEME.token?.bw0};
          }
        `
      : css`
          top: 50%;
          border-top-left-radius: 0px;

          ::before {
            top: 0;
            border-top-color: ${THEME.token?.bw0};
          }
        `}

  ${(props) =>
    props.isReverseAxisX
      ? css`
          right: calc(100% + 24px);

          ::before {
            right: -15px;
          }
        `
      : css`
          left: calc(100% + 24px);

          ::before {
            left: -15px;
          }
        `}
`

export const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 10px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  outline: none;
  font-family: ${THEME.token?.fontFamily};
  font-size: ${THEME.token?.fontSize}px;
  color: #999999;
  resize: none;
`

export const WrapperIcon = styled.div`
  position: absolute;
  top: 0;
  left: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);

  display: none;
  z-index: 10;
`
