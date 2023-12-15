/* eslint-disable prettier/prettier */
// Libraries
import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps, message, theme } from 'antd';

// Components
import { Dropdown } from './Dropdown';
import { Space, Button, Divider, Tag, Tooltip, Typography } from '../../atoms';
import { Table } from '../../organism';

// Constants
import { TABLE_API_COLUMNS } from 'src/constants';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  argTypes: {
    arrow: {
      name: 'arrow',
      defaultValue: false,
      description: 'Whether the dropdown arrow should be visible',
      table: {
        type: { summary: 'boolean | { pointAtCenter: boolean }' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    autoAdjustOverflow: {
      name: 'autoAdjustOverflow',
      defaultValue: true,
      description: 'Whether to adjust dropdown placement automatically when dropdown is off screen',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    autoFocus: {
      name: 'autoFocus',
      defaultValue: false,
      description: 'Focus element in `overlay` when opened',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      defaultValue: undefined,
      description: 'Whether the dropdown menu is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '-' },
      },
      control: 'boolean',
    },
    destroyPopupOnHide: {
      name: 'destroyPopupOnHide',
      defaultValue: false,
      description: 'Whether destroy dropdown when hidden',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    dropdownRender: {
      name: 'dropdownRender',
      defaultValue: undefined,
      description: 'Customize dropdown content',
      table: {
        type: { summary: '(menus: ReactNode) => ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    getPopupContainer: {
      name: 'getPopupContainer',
      defaultValue: () => document.body,
      description:
        'To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition. [Example on CodePen](https://codepen.io/afc163/pen/zEjNOy?editors=0010)',
      table: {
        type: { summary: '(triggerNode: HTMLElement) => HTMLElement' },
        defaultValue: { summary: '() => document.body' },
      },
      control: null,
    },
    menu: {
      name: 'menu',
      defaultValue: undefined,
      description: 'The menu props',
      table: {
        type: { summary: '[MenuProps](https://ant.design/components/menu#api)' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    overlayClassName: {
      name: 'overlayClassName',
      defaultValue: undefined,
      description: 'The class name of the dropdown root element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: 'text',
    },
    overlayStyle: {
      name: 'overlayStyle',
      defaultValue: undefined,
      description: 'The style of the dropdown root element',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    placement: {
      name: 'placement',
      defaultValue: 'bottomLeft',
      description:
        'Placement of popup menu: `bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight`',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottomLeft' },
      },
      control: 'select',
      options: ['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight'],
    },
    trigger: {
      name: 'trigger',
      defaultValue: ['hover'],
      description: `The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens`,
      table: {
        type: { summary: 'Array<click|hover|contextMenu>' },
        defaultValue: { summary: '[hover]' },
      },
      control: null,
    },
    open: {
      name: 'open',
      defaultValue: undefined,
      description:
        'Whether the dropdown menu is currently open. Use visible under 4.23.0 ([why?](https://ant.design/docs/react/faq/#why-open))',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '-' },
      },
      control: 'boolean',
    },
    onOpenChange: {
      name: 'onOpenChange',
      defaultValue: undefined,
      description:
        'Called when the open state is changed. Not trigger when hidden by click item. Use `onVisibleChange` under 4.23.0 ([why?](https://ant.design/docs/react/faq#why-open))',
      table: {
        type: { summary: '(open: boolean) => void' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown list. \n' +
          '\nWhen there are more than a few options to choose from, you can wrap them in a `Dropdown`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.',
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

// Default
const Template: ComponentStory<typeof Dropdown> = args => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '1st menu item',
    },
    {
      key: '2',
      label: '2nd menu item',
    },
    {
      key: '3',
      label: '3rd menu item',
    },
  ];
  return (
    <Dropdown {...args} menu={{ items }}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: 'Dropdown',
};

// // Examples
export const Basic: ComponentStory<any> = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

Basic.parameters = {
  docs: {
    description: {
      story: 'The most basic dropdown menu.',
    },
  },
};

export const Arrow: ComponentStory<any> = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <Space direction="vertical">
      <Space>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Button>bottomRight</Button>
        </Dropdown>
      </Space>
      <Space>
        <Dropdown menu={{ items }} placement="topLeft" arrow>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="top" arrow>
          <Button>top</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="topRight" arrow>
          <Button>topRight</Button>
        </Dropdown>
      </Space>
    </Space>
  );
};

Arrow.parameters = {
  docs: {
    description: {
      story: 'You could display an arrow.',
    },
  },
};

export const ArrowPointingCenter: ComponentStory<any> = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <Space direction="vertical">
      <Space>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
          <Button>bottomRight</Button>
        </Dropdown>
      </Space>
      <Space>
        <Dropdown menu={{ items }} placement="topLeft" arrow={{ pointAtCenter: true }}>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="top" arrow={{ pointAtCenter: true }}>
          <Button>top</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="topRight" arrow={{ pointAtCenter: true }}>
          <Button>topRight</Button>
        </Dropdown>
      </Space>
    </Space>
  );
};

ArrowPointingCenter.parameters = {
  docs: {
    description: {
      story:
        'By specifying `arrow` prop with `{ pointAtCenter: true }`, the arrow will point to the center of the target element.',
    },
  },
};

export const ClickEvent: ComponentStory<any> = () => {
  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  return (
    <Dropdown menu={{ items, onClick }}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          Hover me, Click menu item
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

ClickEvent.parameters = {
  docs: {
    description: {
      story: `An event will be triggered when you click menu items, in which you can make different operations according to item's key.`,
    },
  },
};

export const CustomDropdown: ComponentStory<any> = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: 'none',
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      dropdownRender={menu => (
        <div style={contentStyle}>
          {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
          <Divider style={{ margin: 0 }} />
          <Space style={{ padding: 8 }}>
            <Button type="primary">Click me!</Button>
          </Space>
        </div>
      )}
    >
      <a onClick={e => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

CustomDropdown.parameters = {
  docs: {
    description: {
      story:
        "Customize the dropdown menu via `dropdownRender`. If you don't need the Menu content, use the Popover component directly.",
    },
  },
};

export const TheWayOfHidingMenu: ComponentStory<any> = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick: MenuProps['onClick'] = e => {
    if (e.key === '3') {
      setOpen(false);
    }
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Clicking me will not close the menu.',
      key: '1',
    },
    {
      label: 'Clicking me will not close the menu also.',
      key: '2',
    },
    {
      label: 'Clicking me will close the menu.',
      key: '3',
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={e => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

TheWayOfHidingMenu.parameters = {
  docs: {
    description: {
      story:
        'The default is to close the menu when you click on menu items, this feature can be turned off.',
    },
  },
};

export const Loading: ComponentStory<any> = () => {
  const items: MenuProps['items'] = [
    {
      label: 'Submit and continue',
      key: '1',
    },
  ];

  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings(state => {
      const newLoadings = [...state];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings(state => {
        const newLoadings = [...state];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <Space direction="vertical">
      <Dropdown.Button type="primary" loading menu={{ items }}>
        Submit
      </Dropdown.Button>
      <Dropdown.Button type="primary" size="small" loading menu={{ items }}>
        Submit
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        loading={loadings[0]}
        menu={{ items }}
        onClick={() => enterLoading(0)}
      >
        Submit
      </Dropdown.Button>
      <Dropdown.Button
        icon={<DownOutlined />}
        loading={loadings[1]}
        menu={{ items }}
        onClick={() => enterLoading(1)}
      >
        Submit
      </Dropdown.Button>
    </Space>
  );
};

Loading.parameters = {
  docs: {
    description: {
      story:
        'A `loading` indicator can be added to a button by setting the loading property on the `Dropdown.Button`.',
    },
  },
};

export const ButtonWithDropdownMenu: ComponentStory<any> = () => {
  const handleButtonClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
  };

  const handleMenuClick: MenuProps['onClick'] = _e => {
    message.info('Click on menu item.');
  };

  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Space wrap>
      <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button menu={menuProps} onClick={handleButtonClick} disabled>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button
        menu={menuProps}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip title="tooltip" key="leftButton">
            {leftButton}
          </Tooltip>,
          React.cloneElement(rightButton as React.ReactElement<any, string>, { loading: true }),
        ]}
      >
        With Tooltip
      </Dropdown.Button>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            Button
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Dropdown.Button menu={menuProps} onClick={handleButtonClick} danger>
        Danger
      </Dropdown.Button>
    </Space>
  );
};

ButtonWithDropdownMenu.parameters = {
  docs: {
    description: {
      story:
        'A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.',
    },
  },
};

export const CascadingMenu: ComponentStory<any> = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      type: 'group',
      label: 'Group title',
      children: [
        {
          key: '1-1',
          label: '1st menu item',
        },
        {
          key: '1-2',
          label: '2nd menu item',
        },
      ],
    },
    {
      key: '2',
      label: 'sub menu',
      children: [
        {
          key: '2-1',
          label: '3rd menu item',
        },
        {
          key: '2-2',
          label: '4th menu item',
        },
      ],
    },
    {
      key: '3',
      label: 'disabled sub menu',
      disabled: true,
      children: [
        {
          key: '3-1',
          label: '5d menu item',
        },
        {
          key: '3-2',
          label: '6th menu item',
        },
      ],
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          Cascading menu
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

CascadingMenu.parameters = {
  docs: {
    description: {
      story: 'The menu has multiple levels.',
    },
  },
};

export const ContextMenu: ComponentStory<any> = () => {
  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  const {
    token: { colorBgLayout, colorTextTertiary },
  } = theme.useToken();

  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <div
        style={{
          color: colorTextTertiary,
          background: colorBgLayout,
          height: 200,
          textAlign: 'center',
          lineHeight: '200px',
        }}
      >
        Right Click on here
      </div>
    </Dropdown>
  );
};

ContextMenu.parameters = {
  docs: {
    description: {
      story: 'The default trigger mode is `hover`, you can change it to `contextMenu`.',
    },
  },
};

export const SelectableMenu: ComponentStory<any> = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Item 1',
    },
    {
      key: '2',
      label: 'Item 2',
    },
    {
      key: '3',
      label: 'Item 3',
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ['3'],
      }}
    >
      <Typography.Link>
        <Space>
          Selectable
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

SelectableMenu.parameters = {
  docs: {
    description: {
      story: 'Configure the `selectable` property in `menu` to enable selectable ability.',
    },
  },
};

export const DropdownButtonAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'buttonsRender',
      description: `Custom buttons inside Dropdown.Button`,
      type: '(buttons: ReactNode[]) => ReactNode[]',
      default: '-',
    },
    {
      key: '2',
      property: 'loading',
      description: 'Set the loading status of button',
      type: 'boolean | { delay: number }',
      default: 'false',
    },
    {
      key: '3',
      property: 'danger',
      description: 'Set the danger status of button',
      type: 'boolean',
      default: '-',
    },
    {
      key: '4',
      property: 'icon',
      description: 'Icon (appears on the right)',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '5',
      property: 'size',
      description: (
        <>
          Size of the button, the same as{' '}
          <a href="https://ant.design/components/button#api">Button</a>
        </>
      ),
      type: 'string',
      default: <Tag>default</Tag>,
    },
    {
      key: '6',
      property: 'type',
      description: (
        <>
          Type of the button, the same as{' '}
          <a href="https://ant.design/components/button#api">Button</a>
        </>
      ),
      type: 'string',
      default: <Tag>default</Tag>,
    },
    {
      key: '7',
      property: 'onClick',
      description: (
        <>
          The same as &nbsp;<a href="https://ant.design/components/button#api">Button</a>:&nbsp;
          called when you click the button on the left
        </>
      ),
      type: '(event) => void',
      default: '-',
    },
  ];

  return <Table dataSource={dataSource} columns={TABLE_API_COLUMNS} pagination={false} />;
};

DropdownButtonAPI.parameters = {
  docs: {
    description: {
      story: 'Same props from Dropdown. And includes additional props:',
    },
    source: {
      code: null,
    },
  },
};
