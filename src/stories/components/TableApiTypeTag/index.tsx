import React from 'react';
import { Tag } from '../../../components/atoms';

interface TableApiTypeTagProps {
  text: any;
}
export const TableApiTypeTag: React.FC<TableApiTypeTagProps> = ({ text }) => (
  <Tag bordered color="magenta" style={{ marginRight: '0' }}>
    {text}
  </Tag>
);
