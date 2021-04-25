import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export const getCourses = createAsyncThunk(
  'courses/getCourses',
  async () => {
    return fetch(`http://localhost:3030/courses`)
      .then(response => response.json())
      .catch(error => console.log(`error ${error}`))
  }
)

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: null,
    teachersFilter: 'All',
    levelFilter: 'All',
    locationFilter: 'All',
  },

  reducers: {
    filterTeachers: (state, { payload }) => {
      state.teachersFilter = payload;
    },

    filterLevels: (state, { payload }) => {
      state.levelFilter = payload;
      state.courses = state.courses.filter(course => course.level === payload)
    },

    filterLocations: (state, { payload }) => {
      state.locationFilter = payload;
      state.courses = state.courses.filter(course => course.place === payload)
    },
  },

  extraReducers: {
    [getCourses.pending] : (state, action) => {
      state.status = 'loading';
    },
    [getCourses.fulfilled] : (state, {payload}) => {
      state.status = 'completed';
      state.courses = payload;
    },
    [getCourses.rejected] : (state, {payload}) => {
      state.status = 'failed';
    }
  }
})

// Action creators generated for each reducer function
export const { filterTeachers, filterLevels, filterLocations } = coursesSlice.actions;

const coursesReducer = coursesSlice.reducer;

// const persistConfig = {
//     key: 'root',
//     storage,
//   }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export default coursesReducer;