import { useDispatch } from "react-redux"
import {reactionsAdded} from './postsSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

function ReactionsButton({ post }) {
    const dispatch = useDispatch();
    const reactions = Object.entries(reactionEmoji).map(([name, emoji])=>{
        return(
            <button 
            type="button"
            key={name}
            className='reactionButton'
            onClick={()=>dispatch(
                reactionsAdded({postId: post.id, reaction: name})
            )}
            >
            {emoji} {post.reactions[name]}
            </button>
        )
    })
  return (
    <div>{reactions}</div>
  )
}

export default ReactionsButton