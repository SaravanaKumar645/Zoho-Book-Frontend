import axios from "axios";

const API_URL = `http://localhost:4000/invoices`;

class Invoices {
  getAllInvoices() {
    return axios.get(API_URL);
  }

  addInvoice(data) {
    return axios.post(API_URL, data);
  }
}
export default new Invoices();