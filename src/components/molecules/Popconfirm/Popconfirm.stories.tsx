// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuestionCircleOutlined } from '@ant-design/icons';

// Components
import { Popconfirm } from './Popconfirm';
import { Button } from '../../atoms';
import { Switch, message } from 'antd';

export default {
  title: 'Molecules/Popconfirm',
  component: Popconfirm,
  argTypes: {
    cancelButtonProps: {
      name: 'cancelButtonProps',
      description: 'The cancel button props',
      table: {
        type: { summary: 'ButtonProps' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    cancelText: {
      name: 'cancelText',
      description: 'The text of the Cancel button	',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' },
      },
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'disabled',
      description: 'Whether show popconfirm when click its childrenNode',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    icon: {
      name: 'icon   ',
      description: 'Customize icon of confirmation',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '<ExclamationCircle />' },
      },
      control: null,
    },
    okButtonProps: {
      name: 'okButtonProps',
      description: 'The ok button props	',
      table: {
        type: { summary: 'ButtonProps' },
      },
      control: null,
    },
    okText: {
      name: 'okText',
      defaultValue: 'OK',
      description: 'The text of the Confirm button',
      table: {
        type: { summary: 'string' },
        defaultValue: 'OK',
      },
      control: {
        type: 'text',
      },
    },
    okType: {
      name: 'okType',
      description: 'Button `type` of the Confirm button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      control: null,
    },
    showCancel: {
      name: 'showCancel',
      description: 'Show cancel button',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    title: {
      name: 'title',
      description: 'The title of the confirmation box',
      table: {
        type: { summary: 'ReactNode | () => ReactNode' },
      },
      control: null,
    },
    description: {
      name: 'description',
      description: 'The description of the confirmation box title',
      table: {
        type: { summary: 'ReactNode | () => ReactNode' },
      },
      control: null,
    },
    onCancel: {
      name: 'onCancel',
      description: 'A callback of cancel',
      table: {
        type: { summary: 'function(e)' },
      },
      control: null,
    },
    onConfirm: {
      name: 'onConfirm',
      description: 'A callback of confirmation',
      table: {
        type: { summary: 'function(e)' },
      },
      control: null,
    },
    onPopupClick: {
      name: 'onPopupClick',
      description: 'A callback of popup click',
      table: {
        type: { summary: 'function(e)' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A simple and compact confirmation dialog of an action.' +
          '\n###When To Use' +
          '\n' +
          '- A simple and compact dialog used for asking for user confirmation.' +
          '\n' +
          '- The difference with the `confirm` modal dialog is that its more lightweight than the static popped full-screen confirm modal.',
      },
    },
  },
} as ComponentMeta<typeof Popconfirm>;

// Default
const Template: ComponentStory<typeof Popconfirm> = args => (
  <Popconfirm {...args}>
    <Button danger>Delete</Button>
  </Popconfirm>
);

export const Default = Template.bind({});

// Examples
export const Basic = () => {
  const confirm = (e: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
    message.success('Click on Yes');
  };

  const cancel = (e: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
    message.error('Click on No');
  };

  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button danger>Delete</Button>
    </Popconfirm>
  );
};

Basic.parameters = {
  docs: {
    description: {
      story: 'The basic example supports the title and description props of confirmation.',
    },
  },
};

export const LocaleText = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);

LocaleText.parameters = {
  docs: {
    description: {
      story: 'Set `okText` and `cancelText` props to customize the button labels.',
    },
  },
};

export const ConditionalTrigger = () => {
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(true);

  const changeCondition = (checked: boolean) => {
    setCondition(checked);
  };

  const confirm = () => {
    setOpen(false);
    message.success('Next step.');
  };

  const cancel = () => {
    setOpen(false);
    message.error('Click on cancel.');
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    if (condition) {
      confirm(); // next step
    } else {
      setOpen(newOpen);
    }
  };

  return (
    <div>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        open={open}
        onOpenChange={handleOpenChange}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Delete a task</Button>
      </Popconfirm>
      <br />
      <br />
      Whether directly execute:
      <Switch defaultChecked onChange={changeCondition} />
    </div>
  );
};

ConditionalTrigger.parameters = {
  docs: {
    description: {
      story: 'Make it pop up under some conditions.',
    },
  },
};

export const Placement = () => {
  const text = 'Are you sure to delete this task?';
  const description = 'Delete the task';

  const confirm = () => {
    message.info('Clicked on Yes.');
  };
  return (
    <>
      <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
        <Popconfirm
          placement="topLeft"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement="top"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>Top</Button>
        </Popconfirm>
        <Popconfirm
          placement="topRight"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>TR</Button>
        </Popconfirm>
      </div>
      <div style={{ width: 70, float: 'left' }}>
        <Popconfirm
          placement="leftTop"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>LT</Button>
        </Popconfirm>
        <Popconfirm
          placement="left"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>Left</Button>
        </Popconfirm>
        <Popconfirm
          placement="leftBottom"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>LB</Button>
        </Popconfirm>
      </div>
      <div style={{ width: 70, marginLeft: 304 }}>
        <Popconfirm
          placement="rightTop"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>RT</Button>
        </Popconfirm>
        <Popconfirm
          placement="right"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>Right</Button>
        </Popconfirm>
        <Popconfirm
          placement="rightBottom"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>RB</Button>
        </Popconfirm>
      </div>
      <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popconfirm
          placement="bottomLeft"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>BL</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottom"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>Bottom</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottomRight"
          title={text}
          description={description}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>BR</Button>
        </Popconfirm>
      </div>
    </>
  );
};

Placement.parameters = {
  docs: {
    description: {
      story:
        'There are 12 `placement` options available. Use `arrow: { pointAtCenter: true }` if you want the arrow to point at the center of target.',
    },
  },
};

export const AsynchronouslyClose = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with async logic"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      <Button type="primary" onClick={showPopconfirm}>
        Open Popconfirm with async logic
      </Button>
    </Popconfirm>
  );
};

AsynchronouslyClose.parameters = {
  docs: {
    description: {
      story:
        'Asynchronously close a popconfirm when a the OK button is pressed. For example, you can use this pattern when you submit a form',
    },
  },
};

export const CustomizeIcon = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);

CustomizeIcon.parameters = {
  docs: {
    description: {
      story: 'Set `icon` props to customize the icon.',
    },
  },
};

export const AsynchronouslyCloseOnPromise = () => {
  const confirm = () =>
    new Promise(resolve => {
      setTimeout(() => resolve(null), 3000);
    });

  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with Promise"
      onConfirm={confirm}
      onOpenChange={() => console.log('open change')}
    >
      <Button type="primary">Open Popconfirm with Promise</Button>
    </Popconfirm>
  );
};

AsynchronouslyCloseOnPromise.parameters = {
  docs: {
    description: {
      story:
        'Asynchronously close a popconfirm when the OK button is pressed. For example, you can use this pattern when you submit a form.',
    },
  },
};
