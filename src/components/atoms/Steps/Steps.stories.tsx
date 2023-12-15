// Libraries
import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Card, ConfigProvider, List, StepsProps, theme } from 'antd'

// Components
import { Steps } from './Steps'
import { Button, message, Divider, Popover, Space, Radio } from '../index'
import { Table } from '../../organism'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/lib/constants'

export default {
  title: 'Atoms/Steps',
  component: Steps,
  argTypes: {
    className: {
      name: 'className',
      description: 'Additional class to Steps	',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    current: {
      name: 'current',
      defaultValue: 0,
      description:
        'To set the current step, counting from 0. You can overwrite this state by using `status` of `Step`',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: {
        type: 'number',
      },
    },
    direction: {
      name: 'direction',
      defaultValue: 'horizontal',
      description:
        'To specify the direction of the step bar, horizontal or vertical',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
    initial: {
      name: 'initial',
      defaultValue: 0,
      description: 'Set the initial step, counting from 0	',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: {
        type: 'number',
      },
    },
    labelPlacement: {
      name: 'labelPlacement',
      description:
        'Place title and description with `horizontal` or `vertical` direction	',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
    percent: {
      name: 'percent',
      description:
        'Progress circle percentage of current step in `process` status (only works on basic Steps)	',
      table: {
        type: { summary: 'number' },
      },
      control: {
        type: 'number',
      },
    },
    progressDot: {
      name: 'progressDot',
      description:
        'Steps with progress dot style, customize the progress dot by setting it to a function. labelPlacement will be `vertical`',
      table: {
        type: {
          summary:
            'boolean | (iconDot, {index, status, title, description}) => ReactNode',
        },
      },
      control: null,
    },
    responsive: {
      name: 'responsive',
      defaultValue: true,
      description:
        'Change to vertical direction when screen width smaller than `532px`	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: true,
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'size	',
      description:
        'To specify the size of the step bar,` default` and `small` are currently supported',
      defaultValue: 'default',
      table: {
        type: { summary: 'default | small' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
    },
    status: {
      name: 'status	',
      description:
        'To specify the status of current step, can be set to one of the following values: `wait` `process` `finish` `error`',
      defaultValue: 'process',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'process' },
      },
      control: {
        type: 'select',
        options: ['wait', 'process', 'finish', 'error'],
      },
    },
    type: {
      name: 'type',
      description:
        'Type of steps, can be set to one of the following values: `default` `navigation` `inline`',
      defaultValue: 'default',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: ['default', 'navigation', 'inline'],
      },
    },
    onChange: {
      name: 'onChange',
      description: 'Trigger when Step is changed',
      table: {
        type: { summary: '(current) => void	' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '`Steps` is a navigation bar that guides users through the steps of a task.' +
          '\n### When To Use' +
          '\n' +
          '- When a given task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Steps>

// Default
const Template: ComponentStory<typeof Steps> = (args) => {
  const description = 'This is a description.'

  return (
    <Steps
      {...args}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
          subTitle: 'Left 00:00:08',
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
  )
}

export const Basic = Template.bind({})

// Examples
export const MiniVersion = () => (
  <Steps
    size="small"
    current={1}
    items={[
      {
        title: 'Finished',
      },
      {
        title: 'In Progress',
      },
      {
        title: 'Waiting',
      },
    ]}
  />
)

MiniVersion.parameters = {
  docs: {
    description: {
      story:
        'By setting like this: `<Steps size="small">`, you can get a mini version. ',
    },
  },
}

export const WithIcon = () => (
  <Steps
    items={[
      {
        title: 'Login',
        status: 'finish',
        icon: <UserOutlined />,
      },
      {
        title: 'Verification',
        status: 'finish',
        icon: <SolutionOutlined />,
      },
      {
        title: 'Pay',
        status: 'process',
        icon: <LoadingOutlined />,
      },
      {
        title: 'Done',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />
)

WithIcon.parameters = {
  docs: {
    description: {
      story:
        'By setting like this: `<Steps size="small">`, you can get a mini version. ',
    },
  },
}

export const SwitchStep = () => {
  const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ]
  const { token } = theme.useToken()
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }))

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  }

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  )
}

SwitchStep.parameters = {
  docs: {
    description: {
      story:
        'Cooperate with the content and buttons, to represent the progress of a process.',
    },
  },
}

export const Vertical = () => {
  const description = 'This is a description.'
  return (
    <Steps
      direction="vertical"
      current={1}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
  )
}

Vertical.parameters = {
  docs: {
    description: {
      story: 'A simple step bar in the vertical direction.',
    },
  },
}

export const VerticalMiniVersion = () => {
  const description = 'This is a description.'
  return (
    <Steps
      direction="vertical"
      size="small"
      current={1}
      items={[
        { title: 'Finished', description },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
  )
}

VerticalMiniVersion.parameters = {
  docs: {
    description: {
      story: 'A simple mini version step bar in the vertical direction.',
    },
  },
}

export const ErrorStatus = () => {
  const description = 'This is a description'
  return (
    <Steps
      current={1}
      status="error"
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Process',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
  )
}

ErrorStatus.parameters = {
  docs: {
    description: {
      story:
        'By using `status` of `Steps`, you can specify the state for current step.',
    },
  },
}

export const DotStyle = () => (
  <>
    <Steps
      progressDot
      current={1}
      items={[
        {
          title: 'Finished',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
      items={[
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
  </>
)

DotStyle.parameters = {
  docs: {
    description: {
      story: 'Steps with progress dot style.',
    },
  },
}

export const CustomizedDotStyle = () => {
  const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  )
  const description = 'You can hover on the dot.'
  return (
    <Steps
      current={1}
      progressDot={customDot}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
  )
}

CustomizedDotStyle.parameters = {
  docs: {
    description: {
      story: 'You can customize the display for Steps with progress dot style.',
    },
  },
}

export const DotStyleSizeSmall = () => (
  <>
    <Steps
      progressDot
      current={1}
      size="small"
      items={[
        {
          title: 'Finished',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
      size="small"
      items={[
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
  </>
)

DotStyleSizeSmall.parameters = {
  docs: {
    description: {
      story: 'Steps with progress dot style.',
    },
  },
}

export const Clickable = () => {
  const [current, setCurrent] = useState(0)

  const onChange = (value: number) => {
    console.log('onChange:', value)
    setCurrent(value)
  }
  const description = 'This is a description.'

  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />

      <Divider />

      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />
    </>
  )
}

Clickable.parameters = {
  docs: {
    description: {
      story: 'Setting `onChange` makes Steps clickable.',
    },
  },
}

export const ProgressDebug = () => {
  const [percent, setPercentage] = useState<number | undefined>(0)
  const [current, setCurrent] = useState(1)
  const [status, setStatus] = useState<StepsProps['status']>('process')
  const description = 'This is a description.'
  const items = [
    {
      title: 'Finished',
      description,
    },
    {
      title: 'In Progress',
      subTitle: 'Left 00:00:08',
      description,
    },
    {
      title: 'Waiting',
      description,
    },
  ]
  return (
    <>
      <Space.Compact block>
        <Button onClick={() => setPercentage(undefined)}>
          Percentage to undefined
        </Button>
        <Button
          onClick={() => setPercentage((prev) => ((prev ?? 0) + 10) % 100)}
        >
          Percentage +
        </Button>
        <Button onClick={() => setCurrent((prev) => (prev + 1) % 3)}>
          Current +
        </Button>
        <Button onClick={() => setStatus('wait')}>Status Wait</Button>
        <Button onClick={() => setStatus('process')}>Status Process</Button>
        <Button onClick={() => setStatus('finish')}>Status Finish</Button>
        <Button onClick={() => setStatus('error')}>Status Error</Button>
      </Space.Compact>
      <br />
      <Steps
        current={current}
        percent={percent}
        status={status}
        items={items}
      />
      <Steps
        current={current}
        percent={percent}
        status={status}
        size="small"
        items={items}
      />
      <Steps
        current={current}
        percent={percent}
        status={status}
        direction="vertical"
        items={items}
      />
      <Steps
        current={current}
        percent={percent}
        status={status}
        size="small"
        direction="vertical"
        items={items}
      />
    </>
  )
}

ProgressDebug.parameters = {
  docs: {
    description: {
      story: 'Buggy!',
    },
  },
}

export const StepsInsideSteps = () => {
  const [size, setSize] = useState<StepsProps['size']>('default')
  const description = 'This is a description.'
  const horizontalSteps = (
    <Card>
      <Steps
        size={size}
        items={[
          {
            title: 'Finished',
            description,
          },
          {
            title: 'In Progress',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
    </Card>
  )

  return (
    <>
      <Radio.Group
        style={{ marginBottom: 16 }}
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <Radio value="small">Small</Radio>
        <Radio value="default">Default</Radio>
      </Radio.Group>
      <Steps
        size={size}
        direction="vertical"
        items={[
          {
            title: 'Finished',
            description: horizontalSteps,
          },
          {
            title: 'In Progress',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
    </>
  )
}

StepsInsideSteps.parameters = {
  docs: {
    description: {
      story: 'Test style of Steps inside Steps.',
    },
  },
}

export const InlineSteps = () => {
  const data = [
    {
      title: 'Ant Design Title 1',
      current: 0,
    },
    {
      title: 'Ant Design Title 2',
      current: 1,
      status: 'error',
    },
    {
      title: 'Ant Design Title 3',
      current: 2,
    },
    {
      title: 'Ant Design Title 4',
      current: 1,
    },
  ]

  const items = [
    {
      title: 'Step 1',
      description: 'This is a Step 1.',
    },
    {
      title: 'Step 2',
      description: 'This is a Step 2.',
    },
    {
      title: 'Step 3',
      description: 'This is a Step 3.',
    },
  ]
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <Steps
              style={{ marginTop: 8 }}
              type="inline"
              current={item.current}
              status={item.status as StepsProps['status']}
              items={items}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

InlineSteps.parameters = {
  docs: {
    description: {
      story:
        'Inline type steps, suitable for displaying the process and current state of the object in the list content scene.',
    },
  },
}

export const Wireframe = () => {
  const description = 'This is a description.'
  return (
    <ConfigProvider theme={{ token: { wireframe: true } }}>
      <Steps
        current={1}
        items={[
          {
            title: 'Finished',
            description,
          },
          {
            title: 'In Progress',
            description,
            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
    </ConfigProvider>
  )
}

Wireframe.parameters = {
  docs: {
    description: {
      story: 'Wireframe style.',
    },
  },
}

export const StepItem: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'description',
      description: `Description of the step, optional property		`,
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '2',
      property: 'disabled',
      description: 'Disable click	',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '3',
      property: 'icon	',
      description: 'Icon of the step, optional property	',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '4',
      property: 'status',
      description:
        'The cancel button propsTo specify the status. It will be automatically set by `current` of `Steps` if not configured. Optional values are: `wait` `process` `finish` `error`',
      type: 'string',
      default: 'wait	',
    },
    {
      key: '5',
      property: 'subTitle',
      description: 'Subtitle of the step',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '6',
      property: 'title',
      description: 'Title of the step	',
      type: 'ReactNode',
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

StepItem.parameters = {
  docs: {
    description: {
      story: 'A single step in the step bar.',
    },
    source: {
      code: null,
    },
  },
}
