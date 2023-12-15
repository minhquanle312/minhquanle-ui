/* eslint-disable no-console */
// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Select, SelectProps } from './Select';
import { Space } from '../../atoms/Space';

export default {
  title: 'Molecules/Select',
  component: Select,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'To trigger an operation.',
      },
    },
  },
} as ComponentMeta<typeof Select>;

// Variables
const options: SelectProps['options'] = [];
const { Option } = Select;

for (let i = 10; i < 36; i++) {
  options.push({
    label: `item ${i.toString(36)} ${i}`,
    value: i.toString(36) + i,
  });
}

// Default
const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  defaultValue: 'Lucy',
  style: {
    width: 120,
  },
  options: [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true },
  ],
};

// Examples
export const BasicUsage: ComponentStory<typeof Select> = () => {
  const handleChange = (value: string) => {
    try {
      console.log(`selected ${value}`);
    } catch (error) {
      // Handle Error
    }
  };

  return (
    <Space wrap>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        disabled
        options={[{ value: 'lucy', label: 'Lucy' }]}
      />
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        loading
        options={[{ value: 'lucy', label: 'Lucy' }]}
      />
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        allowClear
        options={[{ value: 'lucy', label: 'Lucy' }]}
      />
    </Space>
  );
};

BasicUsage.parameters = {
  docs: {
    description: {
      story: 'Basic Usage.',
    },
  },
};

export const MultipleSelection: ComponentStory<typeof Select> = () => {
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        options={options}
      />
      <Select
        mode="multiple"
        disabled
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

MultipleSelection.parameters = {
  docs: {
    description: {
      story: 'Multiple selection, selecting from existing items.',
    },
  },
};

export const CustomSelectionRender: ComponentStory<typeof Select> = () => {
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="select one country"
      defaultValue={['china']}
      onChange={handleChange}
      optionLabelProp="label"
    >
      <Option value="china" label="China">
        <Space>
          <span role="img" aria-label="China">
            🇨🇳
          </span>
          China (中国)
        </Space>
      </Option>
      <Option value="usa" label="USA">
        <Space>
          <span role="img" aria-label="USA">
            🇺🇸
          </span>
          USA (美国)
        </Space>
      </Option>
      <Option value="japan" label="Japan">
        <Space>
          <span role="img" aria-label="Japan">
            🇯🇵
          </span>
          Japan (日本)
        </Space>
      </Option>
      <Option value="korea" label="Korea">
        <Space>
          <span role="img" aria-label="Korea">
            🇰🇷
          </span>
          Korea (韩国)
        </Space>
      </Option>
    </Select>
  );
};

CustomSelectionRender.parameters = {
  docs: {
    description: {
      story: 'Specify the prop name of Option which will be rendered in select box.',
    },
  },
};

export const Status: ComponentStory<typeof Select> = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Select status="error" style={{ width: '100%' }} />
    <Select status="warning" style={{ width: '100%' }} />
  </Space>
);
