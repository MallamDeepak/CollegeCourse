const USERS_KEY = "collegecourse_users";
const CURRENT_USER_KEY = "collegecourse_current_user";

const defaultUser = {
  name: "Default Developer",
  email: "developer@collegecourse.com",
  password: "dev12345"
};

export function ensureDefaultUser() {
  const users = getUsers();
  const exists = users.some((user) => user.email.toLowerCase() === defaultUser.email.toLowerCase());
  if (!exists) {
    users.push(defaultUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
}

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]");
}

export function registerUser(payload) {
  const users = getUsers();
  const exists = users.some((user) => user.email.toLowerCase() === payload.email.toLowerCase());
  if (exists) {
    return { ok: false, message: "User already exists. Please login." };
  }

  users.push(payload);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return { ok: true, message: "Registration successful." };
}

export function loginUser(email, password) {
  const users = getUsers();
  const user = users.find(
    (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password
  );

  if (!user) {
    return { ok: false, message: "Invalid email or password." };
  }

  const currentUser = { name: user.name, email: user.email };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
  return { ok: true, user: currentUser };
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) ?? "null");
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}
