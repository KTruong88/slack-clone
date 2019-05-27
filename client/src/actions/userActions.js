export const setName = (name) => {
  return {
    type: 'SET_NAME',
    payload: name
  };
};

// Async setName for reference
// export const setName = (name) => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch({
//         type: 'SET_NAME',
//         payload: name
//       })
//     }, 2000);
//   };
// };
