/* eslint-disable prettier/prettier */
// Libraries
import React, { useState, createContext } from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  CloseOutlined,
  ExclamationCircleOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons'

// Components
import { Modal } from './Modal'
import { Space, Button, Tag } from '../../atoms'
import { Table } from '../../organism'
import { TableApiTypeTag } from 'minhquanle-ui/es/stories/components'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/es/constants'

export default {
  title: 'Molecules/Modal',
  component: Modal,
  argTypes: {
    afterClose: {
      name: 'afterClose',
      defaultValue: undefined,
      description:
        'Specify a function that will be called when modal is closed completely',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    bodyStyle: {
      name: 'bodyStyle',
      defaultValue: undefined,
      description:
        'Body style for modal body element. Such as height, padding etc',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    cancelButtonProps: {
      name: 'cancelButtonProps',
      defaultValue: undefined,
      description: 'The cancel button props',
      table: {
        type: { summary: 'ButtonProps' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    cancelText: {
      name: 'cancelText',
      defaultValue: 'Cancel',
      description: 'Text of the Cancel button',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Cancel' },
      },
      control: null,
    },
    centered: {
      name: 'centered',
      defaultValue: false,
      description: 'Centered Modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    closable: {
      name: 'closable',
      defaultValue: true,
      description:
        'Whether a close (x) button is visible on top right of the modal dialog or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    closeIcon: {
      name: 'closeIcon',
      defaultValue: <CloseOutlined />,
      description: 'Custom close icon',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '<CloseOutlined />' },
      },
      control: null,
    },
    confirmLoading: {
      name: 'confirmLoading',
      defaultValue: false,
      description:
        'Whether to apply loading visual effect for OK button or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    destroyOnClose: {
      name: 'destroyOnClose',
      defaultValue: false,
      description: 'Whether to unmount child components on onClose',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    focusTriggerAfterClose: {
      name: 'focusTriggerAfterClose',
      defaultValue: true,
      description:
        'Whether need to focus trigger element after dialog is closed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    footer: {
      name: 'footer',
      defaultValue: undefined,
      description:
        "Footer content, set as `footer={null}` when you don't need default buttons",
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '(OK and Cancel buttons)' },
      },
      control: null,
    },
    forceRender: {
      name: 'forceRender',
      defaultValue: false,
      description: 'Force render Modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    getContainer: {
      name: 'getContainer',
      defaultValue: undefined,
      description: 'The mounted node for Modal but still display at fullscreen',
      table: {
        type: {
          summary: 'HTMLElement | () => HTMLElement | Selectors | false',
        },
        defaultValue: { summary: 'document.body' },
      },
      control: null,
    },
    keyboard: {
      name: 'keyboard',
      defaultValue: true,
      description: 'Whether support press esc to close',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    mask: {
      name: 'mask',
      defaultValue: true,
      description: 'Whether show mask or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    maskStyle: {
      name: 'maskStyle',
      defaultValue: undefined,
      description: "Style for modal's mask element",
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    modalRender: {
      name: 'modalRender',
      defaultValue: undefined,
      description: 'Custom modal content render',
      table: {
        type: { summary: '(node: ReactNode) => ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    okButtonProps: {
      name: 'okButtonProps',
      defaultValue: undefined,
      description: 'The ok button props',
      table: {
        type: {
          summary: '[ButtonProps](https://ant.design/components/button/#api)',
        },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    okText: {
      name: 'okText',
      defaultValue: undefined,
      description: 'Text of the OK button',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'OK' },
      },
      control: null,
    },
    okType: {
      name: 'okType',
      defaultValue: 'primary',
      description: 'Button `type` of the OK button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      control: 'text',
    },
    style: {
      name: 'style',
      defaultValue: undefined,
      description:
        'Style of floating layer, typically used at least for adjusting the position',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    title: {
      name: 'title',
      defaultValue: undefined,
      description: "The modal dialog's title",
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    open: {
      name: 'open',
      defaultValue: false,
      description: 'Whether the modal dialog is visible or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    width: {
      name: 'width',
      defaultValue: 520,
      description: 'Width of the modal dialog',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '520' },
      },
      control: 'number',
    },
    wrapClassName: {
      name: 'wrapClassName',
      defaultValue: undefined,
      description: 'The class name of the container of the modal dialog',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: 'text',
    },
    zIndex: {
      name: 'zIndex',
      defaultValue: 1000,
      description: 'The `z-index` of the Modal',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1000' },
      },
      control: 'number',
    },
    onCancel: {
      name: 'style',
      defaultValue: undefined,
      description:
        'Specify a function that will be called when a user clicks mask, close button on top right or Cancel button',
      table: {
        type: { summary: 'function(e)' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    onOk: {
      name: 'onOk',
      defaultValue: undefined,
      description:
        'Specify a function that will be called when a user clicks the OK button',
      table: {
        type: { summary: 'function(e)' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    afterOpenChange: {
      name: 'afterOpenChange',
      defaultValue: undefined,
      description:
        'Callback when the animation ends when Modal is turned on and off',
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
          'Modal dialogs. \n' +
          "\nWhen requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use `Modal` to create a new floating layer over the current page to get user feedback or display information. \n" +
          '\nAdditionally, if you need show a simple confirmation dialog, you can use [App.useApp](https://ant.design/components/app) hooks.',
      },
    },
  },
} as ComponentMeta<typeof Modal>

// Default
const Template: ComponentStory<typeof Modal> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        {...args}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  )
}
export const Default = Template.bind({})

Default.args = {
  title: 'Modal',
  children: 'Basic Modal',
}

// // Examples
export const Basic: ComponentStory<any> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

Basic.parameters = {
  docs: {
    description: {
      story: 'Basic modal.',
    },
  },
}

export const CustomizedFooter: ComponentStory<any> = () => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
    }, 3000)
  }

  const handleCancel = () => {
    setOpen(false)
  }
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

CustomizedFooter.parameters = {
  docs: {
    description: {
      story:
        'A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog will be closed.' +
        "You could set footer to null if you don't need default footer buttons.",
    },
  },
}

export const Internationalization: ComponentStory<any> = () => {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const hideModal = () => {
    setOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Yes"
        cancelText="No"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  )
}

Internationalization.parameters = {
  docs: {
    description: {
      story:
        'To customize the text of the buttons, you need to set `okText` and `cancelText` props.',
    },
  },
}

export const CustomizePosition: ComponentStory<any> = () => {
  const [modal1Open, setModal1Open] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setModal1Open(true)}>
        Display a modal dialog at 20px to Top
      </Button>
      <Modal
        title="20px to Top"
        style={{ top: 20 }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      <br />
      <br />
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Vertically centered modal dialog
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

CustomizePosition.parameters = {
  docs: {
    description: {
      story:
        'You can use `centered`, `style.top` or other styles to set position of modal dialog.',
    },
  },
}

export const UseHooksToGetContext: ComponentStory<any> = () => {
  const ReachableContext = createContext<string | null>(null)
  const UnreachableContext = createContext<string | null>(null)
  const [modal, contextHolder] = Modal.useModal()

  const config = {
    title: 'Use Hook!',
    content: (
      <>
        <ReachableContext.Consumer>
          {(name) => `Reachable: ${name}!`}
        </ReachableContext.Consumer>
        <br />
        <UnreachableContext.Consumer>
          {(name) => `Unreachable: ${name}!`}
        </UnreachableContext.Consumer>
      </>
    ),
  }

  return (
    <ReachableContext.Provider value="Light">
      <Space>
        <Button
          onClick={() => {
            modal.confirm(config)
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={() => {
            modal.warning(config)
          }}
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            modal.info(config)
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            modal.error(config)
          }}
        >
          Error
        </Button>
      </Space>
      {/* `contextHolder` should always be placed under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  )
}

UseHooksToGetContext.parameters = {
  docs: {
    description: {
      story:
        'Use `Modal.useModal` to get `contextHolder` with context accessible issue.',
    },
  },
}

export const CustomizeWidth: ComponentStory<any> = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

CustomizeWidth.parameters = {
  docs: {
    description: {
      story: 'Use `width` to set the width of the modal dialog.',
    },
  },
}

export const DestroyConfirmationModalDialog: ComponentStory<any> = () => {
  const { confirm } = Modal

  const destroyAll = () => {
    Modal.destroyAll()
  }

  const showConfirm = () => {
    for (let i = 0; i < 3; i += 1) {
      setTimeout(() => {
        confirm({
          icon: <ExclamationCircleOutlined />,
          content: <Button onClick={destroyAll}>Click to destroy all</Button>,
          onOk() {
            // Do something
          },
          onCancel() {
            // Do something
          },
        })
      }, i * 500)
    }
  }

  return <Button onClick={showConfirm}>Confirm</Button>
}

DestroyConfirmationModalDialog.parameters = {
  docs: {
    description: {
      story:
        '`Modal.destroyAll()` will destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically.',
    },
  },
}

export const AsynchronouslyClose: ComponentStory<any> = () => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Content of the modal')

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  )
}

AsynchronouslyClose.parameters = {
  docs: {
    description: {
      story:
        'Asynchronously close a modal dialog when the OK button is pressed. For example, you can use this pattern when you submit a form.',
    },
  },
}

export const ConfirmationModalDialog: ComponentStory<any> = () => {
  const { confirm } = Modal

  const showConfirm = () => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      onOk() {
        // Do something
      },
      onCancel() {
        // Do something
      },
    })
  }

  const showPromiseConfirm = () => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content:
        'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
        }).catch(() => 'Oops errors!')
      },
      onCancel() {},
    })
  }

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        // Do something
      },
      onCancel() {
        // Do something
      },
    })
  }

  const showPropsConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      okButtonProps: {
        disabled: true,
      },
      cancelText: 'No',
      onOk() {
        // Do something
      },
      onCancel() {
        // Do something
      },
    })
  }

  return (
    <Space wrap>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showPromiseConfirm}>With promise</Button>
      <Button onClick={showDeleteConfirm} type="dashed">
        Delete
      </Button>
      <Button onClick={showPropsConfirm} type="dashed">
        With extra props
      </Button>
    </Space>
  )
}

ConfirmationModalDialog.parameters = {
  docs: {
    description: {
      story:
        'Use `confirm()` to show a confirmation modal dialog. Let onCancel/onOk function return a promise object to delay closing the dialog.',
    },
  },
}

export const ManualToUpdateDestroy: ComponentStory<any> = () => {
  const [modal, contextHolder] = Modal.useModal()

  const countDown = () => {
    let secondsToGo = 5

    const instance = modal.success({
      title: 'This is a notification message',
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    })

    const timer = setInterval(() => {
      secondsToGo -= 1
      instance.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      })
    }, 1000)

    setTimeout(() => {
      clearInterval(timer)
      instance.destroy()
    }, secondsToGo * 1000)
  }

  return (
    <>
      <Button onClick={countDown}>Open modal to close in 5s</Button>
      {contextHolder}
    </>
  )
}

ManualToUpdateDestroy.parameters = {
  docs: {
    description: {
      story: 'Manually updating and destroying a modal through instance.',
    },
  },
}

export const CustomizeFooterButtonsProps: ComponentStory<any> = () => {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = (_e: React.MouseEvent<HTMLElement>) => {
    setOpen(false)
  }

  const handleCancel = (_e: React.MouseEvent<HTMLElement>) => {
    setOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized button props
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

CustomizeFooterButtonsProps.parameters = {
  docs: {
    description: {
      story:
        'Passing `okButtonProps` and `cancelButtonProps` will customize the OK button and cancel button props.',
    },
  },
}

export const StaticMethod: ComponentStory<any> = () => {
  const info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    })
  }

  const success = () => {
    Modal.success({
      content: 'some messages...some messages...',
    })
  }

  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    })
  }

  const warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    })
  }

  return (
    <Space wrap>
      <Button onClick={info}>Info</Button>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
    </Space>
  )
}

StaticMethod.parameters = {
  docs: {
    description: {
      story:
        'In most case, you do not need static method. It can not consume context like dynamic theme. Please use hooks version or `App` provided instance first.',
    },
  },
}

export const ModalMethodAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'afterClose',
      description: `Specify a function that will be called when modal is closed completely`,
      type: 'function',
      default: '-',
    },
    {
      key: '2',
      property: 'autoFocusButton',
      description: 'Specify which button to autofocus',
      type: (
        <>
          null |&nbsp;
          <TableApiTypeTag text="ok" />
          &nbsp;|&nbsp;
          <TableApiTypeTag text="cancel" />
        </>
      ),
      default: <Tag>ok</Tag>,
    },
    {
      key: '3',
      property: 'bodyStyle',
      description:
        'Body style for modal body element. Such as height, padding etc',
      type: 'CSSProperties',
      default: '-',
    },
    {
      key: '4',
      property: 'cancelButtonProps',
      description: 'The cancel button props',
      type: <a href="https://ant.design/components/button/#api">ButtonProps</a>,
      default: '-',
    },
    {
      key: '5',
      property: 'cancelText',
      description: 'Text of the Cancel button with Modal.confirm',
      type: 'string',
      default: <Tag>Cancel</Tag>,
    },
    {
      key: '6',
      property: 'centered',
      description: 'Centered Modal',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '7',
      property: 'className',
      description: 'The className of container',
      type: 'string',
      default: '-',
    },
    {
      key: '8',
      property: 'closable',
      description:
        'Whether a close (x) button is visible on top right of the confirm dialog or not',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '9',
      property: 'closeIcon',
      description: 'Custom close icon',
      type: 'ReactNode',
      default: 'undefined',
    },
    {
      key: '10',
      property: 'content',
      description: 'Content',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '11',
      property: 'footer',
      description: (
        <>
          Footer content, set as{' '}
          <Tag style={{ marginRight: '0' }}>footer: null</Tag> when you
          don&apos;t need default buttons
        </>
      ),
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '12',
      property: 'getContainer',
      description: 'Return the mount node for Modal',
      type: 'HTMLElement | () => HTMLElement | Selectors | false',
      default: 'document.body',
    },
    {
      key: '14',
      property: 'keyboard',
      description: 'Whether support press esc to close',
      type: 'boolean',
      default: 'true',
    },
    {
      key: '15',
      property: 'mask',
      description: 'Whether show mask or not.',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '16',
      property: 'maskClosable',
      description:
        'Whether to close the modal dialog when the mask (area outside the modal) is clicked',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '17',
      property: 'maskStyle',
      description: 'Style for modal&lsquo;s mask element',
      type: 'object',
      default: '{}',
    },
    {
      key: '18',
      property: 'okButtonProps',
      description: 'The ok button props',
      type: <a href="https://ant.design/components/button#api">ButtonProps</a>,
      default: '-',
    },
    {
      key: '19',
      property: 'okText',
      description: 'Text of the OK button',
      type: 'string',
      default: <Tag>OK</Tag>,
    },
    {
      key: '20',
      property: 'okType',
      description: (
        <>
          Button <Tag style={{ marginRight: '0' }}>type</Tag> of the OK button
        </>
      ),
      type: 'string',
      default: <Tag>primary</Tag>,
    },
    {
      key: '21',
      property: 'style',
      description:
        'Style of floating layer, typically used at least for adjusting the position',
      type: 'CSSProperties',
      default: '-',
    },
    {
      key: '22',
      property: 'title',
      description: 'Title',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '23',
      property: 'width',
      description: 'Width of the modal dialog',
      type: 'string | number',
      default: '416',
    },
    {
      key: '24',
      property: 'wrapClassName',
      description: 'The class name of the container of the modal dialog',
      type: 'string',
      default: '-',
    },
    {
      key: '25',
      property: 'zIndex',
      description: (
        <>
          The <Tag style={{ marginRight: '0' }}>z-index</Tag> of the Modal
        </>
      ),
      type: 'number',
      default: '1000',
    },
    {
      key: '26',
      property: 'onCancel',
      description: (
        <>
          Specify a function that will be called when the user clicks the Cancel
          button. The parameter of this function is a function whose execution
          should include closing the dialog. If the function does not take any
          parameter (&nbsp;
          <Tag style={{ marginRight: '0' }}>!onCancel.length</Tag>&nbsp;) then
          modal dialog will be closed unless returned value is{' '}
          <Tag style={{ marginRight: '0' }}>true</Tag> (&nbsp;
          <Tag style={{ marginRight: '0' }}>!!onCancel()</Tag>&nbsp;). You can
          also just return a promise and when the promise is resolved, the modal
          dialog will also be closed
        </>
      ),
      type: 'function(close)',
      default: '-',
    },
    {
      key: '27',
      property: 'onOk',
      description: (
        <>
          Specify a function that will be called when the user clicks the OK
          button. The parameter of this function is a function whose execution
          should include closing the dialog. If the function does not take any
          parameter (&nbsp;
          <Tag style={{ marginRight: '0' }}>!onOk.length</Tag>&nbsp;) then modal
          dialog will be closed unless returned value is{' '}
          <Tag style={{ marginRight: '0' }}>true</Tag> (&nbsp;
          <Tag style={{ marginRight: '0' }}>!!onOk()</Tag>&nbsp;). You can also
          just return a promise and when the promise is resolved, the modal
          dialog will also be closed
        </>
      ),
      type: 'function(close)',
      default: '-',
    },
  ]

  return (
    <Table
      dataSource={dataSource}
      columns={TABLE_API_COLUMNS}
      pagination={false}
    />
  )
}

ModalMethodAPI.parameters = {
  docs: {
    description: {
      story:
        "There are five ways to display the information based on the content's nature: \n" +
        '- `Modal.info` \n' +
        '- `Modal.success` \n' +
        '- `Modal.error` \n' +
        '- `Modal.warning` \n' +
        '- `Modal.confirm` \n' +
        '\nThe items listed above are all functions, expecting a settings object as parameter. The properties of the object are follows:',
    },
    source: {
      code: null,
    },
  },
}
