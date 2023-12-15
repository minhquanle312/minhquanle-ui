// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { Space as AntdSpace } from 'antd';

// Types
import type { SpaceProps } from 'antd';

export const OriginSpace: React.FC<SpaceProps> = styled(AntdSpace)`
  &.antsomi-space-vertical {
    width: 100%;
  }
`;

export const Space = OriginSpace as typeof AntdSpace;
