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
        <h1 className="h-12 w-12">
          <Link href="/">
            <Logo className="h-full w-full" />
          </Link>
        </h1>
        <ul className="flex gap-5">
          {headerNavLinks
            .filter((navLink) => navLink.href !== '/')
            .map((navLink) => {
              return (
                <li key={navLink.title} className="relative h-12 w-12">
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
