import uuid from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const {reducer: usersReducer, actions} = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const { firstName, lastName, email } = action.payload;
      state.push({ id: uuid(), firstName, lastName, email });
    },
    editUser: (state, action) => { 
      for (let i = 0; i < state.length; i++) {
        const user = state[i];

        if (user.id === action.payload.id) {
            user.firstName = action.payload.firstName;
            user.lastName = action.payload.lastName;
            user.email = action.payload.email;
            break;
        }
    }
    },
    removeUser: (state, action) => {
      const { id } = action.payload;
      state.filter((user) => user.id !== id);
    },
  },
});

export {usersReducer};

export const addUser = (user) => {
  return (dispatch) => {
      dispatch(actions.addUser(user));
  }
}

export const editUser = (user) => {
  return (dispatch) => {
    dispatch(actions.editUser(user));
  }
}

export const removeUser = (user) => {
  return (dispatch) => {
    dispatch(actions.removeUser(user))
  }
}

