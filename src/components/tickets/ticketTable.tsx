// TicketsTable.tsx
import React from 'react';
import AgGridTable from '../tableAG/tableAggrid';

const TicketsTable: React.FC = () => {
  const data = [
    { ticketId: 'TK1', issue: 'مشکل ۱', status: 'باز' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
    { ticketId: 'TK2', issue: 'مشکل ۲', status: 'بسته' },
  ];

  const columnDefs = [
    { headerName: 'شناسه تیکت', field: 'ticketId', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
    { headerName: 'مشکل', field: 'issue', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
    { headerName: 'وضعیت', field: 'status', cellStyle: { textAlign: 'center' }, headerClass: 'header-center' },
  ];

  return <AgGridTable rowData={data} columnDefs={columnDefs} />;
};

export default TicketsTable;
