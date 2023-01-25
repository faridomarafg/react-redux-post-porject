import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: '0', name:'Farid'},
    {id: '1', name:'Massoud'},
    {id: '2', name:'Nahid'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllusers = state => state.users

export default usersSlice.reducer;