import { getAllPosts } from '@/utills/post'

import CustomMdx from '@/components/blocks/CustomMdx.jsx'

import LinkPost from '@/components/atoms/LinkPost.jsx'
import Giscus from '@/components/blocks/Giscus.jsx'

export default async function PostPage({ params }) {
  const slug = decodeURI(params.slug)
  const postList = getAllPosts()

  const curPostIndex = postList.findIndex((post) => post.title === slug)
  // TODO : post를 찾을 수 없을 때 에러처리
  if (curPostIndex === -1) {
    console.log('no cotent')
  }

  const curPost = postList[curPostIndex]
  const prevPost = postList[curPostIndex - 1]
  const nextPost = postList[curPostIndex + 1]

  return (
    <>
      <article className="prose prose-lg prose-zinc m-auto">
        <CustomMdx source={curPost.content} />
      </article>

      <div
        className={`mx-auto mt-8 flex max-w-3xl ${typeof prevPost === 'undefined' && nextPost ? 'justify-end' : 'justify-between'}`}
      >
        {prevPost && (
          <LinkPost isPrev href={`/post/${prevPost.title}`}>
            {prevPost.title}
          </LinkPost>
        )}
        {nextPost && (
          <LinkPost href={`/post/${nextPost.title}`}>{nextPost.title}</LinkPost>
        )}
      </div>
      <Giscus />
    </>
  )
}
