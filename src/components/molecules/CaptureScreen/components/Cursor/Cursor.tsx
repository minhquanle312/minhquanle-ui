// Libraries
import React from 'react';

// Types
import { CursorProps } from './types';

// Styled
import { DottedCursor, PlusCursor, TooltipDrag } from './styled';

// Constants
import { DRAW_KEYS } from '../../constants';

const Cursor = (props: CursorProps) => {
  const { bgColor, cursorRef, drawItemType, isShowCursor, isPointerBox, offset, children } = props;

  if (!isShowCursor) return null;

  if (drawItemType === DRAW_KEYS.HIGHLIGHT) {
    return (
      <PlusCursor ref={cursorRef}>
        <TooltipDrag>Click & drag to draw</TooltipDrag>
      </PlusCursor>
    );
  }

  return (
    <DottedCursor isPointerBox={isPointerBox} offset={offset} ref={cursorRef} bgColor={bgColor}>
      {children}
    </DottedCursor>
  );
};

export { Cursor };
