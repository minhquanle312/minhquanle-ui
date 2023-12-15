import { ALIGN_TYPE, TAlign } from './index';

export const mapAlignToJustifyContent = (value: TAlign) => {
  if (value === 'left') return 'start';
  if (value === 'right') return 'end';
  if (value === 'center') return value;

  return 'auto';
};

export const mapJustifyContentToAlign = (value: 'start' | 'end' | 'center') => {
  if (value === 'start') return ALIGN_TYPE.LEFT;
  if (value === 'end') return ALIGN_TYPE.RIGHT;
  if (value === 'center') return ALIGN_TYPE.CENTER;

  return undefined;
};
