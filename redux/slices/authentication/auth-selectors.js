const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

function dd  (){
   console.log(getUsername) 
}
dd();
const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;