import React, { forwardRef } from 'react';
import { IconProps } from './type';

export const Store = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" {...props} ref={ref}>
    <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
  </svg>
));
