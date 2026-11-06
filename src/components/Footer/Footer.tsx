import Container from '@/components/Container'
import { Send, MessageCircle, Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__content">
                    <span className="footer__copy">© 2026 Irina Tabiya</span>
                    <div className="footer__social">
                        <a
                            href="https://t.me/your_nickname"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                        >
                            <Send size={16} />
                        </a>
                        <a
                            href="https://wa.me/your_phone"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle size={16} />
                        </a>
                        <a
                            href="mailto:your@email.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                        >
                            <Mail size={16} />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}