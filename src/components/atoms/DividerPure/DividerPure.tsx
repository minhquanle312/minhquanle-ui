// Libraries
import classNames from 'classnames';
import * as React from 'react';

// Styled
import { Wrapper } from './styled';

interface DividerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type?: 'vertical' | 'horizontal';
  dot?: boolean;
  dashed?: boolean;
  height?: number | string;
  width?: number | string;
}

export const DividerPure: React.FC<DividerProps> = props => {
  const { type, dot, dashed, className, style, width, height, children, ...restOf } = props;

  return (
    <Wrapper
      className={classNames(`--${type}`, className, {
        '--dot': dot,
        '--dashed': dashed,
      })}
      style={{ ...style, height, width }}
      {...restOf}
    />
  );
};

DividerPure.defaultProps = {
  type: 'horizontal',
  dot: false,
};
