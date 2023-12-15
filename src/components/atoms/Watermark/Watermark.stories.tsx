// Libraries
import React, { useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Form, Slider } from 'antd'

// Components
import { Watermark } from './Watermark'
import { Typography, Input, InputNumber, Space } from '../index'
import { Table } from '../../organism'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/lib/constants/storybook'

export default {
  title: 'Atoms/Watermark',
  component: Watermark,
  argTypes: {
    width: {
      name: 'width',
      defaultValue: 120,
      description:
        'The width of the watermark, the default value of `content` is its own width',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 120 },
      },
      control: {
        type: 'number',
      },
    },
    height: {
      name: 'height',
      defaultValue: 64,
      description:
        'The height of the watermark, the default value of `content` is its own height',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 64 },
      },
      control: {
        type: 'number',
      },
    },
    rotate: {
      name: 'rotate',
      defaultValue: -22,
      description: 'When the watermark is drawn, the rotation Angle, unit `°`',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: -22 },
      },
      control: {
        type: 'number',
      },
    },
    zIndex: {
      name: 'zIndex',
      defaultValue: 9,
      description: 'The z-index of the appended watermark element',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 9 },
      },
      control: {
        type: 'number',
      },
    },
    image: {
      name: 'image',
      description:
        'Image source, it is recommended to export 2x or 3x image, high priority (support base64 format)	',
      table: {
        type: { summary: 'string' },
      },
      control: null,
    },
    content: {
      name: 'content',
      description: 'Watermark text content	',
      table: {
        type: { summary: 'string | string[]' },
      },
      control: null,
    },
    font: {
      name: 'font',
      description: 'Text style',
      table: {
        type: { summary: 'Font' },
        defaultValue: {
          summary: 'Font',
        },
      },
      control: null,
    },
    gap: {
      name: 'gap',
      description: 'The spacing between watermarks',
      table: {
        type: { summary: '[number, number]' },
        defaultValue: {
          summary: '[100, 100]',
        },
      },
      control: null,
    },
    offset: {
      name: 'offset',
      description:
        'The offset of the watermark from the upper left corner of the container. The default is `gap/2`',
      table: {
        type: { summary: '[number, number]' },
        defaultValue: {
          summary: '[gap[0]/2, gap[1]/2]',
        },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'To trigger an operation.',
      },
    },
  },
} as ComponentMeta<typeof Watermark>

const Template: ComponentStory<typeof Watermark> = (args) => (
  <Watermark content="Antsomi" {...args}>
    <div style={{ height: 300 }} />
  </Watermark>
)

export const Default = Template.bind({})

// Examples

export const MultilineWatermark = () => (
  <Watermark content={['Antsomi', 'Happy Working']}>
    <div style={{ height: 500 }} />
  </Watermark>
)

MultilineWatermark.parameters = {
  docs: {
    description: {
      story:
        'Use `content` to set a string array to specify multi-line text watermark content. ',
    },
  },
}

export const ImageWatermark = () => (
  <Watermark
    height={30}
    width={130}
    image="https://st-home.antsomi.com/wp-content/uploads/2020/04/Antsomi-CDP-365-logo.png"
  >
    <div style={{ height: 500 }} />
  </Watermark>
)

ImageWatermark.parameters = {
  docs: {
    description: {
      story:
        'Specify the image address via `image`. To ensure that the image is high definition and not stretched, set the width and height, and upload at least twice the width and height of the logo image address.',
    },
  },
}

const { Paragraph } = Typography

interface WatermarkConfig {
  content: string
  color: string
  fontSize: number
  zIndex: number
  rotate: number
  gap: [number, number]
  offset?: [number, number]
}

