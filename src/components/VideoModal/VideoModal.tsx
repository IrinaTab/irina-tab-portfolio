import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { X } from 'lucide-react'
import './VideoModal.css'

interface VideoModalProps {
    videoUrl: string
    onClose: () => void
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
    const { t } = useTranslation()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'auto'
        }
    }, [onClose])

    return (
        <div className="video-modal" onClick={onClose}>
            <button className="video-modal__close" onClick={onClose} aria-label="Close">
                <X size={32} />
            </button>

            <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>
                <video
                    src={videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="video-modal__player"
                >
                    {t('projects.video_not_supported')}
                </video>
            </div>
        </div>
    )
}