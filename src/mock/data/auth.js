import { parseURL } from '@/utils/util';
import { okJsonify, failJsonify } from './utils';

const users = {
  general: {
    name: 'vasttian',
    email: 'tianyiming26@gmail.com',
    role: 'general',
    avatar: 'http://67.218.155.2:8082/1.png',
    token: 'mock-token-general',
  },
  admin: {
    name: 'vasttian',
    email: 'tianyiming26@gmail.com',
    role: 'admin',
    avatar: 'http://67.218.155.2:8082/1.png',
    token: 'mock-token-admin',
  },
};

export default {
  login: (params) => {
    const { username } = JSON.parse(params.body);
    const user = users[username];
    return user ? okJsonify({ access_token: users[username].token }) : failJsonify('invalid login or password');
  },
  usersMe: (params) => {
    const { token } = parseURL(params.url).params;
    const user = users[token.match(/mock-token-(.*)/)[1]];
    return user ? okJsonify(user) : failJsonify();
  },
  logout: () => (okJsonify()),
};
