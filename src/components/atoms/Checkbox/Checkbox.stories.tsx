/* eslint-disable no-console */
// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Checkbox } from './Checkbox';
import { Button, Divider, Table, Tag } from '../../index';

// Icons
// import Icon from '@antscorp/icons';

// Types
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

// Constant
import { TABLE_API_COLUMNS } from '../../../constants';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    autoFocus: {
      name: 'autoFocus',
      defaultValue: false,
      description: 'If get focus when component mounted',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    checked: {
      name: 'checked',
      defaultValue: false,
      description: 'Specifies whether the checkbox is selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultChecked: {
      name: 'defaultChecked',
      defaultValue: false,
      description: 'Specifies the initial state: whether or not the checkbox is selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'If disable checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    indeterminate: {
      name: 'indeterminate',
      defaultValue: false,
      description: 'The indeterminate checked state of checkbox	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      name: 'onChange',
      defaultValue: undefined,
      description: 'The callback function that is triggered when the state changes',
      table: {
        type: { summary: '(e: CheckboxChangeEvent) => void' },
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
  - Used for selecting multiple values from several options.
  - If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.
        `,
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

// Variables
// const exampleIcon = <Icon type="icon-ants-search-2" />;
// const items = [
//   {
//     key: '1',
//     label: '1st item',
//   },
//   {
//     key: '2',
//     label: '2nd item',
//   },
//   {
//     key: '3',
//     label: '3rd item',
//   },
// ];

// Default
const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Checkbox',
};

export const Basic: ComponentStory<typeof Checkbox> = () => {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  return <Checkbox onChange={onChange}>Checkbox</Checkbox>;
};

Basic.parameters = {
  docs: {
    description: {
      story: 'Basic usage of checkbox.',
    },
  },
};

export const ControlledCheckbox: ComponentStory<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange = e => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };

  const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;

  return (
    <>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
          {label}
        </Checkbox>
      </p>
      <p>
        <Button type="primary" size="small" onClick={toggleChecked}>
          {!checked ? 'Check' : 'Uncheck'}
        </Button>
        <Button style={{ margin: '0 10px' }} type="primary" size="small" onClick={toggleDisable}>
          {!disabled ? 'Disable' : 'Enable'}
        </Button>
      </p>
    </>
  );
};

ControlledCheckbox.parameters = {
  docs: {
    description: {
      story: 'Communicated with other components.',
    },
  },
};

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export const CheckAll: ComponentStory<typeof Checkbox> = () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <Checkbox.Group options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );
};

CheckAll.parameters = {
  docs: {
    description: {
      story: "The `indeterminate` property can help you to achieve a 'check all' effect.",
    },
  },
};

export const Disabled: ComponentStory<typeof Checkbox> = () => (
  <>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox indeterminate disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </>
);

Disabled.parameters = {
  docs: {
    description: {
      story: 'Disabled checkbox.',
    },
  },
};

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

export const CheckboxGroup: ComponentStory<typeof Checkbox> = () => {
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <>
      <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
      <br />
      <br />
      <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
      <br />
      <br />
      <Checkbox.Group
        options={optionsWithDisabled}
        disabled
        defaultValue={['Apple']}
        onChange={onChange}
      />
    </>
  );
};

CheckboxGroup.parameters = {
  docs: {
    description: {
      story: 'Generate a group of checkboxes from an array.',
    },
  },
};

export const CheckboxGroupAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'defaultValue',
      description: 'Default selected value',
      type: '(string | number)[ ]',
      default: '[ ]',
    },
    {
      key: '2',
      property: 'disabled',
      description: 'If disable all checkboxes',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '3',
      property: 'name',
      description: (
        <>
          {' '}
          The <Tag style={{ marginRight: '0' }}>name</Tag> property of all
          input[type=&quot;checkbox&quot;] children
        </>
      ),
      type: 'string',
      default: '-',
    },
    {
      key: '4',
      property: 'options',
      description: 'Specifies options',
      type: 'string[ ] | number[ ] | Option[ ]',
      default: '[ ]',
    },
    {
      key: '5',
      property: 'value',
      description: 'Used for setting the currently selected value',
      type: '(string | number | boolean)[ ]',
      default: '[ ]',
    },
    {
      key: '6',
      property: 'onChange',
      description: 'The callback function that is triggered when the state changes',
      type: '(checkedValue: CheckboxValueType[ ]) => void',
      default: '-',
    },
  ];

  return <Table dataSource={dataSource} columns={TABLE_API_COLUMNS} pagination={false} />;
};

CheckboxGroupAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
};
