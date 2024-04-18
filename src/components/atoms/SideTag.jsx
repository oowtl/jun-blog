'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function SideTag({ tagKey, tagAmount, defaultPath }) {
  const searchParams = useSearchParams()
  const queryParams = searchParams.get('query')
  const isActive =
    defaultPath && !queryParams
      ? queryParams !== tagKey
      : queryParams === tagKey

  return (
    <Link
      href={{
        pathname: '/postlist',
        query: {
          query: tagKey,
        },
      }}
      replace
    >
      <span
        className={`hover:underline hover:decoration-black hover:underline-offset-4 ${isActive ? 'font-semibold text-green-400' : ''}`}
      >
        {tagKey}
      </span>
      &nbsp;
      <span>({tagAmount})</span>
    </Link>
  )
}
