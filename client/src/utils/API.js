import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getCuddly: function() {
    return axios.get("/api/pups");
  }

};
