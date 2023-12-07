import React, { ReactNode } from 'react'
import clsx from 'clsx'

type ButtonProps = {
  children?: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  className?: string
}

const Button = (props: ButtonProps) => {
  const { children, size = 'xs', rightIcon, leftIcon, className } = props

  let styles = null

  switch (size) {
    case 'xs':
      styles = {
        container: clsx('px-2 py-2', {
          'px-3': Boolean(children),
        }),
        icon: 'h-4 w-4',
        text: 'body-xs',
      }
      break
    case 'sm':
      styles = {
        container: clsx('px-2 py-2', {
          'px-3': Boolean(children),
        }),
        icon: 'h-5 w-5',
        text: 'body-sm',
      }
      break
    case 'md':
      styles = {
        container: clsx('px-4 py-2.5', {
          'px-2.5': Boolean(children),
        }),
        icon: 'h-5 w-5',
        text: 'body-sm',
      }
      break
    case 'lg':
      styles = {
        container: clsx('px-5 py-3', {
          'px-3': Boolean(children),
        }),
        icon: 'h-5 w-5',
        text: 'body-md',
      }
      break
    case 'xl':
      styles = {
        container: clsx('px-6 py-4', {
          'px-4': Boolean(children),
        }),
        icon: 'h-6 w-6',
        text: 'body-md',
      }
      break
  }

  return (
    <button
      className={clsx(
        styles.container,
        'flex items-center justify-center gap-2 rounded-lg',
        className
      )}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children && (
        <span className={clsx('font-semibold', styles.text)}>{children}</span>
      )}
      {rightIcon && !leftIcon && (
        <span className={styles.icon}>{rightIcon}</span>
      )}
    </button>
  )
}

export default Button
