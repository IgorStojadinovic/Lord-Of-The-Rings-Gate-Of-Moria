import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  quotes: [],
  quote: [],
  movie: [],
  character: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const LOTR_API_URL = process.env.REACT_APP_LOTR_API_URL;
const LOTR_API_TOKEN = process.env.REACT_APP_LOTR_API_TOKEN;

const lotr = axios.create({
  baseURL: LOTR_API_URL,
  headers: {
    Authorization: `Bearer ${LOTR_API_TOKEN}`,
  },
});

// Fetch 100 Quotes
export const fetchQuotes = createAsyncThunk("quotes/fetchQuotes", async () => {
  try {
    const response = await lotr.get(`/quote?limit=100`);
    return response.data.docs;
  } catch (error) {
    console.error(error);
  }
});

//Fetch Movie by ID
export const fetchMovieByID = createAsyncThunk(
  "quotes/fetchMovieByID",
  async (id) => {
    try {
      const response = await lotr.get(`/movie/${id}`);

      return response.data.docs;
    } catch (error) {
      console.error(error);
    }
  }
);

// Fetch Character by ID
export const fetchCharacterByID = createAsyncThunk(
  "quotes/fetchCharacterByID",
  async (id) => {
    try {
      const response = await lotr.get(`/character/${id}`);

      return response.data.docs;
    } catch (error) {
      console.error(error);
    }
  }
);

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuote: {
      reducer(state, action) {
        state.quote.push(action.payload);
      },
    },

    clearQuote: {
      reducer(state) {
        state.quote = [];
      },
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchQuotes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quotes = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCharacterByID.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCharacterByID.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.character = action.payload;
      })
      .addCase(fetchCharacterByID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMovieByID.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMovieByID.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movie = action.payload;
      })
      .addCase(fetchMovieByID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllQuotes = (state) => state.quotes.quotes;
export const selectCharacter = (state) => state.quotes.character;
export const selectMovie = (state) => state.quotes.movie;
export const getStatus = (state) => state.quotes.status;
export const getQuote = (state) => state.quotes.quote;

export const { clearQuote, addQuote } = quotesSlice.actions;

export default quotesSlice.reducer;
