import Link from 'next/link'

export default function LinkPost({ isPrev, children, href }) {
  return (
    <div className="box-border max-w-xs rounded-xl bg-stone-100 px-4 py-2 hover:bg-stone-200">
      <Link href={href}>
        <p className="mb-1 text-sm text-slate-600 hover:text-slate-800">
          {isPrev ? '이전 포스트' : '다음 포스트'}
        </p>
        <h3 className="truncate text-slate-800 hover:text-slate-950">
          {children}
        </h3>
      </Link>
    </div>
  )
}
