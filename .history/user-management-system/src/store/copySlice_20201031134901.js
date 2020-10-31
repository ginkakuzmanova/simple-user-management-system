import { createSlice } from "@reduxjs/toolkit";

const { reducer: copyReducer, actions } = createSlice({
  name: "copy",
  initialState: [],
  reducers: {
    copyUsers: (state, action) => { 

        // for (let i = 0; i < action.payload.length; i++) {
        //     state[i] = action.payload[i];
        //   }
        action.payload.map(a => ({...a}));
       state = JSON.parse(JSON.stringify(action.payload));
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

