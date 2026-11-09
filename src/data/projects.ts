import jardinFirst from '@/assets/jardin-first.jpg'
import jardinMain from '@/assets/jardin-main.jpg'
import jardinMobile from '@/assets/jardin-mobile.jpg'
import jardinAbout from '@/assets/jardin-about.jpg'
import jardinDetails from '@/assets/jardin-details.jpg'

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
    stack: ['React', 'TypeScript', 'Vite', 'i18n (RU/EN/ES)', 'CSS Modules'],
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
]