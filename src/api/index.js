/* eslint-disable camelcase */
/* eslint-disable max-len  */
import request from './utils';

// const authUrls = {

// };

const urlPrefix = '/api/common';
const urls = {
  // users
  readMe: '/users/me',
  readUser: '/users/<id>',
  readUsers: '/users',
  createUsers: '/users',
  updateUsers: '/users/<id>',
  deleteUsers: '/users/<id>',
};

Object.keys(urls).map((url) => {
  urls[url] = urlPrefix + urls[url];
  return url;
});

export default new function API() {
  // users
  this.readMe = () => request.get(urls.readMe);
  this.readUser = id => request.get(urls.readUser.replace('<id>', id));
  this.readUsers = () => request.get(urls.readUsers, {});
  this.createUsers = params => request.post(urls.createUsers, params);
  this.updateUsers = (id, params) => request.put(urls.updateUsers.replace('<id>', id), params);
  this.deleteUsers = id => request.delete(urls.deleteUsers.replace('<id>', id));
}();
