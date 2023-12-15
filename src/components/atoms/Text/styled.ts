// Libraries
import styled, { css } from 'styled-components'

// Constants
import { THEME } from 'minhquanle-ui/lib/constants'

interface TextWrapperProps {
  size?: 'small' | 'medium' | 'large' | number
  children?: React.ReactNode
}

export const TextWrapper = styled.div<TextWrapperProps>`
  color: ${THEME.token?.colorTextBase};
  font-size: ${THEME.token?.fontSize}px;
  font-family: Roboto;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  ${(p) => {
    switch (p.size) {
      case 'small':
        return css`
          font-size: ${THEME.token?.fontSize}px;
        `

      case 'medium':
        return css`
          font-size: ${THEME.token?.fontSizeMd}px;
        `

      case 'large':
        return css`
          font-size: ${THEME.token?.fontSizeLg}px;
        `

      default:
        return css`
          font-size: ${p.size}px;
        `
    }
  }}

  &.--disabled {
    color: ${THEME.token?.colorTextDisabled};
    pointer-events: none;
  }

  &.--secondary {
    color: ${THEME.token?.colorIcon};
  }

  &.--error {
    color: ${THEME.token?.red6};
  }

  &.--warning {
    color: ${THEME.token?.colorWarning};
  }
`
