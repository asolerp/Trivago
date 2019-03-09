import axios from "axios";

const apiBack = {
  baseURL: "http://localhost:5000",

  async getAllWines() {
    try {
       const response = await axios.get(`${this.baseURL}/wines`);
       return response;
    } catch(e) {
      return {message: "Something happened trying to catch wines.", e}
    }

  }
};

export default apiBack;
