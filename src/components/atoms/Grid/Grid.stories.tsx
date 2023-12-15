// Libraries
import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Slider } from 'antd'
import styled from 'styled-components'
import { Row, Col } from './Grid'

// Component
import { Divider } from '../Divider'
import { Table } from '../../organism'
import { THEME } from 'minhquanle-ui/lib/constants/theme'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/lib/constants/storybook'

export default {
  title: ' Atoms/Grid',
  component: Row,
  argTypes: {
    align: {
      name: 'align',
      description: 'Vertical alignment',
      defaultValue: 'top',
      table: {
        type: {
          summary:
            'top | middle | bottom | stretch | {[key in `xs` | `sm` | `md` | `lg` | `xl` | `xxl`]: `top` | `middle` | `bottom` | `stretch`}',
        },
        defaultValue: { summary: 'top' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '24 Grids System.' +
          '\n### Design concept' +
          '\n' +
          '- In most business situations, Ant Design needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 sections.' +
          '\n' +
          '- We name the divided area `box`. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit.<br /> ' +
          '\n' +
          '\n### Outline' +
          '\n' +
          'In the grid system, we define the frame outside the information area based on `row` and `column`, to ensure that every area can have stable arrangement.' +
          '\n' +
          'Following is a brief look at how it works:' +
          '- Establish a set of column in the horizontal space defined by row (abbreviated col).<br /> ' +
          '\n' +
          '- Your content elements should be placed directly in the col, and only col should be placed directly in `row`.<br /> ' +
          '\n' +
          '- The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by `<Col style={style} span={8} />`..<br /> ' +
          '\n' +
          '- If the sum of `col` spans in a `row` are more than 24, then the overflowing `col` as a whole will start a new line arrangement..<br /> ' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Row>

const GridStyle = styled.div`
  text-align: center;
  color: white;
  .antsomi-row {
    background: rgba(128, 128, 128, 0.08);
    margin-bottom: 10px;
    .antsomi-col {
      background-color: #005fb8;
      padding: 21px 0;
    }
    .antsomi-col:nth-child(2n + 1) {
      background-color: #1677ffbf;
    }
  }
`

const style: React.CSSProperties = {
  background: THEME.token?.colorPrimary,
  padding: '12px 0',
  color: 'white',
  textAlign: 'center',
}

const Template: ComponentStory<typeof Row> = () => (
  <GridStyle>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </GridStyle>
)

export const Basic = Template.bind({})

export const GridGutter = () => (
  <>
    <Divider orientation="left">Horizontal</Divider>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Vertical</Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
)

GridGutter.parameters = {
  docs: {
    description: {
      story:
        'You can use the `gutte`r property of `Row` as grid spacing, we recommend set it to `(16 + 8n)` px (`n` stands for natural number)<br/>You can set it to a object like `{ xs: 8, sm: 16, md: 24, lg: 32 }` for responsive design.<br/>You can use an array to set vertical spacing, `[horizontal, vertical]` `[16, { xs: 8, sm: 16, md: 24, lg: 32 }]`.',
    },
  },
}

export const ColumnOffset = () => (
  <GridStyle>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </GridStyle>
)

ColumnOffset.parameters = {
  docs: {
    description: {
      story:
        '`offset` can set the column to the right side. For example, using `offset = {4}` can set the element shifted to the right four columns width.',
    },
  },
}

export const GridSort = () => (
  <GridStyle>
    <Row>
      <Col span={18} push={6}>
        col-18 col-push-6
      </Col>
      <Col span={6} pull={18}>
        col-6 col-pull-18
      </Col>
    </Row>
  </GridStyle>
)

GridSort.parameters = {
  docs: {
    description: {
      story:
        'By using `push` and `pull` class you can easily change column order.',
    },
  },
}

export const Typesetting = () => (
  <GridStyle>
    <Divider orientation="left">sub-element align left</Divider>
    <Row justify="start">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align center</Divider>
    <Row justify="center">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align right</Divider>
    <Row justify="end">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element monospaced arrangement</Divider>
    <Row justify="space-between">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align full</Divider>
    <Row justify="space-around">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align evenly</Divider>
    <Row justify="space-evenly">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
  </GridStyle>
)

Typesetting.parameters = {
  docs: {
    description: {
      story:
        'Child elements depending on the value of the `start`, `center`, `end`, `space-between`, `space-around` and `space-evenly`, which are defined in its parent node typesetting mode.',
    },
  },
}

const DemoBox: React.FC<{ children: React.ReactNode; value: number }> = (
  props
) => {
  const { value, children } = props
  const boxStyle: React.CSSProperties = {
    ...style,
    height: `${value}px`,
  }

  return <p style={boxStyle}>{children}</p>
}

export const Alignment = () => (
  <>
    <Divider orientation="left">Align Top</Divider>
    <Row justify="center" align="top">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider orientation="left">Align Middle</Divider>
    <Row justify="space-around" align="middle">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider orientation="left">Align Bottom</Divider>
    <Row justify="space-between" align="bottom">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
  </>
)

Alignment.parameters = {
  docs: {
    description: {
      story: 'Child elements vertically aligned.',
    },
  },
}

export const Order = () => (
  <GridStyle>
    <Divider orientation="left">Normal</Divider>
    <Row>
      <Col span={6} order={4}>
        1 col-order-4
      </Col>
      <Col span={6} order={3}>
        2 col-order-3
      </Col>
      <Col span={6} order={2}>
        3 col-order-2
      </Col>
      <Col span={6} order={1}>
        4 col-order-1
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row>
      <Col
        span={6}
        xs={{ order: 1 }}
        sm={{ order: 2 }}
        md={{ order: 3 }}
        lg={{ order: 4 }}
      >
        1 col-order-responsive
      </Col>
      <Col
        span={6}
        xs={{ order: 2 }}
        sm={{ order: 1 }}
        md={{ order: 4 }}
        lg={{ order: 3 }}
      >
        2 col-order-responsive
      </Col>
      <Col
        span={6}
        xs={{ order: 3 }}
        sm={{ order: 4 }}
        md={{ order: 2 }}
        lg={{ order: 1 }}
      >
        3 col-order-responsive
      </Col>
      <Col
        span={6}
        xs={{ order: 4 }}
        sm={{ order: 3 }}
        md={{ order: 1 }}
        lg={{ order: 2 }}
      >
        4 col-order-responsive
      </Col>
    </Row>
  </GridStyle>
)

Order.parameters = {
  docs: {
    description: {
      story: 'To change the element sort by `order`.',
    },
  },
}

export const FlexStretch = () => (
  <GridStyle>
    <Divider orientation="left">Percentage columns</Divider>
    <Row>
      <Col flex={2}>2 / 5</Col>
      <Col flex={3}>3 / 5</Col>
    </Row>
    <Divider orientation="left">Fill rest</Divider>
    <Row>
      <Col flex="100px">100px</Col>
      <Col flex="auto">Fill Rest</Col>
    </Row>
    <Divider orientation="left">Raw flex style</Divider>
    <Row>
      <Col flex="1 1 200px">1 1 200px</Col>
      <Col flex="0 1 300px">0 1 300px</Col>
    </Row>

    <Row wrap={false}>
      <Col flex="none">
        <div style={{ padding: '0 16px' }}>none</div>
      </Col>
      <Col flex="auto">auto with no-wrap</Col>
    </Row>
  </GridStyle>
)

FlexStretch.parameters = {
  docs: {
    description: {
      story: 'Col provides `flex` prop to support fill rest..',
    },
  },
}

export const Responsive = () => (
  <GridStyle>
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        Col
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        Col
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        Col
      </Col>
    </Row>
  </GridStyle>
)

Responsive.parameters = {
  docs: {
    description: {
      story:
        'Referring to the Bootstrap responsive design, here preset six dimensions: `xs` `sm` `md` `lg` `xl` `xxl`.',
    },
  },
}

export const MoreResponsive = () => (
  <GridStyle>
    <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
    </Row>
  </GridStyle>
)

MoreResponsive.parameters = {
  docs: {
    description: {
      story:
        '`span` `pull` `push` `offset` `order` property can be embedded into `xs` `sm` `md` `lg` `xl` `xxl` properties to use, where `xs={6}` is equivalent to `xs={{span: 6}}`.',
    },
  },
}

export const Playground = () => {
  const gutters: Record<PropertyKey, number> = {}
  const vgutters: Record<PropertyKey, number> = {}
  const colCounts: Record<PropertyKey, number> = {}

  ;[8, 16, 24, 32, 40, 48].forEach((value, i) => {
    gutters[i] = value
  })
  ;[8, 16, 24, 32, 40, 48].forEach((value, i) => {
    vgutters[i] = value
  })
  ;[2, 3, 4, 6, 8, 12].forEach((value, i) => {
    colCounts[i] = value
  })
  const [gutterKey, setGutterKey] = useState(1)
  const [vgutterKey, setVgutterKey] = useState(1)
  const [colCountKey, setColCountKey] = useState(2)

  const cols: any[] = []
  const colCount = colCounts[colCountKey]
  let colCode = ''
  for (let i = 0; i < colCount; i++) {
    cols.push(
      <Col key={i.toString()} span={24 / colCount}>
        Column
      </Col>
    )
    colCode += `  <Col span={${24 / colCount}}  />\n`
  }

  return (
    <>
      <span>Horizontal Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(gutters).length - 1}
          value={gutterKey}
          onChange={setGutterKey}
          marks={gutters}
          step={null}
        />
      </div>
      <span>Vertical Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(vgutters).length - 1}
          value={vgutterKey}
          onChange={setVgutterKey}
          marks={vgutters}
          step={null}
        />
      </div>
      <span>Column Count:</span>
      <div style={{ width: '50%', marginBottom: 48 }}>
        <Slider
          min={0}
          max={Object.keys(colCounts).length - 1}
          value={colCountKey}
          onChange={setColCountKey}
          marks={colCounts}
          step={null}
        />
      </div>
      <GridStyle>
        <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
          {cols}
          {cols}
        </Row>
      </GridStyle>
      Another Row:
      <GridStyle>
        <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
      </GridStyle>
      <pre className="demo-code">{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}\n${colCode}</Row>`}</pre>
      <pre className="demo-code">{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
    </>
  )
}

Playground.parameters = {
  docs: {
    description: {
      story: 'A simple playground for column count and gutter.',
    },
  },
}

export const RowProps: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'align',
      description: `Vertical alignment`,
      type: 'top | middle | bottom | stretch | {[key in `xs` | `sm` | `md` | `lg` | `xl` | `xxl`]: `top` | `middle` | `bottom` | `stretch`}',
      default: 'top',
    },
    {
      key: '2',
      property: 'gutter',
      description:
        'Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time [horizontal, vertical]',
      type: 'number | object | array',
      default: 0,
    },
    {
      key: '3 ',
      property: 'justify',
      description: 'Horizontal arrangement',
      type: 'start | end | center | space-around | space-between | space-evenly | {[key in `xs` | `sm` | `md` | `lg` | `xl` | `xxl`]: `start` | `end` | `center` | `space-around` | `space-between` | `space-evenly`}',
      default: 'start',
    },
    {
      key: '4',
      property: 'wrap',
      description: 'Auto wrap line',
      type: 'boolean',
      default: 'true',
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

RowProps.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
}

export const ColProps: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'flex',
      description: `Flex layout style`,
      type: 'string | number',
      default: '-',
    },
    {
      key: '2',
      property: 'offset',
      description: 'The number of cells to offset Col from the left',
      type: 'number',
      default: 0,
    },
    {
      key: '3',
      property: 'order',
      description: 'Raster order',
      type: 'number',
      default: 0,
    },
    {
      key: '4',
      property: 'pull',
      description: 'The number of cells that raster is moved to the left',
      type: 'number',
      default: '0',
    },
    {
      key: '5',
      property: 'push',
      description: 'The number of cells that raster is moved to the right',
      type: 'number',
      default: '0',
    },
    {
      key: '6',
      property: 'span',
      description:
        'Raster number of cells to occupy, 0 corresponds to display: none',
      type: 'number',
      default: 'none',
    },
    {
      key: '7',
      property: 'xs',
      description:
        'screen < 576px and also default setting, could be a span value or an object containing above props',
      type: 'number | object',
      default: '-',
    },
    {
      key: '8',
      property: 'sm',
      description:
        'screen ≥ 576px, could be a span value or an object containing above props',
      type: 'number | object',
      default: '-',
    },
    {
      key: '9',
      property: 'md',
      description:
        'screen ≥ 768px, could be a span value or an object containing above props',
      type: 'number | object',
      default: '-',
    },
    {
      key: '9',
      property: 'md',
      description:
        'screen ≥ 768px, could be a span value or an object containing above props',
      type: 'number | object',
      default: '-',
    },
    {
      key: '10',
      property: 'lg',
      description:
        'screen ≥ 992px, could be a span value or an object containing above props',
      type: 'number | object',
      default: '-',
    },
    {
      key: '11',
      property: 'xl',
      description:
        'screen ≥ 1200px, could be a span value or an object containing above props',
      type: 'number | object',
      default: '-',
    },
    {
      key: '12',
      property: 'xxl',
      description:
        'screen ≥ 1600px, could be a span value or an object containing above props',
      type: 'number | object',
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

ColProps.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
}
