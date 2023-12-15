// Libraries
import styled from 'styled-components';

// Components
import { Tag } from '../../atoms';

// Constants
import { THEME } from '../../../constants';

export const StyledTag = styled(Tag)`
  position: relative;
  background-color: ${THEME.token?.blue2} !important;
  padding: 3px 10px !important;
  margin: 0px !important;
  border-radius: 15px !important;
  border: none !important;
  font-size: ${THEME.token?.fontSize}px !important;

  .antsomi-tag-close-icon {
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover {
    .antsomi-tag-close-icon {
      opacity: 1;
    }
  }
`;

export const TagCloseBtn = styled.div<{ borderColor?: string }>`
  position: absolute;
  top: 3px;
  right: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border: 2.5px solid ${p => (p.borderColor ? p.borderColor : '#cae5fe')};
  background-color: #fff;
  color: ${THEME.token?.colorPrimary};
`;
