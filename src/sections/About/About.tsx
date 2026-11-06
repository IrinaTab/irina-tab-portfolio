import { useTranslation } from 'react-i18next'
import { GraduationCap, Briefcase } from 'lucide-react'
import Container from '@/components/Container'
import './About.css'

interface EducationItem {
  period: string
  institution: string
  specialty: string
  description: string
}

interface ExperienceItem {
  period: string
  role: string
  description: string
}

export default function About() {
  const { t } = useTranslation()

  const educationList = t('about.education', {
    returnObjects: true,
  }) as EducationItem[]

  const experienceList = t('about.experience', {
    returnObjects: true,
  }) as ExperienceItem[]

  return (
    <section id="about" className="about">
      <Container>
        <div className="about__header">
          <h2 className="about__title">{t('about.title')}</h2>
        </div>

        <div className="about__grid">
          {/* Education Block */}
          <div className="about__column">
            <div className="about__column-header">
              <span className="about__column-icon">
                <GraduationCap size={22} />
              </span>
              <h3 className="about__column-title">{t('about.education_title')}</h3>
            </div>

            <div className="about__timeline">
              {Array.isArray(educationList) &&
                educationList.map((item, index) => (
                  <div key={index} className="about__timeline-item">
                    <span className="about__timeline-dot" aria-hidden="true" />
                    <div className="about__card">
                      <div className="about__card-header">
                        <span className="about__card-institution">{item.institution}</span>
                        <span className="about__card-period">{item.period}</span>
                      </div>
                      <div className="about__card-title">{item.specialty}</div>
                      <p className="about__card-description">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Experience Block */}
          <div className="about__column">
            <div className="about__column-header">
              <span className="about__column-icon">
                <Briefcase size={22} />
              </span>
              <h3 className="about__column-title">{t('about.experience_title')}</h3>
            </div>

            <div className="about__timeline">
              {Array.isArray(experienceList) &&
                experienceList.map((item, index) => (
                  <div key={index} className="about__timeline-item">
                    <span className="about__timeline-dot" aria-hidden="true" />
                    <div className="about__card">
                      <div className="about__card-header">
                        <span className="about__card-period">{item.period}</span>
                      </div>
                      <div className="about__card-title">{item.role}</div>
                      <p className="about__card-description">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

