import { FONTAWESOME_ICONS, ICON_TYPE } from './constants';
import { isIconType } from './types';

export const serializeIcon = (icon: string) => {
  const [iconType, ...rest] = icon.split(' ');

  if (isIconType(iconType)) {
    return { iconType, iconName: rest.join(' ') };
  }

  // Handle for older data don't have icon-type prefix
  if (FONTAWESOME_ICONS.includes(icon)) {
    return { iconType: ICON_TYPE.FONT_AWESOME, iconName: icon };
  }

  return null;
};
