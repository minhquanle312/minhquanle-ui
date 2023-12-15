import * as React from 'react';
import { render } from '@testing-library/react';

import { PositionSetting } from '..';

describe('<PositionSetting  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <PositionSetting
        settings={{ linkedPositionInput: true, positionSuffix: '' }}
        styles={{ top: '', left: '', bottom: '', right: '' }}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
