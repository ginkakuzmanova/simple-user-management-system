import { createSlice } from "@reduxjs/toolkit";

const { reducer: copyReducer, actions } = createSlice({
  name: "copy",
  initialState: [],
  reducers: {
    copyUsers: (state, action) => { 

        // for (let i = 0; i < action.payload.length; i++) {
        //     state[i] = action.payload[i];
        //   }
       return state = action.payload.map(a => ({...a}));
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

