// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { UserOutlined, AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
// Components
import { Segmented } from './Segmented';
import { Space } from '../Space';
import { Button } from '../Button';
import { Avatar } from 'antd';

export default {
  title: 'Atoms/Segmented',
  component: Segmented,
  argTypes: {
    block: {
      name: 'block',
      description: 'Option to fit width to its parents width',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultValue: {
      name: 'defaultValue',
      description: 'Default selected value',
      table: {
        type: { summary: 'string | number' },
      },
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'disabled ',
      description: 'Disable all segments	',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      name: 'onChange ',
      description: 'The callback function that is triggered when the state changes	',
      table: {
        type: { summary: 'function(value: string | number)' },
      },
      control: null,
    },
    options: {
      name: 'options ',
      description: 'Set children optional',
      table: {
        type: {
          summary:
            'string[] | number[] | Array<{ label: ReactNode value: string icon? ReactNode disabled?: boolean className?: string }>',
        },
        defaultValue: {
          summary: '[]',
        },
      },
      control: false,
    },
    size: {
      title: 'size',
      description: 'The size of the Segmented.	',
      table: {
        type: { summary: 'large | middle | small' },
        defaultValue: { summary: 'middle' },
      },
      control: {
        type: 'select',
        options: ['large', 'middle', 'small'],
      },
    },
    value: {
      name: 'value',
      description: 'Currently selected value',
      table: {
        type: { summary: 'string | number' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Segmented Controls. This component is available since `antd@4.20.0`' +
          '\n### When To Use' +
          '\n' +
          '- When displaying multiple options and user can select a single option;' +
          '\n' +
          '- When switching the selected option, the content of the associated area changes.',
      },
    },
  },
} as ComponentMeta<typeof Segmented>;

const Template: ComponentStory<typeof Segmented> = args => (
  <Segmented {...args} options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
);

export const Default = Template.bind({});

// Examples
export const Basic = () => (
  <Space direction="vertical">
    <Segmented options={['Map', 'Transit', 'Satellite']} disabled />
    <Segmented
      options={[
        'Daily',
        { label: 'Weekly', value: 'Weekly', disabled: true },
        'Monthly',
        { label: 'Quarterly', value: 'Quarterly', disabled: true },
        'Yearly',
      ]}
    />
  </Space>
);

Basic.parameters = {
  docs: {
    description: {
      story: 'Disabled Segmented.',
    },
  },
};

export const BlockSegmented = () => (
  <Segmented block options={[123, 456, 'longtext-longtext-longtext-longtext']} />
);

BlockSegmented.parameters = {
  docs: {
    description: {
      story: '`block` property will make the `Segmented` fit to its parent width.',
    },
  },
};

export const ControlledMode = () => {
  const [value, setValue] = useState<string | number>('Map');

  return <Segmented options={['Map', 'Transit', 'Satellite']} value={value} onChange={setValue} />;
};

ControlledMode.parameters = {
  docs: {
    description: {
      story: 'Controlled Segmented.',
    },
  },
};

export const Dynamic = () => {
  const [options, setOptions] = useState(['Daily', 'Weekly', 'Monthly']);
  const [moreLoaded, setMoreLoaded] = useState(false);

  const handleLoadOptions = () => {
    setOptions(prev => [...prev, 'Quarterly', 'Yearly']);
    setMoreLoaded(true);
  };

  return (
    <Space direction="vertical">
      <Segmented options={options} />
      <Button type="primary" disabled={moreLoaded} onClick={handleLoadOptions}>
        Load more options
      </Button>
    </Space>
  );
};

Dynamic.parameters = {
  docs: {
    description: {
      story: 'Load `options` dynamically.',
    },
  },
};

export const CustomRender = () => (
  <Space direction="vertical">
    <Segmented
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              <div>User 1</div>
            </div>
          ),
          value: 'user1',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              <div>User 2</div>
            </div>
          ),
          value: 'user2',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              <div>User 3</div>
            </div>
          ),
          value: 'user3',
        },
      ]}
    />
    <Segmented
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Spring</div>
              <div>Jan-Mar</div>
            </div>
          ),
          value: 'spring',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Summer</div>
              <div>Apr-Jun</div>
            </div>
          ),
          value: 'summer',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Autumn</div>
              <div>Jul-Sept</div>
            </div>
          ),
          value: 'autumn',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Winter</div>
              <div>Oct-Dec</div>
            </div>
          ),
          value: 'winter',
        },
      ]}
    />
  </Space>
);

CustomRender.parameters = {
  docs: {
    description: {
      story: 'Custom each Segmented Item by ReactNode.',
    },
  },
};

export const WithIcon = () => (
  <Segmented
    options={[
      {
        label: 'List',
        value: 'List',
        icon: <BarsOutlined />,
      },
      {
        label: 'Kanban',
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
);

WithIcon.parameters = {
  docs: {
    description: {
      story: 'Set `icon` for Segmented Item.',
    },
  },
};

export const WithIconOnly = () => (
  <Segmented
    options={[
      {
        value: 'List',
        icon: <BarsOutlined />,
      },
      {
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
);

WithIconOnly.parameters = {
  docs: {
    description: {
      story: 'Set icon without `label` for `Segmented` Item.',
    },
  },
};

export const SizeOfSegmented = () => (
  <Space direction="vertical">
    <Segmented size="large" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented size="small" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
  </Space>
);

SizeOfSegmented.parameters = {
  docs: {
    description: {
      story:
        'There are three sizes of an Segmented: `large` (40px), `default` (32px) and `small` (24px).',
    },
  },
};
