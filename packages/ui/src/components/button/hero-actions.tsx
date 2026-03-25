import type { ReactNode } from 'react';

import { cx } from '../../utils/cx';

type HeroActionsProps = {
  children: ReactNode;
  className?: string;
};

export function HeroActions({ children, className }: HeroActionsProps) {
  return <div className={cx('mt-9 flex flex-wrap gap-4', className)}>{children}</div>;
}

