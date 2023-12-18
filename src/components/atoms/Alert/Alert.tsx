// Libraries
import styled from 'styled-components'
import { Alert as AntdAlert } from 'antd'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

export const Alert = styled(AntdAlert)`
  padding: 10px;
  font-size: ${THEME.token?.fontSize}px;

  .antsomi-alert-message {
    color: ${THEME.token?.colorTextBase} !important;
  }

  &.antsomi-alert-info {
    background-color: ${THEME.token?.bw1};
    border-color: ${THEME.token?.bw1};
  }
`
