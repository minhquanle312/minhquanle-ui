/* eslint-disable no-console */
// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuProps } from 'antd';

// Components
import { Button } from './Button';
import { Space, Radio, Divider, Tooltip, Dropdown } from '../../index';

// Types
import { SizeType } from 'antd/es/config-provider/SizeContext';
import Icon from '@antscorp/icons';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    block: {
      name: 'block',
      defaultValue: false,
      description: 'Option to fit button width to its parent width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    danger: {
      name: 'danger',
      defaultValue: false,
      description: 'Set the danger status of button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'Disabled state of button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    ghost: {
      name: 'ghost',
      defaultValue: false,
      description: 'Make background transparent and invert text and border colors',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    href: {
      name: 'href',
      defaultValue: undefined,
      description: 'Redirect url of link button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    htmlType: {
      name: 'htmlType',
      defaultValue: 'button',
      description: 'Set the original html `type` of `button`',
      table: {
        type: { summary: 'button | reset | submit' },
        defaultValue: { summary: 'button' },
      },
      control: {
        type: 'select',
        labels: {
          button: 'Button',
          reset: 'Reset',
          submit: 'Submit',
        },
      },
      options: ['button', 'reset', 'submit'],
    },
    icon: {
      name: 'icon',
      defaultValue: undefined,
      description: 'Set the icon component of button',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    loading: {
      name: 'loading',
      defaultValue: false,
      description: 'Set the loading status of button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    shape: {
      name: 'shape',
      defaultValue: 'default',
      description: 'Can be set button shape',
      table: {
        type: { summary: 'default | circle | round' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        labels: {
          default: 'Default',
          circle: 'Circle',
          round: 'Round',
        },
      },
      options: ['default', 'circle', 'round'],
    },
    size: {
      name: 'size',
      defaultValue: 'middle',
      description: 'Set the size of button',
      table: {
        type: { summary: 'large | middle | small' },
        defaultValue: { summary: 'middle' },
      },
      control: {
        type: 'select',
        labels: {
          large: 'Large',
          middle: 'Middle',
          small: 'Small',
        },
      },
      options: ['large', 'middle', 'small'],
    },
    target: {
      name: 'target',
      defaultValue: undefined,
      description: 'Same as target attribute of a, works when href is specified',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    type: {
      name: 'type',
      defaultValue: 'default',
      description: 'Can be set to `primary` `ghost` `dashed` `link` `text` `default`',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          ghost: 'Ghost',
          dashed: 'Dashed',
          link: 'Link',
          text: 'Text',
          default: 'Default',
        },
      },
      options: ['primary', 'ghost', 'dashed', 'link', 'text', 'default'],
    },
    onClick: {
      name: 'onClick',
      defaultValue: undefined,
      description: 'Set the handler to handle click event',
      table: {
        type: { summary: '(event: MouseEvent) => void' },
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
        component: 'To trigger an operation.',
      },
    },
  },
} as ComponentMeta<typeof Button>;

// Variables
const exampleIcon = <Icon type="icon-ants-search-2" />;
const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];

// Default
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};

// Examples
export const Type: ComponentStory<any> = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);

Type.parameters = {
  docs: {
    description: {
      story:
        'There are `primary` button, `default` button, `dashed` button, `text` button and `link` button in Antsomi UI.',
    },
  },
};

export const Size: ComponentStory<any> = () => {
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

  return (
    <>
      <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Space direction="vertical">
        <Space wrap>
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
        </Space>
        <Button type="link" size={size}>
          Link
        </Button>
        <Space wrap>
          <Button type="primary" icon={exampleIcon} size={size} />
          <Button type="primary" shape="circle" icon={exampleIcon} size={size} />
          <Button type="primary" shape="round" icon={exampleIcon} size={size} />
          <Button type="primary" shape="round" icon={exampleIcon} size={size}>
            Download
          </Button>
          <Button type="primary" icon={exampleIcon} size={size}>
            Download
          </Button>
        </Space>
      </Space>
    </>
  );
};

