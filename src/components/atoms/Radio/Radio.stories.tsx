/* eslint-disable prettier/prettier */
// Libraries
import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, RadioChangeEvent } from 'antd';

// Components
import { Radio } from './Radio';
import { Tag } from '../Tag';
import { Table } from '../../organism';
import { TableApiTypeTag } from '../../../stories/components';

// Constants
import { TABLE_API_COLUMNS } from '../../../constants';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    autoFocus: {
      name: 'autoFocus',
      defaultValue: false,
      description: 'Whether get focus when component mounted',
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
      description: 'Specifies whether the radio is selected',
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
      description: 'Specifies the initial state: whether or not the radio is selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    value: {
      value: 'value',
      description: 'According to value for comparison, to determine whether the selected',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'Disabled state of button',
      table: {
        type: { summary: 'boolean' },
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
  - Used to select a single state from multiple options.
  - The difference from Select is that Radio is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.
        `,
      },
    },
  },
} as ComponentMeta<typeof Radio>;

// Default
const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: 'Radio',
};

// Examples
export const Basic: ComponentStory<any> = () => <Radio>Radio</Radio>;

Basic.parameters = {
  docs: {
    description: {
      story: 'The simplest use.',
    },
  },
};

export const Disabled: ComponentStory<any> = () => {
  const [disabled, setDisabled] = useState(true);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Button type="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
        Toggle disabled
      </Button>
    </>
  );
};

Disabled.parameters = {
  docs: {
    description: {
      story: 'Radio unavailable.',
    },
  },
};

export const RadioGroup: ComponentStory<any> = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};

RadioGroup.parameters = {
  docs: {
    description: {
      story: 'A group of radio components.',
    },
  },
};

export const RadioGroupOptional: ComponentStory<any> = () => {
  const [value1, setValue1] = useState('Apple');
  const [value2, setValue2] = useState('Apple');
  const [value3, setValue3] = useState('Apple');
  const [value4, setValue4] = useState('Apple');

  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    setValue1(value);
  };

  const onChange2 = ({ target: { value } }: RadioChangeEvent) => {
    setValue2(value);
  };

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    setValue3(value);
  };

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    setValue4(value);
  };

  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange2}
        value={value2}
      />
      <br />
      <br />
      <Radio.Group
        options={options}
        onChange={onChange3}
        value={value3}
        optionType="button"
      />
      <br />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

RadioGroupOptional.parameters = {
  docs: {
    description: {
      story:
        'Render radios by configuring `options`. Radio type can also be set through the `optionType` parameter.',
    },
  },
};

export const Size: ComponentStory<any> = () => (
  <>
    <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <br />
    <Radio.Group defaultValue="a" style={{ marginTop: 16 }}>
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <br />
    <Radio.Group defaultValue="a" size="small" style={{ marginTop: 16 }}>
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </>
);

Size.parameters = {
  docs: {
    description: {
      story:
        'There are three sizes available: large, medium, and small. It can coordinate with input box.',
    },
  },
};

export const RadioGroupAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'buttonStyle',
      description: 'The style type of radio button',
      type: (
        <>
          <TableApiTypeTag text="outline" /> | <TableApiTypeTag text="solid" />
        </>
      ),
      default: <Tag bordered>outline</Tag>,
    },
    {
      key: '2',
      property: 'defaultValue',
      description: 'Default selected value',
      type: 'any',
      default: '-',
    },
    {
      key: '3',
      property: 'disabled',
      description: 'Disable all radio buttons',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '4',
      property: 'name',
      description: (
        <>
          The
          <Tag bordered style={{ marginLeft: '8px' }}>
            name
          </Tag>
          property of all
          <Tag bordered style={{ marginLeft: '8px' }}>
            input[type=&quot;radio&quot;]
          </Tag>
          children
        </>
      ),
      type: 'string',
      default: '-',
    },
    {
      key: '5',
      property: 'options',
      description: 'Set children optional',
      type: 'string[] | number[] | Array<{ label: ReactNode; value: string; disabled?: boolean; }>',
      default: '-',
    },
    {
      key: '6',
      property: 'optionType',
      description: 'Set Radio optionType',
      type: (
        <>
          <TableApiTypeTag text="default" /> | <TableApiTypeTag text="button" />
        </>
      ),
      default: <Tag bordered>default</Tag>,
    },
    {
      key: '7',
      property: 'size',
      description: 'The size of radio button style',
      type: (
        <>
          <TableApiTypeTag text="large" /> | <TableApiTypeTag text="middle" /> |{' '}
          <TableApiTypeTag text="small" />
        </>
      ),
      default: '-',
    },
    {
      key: '8',
      property: 'value',
      description: 'Used for setting the currently selected value',
      type: 'any',
      default: '-',
    },
    {
      key: '9',
      property: 'onChange',
      description: 'The callback function that is triggered when the state changes',
      type: 'function(e:Event)',
      default: '-',
    },
  ];

  return <Table dataSource={dataSource} columns={TABLE_API_COLUMNS} pagination={false} />;
};

RadioGroupAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
};
