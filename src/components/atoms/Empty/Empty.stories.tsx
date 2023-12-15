// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SmileOutlined } from '@ant-design/icons';
import { ConfigProvider, List, Transfer } from 'antd';

// Components
import { Empty } from './Empty';
import { Button, Switch, Divider, Space } from '../index';
import { Table } from '../../organism';
import { TreeSelect, Cascader, Select } from '../../molecules';

export default {
  title: 'Atoms/Empty',
  component: Empty,
  argTypes: {
    description: {
      name: 'description',
      description: 'Customize description	',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    image: {
      name: 'image',
      description: 'Customize image. Will treat as image url when string provided	',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Empty.PRESENTED_IMAGE_DEFAULT' },
      },
      control: null,
    },
    imageStyle: {
      name: 'imageStyle',
      description: 'The style of image',
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Empty state placeholder.' +
          '\n### When To Use' +
          '\n' +
          '- When there is no data provided, display for friendly tips.' +
          '\n' +
          '- User tutorial to create something in fresh new situation.' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Empty>;

// Default
const Template: ComponentStory<typeof Empty> = args => <Empty {...args} />;

export const Default = Template.bind({});

// Examples
export const ChoseImage = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

ChoseImage.parameters = {
  docs: {
    description: {
      story:
        'You can choose another style of image by setting `image` to `Empty.PRESENTED_IMAGE_SIMPLE`.',
    },
  },
};

export const Customize = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{ height: 60 }}
    description={
      <span>
        Customize <a href="#">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);

Customize.parameters = {
  docs: {
    description: {
      story: 'Customize image source, image size, description and extra content.',
    },
  },
};

export const ConfigProviderEmpty = () => {
  const customizeRenderEmpty = () => (
    <div style={{ textAlign: 'center' }}>
      <SmileOutlined style={{ fontSize: 20 }} />
      <p>Data Not Found</p>
    </div>
  );
  const style: React.CSSProperties = { width: 200 };
  const [customize, setCustomize] = useState(true);
  return (
    <>
      <Switch
        unCheckedChildren="default"
        checkedChildren="customize"
        checked={customize}
        onChange={setCustomize}
      />
      <Divider />
      <ConfigProvider renderEmpty={customize ? customizeRenderEmpty : undefined}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <h4>Select</h4>
          <Select style={style} />
          <h4>TreeSelect</h4>
          <TreeSelect style={style} treeData={[]} />
          <h4>Cascader</h4>
          <Cascader style={style} options={[]} showSearch />
          <h4>Transfer</h4>
          <Transfer />
          <h4>Table</h4>
          <Table
            style={{ marginTop: 8 }}
            columns={[
              { title: 'Name', dataIndex: 'name', key: 'name' },
              { title: 'Age', dataIndex: 'age', key: 'age' },
            ]}
          />
          <h4>List</h4>
          <List />
        </Space>
      </ConfigProvider>
    </>
  );
};

ConfigProviderEmpty.parameters = {
  docs: {
    description: {
      story: 'Use ConfigProvider set global Empty style.',
    },
  },
};

export const NoDescription = () => <Empty description={false} />;

NoDescription.parameters = {
  docs: {
    description: {
      story: 'Simplest Usage with no description.',
    },
  },
};
