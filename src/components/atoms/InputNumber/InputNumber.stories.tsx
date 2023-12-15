/* eslint-disable no-console */
// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { InputNumber } from './InputNumber';
import { Space, Checkbox, Button } from '..';
import { Cascader, Select } from '../../molecules';

// Types
import Icon from '@antscorp/icons';

// Variables
const exampleIcon = <Icon type="icon-ants-search-2" />;

const { Option } = Select;

export default {
  title: 'Atoms/InputNumber',
  component: InputNumber,
  argTypes: {
    value: {
      name: 'value',
      defaultValue: undefined,
      description: 'The current value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'number',
      },
    },
    addonAfter: {
      name: 'addonAfter',
      defaultValue: undefined,
      description: 'The label text displayed after (on the right side of) the input field',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    addonBefore: {
      name: 'addonBefore',
      defaultValue: undefined,
      description: 'The label text displayed before (on the left side of) the input field',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    autoFocus: {
      name: 'autoFocus',
      defaultValue: false,
      description: 'If get focus when component mounted',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    bordered: {
      name: 'bordered',
      defaultValue: true,
      description: 'Whether has border style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: {
        type: 'boolean',
      },
    },
    showHandler: {
      name: 'showHandler',
      defaultValue: true,
      description: 'Whether to show +- controls handler',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: {
        type: 'boolean',
      },
    },
    decimalSeparator: {
      name: 'decimalSeparator',
      defaultValue: undefined,
      description: 'Decimal separator',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    defaultValue: {
      name: 'defaultValue',
      defaultValue: undefined,
      description: 'The initial value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'number',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'If disable the input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    formatter: {
      name: 'formatter',
      defaultValue: undefined,
      description: 'Specifies the format of the value presented	',
      table: {
        type: {
          summary:
            'function(value: number | string, info: { userTyping: boolean, input: string }): string',
        },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    keyboard: {
      name: 'keyboard',
      defaultValue: true,
      description: 'If enable keyboard behavior',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'true' },
      },
      control: {
        type: 'boolean',
      },
    },
    max: {
      name: 'max',
      defaultValue: Number.MAX_SAFE_INTEGER,
      description: 'The max value',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 'Number.MAX_SAFE_INTEGER' },
      },
      control: {
        type: 'number',
      },
    },
    min: {
      name: 'min',
      defaultValue: Number.MIN_SAFE_INTEGER,
      description: 'The min value',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 'Number.MIN_SAFE_INTEGER' },
      },
      control: {
        type: 'number',
      },
    },
    parser: {
      name: 'parser',
      defaultValue: undefined,
      description: 'Specifies the value extracted from formatter',
      table: {
        type: {
          summary: 'function(string): number',
        },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    precision: {
      name: 'precision',
      defaultValue: undefined,
      description: 'The precision of input value. Will use formatter when config of `formatter`',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    readOnly: {
      name: 'readOnly',
      defaultValue: false,
      description: 'If readonly the input',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    status: {
      name: 'status',
      defaultValue: undefined,
      description: 'Set validation status',
      table: {
        type: {
          summary: 'error | warning',
        },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'select',
        labels: {
          error: 'Error',
          warning: 'Warning',
        },
      },
      options: ['error', 'warning'],
    },
    prefix: {
      name: 'prefix',
      defaultValue: undefined,
      description: 'The prefix icon for the Input	',
      table: {
        type: {
          summary: 'ReactNode',
        },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    size: {
      name: 'size',
      defaultValue: undefined,
      description: 'The height of input box',
      table: {
        type: {
          summary: 'large | middle | small',
        },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'select',
        labels: {
          large: 'Large',
          middle: 'Middle',
          small: 'Small',
        },
      },
      options: ['large', 'middle', 'small'],
    },
    step: {
      name: 'step',
      defaultValue: 1,
      description:
        'The number to which the current value is increased or decreased. It can be an integer or decimal	',
      table: {
        type: {
          summary: 'number | string',
        },
        defaultValue: { summary: '1' },
      },
      control: {
        type: 'number',
      },
    },
    stringMode: {
      name: 'stringMode',
      defaultValue: false,
      description:
        'Set value as string to support high precision decimals. Will return string value by `onChange`',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      name: 'onChange',
      defaultValue: false,
      description: 'The callback triggered when the value is changed	',
      table: {
        type: {
          summary: 'function(value: number | string | null)	',
        },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    onPressEnter: {
      name: 'onPressEnter',
      defaultValue: undefined,
      description: 'The callback function that is triggered when Enter key is pressed',
      table: {
        type: {
          summary: 'function(e)',
        },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    onStep: {
      name: 'onStep',
      defaultValue: undefined,
      description: 'The callback function that is triggered when click up or down buttons',
      table: {
        type: {
          summary: `(value: number, info: { offset: number, type: 'up' | 'down' }) => void`,
        },
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
        component: 'To trigger an operation.',
      },
    },
  },
} as ComponentMeta<typeof InputNumber>;

// Variables

// Default
const Template: ComponentStory<typeof InputNumber> = args => <InputNumber {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const BasicUsage: ComponentStory<any> = () => {
  const onChange = (value: any) => {
    console.log('changed', value);
  };

  return <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />;
};

BasicUsage.parameters = {
  docs: {
    description: {
      story: 'Numeric-only input box.',
    },
  },
};

const selectBefore = (
  <Select defaultValue="add" style={{ width: 60 }}>
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue="USD" style={{ width: 60 }}>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="GBP">£</Option>
    <Option value="CNY">¥</Option>
  </Select>
);

export const PrePostTab: ComponentStory<any> = () => (
  <Space direction="vertical">
    <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
    <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
    <InputNumber addonAfter={exampleIcon} defaultValue={100} />
    <InputNumber
      addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
      defaultValue={100}
    />
  </Space>
);

PrePostTab.parameters = {
  docs: {
    description: {
      story: 'Using pre & post tabs example.',
    },
  },
};

export const HighPrecisionDecimals: ComponentStory<any> = () => {
  const onChange = (value: any) => {
    console.log('changed', value);
  };

  return (
    <InputNumber
      style={{ width: 200 }}
      defaultValue="1"
      min="0"
      max="10"
      step="0.00000000000001"
      onChange={onChange}
      stringMode
    />
  );
};

PrePostTab.parameters = {
  docs: {
    description: {
      story:
        'Use stringMode to support high precision decimals support. onChange will return string value instead. You need polyfill of BigInt if browser not support.',
    },
  },
};

export const KeyBoard: ComponentStory<any> = () => {
  const [keyboard, setKeyboard] = useState(true);

  return (
    <Space>
      <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />
      <Checkbox
        onChange={() => {
          setKeyboard(!keyboard);
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </Checkbox>
    </Space>
  );
};

KeyBoard.parameters = {
  docs: {
    description: {
      story: 'Control keyboard behavior by keyboard.',
    },
  },
};

export const OutOfRange: ComponentStory<any> = () => {
  const [value, setValue] = useState<string | number | null>('99');

  return (
    <Space>
      <InputNumber min={1} max={10} value={value} onChange={setValue} />
      <Button
        type="primary"
        onClick={() => {
          setValue(99);
        }}
      >
        Reset
      </Button>
    </Space>
  );
};

OutOfRange.parameters = {
  docs: {
    description: {
      story: 'Show warning style when `value` is out of range by control.',
    },
  },
};

export const Status: ComponentStory<any> = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <InputNumber status="error" style={{ width: '100%' }} />
    <InputNumber status="warning" style={{ width: '100%' }} />
    <InputNumber status="error" style={{ width: '100%' }} prefix={exampleIcon} />
    <InputNumber status="warning" style={{ width: '100%' }} prefix={exampleIcon} />
  </Space>
);

Status.parameters = {
  docs: {
    description: {
      story: 'Add status to InputNumber with `status`, which could be `error` or `warning`.',
    },
  },
};

export const Sizes: ComponentStory<any> = () => {
  const onChange = (value: any) => {
    console.log('changed', value);
  };

  return (
    <Space>
      <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
      <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
      <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
    </Space>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story: 'Add status to InputNumber with `status`, which could be `error` or `warning`.',
    },
  },
};

export const Disabled: ComponentStory<any> = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <InputNumber min={1} max={10} disabled={disabled} defaultValue={3} />
      <div style={{ marginTop: 20 }}>
        <Button onClick={toggle} type="primary">
          Toggle disabled
        </Button>
      </div>
    </>
  );
};

Disabled.parameters = {
  docs: {
    description: {
      story: 'Click the button to toggle between available and disabled states.',
    },
  },
};

export const Formatter: ComponentStory<any> = () => {
  const onChange = (value: any) => {
    console.log('changed', value);
  };

  return (
    <Space>
      <InputNumber
        defaultValue={1000}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value!.replace(/\$\s?|(,*)/g, '')}
        onChange={onChange}
      />
      <InputNumber
        defaultValue={100}
        min={0}
        max={100}
        formatter={value => `${value}%`}
        parser={value => value!.replace('%', '')}
        onChange={onChange}
      />
    </Space>
  );
};

Formatter.parameters = {
  docs: {
    description: {
      story: `Display value within it's situation with formatter, and we usually use parser at the same time.`,
    },
  },
};

export const Borderless: ComponentStory<any> = () => (
  <InputNumber min={1} max={10} defaultValue={3} bordered={false} />
);

Borderless.parameters = {
  docs: {
    description: {
      story: `Display value within it's situation with formatter, and we usually use parser at the same time.`,
    },
  },
};

export const Prefix: ComponentStory<any> = () => (
  <>
    <InputNumber prefix="￥" style={{ width: '100%' }} />
    <br />
    <br />
    <InputNumber addonBefore={exampleIcon} prefix="￥" style={{ width: '100%' }} />
    <br />
    <br />
    <InputNumber prefix="￥" disabled style={{ width: '100%' }} />
  </>
);

Prefix.parameters = {
  docs: {
    description: {
      story: `Add a prefix inside input.`,
    },
  },
};
