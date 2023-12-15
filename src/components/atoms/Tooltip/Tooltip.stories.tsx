// Libraries
import React, { useEffect, useMemo, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

// Antd
import { Button, Divider, Segmented, Space } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';

// Components
import { Tooltip } from './Tooltip';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    title: {
      name: 'title',
      defaultValue: undefined,
      description: 'The text shown in the tooltip',
      table: {
        type: { summary: 'ReactNode | () => ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    align: {
      name: 'align',
      defaultValue: undefined,
      description: `This value will be merged into placement's config, please refer to the settings [rc-tooltip](https://github.com/react-component/tooltip)`,
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    arrow: {
      name: 'arrow',
      defaultValue: true,
      description: `Change arrow's visible state and change whether the arrow is pointed at the center of target.`,
      table: {
        type: { summary: 'boolean | { pointAtCenter: boolean }' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    autoAdjustOverflow: {
      name: 'autoAdjustOverflow',
      defaultValue: true,
      description: `Whether to adjust popup placement automatically when popup is off screen`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    color: {
      name: 'color',
      defaultValue: undefined,
      description: `The background color`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: 'color',
    },
    defaultOpen: {
      name: 'defaultOpen',
      defaultValue: false,
      description: `TWhether the floating tooltip card is open by default`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    destroyTooltipOnHide: {
      name: 'destroyTooltipOnHide',
      defaultValue: false,
      description: `Whether destroy tooltip when hidden`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    getPopupContainer: {
      name: 'getPopupContainer',
      defaultValue: () => document.body,
      description:
        'The DOM container of the tip, the default behavior is to create a `div` element in `body`',
      table: {
        type: { summary: '(triggerNode: HTMLElement) => HTMLElement' },
        defaultValue: { summary: '() => document.body' },
      },
      control: {
        type: null,
      },
    },
    mouseEnterDelay: {
      name: 'mouseEnterDelay',
      defaultValue: 0.1,
      description: 'Delay in seconds, before tooltip is shown on mouse enter',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0.1 },
      },
      control: {
        type: 'number',
      },
    },
    mouseLeaveDelay: {
      name: 'mouseLeaveDelay',
      defaultValue: 0.1,
      description: 'Delay in seconds, before tooltip is hidden on mouse leave',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0.1 },
      },
      control: {
        type: 'number',
      },
    },
    overlayClassName: {
      name: 'overlayClassName',
      defaultValue: undefined,
      description: 'Class name of the tooltip card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    overlayStyle: {
      name: 'overlayStyle',
      defaultValue: undefined,
      description: 'Style of the tooltip inner content',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    placement: {
      name: 'placement',
      defaultValue: 'top',
      description:
        'The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
      control: {
        type: 'select',
      },
      options: [
        'top',
        'left',
        'right',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
        'leftTop',
        'leftBottom',
        'rightTop',
        'rightBottom',
      ],
    },
    trigger: {
      name: 'trigger',
      defaultValue: 'hover',
      description: 'Tooltip trigger mode. Could be multiple by passing an array',
      table: {
        type: { summary: 'hover | focus | click | contextMenu | Array<string>' },
        defaultValue: { summary: 'hover' },
      },
      control: {
        type: 'select',
      },
      options: ['hover', 'focus', 'click', 'contextMenu'],
    },
    open: {
      name: 'open',
      defaultValue: false,
      description:
        'Whether the floating tooltip card is open or not. Use visible under 4.23.0 ([why](https://ant.design/docs/react/faq#why-open)?)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    zIndex: {
      name: 'zIndex',
      defaultValue: undefined,
      description: 'Config `z-index` of Tooltip',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'number',
      },
    },
    onOpenChange: {
      name: 'onOpenChange',
      defaultValue: undefined,
      description: 'Callback executed when visibility of the tooltip card is changed',
      table: {
        type: { summary: '(open: boolean) => void' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A simple text popup tip.
- The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations.
- To provide an explanation of a button/text/operation. It's often used instead of the html title attribute.
        `,
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

// Default
const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: 'Tooltip',
};

// Examples
export const Basic: ComponentStory<any> = () => (
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);

Basic.parameters = {
  docs: {
    description: {
      story: 'The simplest use.',
    },
  },
};

export const Arrow: ComponentStory<any> = () => {
  const text = <span>prompt text</span>;

  const buttonWidth = 70;
  const gap = 8;

  const btnProps = {
    style: {
      width: buttonWidth,
    },
  };
  const options = ['Show', 'Hide', 'Center'];
  const [arrow, setArrow] = useState('Show');

  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }

    if (arrow === 'Show') {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <div className="demo">
      <Segmented
        value={arrow}
        options={options}
        onChange={(val: SegmentedValue) => setArrow(val as string)}
      />
      <Divider orientation="center">Content</Divider>
      <div style={{ marginLeft: buttonWidth, display: 'flex', flexWrap: 'nowrap', columnGap: gap }}>
        <Tooltip placement="topLeft" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>TR</Button>
        </Tooltip>
      </div>
      <div
        style={{
          width: buttonWidth,
          float: 'left',
          display: 'flex',
          flexDirection: 'column',
          rowGap: gap,
        }}
      >
        <Tooltip placement="leftTop" title={text} arrow={mergedArrow}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text} arrow={mergedArrow}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text} arrow={mergedArrow}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          width: buttonWidth,
          marginLeft: buttonWidth * 4 + 24,
          display: 'flex',
          flexDirection: 'column',
          rowGap: gap,
        }}
      >
        <Tooltip placement="rightTop" title={text} arrow={mergedArrow}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text} arrow={mergedArrow}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text} arrow={mergedArrow}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: buttonWidth,
          clear: 'both',
          display: 'flex',
          flexWrap: 'nowrap',
          columnGap: gap,
        }}
      >
        <Tooltip placement="bottomLeft" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};

Arrow.parameters = {
  docs: {
    description: {
      story: 'Support show, hide or keep arrow in the center.',
    },
  },
};

export const ColorfulTooltip: ComponentStory<any> = () => {
  const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
  ];

  const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
  return (
    <>
      <Divider orientation="left">Presets</Divider>
      <Space wrap>
        {colors.map(color => (
          <Tooltip title="prompt text" color={color} key={color}>
            <Button>{color}</Button>
          </Tooltip>
        ))}
      </Space>
      <Divider orientation="left">Custom</Divider>
      <Space wrap>
        {customColors.map(color => (
          <Tooltip title="prompt text" color={color} key={color}>
            <Button>{color}</Button>
          </Tooltip>
        ))}
      </Space>
    </>
  );
};

ColorfulTooltip.parameters = {
  docs: {
    description: {
      story: 'We preset a series of colorful Tooltip styles for use in different situations.',
    },
  },
};

export const Placement: ComponentStory<any> = () => {
  const text = <span>prompt text</span>;

  const buttonWidth = 70;
  return (
    <div>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Tooltip placement="topLeft" title={text}>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text}>
          <Button>TR</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Tooltip placement="leftTop" title={text}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
        <Tooltip placement="rightTop" title={text}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Tooltip placement="bottomLeft" title={text}>
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text}>
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text}>
          <Button>BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};

Placement.parameters = {
  docs: {
    description: {
      story: 'There are 12 placement options available.',
    },
  },
};

export const AutoShift: ComponentStory<any> = () => {
  useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Tooltip title="Thanks for using antd. Have a nice day!" trigger="click" defaultOpen>
        <Button>Scroll The Window</Button>
      </Tooltip>
    </div>
  );
};

AutoShift.parameters = {
  docs: {
    description: {
      story:
        'Auto adjust Popup and arrow position when Tooltip is close to the edge of the screen. Will be out of screen when exceed limitation.',
    },
  },
};
