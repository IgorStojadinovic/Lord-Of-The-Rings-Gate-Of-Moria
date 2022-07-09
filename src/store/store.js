import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../components/features/characters/charactersSlice";
import quotesReducer from "../components/features/quotes/quotesSlice";
export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    quotes: quotesReducer,
  },
});
