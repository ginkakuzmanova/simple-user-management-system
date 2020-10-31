import { createSlice } from "@reduxjs/toolkit";

const { reducer: copyReducer, actions } = createSlice({
  name: "copy",
  initialState: [],
  reducers: {
    copyUsers: (state, action) => { 
        state = [...action.payload];
    },
    
    filterUsers: (state, action) => {
        const firstName = action.payload;
        return state.filter(u => u.firstName.toLowerCase().includes(firstName))
    }
  },
});

export { copyReducer };

export const copyUsers = (users) => {
  return (dispatch) => {
    dispatch(actions.copyUsers(users));
  };
};

export const editUser = ({ ...user }) => {
  return (dispatch) => {
    dispatch(actions.editUser(user));
  };
};

export const removeUser = (user) => {
  return (dispatch) => {
    dispatch(actions.deleteUser(user));
  };
};
