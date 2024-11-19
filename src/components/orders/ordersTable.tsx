// OrdersTable.tsx
import React from 'react';
import AgGridTable from '../tableAG/tableAggrid';

const OrdersTable: React.FC = () => {
  const data = [
    { id: 101, product: 'محصول ۱', amount: 2, status: 'تکمیل شده' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
    { id: 102, product: 'محصول ۲', amount: 1, status: 'در انتظار' },
  ];

  const columnDefs = [
    { headerName: 'محصول', field: 'product', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
    { headerName: 'تعداد', field: 'amount', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
    { headerName: 'وضعیت', field: 'status', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
  ];

  return <AgGridTable rowData={data} columnDefs={columnDefs} />;
};

export default OrdersTable;
