import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink, CheckCircle2, Image as ImageIcon, Play } from 'lucide-react'
import Container from '@/components/Container'
import Lightbox from '@/components/Lightbox'
import VideoModal from '@/components/VideoModal'
import { projects } from '@/data/projects'
import './Projects.css'

export default function Projects() {
  const { t } = useTranslation()

  const [lightbox, setLightbox] = useState<{ projectId: string; index: number } | null>(null)
  const [videoModal, setVideoModal] = useState<string | null>(null)

  const openLightbox = (projectId: string, index: number) => {
    setLightbox({ projectId, index })
  }

  const closeLightbox = () => setLightbox(null)

  const nextImage = (imagesLength: number) => {
    if (!lightbox) return
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % imagesLength })
  }

  const prevImage = (imagesLength: number) => {
    if (!lightbox) return
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + imagesLength) % imagesLength })
  }

  const activeProject = lightbox ? projects.find(p => p.id === lightbox.projectId) : null

  const getFeatures = (id: string) => {
    const features = t(`projects.${id}.features`, { returnObjects: true })
    return Array.isArray(features) ? features : []
  }

  return (
    <section id="projects" className="projects">
      <Container>
        <h2 className="projects__title">{t('projects.title')}</h2>
        <p className="projects__subtitle">{t('projects.subtitle')}</p>

        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="projects__card">

              {/* Одна главная картинка */}
              <div
                className="projects__main-image"
                onClick={() => openLightbox(project.id, 0)}
              >
                {project.images.length > 0 ? (
                  <img src={project.images[0]} alt={t(`projects.${project.id}.title`)} />
                ) : (
                  <div className="projects__image-placeholder">
                    <ImageIcon size={48} />
                    <span>{t('projects.no_photo')}</span>
                  </div>
                )}
                <div className="projects__image-overlay">
                  <span>{t('projects.view_photos')}</span>
                </div>
              </div>

              {/* Контент карточки */}
              <div className="projects__content">
                <h3 className="projects__card-title">{t(`projects.${project.id}.title`)}</h3>
                <p className="projects__card-desc">{t(`projects.${project.id}.description`)}</p>

                <ul className="projects__features">
                  {getFeatures(project.id).map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} className="projects__feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="projects__stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="projects__badge">{tech}</span>
                  ))}
                </div>

                {/* Блок с кнопками */}
                <div className="projects__actions">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      {t('projects.view_site')} <ExternalLink size={16} />
                    </a>
                  )}

                  {project.videoUrl && (
                    <button
                      className="projects__link projects__link--video"
                      onClick={() => setVideoModal(project.videoUrl!)}
                    >
                      {t('projects.view_video')} <Play size={16} fill="currentColor" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Лайтбокс */}
      {lightbox && activeProject && (
        <Lightbox
          images={activeProject.images}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onNext={() => nextImage(activeProject.images.length)}
          onPrev={() => prevImage(activeProject.images.length)}
        />
      )}

      {/* Модальное окно с видео */}
      {videoModal && (
        <VideoModal
          videoUrl={videoModal}
          onClose={() => setVideoModal(null)}
        />
      )}
    </section>
  )
}