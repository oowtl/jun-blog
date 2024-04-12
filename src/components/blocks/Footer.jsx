import Github from '@/components/atoms/icon/Github.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center">
        <a
          href="https://github.com/oowtl"
          target="_blank"
          aria-label="GithubLink"
        >
          <span>
            <Github className="w-12 h-12" clickable />
          </span>
        </a>
      </div>
      <p className="text-center">Jun Develop &middot; 2024</p>
    </footer>
  )
}
