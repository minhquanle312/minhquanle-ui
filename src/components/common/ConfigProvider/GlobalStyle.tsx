// Libraries
import React from 'react';
import { Global, css } from '@emotion/react';

// Constants
import { THEME } from 'src/constants';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

interface GlobalStyleProps {}

export const GlobalStyle: React.FC<GlobalStyleProps> = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

      /* Button */
      .antsomi-btn {
        font-weight: 700 !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 5px !important;

        i {
          font-size: 20px;
        }
      }

      .antsomi-btn-default {
        &:not(:disabled):hover {
          border-color: ${THEME.token?.blue3} !important;
          background-color: ${THEME.token?.blue} !important;
        }
        &:not(:disabled).antsomi-btn-default-active {
          border-color: ${THEME.token?.colorPrimary} !important;
          background-color: ${THEME.token?.blue1_1} !important;
        }

        &.antsomi-btn-dangerous {
          border-color: ${THEME.token?.red2} !important;

          &:not(:disabled):hover {
            border-color: ${THEME.token?.red3} !important;
            background-color: ${THEME.token?.red} !important;
          }
        }

        &.antsomi-btn-icon-only {
          width: 36px !important;
          height: 36px !important;
        }
      }

      .antsomi-btn-text:disabled,
      .antsomi-btn-link:disabled {
        color: ${THEME.token?.bw6} !important;
      }

      .antsomi-btn-primary:disabled,
      .antsomi-btn-default:disabled,
      .antsomi-btn-dashed:disabled,
      .antsomi-btn-disabled,
      .antsomi-btn-default.antsomi-btn-dangerous:disabled,
      .antsomi-btn-primary.antsomi-btn-dangerous:disabled {
        border-color: ${THEME.token?.bw4} !important;
      }

      .antsomi-btn-default:disabled,
      .antsomi-btn-dashed:disabled,
      .antsomi-btn-disabled,
      .antsomi-btn-default.antsomi-btn-dangerous:disabled {
        color: ${THEME.token?.bw6} !important;
        background-color: ${THEME.token?.bw2} !important;
      }

      /* Input */
      .antsomi-input,
      .antsomi-input-affix-wrapper {
        border-width: 0 0 1px 0 !important;
        box-shadow: none !important;

        &:hover {
          background-color: ${THEME.token?.blue};
        }
      }

      .antsomi-input {
        &:focus {
          background-color: ${THEME.token?.bw0};
        }
      }

      .antsomi-input-affix-wrapper {
        &:hover {
          > input.antsomi-input {
            background-color: ${THEME.token?.blue};
          }
        }

        &.antsomi-input-affix-wrapper-focused {
          background-color: ${THEME.token?.bw0};

          > input.antsomi-input {
            background-color: ${THEME.token?.bw0};
          }
        }
      }

      .antsomi-input-status-error:not(.antsomi-input-disabled):not(
          .antsomi-input-borderless
        ).antsomi-input {
        &:hover {
          background-color: ${THEME.token?.red};
        }
      }

      .antsomi-input-status-warning:not(.antsomi-input-disabled):not(
          .antsomi-input-borderless
        ).antsomi-input {
        &:hover {
          background-color: ${THEME.token?.gold1};
        }
      }

      .antsomi-input-affix-wrapper-status-error:not(.antsomi-input-affix-wrapper-disabled):not(
          .antsomi-input-affix-wrapper-borderless
        ).antsomi-input-affix-wrapper {
        &:hover,
        &:hover > input.antsomi-input {
          background-color: ${THEME.token?.red};
        }
      }

      .antsomi-input-affix-wrapper-status-warning:not(.antsomi-input-affix-wrapper-disabled):not(
          .antsomi-input-affix-wrapper-borderless
        ).antsomi-input-affix-wrapper {
        &:hover,
        &:hover > input.antsomi-input {
          background-color: ${THEME.token?.gold1};
        }
      }

      // Select
      .antsomi-select .antsomi-select-arrow {
        right: 5px !important;
      }

      .antsomi-select:not(.antsomi-select-disabled):not(.antsomi-select-customize-input):not(
          .antsomi-pagination-size-changer
        ):hover
        .antsomi-select-selector {
        border-color: ${THEME.token?.blue1} !important;
        background-color: ${THEME.token?.blue} !important;
      }

      .antsomi-select-disabled.antsomi-select:not(.antsomi-select-customize-input)
        .antsomi-select-selector {
        border-color: ${THEME.token?.bw4};
      }

      .antsomi-select-disabled.antsomi-select:not(.antsomi-select-customize-input) .antsomi-tag {
        background-color: ${THEME.token?.bw4} !important;
      }

      .antsomi-select-selector {
        border-width: 0 0 1px 0 !important;
        box-shadow: none !important;
      }

      .antsomi-select-dropdown {
        padding: 0 !important;
      }

      .antsomi-select-selection-overflow {
        gap: 5px;
      }

      // Input Number
      .antsomi-input-number,
      .antsomi-input-number-affix-wrapper {
        border-width: 0 0 1px 0 !important;
        box-shadow: none !important;

        &.--show-handler {
          .antsomi-input-number-handler-wrap {
            opacity: 1;
          }
        }
      }

      .antsomi-input-number-group-addon {
        border-width: 0 0 1px 0 !important;
        background-color: ${THEME.token?.bw0} !important;
        box-shadow: none !important;
      }

      .antsomi-input-number:hover {
        background-color: ${THEME.token?.blue};

        .antsomi-input-number-handler {
          background-color: ${THEME.token?.blue};
        }
      }

      .antsomi-input-number:focus,
      .antsomi-input-number-focused {
        border-color: ${THEME.token?.colorPrimary} !important;
      }

      .antsomi-input-number-handler {
        border: none !important;

        &:hover i {
          color: ${THEME.token?.colorPrimary};
        }
      }

      // DatePicker
      .antsomi-picker {
        border-width: 0 0 1px 0 !important;
        box-shadow: none !important;
      }

      .antsomi-picker:hover,
      .antsomi-picker-focused {
        background-color: ${THEME.token?.blue};
      }

      .antsomi-picker:not(.antsomi-picker-status-error) .antsomi-picker-suffix {
        color: ${THEME.token?.bw10};
      }

      .antsomi-picker:not(.antsomi-picker-disabled).antsomi-picker-status-error:not(
          [disabled]
        ):hover {
        background-color: ${THEME.token?.red} !important;
      }

      // Custom
      .date-time-picker__popup-content {
        width: 230px !important;
      }

      .antsomi-picker-dropdown__advanced {
        > .antsomi-picker-panel-container > .antsomi-picker-panel-layout > .antsomi-picker-panel {
          flex-direction: column-reverse;
          padding-bottom: 60px;

          .antsomi-picker-date-panel {
            width: 280px !important;

            .antsomi-picker-cell {
              pointer-events: none !important;
            }
          }
        }

        &.--error
          > .antsomi-picker-panel-container
          > .antsomi-picker-panel-layout
          > .antsomi-picker-panel {
          padding-bottom: 80px;
        }
      }

      // Slider
      .antsomi-slider {
        margin: 0 !important;

        &.antsomi-slider-horizontal {
          .antsomi-slider-rail,
          .antsomi-slider-step {
            height: 4px;
            width: 100%;
          }

          .antsomi-slider-rail {
            height: 4px;
          }
        }

        .antsomi-slider-rail,
        .antsomi-slider-step {
          position: absolute !important;
        }

        .antsomi-slider-rail {
          border-radius: 2px !important;
          transition: background-color 0.3s !important;
          background-color: ${THEME.token?.accent1} !important;
        }

        .antsomi-slider-track {
          position: absolute !important;
          border-radius: 2px !important;
          transition: background-color 0.3s !important;
          background-color: ${THEME.token?.colorPrimary} !important;
        }

        .antsomi-slider-step {
          background: 0 0 !important;
          pointer-events: none !important;
        }

        .antsomi-slider-handle {
          position: absolute !important;
          width: 14px !important;
          height: 14px !important;
          margin-top: -2px;
          background-color: #fff;
          border-radius: 50%;
          box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 2px 0px;
          cursor: pointer;
          transition: border-color 0.3s, box-shadow 0.6s,
            transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
        }

        .antsomi-slider-handle::before,
        .antsomi-slider-handle::after,
        .antsomi-slider-handle:hover::after,
        .antsomi-slider-handle:focus::before,
        .antsomi-slider-handle:focus::after {
          width: 14px !important;
          height: 14px !important;
          box-shadow: none !important;
          inset-block-start: 0 !important;
          inset-inline-start: 0 !important;
        }

        .antsomi-slider-handle::after {
          background-color: ${THEME.token?.colorPrimary} !important;
        }

        &:hover {
          .antsomi-slider-track {
            background-color: ${THEME.token?.colorPrimary} !important;
          }

          .antsomi-slider-rail {
            background-color: ${THEME.token?.accent1} !important;
          }

          .antsomi-slider-handle::after {
            box-shadow: none !important;
          }

          .antsomi-slider-handle {
            border-color: ${THEME.token?.colorPrimary} !important;
          }
        }

        &.antsomi-slider-with-marks {
          margin-bottom: 0 !important;
        }

        &.antsomi-slider-disabled {
          .antsomi-slider-handle {
            background-color: ${THEME.token?.accent2} !important;
            border-color: ${THEME.token?.accent2} !important;
          }
        }
      }

      /* Radio */
      .antsomi-radio-group-outline {
        .antsomi-radio-button-wrapper {
          display: inline-flex;
          align-items: center;
          height: 30px;
          padding-left: 20px;
          padding-right: 20px;
          font-family: 'Roboto';
          color: ${THEME.token?.colorTextBase};
          font-size: ${THEME.token?.fontSize}px;

          &:focus-within {
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
              var(--tw-shadow);
          }

          &:first-child {
            border-top-left-radius: ${THEME.token?.borderRadius}px;
            border-bottom-left-radius: ${THEME.token?.borderRadius}px;
          }

          &:last-child {
            border-top-right-radius: ${THEME.token?.borderRadius}px;
            border-bottom-right-radius: ${THEME.token?.borderRadius}px;
          }

          &.antsomi-radio-button-wrapper-checked {
            border-color: ${THEME.token?.accent1};
            background-color: ${THEME.token?.colorTextActive};
            color: ${THEME.token?.colorPrimary};
            font-weight: 700;

            &::before {
              background-color: ${THEME.token?.accent1};
            }
          }
        }

        .antsomi-radio-wrapper {
          font-family: 'Roboto';
          color: ${THEME.token?.colorTextBase};
          font-size: ${THEME.token?.fontSize}px;
          margin-right: 0;

          .antsomi-radio-inner {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .antsomi-radio-checked .antsomi-radio-inner::after {
            transform: scale(0.6);
          }

          .antsomi-radio-inner::after {
            position: unset !important;
            transition: none !important;
            transform: scale(0.6);
            margin-block-start: 0px;
            margin-inline-start: 0px;
          }

          .antsomi-radio {
            .antsomi-radio-inner {
              width: 16px;
              height: 16px;
              border-color: ${THEME.token?.colorPrimary};
              border-width: 2px;
              background-color: ${THEME.token?.bw0};

              &::after {
                background-color: ${THEME.token?.colorPrimary};
              }
            }
          }

          &:not(:last-child) {
            margin-right: 30px;
          }
        }
      }

      /* Modal Close */
      .antsomi-modal-root .antsomi-modal-wrap {
        z-index: 3001 !important;
      }

      .antsomi-modal .antsomi-modal-close {
        width: unset !important;
        height: unset !important;
        top: 0px !important;
        right: 0 !important;
      }
      .antsomi-modal-content {
        .antsomi-modal-header {
          .antsomi-modal-title {
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            word-wrap: break-word;
          }
        }
        .antsomi-modal-body {
          font-size: 14px !important;
          p {
            margin: 0;
          }
        }
        .antsomi-modal-footer {
          padding: 10px 16px;
          text-align: right;
          background: transparent;
          border-top: 1px solid #f0f0f0;
          border-radius: 0 0 2px 2px;
        }
      }

      /* Message Notification */
      .ant-message {
        z-index: 999999 !important;
      }
    `}
  />
);
