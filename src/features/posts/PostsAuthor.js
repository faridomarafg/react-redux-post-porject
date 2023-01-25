import { useSelector } from 'react-redux';
import { selectAllusers } from '../users/usersSlice';

function PostsAuthor({ userId }) {
    const users = useSelector(selectAllusers);
    const author = users.find(user => user.id === userId);

  return (
    <span>
        by:<i>{ author ? author.name : 'Unknown user' }</i>
    </span>
  )
}

export default PostsAuthor