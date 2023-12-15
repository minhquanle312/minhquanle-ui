// Libraries
import { Radio } from 'src/components/atoms';
import { THEME } from 'src/constants';
import styled from 'styled-components';

export const RadioGroupWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.625rem /** 10px */ * var(--tw-space-x-reverse));
    margin-left: calc(0.625rem /** 10px */ * calc(1 - var(--tw-space-x-reverse)));
  }
`;

export const StyledRadioGroup = styled(Radio.Group)``;
