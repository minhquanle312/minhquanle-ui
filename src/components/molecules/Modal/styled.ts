// Libraries
import styled, { css } from 'styled-components';
import { Modal as AntdModal } from 'antd';

// Constants
import { THEME } from 'src/constants';

export interface CustomModalProps {
  header?: React.ReactNode;
  headerStyle?: { [key: string]: any };
  rightFooter?: boolean;
}

const JSToCSS = cssObj => {
  let cssString = '';
  for (const objectKey in cssObj) {
    cssString += `${objectKey.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)}: ${
      cssObj[objectKey]
    };\n`;
  }

  return cssString;
};

export const StyledModal = styled(AntdModal)<CustomModalProps>`
  .antsomi-modal-content {
    .antsomi-modal-close {
      .antsomi-modal-close-x {
        width: 50px;
        height: 50px;
        line-height: 50px;
      }
    }
    .antsomi-modal-header {
      padding: 20px;
      padding-bottom: 0;
      border-style: 0px;

      ${props => (props.headerStyle ? JSToCSS(props.headerStyle) : '')}
      ${p =>
        p.header
          ? css`
              display: none;
            `
          : ''}
    }
    .antsomi-modal-body {
      padding: 20px;
    }
    .antsomi-modal-footer {
      display: flex;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;

      ${p =>
        p.rightFooter
          ? css`
              justify-content: flex-end;
            `
          : css`
              justify-content: flex-start;
            `}

      .antsomi-btn {
        height: 28px;
        border-radius: ${THEME.token?.borderRadius}px;
        font-size: ${THEME.token?.fontSize}px;
        color: ${THEME.token?.colorPrimary};
        font-weight: 700;

        &:hover {
          color: ${THEME.token?.colorTextHover};
        }

        &.antsomi-btn-primary {
          background-color: ${THEME.token?.colorPrimary};
          color: ${THEME.token?.bw0};

          &:hover {
            background-color: ${THEME.token?.colorTextHover};
          }
        }
      }
    }
  }
`;

export const WrapperSpin = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
`;
