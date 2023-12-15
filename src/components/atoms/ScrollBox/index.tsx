/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Constants
import { THEME } from 'src/constants';

interface ScrollBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  maxHeight?: number;
  loadMore?: Function;
  isPadding?: boolean;
}

export const ScrollBox: React.FC<ScrollBoxProps> = props => {
  const { children, height, maxHeight, isPadding, loadMore, style, ...restOf } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (wrapperRef.current && wrapperRef.current.scrollHeight > wrapperRef.current.clientHeight) {
      !isScroll && setIsScroll(true);
    } else {
      isScroll && setIsScroll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef.current]);

  const handleScroll = e => {
    const bottom = e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight;

    if (bottom) {
      if (typeof loadMore === 'function') {
        loadMore();
      }
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Wrapper
      ref={wrapperRef}
      {...{
        ...restOf,
        style: {
          ...style,
          ...(height && { height }),
          ...(maxHeight && { maxHeight }),
          paddingRight: isScroll && isPadding ? 8 : 0,
        },
      }}
      onScroll={handleScroll}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${THEME.token?.bw0};
  overflow: auto;
`;

ScrollBox.defaultProps = {
  isPadding: false,
};
