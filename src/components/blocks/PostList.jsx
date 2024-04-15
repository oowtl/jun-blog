// COMPONENTS
import PostCard from '@/components/atoms/PostCard/PostCard.jsx'

export default function PostList({ postListData }) {
  return (
    <ul>
      {postListData.map((postData) => {
        return (
          <li
            key={postData.title}
            className="my-2 border-b-2 py-2 last:border-b-0"
          >
            <PostCard
              title={postData.title}
              summary={postData.summary}
              tags={postData.tags}
              createdAt={postData.createdAt}
              duration={postData.duration}
            />
          </li>
        )
      })}
    </ul>
  )
}
