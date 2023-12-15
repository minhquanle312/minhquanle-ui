import React from 'react';

export interface CursorProps {
  drawItemType: string;
  isShowCursor: boolean;
  cursorRef?: React.RefObject<HTMLDivElement>;
  bgColor?: string;
  isPointerBox?: boolean;
  offset: number;
  children?: any;
}
