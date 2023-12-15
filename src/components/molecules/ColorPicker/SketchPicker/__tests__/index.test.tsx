import * as React from 'react';
import { render } from '@testing-library/react';

import { SketchPicker } from '..';

describe('<SketchPicker  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SketchPicker color="" />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
