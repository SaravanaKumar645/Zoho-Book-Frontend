import axios from "axios";

const API_URL = "https://zoho-books-server.herokuapp.com/invoices";

class Invoices {
  getAllInvoices() {
    return axios.get(API_URL);
  }

  addInvoice(data) {
    return axios.post(API_URL, data);
  }
}
export default new Invoices();
