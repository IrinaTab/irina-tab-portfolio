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
// Импорты для Учебных проектов (все 16 штук)
import studyProjects from '@/assets/study-projects.jpg' // Коллаж (главная)
import studySilentHill from '@/assets/silent-hill.jpg'
import studyChat from '@/assets/online-chat.jpg'
import studyTodo from '@/assets/todo-list.jpg'
import studyTodoMob from '@/assets/todo-list-mob.jpg'
import studyCoffi from '@/assets/coffi.jpg'
import studyCoffiMenu from '@/assets/coffi-menu.jpg'
import studyCoffiMob from '@/assets/coffi-mob.jpg'
import studyGames from '@/assets/games.jpg'
import studyGamesAbout from '@/assets/games-about.jpg'
import studyGamesAbout1 from '@/assets/games-about-1.jpg'
import studyFurniture from '@/assets/furniture.jpg'
import studyFurnitureFooter from '@/assets/furniture-footer.jpg'
import studyFurnitureCatalog from '@/assets/furniture-catalog.jpg'
import studyFurnitureCart from '@/assets/furniture-cart.jpg'

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
  {
    id: 'study-projects',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
    images: [
      studyProjects,
      studyGames,
      studyGamesAbout,
      studyGamesAbout1,
      studyCoffi,
      studyCoffiMenu,
      studyCoffiMob,
      studyTodo,
      studyTodoMob,
      studyFurniture,
      studyFurnitureCatalog,
      studyFurnitureCart,
      studyFurnitureFooter,
      studyChat,
      studySilentHill
    ],
    role: 'Frontend Developer'
  },
]