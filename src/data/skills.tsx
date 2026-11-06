import { Component, FileCode, Code, Globe, Palette, GitBranch, PenTool, Zap } from 'lucide-react'
import type { ReactNode } from 'react'

export interface SkillItem {
  id: string
  name: string
  icon: ReactNode
}

export const skills: SkillItem[] = [
  { id: 'react', name: 'React', icon: <Component size={32} /> },
  { id: 'ts', name: 'TypeScript', icon: <FileCode size={32} /> },
  { id: 'js', name: 'JavaScript', icon: <Code size={32} /> },
  { id: 'html', name: 'HTML5', icon: <Globe size={32} /> },
  { id: 'css', name: 'CSS3', icon: <Palette size={32} /> },
  { id: 'git', name: 'Git', icon: <GitBranch size={32} /> },
  { id: 'figma', name: 'Figma', icon: <PenTool size={32} /> },
  { id: 'vite', name: 'Vite', icon: <Zap size={32} /> },
]