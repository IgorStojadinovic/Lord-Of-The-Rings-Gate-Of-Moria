import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  characters: [],
  character: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  alert: false,
};

const LOTR_API_URL = process.env.REACT_APP_LOTR_API_URL;
const LOTR_API_TOKEN = process.env.REACT_APP_LOTR_API_TOKEN;

const lotr = axios.create({
  baseURL: LOTR_API_URL,
  headers: {
    Authorization: `Bearer ${LOTR_API_TOKEN}`,
  },
});

// Fetch All Characters
export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    try {
      const response = await lotr.get(`/character?limit=100`);
      return response.data.docs;
    } catch (error) {
      return error.message;
    }
  }
);

// Fetch One Character
export const fetchCharacter = createAsyncThunk(
  "characters/fetchCharacter",
  async (text) => {
    try {
      const response = await lotr.get(`/character?name=${text}`);
      return response.data.docs;
    } catch (error) {
      return error.message;
    }
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacters: {
      reducer(state, action) {
        state.characters.push(action.payload);
      },
    },

    addCharacter: {
      reducer(state, action) {
        state.character.push(action.payload);
      },
    },
    setAlert: {
      reducer(state, action) {
        state.alert = action.payload;
      },
    },

    clearCharacter: {
      reducer(state) {
        state.character = [];
      },
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCharacter.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.character = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllCharacters = (state) => state.characters.characters;
export const selectSingleCharacter = (state) => state.characters.character;
export const getCharactersStatus = (state) => state.characters.status;
export const getAlertStatus = (state) => state.characters.alert;

export const { addCharacter, addCharacters, setAlert, clearCharacter } =
  charactersSlice.actions;

export default charactersSlice.reducer;
