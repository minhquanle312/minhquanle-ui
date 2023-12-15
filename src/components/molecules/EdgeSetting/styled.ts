// Libraries
import styled from 'styled-components'

// Constant
import { THEME } from 'minhquanle-ui/lib/constants'

export const EdgeSettingWrapper = styled.div`
  color: ${THEME.token?.colorIcon} !important;
`

export const EdgeSettingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EdgeSettingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 8px;
`
