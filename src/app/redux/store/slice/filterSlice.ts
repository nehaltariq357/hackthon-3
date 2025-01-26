// filterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  filteredItems: string[];
}

const initialState: FilterState = {
  filteredItems: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilteredItems(state, action: PayloadAction<string[]>) {
      state.filteredItems = action.payload;
    },
    clearFilteredItems(state) {
      state.filteredItems = [];
    },
  },
});

export const { setFilteredItems, clearFilteredItems } = filterSlice.actions;
export default filterSlice.reducer;
