// Libraries
import React, { useMemo } from 'react';
import { TCellType } from '../../types';
import { BarCell } from './styled';

interface CustomCellProps {
  value: any;
  record: Record<string, any>;
  index?: number;
  max?: number;
  type: TCellType;
}

export const CustomCell: React.FC<CustomCellProps> = props => {
  const { value, record, type, max, index } = props;

  const width = useMemo(() => {
    const draftWidth = (value * 100) / (max || 1);

    return draftWidth > 100 ? 100 : draftWidth;
  }, [value, max]);

  const renderCustomCell = () => {
    switch (type) {
      case 'bar':
        return (
          <>
            <BarCell style={{ width: `${width}%` }}>
              <div className="bar-line" style={{ backgroundColor: '#4285f4' }} />
            </BarCell>
            {value}
          </>
        );

      default:
        return value;
    }
  };

  return <>{renderCustomCell()}</>;
};
