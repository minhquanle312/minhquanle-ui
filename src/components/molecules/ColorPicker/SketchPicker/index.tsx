// Libraries
import React from 'react';
import { ColorResult } from 'react-color';

// Styled
import { SketchPickerWrapper } from './styled';

interface SketchPickerProps {
  presetColors?: any[];
  color: string;
  onChange?: (color: ColorResult) => void;
  onChangeComplete?: (color: ColorResult) => void;
}

export const SketchPicker: React.FC<SketchPickerProps> = props => (
  <SketchPickerWrapper {...props} />
);
