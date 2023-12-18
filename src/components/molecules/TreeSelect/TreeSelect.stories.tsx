// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { RadioChangeEvent, Switch, TreeSelectProps } from 'antd'
import { CarryOutOutlined } from '@ant-design/icons'
import { DefaultOptionType } from 'antd/es/select'
import { SelectCommonPlacement } from 'antd/es/_util/motion'

// Components
import { TreeSelect } from './TreeSelect'
import { Space, Radio } from '../../atoms'
import { Table } from '../../organism'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/es/constants'

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
]

export default {
  title: 'Molecules/TreeSelect',
  component: TreeSelect,
  argTypes: {
    allowClear: {
      name: 'allowClear',
      description: 'Customize clear icon',
      table: {
        type: { summary: 'boolean | { clearIcon?: ReactNode }' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    autoClearSearchValue: {
      name: 'autoClearSearchValue',
      description:
        'If auto clear search input value when multiple select is selected/deselected',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    bordered: {
      name: 'bordered',
      defaultValue: false,
      description: 'Whether has border style',
      table: {
        type: { summary: 'boolean ' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultValue: {
      name: 'defaultValue',
      description: 'To set the initial selected treeNode(s)',
      table: {
        type: { summary: 'string | string[] ' },
      },
      control: 'text',
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'Disabled or not',
      table: {
        type: { summary: 'boolean ' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    popupClassName: {
      name: 'popupClassName',
      defaultValue: false,
      description: 'The className of dropdown menu',
      table: {
        type: { summary: 'string ' },
      },
      control: 'text',
    },
    popupMatchSelectWidth: {
      name: 'popupMatchSelectWidth',
      defaultValue: false,
      description:
        'Determine whether the popup menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll',
      table: {
        type: { summary: 'boolean | number ' },
        defaultValue: true,
      },
      control: {
        type: 'boolean',
      },
    },
    dropdownRender: {
      name: 'dropdownRender',
      defaultValue: false,
      description: 'Customize dropdown content',
      table: {
        type: { summary: '(originNode: ReactNode, props) => ReactNode ' },
      },
      control: null,
    },
    dropdownStyle: {
      name: 'dropdownStyle',
      description: 'To set the style of the dropdown menu',
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: 'object',
    },
    fieldNames: {
      name: 'fieldNames	',
      description: 'Customize node label, value, children field name',
      table: {
        type: { summary: 'object' },
        defaultValue: {
          summary: '{ label: label, value: value, children: children }',
        },
      },
      control: 'object',
    },
    filterTreeNode: {
      name: 'filterTreeNode	',
      description:
        'Whether to filter treeNodes by input value. The value of `treeNodeFilterProp` is used for filtering by default',
      table: {
        type: {
          summary:
            'boolean | function(inputValue: string, treeNode: TreeNode) (should return boolean)',
        },
        defaultValue: { summary: 'function' },
      },
    },
    getPopupContainer: {
      name: 'getPopupContainer	',
      description:
        'To set the container of the dropdown menu. The default is to create a `div `element in `body`, you can reset it to the scrolling area and make a relative reposition.',
      table: {
        type: {
          summary: 'function(triggerNode)',
        },
        defaultValue: { summary: 'function' },
      },
    },
    labelInValue: {
      name: 'labelInValue',
      defaultValue: false,
      description:
        'Whether to embed label in value, turn the format of value from `string` to {value: string, label: ReactNode, halfChecked: string[]}',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    listHeight: {
      name: 'listHeight',
      defaultValue: 256,
      description: 'Config popup height',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 256 },
      },
      control: {
        type: 'number',
      },
    },
    loadData: {
      name: 'loadData',
      description:
        'Load data asynchronously. Will not load when filtering. Check FAQ for more info',
      table: {
        type: { summary: 'function(node)' },
      },
      control: null,
    },
    maxTagCount: {
      name: 'maxTagCount',
      description:
        'Max tag count to show. `responsive` will cost render performance',
      table: {
        type: { summary: 'number | responsive	' },
      },
      control: null,
    },
    maxTagPlaceholder: {
      name: 'maxTagPlaceholder	',
      description: 'Placeholder for not showing tags',
      table: {
        type: { summary: 'ReactNode | function(omittedValues)	' },
      },
      control: null,
    },
    maxTagTextLength: {
      name: 'maxTagTextLength',
      description: 'Max tag text length to show',
      table: {
        type: { summary: 'number	' },
      },
      control: {
        type: 'number',
      },
    },
    multiple: {
      name: 'multiple',
      defaultValue: false,
      description:
        'Support multiple or not, will be `true` when enable `treeCheckable`',
      table: {
        type: { summary: 'boolean ' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    notFoundContent: {
      name: 'notFoundContent',
      description: 'Specify content to show when no result matches',
      table: {
        type: { summary: 'ReactNode ' },
        defaultValue: { summary: '`Not Found	`' },
      },
      control: null,
    },
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder of the select input',
      table: {
        type: { summary: 'string  ' },
      },
      control: 'text',
    },
    placement: {
      name: 'placement',
      description: 'The position where the selection box pops up	',
      table: {
        type: { summary: 'bottomLeft | bottomRight | topLeft | topRight' },
        defaultValue: { summary: 'bottomLeft' },
      },
      defaultValue: 'bottomLeft',
      control: {
        type: 'select',
        options: {
          bottomLeft: 'bottomLeft',
          bottomRight: 'bottomRight',
          topLeft: 'topLeft',
          topRight: 'topRight',
        },
      },
    },
    searchValue: {
      name: 'searchValue',
      description: 'Work with `onSearch` to make search value controlled	',
      table: {
        type: { summary: 'string  ' },
      },
      control: 'text',
    },
    showCheckedStrategy: {
      name: 'showCheckedStrategy',
      description:
        'The way show selected item in box when treeCheckable set. Default: just show child nodes. TreeSelect.SHOW_ALL: show all checked treeNodes (include parent treeNode). TreeSelect.SHOW_PARENT: show checked treeNodes (just show parent treeNode)	',
      table: {
        type: { summary: 'SHOW_ALL |SHOW_PARENT | SHOW_CHILD' },
        defaultValue: { summary: 'SHOW_CHILD	' },
      },
      defaultValue: 'SHOW_CHILD	',
      control: {
        type: 'select',
        options: {
          SHOW_ALL: 'SHOW_ALL',
          SHOW_PARENT: 'SHOW_PARENT',
          SHOW_CHILD: 'SHOW_CHILD',
        },
      },
    },
    showSearch: {
      name: 'showSearch',
      defaultValue: true,
      description: 'Support search or not	',
      table: {
        type: { summary: 'boolean ' },
        defaultValue: { summary: 'single: false | multiple: true' },
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'size',
      description: 'To set the size of the select input	',
      table: {
        type: { summary: 'large | middle | small' },
      },
      control: {
        type: 'select',
        options: {
          large: 'large',
          middle: 'middle',
          small: 'small',
        },
      },
    },
    status: {
      name: 'status',
      description: 'Set validation status	',
      table: {
        type: { summary: `'error '| 'warning'` },
      },
      control: null,
    },
    suffixIcon: {
      name: 'suffixIcon',
      description: 'The custom suffix icon	',
      table: {
        type: { summary: `ReactNode` },
        defaultValue: { summary: '<DownOutlined/>' },
      },
      control: null,
    },
    switcherIcon: {
      name: 'switcherIcon',
      description: 'Customize collapse/expand icon of tree node	',
      table: {
        type: {
          summary: `ReactNode | ((props: AntTreeNodeProps) => ReactNode)`,
        },
      },
      control: null,
    },
    tagRender: {
      name: 'tagRender',
      description: 'Customize tag render when `multiple`	',
      table: {
        type: { summary: `(props) => ReactNode` },
      },
      control: null,
    },
    treeCheckable: {
      name: 'treeCheckable',
      defaultValue: false,
      description: 'Whether to show checkbox on the treeNodes',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    treeCheckStrictly: {
      name: 'treeCheckStrictly',
      defaultValue: false,
      description:
        'Whether to check nodes precisely (in the `checkable` mode), means parent and child nodes are not associated, and it will make `labelInValue` be true',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    treeDataSimpleMode: {
      name: 'treeDataSimpleMode',
      description:
        'Enable simple mode of `treeData`. Changes the treeData schema to: [{id:1, pId:0, value:1, title:"test1",...},...] where pId is parent nodes id). It is possible to replace the default `id` and `pId` keys by providing object to `treeDataSimpleMode`',
      table: {
        type: {
          summary:
            'boolean | object<{ id: string, pId: string, rootPId: string }>',
        },
        defaultValue: { summary: false },
      },
      control: {
        type: 'object',
      },
    },
    treeDefaultExpandAll: {
      name: 'treeDefaultExpandAll',
      defaultValue: false,
      description: 'Whether to expand all treeNodes by default',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    treeDefaultExpandedKeys: {
      name: 'treeDefaultExpandedKeys',
      description: 'Default expanded treeNodes',
      table: {
        type: { summary: 'string[]' },
      },
      control: null,
    },
    treeExpandAction: {
      name: 'treeExpandAction',
      description:
        'Tree title open logic when click, optional: false |` click` | `doubleClick`',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'text',
      },
    },
    treeExpandedKeys: {
      name: 'treeExpandedKeys',
      description: 'Set expanded keys',
      table: {
        type: { summary: 'string[]' },
      },
      control: null,
    },
    treeIcon: {
      name: 'treeIcon	',
      defaultValue: false,
      description:
        'Shows the icon before a TreeNodes title. There is no default style; you must set a custom style for it if set to `true`',
      table: {
        type: { summary: 'boolean ' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    treeLoadedKeys: {
      name: 'treeLoadedKeys	',
      description:
        '(Controlled) Set loaded tree nodes, work with `loadData` only',
      table: {
        type: { summary: 'string[] ' },
        defaultValue: { summary: '[]' },
      },
      control: {
        type: 'array',
      },
    },
    treeLine: {
      name: 'treeLine	',
      description:
        'Show the line. Ref [Tree - showLine](https://ant.design/components/tree#components-tree-demo-line)',
      table: {
        type: { summary: 'boolean | object' },
        defaultValue: { summary: false },
      },
      defaultValue: false,
      control: null,
    },
    treeNodeFilterProp: {
      name: 'treeNodeFilterProp	',
      description:
        'Will be used for filtering if `filterTreeNode` returns true',
      table: {
        type: { summary: 'string' },
      },
      defaultValue: 'value',
      control: {
        type: 'text',
      },
    },
    treeNodeLabelProp: {
      name: 'treeNodeLabelProp	',
      description: 'Will render as content of select',
      table: {
        type: { summary: 'string' },
      },
      defaultValue: 'title',
      control: {
        type: 'text',
      },
    },
    value: {
      name: 'value	',
      description: 'To set the current selected treeNode(s)',
      table: {
        type: { summary: 'string | string[]' },
      },
      control: null,
    },
    virtual: {
      name: 'virtual',
      defaultValue: true,
      description: 'Disable virtual scroll when set to false',
      table: {
        type: { summary: 'boolean ' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      name: 'onChange',
      description:
        'A callback function, can be executed when selected treeNodes or input value change',
      table: {
        type: { summary: 'string' },
      },
      control: null,
    },
    onDropdownVisibleChange: {
      name: 'onDropdownVisibleChange',
      description: 'Called when dropdown open',
      table: {
        type: { summary: 'string' },
      },
      control: null,
    },
    onSearch: {
      name: 'onSearch',
      description:
        'A callback function, can be executed when the search input changes',
      table: {
        type: { summary: 'function(value: string)' },
      },
      control: null,
    },
    onSelect: {
      name: 'onSelect',
      description:
        'A callback function, can be executed when you select a treeNode',
      table: {
        type: { summary: 'function(value, node, extra)' },
      },
      control: null,
    },
    onTreeExpand: {
      name: 'onTreeExpand',
      description:
        'A callback function, can be executed when treeNode expanded',
      table: {
        type: { summary: 'function(expandedKeys)' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Tree selection control.' +
          '\n### When To Use' +
          '\n' +
          '- `TreeSelect` is similar to `Select`, but the values are provided in a tree like structure. Any data whose entries are defined in a' +
          '\n' +
          '- hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on. ' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof TreeSelect>

const Template: ComponentStory<typeof TreeSelect> = (args) => (
  <TreeSelect
    style={{ width: '100%' }}
    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
    treeData={treeData}
    treeDefaultExpandAll
    bordered
    {...args}
  />
)

export const Default = Template.bind({})

// Examples
export const MultipleSelection = () => {
  const [value, setValue] = useState<string>()

  const onChange = (newValue: string) => {
    setValue(newValue)
  }

  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      multiple
      treeData={treeData}
      treeDefaultExpandAll
      onChange={onChange}
    />
  )
}

MultipleSelection.parameters = {
  docs: {
    description: {
      story: 'Multiple selection usage.',
    },
  },
}

export const Checkable = () => {
  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ]
  const [value, setValue] = useState(['0-0-0'])

  const onChange = (newValue: string[]) => {
    setValue(newValue)
  }

  return (
    <TreeSelect
      value={value}
      onChange={onChange}
      treeCheckable="true"
      style={{ width: '100%' }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      treeData={treeData}
    />
  )
}

Checkable.parameters = {
  docs: {
    description: {
      story: 'Multiple and checkable.',
    },
  },
}

export const AsynchronousLoading = () => {
  const [value, setValue] = useState<string>()
  const [treeData, setTreeData] = useState<Omit<DefaultOptionType, 'label'>[]>([
    { id: 1, pId: 0, value: '1', title: 'Expand to load' },
    { id: 2, pId: 0, value: '2', title: 'Expand to load' },
    { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
  ])

  const genTreeNode = (parentId: number, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6)
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    }
  }

  const onLoadData: TreeSelectProps['loadData'] = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([
            genTreeNode(id, false),
            genTreeNode(id, true),
            genTreeNode(id, true),
          ])
        )
        resolve(undefined)
      }, 300)
    })

  const onChange = (newValue: string) => {
    setValue(newValue)
  }

  return (
    <TreeSelect
      treeDataSimpleMode
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      onChange={onChange}
      loadData={onLoadData}
      treeData={treeData}
    />
  )
}

AsynchronousLoading.parameters = {
  docs: {
    description: {
      story: 'Asynchronous loading tree node.',
    },
  },
}

export const ShowTreeLine = () => {
  const treeData = [
    {
      value: 'parent 1',
      title: 'parent 1',
      icon: <CarryOutOutlined />,
      children: [
        {
          value: 'parent 1-0',
          title: 'parent 1-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              value: 'leaf1',
              title: 'leaf1',
              icon: <CarryOutOutlined />,
            },
            {
              value: 'leaf2',
              title: 'leaf2',
              icon: <CarryOutOutlined />,
            },
          ],
        },
        {
          value: 'parent 1-1',
          title: 'parent 1-1',
          icon: <CarryOutOutlined />,
          children: [
            {
              value: 'sss',
              title: 'sss',
              icon: <CarryOutOutlined />,
            },
          ],
        },
      ],
    },
  ]
  const [treeLine, setTreeLine] = useState(true)
  const [showLeafIcon, setShowLeafIcon] = useState(false)
  const [showIcon, setShowIcon] = useState<boolean>(false)

  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="showIcon"
        unCheckedChildren="showIcon"
        checked={showIcon}
        onChange={() => setShowIcon(!showIcon)}
      />
      <Switch
        checkedChildren="treeLine"
        unCheckedChildren="treeLine"
        checked={treeLine}
        onChange={() => setTreeLine(!treeLine)}
      />
      <Switch
        disabled={!treeLine}
        checkedChildren="showLeafIcon"
        unCheckedChildren="showLeafIcon"
        checked={showLeafIcon}
        onChange={() => setShowLeafIcon(!showLeafIcon)}
      />
      <TreeSelect
        treeLine={treeLine && { showLeafIcon }}
        style={{ width: 300 }}
        treeData={treeData}
        treeIcon={showIcon}
      />
    </Space>
  )
}

ShowTreeLine.parameters = {
  docs: {
    description: {
      story: 'Use `treeLine` to show the line style.',
    },
  },
}

export const Placements = () => {
  const [placement, SetPlacement] =
    useState<SelectCommonPlacement>('bottomRight')

  const placementChange = (e: RadioChangeEvent) => {
    SetPlacement(e.target.value)
  }

  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />

      <TreeSelect
        showSearch
        dropdownStyle={{ maxHeight: 400, overflow: 'auto', minWidth: 300 }}
        placeholder="Please select"
        dropdownMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
        treeData={treeData}
      />
    </>
  )
}

Placements.parameters = {
  docs: {
    description: {
      story:
        'You can manually specify the position of the popup via `placement`.',
    },
  },
}

export const Status = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <TreeSelect status="error" style={{ width: '100%' }} placeholder="Error" />
    <TreeSelect
      status="warning"
      style={{ width: '100%' }}
      multiple
      placeholder="Warning multiple"
    />
  </Space>
)

Status.parameters = {
  docs: {
    description: {
      story:
        'Add status to TreeSelect with `status`, which could be `error` or `warning`.',
    },
  },
}

export const Treenodeprops: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'checkable',
      description: `When Tree is checkable, set TreeNode display Checkbox or not`,
      type: 'boolean',
      default: '-',
    },
    {
      key: '2',
      property: 'disableCheckbox',
      description: 'Disables the checkbox of the treeNode',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '3',
      property: 'disabled',
      description: 'Disabled or not',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '4',
      property: 'isLeaf',
      description: 'Leaf node or not',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '5',
      property: 'size',
      description:
        'Required property (unless using treeDataSimpleMode), should be unique in the tree',
      type: 'string',
      default: '-',
    },
    {
      key: '6',
      property: 'selectable',
      description: 'Whether can be selected',
      type: 'boolean',
      default: 'true',
    },
    {
      key: '7',
      property: 'title',
      description: 'Content showed on the treeNodes',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '8',
      property: 'value',
      description:
        'Will be treated as `treeNodeFilterProp` by default, should be unique in the tree',
      type: 'string',
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

Treenodeprops.parameters = {
  docs: {
    description: {
      story:
        'We recommend you to use `treeData` rather than `TreeNode`, to avoid the trouble of manual construction.',
    },
    source: {
      code: null,
    },
  },
}
