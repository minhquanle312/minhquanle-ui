// Libraries
import React, { useMemo } from 'react'

// Types
import { TCellType } from '../../types'

// Styled
import { BarCell, HeatCell, StyledValue } from './styled'

// Utils
import { generateHeatMapColor, hexToRgb } from 'minhquanle-ui/es/utils'
import { GRAND_TOTAL_KEY } from '../../constants'

interface CustomCellProps {
  value: any
  record: Record<string, any>
  index?: number
  max?: number
  type: TCellType
  color?: string
}

export const CustomCell: React.FC<CustomCellProps> = (props) => {
  const { value, color, type, max, record, index: _index } = props

  const width = useMemo(() => {
    const draftWidth = (value * 100) / (max || 1)

    return draftWidth > 100 ? 100 : draftWidth
  }, [value, max])

  const renderCustomCell = (record: Record<string, any>) => {
    const { key } = record
    const formatValue = value.toLocaleString()

    if (key === GRAND_TOTAL_KEY) {
      return <strong>{formatValue}</strong>
    }

    switch (type) {
      case 'bar':
        return (
          <>
            <BarCell style={{ width: `${width}%` }}>
              <div className="bar-line" style={{ backgroundColor: color }} />
            </BarCell>
            <StyledValue>{formatValue}</StyledValue>
          </>
        )

      case 'heat':
        return (
          <>
            <HeatCell
              style={{
                backgroundColor: generateHeatMapColor(
                  value,
                  max || 0,
                  hexToRgb(color || '')
                ),
              }}
            />
            <StyledValue>{formatValue}</StyledValue>
          </>
        )
      default:
        return formatValue
    }
  }

  return <>{renderCustomCell(record)}</>
}

CustomCell.defaultProps = {
  color: '#4285F4',
  type: 'text',
}
