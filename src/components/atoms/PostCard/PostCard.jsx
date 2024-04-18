import Link from 'next/link'

// COMPONENTS
import HashTag from '@/components/atoms/HashTag.jsx'

export default function PostCard({
  title,
  summary,
  tags,
  createdAt,
  duration,
}) {
  return (
    <div className="container">
      <Link href={`/post/${title}`}>
        <div>
          <h2 className="mb-3 text-2xl">{title}</h2>
          <p className="mb-3 text-zinc-500">{summary}</p>
          {tags && tags.length > 0 && (
            <ul className="mb-3 flex flex-wrap gap-1">
              {tags.map((tag) => {
                return (
                  <li key={`${title}-${tag}`}>
                    <HashTag tagName={tag} />
                  </li>
                )
              })}
            </ul>
          )}

          <div className="mb-3 flex justify-between text-zinc-500">
            <time>{createdAt}</time>
            <p>{duration}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
