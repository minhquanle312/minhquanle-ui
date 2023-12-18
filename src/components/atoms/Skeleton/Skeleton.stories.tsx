// Libraries
import React, { useState } from 'react'
import { Avatar, Form, RadioChangeEvent, Switch, List } from 'antd'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  DotChartOutlined,
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import type Icon from '@ant-design/icons'

// Components
import { Skeleton } from './Skeleton'
import { Space, Divider, Radio, Button } from '../index'
import { Table } from '../../organism'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/es/constants/storybook'

export default {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  argTypes: {
    active: {
      name: 'active',
      defaultValue: false,
      description: 'Show animation effect	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    avatar: {
      name: 'avatar',
      defaultValue: false,
      description: 'Show avatar placeholder	',
      table: {
        type: { summary: 'boolean | SkeletonAvatarProps	' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    loading: {
      name: 'loading',
      description: 'Display the skeleton when true',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    paragraph: {
      name: 'paragraph',
      defaultValue: true,
      description: 'Show paragraph placeholder	',
      table: {
        type: { summary: 'boolean | SkeletonParagraphProps' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    round: {
      name: 'round',
      defaultValue: false,
      description: 'Show paragraph and title radius when true	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    title: {
      name: 'title',
      defaultValue: true,
      description: 'Show title placeholder	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
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
} as ComponentMeta<typeof Skeleton>

// Default
const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
)

export const Default = Template.bind({})

export const ComplexCombination = () => (
  <Skeleton avatar paragraph={{ rows: 4 }} />
)

ComplexCombination.parameters = {
  docs: {
    description: {
      story: 'Complex combination with avatar and multiple paragraphs.',
    },
  },
}

export const ActiveAnimation = () => <Skeleton active />

ActiveAnimation.parameters = {
  docs: {
    description: {
      story: 'Display active animation.',
    },
  },
}

export const ButtonAvatarInputImageNode = () => {
  type SizeType = 'default' | 'small' | 'large'
  type ButtonShapeType = 'circle' | 'square' | 'round' | 'default'
  type AvatarShapeType = 'circle' | 'square'
  const [active, setActive] = useState(false)
  const [block, setBlock] = useState(false)
  const [size, setSize] = useState<SizeType>('default')
  const [buttonShape, setButtonShape] = useState<ButtonShapeType>('default')
  const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle')

  const handleActiveChange = (checked: boolean) => {
    setActive(checked)
  }

  const handleBlockChange = (checked: boolean) => {
    setBlock(checked)
  }

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value)
  }

  const handleShapeButton = (e: RadioChangeEvent) => {
    setButtonShape(e.target.value)
  }

  const handleAvatarShape = (e: RadioChangeEvent) => {
    setAvatarShape(e.target.value)
  }

  return (
    <>
      <Space>
        <Skeleton.Button
          active={active}
          size={size}
          shape={buttonShape}
          block={block}
        />
        <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
        <Skeleton.Input active={active} size={size} />
      </Space>
      <br />
      <br />
      <Skeleton.Button
        active={active}
        size={size}
        shape={buttonShape}
        block={block}
      />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Space>
        <Skeleton.Image active={active} />
        <Skeleton.Node active={active}>
          <DotChartOutlined style={{ fontSize: 40, color: '#bfbfbf' }} />
        </Skeleton.Node>
      </Space>
      <Divider />
      <Form layout="inline" style={{ margin: '16px 0' }}>
        <Space size={16} wrap>
          <Form.Item label="Active">
            <Switch checked={active} onChange={handleActiveChange} />
          </Form.Item>
          <Form.Item label="Button and Input Block">
            <Switch checked={block} onChange={handleBlockChange} />
          </Form.Item>
          <Form.Item label="Size">
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Button Shape">
            <Radio.Group value={buttonShape} onChange={handleShapeButton}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="square">Square</Radio.Button>
              <Radio.Button value="round">Round</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Avatar Shape">
            <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
              <Radio.Button value="square">Square</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Space>
      </Form>
    </>
  )
}

ButtonAvatarInputImageNode.parameters = {
  docs: {
    description: {
      story: 'Skeleton Button, Avatar, Input, Image and Node.',
    },
  },
}

export const ContainsSubComponent = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const showSkeleton = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={16}>
      <Skeleton loading={loading}>
        <h4 style={{ marginBottom: 16 }}>Ant Design, a design language</h4>
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      </Skeleton>
      <Button onClick={showSkeleton} disabled={loading}>
        Show Skeleton
      </Button>
    </Space>
  )
}

ContainsSubComponent.parameters = {
  docs: {
    description: {
      story: 'Skeleton contains sub component.',
    },
  },
}

interface IconTextProps {
  icon: typeof Icon
  text: React.ReactNode
}

const listData = Array.from({ length: 3 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i + 1}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}))

const IconText: React.FC<IconTextProps> = ({ icon, text }) => (
  <>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </>
)

export const SkeletonList = () => {
  const [loading, setLoading] = useState(true)

  const onChange = (checked: boolean) => {
    setLoading(!checked)
  }

  return (
    <>
      <Switch
        checked={!loading}
        onChange={onChange}
        style={{ marginBottom: 16 }}
      />
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={
              !loading
                ? [
                    <IconText
                      icon={StarOutlined}
                      text="156"
                      key="list-vertical-star-o"
                    />,
                    <IconText
                      icon={LikeOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />,
                  ]
                : undefined
            }
            extra={
              !loading && (
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              )
            }
          >
            <Skeleton loading={loading} active avatar>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  )
}

SkeletonList.parameters = {
  docs: {
    description: {
      story: 'Use skeleton in list component.',
    },
  },
}

export const SkeletonAvatarProps: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'active',
      description: `Show animation effect, only valid when used avatar independently	`,
      type: 'boolean',
      default: 'false',
    },
    {
      key: '2',
      property: 'shape',
      description: 'Set the shape of avatar	',
      type: 'circle | square',
      default: '-',
    },
    {
      key: '3 ',
      property: 'size',
      description: 'Set the size of avatar	',
      type: 'number | large | small | default',
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

SkeletonAvatarProps.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
}

export const SkeletonTitleProps: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'width',
      description: `Set the width of title	`,
      type: 'number | string',
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

SkeletonTitleProps.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
}

export const SkeletonParagraphProps: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'rows',
      description: `Set the row count of paragraph	`,
      type: 'number ',
      default: '-',
    },
    {
      key: '2',
      property: 'width',
      description: `Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width	`,
      type: 'number | string | Array<number | string> ',
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

SkeletonParagraphProps.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
}

export const SkeletonButtonProps: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'active',
      description: `Show animation effect	`,
      type: 'boolean ',
      default: false,
    },
    {
      key: '2',
      property: 'block',
      description: `Option to fit button width to its parent width`,
      type: 'boolean',
      default: 'false',
    },
    {
      key: '3',
      property: 'shape',
      description: `Set the shape of button	`,
      type: 'circle | round | square | default',
      default: '-',
    },
    {
      key: '4',
      property: 'size',
      description: `Set the size of button	`,
      type: 'large | small | default',
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

SkeletonButtonProps.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
}

export const SkeletonInputProps: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'active',
      description: `Show animation effect		`,
      type: 'boolean ',
      default: 'false',
    },
    {
      key: '2',
      property: 'size',
      description: `Set the size of input	`,
      type: 'large | small | default',
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

SkeletonInputProps.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
}
