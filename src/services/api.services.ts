import httpClient from "./api.config";
import { apiConst } from "./api.constant";

interface UserLoginData {
  mobileNumber: string;
  password: string;
}

interface OrderData {
  orderSide: number;
  stockID: string;
  volume: number;
  price: number;
}

class ApiService {
  async Login(UserLoginData: UserLoginData) {
    return await httpClient.post(apiConst.Login, UserLoginData);
  }

  async Register(UserLoginData: UserLoginData) {
    return await httpClient.post(apiConst.Register, UserLoginData);
  }


}

const AppServices = new ApiService();
export default AppServices;
