const getIsLoggedIn = state => state.authSlice.isLoggedIn;

const getUsername = state => state.authSlice.user.name;



const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;
