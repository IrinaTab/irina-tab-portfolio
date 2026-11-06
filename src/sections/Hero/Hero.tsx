import { useTranslation } from 'react-i18next'
import { Sparkles } from 'lucide-react'
import Container from '@/components/Container'
import Button from '@/components/Button'
import heroPhoto from '@/assets/my-photo.jpg'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__subtitle-tag">
              <span className="hero__subtitle-dot" aria-hidden="true" />
              <span>Available for projects</span>
            </div>

            <h1 className="hero__title">{t('hero.title')}</h1>

            <p className="hero__subtitle">{t('hero.subtitle')}</p>

            <p className="hero__description">{t('hero.description')}</p>

            <div className="hero__actions">
              <Button variant="primary" href="#contact">
                {t('hero.btn_contact')}
              </Button>
              <Button variant="secondary" href="#projects">
                {t('hero.btn_projects')}
              </Button>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__photo-wrapper">
              <img src={heroPhoto} alt="Ирина Табия" className="hero__photo-img" />              <div className="hero__photo-badge">
                <div>
                  <div className="hero__photo-badge-title">Frontend Developer</div>
                  <div className="hero__photo-badge-sub">React • TypeScript • UI/UX</div>
                </div>
                <Sparkles size={20} color="var(--accent)" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

