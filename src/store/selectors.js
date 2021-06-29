import { createSelector } from "@reduxjs/toolkit";

export const usersSelector = (state) => state.users.users;

export const filteredUsersSelector = createSelector(
  (state) => state.users.users,
  (state) => state.users.search,
  (users, search) => {
    return users.filter((user) => {
      console.log("filtering users...");
      return user.includes(search);
    });
  }
);
