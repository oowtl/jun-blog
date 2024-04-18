import path from 'path'
import { readFileSync } from 'fs'
import * as matter from 'gray-matter'
import { sync } from 'fast-glob'

// UTILLS
import dayjs from '@/utills/dayjs'

const BASE_PATH = '/src/data/post'
const POST_PATH = path.join(process.cwd(), BASE_PATH)

/**
 * @typedef {object} PostData
 * @property {string} title
 * @property {string} summary
 * @property {string[]} tags
 * @property {date(YYYY.MM.DD HH:MM)} createdAt
 * @property {date} duration
 * @description markdown frontmatter type
 */

/**
 * @typedef {object<stirng, number>} TagInfo
 */

/**
 *`
 * @param {postUrl : string} postPath
 * @returns {PostData}
 *
 * post 안에 있는 frontmatter 를 파싱하는 함수
 */
export const parsePost = (postPath) => {
  const file = readFileSync(postPath, { encoding: 'utf-8' })
  const { data, content } = matter(file)

  return {
    ...data,
    content,
    day: dayjs(data.createdAt),
    createdAt: dayjs(data.createdAt).format('LLL'),
    duration: dayjs(data.createdAt).fromNow(),
  }
}

/**
 * /data/post 안에 있는 post 를 불러오는 함수
 * @return {PostData[]}
 */
export const getAllPosts = () => {
  const postsPath = sync(`${POST_PATH}/**/*.{md,mdx}`, { onlyFiles: true })
  const postsData = postsPath
    .map((postPath) => parsePost(postPath))
    .sort(function sortByCreatedAt(prev, next) {
      return prev.day.isSameOrBefore(next.day) ? 1 : -1
    })
  return postsData
}

/**
 *
 * @param {PostData[]} postData
 * @return {Object<string, number>} tagInfo
 * @description postData 를 태그 목록에 맞게 변경시키는 함수
 */
export const getTagInfo = (postData) => {
  const tagInfo = {}
  const tagList = postData.map((post) => post.tags).flat(Infinity)
  tagList.forEach((tag) => {
    tagInfo[tag] = tag in tagInfo ? tagInfo[tag] + 1 : 1
  })

  return tagInfo
}
