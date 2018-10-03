import Mock from 'mockjs';
import authTemplates from './data/auth';

export default {
  bootstrap() {
    // auth
    Mock.mock(/^\/login(\?.*)?$/, 'post', authTemplates.login);
    Mock.mock(/^\/logout(\?.*)?$/, 'post', authTemplates.logout);
    Mock.mock(/^\/users\/me(\?.*)?$/, 'get', authTemplates.usersMe);
  },
};
