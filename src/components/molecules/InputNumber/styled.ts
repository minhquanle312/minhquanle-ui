// Libraries
import styled, { css } from 'styled-components';

// Components
import { InputNumber as AntdInputNumber } from 'antd';

// Constants
import { THEME } from 'src/constants';

export const InputNumberWrapper = styled(AntdInputNumber)`
  height: 30px;
  border-style: none;
  border-radius: none;
  font-family: 'Roboto';
  font-size: ${THEME.token?.fontSize}px;
  --tw-shadow: 0 1px 0 0 #e0e0e0;
  --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &::placeholder {
    color: ${THEME.token?.accent5};
  }

  &:hover {
    background-color: ${THEME.token?.blue0};
  }

  ${props =>
    css`
      height: ${props.height}${typeof props.height === 'number' ? 'px' : ''};
      width: ${props.width}${typeof props.width === 'number' ? 'px' : ''};
    `}

  .antsomi-input-number-group {
    min-width: 100px;
  }

  &:active,
  &:focus {
    background-color: ${THEME.token?.bw1_1};
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
  }

  .antsomi-input-number-handler-wrap {
    height: 100%;
    opacity: 1;

    &:hover {
      .antsomi-input-number-handler {
        height: 50%;
      }
    }
  }

  .antsomi-input-number-handler {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    &:hover {
      color: ${THEME.token?.colorText};
    }
  }

  .antsomi-input-number-input {
    padding: 0px 4px !important;
  }

  .antsomi-input-number-group-addon {
    position: relative;
    top: 1px;
    padding: 0;
    border: none;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    padding-left: 10px;
    font-size: 13px;
    color: ${THEME.token?.colorTextBase};
    border-bottom-width: 1px;
  }
`;
