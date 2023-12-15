// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FrownOutlined, MehOutlined, SmileOutlined, HeartOutlined } from '@ant-design/icons';

// Components
import { Rate } from './Rate';

export default {
  title: 'Atoms/Rate',
  component: Rate,
  argTypes: {
    allowClear: {
      name: 'allowClear',
      defaultValue: true,
      description: 'Whether to allow clear when click again',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    allowHalf: {
      name: 'allowHalf',
      defaultValue: false,
      description: 'Whether to allow semi selection',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    autoFocus: {
      name: 'allowHalf',
      defaultValue: false,
      description: 'If get focus when component mounted   ',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    character: {
      name: 'character',
      description: 'The custom character of rate ',
      table: {
        type: { summary: 'ReactNode | (RateProps) => ReactNode' },
        defaultValue: { summary: '<StarFilled />' },
      },
      control: null,
    },
    className: {
      name: 'className',
      defaultValue: false,
      description: 'The custom class name of rate	  ',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    count: {
      name: 'count',
      description: 'Star count	',
      defaultValue: 5,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
      control: {
        type: 'number',
      },
    },
    defaultValue: {
      name: 'defaultValue',
      description: 'The default value	',
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: {
        type: 'number',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'If read only, unable to interact',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    style: {
      name: 'style',
      description: 'The custom style object of rate',
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: null,
    },
    tooltips: {
      name: 'tooltips',
      description: 'Customize tooltip by each character',
      table: {
        type: { summary: 'string[]' },
      },
      control: null,
    },
    value: {
      name: 'value',
      description: 'The current value		',
      table: {
        type: { summary: 'number' },
      },
      control: null,
    },
    onBlur: {
      name: 'onBlur',
      description: 'Callback when component lose focus',
      table: {
        type: { summary: 'function()' },
      },
      control: null,
    },
    onChange: {
      name: 'onChange',
      description: 'Callback when select value',
      table: {
        type: { summary: 'function(value: number)' },
      },
      control: null,
    },
    onFocus: {
      name: 'onFocus',
      description: 'Callback when component get focus',
      table: {
        type: { summary: 'function()	' },
      },
      control: null,
    },
    onHoverChange: {
      name: 'onHoverChange',
      description: 'Callback when hover item',
      table: {
        type: { summary: 'function(value: number)' },
      },
      control: null,
    },
    onKeyDown: {
      name: 'onKeyDown',
      description: 'Callback when keydown on component',
      table: {
        type: { summary: 'function(event)' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Rate component.' +
          '\n###When To Use' +
          '\n' +
          '- Show evaluation.' +
          '\n' +
          '- A quick rating operation on something.',
      },
    },
  },
} as ComponentMeta<typeof Rate>;

// Default
const Template: ComponentStory<typeof Rate> = args => <Rate {...args} />;

export const Default = Template.bind({});

// Examples

export const HaftStar = () => <Rate allowHalf defaultValue={2.5} />;

HaftStar.parameters = {
  docs: {
    description: {
      story: 'Support select half star.',
    },
  },
};

export const ShowCopywriting = () => {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [value, setValue] = useState(3);

  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
};

ShowCopywriting.parameters = {
  docs: {
    description: {
      story: 'Add copywriting in rate components.',
    },
  },
};

export const ReadOnly = () => <Rate disabled defaultValue={2} />;

ReadOnly.parameters = {
  docs: {
    description: {
      story: 'Read only, cant use mouse to interact.',
    },
  },
};

export const CustomizeCharacter = () => {
  const customIcons: Record<number, React.ReactNode> = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  return (
    <>
      <Rate defaultValue={2} character={(props: any) => props.index + 1} />
      <br />
      <Rate defaultValue={3} character={(props: any) => customIcons[props.index + 1]} />
    </>
  );
};

CustomizeCharacter.parameters = {
  docs: {
    description: {
      story: 'Can customize each character using `(RateProps) => ReactNode`.',
    },
  },
};

export const OtherCharacter = () => (
  <>
    <Rate character={<HeartOutlined />} allowHalf />
    <br />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </>
);

OtherCharacter.parameters = {
  docs: {
    description: {
      story:
        'Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.',
    },
  },
};
