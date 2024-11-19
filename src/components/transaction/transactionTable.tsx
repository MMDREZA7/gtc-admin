// TradesTable.tsx
import React from 'react';
import AgGridTable from '../tableAG/tableAggrid';

const TradesTable: React.FC = () => {
  const data = [
    { tradeId: 'TRD1', symbol: 'طلا', quantity: 10, change: '+2.5%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
    { tradeId: 'TRD2', symbol: 'نقره', quantity: 5, change: '-1.2%' },
  ];

  const columnDefs = [
    { headerName: 'نماد', field: 'symbol', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
    { headerName: 'تعداد', field: 'quantity', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
    { headerName: 'تغییرات', field: 'change', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
  ];

  return <AgGridTable rowData={data} columnDefs={columnDefs} />;
};

export default TradesTable;
