import create from "zustand";
import { getUsers, createUser } from "../api/users";

export const useUsersStore = create((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getUsers: async () => {
    try {
      set({ isLoading: true });
      const response = await getUsers();
      set({ isLoading: false, data: response.data });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  createUser: async (name) => {
    try {
      set({ isLoading: true });
      const response = await createUser(name);
      set((state) => ({
        isLoading: false,
        data: [...state.data, response.data],
      }));
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));
