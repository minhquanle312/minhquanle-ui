/* eslint-disable prettier/prettier */
// Libraries
import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioChangeEvent } from 'antd';
import type { DefaultOptionType } from 'antd/es/cascader';

// Components
import { Cascader } from './Cascader';
import { Radio, Divider, Space } from '../../atoms';
import { Table } from '../../organism';

// Constants
import { TABLE_API_COLUMNS } from 'src/constants';

export default {
  title: 'Molecules/Cascader',
  component: Cascader,
  argTypes: {
    allowClear: {
      name: 'allowClear',
      defaultValue: true,
      description: 'Whether allow clear',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
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
      control: 'boolean',
    },
    bordered: {
      name: 'bordered',
      defaultValue: true,
      description: 'Whether has border style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    clearIcon: {
      name: 'clearIcon',
      defaultValue: undefined,
      description: 'The custom clear icon',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    changeOnSelect: {
      name: 'changeOnSelect',
      defaultValue: false,
      description:
        '(Work on single select) Change value on each selection if set to true, see above demo for details',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    className: {
      name: 'className',
      defaultValue: undefined,
      description: 'The additional css class',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: 'text',
    },
    defaultValue: {
      name: 'defaultValue',
      defaultValue: [],
      description: 'Initial selected value',
      table: {
        type: { summary: 'string[] | number[]' },
        defaultValue: { summary: '[]' },
      },
      control: null,
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'Whether disabled select',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    displayRender: {
      name: 'displayRender',
      defaultValue: label => label.join(`/`),
      description: 'The render function of displaying selected options',
      table: {
        type: { summary: '(label, selectedOptions) => ReactNode' },
        defaultValue: { summary: 'label => label.join(`/`)' },
      },
      control: null,
    },
    tagRender: {
      name: 'tagRender',
      defaultValue: undefined,
      description: 'Custom render function for tags in `multiple` mode',
      table: {
        type: { summary: '(label: string, onClose: function, value: string) => ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    popupClassName: {
      name: 'popupClassName',
      defaultValue: undefined,
      description: 'The additional className of popup overlay',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: 'text',
    },
    dropdownRender: {
      name: 'dropdownRender',
      defaultValue: undefined,
      description: 'Customize dropdown content',
      table: {
        type: { summary: '(menus: ReactNode) => ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    expandIcon: {
      name: 'expandIcon',
      defaultValue: undefined,
      description: 'Customize the current item expand icon',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    expandTrigger: {
      name: 'expandTrigger',
      defaultValue: 'click',
      description: 'expand current item when `click` or `hover`, one of click hover',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'click' },
      },
      control: 'select',
      options: ['click', 'hover'],
    },
    fieldNames: {
      name: 'fieldNames',
      defaultValue: `{ label: label, value: value, children: children }`,
      description: 'Custom field name for label and value and children',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{ label: label, value: value, children: children }' },
      },
      control: null,
    },
    getPopupContainer: {
      name: 'getPopupContainer',
      defaultValue: () => document.body,
      description:
        'Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative. [example](https://codepen.io/afc163/pen/zEjNOy?editors=0010)',
      table: {
        type: { summary: 'function(triggerNode)' },
        defaultValue: { summary: '() => document.body' },
      },
      control: null,
    },
    loadData: {
      name: 'loadData',
      defaultValue: undefined,
      description: 'To load option lazily, and it cannot work with `showSearch`',
      table: {
        type: { summary: '(selectedOptions) => void' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    maxTagCount: {
      name: 'maxTagCount',
      defaultValue: undefined,
      description: 'Max tag count to show. `responsive` will cost render performance',
      table: {
        type: { summary: 'number | responsive' },
        defaultValue: { summary: '-' },
      },
      control: 'number',
    },
    maxTagPlaceholder: {
      name: 'maxTagPlaceholder',
      defaultValue: undefined,
      description: 'Placeholder for not showing tags',
      table: {
        type: { summary: 'ReactNode | function(omittedValues)' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    maxTagTextLength: {
      name: 'maxTagTextLength',
      defaultValue: undefined,
      description: 'Max tag text length to show',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
      control: 'number',
    },
    notFoundContent: {
      name: 'notFoundContent',
      defaultValue: 'Not Found',
      description: 'Specify content to show when no result matches',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Not Found' },
      },
      control: 'text',
    },
    open: {
      name: 'open',
      defaultValue: undefined,
      description: 'Set visible of cascader popup',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '-' },
      },
      control: 'boolean',
    },
    options: {
      name: 'options',
      defaultValue: undefined,
      description: 'The data options of cascade',
      table: {
        type: { summary: 'Option[]' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    placeholder: {
      name: 'placeholder',
      defaultValue: 'Please select',
      description: 'The input placeholder',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Please select' },
      },
      control: 'text',
    },
    placement: {
      name: 'placement',
      defaultValue: 'bottomLeft',
      description: 'Use preset popup align config from builtinPlacements',
      table: {
        type: { summary: 'bottomLeft | bottomRight | topLeft | topRight' },
        defaultValue: { summary: 'bottomLeft' },
      },
      control: 'select',
      options: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
    },
    showSearch: {
      name: 'showSearch',
      defaultValue: 'false',
      description: 'Whether show search input in single mode',
      table: {
        type: { summary: 'boolean | Object' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    size: {
      name: 'size',
      defaultValue: undefined,
      description: 'The input size',
      table: {
        type: { summary: 'large | middle | small' },
        defaultValue: { summary: '-' },
      },
      control: 'select',
      options: ['large', 'middle', 'small'],
    },
    status: {
      name: 'status',
      defaultValue: undefined,
      description: 'Set validation status',
      table: {
        type: { summary: 'error | warning' },
        defaultValue: { summary: '-' },
      },
      control: 'select',
      options: ['error', 'warning'],
    },
    style: {
      name: 'style',
      defaultValue: undefined,
      description: 'The additional style',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    suffixIcon: {
      name: 'suffixIcon',
      defaultValue: undefined,
      description: 'The custom suffix icon',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    value: {
      name: 'value',
      defaultValue: undefined,
      description: 'The selected value',
      table: {
        type: { summary: 'string[] | number[]' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    onChange: {
      name: 'onChange',
      defaultValue: undefined,
      description: 'Callback when finishing cascader select',
      table: {
        type: { summary: '(value, selectedOptions) => void' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    onDropdownVisibleChange: {
      name: 'onDropdownVisibleChange',
      defaultValue: undefined,
      description: 'Callback when popup shown or hidden',
      table: {
        type: { summary: '(value) => void' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    multiple: {
      name: 'multiple',
      defaultValue: undefined,
      description: 'Support multiple or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '-' },
      },
      control: 'boolean',
    },
    removeIcon: {
      name: 'removeIcon',
      defaultValue: undefined,
      description: 'The custom remove icon',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    showCheckedStrategy: {
      name: 'showCheckedStrategy',
      defaultValue: 'Cascader.SHOW_PARENT',
      description:
        '	The way show selected item in box. ** `SHOW_CHILD`: ** just show child treeNode. `Cascader.SHOW_PARENT`: just show parent treeNode (when all child treeNode under the parent treeNode are checked)',
      table: {
        type: { summary: 'Cascader.SHOW_PARENT | Cascader.SHOW_CHILD' },
        defaultValue: { summary: 'Cascader.SHOW_PARENT' },
      },
      control: 'select',
      options: ['Cascader.SHOW_PARENT', 'Cascader.SHOW_CHILD'],
    },
    searchValue: {
      name: 'searchValue',
      defaultValue: undefined,
      description: 'Set search value，Need work with `showSearch`',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: 'text',
    },
    onSearch: {
      name: 'onSearch',
      defaultValue: undefined,
      description: 'The callback function triggered when input changed',
      table: {
        type: { summary: '(search: string) => void' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    dropdownMenuColumnStyle: {
      name: 'dropdownMenuColumnStyle',
      defaultValue: undefined,
      description: 'The style of the drop-down menu column',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    loadingIcon: {
      name: 'loadingIcon',
      defaultValue: undefined,
      description: 'The appearance of lazy loading (now is useless)',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Cascade selection box.
  - When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
  - When selecting from a large data set, with multi-stage classification separated for easy selection.
  - Chooses cascade items in one float layer for better user experience.
        `,
      },
    },
  },
} as ComponentMeta<typeof Cascader>;

// Default
const Template: ComponentStory<typeof Cascader> = args => <Cascader {...args} />;
export const Default = Template.bind({});

Default.args = {};

// Examples
export const Basic: ComponentStory<any> = () => {
  interface Option {
    value: string | number;
    label: string;
    children?: Option[];
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (_value: string[]) => {
    // Do something
  };

  return <Cascader options={options} onChange={() => onChange} placeholder="Please select" />;
};

Basic.parameters = {
  docs: {
    description: {
      story: 'Cascade selection box for selecting province/city/district.',
    },
  },
};

export const CustomTrigger: ComponentStory<any> = () => {
  interface Option {
    value: string;
    label: string;
    children?: Option[];
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
        },
      ],
    },
  ];

  const [text, setText] = useState('Unselect');

  const onChange = (_: string[], selectedOptions: Option[]) => {
    setText(selectedOptions.map(o => o.label).join(', '));
  };

  return (
    <span>
      {text}
      &nbsp;
      <Cascader options={options} onChange={() => onChange}>
        <a href="#">Change city</a>
      </Cascader>
    </span>
  );
};

CustomTrigger.parameters = {
  docs: {
    description: {
      story: 'Separate trigger button and result.',
    },
  },
};

export const DisabledOption: ComponentStory<any> = () => {
  interface Option {
    value: string;
    label: string;
    disabled?: boolean;
    children?: Option[];
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      disabled: true,
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (_value: string[]) => {
    // Do something
  };

  return <Cascader options={options} onChange={() => onChange} />;
};

DisabledOption.parameters = {
  docs: {
    description: {
      story: 'Disable option by specifying the `disabled` property in `options.`',
    },
  },
};

export const Multiple: ComponentStory<any> = () => {
  interface Option {
    value: string | number;
    label: string;
    children?: Option[];
    disableCheckbox?: boolean;
  }

  const options: Option[] = [
    {
      label: 'Light',
      value: 'light',
      children: new Array(20)
        .fill(null)
        .map((_, index) => ({ label: `Number ${index}`, value: index })),
    },
    {
      label: 'Bamboo',
      value: 'bamboo',
      children: [
        {
          label: 'Little',
          value: 'little',
          children: [
            {
              label: 'Toy Fish',
              value: 'fish',
              disableCheckbox: true,
            },
            {
              label: 'Toy Cards',
              value: 'cards',
            },
            {
              label: 'Toy Bird',
              value: 'bird',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (_value: string[][]) => {
    // Do something
  };

  return (
    <Cascader
      style={{ width: '100%' }}
      options={options}
      onChange={() => onChange}
      multiple
      maxTagCount="responsive"
    />
  );
};

Multiple.parameters = {
  docs: {
    description: {
      story:
        'Select multiple options. Disable the `checkbox` by adding the `disableCheckbox` property and selecting a specific item. The style of the disable can be modified by the className.',
    },
  },
};

export const Size: ComponentStory<any> = () => {
  interface Option {
    value: string;
    label: string;
    children?: Option[];
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (_value: string[]) => {
    // Do something
  };

  return (
    <>
      <Cascader size="large" options={options} onChange={() => onChange} />
      <br />
      <br />
      <Cascader options={options} onChange={() => onChange} />
      <br />
      <br />
      <Cascader size="small" options={options} onChange={() => onChange} />
      <br />
      <br />
    </>
  );
};

Size.parameters = {
  docs: {
    description: {
      story: 'Cascade selection box of different sizes.',
    },
  },
};

export const Search: ComponentStory<any> = () => {
  interface Option {
    value: string;
    label: string;
    children?: Option[];
    disabled?: boolean;
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
            {
              value: 'xiasha',
              label: 'Xia Sha',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua men',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (_value: string[], _selectedOptions?: Option[]) => {
    // Do something
  };

  const filter = (inputValue: string, path: DefaultOptionType[]) =>
    path.some(
      option => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
    );
  return (
    <Cascader
      options={options}
      onChange={() => onChange}
      placeholder="Please select"
      showSearch={{ filter }}
      onSearch={value => onChange([value])}
    />
  );
};

Search.parameters = {
  docs: {
    description: {
      story: 'Search and select options directly.',
    },
  },
};

export const CustomFieldNames: ComponentStory<any> = () => {
  interface Option {
    code: string;
    name: string;
    items?: Option[];
  }

  const options: Option[] = [
    {
      code: 'zhejiang',
      name: 'Zhejiang',
      items: [
        {
          code: 'hangzhou',
          name: 'Hangzhou',
          items: [
            {
              code: 'xihu',
              name: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      code: 'jiangsu',
      name: 'Jiangsu',
      items: [
        {
          code: 'nanjing',
          name: 'Nanjing',
          items: [
            {
              code: 'zhonghuamen',
              name: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (_value: string[]) => {
    // Do something
  };

  return (
    <Cascader
      fieldNames={{ label: 'name', value: 'code', children: 'items' }}
      options={options}
      onChange={() => onChange}
      placeholder="Please select"
    />
  );
};

CustomFieldNames.parameters = {
  docs: {
    description: {
      story: 'Custom field names.',
    },
  },
};

export const Placement: ComponentStory<any> = () => {
  interface Option {
    value: string;
    label: string;
    children?: Option[];
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const [placement, SetPlacement] = useState<'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'>(
    'topLeft',
  );

  const placementChange = (e: RadioChangeEvent) => {
    SetPlacement(e.target.value);
  };

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
      <Cascader options={options} placeholder="Please select" placement={placement} />
    </>
  );
};

Placement.parameters = {
  docs: {
    description: {
      story: 'You can manually specify the position of the popup via `placement`.',
    },
  },
};

export const DefaultValue: ComponentStory<any> = () => {
  interface Option {
    value: string;
    label: string;
    children?: Option[];
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (_value: string[]) => {
    // Do something
  };

  return (
    <Cascader
      defaultValue={['zhejiang', 'hangzhou', 'xihu']}
      options={options}
      onChange={() => onChange}
    />
  );
};

DefaultValue.parameters = {
  docs: {
    description: {
      story: 'Specifies default value by an array.',
    },
  },
};

export const Hover: ComponentStory<any> = () => {
  interface Option {
    value: string;
    label: string;
    children?: Option[];
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (_value: string[]) => {
    // Do something
  };

  // Just show the latest item.
  const displayRender = (labels: string[]) => labels[labels.length - 1];

  return (
    <Cascader
      options={options}
      expandTrigger="hover"
      displayRender={displayRender}
      onChange={() => onChange}
    />
  );
};

Hover.parameters = {
  docs: {
    description: {
      story: 'Hover to expand sub menu, click to select option.',
    },
  },
};

export const ChangeOnSelect: ComponentStory<any> = () => {
  interface Option {
    value: string;
    label: string;
    children?: Option[];
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hanzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (_value: string[]) => {
    // Do something
  };

  return <Cascader options={options} onChange={() => onChange} changeOnSelect />;
};

ChangeOnSelect.parameters = {
  docs: {
    description: {
      story: 'Allow only select parent options.',
    },
  },
};

export const ShowCheckedStrategy: ComponentStory<any> = () => {
  const { SHOW_CHILD } = Cascader;

  interface Option {
    value: string | number;
    label: string;
    children?: Option[];
  }

  const options: Option[] = [
    {
      label: 'Light',
      value: 'light',
      children: new Array(20)
        .fill(null)
        .map((_, index) => ({ label: `Number ${index}`, value: index })),
    },
    {
      label: 'Bamboo',
      value: 'bamboo',
      children: [
        {
          label: 'Little',
          value: 'little',
          children: [
            {
              label: 'Toy Fish',
              value: 'fish',
            },
            {
              label: 'Toy Cards',
              value: 'cards',
            },
            {
              label: 'Toy Bird',
              value: 'bird',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (_value: string[][]) => {
    // Do something
  };

  return (
    <>
      <Cascader
        style={{ width: '100%' }}
        options={options}
        onChange={() => onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ['bamboo', 'little', 'fish'],
          ['bamboo', 'little', 'cards'],
          ['bamboo', 'little', 'bird'],
        ]}
      />
      <br />
      <br />
      <Cascader
        style={{ width: '100%' }}
        options={options}
        onChange={() => onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={['bamboo']}
      />
    </>
  );
};

ShowCheckedStrategy.parameters = {
  docs: {
    description: {
      story: 'The way show selected item in box using `ShowCheckedStrategy`.',
    },
  },
};

export const CustomRender: ComponentStory<any> = () => {
  interface Option {
    value: string;
    label: string;
    children?: Option[];
    code?: number;
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              code: 752100,
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              code: 453400,
            },
          ],
        },
      ],
    },
  ];

  const handleAreaClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    _label: string,
    _option: DefaultOptionType,
  ) => {
    e.stopPropagation();
    // Do something
  };

  const displayRender = (labels: string[], selectedOptions?: DefaultOptionType[]) =>
    labels.map((label, i) => {
      const option = selectedOptions ? selectedOptions[i] : undefined;
      if (i === labels.length - 1 && option) {
        return (
          <span key={option.value}>
            {label} (<a onClick={e => handleAreaClick(e, label, option)}>{option.code}</a>)
          </span>
        );
      }
      return <span key={option ? option.value : null}>{label} / </span>;
    });

  return (
    <Cascader
      options={options}
      defaultValue={['zhejiang', 'hangzhou', 'xihu']}
      displayRender={displayRender}
      style={{ width: '100%' }}
    />
  );
};

CustomRender.parameters = {
  docs: {
    description: {
      story: 'For instance, add an external link after the selected value.',
    },
  },
};

export const LoadOptionsLazily: ComponentStory<any> = () => {
  interface Option {
    value?: string | number | null;
    label: React.ReactNode;
    children?: Option[];
    isLeaf?: boolean;
  }

  const optionLists: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      isLeaf: false,
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      isLeaf: false,
    },
  ];

  const [options, setOptions] = useState<Option[]>(optionLists);

  const onChange = (_value: (string | number)[], _selectedOptions: Option[]) => {
    // Do something
  };

  const loadData = (selectedOptions: Option[]) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];

    // load options lazily
    setTimeout(() => {
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 1000);
  };

  return <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />;
};

LoadOptionsLazily.parameters = {
  docs: {
    description: {
      story: 'Load options lazily with `loadData`.',
    },
  },
};

export const CustomDropdown: ComponentStory<any> = () => {
  interface Option {
    value: string;
    label: string;
    children?: Option[];
  }

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const dropdownRender = (menus: React.ReactNode) => (
    <div>
      {menus}
      <Divider style={{ margin: 0 }} />
      <div style={{ padding: 8 }}>The footer is not very short.</div>
    </div>
  );

  return <Cascader options={options} dropdownRender={dropdownRender} placeholder="Please select" />;
};

CustomDropdown.parameters = {
  docs: {
    description: {
      story: 'Customize the dropdown menu via `dropdownRender`.',
    },
  },
};

export const Status: ComponentStory<any> = () => (
  <Space direction="vertical">
    <Cascader status="error" placeholder="Error" />
    <Cascader status="warning" multiple placeholder="Warning multiple" />
  </Space>
);

Status.parameters = {
  docs: {
    description: {
      story: 'Add status to Cascader with `status`, which could be `error` or `warning`.',
    },
  },
};

export const ShowSearchAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'filter',
      description: `The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded`,
      type: 'function(inputValue, path): boolean',
      default: '-',
    },
    {
      key: '2',
      property: 'limit',
      description: 'Set the count of filtered items',
      type: 'number | false',
      default: 50,
    },
    {
      key: '3',
      property: 'matchInputWidth',
      description: (
        <>
          Whether the width of list matches input, (
          <a href="https://github.com/ant-design/ant-design/issues/25779">how it looks</a>)
        </>
      ),
      type: 'boolean',
      default: 'true',
    },
    {
      key: '4',
      property: 'render',
      description: 'Used to render filtered options',
      type: 'function(inputValue, path): ReactNode',
      default: '-',
    },
    {
      key: '5',
      property: 'sort',
      description: 'Used to sort filtered options',
      type: 'function(a, b, inputValue)',
      default: '-',
    },
  ];

  return <Table dataSource={dataSource} columns={TABLE_API_COLUMNS} pagination={false} />;
};

ShowSearchAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
};
