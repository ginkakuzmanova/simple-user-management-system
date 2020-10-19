import uuid from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const { reducer: usersReducer, actions } = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const { firstName, lastName, email } = action.payload;
      if (!state.includes(action.payload)) {
        state.push({ id: uuid(), firstName, lastName, email });
      } else {
        throw new Error();
      }
    },
    editUser: (state, action) => {
      const { id } = action.payload;
      for (let i = 0; i < state.length; i++) {
        const user = state[i];
        if (user.id === id) {
          user.firstName = action.payload.firstName;
          user.lastName = action.payload.lastName;
          user.email = action.payload.email;
        }
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const toDel = state.find((user) => user.id === id);
      const index = state.indexOf(toDel);
      state.splice(index, 1);
    },
  },
});

export { usersReducer };

export const addUser = (user) => {
  return (dispatch) => {
    dispatch(actions.addUser(user));
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
