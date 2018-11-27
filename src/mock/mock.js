import Mock from 'mockjs';
import authTemplates from './data/auth';
import tableTemplates from './data/table';

// const formatAuthUrl = url => RegExp(`^/api/auth/${url}(\\?.*)?$`, 'i');
const formatCommonUrl = url => RegExp(`^/api/common/${url}(\\?.*)?$`, 'i');

export default {
  bootstrap() {
    // auth
    Mock.mock(/^\/login(\?.*)?$/, 'post', authTemplates.login);
    Mock.mock(/^\/logout(\?.*)?$/, 'post', authTemplates.logout);
    Mock.mock(/^\/users\/me(\?.*)?$/, 'get', authTemplates.usersMe);

    // tables
    Mock.mock(formatCommonUrl('tables/list'), 'get', tableTemplates.list);
  },
};
