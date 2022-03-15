const TOKEN_NAME = 'token';
const MEM_ID = 'mem_id';

export const setAuthToken = token => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const setMemId = mem_id => {
  return localStorage.setItem(MEM_ID, mem_id);
};

export const getMemId = () => {
  return localStorage.getItem(MEM_ID);
}
