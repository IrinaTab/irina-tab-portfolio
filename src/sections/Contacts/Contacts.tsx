import { useTranslation } from 'react-i18next'
import Container from '@/components/Container'
import { Send, MessageCircle, Mail } from 'lucide-react'
import './Contacts.css'

export default function Contacts() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="contacts">
      <Container>
        <h2 className="contacts__title">{t('contacts.title')}</h2>
        <p className="contacts__subtitle">{t('contacts.subtitle')}</p>
        <div className="contacts__links">
          <a
            href="https://t.me/IrinaTabVeb"
            className="contacts__btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('contacts.telegram')}
          >
            <Send size={24} />
          </a>
          <a
            href="https://wa.me/+79498360304"
            className="contacts__btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('contacts.whatsapp')}
          >
            <MessageCircle size={24} />
          </a>
          <a
            href="mailto:irisha.tab@mail.ru"
            className="contacts__btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('contacts.email')}
          >
            <Mail size={24} />
          </a>
        </div>
      </Container>
    </section>
  )
}
