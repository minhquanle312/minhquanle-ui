// Libraries
import React, { ReactNode, useEffect, useMemo, useState } from 'react';

// Components
import { Icon, RequiredLabel, Text } from 'src/components/atoms';
import { InputNumberWrapper } from './styled';

// Types
import type { InputNumberProps as AntdInputNumberProps } from 'antd';
import { valueType } from 'antd/lib/statistic/utils';

// Utils
import { getPreventKeyboardAction } from 'src/utils/web';
import { handleError } from 'src/utils';

export interface InputNumberProps extends AntdInputNumberProps {
  focused?: boolean;
  errorMsg?: ReactNode;
  label?: ReactNode;
  disableUndo?: boolean;
}

const PATH = 'src/app/components/molecules/InputNumber/index.tsx';

export const InputNumber: React.FC<InputNumberProps> = props => {
  const { label, required, focused, errorMsg, onChange, ...restOf } = props;

  const [isFocused, setFocused] = useState(false);

  const requiredMsg = useMemo(() => {
    let msg = '';
    const isEmptyValue = props.value == null;

    if (required && isEmptyValue && isFocused) {
      msg = 'This field is required';
    }

    return msg;
  }, [props.value, required, isFocused]);

  useEffect(() => {
    if (focused) {
      setFocused(focused);
    }
  }, [focused]);

  const onChangeInputNumber = (value: valueType | null) => {
    try {
      if (typeof onChange !== 'function') {
        return;
      }

      if (required) {
        if (value !== null) {
          onChange(value);
        }
        return;
      }

      onChange(value);
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onChangeInputNumber',
        args: {},
      });
    }
  };

  const renderRequiredLabel = (label: ReactNode) => {
    if (required) {
      return (
        <RequiredLabel color="#666666" style={{ marginBottom: 5 }}>
          {label}
        </RequiredLabel>
      );
    }

    return (
      <Text color="#666666" style={{ marginBottom: 5 }}>
        {label}
      </Text>
    );
  };

  const listDisableActions: Parameters<typeof getPreventKeyboardAction>[0] = [];

  if (props.disableUndo) {
    listDisableActions.push('undo');
  }

  return (
    <div>
      {label && renderRequiredLabel(label)}

      <InputNumberWrapper
        {...restOf}
        className="--show-handler"
        required={required}
        onChange={onChangeInputNumber}
        onBlur={e => {
          if (!focused) {
            setFocused(true);
          }

          props.onBlur && props.onBlur(e);
        }}
        upHandler={<Icon type="icon-ants-caret-up" size={9} />}
        downHandler={<Icon type="icon-ants-caret-down" size={9} />}
        {...getPreventKeyboardAction(listDisableActions)}
      />
      {(props.status === 'error' && errorMsg) || requiredMsg ? (
        <Text color="#ff4d4f" style={{ marginBottom: 5, marginLeft: 8 }}>
          {errorMsg || requiredMsg}
        </Text>
      ) : null}
    </div>
  );
};

InputNumber.defaultProps = {
  required: false,
  width: 57,
};
