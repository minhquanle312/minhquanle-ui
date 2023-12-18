// Libraries
import styled from 'styled-components'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

export const Wrapper = styled.div`
  &.--horizontal {
    border-top-width: 1px;
    border-color: '#e3eef1';
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &.--vertical {
    border-right-width: 1px;
    border-color: '#e3eef1';
    min-height: 30px;
    width: max-content;
    margin-left: 14px;
    margin-right: 14px;
  }

  &.--dot {
    border-style: dotted;
    border-color: ${THEME.token?.accent3};

    &.--vertical {
      border-right-width: 2px;
    }
  }

  &.--dashed {
    border-style: dashed;
    border-color: ${THEME.token?.accent3};

    &.--vertical {
      border-right-width: 2px;
    }
  }
`
