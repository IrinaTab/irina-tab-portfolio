import jardinFirst from '@/assets/jardin-first.jpg'
import jardinMain from '@/assets/jardin-main.jpg'
import jardinMobile from '@/assets/jardin-mobile.jpg'
import jardinAbout from '@/assets/jardin-about.jpg'
import jardinDetails from '@/assets/jardin-details.jpg'
// Импорты для ОргТехСервис (6 штук)
import technoFirst from '@/assets/techno-first.jpg'
import technoMain from '@/assets/techno-main.jpg'
import technoMobile from '@/assets/techno-mobile.jpg'
import technoModal from '@/assets/techno-modal.jpg'
import technoServices from '@/assets/techno-services.jpg'
import technoReviews from '@/assets/techno-reviews.jpg'

export interface ProjectItem {
  id: string
  stack: string[]
  images: string[]
  liveLink?: string
  videoUrl?: string
  role?: string
}

export const projects: ProjectItem[] = [
  {
    id: 'jardin',
    stack: ['React', 'TypeScript', 'Vite', 'i18n (RU/EN/ES)', 'CSS Modules', 'Telegram Bot API'],
    images: [
      jardinFirst,
      jardinMain,
      jardinMobile,
      jardinAbout,
      jardinDetails
    ],
    liveLink: 'https://www.jardinhairs.com/',
    videoUrl: '/videos/jardin-review.mp4',
    role: 'Frontend Developer'
  },
  {
    id: 'technoservice',
    stack: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'Telegram Bot API'],
    images: [
      technoFirst,
      technoMain,
      technoMobile,
      technoModal,
      technoServices,
      technoReviews
    ],
    liveLink: 'https://technoservice-landing-git-main-irina-tab.vercel.app/',
    videoUrl: '/videos/techno-review.mp4',
    role: 'Frontend Developer'
  },
]