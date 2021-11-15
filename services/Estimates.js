import axios from "axios";

const API_URL = `http://localhost:4000/api/estimates`;

class Items {
  // getAllEstimates() {
  //   return axios.get(API_URL);
  // }

  addEstimate(data) {
    return axios.post(API_URL, data);
  }
}
export default new Items();
