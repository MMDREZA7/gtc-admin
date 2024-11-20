// SymbolsTable.tsx
import React from "react";
import AgGridTable from "../tableAG/tableAggrid";

interface Ticket {
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  name: "string";
  price: 0;
  minPrice: 0;
  maxPrice: 0;
  commissionTomanBase: 0;
  commissionGoldBase: 0;
  commissionTradeBase: 0;
}

const SymbolsTable: React.FC = () => {
  const data: Ticket[] = [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      commissionTomanBase: 0,
      commissionGoldBase: 0,
      commissionTradeBase: 0,
    },
  ];

  const columnDefs = [
    {
      headerName: "نماد",
      field: "name",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    {
      headerName: "قیمت",
      field: "price",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    {
      headerName: "کمترین ارزش",
      field: "minPrice",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    {
      headerName: "بیشترین ارزش",
      field: "maxPrice",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    {
      headerName: "کمیسون تومان",
      field: "commissionTomanBase",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    {
      headerName: "کمیسون طلا",
      field: "commissionGoldBase",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    {
      headerName: "کمیسیون تجارت اصلی",
      field: "commissionTradeBase",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
  ];

  return <AgGridTable rowData={data} columnDefs={columnDefs} />;
};

export default SymbolsTable;
