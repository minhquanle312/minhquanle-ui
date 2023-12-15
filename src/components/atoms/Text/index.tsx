// Libraries
import classNames from 'classnames';
import React from 'react';

// Styled
import { TextWrapper } from './styled';

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  [key: string]: any;
  type?: 'default' | 'secondary' | 'disabled' | 'error' | 'warning' | 'success';
  size?: 'small' | 'medium' | 'large' | number;
  color?: string;
  bold?: boolean;
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = props => {
  const { type, size, bold, children, className, style, color, ...restOf } = props;

  return (
    <TextWrapper
      size={size}
      className={classNames(`--${type}`, className, {
        'ants-font-bold': bold,
      })}
      style={{
        ...style,
        color,
      }}
      {...(restOf as any)}
    >
      {children}
    </TextWrapper>
  );
};

Text.defaultProps = {
  type: 'default',
  bold: false,
  size: 'small',
};
