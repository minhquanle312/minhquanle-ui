// Libraries
import React, { useState } from 'react';
import Draggable, { DraggableData } from 'react-draggable';
import { Resizable } from 'react-resizable';

import 'react-resizable/css/styles.css';
import '@antscorp/icons/main.css';

// PropTypes
import { IPopupDraggable } from './types';

// Components
import { PopupContainer, WrapperIcon } from './styled';
import Icon from '@antscorp/icons';

const PopupDraggable: React.FC<IPopupDraggable> = props => {
  const {
    id,
    name,
    bounds,
    isHiddenClose,
    isHiddenResizing,
    isShowResizeHover,
    styleContainer,
    callback,
    defaultPosition,
    children,
  } = props;
  const [activeDrags, setActiveDrags] = useState<number>(0);
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(window.innerHeight || 300);

  const handleStart = (): void => {
    setActiveDrags(activeDrags + 1);
  };

  const handleStop = (_, data: DraggableData): void => {
    if (
      defaultPosition &&
      typeof defaultPosition.x === 'number' &&
      typeof defaultPosition.y === 'number' &&
      typeof callback === 'function'
    ) {
      const { x = 0, y = 0 } = data;
      // Mục tiêu giữ lại vị trí của popup sau khi unmount -> remount
      callback('SET_POSITION_DRAG', { name, x, y });
    }

    setActiveDrags(activeDrags - 1);
  };

  const handleResize = (event, { node, size, handle }): void => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Draggable
      handle="strong"
      // axis="x"
      defaultPosition={defaultPosition}
      bounds={bounds}
      onStart={handleStart}
      onStop={handleStop}
    >
      <Resizable
        width={width}
        height={height}
        onResize={handleResize}
        // handlewrapperclass="resize-handle"
        resizeHandles={['w', 'e', 'n', 's']}
      >
        <PopupContainer
          id={id}
          isHiddenResizing={isHiddenResizing}
          isShowResizeHover={isShowResizeHover}
          style={{ width, height, ...styleContainer }}
          className="popup-container no-cursor"
        >
          {!isHiddenClose && (
            <WrapperIcon onClick={() => callback('ON_CLOSE_POPUP', { name })}>
              <Icon type="icon-ants-remove-slim" className="icon-close" />
            </WrapperIcon>
          )}
          {children}
        </PopupContainer>
      </Resizable>
    </Draggable>
  );
};

PopupDraggable.defaultProps = {
  name: 'popup_dynamic',
  bounds: '',
  defaultPosition: { x: 0, y: 0 },
  isShowResizeHover: false,
  callback: () => {},
  children: 'Default Body',
};

export { PopupDraggable };
