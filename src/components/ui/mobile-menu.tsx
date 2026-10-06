import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { NAV_LINKS } from '@/consts'
import { localizePath, useTranslations, type Lang } from '@/i18n/ui'
import { Menu, ExternalLink } from 'lucide-react'

const MobileMenu = ({ lang }: { lang: Lang }) => {
  const t = useTranslations(lang)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleViewTransitionStart = () => {
      setIsOpen(false)
    }
    document.addEventListener('astro:before-swap', handleViewTransitionStart)
    return () => {
      document.removeEventListener('astro:before-swap', handleViewTransitionStart)
    }
  }, [])

  const isExternalLink = (href: string) => {
    return href.startsWith('http')
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={(val) => setIsOpen(val)}>
      <DropdownMenuTrigger asChild onClick={() => setIsOpen((val) => !val)}>
        <Button variant="outline" size="icon" className="md:hidden" title="Menu">
          <Menu className="h-5 w-5" />
          <span className="sr-only">{t('nav.menu')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background">
        {NAV_LINKS.map((item) => {
          const href = localizePath(item.href, lang)
          const isExternal = isExternalLink(href)
          const isInsideLink = false
          return (
            <DropdownMenuItem key={item.href} asChild>
              <a
                href={href}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`w-full text-lg font-medium capitalize flex items-center gap-2 ${
                  isInsideLink ? 'text-primary hover:text-primary/80' : isExternal ? 'text-primary/90 hover:text-primary' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{t(item.labelKey)}</span>
                {isExternal && (
                  <ExternalLink className={`h-4 w-4 opacity-80 flex-shrink-0 ${isInsideLink ? 'text-primary' : ''}`} aria-hidden="true" />
                )}
              </a>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileMenu
