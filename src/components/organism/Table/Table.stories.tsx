// Libraries
import React, { useState } from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

// Atnd
import { DownOutlined } from '@ant-design/icons'
import { Form, RadioChangeEvent, Switch } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import {
  ExpandableConfig,
  Key,
  TableRowSelection,
} from 'antd/es/table/interface'
import { ColumnsType, TableProps } from 'antd/es/table'

// Components
import { Table } from './Table'
import { Space, Radio, Divider, Tag, Button } from '../../atoms'
import { TableApiTypeTag } from 'minhquanle-ui/es/stories/components'

// Constants
import { TABLE_API_COLUMNS } from 'minhquanle-ui/es/constants'

export default {
  title: 'Organisms/Table',
  component: Table,
  argTypes: {
    bordered: {
      name: 'bordered',
      defaultValue: false,
      description: 'Whether to show all table borders',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    columns: {
      name: 'columns',
      defaultValue: undefined,
      description: 'Columns of table',
      table: {
        type: { summary: 'ColumnsType[]' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    components: {
      name: 'components',
      defaultValue: undefined,
      description: 'Whether',
      table: {
        type: {
          summary: 'TableComponents',
        },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    dataSource: {
      name: 'dataSource',
      defaultValue: undefined,
      description: 'Data record array to be displayed',
      table: {
        type: { summary: 'object[]' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    expandable: {
      name: 'expandable',
      defaultValue: undefined,
      description: 'Config expandable content',
      table: {
        type: { summary: 'expandable' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    footer: {
      name: 'footer',
      defaultValue: undefined,
      description: 'Table footer renderer',
      table: {
        type: { summary: 'function(currentPageData)' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    getPopupContainer: {
      name: 'getPopupContainer',
      defaultValue: () => HTMLHtmlElement,
      description: 'The render container of dropdowns in table',
      table: {
        type: { summary: '(triggerNode) => HTMLElement' },
        defaultValue: { summary: '() => TableHtmlElement' },
      },
      control: null,
    },
    loading: {
      name: 'loading',
      defaultValue: false,
      description: 'Loading status of table',
      table: {
        type: { summary: 'boolean | Spin Props' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    locale: {
      name: 'locale',
      defaultValue: undefined,
      description: 'The i18n text including filter, sort, empty text, etc',
      table: {
        type: { summary: 'object' },
        defaultValue: {
          summary: 'Default Value',
        },
      },
      control: 'object',
    },
    pagination: {
      name: 'pagination',
      defaultValue: undefined,
      description:
        'Config of pagination. You can ref table pagination [config](https://ant.design/components/table#pagination) or full [pagination](https://ant.design/components/pagination) document, hide it by setting it to `false`',
      table: {
        type: { summary: 'object | false' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    rowClassName: {
      name: 'rowClassName',
      defaultValue: undefined,
      description: "Row's className",
      table: {
        type: { summary: 'function(record, index): string' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    rowKey: {
      name: 'rowKey',
      defaultValue: undefined,
      description:
        "Row's unique key, could be a string or function that returns a string",
      table: {
        type: { summary: 'string | function(record): string' },
        defaultValue: { summary: 'key' },
      },
      control: null,
    },
    rowSelection: {
      name: 'rowSelection',
      defaultValue: undefined,
      description: 'Row selection config',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    scroll: {
      name: 'scroll',
      defaultValue: undefined,
      description: 'Whether the table can be scrollable, config',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    showHeader: {
      name: 'showHeader',
      defaultValue: true,
      description: 'Whether to show table header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    showSorterTooltip: {
      name: 'showSorterTooltip',
      defaultValue: true,
      description:
        'The header show next sorter direction tooltip. It will be set as the property of Tooltip if its type is object',
      table: {
        type: { summary: 'boolean | Tooltip props' },
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    size: {
      name: 'size',
      defaultValue: 'large',
      description: 'Size of table',
      table: {
        type: { summary: 'large | middle | small' },
        defaultValue: { summary: 'large' },
      },
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    sortDirections: {
      name: 'sortDirections',
      defaultValue: ['ascend', 'descend'],
      description: 'Supported sort way, could be `ascend`, `descend`',
      table: {
        type: { summary: 'Array' },
        defaultValue: { summary: '[ascend, descend]' },
      },
      control: null,
    },
    sticky: {
      name: 'sticky',
      defaultValue: undefined,
      description: 'Set sticky header and scroll bar',
      table: {
        type: {
          summary:
            'boolean | {offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}',
        },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    summary: {
      name: 'summary',
      defaultValue: undefined,
      description: 'Summary content',
      table: {
        type: { summary: '(currentData) => ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    tableLayout: {
      name: 'tableLayout',
      defaultValue: 'fixed',
      description: 'The table-layout attribute of table element',
      table: {
        type: { summary: '- | auto | fixed' },
        defaultValue: {
          summary:
            'fixed when header/columns are fixed, or using column.ellipsis',
        },
      },
      control: 'select',
      options: ['-', 'auto', 'fixed'],
    },
    title: {
      name: 'title',
      defaultValue: undefined,
      description: 'Table title renderer',
      table: {
        type: { summary: 'function(currentPageData)' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    onChange: {
      name: 'onChange',
      defaultValue: undefined,
      description:
        'Callback executed when pagination, filters or sorter is changed',
      table: {
        type: {
          summary:
            'function(pagination, filters, sorter, extra: { currentDataSource: [], action: paginate | sort | filter })',
        },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    onHeaderRow: {
      name: 'onHeaderRow',
      defaultValue: undefined,
      description: 'Set props on per header row',
      table: {
        type: { summary: 'function(columns, index)' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    onRow: {
      name: 'onRow',
      defaultValue: undefined,
      description: 'Set props on per row',
      table: {
        type: { summary: 'function(record, index)' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A table displays rows of data. \n' +
          '- To display a collection of structured data. \n' +
          '- To sort, search, paginate, filter data. \n' +
          '\nSpecify `dataSource` of Table as an array of data.',
      },
    },
  },
} as ComponentMeta<typeof Table>

// Default
const Template: ComponentStory<typeof Table> = (args) => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  return <Table {...args} dataSource={dataSource} columns={columns} />
}

export const Default = Template.bind({})

Default.args = {}

// // Examples
export const BasicUsage: ComponentStory<any> = () => {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  return <Table columns={columns} dataSource={data} />
}

BasicUsage.parameters = {
  docs: {
    description: {
      story: 'Simple table with actions.',
    },
  },
}

export const JSXStyleAPI: ComponentStory<any> = () => {
  const { Column, ColumnGroup } = Table

  interface DataType {
    key: React.Key
    firstName: string
    lastName: string
    age: number
    address: string
    tags: string[]
  }

  const data: DataType[] = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  return (
    <Table dataSource={data}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags: string[]) => (
          <>
            {tags.map((tag) => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(_: any, record: DataType) => (
          <Space size="middle">
            <a>Invite {record.lastName}</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  )
}

JSXStyleAPI.parameters = {
  docs: {
    description: {
      story:
        'Using JSX style API (introduced in 2.5.0) \n' +
        "- Since this is just a syntax sugar for the prop `columns`, you can't compose `Column` and `ColumnGroup` with other Components.",
    },
  },
}

export const Selection: ComponentStory<any> = () => {
  interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sydney No. 1 Lake Park',
    },
  ]

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (_selectedRowKeys: React.Key[], _selectedRows: DataType[]) => {
      // Do something
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  }

  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>(
    'checkbox'
  )

  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value)
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

Selection.parameters = {
  docs: {
    description: {
      story:
        'Rows can be selectable by making first column as a selectable column. You can use `rowSelection.type` to set selection type. Default is `checkbox`. \n' +
        '- election happens when clicking checkbox by default. You can see https://codesandbox.io/s/000vqw38rl if you need row-click selection behavior.',
    },
  },
}

export const SelectionAndOperation: ComponentStory<any> = () => {
  interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]

  const data: DataType[] = []
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    })
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)

  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  const hasSelected = selectedRowKeys.length > 0

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}

SelectionAndOperation.parameters = {
  docs: {
    description: {
      story:
        'To perform operations and clear selections after selecting some rows, use `rowSelection.selectedRowKeys` to control selected rows.',
    },
  },
}

export const CustomSelection: ComponentStory<any> = () => {
  interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]

  const data: DataType[] = []
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    })
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys: Key[] = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false
            }
            return true
          })
          setSelectedRowKeys(newSelectedRowKeys)
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys: Key[] = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true
            }
            return false
          })
          setSelectedRowKeys(newSelectedRowKeys)
        },
      },
    ],
  }

  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  )
}

CustomSelection.parameters = {
  docs: {
    description: {
      story:
        'Use `rowSelection.selections` custom selections, default no select dropdown, show default selections via setting to `true`.',
    },
  },
}

export const FilterAndSorter: ComponentStory<any> = () => {
  interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value: string | number | boolean, record) =>
        record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value: string | number | boolean, record) =>
        record.address.indexOf(value as string) === 0,
    },
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ]

  const onChange: TableProps<DataType>['onChange'] = (
    _pagination,
    _filters,
    _sorter,
    _extra
  ) => {
    // Do something
  }

  return <Table columns={columns} dataSource={data} onChange={onChange} />
}

FilterAndSorter.parameters = {
  docs: {
    description: {
      story:
        "Use `filters` to generate filter menu in columns, `onFilter` to determine filtered result, and `filterMultiple` to indicate whether it's multiple or single selection. \n" +
        '\nUses `defaultFilteredValue` to make a column filtered by default.' +
        "\nUse `sorter` to make a column sortable. `sorter` can be a function of the type `function(a, b) { ... }` for sorting data locally. `sortDirections: ['ascend' | 'descend']` defines available sort methods for each columns, effective for all columns when set on table props. You can set as `['ascend', 'descend', 'ascend']` to prevent sorter back to default status. \n" +
        '\nUses `defaultSortOrder` to make a column sorted by default. \n' +
        '\nIf a `sortOrder` or `defaultSortOrder` is specified with the value `ascend` or `descend`, you can access this value from within the function passed to the sorter as explained above. Such a function can take the form: `function(a, b, sortOrder) { ... }`.',
    },
  },
}

export const FilterInTree: ComponentStory<any> = () => {
  interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
          children: [
            {
              text: 'Yellow',
              value: 'Yellow',
            },
            {
              text: 'Pink',
              value: 'Pink',
            },
          ],
        },
        {
          text: 'Category 2',
          value: 'Category 2',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: string | number | boolean, record) =>
        record.name.includes(value as string),
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value: string | number | boolean, record) =>
        record.address.startsWith(value as string),
      filterSearch: true,
      width: '40%',
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ]

  const onChange: TableProps<DataType>['onChange'] = (
    _pagination,
    _filters,
    _sorter,
    _extra
  ) => {
    // Do something
  }

  return <Table columns={columns} dataSource={data} onChange={onChange} />
}

FilterInTree.parameters = {
  docs: {
    description: {
      story:
        'You can use `filterMode` to change default filter interface, options: `menu`(default) and `tree`. \n' +
        '- `filterSearch` is used for making filter dropdown items searchable.',
    },
  },
}

export const FilterSearch: ComponentStory<any> = () => {
  interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: string | number | boolean, record) =>
        record.name.startsWith(value as string),
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value: string | number | boolean, record) =>
        record.address.startsWith(value as string),
      filterSearch: true,
      width: '40%',
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ]

  const onChange: TableProps<DataType>['onChange'] = (
    _pagination,
    _filters,
    _sorter,
    _extra
  ) => {
    // Do something
  }

  return <Table columns={columns} dataSource={data} onChange={onChange} />
}

FilterSearch.parameters = {
  docs: {
    description: {
      story:
        '`filterSearch` is used to enable search of filter items, and you can set a custom filter method through `filterSearch:(input, record) => boolean`.',
    },
  },
}

export const MultipleSorter: ComponentStory<any> = () => {
  interface DataType {
    key: React.Key
    name: string
    chinese: number
    math: number
    english: number
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ]

  const onChange: TableProps<DataType>['onChange'] = (
    _pagination,
    _filters,
    _sorter,
    _extra
  ) => {
    // Do something
  }

  return <Table columns={columns} dataSource={data} onChange={onChange} />
}

MultipleSorter.parameters = {
  docs: {
    description: {
      story:
        '`column.sorter` support `multiple` to config the priority of sort columns. Though `sorter.compare` to customize compare function. You can also leave it empty to use the interactive only.',
    },
  },
}

export const DynamicSettings: ComponentStory<any> = () => {
  interface DataType {
    key: number
    name: string
    age: number
    address: string
    description: string
  }

  type TablePaginationPosition =
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight'

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) =>
        record.address.indexOf(value as string) === 0,
    },
    {
      title: 'Action',
      key: 'action',
      sorter: true,
      render: () => (
        <Space size="middle">
          <a>Delete</a>
          <a>
            <Space>
              More actions
              <DownOutlined />
            </Space>
          </a>
        </Space>
      ),
    },
  ]

  const data: DataType[] = []
  for (let i = 1; i <= 10; i++) {
    data.push({
      key: i,
      name: 'John Brown',
      age: Number(`${i}2`),
      address: `New York No. ${i} Lake Park`,
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    })
  }

  const defaultExpandable = {
    expandedRowRender: (record: DataType) => <p>{record.description}</p>,
  }
  const defaultTitle = () => 'Here is title'
  const defaultFooter = () => 'Here is footer'

  const [bordered, setBordered] = useState(false)
  const [loading, setLoading] = useState(false)
  const [size, setSize] = useState<SizeType>('large')
  const [expandable, setExpandable] = useState<
    ExpandableConfig<DataType> | undefined
  >(defaultExpandable)
  const [showTitle, setShowTitle] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [showfooter, setShowFooter] = useState(true)
  const [rowSelection, setRowSelection] = useState<
    TableRowSelection<DataType> | undefined
  >({})
  const [hasData, setHasData] = useState(true)
  const [tableLayout, setTableLayout] = useState()
  const [top, setTop] = useState<TablePaginationPosition | 'none'>('none')
  const [bottom, setBottom] = useState<TablePaginationPosition>('bottomRight')
  const [ellipsis, setEllipsis] = useState(false)
  const [yScroll, setYScroll] = useState(false)
  const [xScroll, setXScroll] = useState<string>()

  const handleBorderChange = (enable: boolean) => {
    setBordered(enable)
  }

  const handleLoadingChange = (enable: boolean) => {
    setLoading(enable)
  }

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value)
  }

  const handleTableLayoutChange = (e: RadioChangeEvent) => {
    setTableLayout(e.target.value)
  }

  const handleExpandChange = (enable: boolean) => {
    setExpandable(enable ? defaultExpandable : undefined)
  }

  const handleEllipsisChange = (enable: boolean) => {
    setEllipsis(enable)
  }

  const handleTitleChange = (enable: boolean) => {
    setShowTitle(enable)
  }

  const handleHeaderChange = (enable: boolean) => {
    setShowHeader(enable)
  }

  const handleFooterChange = (enable: boolean) => {
    setShowFooter(enable)
  }

  const handleRowSelectionChange = (enable: boolean) => {
    setRowSelection(enable ? {} : undefined)
  }

  const handleYScrollChange = (enable: boolean) => {
    setYScroll(enable)
  }

  const handleXScrollChange = (e: RadioChangeEvent) => {
    setXScroll(e.target.value)
  }

  const handleDataChange = (newHasData: boolean) => {
    setHasData(newHasData)
  }

  const scroll: { x?: number | string; y?: number | string } = {}
  if (yScroll) {
    scroll.y = 240
  }
  if (xScroll) {
    scroll.x = '100vw'
  }

  const tableColumns = columns.map((item) => ({ ...item, ellipsis }))
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true
    tableColumns[tableColumns.length - 1].fixed = 'right'
  }

  const tableProps: TableProps<DataType> = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  }

  return (
    <>
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{ marginBottom: 16 }}
      >
        <Space direction="vertical">
          <Space>
            <Form.Item label="Bordered">
              <Switch checked={bordered} onChange={handleBorderChange} />
            </Form.Item>
            <Form.Item label="loading">
              <Switch checked={loading} onChange={handleLoadingChange} />
            </Form.Item>
            <Form.Item label="Title">
              <Switch checked={showTitle} onChange={handleTitleChange} />
            </Form.Item>
          </Space>
          <Space>
            <Form.Item label="Column Header">
              <Switch checked={showHeader} onChange={handleHeaderChange} />
            </Form.Item>
            <Form.Item label="Footer">
              <Switch checked={showfooter} onChange={handleFooterChange} />
            </Form.Item>
            <Form.Item label="Expandable">
              <Switch checked={!!expandable} onChange={handleExpandChange} />
            </Form.Item>
            <Form.Item label="Checkbox">
              <Switch
                checked={!!rowSelection}
                onChange={handleRowSelectionChange}
              />
            </Form.Item>
          </Space>
          <Space>
            <Form.Item label="Fixed Header">
              <Switch checked={!!yScroll} onChange={handleYScrollChange} />
            </Form.Item>
            <Form.Item label="Has Data">
              <Switch checked={!!hasData} onChange={handleDataChange} />
            </Form.Item>
            <Form.Item label="Ellipsis">
              <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
            </Form.Item>
          </Space>
          <Space direction="vertical">
            <Form.Item label="Size">
              <Radio.Group value={size} onChange={handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="middle">Middle</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Table Scroll">
              <Radio.Group value={xScroll} onChange={handleXScrollChange}>
                <Radio.Button value={undefined}>Unset</Radio.Button>
                <Radio.Button value="scroll">Scroll</Radio.Button>
                <Radio.Button value="fixed">Fixed Columns</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Table Layout">
              <Radio.Group
                value={tableLayout}
                onChange={handleTableLayoutChange}
              >
                <Radio.Button value={undefined}>Unset</Radio.Button>
                <Radio.Button value="fixed">Fixed</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Pagination Top">
              <Radio.Group
                value={top}
                onChange={(e) => {
                  setTop(e.target.value)
                }}
              >
                <Radio.Button value="topLeft">TopLeft</Radio.Button>
                <Radio.Button value="topCenter">TopCenter</Radio.Button>
                <Radio.Button value="topRight">TopRight</Radio.Button>
                <Radio.Button value="none">None</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Pagination Bottom">
              <Radio.Group
                value={bottom}
                onChange={(e) => {
                  setBottom(e.target.value)
                }}
              >
                <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
                <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
                <Radio.Button value="bottomRight">BottomRight</Radio.Button>
                <Radio.Button value="none">None</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Space>
        </Space>
      </Form>
      <Table
        {...tableProps}
        pagination={{ position: [top as TablePaginationPosition, bottom] }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
      />
    </>
  )
}

DynamicSettings.parameters = {
  docs: {
    description: {
      story: 'Select different settings to see the result.',
    },
  },
}

export const ColumnAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'align',
      description: `The specify which way that column is aligned`,
      type: (
        <>
          <TableApiTypeTag text="left" />
          &nbsp;|&nbsp;
          <TableApiTypeTag text="right" />
          &nbsp;|&nbsp;
          <TableApiTypeTag text="center" />
        </>
      ),
      default: <Tag>left</Tag>,
    },
    {
      key: '2',
      property: 'className',
      description: 'The className of this column',
      type: 'string',
      default: '-',
    },
    {
      key: '3',
      property: 'colSpan',
      description: "Span of this column's title",
      type: 'number',
      default: '-',
    },
    {
      key: '4',
      property: 'dataIndex',
      description:
        'Display field of the data record, support nest path by string array',
      type: 'string | string[ ]',
      default: '-',
    },
    {
      key: '5',
      property: 'defaultFilteredValue',
      description: 'Default filtered values',
      type: 'string[ ]',
      default: '-',
    },
    {
      key: '6',
      property: 'filterResetToDefaultFilteredValue',
      description:
        'click the reset button, whether to restore the default filter',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '7',
      property: 'defaultSortOrder',
      description: 'Default order of sorted values',
      type: 'ascend | descend',
      default: '-',
    },
    {
      key: '8',
      property: 'ellipsis',
      description: (
        <>
          The ellipsis cell content, not working with sorter and filters for
          now. tableLayout would be{' '}
          <Tag style={{ marginRight: '0' }}>fixed</Tag> when{' '}
          <Tag style={{ marginRight: '0' }}>ellipsis</Tag> is{' '}
          <Tag style={{ marginRight: '0' }}>true</Tag> or{' '}
          <Tag style={{ marginRight: '0' }}>
            &#123; showTitle?: boolean &#125;
          </Tag>
        </>
      ),
      type: 'boolean | {showTitle?: boolean }',
      default: 'false',
    },
    {
      key: '9',
      property: 'filterDropdown',
      description: 'Customized filter overlay',
      type: 'ReactNode | (props: FilterDropdownProps) => ReactNode',
      default: '-',
    },
    {
      key: '10',
      property: 'filterDropdownOpen',
      description: (
        <>
          Whether <Tag style={{ marginRight: '0' }}>filterDropdown</Tag> is
          visible
        </>
      ),
      type: 'boolean',
      default: '-',
    },
    {
      key: '11',
      property: 'filtered',
      description: (
        <>
          Whether the <Tag style={{ marginRight: '0' }}>dataSource</Tag> is
          filtered
        </>
      ),
      type: 'boolean',
      default: 'false',
    },
    {
      key: '12',
      property: 'filteredValue',
      description: 'Controlled filtered value, filter icon will highlight',
      type: 'string[ ]',
      default: '-',
    },
    {
      key: '13',
      property: 'filterIcon',
      description: 'Customized filter icon',
      type: 'ReactNode | (filtered: boolean) => ReactNode',
      default: '-',
    },
    {
      key: '14',
      property: 'filterMultiple',
      description: 'Whether multiple filters can be selected',
      type: 'boolean',
      default: 'true',
    },
    {
      key: '15',
      property: 'filterMode',
      description: 'To specify the filter interface',
      type: `'menu' | 'tree'`,
      default: `'menu'`,
    },
    {
      key: '16',
      property: 'filterSearch',
      description: 'Whether to be searchable for filter menu',
      type: 'boolean | function(input, record):boolean',
      default: 'false',
    },
    {
      key: '17',
      property: 'filters',
      description: 'Filter menu config',
      type: 'object[ ] ',
      default: '-',
    },
    {
      key: '18',
      property: 'fixed',
      description: (
        <>
          (IE not support) Set column to be fixed:{' '}
          <Tag style={{ marginRight: '0' }}>true</Tag>
          &nbsp;(same as left){' '}
          <Tag style={{ marginRight: '0' }}>&apos;left&apos;</Tag>&nbsp;
          <Tag style={{ marginRight: '0' }}>&apos;right&apos;</Tag>
        </>
      ),
      type: 'boolean | string',
      default: 'false',
    },
    {
      key: '19',
      property: 'key',
      description: (
        <>
          Unique key of this column, you can ignore this prop if you&apos;ve set
          a unique &nbsp;
          <Tag>dataIndex</Tag>
        </>
      ),
      type: 'string',
      default: '-',
    },
    {
      key: '20',
      property: 'render',
      description:
        'Renderer of the table cell. The return value should be a ReactNode',
      type: 'function(text, record, index) {}',
      default: '-',
    },
    {
      key: '21',
      property: 'responsive',
      description:
        'The list of breakpoints at which to display this column. Always visible if not set',
      type: 'Breakpoint[ ]',
      default: '-',
    },
    {
      key: '22',
      property: 'rowScope',
      description: 'Set scope attribute for all cells in this column',
      type: (
        <>
          <TableApiTypeTag text="row" />
          &nbsp;|&nbsp;
          <TableApiTypeTag text="rowgroup" />
        </>
      ),
      default: '-',
    },
    {
      key: '23',
      property: 'shouldCellUpdate',
      description: 'Control cell render logic',
      type: '(record, prevRecord) => boolean',
      default: '-',
    },
    {
      key: '24',
      property: 'showSorterTooltip',
      description: (
        <>
          If header show next sorter direction tooltip, override&nbsp;
          <Tag style={{ marginRight: '0' }}>showSorterTooltip</Tag> in table
        </>
      ),
      type: 'boolean | Tooltip props',
      default: 'true',
    },
    {
      key: '25',
      property: 'sortDirections',
      description: (
        <>
          Supported sort way, override{' '}
          <Tag style={{ marginRight: '0' }}>sortDirections</Tag> in &nbsp;
          <Tag style={{ marginRight: '0' }}>Table</Tag>&nbsp;, could be &nbsp;
          <Tag style={{ marginRight: '0' }}>ascend</Tag>&nbsp;, &nbsp;
          <Tag style={{ marginRight: '0' }}>descend</Tag>
        </>
      ),
      type: 'Array',
      default: (
        <>
          [&nbsp;<Tag style={{ marginRight: '0' }}>ascend</Tag>&nbsp;, &nbsp;
          <Tag style={{ marginRight: '0' }}>descend</Tag>&nbsp;]
        </>
      ),
    },
    {
      key: '26',
      property: 'sorter',
      description: (
        <>
          Sort function for local sort, see Array.sort&apos;s compareFunction.
          If you need sort buttons only, set to{' '}
          <Tag style={{ marginRight: '0' }}>true</Tag>
        </>
      ),
      type: 'function | boolean | { compare: function: multiple: number }',
      default: '-',
    },
    {
      key: '27',
      property: 'sortOrder',
      description: (
        <>
          Order of sorted values: <Tag style={{ marginRight: '0' }}>ascend</Tag>
          &nbsp;
          <Tag style={{ marginRight: '0' }}>descend</Tag>&nbsp;
          <Tag style={{ marginRight: '0' }}>null</Tag>
        </>
      ),
      type: (
        <>
          <TableApiTypeTag text="ascend" /> | <TableApiTypeTag text="descend" />{' '}
          | null
        </>
      ),
      default: '-',
    },
    {
      key: '28',
      property: 'sortIcon',
      description: 'Customized sort icon',
      type: '(props: { sortOrder }) => ReactNode',
      default: '-',
    },
    {
      key: '29',
      property: 'title',
      description: 'Title of this column',
      type: 'ReactNode | ({ sortOrder, sortColumn, filters }) => ReactNode',
      default: '-',
    },
    {
      key: '30',
      property: 'width',
      description: (
        <>
          Width of this column&nbsp;
          <a href="https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241">
            (width not working?)
          </a>
        </>
      ),
      type: 'string | number',
      default: '-',
    },
    {
      key: '31',
      property: 'onCell',
      description: 'Set props on per cell',
      type: 'function(record, rowIndex)',
      default: '-',
    },
    {
      key: '32',
      property: 'onFilter',
      description:
        'Function that determines if the row is displayed when filtered',
      type: 'function(value, record) => boolean',
      default: '-',
    },
    {
      key: '33',
      property: 'onFilterDropdownOpenChange',
      description: (
        <>
          Callback executed when{' '}
          <Tag style={{ marginRight: '0' }}>filterDropdownOpen</Tag> is changed
        </>
      ),
      type: 'function(visible) {}',
      default: '-',
    },
    {
      key: '34',
      property: 'onHeaderCell',
      description: 'Set props on per header cell',
      type: 'function(column)',
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

ColumnAPI.parameters = {
  docs: {
    description: {
      story:
        "One of the Table `columns` prop for describing the table's columns, Column has the same API.",
    },
    source: {
      code: null,
    },
  },
}

export const ColumnGroupAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'title',
      description: 'Title of the column group',
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

ColumnGroupAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
}

export const PaginationAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'position',
      description: (
        <>
          Specify the position of{' '}
          <Tag style={{ marginRight: '0' }}>Pagination</Tag>, could be{' '}
          <Tag style={{ marginRight: '0' }}>topLeft</Tag> |{' '}
          <Tag style={{ marginRight: '0' }}>topCenter</Tag> |{' '}
          <Tag style={{ marginRight: '0' }}>topRight</Tag> |{' '}
          <Tag style={{ marginRight: '0' }}>bottomLeft</Tag> |{' '}
          <Tag style={{ marginRight: '0' }}>bottomCenter</Tag> |{' '}
          <Tag style={{ marginRight: '0' }}>bottomRight</Tag>
        </>
      ),
      type: 'Array',
      default: (
        <>
          [ <Tag style={{ marginRight: '0' }}>bottomRight</Tag> ]
        </>
      ),
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
        More about pagination, please check{' '}
        <Tag style={{ marginRight: '0' }}>
          <a
            href="https://ant.design/components/pagination"
            style={{ color: 'blue' }}
          >
            Pagination
          </a>
        </Tag>
        .
      </p>
    </>
  )
}

PaginationAPI.parameters = {
  docs: {
    description: {
      story: 'Properties for pagination.',
    },
    source: {
      code: null,
    },
  },
}

export const ExpandableAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'childrenColumnName',
      description: 'The column contains children to display',
      type: 'string',
      default: 'children',
    },
    {
      key: '2',
      property: 'columnTitle',
      description: 'Set the title of the expand column',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '3',
      property: 'columnWidth',
      description: 'Set the width of the expand column',
      type: 'string | number',
      default: '-',
    },
    {
      key: '4',
      property: 'defaultExpandAllRows',
      description: 'Expand all rows initially',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '5',
      property: 'defaultExpandedRowKeys',
      description: 'Initial expanded row keys',
      type: 'string[ ]',
      default: '-',
    },
    {
      key: '6',
      property: 'expandedRowClassName',
      description: "Expanded row's className",
      type: 'function(record, index, indent): string',
      default: '-',
    },
    {
      key: '7',
      property: 'expandedRowKeys',
      description: 'Current expanded row keys',
      type: 'string[ ]',
      default: '-',
    },
    {
      key: '8',
      property: 'expandedRowRender',
      description: 'Expanded container render for each row',
      type: 'function(record, index, indent, expanded): ReactNode',
      default: '-',
    },
    {
      key: '9',
      property: 'expandIcon',
      description: (
        <>
          Customize row expand Icon. Ref{' '}
          <a href="https://codesandbox.io/s/fervent-bird-nuzpr">example</a>
        </>
      ),
      type: 'function(props): ReactNode',
      default: '-',
    },
    {
      key: '10',
      property: 'expandRowByClick',
      description:
        'Whether to expand row by clicking anywhere in the whole row',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '11',
      property: 'fixed',
      description: (
        <>
          Whether the expansion icon is fixed. Optional true{' '}
          <Tag style={{ marginRight: '0' }}>left</Tag>{' '}
          <Tag style={{ marginRight: '0' }}>right</Tag>
        </>
      ),
      type: 'boolean | string',
      default: 'false',
    },
    {
      key: '12',
      property: 'indentSize',
      description: 'Indent size in pixels of tree data',
      type: 'number',
      default: '15',
    },
    {
      key: '13',
      property: 'rowExpandable',
      description: 'Enable row can be expandable',
      type: '(record) => boolean',
      default: '-',
    },
    {
      key: '14',
      property: 'showExpandColumn',
      description: 'Show expand column',
      type: 'boolean',
      default: 'true',
    },
    {
      key: '15',
      property: 'onExpand',
      description: 'Callback executed when the row expand icon is clicked',
      type: 'function(expanded, record)',
      default: '-',
    },
    {
      key: '16',
      property: 'onExpandedRowsChange',
      description: 'Callback executed when the expanded rows change',
      type: 'function(expandedRows)',
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

ExpandableAPI.parameters = {
  docs: {
    description: {
      story: 'Properties for expandable.',
    },
    source: {
      code: null,
    },
  },
}

export const RowSelectionAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'checkStrictly',
      description:
        'Check table row precisely; parent row and children rows are not associated',
      type: 'boolean',
      default: 'true',
    },
    {
      key: '2',
      property: 'columnTitle',
      description: 'Set the title of the selection column',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '3',
      property: 'columnWidth',
      description: 'Set the width of the selection column',
      type: 'string | number',
      default: <Tag>32px</Tag>,
    },
    {
      key: '4',
      property: 'fixed',
      description: 'Fixed selection column on the left',
      type: 'boolean',
      default: '-',
    },
    {
      key: '5',
      property: 'getCheckboxProps',
      description: 'Get Checkbox or Radio props',
      type: 'function(record)',
      default: '-',
    },
    {
      key: '6',
      property: 'hideSelectAll',
      description: 'Hide the selectAll checkbox and custom selection',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '7',
      property: 'preserveSelectedRowKeys',
      description: (
        <>
          Keep selection <Tag style={{ marginRight: '0' }}>key</Tag> even when
          it removed from <Tag style={{ marginRight: '0' }}>dataSource</Tag>
        </>
      ),
      type: 'boolean',
      default: '-',
    },
    {
      key: '8',
      property: 'renderCell',
      description: (
        <>
          Renderer of the table cell. Same as{' '}
          <Tag style={{ marginRight: '0' }}>render</Tag> in column
        </>
      ),
      type: 'function(checked, record, index, originNode) {}',
      default: '-',
    },
    {
      key: '9',
      property: 'selectedRowKeys',
      description: 'Controlled selected row keys',
      type: 'string[ ] | number[ ]',
      default: '-',
    },
    {
      key: '10',
      property: 'selections',
      description: (
        <>
          Custom selection{' '}
          <a href="https://ant.design/components/table/#selection">config</a>,
          only displays default selections when set to{' '}
          <Tag style={{ marginRight: '0' }}>true</Tag>
        </>
      ),
      type: 'object[ ] | boolean',
      default: '-',
    },
    {
      key: '11',
      property: 'type',
      description: (
        <>
          <Tag style={{ marginRight: '0' }}>checkbox</Tag> or{' '}
          <Tag style={{ marginRight: '0' }}>radio</Tag>
        </>
      ),
      type: (
        <>
          <TableApiTypeTag text="checkbox" /> | <TableApiTypeTag text="radio" />
        </>
      ),
      default: <Tag>checkbox</Tag>,
    },
    {
      key: '12',
      property: 'onCell',
      description: (
        <>
          Set props on per cell. Same as{' '}
          <Tag style={{ marginRight: '0' }}>onCell</Tag> in column
        </>
      ),
      type: 'function(record, rowIndex)',
      default: '-',
    },
    {
      key: '13',
      property: 'onChange',
      description: 'Callback executed when selected rows change',
      type: 'function(selectedRowKeys, selectedRows, info: { type })',
      default: '-',
    },
    {
      key: '14',
      property: 'onSelect',
      description: 'Callback executed when select/deselect one row',
      type: 'function(record, selected, selectedRows, nativeEvent)',
      default: '-',
    },
    {
      key: '15',
      property: 'onSelectAll',
      description: 'Callback executed when select/deselect all rows',
      type: 'function(selected, selectedRows, changeRows)',
      default: '-',
    },
    {
      key: '16',
      property: 'onSelectInvert',
      description: 'Callback executed when row selection is inverted',
      type: 'function(selectedRowKeys)',
      default: '-',
    },
    {
      key: '17',
      property: 'onSelectNone',
      description: 'Callback executed when row selection is cleared',
      type: 'function()',
      default: '-',
    },
    {
      key: '18',
      property: 'onSelectMultiple',
      description:
        'Callback executed when row selection is changed by pressing shift',
      type: 'function(selected, selectedRows, changeRows)',
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

RowSelectionAPI.parameters = {
  docs: {
    description: {
      story: 'Properties for row selection.',
    },
    source: {
      code: null,
    },
  },
}

export const ScrollAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'scrollToFirstRowOnChange',
      description:
        'Whether to scroll to the top of the table when paging, sorting, filtering changes',
      type: 'boolean',
      default: '-',
    },
    {
      key: '2',
      property: 'x',
      description: (
        <>
          Set horizontal scrolling, can also be used to specify the width of the
          scroll area, could be number, percent value, true and{' '}
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content">
            &apos;max-content&apos;
          </a>
        </>
      ),
      type: 'string | number | true',
      default: '-',
    },
    {
      key: '3',
      property: 'y',
      description:
        'Set vertical scrolling, can also be used to specify the height of the scroll area, could be string or number',
      type: 'string | number',
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

ScrollAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
}

export const SelectionAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'key',
      description: 'Unique key of this selection',
      type: 'string',
      default: '-',
    },
    {
      key: '2',
      property: 'text',
      description: 'Display text of this selection',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '3',
      property: 'onSelect',
      description: 'Callback executed when this selection is clicked',
      type: 'function(changeableRowKeys)',
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

SelectionAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
}
