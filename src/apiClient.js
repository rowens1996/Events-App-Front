import axios from "axios";
//const url = "http://localhost:3001/";
const url = "https://rowens96-events-app.herokuapp.com/";

export class ApiClient {
  constructor(token, logoutHandler) {
    this.token = token;
    this.logoutHandler = logoutHandler;
  }

  apiCall(method, url, data) {
    console.log(url);

    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }

  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.token,
      },
      data,
    }).catch((error) => {
      if (error.response.status == 403) {
        this.logoutHandler();
        return Promise.reject;
      } else {
        throw error;
      }
    });
  }

  login(username, password) {
    // console.log("username",username)
    // console.log("password",password)
    return this.apiCall("post", `${url}auth`, {
      userName: username,
      password: password,
    });
  }

  addNewUser() {
    return this.authenticatedCall("post", `${url}signup`);
  };

  getAllEvents() {
    return this.authenticatedCall("get", `${url}event`);
  }

  getEventById(id) {
    return this.authenticatedCall("get", `${url}search/id/${id}`);
  }

  getEventByName(name) {
    return this.authenticatedCall("get", `${url}search/name/${name}`);
  }

  getEventsByLocation(location) {
    return this.authenticatedCall("get", `${url}search/location/${location}`);
  }

  getEventsByDate(date) {
    return this.authenticatedCall("get", `${url}search/date/${date}`);
  }

  addEvent(name, location, date, price, info) {
    return this.authenticatedCall("post",`${url}`, { name, location, date, price, info });
  }

  removeEvent(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  updateEvent(id, name, location, date, price, info) {
    return this.authenticatedCall("put", `${url}${id}`, { name, location, date, price, info });
  }
}
