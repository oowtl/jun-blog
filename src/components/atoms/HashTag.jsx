export default function Tag({ tagName }) {
  return (
    <div className="rounded-xl bg-gray-200 px-3 py-0.5 text-green-500">
      <span># {tagName}</span>
    </div>
  )
}
