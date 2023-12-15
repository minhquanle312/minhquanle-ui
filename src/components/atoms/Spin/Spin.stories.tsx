// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// Components
import { Spin } from './Spin';
import { Space } from '../index';
import { Alert } from '../Alert';

export default {
  title: 'Atoms/Spin',
  component: Spin,
  argTypes: {
    delay: {
      name: 'delay',
      description: 'Specifies a delay in milliseconds for loading state (prevent flush)',
      table: {
        type: { summary: 'number (milliseconds)' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    indicator: {
      name: 'indicator',
      description: 'React node of the spinning indicator	',
      table: {
        type: { summary: 'ReactNode	' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    size: {
      name: 'size',
      description: 'The size of Spin, options: `small`, `default` and `large`	',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: ['small', 'large', 'default'],
      },
    },
    spinning: {
      name: 'spinning',
      defaultValue: true,
      description: 'Whether Spin is visible	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    tip: {
      name: 'tip',
      description: 'Customize description content when Spin has children',
      table: {
        type: { summary: 'ReactNode	' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    wrapperClassName: {
      name: 'wrapperClassName',
      description: 'The className of wrapper when Spin has children',
      table: {
        type: { summary: 'string	' },
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
        component:
          'A spinner for displaying loading state of a page or a section.' +
          '\n### When To Use' +
          '\n' +
          'When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users inquietude.' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Spin>;

// Default
const Template: ComponentStory<typeof Spin> = args => <Spin {...args} />;

export const Basic = Template.bind({});

// Examples
export const Size = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);

Size.parameters = {
  docs: {
    description: {
      story:
        'A small `Spin` is used for loading text, default sized `Spin` for loading a card-level block, and large `Spin` used for loading a page.',
    },
  },
};

export const InsideContainer = () => (
  <div className="example" style={{ background: '#ccc', padding: '10px 5px' }}>
    <Spin />
  </div>
);

InsideContainer.parameters = {
  docs: {
    description: {
      story: 'Spin in a container.',
    },
  },
};

export const EmbeddedMode = () => {
  const [loading, setLoading] = useState(false);

  const toggle = (checked: boolean) => {
    setLoading(checked);
  };

  return (
    <div>
      <Spin spinning={loading}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state:
        <Switch checked={loading} onChange={toggle} />
      </div>
    </div>
  );
};

EmbeddedMode.parameters = {
  docs: {
    description: {
      story: 'Embedding content into `Spin` will set it into loading state.',
    },
  },
};

export const CustomizedDescription = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Space
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px',
      }}
    >
      <Spin tip="Loading" size="small">
        <div className="content" />
      </Spin>
      <Spin tip="Loading">
        <div className="content" />
      </Spin>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>

    <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  </Space>
);

export const Delay = () => {
  const [loading, setLoading] = useState(false);

  const toggle = (checked: boolean) => {
    setLoading(checked);
  };
  const container = (
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  );

  return (
    <div>
      <Spin spinning={loading} delay={500}>
        {container}
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state:
        <Switch checked={loading} onChange={toggle} />
      </div>
    </div>
  );
};

Delay.parameters = {
  docs: {
    description: {
      story:
        'Specifies a delay for loading state. If `spinning `ends during delay, loading status wont appear.',
    },
  },
};

export const CustomSpinningIndicator = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return <Spin indicator={antIcon} />;
};
