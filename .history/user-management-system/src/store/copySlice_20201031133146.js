import { createSlice } from "@reduxjs/toolkit";

const { reducer: copyReducer, actions } = createSlice({
  name: "copy",
  initialState: [],
  reducers: {
    copyUsers: (state, action) => { 
        for (i = 0; i < action.payload.length; i++) {
            state[i] = action.paz[i];
          }
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

export const filterUsers = (firstName) => {
  return (dispatch) => {
    dispatch(actions.filterUsers(firstName));
  };
};

