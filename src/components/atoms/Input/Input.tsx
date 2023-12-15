/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
// Libraries
import React, { ChangeEvent, FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react';

// Types
import { InputProps as AntdInputProps } from 'antd';

// Components
import { RequiredLabel, Text } from 'src/components/atoms';

// Utils
import { handleError } from 'src/utils';
import { getPreventKeyboardAction } from 'src/utils/web';
import { StyledInput } from './styled';

const PATH = 'src/components/atoms/Input/Input.tsx';

export interface InputProps extends AntdInputProps {
  noborder?: 'true' | 'false' | boolean;
  debounce?: number;
  label?: ReactNode;
  onAfterChange?: (value: any) => void;
  errorArchive?: string;
  required?: boolean;
  focused?: boolean;
  errorMsg?: string;
  disableUndo?: boolean;
}

const OriginInput: FC<InputProps> = props => {
  // Props
  const {
    debounce,
    errorArchive,
    required,
    focused,
    label,
    onAfterChange,
    onChange,
    errorMsg,
    ...restProps
  } = props;

  // State
  const [value, setValue] = useState<any>(props.value);
  const [isFocused, setFocused] = useState(false);

  const requiredMsg = useMemo(() => {
    let msg = '';
    const isEmptyValue = !props.value || (Array.isArray(props.value) && !props.value.length);

    if (required && isEmptyValue && isFocused) {
      msg = 'This field is required';
    }

    return msg;
  }, [props.value, required, isFocused]);

  // Ref
  const timeoutAfterChange = useRef<any>(null);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useEffect(() => {
    if (focused) {
      setFocused(focused);
    }
  }, [focused]);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const { value } = event.target;

      setValue(value);
      onChange && onChange(event);

      if (timeoutAfterChange) {
        clearTimeout(timeoutAfterChange.current);
      }

      timeoutAfterChange.current = setTimeout(() => {
        onAfterChange && onAfterChange(value);
      }, debounce);
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onChangeInput',
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
    <div className="input__wrapper">
      {label && renderRequiredLabel(label)}

      <StyledInput
        {...restProps}
        value={value}
        onBlur={e => {
          if (!isFocused) {
            setFocused(true);
          }

          restProps.onBlur && restProps.onBlur(e);
        }}
        onChange={onChangeInput}
        {...getPreventKeyboardAction(listDisableActions)}
      />
      {restProps.status === 'error' || errorArchive || requiredMsg ? (
        <Text color="#ff4d4f" style={{ marginLeft: 8, marginTop: 5 }}>
          {errorMsg || errorArchive || requiredMsg}
        </Text>
      ) : null}
    </div>
  );
};

OriginInput.defaultProps = {
  debounce: 400,
};

export const Input = OriginInput as typeof StyledInput;

Input.TextArea = StyledInput.TextArea;

export const { TextArea } = StyledInput;
