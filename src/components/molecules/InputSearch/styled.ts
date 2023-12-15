// Libraries
import styled from 'styled-components'

// Constants
import { THEME } from 'minhquanle-ui/lib/constants'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;

  .input__wrapper {
    width: 100%;
  }

  &:has(input:focus) {
    .__icon-search {
      background-color: ${THEME.token?.blue0};
      border-bottom: 1px solid #1f7ac4;
    }
  }

  &:has(input:hover) {
    .__icon-search {
      background-color: ${THEME.token?.blue0};
      border-bottom: 1px solid #1f7ac4;
    }
  }

  .__icon-search {
    height: 31px;
    padding-right: 4px;
    background-color: ${THEME.token?.bw0};
    cursor: pointer;
    color: ${THEME.token?.colorIcon};
    font-size: 24px;
    line-height: 32px;
    border-bottom: 1px solid #b8cfe6;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    box-sizing: border-box;

    &:hover {
      color: ${THEME.token?.colorPrimary};
    }
  }
`
