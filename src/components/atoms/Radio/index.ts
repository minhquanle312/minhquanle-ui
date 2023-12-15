// Libraries
import styled from 'styled-components'

// Components
import { Radio as AntdRadio } from 'antd'

// Constants
import { THEME } from 'minhquanle-ui/lib/constants'

export const Radio = styled(AntdRadio)`
  font-family: 'Roboto';
  color: ${THEME.token?.colorTextBase};
  font-size: ${THEME.token?.fontSize}px;

  .antsomi-radio {
    .antsomi-radio-inner {
      border-width: 2px;
      border-color: ${THEME.token?.colorPrimary};

      &::after {
        background-color: ${THEME.token?.colorPrimary};
      }
    }
  }
`

export const RadioButton = styled(AntdRadio.Button)``
export const RadioGroupSub = styled(AntdRadio.Group)``
