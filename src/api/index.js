/* eslint-disable camelcase */
/* eslint-disable max-len  */
import request from './utils';

const authUrls = {
  login: '/login',
  logout: '/logout',
  readMe: '/users/me',
};

const urlPrefix = '/api/common';
const urls = {
  // users
  readUser: '/users/<id>',
  readUsers: '/users',
  createUsers: '/users',
  updateUsers: '/users/<id>',
  deleteUsers: '/users/<id>',

  // tables
  readTablesList: '/tables/list',
};

Object.keys(urls).map((url) => {
  urls[url] = urlPrefix + urls[url];
  return url;
});

export default new function API() {
  // auth
  this.login = params => request.post(authUrls.login, params);
  this.logout = () => request.post(authUrls.logout);
  this.readMe = params => request.get(authUrls.readMe, params);

  // users
  this.readUser = id => request.get(urls.readUser.replace('<id>', id));
  this.readUsers = () => request.get(urls.readUsers, {});
  this.createUsers = params => request.post(urls.createUsers, params);
  this.updateUsers = (id, params) => request.put(urls.updateUsers.replace('<id>', id), params);
  this.deleteUsers = id => request.delete(urls.deleteUsers.replace('<id>', id));

  // table
  this.readTablesList = () => request.get(urls.readTablesList, {});
}();
