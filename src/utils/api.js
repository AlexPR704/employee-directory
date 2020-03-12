import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
//using randomuser api
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};