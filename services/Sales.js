import axios from "axios";

const API_URL = "https://zoho-books-server.herokuapp.com/sales";

class Items {
  getAllSales() {
    return axios.get(API_URL);
  }

  addSales(data) {
    return axios.post(API_URL, data);
  }
}
export default new Items();
