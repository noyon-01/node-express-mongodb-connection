export const usersData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const users = await res.json();
  return users;
};
