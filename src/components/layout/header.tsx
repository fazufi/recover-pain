'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { memo, useEffect, useState } from 'react';
import ButtonSpan from '../ButtonSpan';

export type HeaderProps = {
  hideMenus?: boolean;
};

const menus = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default memo(function Header({ hideMenus }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState('/');
  const [onTop, setScrollOnTop] = useState(true);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 30) {
        setScrollOnTop(false);
        return;
      }
      setScrollOnTop(true);
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  const params = useParams();
  useEffect(() => {
    if (!!window.location.hash && window.location.hash !== activeMenu) {
      setActiveMenu(window.location.hash);
    }
    // eslint-disable-next-line
  }, [params]);

  return (
    <header
      className={`${onTop ? '' : 'bg-white shadow'} sticky top-0 z-[10] flex  justify-between items-center w-full root-px py-8`}
    >
      <Link
        href={'/'}
        className="flex justify-start items-center gap-1  hover:text-[#0b559a] transition-colors duration-300"
      >
        <img
          alt=""
          className="w-[42px] h-[42px] hover:scale-105 tr-transform-300"
          src="/icons/logo.svg"
        />
        <div className="text-[#2d2d2d] text-xl transition-colors duration-300 hover:text-[#0b559a]">
          Recover <span className="font-light">Pain</span>
        </div>
      </Link>
      {!hideMenus && (
        <nav className="hidden md:flex justify-start items-center gap-3">
          {menus.map((v, i) => (
            <Link
              key={i}
              href={v.href}
              onClick={() => setActiveMenu(v.href)}
              className={`${
                activeMenu === v.href
                  ? 'text-[#0b559a] font-semibold'
                  : 'opacity-60 hover:opacity-100 hover:text-[#0b559a]'
              } px-4 py-2.5 rounded-full border border-black/10 text-sm hover:border-[#0b559a]  tr-all-300`}
            >
              {v.label}
            </Link>
          ))}
        </nav>
      )}
      <Link href={'#contact'}>
        <ButtonSpan variant="blue" outline className="px-8 py-4 rounded-full">
          Contact Us
        </ButtonSpan>
      </Link>
    </header>
  );
});
