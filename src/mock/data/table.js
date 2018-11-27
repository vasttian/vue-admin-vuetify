import { okJsonify } from './utils';

const tables = {
  list: [
    {
      name: 'Anna',
      age: 24,
      address: 'Beijing, China',
    },
    {
      name: 'Bonnie',
      age: 23,
      address: 'Shanghai, China',
    },
    {
      name: 'Clementine',
      age: 22,
      address: 'Guangzhou, China',
    },
    {
      name: 'Doris',
      age: 21,
      address: 'Shenzhen, China',
    },
    {
      name: 'Emma',
      age: 20,
      address: 'Chengdu, China',
    },
    {
      name: 'Flora',
      age: 20,
      address: 'Hangzhou, China',
    },
  ],
};

export default {
  list: () => okJsonify({ data: tables.list }),
};
