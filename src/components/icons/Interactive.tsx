import React, { forwardRef } from 'react';
import { IconProps } from './type';

export const Interactive = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 13 17"
    {...props}
    ref={ref}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M11.3376 9.31641C12.2166 9.77344 12.7087 10.7227 12.5681 11.707L11.9705 15.2578C11.8298 15.9609 11.197 16.4883 10.4939 16.4883H5.7478C5.29077 16.4883 4.83374 16.3125 4.51733 15.9961L0.685303 12.1641L1.73999 11.1094C2.02124 10.8281 2.40796 10.6523 2.79468 10.6523C2.97046 10.6523 2.90015 10.6523 4.48218 11.0039V8.54297C3.1814 7.875 2.23218 6.46875 2.23218 4.88672C2.23218 2.60156 4.09546 0.738281 6.38062 0.738281C8.63062 0.738281 10.4939 2.60156 10.4939 4.88672C10.4939 6.1875 9.86108 7.34766 8.91187 8.12109L11.3376 9.31641ZM11.0916 11.4609C11.1267 11.1445 10.9509 10.8281 10.6697 10.6875L8.06812 9.38672H6.73218V4.88672C6.73218 4.67578 6.59155 4.5 6.38062 4.5C6.16968 4.5 5.9939 4.67578 5.9939 4.88672V12.832L2.79468 12.1641L5.57202 14.9414C5.60718 14.9766 5.67749 15.0117 5.7478 15.0117H10.4939L11.0916 11.4609ZM3.7439 4.88672C3.7439 5.58984 4.02515 6.22266 4.48218 6.71484V4.88672C4.48218 3.83203 5.32593 2.98828 6.38062 2.98828C7.40015 2.98828 8.2439 3.83203 8.2439 4.88672V6.71484C8.70093 6.22266 8.98218 5.58984 8.98218 4.88672C8.98218 3.41016 7.82202 2.25 6.38062 2.25C4.93921 2.25 3.7439 3.41016 3.7439 4.88672Z"
    />
  </svg>
));
