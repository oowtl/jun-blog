import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
// import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeToc from '@jsdevtools/rehype-toc'

// code block css
import 'prism-themes/themes/prism-vsc-dark-plus.css'

const components = {}

// TODO : 반응형 지원하기
const tocOptions = {
  cssClasses: {
    toc: 'xl:fixed xl:right-10 border-l-4 border-slate-200 xl:max-w-64',
    list: 'm-0 list-none pl-2',
    listItem: 'm-0',
    link: 'text-sm text-slate-500 no-underline text-wrap hover:text-slate-800',
  },
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypePrism,
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypeToc, tocOptions],
    ],
  },
}

export default function MdxLayout({ source }) {
  return (
    <MDXRemote source={source} components={components} options={mdxOptions} />
  )
}
