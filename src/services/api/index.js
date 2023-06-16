const baseUrl = "https://648ad48617f1536d65e9c549.mockapi.io/api/v1";

export const fetchUsers = async (page=3, limit=3) => {
  const res = await fetch(`${baseUrl}/users?page=${page}&limit=${limit}`);
  const users = await res.json();
  return users;
}