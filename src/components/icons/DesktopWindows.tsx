import React, { forwardRef } from 'react';
import { IconProps } from './type';

export const DesktopWindows = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" {...props} ref={ref}>
    <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6v2H8v2h8v-2h-2v-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2" />
  </svg>
));
