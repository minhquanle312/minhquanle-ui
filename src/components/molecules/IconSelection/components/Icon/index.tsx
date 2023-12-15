import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICON_TYPE, CUS_ICON_MAPPING } from '../../constants';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { IconSelectionRendererProps } from '../../types';

export const IconSelectionRenderer = forwardRef((props: IconSelectionRendererProps, ref: any) => {
  const { iconType } = props;

  if (iconType === ICON_TYPE.FONT_AWESOME) {
    const { iconName, iconType, ...rest } = props;

    return <FontAwesomeIcon ref={ref} {...rest} icon={iconName.split(' ') as [IconPrefix, IconName]} />;
  }

  if (iconType === ICON_TYPE.CUSTOM) {
    const { iconName, iconType, ...rest } = props;

    const Icon = CUS_ICON_MAPPING[iconName];

    const style: React.CSSProperties = {
      fill: 'currentcolor',
      height: '1em',
      width: '1em',
      ...rest.style,
    };

    return Icon ? <Icon ref={ref} {...rest} style={style} /> : null;
  }

  return null;
});
