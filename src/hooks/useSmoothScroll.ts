import { useEffect } from 'react'

export function useSmoothScroll() {
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const anchor = target.closest('a')

            if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
                const href = anchor.getAttribute('href')
                if (href === '#' || href === '#hero') {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    return
                }

                const element = document.querySelector(href as string)
                if (element) {
                    e.preventDefault()
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }
        }

        document.addEventListener('click', handleAnchorClick)
        return () => document.removeEventListener('click', handleAnchorClick)
    }, [])
}