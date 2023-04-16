import { create } from "zustand";

const useSearchStore = create((set) => ({
  search: "",
  handleSearch: (searchText) => set({ search: searchText }),
}));

export default useSearchStore;
