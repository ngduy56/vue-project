const setUserId = (userId) => {
  localStorage.setItem("userId", userId);
};
const getUserId = () => localStorage.getItem("userId");

const removeUserId = () => {
  localStorage.removeItem("userId");
};
export { setUserId, getUserId, removeUserId };
