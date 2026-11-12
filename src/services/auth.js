import { users } from '../data/users';

export function login({ email, password }) {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );
  return user;
}