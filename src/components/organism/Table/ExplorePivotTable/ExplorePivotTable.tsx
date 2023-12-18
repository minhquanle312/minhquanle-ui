// Libraries
import React, { useCallback, useState } from 'react'

// Styled
import { StyledHeader, StyledTable } from './styled'

// Types
import { ColumnsType } from 'antd/es/table'
import { TData } from './types'

// Hooks
import { useDeepCompareEffect } from 'minhquanle-ui/es/hooks'

// Components
import { Typography } from 'minhquanle-ui/es/components/atoms/Typography'

// Constants
import { TEST_DATA } from './constants'

// Utils
import { buildColumns, buildDataSource } from './utils'

interface ExplorePivotTableProps {
  data: TData
  scroll?: {
    x?: number | string
    y?: number | string
  }
}

export const ExplorePivotTable: React.FC<ExplorePivotTableProps> = (props) => {
  // Props
  const { scroll, data } = props

  // State
  const [state, setState] = useState<{
    columns: ColumnsType<any>
    dataSource: any[]
  }>({
    columns: [],
    dataSource: [],
  })

  // Effects
  useDeepCompareEffect(() => {
    const columns = buildColumns(data)
    const dataSource = buildDataSource(data)

    setState((state) => ({ ...state, columns, dataSource }))
  }, [data])

  // Handles
  const renderHeader = useCallback((data: TData) => {
    const { versions, metrics, columnDimension } = data

    if (columnDimension.length) {
      const firstVersion = versions[0]
      const metric = metrics[0]

      return (
        <StyledHeader>
          <Typography style={{ color: 'white' }}>
            {firstVersion.name} / {metric.label}
          </Typography>
        </StyledHeader>
      )
    }

    return null
  }, [])

  return (
    <div>
      {renderHeader(data)}
      <StyledTable
        showHeader
        bordered
        size="small"
        scroll={scroll}
        columns={state.columns}
        dataSource={state.dataSource}
        pagination={false}
      />
    </div>
  )
}

ExplorePivotTable.defaultProps = {
  data: TEST_DATA,
  scroll: {
    x: 0,
    y: 500,
  },
}
