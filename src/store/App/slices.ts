import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { AppState } from './types';

export const initialState: AppState = {
    isLoading: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        publicIpRequest: (state: AppState) => state,
    },
});

export const store = (state: RootState) => state;

export const { publicIpRequest } = appSlice.actions;

export default appSlice.reducer;
