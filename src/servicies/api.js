import { BASE_API_URL } from '../utils/constants';

export class API_SERVICE {
  static async getUserData({ start = 0, limit = 5 }) {
    try {
      const response = await fetch(
        BASE_API_URL + `/users?_start=${start}&_limit=${limit}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.trace(error);
    }
  }
}
export default API_SERVICE;
