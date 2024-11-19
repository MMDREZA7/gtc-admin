// SymbolsTable.tsx
import React from 'react';
import AgGridTable from '../tableAG/tableAggrid';

const SymbolsTable: React.FC = () => {
  const data = [
    { symbol: 'USD', value: 100, change: '+1.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
    { symbol: 'EUR', value: 85, change: '-0.5%' },
  ];

  const columnDefs = [
    { headerName: 'نماد', field: 'symbol', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
    { headerName: 'ارزش', field: 'value', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
    { headerName: 'تغییرات', field: 'change', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
  ];

  return <AgGridTable rowData={data} columnDefs={columnDefs} />;
};

export default SymbolsTable;
