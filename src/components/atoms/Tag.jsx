export default function Tag({ tagName }) {
  return (
    <div className="px-3 py-0.5 rounded-xl bg-gray-200 text-green-500">
      <span># {tagName}</span>
    </div>
  )
}
