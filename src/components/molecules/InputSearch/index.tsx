// Libraries
import React, { CSSProperties, memo } from 'react';

// Components
import { Icon, Input } from 'src/components/atoms';

// Types
import { InputProps } from 'src/components/atoms/Input';

// Styled
import { Wrapper } from './styled';

interface InputSearchProps extends InputProps {
  inputStyle?: CSSProperties;
}

export const InputSearch: React.FC<InputSearchProps> = memo(props => {
  const { className, style, inputStyle, ...restOf } = props;

  return (
    <Wrapper tabIndex={-1} className={className} style={style}>
      <Input {...(restOf as any)} style={inputStyle} />

      <Icon type="icon-ants-search-2" className="__icon-search" />
    </Wrapper>
  );
});
