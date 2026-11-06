import type { ReactNode } from 'react'
import './Container.css'

export interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  const containerClassName = className ? `container ${className}` : 'container'

  return <div className={containerClassName}>{children}</div>
}

