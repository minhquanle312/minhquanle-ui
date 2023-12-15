// Libraries
import React, { CSSProperties, memo } from 'react';

// Atoms
import { Button, Icon, Popover } from 'src/components/atoms';

// Molecules
import { SettingWrapper } from '../../molecules/SettingWrapper';
import { EdgeSetting } from '../../molecules/EdgeSetting';

// Config
import { SPACING_SETTINGS_DEFAULT, SPACING_STYLES_DEFAULT } from './config';

// Types
import { TPositionSettings, TPositionStyles } from './types';

// Utils
import { getNumberFromString } from 'src/utils/common';
import { handleError } from 'src/utils';

const PATH = 'src/components/organism/PositionSetting/index.tsx';

interface PositionSettingProps {
  labelWrapper?: string;
  labelEdgeSetting?: string;
  settings: TPositionSettings;
  styles: TPositionStyles;
  labelStyle?: Partial<CSSProperties>;
  onChange?: (settings: TPositionSettings, styles: TPositionStyles) => void;
}

interface PositionSettingPopoverProps extends PositionSettingProps {}

export const PositionSetting: React.FC<PositionSettingProps> = memo(props => {
  // Props
  const { labelWrapper, labelEdgeSetting, settings, styles, labelStyle, onChange } = props;

  return (
    <SettingWrapper
      label={labelWrapper || 'Position'}
      labelStyle={{ ...labelStyle, fontWeight: 'bold' }}
    >
      <PositionSettingPopover
        labelEdgeSetting={labelEdgeSetting}
        settings={settings}
        styles={styles}
        onChange={onChange}
      />
    </SettingWrapper>
  );
});

export const PositionSettingPopover: React.FC<PositionSettingPopoverProps> = props => {
  // Props
  const {
    labelWrapper,
    labelEdgeSetting,
    settings,
    styles,
    labelStyle,
    onChange = () => {},
  } = props;

  // Handlers
  const onChangePositionSetting = ({ values, unit, linked }) => {
    try {
      const positionStyles = {
        top: `${values[0]}${unit}`,
        right: `${values[1]}${unit}`,
        bottom: `${values[2]}${unit}`,
        left: `${values[3]}${unit}`,
      };

      // Callback
      onChange(
        {
          ...settings,
          linkedPositionInput: linked,
          positionSuffix: unit,
        },
        {
          ...styles,
          ...positionStyles,
        },
      );
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'onChangePositionSetting',
        args: { values, unit, linked },
      });
    }
  };

  const content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        width: 288,
      }}
    >
      <EdgeSetting
        label={labelEdgeSetting || 'Position'}
        linked={settings.linkedPositionInput}
        unit={settings.positionSuffix}
        minValue={-9999}
        maxValue={9999}
        values={[
          getNumberFromString(styles.top),
          getNumberFromString(styles.right),
          getNumberFromString(styles.bottom),
          getNumberFromString(styles.left),
        ]}
        onChange={onChangePositionSetting}
      />
    </div>
  );

  return (
    <Popover placement="bottomRight" content={content} trigger={['click']}>
      <Button icon={<Icon type="icon-ants-edit-2" />} type="text" />
    </Popover>
  );
};

PositionSetting.defaultProps = {
  settings: SPACING_SETTINGS_DEFAULT,
  styles: SPACING_STYLES_DEFAULT,
};
