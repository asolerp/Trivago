import axios from "axios";

const URL = "http://localhost:5000";

const apiBack = {
  async GetWines() {
    return await axios.get(`${URL}/wines`);
  }
};

export default apiBack;
