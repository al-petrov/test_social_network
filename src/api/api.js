import * as axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  //baseURL: 'http://barabulka.site:8080/api',
  //headers: { Authorization: 'Basic d2VidXNlcjoxMjM0NTZ5dHJld3E=' },
  baseURL: 'https://barabulka.site/api/api/',
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

  updateUserData(myID, username, country, userstatus, img) {
    return instance
      .put('user', {
        id: myID,
        username,
        country,
        userstatus,
        img,
      })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
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

  login(login, password, rememberMe) {
    return instance.post(`login`, { login, password }).then(response => {
      // webdavInstance.get('config.txt');
      return response.data;
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
        date: new Date(),
      })
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  setUserStatus(myID, status) {
    return instance
      .put('user', {
        id: myID,
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

export const fileAPI = {
  getFiles(userId, currentPage, pageSize, dataType) {
    return instance
      .get(`files?user_id=${userId}&current=${currentPage}&size=${pageSize}&dataType=${dataType}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },

  addFile(ownerId, type, fileName, fileDesc, uploadDate, fileUrl, previewUrl, lastModified, fileSize) {
    return instance
      .post(`files`, {
        ownerId,
        type,
        fileName,
        fileDesc,
        uploadDate,
        fileUrl,
        previewUrl,
        lastModified,
        fileSize,
      })
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log('hi');
        console.log(err.response);
      });
  },
};
