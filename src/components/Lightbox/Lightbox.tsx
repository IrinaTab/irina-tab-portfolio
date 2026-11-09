import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './Lightbox.css'

interface LightboxProps {
    images: string[]
    currentIndex: number
    onClose: () => void
    onNext: () => void
    onPrev: () => void
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
    // Закрытие по нажатию на Escape и управление стрелками
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') onNext()
            if (e.key === 'ArrowLeft') onPrev()
        }
        window.addEventListener('keydown', handleKeyDown)
        // Блокируем скролл фона
        document.body.style.overflow = 'hidden'

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'auto'
        }
    }, [onClose, onNext, onPrev])

    return (
        <div className="lightbox" onClick={onClose}>
            <button className="lightbox__close" onClick={onClose} aria-label="Close">
                <X size={32} />
            </button>

            <button
                className="lightbox__nav lightbox__nav--prev"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous image"
            >
                <ChevronLeft size={48} />
            </button>

            <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                <div className="lightbox__counter">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            <button
                className="lightbox__nav lightbox__nav--next"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next image"
            >
                <ChevronRight size={48} />
            </button>
        </div>
    )
}