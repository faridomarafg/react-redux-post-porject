import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id:'1',
    title:'React-redux',
    content:'learn react and redux here',
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
  }
  },
  {
    id:'2',
    title:'React',
    content:'learn react and many more here',
    date: sub(new Date(), {minutes: 15}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
  }
  },
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
       postAdded:{
         reducer(state,action){
            state.push(action.payload)
         },
         prepare(title, content, userId){
            return{
                payload:{
                    id: nanoid(),
                    title,
                    content,
                    userId,
                    date: new Date().toISOString(),
                    reactions: {
                      thumbsUp: 0,
                      wow: 0,
                      heart: 0,
                      rocket: 0,
                      coffee: 0
                  } 
                }
            }
         }
       },
       reactionsAdded(state, action){
         const {postId, reaction} = action.payload;
         const existingPost = state.find(post => post.id === postId);
         if(existingPost){
            existingPost.reactions[reaction]++
         }
       }
    }
})

export const selectAllposts = (state) => state.posts;

export const {postAdded, reactionsAdded} = postSlice.actions;

export default postSlice.reducer;