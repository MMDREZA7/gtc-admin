import { getCookie } from '../utils/manageCookies';

export function authHeader() {
  if (getCookie()) {
    return "Bearer " + getCookie()
  } else {
    return "";
  }
}
