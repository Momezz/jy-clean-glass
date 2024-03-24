import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface FileWithMeta extends File {
  name: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const initialState = {
  uploads: '',
};

export const createImage = createAsyncThunk('uploads/createImage', async (file: FileWithMeta) => {
  const formData = new FormData();
  const options = {
    method: 'POST',
    body: formData,
  };

  formData.append('file', file);
  formData.append('fileName', file.name);
  const response = await fetch(`${BASE_URL}/api/upload/file`, options);
  const data = await response.json();
  const url = await data.url;
  return url;
});

const uploadsSlice = createSlice({
  name: 'uploads',
  initialState,
  reducers: {
    reset: (state) => {
      state.uploads = initialState.uploads;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createImage.fulfilled, (state, action) => {
      state.uploads = action.payload;
    });
  },
});

export const { reset } = uploadsSlice.actions;

export default uploadsSlice.reducer;
