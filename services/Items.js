import axios from "axios";

const API_URL = `https://zoho-books-server.herokuapp.com/items`;

class Items {
  getAllItems() {
    return axios.get(API_URL);
  }

  addItem(data) {
    return axios.post(API_URL, data);
  }
}
export default new Items();
