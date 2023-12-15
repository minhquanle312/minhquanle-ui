// Libraries
import styled from 'styled-components';

// Components
import { ChromePicker } from 'react-color';

export const StyledChromePicker = styled(ChromePicker)`
  padding: 0px !important;
  --tw-shadow: 0 0 #0000 !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;

  div + div {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
`;
