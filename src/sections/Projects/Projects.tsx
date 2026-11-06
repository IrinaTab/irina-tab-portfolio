import { useTranslation } from 'react-i18next'
import Container from '@/components/Container'
import { projects } from '@/data/projects'
import './Projects.css'

export default function Projects() {
  const { t } = useTranslation()
  return (
    <section id="projects" className="projects">
      <Container>
        <h2 className="projects__title">{t('projects.title')}</h2>
        <p className="projects__subtitle">{t('projects.subtitle')}</p>
        <div className="projects__grid">
          {projects.map((p) => (
            <div key={p.id} className="projects__card">
              <div className="projects__image" style={{ backgroundImage: p.image ? `url(${p.image})` : undefined }} />
              <div className="projects__content">
                <h3 className="projects__card-title">{p.title}</h3>
                <p className="projects__card-desc">{p.description}</p>
                <div className="projects__stack">
                  {p.stack.map((tech) => (
                    <span key={tech} className="projects__badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

