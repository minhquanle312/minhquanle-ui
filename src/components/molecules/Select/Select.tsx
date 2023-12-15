// Libraries
import { Select as AntdSelect, SelectProps as AntdSelectProps } from 'antd';
import React from 'react';

// Types
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

// Icons
import Icon from '@antscorp/icons';

// Constants
import { THEME } from '../../../constants';
import { StyledTag, TagCloseBtn } from './styled';

export interface SelectProps extends AntdSelectProps {}

const tagRender = (props: CustomTagProps) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <StyledTag
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      closeIcon={
        <TagCloseBtn>
          <Icon
            type="icon-ants-remove"
            className="ants-text-primary"
            style={{
              fontSize: 10,
            }}
          />
        </TagCloseBtn>
      }
    >
      {label}
    </StyledTag>
  );
};

const CustomSelect: React.FC<SelectProps> = props => <AntdSelect {...props} />;

const Select = CustomSelect as typeof AntdSelect & React.FC<SelectProps>;

Select.OptGroup = AntdSelect.OptGroup;
Select.Option = AntdSelect.Option;
Select.defaultProps = {
  suffixIcon: (
    <Icon type="icon-ants-expand-more" style={{ fontSize: 16, color: THEME.token?.bw10 }} />
  ),
  tagRender,
};

export { Select };
