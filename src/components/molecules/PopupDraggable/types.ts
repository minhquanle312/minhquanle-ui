import React, { ReactNode } from 'react';
import { ControlPosition } from 'react-draggable';
import { CSSProperties } from 'styled-components';

export interface IPopupDraggable {
  id?: string;
  name?: string;
  bounds?: string;
  defaultPosition?: ControlPosition; // Dùng initial position cho Popup sử dụng như transform property trong CSS
  isHiddenClose?: boolean;
  isHiddenResizing?: boolean;
  isShowResizeHover?: boolean;
  callback: Function;
  children: ReactNode;
  styleContainer?: CSSProperties;
}
