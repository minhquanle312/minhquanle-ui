// Libraries
import React, { useState } from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

// Antd
import {
  Button,
  Divider,
  Dropdown,
  Menu,
  Popconfirm,
  Radio,
  Tooltip,
  Typography,
  Upload,
} from 'antd'
import {
  UploadOutlined,
  DownloadOutlined,
  EllipsisOutlined,
  HeartOutlined,
  LikeOutlined,
  CommentOutlined,
  StarOutlined,
  ShareAltOutlined,
  WarningOutlined,
  MailOutlined,
  MobileOutlined,
} from '@ant-design/icons'

// Components
import { Space } from './Space'
import { SpaceSize } from 'antd/es/space'
import { Tag } from '../Tag'
import { Table } from '../../organism'
import { TableApiTypeTag } from 'minhquanle-ui/es/stories/components'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/es/constants'
import Compact from 'antd/es/space/Compact'

export default {
  title: 'Atoms/Space',
  component: Space,
  argTypes: {
    align: {
      name: 'align',
      defaultValue: undefined,
      description: 'Align items',
      table: {
        type: { summary: 'start | end | center | baseline' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'select',
      },
      options: ['start', 'end', 'center', 'baseline'],
    },
    direction: {
      name: 'direction',
      defaultValue: 'horizontal',
      description: 'The space direction',
      table: {
        type: { summary: 'vertical  | horizontal' },
        defaultValue: { summary: 'horizontal' },
      },
      control: {
        type: 'select',
      },
      options: ['vertical', 'horizontal'],
    },
    size: {
      name: 'size',
      defaultValue: 'small',
      description: 'The space size',
      table: {
        type: { summary: 'large | middle | small | number' },
        defaultValue: { summary: 'small' },
      },
      control: {
        type: 'select',
        labels: {
          large: 'Large',
          middle: 'Middle',
          small: 'Small',
        },
      },
      options: ['large', 'middle', 'small', 50],
    },
    split: {
      name: 'split',
      defaultValue: undefined,
      description: 'Set split',
      table: {
        type: { summary: 'ReactNode' },
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
        component: `
Set components spacing.
- Avoid components clinging together and set a unified space.
- Use Space.Compact when child form components are compactly connected and the border is collapsed (After version 'antd@4.24.0' Supported).
      `,
      },
    },
  },
} as ComponentMeta<typeof Space>

// Default
const Template: ComponentStory<typeof Space> = (args) => (
  <Space {...args}>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </Space>
)
export const Default = Template.bind({})

Default.args = {}

// Examples
export const BasicUsage: ComponentStory<any> = () => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Upload>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
)

BasicUsage.parameters = {
  docs: {
    description: {
      story: 'Crowded components horizontal spacing.',
    },
  },
}

export const Split: ComponentStory<any> = () => (
  <Space split={<Divider type="vertical" />}>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
  </Space>
)

Split.parameters = {
  docs: {
    description: {
      story: 'Crowded components split.',
    },
  },
}

export const Size: ComponentStory<any> = () => {
  const [size, setSize] = useState<SpaceSize | [SpaceSize, SpaceSize]>('small')

  return (
    <Space direction="vertical" size="middle">
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio value="small">Small</Radio>
        <Radio value="middle">Middle</Radio>
        <Radio value="large">Large</Radio>
      </Radio.Group>

      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </Space>
  )
}

Size.parameters = {
  docs: {
    description: {
      story: [
        '`large`, `middle` and `small` preset sizes.',
        'Set the size to `large` and `middle` by setting size to large and middle respectively. If `size` is not set, the spacing is `small.',
      ].join('<br />'),
    },
  },
}

export const Align: ComponentStory<any> = () => (
  <Space className="space-align-container" direction="vertical" size="middle">
    <div className="space-align-block">
      <Space align="center">
        center
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="start">
        start
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="end">
        end
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="baseline">
        baseline
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
  </Space>
)

