import React, { memo } from 'react';
import Header, { HeaderProps } from './header';

type Props = {
  children: React.ReactNode;
  headerProps?: HeaderProps;
};

export default memo(function DefaultLayout({
  children,
  headerProps = {},
}: Props) {
  return (
    <div>
      <Header {...headerProps} />
      <main className="wrapper">{children}</main>
    </div>
  );
});
