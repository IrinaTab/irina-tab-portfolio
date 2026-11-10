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
    // Проверяем, можно ли листать дальше/назад
    const isFirst = currentIndex === 0
    const isLast = currentIndex === images.length - 1

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            // Блокируем клавиши, если достигли края
            if (e.key === 'ArrowRight' && !isLast) onNext()
            if (e.key === 'ArrowLeft' && !isFirst) onPrev()
        }
        window.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'auto'
        }
    }, [onClose, onNext, onPrev, isFirst, isLast])

    return (
        <div className="lightbox" onClick={onClose}>
            <button className="lightbox__close" onClick={onClose} aria-label="Close">
                <X size={32} />
            </button>

            {/* Левая стрелка: скрываем или делаем неактивной, если это первое фото */}
            <button
                className={`lightbox__nav lightbox__nav--prev ${isFirst ? 'lightbox__nav--disabled' : ''}`}
                onClick={(e) => { e.stopPropagation(); if (!isFirst) onPrev(); }}
                disabled={isFirst}
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

            {/* Правая стрелка: скрываем или делаем неактивной, если это последнее фото */}
            <button
                className={`lightbox__nav lightbox__nav--next ${isLast ? 'lightbox__nav--disabled' : ''}`}
                onClick={(e) => { e.stopPropagation(); if (!isLast) onNext(); }}
                disabled={isLast}
                aria-label="Next image"
            >
                <ChevronRight size={48} />
            </button>
        </div>
    )
}