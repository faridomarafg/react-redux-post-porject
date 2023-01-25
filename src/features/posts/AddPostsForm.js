import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { selectAllusers } from '../users/usersSlice';

function AddPostsForm() {
    const dispatch = useDispatch();
    const users = useSelector(selectAllusers);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);
    const onChangeUserId = e => setUserId(e.target.value);

    const canSave  = Boolean(title) && Boolean(content);

    const saveButton = ()=>{
        if(title && content){
           dispatch(
             postAdded(title, content, userId)
           )
        }

        setTitle('');
        setContent('');
    }

  const usersOptions = users.map(user=>(
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ))  

  return (
    <form>
        <label htmlFor='postTitle'>Title</label>
        <input type="text" name="postTitle" id='postTitle' value={title} onChange={onTitleChange} />

        <label htmlFor='author'>Author</label>
        <select value={userId} onChange={onChangeUserId}>
           <option value=""></option>
           {usersOptions}
        </select>

        <label htmlFor='postContent'>Content</label>
        <textarea type="text" name="postContent" id='postContent' value={content} onChange={onContentChange} />
        
        <button type="button" onClick={saveButton} disabled={!canSave}>Save</button>
    </form>
  )
}

export default AddPostsForm