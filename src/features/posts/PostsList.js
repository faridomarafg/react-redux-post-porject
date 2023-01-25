import { useSelector } from 'react-redux';
import { selectAllposts } from './postsSlice';
import PostsAuthor from './PostsAuthor';
import TimeAgo from './TimeAgo';
import ReactionsButton from './ReactionsButton';

function PostsList() {
    const posts = useSelector(selectAllposts);

    const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post =>(
        <article key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.title.substring(0, 100)}</p>
            <p className='postCredit'>
                <PostsAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionsButton post={post}/>
        </article>
    ))

  return (
    <section>
        <h1>Posts</h1>
        {renderedPosts}
    </section>
  )
}

export default PostsList