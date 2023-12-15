import styled from 'styled-components';
import { Table } from '../Table';

export const StyledTable = styled(Table)`
  .antsomi-table-thead {
    .antsomi-table-cell {
      background-color: white !important;
      font-weight: 400 !important;
    }
  }
`;

export const StyledHeader = styled.div`
  background-color: #4285f4;
  padding: 8px 10px;
  text-align: right;
`;
