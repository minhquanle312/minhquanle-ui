// Libraries
import styled, { css } from 'styled-components';

// Constants
import { THEME } from 'src/constants';

interface InputNumberWrapperProps {
  isNegative?: boolean;
  sliderValue?: number;
  width?: number;
}

export const SliderWrapper = styled.div<InputNumberWrapperProps>`
  width: 100%;

  .antsomi-slider {
    ${p => {
      const width = p.width || 0;

      return p.isNegative
        ? css`
            .antsomi-slider-handle-1 {
              display: none;
            }

            .antsomi-slider-track {
              ${width < 0
                ? css`
                    left: auto !important;
                    right: 50% !important;
                  `
                : css`
                    left: 50% !important;
                    right: auto !important;
                  `}

              width: ${Math.abs(width)}% !important;
            }

            .antsomi-slider-dot {
              top: -4px;
              width: 0.25rem;
              height: 0.875rem;
              border-radius: 0.125rem;
              background-color: ${THEME.token?.accent1};
              border-color: ${THEME.token?.accent1};
            }
          `
        : '';
    }}
  }
`;
