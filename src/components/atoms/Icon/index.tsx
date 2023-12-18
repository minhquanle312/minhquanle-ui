// Libraries
import styled, { css } from 'styled-components'

// Components
import AntsIcon from '@antscorp/icons'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

interface IconProps {
  size?: number
  width?: number
  height?: number
  color?: string
  style?: React.CSSProperties
}

const DraftAntsIcon = AntsIcon as any

export const Icon = styled(DraftAntsIcon)<IconProps>`
  ${(p) => (p.style ? css`style` : null)}
  ${(p) =>
    p.size
      ? css`
          width: ${p.width || p.size}px !important;
          height: ${p.height || p.size}px !important;
          font-size: ${p.size}px !important;
        `
      : css`
          font-size: 20px;
          line-height: 1;
        `}

  ${(p) =>
    p.color
      ? css`
          color: ${p.color} !important;
        `
      : null}

  ${(p) =>
    p.disabled
      ? css`
          cursor: not-allowed !important;
          color: ${THEME.token?.colorTextDisabled} !important;
        `
      : null}
`
