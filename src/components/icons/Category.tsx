import React, { forwardRef } from 'react';
import { IconProps } from './type';

export const Category = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" {...props} ref={ref}>
    <path d="m12 2-5.5 9h11z" />
    <circle cx="17.5" cy="17.5" r="4.5" />
    <path d="M3 13.5h8v8H3z" />
  </svg>
));
