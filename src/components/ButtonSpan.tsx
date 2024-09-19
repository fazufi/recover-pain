import React, { memo, useMemo } from 'react';

type Props = {
  variant: 'blue';
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
};

export default memo(function ButtonSpan({
  variant,
  outline,
  children,
  className: cn = '',
}: Props) {
  let className = '';
  if (variant === 'blue') {
    if (outline) {
      className =
        ' border-primary text-primary hover:text-white hover:bg-primary active:text-white active:bg-primary';
    } else {
      className =
        'bg-primary text-white hover:scale-105 tr-transform-300 hover:opacity-90';
    }
  }

  className = `${cn} border ${className} tr-all-300 rounded-full`;

  return <span className={className}>{children}</span>;
});
