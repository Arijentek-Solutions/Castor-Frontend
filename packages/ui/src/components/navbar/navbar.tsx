"use client";

import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-[1240px] bg-white rounded-full px-6 py-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50/50">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity flex-shrink-0">
          <div 
            className="flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-lg shadow-sm"
            style={{ backgroundColor: '#20A9AD' }}
          >
            c
          </div>
          <div className="flex flex-col">
            <span className="text-[#0e1b33] font-black text-xl leading-none tracking-tight">CASTOR</span>
            <span className="text-[#20A9AD] font-bold text-[9px] uppercase tracking-[0.05em] leading-tight">
              HEALTH ECOSYSTEM
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 mx-4">
          <NavItem label="Get Care" href="/get-care" hasDropdown />
          <NavItem label="Medical Supplies" href="/supplies" hasDropdown />
          <NavItem label="Health Institute" href="/institute" hasDropdown />
          <NavItem label="Transportation" href="/transport" />
          <NavItem label="Careers" href="/careers" />
          <NavItem label="Contact" href="/contact" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="p-2.5 rounded-full hover:bg-gray-50 transition-colors text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <Link href="/choose" className="bg-[#0e2238] text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-[#152e4a] transition-all transform active:scale-95 whitespace-nowrap shadow-md">
            Help Me Choose
          </Link>
        </div>
      </nav>
    </div>
  );
};

interface NavItemProps {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

const NavItem = ({ label, href = "#", hasDropdown = false }: NavItemProps) => (
  <Link href={href} className="px-3 py-2 text-[#6c7b91] font-bold text-[13px] hover:text-[#20A9AD] transition-colors flex items-center gap-1.5 group whitespace-nowrap">
    {label}
    {hasDropdown && (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:translate-y-0.5 transition-transform">
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    )}
  </Link>
);
