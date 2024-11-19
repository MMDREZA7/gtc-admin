import WebSocketService from "../services/socket/websocket";
import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";

export const WebSocketContext = createContext<typeof WebSocketService | null>(null);

export const WebSocketProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [socketData, setSocketData] = useState<string[] | null>(null);


    const location = useLocation()

    useEffect(() => {
        WebSocketService.startConnection();
        setSocketData(WebSocketService.messageUpdatedBuySellLists);
        return () => {
            WebSocketService.closeConnection();
        };
    }, [location, WebSocketService.socket]);

    return (
        <WebSocketContext.Provider value={WebSocketService}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => {
    return useContext(WebSocketContext);
};
