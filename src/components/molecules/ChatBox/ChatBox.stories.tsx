// /* eslint-disable no-console */
// // Libraries
// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// // Components
// import { AdvancedPicker } from './ChatBox';

// // Constants
// import { CALCULATION_TYPES, DATE_TYPES } from './constants';

// export default {
//   title: 'Molecules/DatePicker/AdvancedPicker',
//   component: AdvancedPicker,
//   argTypes: {
//     label: {
//       name: 'label',
//       defaultValue: undefined,
//       description: 'Show label for AdvancedPicker input',
//       table: {
//         type: { summary: 'string' },
//         defaultValue: { summary: '' },
//       },
//       control: {
//         type: 'text',
//       },
//     },
//     dateTypeKeysShow: {
//       name: 'dateTypeKeysShow',
//       defaultValue: undefined,
//       description: 'List of dateTypes to display',
//       table: {
//         type: { summary: 'TDateType[]' },
//         defaultValue: { summary: '-' },
//       },
//       control: {
//         type: 'check',
//       },
//       options: DATE_TYPES.map(({ value }) => value),
//     },
//     calculationTypeKeysShow: {
//       name: 'calculationTypeKeysShow',
//       defaultValue: undefined,
//       description: 'List of calculationTypes to display',
//       table: {
//         type: { summary: 'TCalculationType[]' },
//         defaultValue: { summary: '-' },
//       },
//       control: {
//         type: 'check',
//       },
//       options: CALCULATION_TYPES.map(({ value }) => value),
//     },
//     defaultDateTypeKey: {
//       name: 'defaultDateTypeKey',
//       defaultValue: undefined,
//       description: 'Put the desired datetype at the top of the select list',
//       table: {
//         type: { summary: 'TDateType' },
//         defaultValue: { summary: '-' },
//       },
//       control: {
//         type: 'select',
//       },
//       options: DATE_TYPES.map(({ value }) => value),
//     },
//     valueType: {
//       name: 'valueType',
//       defaultValue: undefined,
//       description: 'Represents format of Date',
//       table: {
//         type: { summary: 'string' },
//         defaultValue: { summary: '-' },
//       },
//       control: {
//         type: 'text',
//       },
//     },
//   },
//   parameters: {
//     docs: {
//       description: {
//         component: 'To select a dynamic date.',
//       },
//     },
//   },
// } as ComponentMeta<typeof AdvancedPicker>;

// // Default
// const Template: ComponentStory<typeof AdvancedPicker> = args => <AdvancedPicker {...args} />;

// export const Default = Template.bind({});

// Default.args = {
//   showCalculationTypeCondition: {
//     dateType: {
//       today: ['minus'],
//     },
//   },
// };
