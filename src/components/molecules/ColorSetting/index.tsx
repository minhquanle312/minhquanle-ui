// Libraries
import React, { CSSProperties } from 'react';

// Molecules
import { SettingWrapper } from '../SettingWrapper';
import { ColorPicker, ColorPickerProps } from 'src/components/molecules/ColorPicker';

// Utils
import { handleError } from 'src/utils';
import { Button, Icon, Text } from 'src/components/atoms';

// Styled
import { ButtonPreset, PresetColor, PresetWrapper } from './styled';

const PATH = 'src/components/molecules/ColorSetting/index.tsx';

interface ColorSettingProps extends ColorPickerProps {
  label: string;
  labelClassName?: string;
  labelStyling?: Partial<CSSProperties>;
  isHideBtnEdit?: boolean;
  className?: string;
  vertical?: boolean;
  customColors?: Array<string>;
  callback?: (type: 'ON_ADD_NEW_PRESET' | 'ON_EDIT_CLICKED', dataOut?: any) => void;
}

const stylingCenter: Partial<CSSProperties> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
};

export const ColorSetting: React.FC<ColorSettingProps> = props => {
  const {
    label,
    color,
    labelClassName,
    labelStyling,
    isHideBtnEdit,
    customColors,
    className,
    vertical,
    callback,
    onChange,
    ...restOf
  } = props;

  const onClickPresetColor = (color: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      typeof onChange === 'function' && onChange(color);
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onClickPresetColor',
        args: { color },
      });
    }
  };

  const onClickAddNewPresetColor = () => {
    try {
      if (color && typeof customColors !== 'undefined' && !customColors?.includes(color)) {
        const draftCustomColors = [...customColors];
        draftCustomColors.push(color);

        if (typeof callback === 'function') {
          callback('ON_ADD_NEW_PRESET', { customColors: draftCustomColors });
        }
      }
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onClickAddNewPresetColor',
        args: {},
      });
    }
  };

  const onClickEdit = () => {
    try {
      if (typeof callback === 'function') {
        callback('ON_EDIT_CLICKED');
      }
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onClickEdit',
        args: {},
      });
    }
  };

  const presetColors = (
    <div>
      <div style={stylingCenter}>
        <Text>Color Profile</Text>
        {!isHideBtnEdit && (
          <Button type="primary" onClick={onClickEdit}>
            Edit
          </Button>
        )}
      </div>
      <PresetWrapper>
        <ButtonPreset shape="circle" onClick={onClickAddNewPresetColor}>
          <Icon type="icon-ants-plus-slim" style={{ fontSize: 14 }} />
        </ButtonPreset>
        {customColors && customColors.length
          ? customColors.map((customColor, idx) => (
              <PresetColor
                key={idx}
                color={customColor}
                onClick={() => onClickPresetColor(customColor)}
              >
                <div className="__color" style={{ backgroundColor: customColor }} />
              </PresetColor>
            ))
          : null}
      </PresetWrapper>
    </div>
  );

  return (
    <SettingWrapper
      label={label}
      className={className}
      labelClassName={labelClassName}
      labelStyle={labelStyling}
      vertical={vertical}
    >
      <ColorPicker {...restOf} color={color} presetColors={presetColors} onChange={onChange} />
    </SettingWrapper>
  );
};

ColorSetting.defaultProps = {
  label: '',
  labelClassName: '',
  customColors: [],
  isHideBtnEdit: true,
  callback: () => {},
  onChange: () => {},
};
