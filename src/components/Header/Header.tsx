import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import Container from '@/components/Container'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import './Header.css'

export default function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <a href="#hero" className="header__logo" onClick={closeMenu}>
            <span className="header__logo-badge">IT</span>
            <span className="header__logo-text">Irina Tabiya</span>
          </a>

          <nav
            className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`.trim()}
            aria-label="Main navigation"
          >
            <ul className="header__nav-list">
              <li>
                <a href="#hero" className="header__nav-link" onClick={closeMenu}>
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="header__nav-link" onClick={closeMenu}>
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#skills" className="header__nav-link" onClick={closeMenu}>
                  {t('nav.skills')}
                </a>
              </li>
              <li>
                <a href="#projects" className="header__nav-link" onClick={closeMenu}>
                  {t('nav.projects')}
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <LanguageSwitcher />
            <button
              type="button"
              className="header__burger"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}

