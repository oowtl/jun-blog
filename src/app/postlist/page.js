import { redirect } from 'next/navigation'

// UTILLS
import { getAllPosts, getTagInfo } from '@/utills/post'

// COMPONENTS
import PostList from '@/components/blocks/PostList.jsx'
import SideBar from '@/components/blocks/SideBar.jsx'

export default function PostListPage({ searchParams }) {
  const postListData = getAllPosts()

  const { query: queryParams } = searchParams
  const tagInfo = getTagInfo(postListData)
  const matchTagAndQuery = Object.keys(tagInfo).includes(queryParams)
  if (queryParams && !matchTagAndQuery) {
    redirect('/postlist')
  }

  return (
    <section className="relative mx-auto max-w-screen-md">
      <PostList postListData={postListData} />
      <SideBar tagInfo={tagInfo} postListLength={postListData.length} />
    </section>
  )
}
