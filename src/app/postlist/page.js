// UTILLS
import { getAllPosts } from '@/utills/post'

// COMPONENTS
import PostList from '@/components/blocks/PostList.jsx'

export default function PostListPage() {
  const postListData = getAllPosts()
  return (
    <section className="mx-auto max-w-screen-md">
      <PostList postListData={postListData} />
    </section>
  )
}