Size.parameters = {
  docs: {
    description: {
      story:
        'Antsomi UI supports a default button size as well as a large and small size. If a large or small button is desired, set the size property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.',
    },
  },
};

export const Loading: ComponentStory<any> = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings(prevLoadings => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Space direction="vertical">
      <Space wrap>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={exampleIcon} loading />
      </Space>

      <Space wrap>
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={exampleIcon}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={exampleIcon}
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
        />
      </Space>
    </Space>
  );
};

Loading.parameters = {
  docs: {
    description: {
      story:
        'A loading indicator can be added to a button by setting the `loading` property on the `Button`.',
    },
  },
};

export const GhostButton: ComponentStory<any> = () => (
  <Space className="site-button-ghost-wrapper" wrap>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="primary" danger ghost>
      Danger
    </Button>
  </Space>
);

GhostButton.parameters = {
  docs: {
    description: {
      story:
        "ghost property will make button's background transparent, it is commonly used in colored background.",
    },
  },
};

export const BlockButton: ComponentStory<any> = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button disabled block>
      disabled
    </Button>
    <Button type="text" block>
      text
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </Space>
);

BlockButton.parameters = {
  docs: {
    description: {
      story: '`block` property will make the button fit to its parent width.',
    },
  },
};

export const IconButton: ComponentStory<any> = () => (
  <Space direction="vertical">
    <Space wrap>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={exampleIcon} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={exampleIcon}>
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={exampleIcon} />
      </Tooltip>
      <Button icon={exampleIcon}>Search</Button>
    </Space>
    <Space wrap>
      <Tooltip title="search">
        <Button shape="circle" icon={exampleIcon} />
      </Tooltip>
      <Button icon={exampleIcon}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={exampleIcon} />
      </Tooltip>
      <Button type="dashed" icon={exampleIcon}>
        Search
      </Button>
      <Button icon={exampleIcon} href="https://www.google.com" />
    </Space>
  </Space>
);

IconButton.parameters = {
  docs: {
    description: {
      story:
        '`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`. If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.',
    },
  },
};

export const Disabled: ComponentStory<any> = () => (
  <Space direction="vertical">
    <Space>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Space>
    <Space>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </Space>
    <Space>
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="primary" href="https://ant.design/index-cn">
        Href Primary
      </Button>
      <Button type="primary" href="https://ant.design/index-cn" disabled>
        Href Primary(disabled)
      </Button>
    </Space>
    <Space>
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
    </Space>
    <Space>
      <Button danger type="text">
        Danger Text
      </Button>
      <Button danger type="text" disabled>
        Danger Text(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="link" danger>
        Danger Link
      </Button>
      <Button type="link" danger disabled>
        Danger Link(disabled)
      </Button>
    </Space>
    <Space className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </Space>
  </Space>
);

Disabled.parameters = {
  docs: {
    description: {
      story: 'To mark a button as disabled, add the disabled property to the Button.',
    },
  },
};

export const MultipleButtons: ComponentStory<any> = () => {
  const onMenuClick: MenuProps['onClick'] = e => {
    console.log('click', e);
  };

  return (
    <Space direction="vertical">
      <Button type="primary">primary</Button>
      <Button>secondary</Button>
      <Dropdown.Button menu={{ items, onClick: onMenuClick }}>Actions</Dropdown.Button>
    </Space>
  );
};

MultipleButtons.parameters = {
  docs: {
    description: {
      story: 'To mark a button as disabled, add the disabled property to the Button.',
    },
  },
};

export const DangerButtons: ComponentStory<any> = () => (
  <Space wrap>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </Space>
);

DangerButtons.parameters = {
  docs: {
    description: {
      story: 'To mark a button as disabled, add the disabled property to the Button.',
    },
  },
};
