// Libraries
import styled, { css } from 'styled-components';

interface StyledSettingWrapperProps {
  vertical?: boolean;
}

export const StyledSettingWrapper = styled.div<StyledSettingWrapperProps>`
  display: flex;

  ${props =>
    props.vertical
      ? css`
          flex-direction: column;
          margin-top: 5px;
          margin-bottom: 5px;
        `
      : css`
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        `}
`;
