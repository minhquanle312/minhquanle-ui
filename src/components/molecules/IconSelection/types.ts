import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { ComponentPropsWithoutRef } from 'react';
import { ICON_TYPE } from './constants';

export interface IconSelectionProps {
  wrapperClassName?: string;
  className?: string;
  style?: React.CSSProperties;
  labelHeadingModal?: string;
  searchPlaceholder?: string;
  onChange?: (icon: string) => void;
  onRemoveIcon?: () => void;
  onChangeSvg?: Function;
  icon?: string;
  isOpen?: boolean;
  iconTypes?: IconType[];
  limitShowIcon?: number;
}

export type IconSelectionRendererProps = (
  | ({
      iconType: typeof ICON_TYPE.FONT_AWESOME;
    } & Omit<FontAwesomeIconProps, 'icon'>)
  | ({
      iconType: typeof ICON_TYPE.CUSTOM;
    } & ComponentPropsWithoutRef<'svg'>)
) & {
  iconName: string;
};

export type IconType = (typeof ICON_TYPE)[keyof typeof ICON_TYPE];

export const isIconType = (iconType: unknown): iconType is IconType =>
  iconType === ICON_TYPE.CUSTOM || iconType === ICON_TYPE.FONT_AWESOME;
