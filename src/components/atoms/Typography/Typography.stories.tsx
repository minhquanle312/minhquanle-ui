// Libraries
import React, { useMemo, useState } from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

// Antd
import { Divider, Radio, Space } from 'antd'
import {
  HighlightOutlined,
  SmileOutlined,
  CheckOutlined,
  SmileFilled,
} from '@ant-design/icons'

// Components
import { Typography } from './Text'
import { Table } from '../../organism'
import { Tag } from '../Tag'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/es/constants'

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    code: {
      name: 'code',
      defaultValue: false,
      description: 'Code style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    copyable: {
      name: 'copyable',
      defaultValue: false,
      description: 'Whether to be copyable, customize it via setting an object',
      table: {
        type: {
          summary: 'boolean | copyable',
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    delete: {
      name: 'delete',
      defaultValue: false,
      description: 'Deleted line style',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'Disabled content',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    editable: {
      name: 'editable',
      defaultValue: false,
      description: 'If editable. Can control edit state when is object',
      table: {
        type: {
          summary: `boolean | editable`,
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    ellipsis: {
      name: 'ellipsis',
      defaultValue: false,
      description: `Display ellipsis when text overflows，can't configure expandable、rows and onExpand by using object. Diff with Typography.Paragraph, Text do not have 100% width style which means it will fix width on the first ellipsis. If you want to have responsive ellipsis, please set width manually`,
      table: {
        type: {
          summary: `boolean | Omit<ellipsis, 'expandable' | 'rows' | 'onExpand'>`,
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    keyboard: {
      name: 'keyboard',
      defaultValue: false,
      description: `Keyboard style`,
      table: {
        type: {
          summary: `boolean`,
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    mark: {
      name: 'mark',
      defaultValue: false,
      description: `Marked style`,
      table: {
        type: {
          summary: `boolean`,
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      name: 'onClick',
      defaultValue: undefined,
      description: `Set the handler to handle click event`,
      table: {
        type: {
          summary: `(event) => void`,
        },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    strong: {
      name: 'strong',
      defaultValue: false,
      description: `Bold style`,
      table: {
        type: {
          summary: `boolean`,
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    italic: {
      name: 'italic',
      defaultValue: false,
      description: `Italic style`,
      table: {
        type: {
          summary: `boolean`,
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    type: {
      name: 'type',
      defaultValue: undefined,
      description: 'Content type',
      table: {
        type: {
          summary: `secondary | success | warning | danger`,
        },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'select',
      },
      options: ['secondary', 'success', 'warning', 'danger'],
    },
    underline: {
      name: 'underline',
      defaultValue: false,
      description: 'Underlined style',
      table: {
        type: {
          summary: `boolean`,
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Basic text writing, including headings, body text, lists, and more.
- When need to display a title or paragraph contents in Articles/Blogs/Notes.
- When you need copyable/editable/ellipsis texts.
        `,
      },
    },
  },
} as ComponentMeta<typeof Typography>

// Default
const { Title, Paragraph, Text, Link } = Typography

const Template: ComponentStory<typeof Typography> = (args) => (
  <>
    <Title {...args}>Typography Title</Title>
    <Paragraph {...args}>Typography Paragraph</Paragraph>
    <Text {...args}>Typography Text</Text>
    <br />
    <br />
    <Link {...args}>Typography Link</Link>
  </>
)
export const Default = Template.bind({})

Default.args = {}

// Examples
export const Basic: ComponentStory<any> = () => {
  const { Title, Paragraph, Text, Link } = Typography

  const blockContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam repellendus assumenda laudantium velit non iure officiis excepturi cupiditate modi ea cum, quisquam ratione voluptatibus. Non esse ipsam sint possimus?'
  return (
    <Typography>
      <Title>Introduction</Title>
      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design
        language for background applications, is refined by Ant UED Team, which
        aims to{' '}
        <Text strong>
          uniform the user interface specs for internal background projects,
          lower the unnecessary cost of design differences and implementation
          and liberate the resources of design and front-end development
        </Text>
        .
      </Paragraph>
      <Title level={2}>Guidelines and Resources</Title>
      <Paragraph>
        We supply a series of design principles, practical patterns and high
        quality design resources (<Text code>Sketch</Text> and{' '}
        <Text code>Axure</Text>), to help people create their product prototypes
        beautifully and efficiently.
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Link href="/docs/spec/proximity">Principles</Link>
          </li>
          <li>
            <Link href="/docs/spec/overview">Patterns</Link>
          </li>
          <li>
            <Link href="/docs/resources">Resource Download</Link>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        Press <Text keyboard>Esc</Text> to exit...
      </Paragraph>

      <Divider />

      <Title>molestiae</Title>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ut
        deserunt esse, veniam officiis consequatur quas, dolore mollitia
        distinctio exercitationem saepe dolorum dolores molestiae odio,
        accusamus nam et optio sed.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        itaque, repellat veritatis pariatur modi fugiat tempora quibusdam quas
        eos consequuntur nam quaerat dicta, dolore at quo id cum esse quidem.
        Ant Design。
        <Text mark>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          minima dolorem eum perferendis ipsa incidunt corporis blanditiis
          aliquid nulla, dolorum recusandae inventore dolore repellat
          repudiandae totam molestiae necessitatibus ipsum saepe.
        </Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt,
        perferendis velit facere nam ullam eaque similique repellendus ex
        praesentium architecto totam. Quas aspernatur cum id ea consequuntur
        dolorum doloremque.
        <Text strong>dolor sit amet consectetur</Text>。
      </Paragraph>
      <Title level={2}>nam ullam eaque</Title>
      <Paragraph>
        Dolorum recusandae inventore dolore repellat repudiandae totam molestiae
        necessitatibus ipsum saepe（<Text code>Sketch</Text> repellat
        <Text code>Axure</Text>
        ），Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        itaque, repellat veritatis pariatur modi fugiat tempora quibusdam
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Link href="/docs/spec/proximity-cn">quibusdam</Link>
          </li>
          <li>
            <Link href="/docs/spec/overview-cn">tempora</Link>
          </li>
          <li>
            <Link href="/docs/resources-cn">fugiat</Link>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        <blockquote>{blockContent}</blockquote>
        <pre>{blockContent}</pre>
      </Paragraph>

      <Paragraph>
        按<Text keyboard>Esc</Text>ipsum
      </Paragraph>
    </Typography>
  )
}

Basic.parameters = {
  docs: {
    description: {
      story: 'Display the document sample.',
    },
  },
}

export const TitleComponent: ComponentStory<any> = () => {
  const { Title } = Typography
  return (
    <>
      <Title>h1. Ant Design</Title>
      <Title level={2}>h2. Ant Design</Title>
      <Title level={3}>h3. Ant Design</Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>
    </>
  )
}

TitleComponent.parameters = {
  docs: {
    description: {
      story: 'Display title in different level.',
    },
  },
}

export const TextAndLinkComponent: ComponentStory<any> = () => {
  const { Text, Link } = Typography
  return (
    <Space direction="vertical">
      <Text>Ant Design (default)</Text>
      <Text type="secondary">Ant Design (secondary)</Text>
      <Text type="success">Ant Design (success)</Text>
      <Text type="warning">Ant Design (warning)</Text>
      <Text type="danger">Ant Design (danger)</Text>
      <Text disabled>Ant Design (disabled)</Text>
      <Text mark>Ant Design (mark)</Text>
      <Text code>Ant Design (code)</Text>
      <Text keyboard>Ant Design (keyboard)</Text>
      <Text underline>Ant Design (underline)</Text>
      <Text delete>Ant Design (delete)</Text>
      <Text strong>Ant Design (strong)</Text>
      <Text italic>Ant Design (italic)</Text>
      <Link href="https://ant.design" target="_blank">
        Ant Design (Link)
      </Link>
    </Space>
  )
}

TextAndLinkComponent.parameters = {
  docs: {
    description: {
      story: 'Display title in different level.',
    },
  },
}

export const Interactive: ComponentStory<any> = () => {
  const { Paragraph } = Typography
  const [editableStr, setEditableStr] = useState('This is an editable text.')
  const [editableStrWithSuffix, setEditableStrWithSuffix] = useState(
    'This is a loooooooooooooooooooooooooooooooong editable text with suffix.'
  )
  const [editableStrWithSuffixStartPart, editableStrWithSuffixSuffixPart] =
    useMemo(
      () => [
        editableStrWithSuffix.slice(0, -12),
        editableStrWithSuffix.slice(-12),
      ],
      [editableStrWithSuffix]
    )
  const [customIconStr, setCustomIconStr] = useState(
    'Custom Edit icon and replace tooltip text.'
  )
  const [clickTriggerStr, setClickTriggerStr] = useState(
    'Text or icon as trigger - click to start editing.'
  )
  const [chooseTrigger, setChooseTrigger] = useState<('icon' | 'text')[]>([
    'icon',
  ])
  const [customEnterIconStr, setCustomEnterIconStr] = useState(
    'Editable text with a custom enter icon in edit field.'
  )
  const [noEnterIconStr, setNoEnterIconStr] = useState(
    'Editable text with no enter icon in edit field.'
  )
  const [hideTooltipStr, setHideTooltipStr] = useState('Hide Edit tooltip.')
  const [lengthLimitedStr, setLengthLimitedStr] = useState(
    'This is an editable text with limited length.'
  )

  const radioToState = (input: string): ('icon' | 'text')[] => {
    switch (input) {
      case 'text':
        return ['text']
      case 'both':
        return ['icon', 'text']
      case 'icon':
      default:
        return ['icon']
    }
  }

  const stateToRadio = useMemo<string>(() => {
    if (chooseTrigger.includes('text')) {
      return chooseTrigger.includes('icon') ? 'both' : 'text'
    }
    return 'icon'
  }, [chooseTrigger])

  return (
    <>
      <Paragraph editable={{ onChange: setEditableStr }}>
        {editableStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setEditableStrWithSuffix,
          text: editableStrWithSuffix,
        }}
        ellipsis={{
          suffix: editableStrWithSuffixSuffixPart,
        }}
      >
        {editableStrWithSuffixStartPart}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setCustomIconStr,
        }}
      >
        {customIconStr}
      </Paragraph>
      Trigger edit with:{' '}
      <Radio.Group
        onChange={(e) => setChooseTrigger(radioToState(e.target.value))}
        value={stateToRadio}
      >
        <Radio value="icon">icon</Radio>
        <Radio value="text">text</Radio>
        <Radio value="both">both</Radio>
      </Radio.Group>
      <Paragraph
        editable={{
          tooltip: 'click to edit text',
          onChange: setClickTriggerStr,
          triggerType: chooseTrigger,
        }}
      >
        {clickTriggerStr}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setCustomEnterIconStr,
          enterIcon: <CheckOutlined />,
        }}
      >
        {customEnterIconStr}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setNoEnterIconStr,
          enterIcon: null,
        }}
      >
        {noEnterIconStr}
      </Paragraph>
      <Paragraph editable={{ tooltip: false, onChange: setHideTooltipStr }}>
        {hideTooltipStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setLengthLimitedStr,
          maxLength: 50,
          autoSize: { maxRows: 5, minRows: 3 },
        }}
      >
        {lengthLimitedStr}
      </Paragraph>
      <Typography.Title editable level={1} style={{ margin: 0 }}>
        h1. Ant Design
      </Typography.Title>
      <Typography.Title editable level={2} style={{ margin: 0 }}>
        h2. Ant Design
      </Typography.Title>
      <Typography.Title editable level={3} style={{ margin: 0 }}>
        h3. Ant Design
      </Typography.Title>
      <Typography.Title editable level={4} style={{ margin: 0 }}>
        h4. Ant Design
      </Typography.Title>
      <Typography.Title editable level={5} style={{ margin: 0 }}>
        h5. Ant Design
      </Typography.Title>
      <Divider />
      <Paragraph copyable>This is a copyable text.</Paragraph>
      <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>
        Replace copy text.
      </Paragraph>
      <Paragraph
        copyable={{
          icon: [
            <SmileOutlined key="copy-icon" />,
            <SmileFilled key="copied-icon" />,
          ],
          tooltips: ['click here', 'you clicked!!'],
        }}
      >
        Custom Copy icon and replace tooltips text.
      </Paragraph>
      <Paragraph copyable={{ tooltips: false }}>Hide Copy tooltips.</Paragraph>
    </>
  )
}

Interactive.parameters = {
  docs: {
    description: {
      story:
        'Provide additional interactive capacity of editable and copyable.',
    },
  },
}

export const CopyableAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'format',
      description: `The Mime Type of the text`,
      type: `'text/plain' | 'text/html'`,
      default: '-',
    },
    {
      key: '2',
      property: 'icon',
      description: 'Custom copy icon: [copyIcon, copiedIcon]',
      type: '[ReactNode, ReactNode]',
      default: '-',
    },
    {
      key: '3',
      property: 'text',
      description: 'The text to copy',
      type: 'string',
      default: '-',
    },
    {
      key: '4',
      property: 'tooltips',
      description: 'Custom tooltip text, hide when it is false',
      type: '[ReactNode, ReactNode]',
      default: (
        <>
          [&nbsp;<Tag style={{ marginRight: '0' }}>Copy</Tag>&nbsp;,&nbsp;
          <Tag style={{ marginRight: '0' }}>Copied</Tag>&nbsp;]
        </>
      ),
    },
    {
      key: '5',
      property: 'onCopy',
      description: 'Called when copied text',
      type: 'function',
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

CopyableAPI.parameters = {
  docs: {
    description: {
      story: `
      {
        text: string,
        onCopy: function(event),
        icon: ReactNode,
        tooltips: false | [ReactNode, ReactNode],
        format: 'text/plain' | 'text/html',
      }
      `,
    },
    source: {
      code: null,
    },
  },
}

export const EditableAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'autoSize',
      description: (
        <>
          <Tag>autoSize</Tag> attribute of textarea
        </>
      ),
      type: 'boolean | { minRows: number, maxRows: number }',
      default: '-',
    },
    {
      key: '2',
      property: 'editing',
      description: 'Whether to be editable',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '3',
      property: 'icon',
      description: 'Custom editable icon',
      type: 'ReactNode',
      default: '<EditOutlined />',
    },
    {
      key: '4',
      property: 'maxLength',
      description: (
        <>
          <Tag>maxLength</Tag> attribute of textarea
        </>
      ),
      type: 'number',
      default: '-',
    },
    {
      key: '5',
      property: 'tooltip',
      description: 'Custom tooltip text, hide when it is false',
      type: 'boolean | ReactNode',
      default: <Tag>Edit</Tag>,
    },
    {
      key: '6',
      property: 'text',
      description:
        'Edit text, specify the editing content instead of using the children implicitly',
      type: 'string',
      default: '-',
    },
    {
      key: '7',
      property: 'onChange',
      description: 'Called when input at textarea',
      type: 'function(value: string)',
      default: '-',
    },
    {
      key: '8',
      property: 'onCancel',
      description: 'Called when type ESC to exit editable state',
      type: 'function',
      default: '-',
    },
    {
      key: '9',
      property: 'onStart',
      description: 'Called when enter editable state',
      type: 'function',
      default: '-',
    },
    {
      key: '10',
      property: 'onEnd',
      description: 'Called when type ENTER to exit editable state',
      type: 'function',
      default: '-',
    },
    {
      key: '11',
      property: 'triggerType',
      description:
        'Edit mode trigger - icon, text or both (not specifying icon as trigger hides it)',
      type: (
        <>
          Array&lt;
          <Tag style={{ marginRight: '0' }}>icon</Tag>&nbsp;|&nbsp;
          <Tag style={{ marginRight: '0' }}>text</Tag>
          &gt;
        </>
      ),
      default: '-',
    },
    {
      key: '12',
      property: 'enterIcon',
      description: (
        <>
          Custom &quot;enter&quot; icon in the edit field (passing{' '}
          <Tag style={{ marginRight: '0' }}>null</Tag> removes the icon)
        </>
      ),
      type: 'ReactNode',
      default: <Tag>&lt;EnterOutlined &frasl; &gt;</Tag>,
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

EditableAPI.parameters = {
  docs: {
    description: {
      story: `
      {
        icon: ReactNode,
        tooltip: boolean | ReactNode,
        editing: boolean,
        maxLength: number,
        autoSize: boolean | { minRows: number, maxRows: number },
        text: string,
        onChange: function(string),
        onCancel: function,
        onStart: function,
        onEnd: function,
        triggerType: ('icon' | 'text')[],
        enterIcon: ReactNode,
      }
      `,
    },
    source: {
      code: null,
    },
  },
}

export const EllipsisAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'expandable',
      description: 'Whether to be expandable',
      type: 'boolean',
      default: '-',
    },
    {
      key: '2',
      property: 'rows',
      description: 'Max rows of content',
      type: 'number',
      default: '-',
    },
    {
      key: '3',
      property: 'suffix',
      description: 'Suffix of ellipsis content',
      type: 'string',
      default: '-',
    },
    {
      key: '4',
      property: 'symbol',
      description: 'Custom description of ellipsis',
      type: 'ReactNode',
      default: <Tag>Expand</Tag>,
    },
    {
      key: '5',
      property: 'tooltip',
      description: 'Show tooltip when ellipsis',
      type: (
        <>
          boolean | ReactNode | <a>TooltipProps</a>
        </>
      ),
      default: '-',
    },
    {
      key: '6',
      property: 'onEllipsis',
      description: 'Called when enter or leave ellipsis state',
      type: 'function(ellipsis)',
      default: '-',
    },
    {
      key: '7',
      property: 'onExpand',
      description: 'Called when expand content',
      type: 'function(event)',
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

EllipsisAPI.parameters = {
  docs: {
    description: {
      story: `
      {
        rows: number,
        expandable: boolean,
        suffix: string,
        symbol: ReactNode,
        tooltip: boolean | ReactNode | TooltipProps,
        onExpand: function(event),
        onEllipsis: function(ellipsis),
      }
      `,
    },
    source: {
      code: null,
    },
  },
}
