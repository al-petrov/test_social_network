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

  getPosts(userId, currentPage, pageSize) {
    console.log('use profileAPI object');
    profileAPI.getPosts(userId, currentPage, pageSize);
  },

  getOneUser(userId) {
    console.log('use profileAPI object');
    profileAPI.getOneUser(userId);
  },

  addPost(userId, postText, likeCount) {
    console.log('use profileAPI object');
    profileAPI.addPost(userId, postText, likeCount);
  },
};

export const authAPI = {
  auth() {
    return instance
      .get('auth')
      .then(response => {
        if (response.data.isLogined === true) {
          return response.data;
        }
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },
};

export const messagesAPI = {
  getMessages(senderId, getterId, pageSize, currentPage) {
    return instance
      .get(`messages?senderId=${senderId}&getterId=${getterId}&size=${pageSize}&current=${currentPage}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  addMessage(senderId, getterId, messagetext, senddate) {
    return instance
      .post(`messages`, {
        senderId,
        getterId,
        messagetext,
        senddate,
      })
      .then(response => {
        return true;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },
};

export const profileAPI = {
  getPosts(userId, currentPage, pageSize) {
    return instance
      .get(`posts?user_id=${userId}&current=${currentPage}&size=${pageSize}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  getOneUser(userId) {
    return instance
      .get(`user/${userId}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  addPost(userId, postText, likeCount) {
    return instance
      .post(`posts`, {
        userId,
        postText,
        likeCount,
      })
      .then(response => {
        return true;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  setUserStatus(myID, status) {
    return instance
      .put('user', {
        myID,
        username: null,
        country: null,
        userstatus: status,
        img: null,
      })
      .then(response => {
        return true;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },
};
