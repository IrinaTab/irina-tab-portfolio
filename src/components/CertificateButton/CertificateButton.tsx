import './CertificateButton.css'

interface CertificateButtonProps {
    onClick: () => void
}

export default function CertificateButton({ onClick }: CertificateButtonProps) {
    return (
        <button className="cert-btn" onClick={onClick} aria-label="Посмотреть сертификат">
            <svg
                className="cert-btn__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Лента/Медаль */}
                <path d="M12 15l-2 5L9 22l3-5 3 5-1-2-2-5z" />
                <circle cx="12" cy="8" r="6" />
                {/* Звезда внутри медали */}
                <polygon points="12 4 13.5 7 17 7.5 14.5 10 15 13.5 12 11.5 9 13.5 9.5 10 7 7.5 10.5 7 12 4" fill="currentColor" stroke="none" />
            </svg>
        </button>
    )
}