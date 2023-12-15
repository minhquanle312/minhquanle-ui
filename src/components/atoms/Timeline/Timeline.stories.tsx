// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { SmileOutlined, ClockCircleOutlined } from '@ant-design/icons'

// Components
import { Timeline } from '.'
import { Table } from '../../organism'
import { Button, Radio } from '../index'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/lib/constants/storybook'
import { RadioChangeEvent } from 'antd'

export default {
  title: 'Atoms/Timeline',
  component: Timeline,
  argTypes: {
    mode: {
      name: 'mode',
      description:
        'By sending `alternate` the timeline will distribute the nodes to the left and right',
      table: {
        type: { summary: 'left | alternate | right ' },
        defaultValue: { summary: 'left' },
      },
      control: {
        type: 'select',
        options: ['left ', 'alternate', 'right '],
      },
    },
    pending: {
      name: 'pending',
      defaultValue: false,
      description: 'Set the last ghost nodes existence or its content',
      table: {
        type: { summary: 'boolean | ReactNode' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    pendingDot: {
      name: 'pendingDot',
      description: 'Set the dot of the last ghost node when pending is true',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '<LoadingOutlined />' },
      },
      control: null,
    },
    reverse: {
      name: 'reverse',
      defaultValue: false,
      description: 'Whether reverse nodes or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    items: {
      name: 'items',
      description: 'Each node of timeline	',
      table: {
        type: { summary: 'Items[]' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Vertical display timeline.' +
          '\n### When To Use' +
          '\n' +
          '- When a series of information needs to be ordered by time (ascending or descending).' +
          '\n' +
          '- When you need a timeline to make a visual connection. ' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Timeline>

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline
    {...args}
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
)

export const Default = Template.bind({})

// Examples
export const Color = () => (
  <Timeline
    items={[
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'red',
        children: (
          <>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </>
        ),
      },
      {
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: '#00CCFF',
        dot: <SmileOutlined />,
        children: <p>Custom color testing</p>,
      },
    ]}
  />
)

Color.parameters = {
  docs: {
    description: {
      story:
        'Set the color of circles. `green` means completed or success status, `red` means warning or error, and blue means ongoing or other default status, `gray` for unfinished or disabled status.',
    },
  },
}

export const LastnodeAndReversing = () => {
  const [reverse, setReverse] = useState(false)

  const handleClick = () => {
    setReverse(!reverse)
  }

  return (
    <div>
      <Timeline
        pending="Recording..."
        reverse={reverse}
        items={[
          {
            children: 'Create a services site 2015-09-01',
          },
          {
            children: 'Solve initial network problems 2015-09-01',
          },
          {
            children: 'Technical testing 2015-09-01',
          },
        ]}
      />
      <Button type="primary" style={{ marginTop: 16 }} onClick={handleClick}>
        Toggle Reverse
      </Button>
    </div>
  )
}

LastnodeAndReversing.parameters = {
  docs: {
    description: {
      story:
        'When the timeline is incomplete and ongoing, put a ghost node at last. Set `pending` as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile,` pendingDot={a React Element}` is used to customize the dot of the pending item. `reverse={true}` is used for reversing nodes.',
    },
  },
}

export const Custom = () => (
  <Timeline
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'red',
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
)

Custom.parameters = {
  docs: {
    description: {
      story: 'Set a node as an icon or other custom element.',
    },
  },
}

export const Label = () => {
  const [mode, setMode] = useState<'left' | 'alternate' | 'right'>('left')

  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value)
  }

  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline
        mode={mode}
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
    </>
  )
}

Label.parameters = {
  docs: {
    description: {
      story: 'Use `label` show time alone.',
    },
  },
}

export const Alternate = () => (
  <Timeline
    mode="alternate"
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
        color: 'green',
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      },
      {
        color: 'red',
        children: 'Network problems being solved 2015-09-01',
      },
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: 'Technical testing 2015-09-01',
      },
    ]}
  />
)

Label.parameters = {
  docs: {
    description: {
      story: 'Alternate timeline.',
    },
  },
}

export const RightAlternate = () => (
  <Timeline
    mode="right"
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        color: 'red',
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
)

RightAlternate.parameters = {
  docs: {
    description: {
      story: 'Right alternate timeline.',
    },
  },
}

export const Items: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'color',
      description: `Set the circle's color to blue, red, green, gray or other custom colors`,
      type: 'string ',
      default: 'blue',
    },
    {
      key: '2',
      property: 'dot',
      description: 'Customize timeline dot	',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '3',
      property: 'label',
      description: 'Set the label	',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '4',
      property: 'children',
      description: 'Set the content	',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '5',
      property: 'position',
      description: 'Customize node position',
      type: 'left | right',
      default: '-',
    },
  ]

  return (
    <Table
      dataSource={dataSources}
      columns={TABLE_API_COLUMNS}
      pagination={false}
    />
  )
}

Items.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
}
