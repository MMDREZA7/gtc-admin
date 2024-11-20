import React, { useState } from "react";
import "primereact/resources/themes/vela-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./styles.css";
import UsersTable from "../users/userTable";
import OrdersTable from "../orders/ordersTable";
import TradesTable from "../transaction/transactionTable";
import SymbolsTable from "../stocks/stockTable";
import TicketsTable from "../tickets/ticketTable";

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { label: "کاربران", icon: "pi pi-users", tab: "users" },
    { label: "سفارشات", icon: "pi pi-file", tab: "orders" },
    { label: "معاملات", icon: "pi pi-chart-line", tab: "trades" },
    { label: "نمادها", icon: "pi pi-sitemap", tab: "symbols" },
    { label: "تیکت‌ها", icon: "pi pi-ticket", tab: "tickets" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      <button
        className="md:hidden bg-yellow-400 text-black px-4 py-2 fixed top-4 right-4 z-50 rounded-lg flex items-center justify-center"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i
          className={`pi ${sidebarOpen ? "pi-times" : "pi-bars"} text-2xl`}
        ></i>
      </button>

      <div
        className={`sidebar bg-[#1a2332] md:static md:w-64 w-full fixed top-0 ${
          sidebarOpen ? "right-0" : "-right-full"
        } md:min-h-screen h-full p-4 shadow-lg z-40 transition-all duration-300`}
      >
        <h1 className="text-2xl font-bold text-center text-yellow-400 mb-6">
          پنل مدیریت
        </h1>
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                activeTab === item.tab
                  ? "bg-yellow-600 text-black scale-105"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => {
                setActiveTab(item.tab);
                setSidebarOpen(false);
              }}
            >
              <i className={`${item.icon} text-lg`}></i>
              <span className="text-base font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full p-4 flex-1">
        <div className="content-container">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-right">
            {menuItems.find((item) => item.tab === activeTab)?.label}
          </h2>
          <div>
            {activeTab === "users" && <UsersTable />}
            {activeTab === "orders" && <OrdersTable />}
            {activeTab === "trades" && <TradesTable />}
            {activeTab === "symbols" && <SymbolsTable />}
            {activeTab === "tickets" && <TicketsTable />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
