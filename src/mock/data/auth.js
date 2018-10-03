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
    return user ? okJsonify(users[username]) : failJsonify('invalid login or password');
  },
  usersMe: (params) => {
    const { token } = JSON.parse(params.body);
    const user = users[token];
    return user ? okJsonify(users[token]) : failJsonify();
  },
  logout: () => (okJsonify()),
};
