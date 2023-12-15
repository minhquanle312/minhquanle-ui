// Libraries
import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DrawerProps, RadioChangeEvent, theme, Form, List, Avatar } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// Components
import { Drawer } from './Drawer';
import { Button, Radio, Space, Col, Row, Input, Divider, TextArea } from '../../atoms/index';
import { DatePicker, Select } from '..';

const { Option } = Select;

export default {
  title: 'Molecules/Drawer',
  component: Drawer,
  argTypes: {
    autoFocus: {
      name: 'autoFocus',
      defaultValue: true,
      description: 'Whether Drawer should get focused after open',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    afterOpenChange: {
      name: 'afterOpenChange',
      description: 'Callback after the animation ends when switching drawers',
      table: {
        type: { summary: 'function(open)' },
      },
      control: null,
    },
    bodyStyle: {
      name: 'bodyStyle',
      description: 'Style of the drawer content part',
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: null,
    },
    className: {
      name: 'className',
      description:
        'Config Drawer Panel className. Use `rootClassName` if want to config top dom style',
      table: {
        type: { summary: 'string' },
      },
      control: null,
    },
    closeIcon: {
      name: 'closeIcon',
      description:
        'Custom close icon. 5.7.0: close button will be hidden when setting to `null` or `false`',
      table: {
        type: { summary: 'boolean | ReactNode' },
        defaultValue: { summary: '<CloseOutlined />' },
      },
      control: null,
    },
    contentWrapperStyle: {
      name: 'contentWrapperStyle',
      description: 'Style of the drawer wrapper of content part',
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: null,
    },
    destroyOnClose: {
      name: 'destroyOnClose',
      defaultValue: false,
      description: 'Whether to unmount child components on closing drawer or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    extra: {
      name: 'extra',
      description: 'Extra actions area at corner	',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    footer: {
      name: 'footer   ',
      description: 'The footer for Drawer	',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    footerStyle: {
      name: 'footerStyle',
      description: 'Style of the drawer footer part',
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: null,
    },
    forceRender: {
      name: 'forceRender',
      defaultValue: false,
      description: 'Pre-render Drawer component forcibly	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    getContainer: {
      name: 'getContainer',
      description: 'mounted node and display window for Drawer',
      table: {
        type: { summary: 'HTMLElement | () => HTMLElement | Selectors | false' },
        defaultValue: { summary: 'body' },
      },
      control: null,
    },
    headerStyle: {
      name: 'headerStyle  ',
      description: 'Style of the drawer header part',
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: null,
    },
    height: {
      name: 'height  ',
      description: 'Placement is `top` or `bottom`, height of the Drawer dialog',
      table: {
        type: { summary: 'string | number' },
      },
      control: null,
    },
    keyboard: {
      name: 'keyboard ',
      defaultValue: true,
      description: 'Whether support press esc to close',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    mask: {
      name: 'mask ',
      defaultValue: true,
      description: 'Whether to show mask or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    maskClosable: {
      name: 'maskClosable ',
      defaultValue: true,
      description: 'Clicking on the mask (area outside the Drawer) to close the Drawer or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    maskStyle: {
      name: 'maskStyle ',
      description: 'Style for Drawers mask element',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '{}' },
      },
      control: null,
    },
    placement: {
      name: 'placement ',
      description: 'The placement of the Drawer',
      table: {
        type: { summary: 'top | right | bottom | left' },
        defaultValue: { summary: 'right' },
      },
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    push: {
      name: 'push ',
      description: 'Nested drawers push behavior',
      table: {
        type: { summary: 'boolean | { distance: string | number }' },
        defaultValue: { summary: '{ distance: 180 }' },
      },
      control: null,
    },
    rootStyle: {
      name: 'rootStyle',
      description: 'Style of wrapper element which contains mask compare to `style`',
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: null,
    },
    style: {
      name: 'style',
      description: 'Style of Drawer panel. Use `bodyStyle` if want to config body only',
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: null,
    },
    size: {
      name: 'size ',
      description: 'preset size of drawer, default `378px` and large `736px`',
      table: {
        type: { summary: 'default | large' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: ['default', 'large'],
      },
    },
    title: {
      name: 'title ',
      description: 'The title for Drawer',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    open: {
      name: 'open ',
      //   defaultValue: false,
      description: 'Whether the Drawer dialog is visible or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    width: {
      name: 'width ',
      description: 'Width of the Drawer dialog',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '378' },
      },
      control: null,
    },
    zIndex: {
      name: 'zIndex ',
      description: 'The `z-index` of the Drawer',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1000' },
      },
      control: null,
    },
    // onClose: {
    //   name: 'onClose',
    //   description:
    //     'Specify a callback that will be called when a user clicks mask, close button or Cancel button',
    //   table: {
    //     type: { summary: 'function(e)' },
    //   },
    //   control: null,
    // },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A panel which slides in from the edge of the screen.' +
          '\n### When To Use' +
          '\n' +
          'A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context.' +
          '\n' +
          '- Use a Form to create or edit a set of information.' +
          '\n' +
          '- Processing subtasks. When subtasks are too heavy for a Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy. ' +
          '\n' +
          '- When the same Form is needed in multiple places.' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = args => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open} {...args}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export const Default = Template.bind({});

export const CustomPlacement = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

CustomPlacement.parameters = {
  docs: {
    description: {
      story: 'The Drawer can appear from any edge of the screen.',
    },
  },
};

export const ExtraActions = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

ExtraActions.parameters = {
  docs: {
    description: {
      story:
        'Extra actions should be placed at corner of drawer in Ant Design, you can use `extra` prop for that.',
    },
  },
};

export const RenderInCurrentDom = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height: 200,
    padding: 48,
    overflow: 'hidden',
    textAlign: 'center',
    background: token.colorFillAlter,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={containerStyle}>
      Render in this
      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

RenderInCurrentDom.parameters = {
  docs: {
    description: {
      story: 'Render in current dom. custom container, check `getContainer`.',
    },
  },
};

export const SubmitFormInDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: 'Please enter url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: 'Please select an owner' }]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: 'Please choose the type' }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[{ required: true, message: 'Please choose the approver' }]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

SubmitFormInDrawer.parameters = {
  docs: {
    description: {
      story: 'Use a form in Drawer with a submit button.  ',
    },
  },
};

export const Multi_levelDrawer = () => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open drawer
      </Button>
      <Drawer title="Multi-level drawer" width={520} closable={false} onClose={onClose} open={open}>
        <Button type="primary" onClick={showChildrenDrawer}>
          Two-level drawer
        </Button>
        <Drawer
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </>
  );
};

Multi_levelDrawer.parameters = {
  docs: {
    description: {
      story: 'Open a new drawer on top of an existing drawer to handle multi branch tasks.  ',
    },
  },
};

interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

export const PreviewDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <List
        dataSource={[
          {
            id: 1,
            name: 'Lily',
          },
          {
            id: 2,
            name: 'Lily',
          },
        ]}
        bordered
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <a onClick={showDrawer} key={`a-${item.id}`}>
                View Profile
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={<a href="https://ant.design/index-cn">{item.name}</a>}
              description="Progresser XTech"
            />
          </List.Item>
        )}
      />
      <Drawer width={640} placement="right" closable={false} onClose={onClose} open={open}>
        <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
          User Profile
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Full Name" content="Lily" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Account" content="AntDesign@example.com" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="City" content="HangZhou" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Country" content="China🇨🇳" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Birthday" content="February 2,1900" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Website" content="-" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Message"
              content="Make things as simple as possible but no simpler."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Position" content="Programmer" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Responsibilities" content="Coding" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Department" content="XTech" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Skills"
              content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content="AntDesign@example.com" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Github"
              content={
                <a href="http://github.com/ant-design/ant-design/">
                  github.com/ant-design/ant-design/
                </a>
              }
            />
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

PreviewDrawer.parameters = {
  docs: {
    description: {
      story: 'Use Drawer to quickly preview details of an object, such as those in a list. ',
    },
  },
};

export const PresetSize = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps['size']>();

  const showDefaultDrawer = () => {
    setSize('default');
    setOpen(true);
  };

  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDefaultDrawer}>
          Open Default Size (378px)
        </Button>
        <Button type="primary" onClick={showLargeDrawer}>
          Open Large Size (736px)
        </Button>
      </Space>
      <Drawer
        title={`${size} Drawer`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

PresetSize.parameters = {
  docs: {
    description: {
      story:
        'The default width (or height) of Drawer is `378px`, and there is a preset large size `736px`. ',
    },
  },
};
