// Libraries
import React from 'react';

// Antd Icons
import { LoadingOutlined } from '@ant-design/icons';
import { SpinProps as AntdSpinProps } from 'antd';

// Styled
import { StyledSpin } from './styled';

// Constants
import { THEME } from 'src/constants';

export interface TSpinProps extends AntdSpinProps {
  indicatorSize?: number;
  children?: any;
}

export const Spin = (props: TSpinProps) => {
  const { indicatorSize, ...restOf } = props;
  return (
    <StyledSpin
      {...{
        indicator: (
          <LoadingOutlined
            style={{ fontSize: indicatorSize || 30, color: THEME.token?.colorPrimary }}
            spin
          />
        ),
        ...restOf,
      }}
    >
      {props.children}
    </StyledSpin>
  );
};

Spin.defaultProps = {};
