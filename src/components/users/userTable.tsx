import React, { useState } from "react";
import AgGridTable from "../tableAG/tableAggrid";
import EditForm from "./form/UserForm";
import SendMessage from "../../components/users/sendMessage/sendMessage";
import { Button } from "primereact/button";

const UsersTable: React.FC = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "محمد حسین حسن زاده",
      email: "user1@example.com",
      status: "فعال",
      mobile: "09023001271",
      level: "سطح 2",
      userType: "مدیر",
    },
    {
      id: 2,
      name: "علی رضایی",
      email: "user2@example.com",
      status: "غیرفعال",
      mobile: "09926559671",
      level: "سطح 3",
      userType: "کاربر",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  const [formTitle, setFormTitle] = useState<string>("");

  const columnDefs = [
    {
      headerName: "نام",
      field: "name",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    {
      headerName: "ایمیل",
      field: "email",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    {
      headerName: "شماره تلفن",
      field: "mobile",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    {
      headerName: "نوع کاربر",
      field: "userType",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    {
      headerName: "سطح عملیات",
      field: "level",
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
    },
    { headerName: "عملیات", field: "actions" },
  ];

  const handleEdit = (userData: any) => {
    setSelectedUser(userData);
    setFormTitle("ویرایش کاربر");
    setIsEditDialogOpen(true);
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setFormTitle("افزودن کاربر");
    setIsEditDialogOpen(true);
  };

  const handleDelete = (userData: any) => {
    setData((prevData) => prevData.filter((row) => row.id !== userData.id));
    alert(`کاربر ${userData.name} حذف شد.`);
  };

  const handleSendMessage = (userData: any) => {
    setSelectedUser(userData);
    setFormTitle("ارسال پیام");
    setIsMessageDialogOpen(true);
  };

  const handleSave = (updatedData: any) => {
    if (updatedData.id) {
      setData((prevData) =>
        prevData.map((row) => (row.id === updatedData.id ? updatedData : row))
      );
    } else {
      const newUser = { ...updatedData, id: data.length + 1 };
      setData((prevData) => [...prevData, newUser]);
    }
    setIsEditDialogOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditDialogOpen(false);
    setIsMessageDialogOpen(false);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button
          label="افزودن کاربر"
          icon="pi pi-user-plus"
          className="p-button-success p-2 flex items-center gap-2"
          style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
          onClick={handleAddUser}
        />
      </div>
      <AgGridTable
        rowData={data}
        columnDefs={columnDefs}
        onEdit={handleEdit}
        onMessage={handleSendMessage}
        onDelete={handleDelete}
      />
      {isEditDialogOpen && (
        <EditForm
          title={formTitle}
          data={
            selectedUser || {
              name: "",
              email: "",
              mobile: "",
              userType: "کاربر",
              level: "سطح 1",
            }
          }
          onSave={handleSave}
          onCancel={handleCancelEdit}
        />
      )}
      {isMessageDialogOpen && selectedUser && (
        <SendMessage
          title={formTitle}
          data={selectedUser}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default UsersTable;
