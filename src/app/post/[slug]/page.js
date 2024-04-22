import { getAllPosts } from '@/utills/post'

import CustomMdx from '@/components/blocks/CustomMdx.jsx'

export default async function PostPage({ params }) {
  const slug = decodeURI(params.slug)
  const postList = getAllPosts()

  const curPostIndex = postList.findIndex((post) => post.title === slug)
  // TODO : post를 찾을 수 없을 때 에러처리
  if (curPostIndex === -1) {
    console.log('no cotent')
  }

  const curPost = postList[curPostIndex]
  const nextPost = postList[curPostIndex + 1]
  const prevPost = postList[curPostIndex - 1]

  return (
    <article className="prose prose-lg prose-zinc m-auto">
      <CustomMdx source={curPost.content} />
    </article>
  )
}
