import { useTranslation } from 'react-i18next'
import Container from '@/components/Container'
import { skills } from '@/data/skills'
import './Skills.css'

export default function Skills() {
  const { t } = useTranslation()
  return (
    <section id="skills" className="skills">
      <Container>
        <h2 className="skills__title">{t('skills.title')}</h2>
        <p className="skills__subtitle">{t('skills.subtitle')}</p>
        <div className="skills__grid">
          {skills.map((item) => (
            <div key={item.id} className="skills__card">
              <div className="skills__icon">{item.icon}</div>
              <span className="skills__name">{item.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}