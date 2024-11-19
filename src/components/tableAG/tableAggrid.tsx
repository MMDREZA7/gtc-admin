import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.min.css';
import './styles.css';
import { Button } from 'primereact/button';

interface AgGridTableProps {
  rowData: any[];
  columnDefs: any[];
  onEdit?: (data: any) => void;
  onMessage?: (data: any) => void;
  onDelete?: (data: any) => void;
}

const AgGridTable: React.FC<AgGridTableProps> = ({ rowData, columnDefs, onEdit, onMessage, onDelete }) => {
  const actionCellRenderer = (params: any) => (
    <div className="actions-container flex gap-2 justify-center">
      {onDelete && (
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger p-button-sm action-button"
          tooltip="حذف"
          onClick={(event) => {
            event.stopPropagation();
            onDelete(params.data);
          }}
        />
      )}
      {onEdit && (
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-warning p-button-sm action-button"
          tooltip="ویرایش"
          onClick={(event) => {
            event.stopPropagation();
            onEdit(params.data);
          }}
        />
      )}
      {onMessage && (
        <Button
          icon="pi pi-envelope"
          className="p-button-rounded p-button-info p-button-sm action-button"
          tooltip="ارسال پیام"
          onClick={(event) => {
            event.stopPropagation();
            onMessage(params.data);
          }}
        />
      )}
    </div>
  );

  const updatedColumnDefs = columnDefs.map((col) => {
    if (col.field === 'actions') {
      return {
        ...col,
        cellRenderer: actionCellRenderer,
        cellStyle: { textAlign: 'center' },
      };
    }
    return col;
  });

  return (
    <div className="relative">
      <div className="ag-theme-alpine w-full h-screen overflow-hidden">
        <AgGridReact
          enableRtl
          rowData={rowData}
          columnDefs={updatedColumnDefs}
          defaultColDef={{
            resizable: true,
            sortable: true,
            flex: 1,
            minWidth: 120,
          }}
        />
      </div>
    </div>
  );
};

export default AgGridTable;
