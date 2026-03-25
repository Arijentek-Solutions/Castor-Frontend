import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cx } from '../../utils/cx';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary';

type CommonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type AnchorButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof CommonProps> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof CommonProps | 'type'> & {
    type?: 'button' | 'submit' | 'reset';
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const base =
  'inline-flex items-center justify-center gap-3 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4';

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-5 text-[0.9rem]',
  md: 'min-h-12 px-6 text-[0.92rem]',
  lg: 'min-h-14 px-7 text-[0.95rem]',
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--hero-primary)] text-white shadow-[var(--hero-primary-shadow)] hover:bg-[var(--hero-primary-hover)] focus-visible:outline-[var(--hero-primary)]',
  secondary:
    'border border-[color:var(--hero-secondary-border)] bg-[color:var(--hero-secondary-background)] text-[color:var(--hero-secondary-text)] backdrop-blur-[var(--hero-secondary-blur)] hover:bg-[color:var(--hero-secondary-hover)] focus-visible:outline-white/70',
};

export function Button({
  children,
  className,
  size = 'lg',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const resolvedClassName = cx(base, sizes[size], variants[variant], className);

  if ('href' in props) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={resolvedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = props;
  return (
    <button type={type} className={resolvedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
