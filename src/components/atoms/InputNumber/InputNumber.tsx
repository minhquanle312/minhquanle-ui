// Libraries
import React from 'react';
import clsx from 'clsx';
import { InputNumber as AntdInputNumber, InputNumberProps as AntdInputNumberProps } from 'antd';

// Icons
import Icon from '@antscorp/icons';

export interface InputNumberProps extends AntdInputNumberProps {
  showHandler?: boolean;
}

export const InputNumber: React.FC<InputNumberProps> = props => {
  // Props
  const { showHandler, className, ...restOfProps } = props;

  return (
    <AntdInputNumber
      {...restOfProps}
      className={clsx(className, {
        '--show-handler': showHandler,
      })}
      upHandler={<Icon type="icon-ants-caret-up" style={{ fontSize: 8 }} />}
      downHandler={<Icon type="icon-ants-caret-down" style={{ fontSize: 8 }} />}
    />
  );
};

InputNumber.defaultProps = {
  showHandler: true,
};
