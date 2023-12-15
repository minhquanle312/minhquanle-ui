// Libraries
import { THEME } from '../../../../../constants';
import styled from 'styled-components';

export const DropdownContent = styled.div`
  width: 230px;
  padding: 10px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DropdownHeader = styled.div`
  padding: 10px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > .__title {
    color: ${THEME.token?.bw6};
  }
`;

export const DropdownFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 10px 10px;
`;

export const DatePickerHeader = styled.div`
  padding: 10px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 1.6 !important;
`;

export const DatePickerCustomInput = styled.input`
  font-family: ${THEME.token?.fontFamily};
  color: ${THEME.token?.bw10} !important;
`;

export const DatePickerFooter = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

export const CalendarIconWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
  pointer-events: all;
`;
