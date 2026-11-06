import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

export interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation()

  const currentLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'ru'

  const changeLanguage = (lang: 'ru' | 'en') => {
    i18n.changeLanguage(lang)
  }

  const containerClassName = className ? `lang-switcher ${className}` : 'lang-switcher'

  return (
    <div className={containerClassName} role="group" aria-label="Language switcher">
      <button
        type="button"
        className={`lang-switcher__btn ${currentLanguage === 'ru' ? 'lang-switcher__btn--active' : ''}`.trim()}
        onClick={() => changeLanguage('ru')}
        aria-pressed={currentLanguage === 'ru'}
      >
        RU
      </button>
      <button
        type="button"
        className={`lang-switcher__btn ${currentLanguage === 'en' ? 'lang-switcher__btn--active' : ''}`.trim()}
        onClick={() => changeLanguage('en')}
        aria-pressed={currentLanguage === 'en'}
      >
        EN
      </button>
    </div>
  )
}

