import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary'

export interface BaseButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  onClick?: () => void
}

export type ButtonAsButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined
  }

export type ButtonAsAnchorProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    className = '',
    onClick,
    href,
    ...restProps
  } = props

  const combinedClassName = `btn btn--${variant} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={onClick}
        {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={(restProps as ButtonHTMLAttributes<HTMLButtonElement>).type || 'button'}
      className={combinedClassName}
      onClick={onClick}
      {...(restProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}

