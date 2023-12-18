// Styled
import styled, { css } from 'styled-components'

// Components
import { Input as InputAntd } from 'antd'

// Types
import { InputProps } from './Input'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

export const StyledInput = styled(InputAntd)<InputProps>`
  /* height: 30px;
  height: 30px;
  border-style: none;
  border-radius: 0px;
  padding-left: 5px;
  padding-right: 5px;
  font-family: 'Roboto';
  font-size: ${THEME.token?.fontSize}px;
  --tw-shadow: 0 1px 0 0 #e0e0e0;
  --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);

  &::placeholder {
    color: ${THEME.token?.accent5};
  }

  &:hover {
    background-color: ${THEME.token?.blue0};
  }

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  ${({ noborder }) =>
    noborder &&
    css`
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      padding-left: 0;
      padding-right: 0;
    `}

  &:active,
  &:focus {
    background-color: ${THEME.token?.blue0};
    --tw-shadow: 0 1px 0 0 #194e8d;
    --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
  }

  &:disabled {
    background-color: ${THEME.token?.accent1};
    color: ${THEME.token?.accent5};
    --tw-shadow: 0 1px 0 0 #e0e0e0;
    --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
  } */
`

export const TextArea = styled(InputAntd.TextArea)<{ showBorder?: boolean }>`
  height: 30px;
  border-style: none;
  border-radius: 0px;
  padding-left: 5px;
  padding-right: 5px;
  font-family: 'Roboto';
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

  &:active,
  &:focus {
    background-color: ${THEME.token?.blue0};
    --tw-shadow: 0 1px 0 0 #194e8d;
    --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  &:disabled {
    background-color: ${THEME.token?.accent1};
    color: ${THEME.token?.accent5};
    --tw-shadow: 0 1px 0 0 #e0e0e0;
    --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  ${(props) =>
    props.showBorder &&
    css`
      border: 1px solid #e0e0e0;
    `}
`
