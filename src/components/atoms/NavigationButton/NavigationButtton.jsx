'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationButtton({ title, href }) {
  const currentPath = usePathname()

  const isRoot = currentPath === '/' && href === '/posts'
  const matchCurrentPath = currentPath === href
  const isMatch = isRoot || matchCurrentPath

  return (
    <Link
      href={href}
      className={`h-full flex justify-center items-center ${isMatch && "after:content=[''] after:absolute after:-bottom-1 after:w-full after:h-1 after:bg-black"}`}
    >
      <span className={isMatch ? 'font-bold' : ''}>{title}</span>
    </Link>
  )
}
