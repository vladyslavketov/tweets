import { ITEMS_PER_PAGE } from '../../constans';

const baseUrl = 'https://648ad48617f1536d65e9c549.mockapi.io/api/v1';

export const fetchUsers = async (page = 1, limit = ITEMS_PER_PAGE) => {
  const res = await fetch(`${baseUrl}/users?page=${page}&limit=${limit}`);
  const users = await res.json();
  return users;
};

export const fetchAllUsers = async () => {
  const res = await fetch(`${baseUrl}/users`);
  const users = await res.json();
  return users;
};
