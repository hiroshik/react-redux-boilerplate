
function setAppDetails() {
  return dispatch => {
    dispatch({
      type: 'SET_APP_DETAILS',
      payload: {
        version: "0.1",
        name: "HouseKit POC"
      }
    });
  }
}


export const appAction = {
  setAppDetails,
};