import React, { forwardRef } from 'react';
import { IconProps } from './type';

export const MobileFriendly = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" {...props} ref={ref}>
    <path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27z" />
  </svg>
));
