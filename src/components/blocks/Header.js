import Link from 'next/link'

// DATA
import headerNavLinks from '@/data/headerNavLinks'

// COMPONENTS
import Logo from '@/components/atoms/icon/logo.svg'
import NavigationButtton from '@/components/atoms/NavigationButton/NavigationButtton.jsx'

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between">
        <h1 className="w-12 h-12">
          <Link href="/">
            <Logo className="w-full h-full" />
          </Link>
        </h1>
        <ul className="flex gap-5">
          {headerNavLinks
            .filter((navLink) => navLink.href !== '/')
            .map((navLink) => {
              return (
                <li key={navLink.title} className="w-12 h-12 relative">
                  <NavigationButtton
                    href={navLink.href}
                    title={navLink.title}
                  />
                </li>
              )
            })}
        </ul>
      </nav>
    </header>
  )
}
