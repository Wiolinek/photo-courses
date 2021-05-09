import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getCourses = createAsyncThunk(
  'courses/getCourses',
  async () => {
    const response = await fetch(`http://localhost:3030/courses`);
    if (response.ok) {
        const courses = await response.json();
        return courses;
    }
  }
)

export const getFilteredCourses = createAsyncThunk(
    'courses/getFilteredCourses',
    async (_, { getState }) => {
      const { courses } = getState();
      const response = await fetch(`http://localhost:3030/courses/filter`,
      {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({teacherFilter: courses.teacherFilter, levelFilter: courses.levelFilter, locationFilter: courses.locationFilter }),
    });
      if (response.ok) {
          const filteredCourses = await response.json();
          return filteredCourses;
      }
    }
)

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: null,
    teacherFilter: 'All',
    levelFilter: 'All',
    locationFilter: 'All',
    filteredCourses: [],
  },

  reducers: {

    filterCourses: (state, { payload }) => {
      state[payload.type] = payload.value;
    },

    resetFilters: (state) => {
      state.teacherFilter = 'All';
      state.levelFilter = 'All';
      state.locationFilter = 'All';
    }
  },

  extraReducers: {

    [getCourses.pending] : (state) => {
      state.status = 'loading';
    },

    [getCourses.fulfilled] : (state, { payload }) => {
      state.status = 'completed';
      state.courses = payload;
      state.filteredCourses = payload;
    },

    [getCourses.rejected] : (state) => {
      state.status = 'failed';
    },

    [getFilteredCourses.fulfilled] : (state, { payload }) => {
      state.filteredCourses = payload;
    },
  }
})

// Action creators generated for each reducer function
export const { filterCourses, resetFilters } = coursesSlice.actions;

const coursesReducer = coursesSlice.reducer;

export const selectCourses = state => state.courses;
export const selectFilteredCourses = state => state.courses.filteredCourses;
export const selectTeacherFilter = state => state.courses.teacherFilter;
export const selectLevelFilter = state => state.courses.levelFilter;
export const selectLocationFilter = state => state.courses.locationFilter;

// const persistConfig = {
//     key: 'root',
//     storage,
//   }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export default coursesReducer;