Align.parameters = {
  docs: {
    description: {
      story: 'Config item align.',
    },
  },
}

export const VerticalCompactMode: ComponentStory<any> = () => (
  <Space>
    <Compact direction="vertical">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Compact>
    <Compact direction="vertical">
      <Button type="dashed">Button 1</Button>
      <Button type="dashed">Button 2</Button>
      <Button type="dashed">Button 3</Button>
    </Compact>
    <Compact direction="vertical">
      <Button type="primary">Button 1</Button>
      <Button type="primary">Button 2</Button>
      <Button type="primary">Button 3</Button>
    </Compact>
  </Space>
)

VerticalCompactMode.parameters = {
  docs: {
    description: {
      story: 'Vertical Mode for Space.Compact, support Button only.',
    },
  },
}

export const ButtonCompactMode: ComponentStory<any> = () => (
  <Space direction="vertical" size="middle">
    <Compact block>
      <Tooltip title="Like">
        <Button icon={<LikeOutlined />} />
      </Tooltip>
      <Tooltip title="Comment">
        <Button icon={<CommentOutlined />} />
      </Tooltip>
      <Tooltip title="Star">
        <Button icon={<StarOutlined />} />
      </Tooltip>
      <Tooltip title="Heart">
        <Button icon={<HeartOutlined />} />
      </Tooltip>
      <Tooltip title="Share">
        <Button icon={<ShareAltOutlined />} />
      </Tooltip>
      <Tooltip title="Download">
        <Button icon={<DownloadOutlined />} />
      </Tooltip>
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu
            items={[
              {
                key: '1',
                label: 'Report',
                icon: <WarningOutlined />,
              },
              {
                key: '2',
                label: 'Mail',
                icon: <MailOutlined />,
              },
              {
                key: '3',
                label: 'Mobile',
                icon: <MobileOutlined />,
              },
            ]}
          />
        }
        trigger={['click']}
      >
        <Button icon={<EllipsisOutlined />} />
      </Dropdown>
    </Compact>
    <Compact block>
      <Button type="primary">Button 1</Button>
      <Button type="primary">Button 2</Button>
      <Button type="primary">Button 3</Button>
      <Button type="primary">Button 4</Button>
      <Tooltip title="Tooltip">
        <Button type="primary" icon={<DownloadOutlined />} disabled />
      </Tooltip>
      <Tooltip title="Tooltip">
        <Button type="primary" icon={<DownloadOutlined />} />
      </Tooltip>
    </Compact>
    <Compact block>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Tooltip title="Tooltip">
        <Button icon={<DownloadOutlined />} disabled />
      </Tooltip>
      <Tooltip title="Tooltip">
        <Button icon={<DownloadOutlined />} />
      </Tooltip>
      <Button type="primary">Button 4</Button>
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu
            items={[
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
            ]}
          />
        }
        trigger={['click']}
      >
        <Button type="primary" icon={<EllipsisOutlined />} />
      </Dropdown>
    </Compact>
  </Space>
)

ButtonCompactMode.parameters = {
  docs: {
    description: {
      story: 'Button component compact example.',
    },
  },
}

export const SpaceCompactAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'block',
      description: `Option to fit width to its parent's width`,
      type: 'boolean',
      default: 'false',
    },
    {
      key: '2',
      property: 'direction',
      description: 'Set direction of layout',
      type: (
        <>
          <TableApiTypeTag text="vertical" /> |{' '}
          <TableApiTypeTag text="horizontal" />
        </>
      ),
      default: <Tag bordered>horizontal</Tag>,
    },
    {
      key: '3',
      property: 'size',
      description: 'Set child component size',
      type: (
        <>
          <TableApiTypeTag text="large" /> | <TableApiTypeTag text="middle" /> |{' '}
          <TableApiTypeTag text="small" />
        </>
      ),
      default: <Tag bordered>middle</Tag>,
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

SpaceCompactAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
}
