import axios from "axios";

const API_URL = `http://localhost:4000/sales`;

class Items {
  getAllSales() {
    return axios.get(API_URL);
  }

  addSales(data) {
    return axios.post(API_URL, data);
  }
}
export default new Items();
