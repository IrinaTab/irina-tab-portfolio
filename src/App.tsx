import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Contacts from '@/sections/Contacts'
import { useSmoothScroll } from './hooks/useSmoothScroll' // <-- Импорт хука

export default function App() {
  useSmoothScroll() // <-- Вызов хука

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}