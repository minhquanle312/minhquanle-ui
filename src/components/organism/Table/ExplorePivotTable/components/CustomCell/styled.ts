import styled from 'styled-components';

export const BarCell = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.075);

  .bar-line {
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 100%;
  }
`;

export const HeatCell = styled.div`
  position: absolute;
  inset: 0;
`;

export const StyledValue = styled.div`
  position: relative;
  z-index: 1;
`;
