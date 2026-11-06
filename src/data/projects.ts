export interface ProjectItem {
  id: string
  title: string
  description: string
  stack: string[]
  image: string
}

export const projects: ProjectItem[] = [
  {
    id: 'furniture',
    title: 'Мебельный каталог',
    description: 'Одностраничный каталог мебели с фильтрами и анимациями.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    image: '',
  },
  {
    id: 'mini-games',
    title: 'Мини-игры',
    description: 'Набор небольших браузерных игр на Canvas.',
    stack: ['React', 'JavaScript', 'HTML5', 'CSS'],
    image: '',
  },
  {
    id: 'audit',
    title: 'Аудит бухгалтерского учёта',
    description: 'Внутренний инструмент проверки бухгалтерских записей.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    image: '',
  },
]