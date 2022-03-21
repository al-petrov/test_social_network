import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://barabulka.site:8080/api/',
});

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance
      .get(`user?size=${pageSize}&current=${currentPage}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  getPosts(userId) {
    return instance
      .get(`posts?size=20&current=1&user_id=${userId}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  getOneUser(userId) {
    debugger;
    return instance
      .get(`user/${userId}`)
      .then(response => {
        debugger;
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },
};
