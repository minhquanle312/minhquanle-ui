/* eslint-disable no-console */
// Libraries
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Components
import { Space, Tag, Input } from '..'
import { TextArea as AntdCustomTextArea } from './styled'
import { Table } from '../../organism'

// Types
import Icon from '@antscorp/icons'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/es/constants'

// Variables
const exampleIcon = <Icon type="icon-ants-search-2" />

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    addonAfter: {
      name: 'addonAfter',
      defaultValue: undefined,
      description:
        'The label text displayed after (on the right side of) the input field',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    addonBefore: {
      name: 'addonBefore',
      defaultValue: undefined,
      description:
        'The label text displayed before (on the left side of) the input field',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    allowClear: {
      name: 'allowClear',
      defaultValue: false,
      description: 'If allow to remove input content with clear icon',
      table: {
        type: { summary: 'boolean | { clearIcon: ReactNode }' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultValue: {
      name: 'defaultValue',
      defaultValue: undefined,
      description: 'The initial input content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    id: {
      name: 'id',
      defaultValue: undefined,
      description: 'The ID for input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    maxLength: {
      name: 'maxLength',
      defaultValue: undefined,
      description: 'The max length',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'number',
      },
    },
    showCount: {
      name: 'showCount',
      defaultValue: false,
      description: 'Whether show text count',
      table: {
        type: {
          summary:
            'boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }',
        },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    status: {
      name: 'status',
      defaultValue: undefined,
      description: 'Set validation status',
      table: {
        type: { summary: 'error | warning' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'select',
        labels: {
          error: 'Error',
          warning: 'Warning',
        },
      },
      options: ['error', 'warning'],
    },
    prefix: {
      name: 'prefix',
      defaultValue: undefined,
      description: 'The prefix icon for the Input',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: undefined,
      },
    },
    size: {
      name: 'size',
      defaultValue: undefined,
      description:
        'The size of the input box. Note: in the context of a form, the `middle` size is used',
      table: {
        type: { summary: 'large | middle | small' },
        defaultValue: { summary: '-' },
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
    suffix: {
      name: 'suffix',
      defaultValue: undefined,
      description: 'The suffix icon for the Input',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    value: {
      name: 'value',
      defaultValue: '',
      description: 'The input content value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    onChange: {
      name: 'onChange',
      defaultValue: undefined,
      description: 'Callback when user input',
      table: {
        type: { summary: 'function(e)' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    onPressEnter: {
      name: 'onPressEnter',
      defaultValue: undefined,
      description:
        'The callback function that is triggered when Enter key is pressed',
      table: {
        type: { summary: 'function(e)' },
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
} as ComponentMeta<typeof Input>

// Variables

// Default
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {}

export const BasicUsage: ComponentStory<any> = () => (
  <Input placeholder="Basic usage" />
)

BasicUsage.parameters = {
  docs: {
    description: {
      story: 'Basic usage example.',
    },
  },
}

export const TextArea: ComponentStory<any> = () => (
  <>
    <AntdCustomTextArea rows={4} />
    <br />
    <br />
    <AntdCustomTextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
  </>
)

TextArea.parameters = {
  docs: {
    description: {
      story: 'For multi-line input.',
    },
  },
}

export const Status: ComponentStory<any> = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input
      status="error"
      prefix={exampleIcon}
      placeholder="Error with prefix"
    />
    <Input
      status="warning"
      prefix={exampleIcon}
      placeholder="Warning with prefix"
    />
  </Space>
)

Status.parameters = {
  docs: {
    description: {
      story:
        'Add status to Input with status, which could be error or warning.',
    },
  },
}

export const BorderLess: ComponentStory<any> = () => (
  <Input placeholder="Borderless" bordered={false} />
)

BorderLess.parameters = {
  docs: {
    description: {
      story: 'No border.',
    },
  },
}

export const InputTextAreaAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'allowClear',
      description: 'If allow to remove input content with clear icon',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '2',
      property: 'autoSize',
      description:
        'Height autosize feature, can be set to true | false or an object { minRows: 2, maxRows: 6 }',
      type: 'boolean | object',
      default: 'false',
    },
    {
      key: '3',
      property: 'bordered',
      description: 'Whether has border style',
      type: 'boolean',
      default: 'true',
    },
    {
      key: '4',
      property: 'classNames',
      description: 'Semantic DOM class',
      type: 'Record<SemanticDOM, string>',
      default: '-',
    },
    {
      key: '5',
      property: 'defaultValue',
      description: 'The initial input content',
      type: 'string',
      default: '-',
    },
    {
      key: '6',
      property: 'maxLength',
      description: 'The maximum number of characters in TextArea',
      type: 'number',
      default: '-',
    },
    {
      key: '7',
      property: 'showCount',
      description: 'Whether to show character count',
      type: 'boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => string }',
      default: 'false',
    },
    {
      key: '8',
      property: 'styles',
      description: 'Semantic DOM style',
      type: 'Record<SemanticDOM, CSSProperties>',
      default: '-',
    },
    {
      key: '9',
      property: 'value',
      description: 'The input content value',
      type: 'string',
      default: '-',
    },
    {
      key: '10',
      property: 'onPressEnter',
      description:
        'The callback function that is triggered when Enter key is pressed',
      type: 'function(e)',
      default: '-',
    },
    {
      key: '11',
      property: 'onResize',
      description: 'The callback function that is triggered when resize',
      type: 'function({ width, height })',
      default: '-',
    },
  ]

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={TABLE_API_COLUMNS}
        pagination={false}
      />
      <p>
        The rest of the props of{' '}
        <Tag style={{ marginRight: '0' }}>Input.TextArea</Tag> are the same as
        the original{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
          style={{ textDecoration: 'none' }}
        >
          textarea
        </a>
        .
      </p>
    </>
  )
}

InputTextAreaAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
}

export const InputPasswordAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'iconRender',
      description: 'Custom toggle button',
      type: '(visible) => ReactNode',
      default:
        '(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)',
    },
    {
      key: '2',
      property: 'visibilityToggle',
      description: 'Whether show toggle button or control password visible',
      type: 'boolean | VisibilityToggle',
      default: 'true',
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

InputPasswordAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
}

export const VisibilityToggleAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'visible',
      description: 'Whether the password is show or hide',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '2',
      property: 'onVisibleChange',
      description:
        'Callback executed when visibility of the password is changed',
      type: 'boolean',
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

VisibilityToggleAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
}
