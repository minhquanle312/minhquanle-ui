// Libraries
import React, { memo, ReactNode } from 'react';

// Atoms
import { Text, TextProps } from '../Text';

// Styled
import { StyledRequired } from './styled';

interface RequiredLabelProps extends TextProps {
  children?: ReactNode;
}

export const RequiredLabel: React.FC<RequiredLabelProps> = memo(props => {
  // Props
  const { children, ...restProps } = props;

  return (
    <Text {...restProps}>
      <StyledRequired>*</StyledRequired>
      {children}
    </Text>
  );
});
