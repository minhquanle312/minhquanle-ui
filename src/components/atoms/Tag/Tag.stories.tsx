// Libraries
import React, { useEffect, useRef, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

// Antd
import { Divider, Input, InputRef, Space, Tooltip, theme } from 'antd';
import {
  PlusOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

// Components
import { Tag } from './Tag';
import { Table } from '../../organism';

// Constants
import { TABLE_API_COLUMNS } from 'src/constants';

export default {
  title: 'Atoms/Tag',
  component: Tag,
  argTypes: {
    closable: {
      name: 'closable',
      defaultValue: false,
      description: 'Whether the Tag can be closed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    closeIcon: {
      name: 'closeIcon',
      defaultValue: undefined,
      description: 'Custom close icon',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    color: {
      name: 'color',
      defaultValue: undefined,
      description: 'Color of the Tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: 'color',
    },
    icon: {
      name: 'icon',
      defaultValue: undefined,
      description: 'Set the icon of tag',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    bordered: {
      name: 'bordered',
      defaultValue: false,
      description: 'Whether has border style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    onClose: {
      name: 'onClose',
      defaultValue: undefined,
      description: 'Callback executed when tag is closed',
      table: {
        type: { summary: '(e) => void' },
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
Tag for categorizing or markup.
- It can be used to tag by dimension or property.
- When categorizing.
      `,
      },
    },
  },
} as ComponentMeta<typeof Tag>;

// Default
const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: 'Tag',
};

// Examples
export const Basic: ComponentStory<any> = () => {
  const log = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // Do something
  };

  const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // Do something
  };
  return (
    <Space size={[0, 8]} wrap>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
      </Tag>
      <Tag closable onClose={log}>
        Tag 2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
    </Space>
  );
};

Basic.parameters = {
  docs: {
    description: {
      story:
        'Usage of basic Tag, and it could be closable by set `closable` property. Closable Tag supports `onClose` events.',
    },
  },
};

export const ColorfulTag: ComponentStory<any> = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <Space size={[0, 8]} wrap>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </Space>
    <Divider orientation="left">Custom</Divider>
    <Space size={[0, 8]} wrap>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </Space>
  </>
);

ColorfulTag.parameters = {
  docs: {
    description: {
      story: `
  We preset a series of colorful tag styles for use in different situations. 
  You can also set it to a hex color string for custom color.
      `,
    },
  },
};

export const StatusTag: ComponentStory<any> = () => (
  <>
    <Divider orientation="left">Without icon</Divider>
    <Space size={[0, 8]} wrap>
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>
    </Space>
    <Divider orientation="left">With icon</Divider>
    <Space size={[0, 8]} wrap>
      <Tag icon={<CheckCircleOutlined />} color="success">
        success
      </Tag>
      <Tag icon={<SyncOutlined spin />} color="processing">
        processing
      </Tag>
      <Tag icon={<CloseCircleOutlined />} color="error">
        error
      </Tag>
      <Tag icon={<ExclamationCircleOutlined />} color="warning">
        warning
      </Tag>
      <Tag icon={<ClockCircleOutlined />} color="default">
        waiting
      </Tag>
      <Tag icon={<MinusCircleOutlined />} color="default">
        stop
      </Tag>
    </Space>
  </>
);

StatusTag.parameters = {
  docs: {
    description: {
      story:
        'We preset five different colors, you can set color property such as `success`,`processing`,`error`,`default` and `warning` to indicate specific status.',
    },
  },
};

export const Checkable: ComponentStory<any> = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);
  const tagsData = ['Movies', 'Books', 'Music', 'Sports'];
  const { CheckableTag } = Tag;

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <>
      <span style={{ marginRight: 8 }}>Categories:</span>
      <Space size={[0, 8]} wrap>
        {tagsData.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={checked => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Space>
    </>
  );
};

Checkable.parameters = {
  docs: {
    description: {
      story: '`CheckableTag` works like Checkbox, click it to toggle checked state.',
    },
  },
};

export const Icon: ComponentStory<any> = () => (
  <Space size={[0, 8]} wrap>
    <Tag icon={<TwitterOutlined />} color="#55acee">
      Twitter
    </Tag>
    <Tag icon={<YoutubeOutlined />} color="#cd201f">
      Youtube
    </Tag>
    <Tag icon={<FacebookOutlined />} color="#3b5999">
      Facebook
    </Tag>
    <Tag icon={<LinkedinOutlined />} color="#55acee">
      LinkedIn
    </Tag>
  </Space>
);

Icon.parameters = {
  docs: {
    description: {
      story: [
        '`Tag` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Tag`.',
        'If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Tag` rather than using the icon property.',
      ].join('<br />'),
    },
  },
};

export const Borderless: ComponentStory<any> = () => (
  <>
    <Space size={[0, 'small']} wrap>
      <Tag bordered={false}>Tag 1</Tag>
      <Tag bordered={false}>Tag 2</Tag>
      <Tag bordered={false} closable>
        Tag 3
      </Tag>
      <Tag bordered={false} closable>
        Tag 4
      </Tag>
    </Space>
    <Divider />
    <Space size={[0, 'small']} wrap>
      <Tag bordered={false} color="processing">
        processing
      </Tag>
      <Tag bordered={false} color="success">
        success
      </Tag>
      <Tag bordered={false} color="error">
        error
      </Tag>
      <Tag bordered={false} color="warning">
        warning
      </Tag>
      <Tag bordered={false} color="magenta">
        magenta
      </Tag>
      <Tag bordered={false} color="red">
        red
      </Tag>
      <Tag bordered={false} color="volcano">
        volcano
      </Tag>
      <Tag bordered={false} color="orange">
        orange
      </Tag>
      <Tag bordered={false} color="gold">
        gold
      </Tag>
      <Tag bordered={false} color="lime">
        lime
      </Tag>
      <Tag bordered={false} color="green">
        green
      </Tag>
      <Tag bordered={false} color="cyan">
        cyan
      </Tag>
      <Tag bordered={false} color="blue">
        blue
      </Tag>
      <Tag bordered={false} color="geekblue">
        geekblue
      </Tag>
      <Tag bordered={false} color="purple">
        purple
      </Tag>
    </Space>
  </>
);

Borderless.parameters = {
  docs: {
    description: {
      story: 'Borderless.',
    },
  },
};

export const AddAndRemoveDynamically: ComponentStory<any> = () => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter(tag => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setInputValue('');
  };

  const tagInputStyle: React.CSSProperties = {
    width: 78,
    verticalAlign: 'top',
  };

  const tagPlusStyle: React.CSSProperties = {
    background: token.colorBgContainer,
    borderStyle: 'dashed',
  };

  return (
    <Space size={[0, 8]} wrap>
      <Space size={[0, 8]} wrap>
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Input
                ref={editInputRef}
                key={tag}
                size="small"
                style={tagInputStyle}
                value={editInputValue}
                onChange={handleEditInputChange}
                onBlur={handleEditInputConfirm}
                onPressEnter={handleEditInputConfirm}
              />
            );
          }
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              key={tag}
              closable={index !== 0}
              style={{ userSelect: 'none' }}
              onClose={() => handleClose(tag)}
            >
              <span
                onDoubleClick={e => {
                  if (index !== 0) {
                    setEditInputIndex(index);
                    setEditInputValue(tag);
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
      </Space>
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag style={tagPlusStyle} onClick={showInput}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </Space>
  );
};

AddAndRemoveDynamically.parameters = {
  docs: {
    description: {
      story: 'Generating a set of Tags by array, you can add and remove dynamically.',
    },
  },
};

export const CheckableTagAPI: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'checked',
      description: `Checked status of Tag`,
      type: 'boolean',
      default: 'false',
    },
    {
      key: '2',
      property: 'onChange',
      description: 'Callback executed when Tag is checked/unchecked',
      type: 'Callback executed when Tag is checked/unchecked',
      default: '-',
    },
  ];

  return <Table dataSource={dataSource} columns={TABLE_API_COLUMNS} pagination={false} />;
};

CheckableTagAPI.parameters = {
  docs: {
    description: {
      story: '',
    },
    source: {
      code: null,
    },
  },
};