export const CustomConfiguration = () => {
  const [form] = Form.useForm()
  const [config, setConfig] = useState<WatermarkConfig>({
    content: 'Antsomi',
    color: 'rgba(0, 0, 0, 0.15)',
    fontSize: 16,
    zIndex: 11,
    rotate: -22,
    gap: [100, 100],
    offset: undefined,
  })
  const { content, color, fontSize, zIndex, rotate, gap, offset } = config

  const watermarkProps = useMemo(
    () => ({
      content,
      font: {
        color,
        fontSize,
      },
      zIndex,
      rotate,
      gap,
      offset,
    }),
    [config]
  )

  return (
    <div style={{ display: 'flex' }}>
      <Watermark {...watermarkProps}>
        <Typography>
          <Paragraph>
            The light-speed iteration of the digital world makes products more
            complex. However, human consciousness and attention resources are
            limited. Facing this design contradiction, the pursuit of natural
            interaction will be the consistent direction of Ant Design.
          </Paragraph>
          <Paragraph>
            Natural user cognition: According to cognitive psychology, about 80%
            of external information is obtained through visual channels. The
            most important visual elements in the interface design, including
            layout, colors, illustrations, icons, etc., should fully absorb the
            laws of nature, thereby reducing the user&apos;s cognitive cost and
            bringing authentic and smooth feelings. In some scenarios,
            opportunely adding other sensory channels such as hearing, touch can
            create a richer and more natural product experience.
          </Paragraph>
          <Paragraph>
            Natural user behavior: In the interaction with the system, the
            designer should fully understand the relationship between users,
            system roles, and task objectives, and also contextually organize
            system functions and services. At the same time, a series of methods
            such as behavior analysis, artificial intelligence and sensors could
            be applied to assist users to make effective decisions and reduce
            extra operations of users, to save users&apos; mental and physical
            resources and make human-computer interaction more natural.
          </Paragraph>
        </Typography>
        <img
          style={{
            zIndex: 10,
            width: '100%',
            maxWidth: 800,
            position: 'relative',
          }}
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
          alt="示例图片"
        />
      </Watermark>
      <Form
        style={{
          width: 280,
          flexShrink: 0,
          borderLeft: '1px solid #eee',
          paddingLeft: 20,
          marginLeft: 20,
        }}
        form={form}
        layout="vertical"
        initialValues={config}
        onValuesChange={(_, values) => {
          setConfig(values)
        }}
      >
        <Form.Item name="content" label="Content">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="color" label="Color">
          {/* <ColorPicker /> */}
        </Form.Item>
        <Form.Item name="fontSize" label="FontSize">
          <Slider step={1} min={1} max={100} />
        </Form.Item>
        <Form.Item name="zIndex" label="zIndex">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="rotate" label="Rotate">
          <Slider step={1} min={-180} max={180} />
        </Form.Item>
        <Form.Item label="Gap" style={{ marginBottom: 0 }}>
          <Space style={{ display: 'flex' }} align="baseline">
            <Form.Item name={['gap', 0]}>
              <InputNumber placeholder="gapX" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name={['gap', 1]}>
              <InputNumber placeholder="gapY" style={{ width: '100%' }} />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label="Offset" style={{ marginBottom: 0 }}>
          <Space style={{ display: 'flex' }} align="baseline">
            <Form.Item name={['offset', 0]}>
              <InputNumber placeholder="offsetLeft" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name={['offset', 1]}>
              <InputNumber placeholder="offsetTop" style={{ width: '100%' }} />
            </Form.Item>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export const Font: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'color',
      description: `font color	`,
      type: 'string ',
      default: 'rgba(0,0,0,.15)',
    },
    {
      key: '2',
      property: 'fontSize',
      description: `font size`,
      type: 'number',
      default: 16,
    },
    {
      key: '3',
      property: 'fontWeight',
      description: `font weight		`,
      type: 'normal | light | weight | number',
      default: 'normal',
    },
    {
      key: '4',
      property: 'fontFamily',
      description: `font family		`,
      type: 'string',
      default: 'sans-serif	',
    },
    {
      key: '5',
      property: 'fontStyle',
      description: `font style		`,
      type: 'none | normal | italic | oblique',
      default: 'normal',
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

Font.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
}
