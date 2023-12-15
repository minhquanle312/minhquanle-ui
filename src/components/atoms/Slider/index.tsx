// Libraries
import React, { memo, useMemo } from 'react';

// Antd Components
import { Slider as AntdSlider } from 'antd';

// Types
import type { SliderRangeProps, SliderSingleProps } from 'antd/es/slider';

// Styled
import { SliderWrapper } from './styled';

export interface SliderProps extends SliderSingleProps {}

export const Slider: React.FC<SliderProps | SliderRangeProps> = memo(props => {
  const { range, value, min = 0, max = 0, ...restOf } = props;

  const isNegative = useMemo(() => !!(!range && min < 0), [range, min]);

  const calculateWidth = useMemo(
    () => (((value as number) || 0) * 100) / (Math.abs(max) + Math.abs(min) || 1),
    [min, max, value],
  );

  if (isNegative) {
    return (
      <SliderWrapper isNegative width={calculateWidth}>
        <AntdSlider min={min} max={max} value={value} {...(restOf as any)} marks={{ 0: ' ' }} />
      </SliderWrapper>
    );
  }

  return (
    <SliderWrapper>
      <AntdSlider {...props} />
    </SliderWrapper>
  );
});

Slider.defaultProps = {
  tooltipVisible: false,
  min: 0,
};
