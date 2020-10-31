import { createSlice } from "@reduxjs/toolkit";

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

const { reducer: copyReducer, actions } = createSlice({
  name: "copy",
  initialState: [],
  reducers: {
    copyUsers: (state, action) => {
      if (!arrayEquals(state, action.payload)) {
        state = [];
        for (let i = 0; i < action.payload.length; i++) {}
      }
    },

    filterUsers: (state, action) => {
      const firstName = action.payload;
      return state.filter((u) => u.firstName.toLowerCase().includes(firstName));
    },
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
