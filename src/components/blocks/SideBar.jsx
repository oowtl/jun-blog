// COMPONENTS
import SideTag from '../atoms/SideTag'

/**
 * @param {object<string, number>} tagInfo
 * @returns
 */
export default function SideBar({ tagInfo, postListLength }) {
  return (
    <aside className="absolute -left-40 top-0 w-32">
      <p className="mb-3 border-b border-gray-400 pb-2 text-lg">태그 목록</p>
      <ul>
        <li className="mb-2">
          <SideTag tagKey="전체보기" tagAmount={postListLength} defaultPath />
        </li>
        {Object.keys(tagInfo).map((tagKey) => {
          return (
            <li key={tagKey} className="mb-2 w-full">
              <SideTag tagKey={tagKey} tagAmount={tagInfo[tagKey]} />
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
