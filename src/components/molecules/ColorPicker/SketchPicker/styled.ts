// Libraries
import styled from 'styled-components';

// Components
import { SketchPicker } from 'react-color';

export const SketchPickerWrapper = styled(SketchPicker)`
  --tw-shadow: 0 0 #0000 !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
  padding: 0px !important;
`;
