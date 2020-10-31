import { createSlice } from "@reduxjs/toolkit";

const { reducer: copyReducer, actions } = createSlice({
  name: "copy",
  initialState: [],
  reducers: {
    copyUsers: (state, action) => { 
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const element = object[key];
                
            }
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

