import clsx from 'clsx'
import { HashLink } from 'react-router-hash-link'

interface TableOfContentsProps {
  navigation?: any,
  className?: string
}

export function TableOfContents({ navigation, className }: TableOfContentsProps) {

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section: any) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
            >
              {section.links.map((link: any) => (
                <li key={link.href} className="relative">
                  <HashLink
                    to={link.href}
                    className={clsx(
                      'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                      link.href === '#'
                        ? 'font-semibold text-gray-50 before:bg-gray-50'
                        : 'text-[#9DB89D] before:hidden before:bg-gray-300 hover:text-white hover:before:block'
                    )}
                  >
                    {link.title}
                  </HashLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
