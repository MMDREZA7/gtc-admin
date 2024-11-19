import { getCookie } from "../../utils/manageCookies";
import { EventEmitter } from "events";

interface Order {
    price: string;
    weight: number;
    totalPrice: string;
    highlight?: boolean;
}

interface FirstPageData {
    openBuyOrders?: Order[];
    openSellOrders?: Order[];
    // Add any other relevant properties here
}

class WebSocketService extends EventEmitter {
    private static _instance: WebSocketService;
    public socket: WebSocket | null = null;
    public messageUpdatedBuySellLists: any = null;
    public messageHeaderInfo: any = null;
    public messageTransactionList: any = null;
    public messageUserOpenOrders: any = null;
    public messageUserOrderHistory : any = null;
    public firstPageData: FirstPageData | null = null;

    private constructor() {
        super();
    }

    public static getInstance(): WebSocketService {
        if (!WebSocketService._instance) {
            WebSocketService._instance = new WebSocketService();
        }
        return WebSocketService._instance;
    }

    public startConnection = () => {
        const url = process.env.REACT_APP_HUB_URL!;
        this.socket = new WebSocket(url);

        this.socket.onopen = () => {
            console.log("[WebSocket] Connection opened.");
            this.sendMessage('{"protocol":"json","version": 1}'); // Hand Shake
            this.sendMessage(`{"arguments":["${getCookie()}"],"target":"InitializeConnection","type":1}`);
            this.sendMessage(`{"arguments":["${getCookie()}", "990afec4-d523-4ab5-758f-08dcfc03ca5b"],"target":"GetFirtPageData","type":1}`);
        };

        this.socket.onclose = (event) => {
            console.log("[WebSocket] Connection closed:", event);
        };

        this.socket.onerror = (error) => {
            console.error("[WebSocket] Error occurred:", error);
        };

        this.socket.onmessage = (event) => {
            console.log("[WebSocket] Message received:", event.data);
            try {
                const data = JSON.parse(event.data.slice(0, -1));
                switch (data.target) {
                    case 'InitializeConnection':
                        console.log("InitializeConnection:", data.arguments[0]);
                        break;
                    case 'FirstPageData':
                        this.firstPageData = data.arguments[0];
                        this.emit('firstPageDataUpdated', this.firstPageData);
                        console.log("FirstPageData:", data.arguments[0]);
                        break;
                    case 'UpdateBuySellLists':
                        this.messageUpdatedBuySellLists = data.arguments[0];
                        this.emit('updatedBuySellLists', this.messageUpdatedBuySellLists);
                        console.log("UpdatedBuySellLists:", data.arguments[0]);
                        break;
                    case 'UpdateHeaderInfo':
                        this.messageHeaderInfo = data.arguments[0];
                        this.emit('updatedByHeaderInfo', this.messageHeaderInfo);
                        console.log("UpdatedHeaderInfo:", data.arguments[0]);
                        break;
                    case 'UpdateRecentTransactionsList':
                        this.messageTransactionList = data.arguments[0];
                        this.emit('updatedByRecentTransaction', this.messageTransactionList);
                        console.log("UpdatedRecentTransaction:", data.arguments[0]);
                        break;
                    case 'UpdateUserOpenOrdersList':
                        this.messageUserOpenOrders = data.arguments[0];
                        this.emit('updatedByUserOpenOrders', this.messageUserOpenOrders);
                        console.log("updatedByUserOpenOrders:", data.arguments[0]);
                        break;
                    case 'UpdateUserOrdersHistoryList':
                            this.messageUserOrderHistory = data.arguments[0];
                            this.emit('updatedByUserOrderHistory', this.messageUserOrderHistory);
                            console.log("formattedOpenOrders", data.arguments[0]);
                            break;

                    default:
                        console.log("Unhandled message type:", data);
                        break;
                }
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        };
    };

    public closeConnection = () => {
        if (this.socket) {
            this.socket.close();
            console.log("[WebSocket] Connection closed manually.");
        }
    };

    public sendMessage = (message: string) => {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
            console.log("[WebSocket] Message sent:", message);
        } else {
            console.warn("[WebSocket] Unable to send message - socket is not open.");
        }
    };
}

const socketService = WebSocketService.getInstance();
export default socketService;
