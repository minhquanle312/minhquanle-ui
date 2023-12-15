// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Pagination } from './Pagination';
import { ConfigProvider, PaginationProps } from 'antd';
import { Space } from '../index';

export default {
  title: 'Atoms/Pagination',
  component: Pagination,
  argTypes: {
    current: {
      name: 'current',
      description: 'Current page number	',
      table: {
        type: { summary: 'number' },
      },
      control: null,
    },
    defaultCurrent: {
      name: 'defaultCurrent	',
      defaultValue: 1,
      description: 'Default initial page number	',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      control: {
        type: 'number',
      },
    },
    defaultPageSize: {
      name: 'defaultPageSize',
      defaultValue: 10,
      description: 'Default number of data items per page	',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 },
      },
      control: {
        type: 'number',
      },
    },
    disabled: {
      name: 'disabled',
      description: 'Disable pagination	',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    hideOnSinglePage: {
      name: 'hideOnSinglePage',
      defaultValue: false,
      description: 'Whether to hide pager on single page	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    itemRender: {
      name: 'itemRender	',
      description: `To customize item's innerHTML	`,
      table: {
        type: {
          summary: `(page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode`,
        },
      },
      control: null,
    },
    pageSize: {
      name: 'pageSize	',
      description: 'Number of data items per page	',
      table: {
        type: { summary: 'number' },
      },
      control: {
        type: 'number',
      },
    },
    pageSizeOptions: {
      name: 'pageSizeOptions',
      description: 'Specify the sizeChanger options	',
      table: {
        type: { summary: 'string[] | number[]' },
        defaultValue: { summary: '[10, 20, 50, 100]' },
      },
      control: null,
    },
    responsive: {
      name: 'responsive',
      description:
        'If `size` is not specified, `Pagination` would resize according to the width of the window',
      table: {
        type: { summary: 'boolean' },
      },
      control: null,
    },
    showLessItems: {
      name: 'showLessItems',
      defaultValue: false,
      description: 'Show less page items	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: false,
      },
      control: {
        type: 'boolean',
      },
    },
    showQuickJumper: {
      name: 'showQuickJumper',
      defaultValue: false,
      description: 'Determine whether you can jump to pages directly		',
      table: {
        type: { summary: 'boolean | { goButton: ReactNode }' },
        defaultValue: false,
      },
      control: {
        type: 'boolean',
      },
    },
    showSizeChanger: {
      name: 'showSizeChanger	',
      description: 'Determine whether to show `pageSize` select, it will be true when `total > 50`',
      table: {
        type: { summary: 'boolean ' },
      },
      control: null,
    },
    showTitle: {
      name: 'showTitle	',
      defaultValue: true,
      description: `Show page item's title`,
      table: {
        type: { summary: 'boolean ' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    showTotal: {
      name: 'showTotal	',
      description: 'To display the total number and range	',
      table: {
        type: { summary: 'function(total, range) ' },
      },
      control: null,
    },
    simple: {
      name: 'simple	',
      description: 'Whether to use simple mode',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'size	',
      description: 'Specify the size of `Pagination`, can be set to `small`',
      defaultValue: 'default',
      table: {
        type: { summary: 'default | small' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
    },
    total: {
      name: 'total',
      description: 'Total number of data items',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: {
        type: 'number',
      },
    },
    onChange: {
      name: 'onChange',
      description:
        'Called when the page number or `pageSize` is changed, and it takes the resulting page number and pageSize as its arguments',
      table: {
        type: { summary: 'function(page, pageSize)' },
      },
      control: null,
    },
    onShowSizeChange: {
      name: 'onShowSizeChange	',
      description: 'Called when `pageSize` is changed	',
      table: {
        type: { summary: 'function(current, size)	' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A long list can be divided into several pages using `Pagination`, and only one page will be loaded at a time.        ' +
          '\n### When To Use' +
          '\n' +
          '- When it will take a long time to load/render all items.' +
          '\n' +
          '- If you want to browse the data by navigating through pages.' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Pagination>;

// Default
const Template: ComponentStory<typeof Pagination> = args => (
  <Pagination defaultCurrent={1} total={50} {...args} />
);

export const Basic = Template.bind({});

export const More = () => <Pagination defaultCurrent={6} total={500} />;

More.parameters = {
  docs: {
    description: {
      story: 'More pages.',
    },
  },
};

export const Changer = () => {
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize);
  };
  return (
    <>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
      <br />
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
        disabled
      />
    </>
  );
};

Changer.parameters = {
  docs: {
    description: {
      story: 'Change `pageSize.`',
    },
  },
};

export const Jumper = () => {
  const onChange: PaginationProps['onChange'] = pageNumber => {
    console.log('Page: ', pageNumber);
  };
  return (
    <>
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      <br />
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
    </>
  );
};

Jumper.parameters = {
  docs: {
    description: {
      story: 'Jump to a page directly.',
    },
  },
};

export const MiniSize = () => {
  const showTotal: PaginationProps['showTotal'] = total => `Total ${total} items`;

  return (
    <Space direction="vertical" size="middle">
      <Pagination size="small" total={50} />
      <Pagination size="small" total={50} showSizeChanger showQuickJumper />
      <Pagination size="small" total={50} showTotal={showTotal} />
      <Pagination
        size="small"
        total={50}
        disabled
        showTotal={showTotal}
        showSizeChanger
        showQuickJumper
      />
    </Space>
  );
};

MiniSize.parameters = {
  docs: {
    description: {
      story: 'Mini size pagination.',
    },
  },
};

export const SimpleMode = () => (
  <>
    <Pagination simple defaultCurrent={2} total={50} />
    <br />
    <Pagination disabled simple defaultCurrent={2} total={50} />
  </>
);

SimpleMode.parameters = {
  docs: {
    description: {
      story: 'Simple mode.',
    },
  },
};

export const Controlled = () => {
  const [current, setCurrent] = useState(3);

  const onChange: PaginationProps['onChange'] = page => {
    console.log(page);
    setCurrent(page);
  };

  return <Pagination current={current} onChange={onChange} total={50} />;
};

Controlled.parameters = {
  docs: {
    description: {
      story: 'Controlled page number.',
    },
  },
};

export const TotalNumber = () => (
  <>
    <Pagination
      total={85}
      showTotal={total => `Total ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </>
);

TotalNumber.parameters = {
  docs: {
    description: {
      story: 'You can show the total number of data by setting `showTotal`.',
    },
  },
};

export const Wireframe = () => (
  <ConfigProvider theme={{ token: { wireframe: true } }}>
    <Pagination showSizeChanger defaultCurrent={3} total={500} />
    <br />
    <Pagination showSizeChanger defaultCurrent={3} total={500} disabled />
    <br />
    <Pagination size="small" defaultCurrent={50} total={500} />
    <br />
    <Pagination disabled size="small" defaultCurrent={50} total={500} />
  </ConfigProvider>
);

Wireframe.parameters = {
  docs: {
    description: {
      story: 'Wireframe style.',
    },
  },
};

export const ComponentToken = () => {
  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            // itemSize: 20,
            // itemSizeSM: 12,
            // itemActiveBg: '#e7cc87',
            // itemLinkBg: '#344324',
            // itemActiveBgDisabled: '#9c1515',
            // itemInputBg: '#9c1515',
            // miniOptionsSizeChangerTop: 0,
            // itemBg: '#333',
          },
        },
      }}
    >
      <Pagination
        showSizeChanger
        defaultCurrent={3}
        total={500}
        itemRender={itemRender}
        showQuickJumper
        showTotal={total => `Total ${total} items`}
      />
      <br />
      <Pagination showSizeChanger defaultCurrent={3} total={500} disabled />
    </ConfigProvider>
  );
};

ComponentToken.parameters = {
  docs: {
    description: {
      story: 'Component Token Debug.',
    },
  },
};
