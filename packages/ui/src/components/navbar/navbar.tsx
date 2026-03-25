"use client";
import Link from 'next/link';
import type { ReactNode } from 'react';
import { SITE_URLS } from '../../config/site-urls';

export const Navbar = () => {
  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 sm:top-6 sm:px-5 lg:top-8 lg:px-6">
      <nav 
        className="flex h-20 w-full max-w-[1380px] items-center justify-between rounded-full border border-[#bfc7d5]/15 bg-white px-5 py-3 shadow-[0_12px_32px_rgba(27,28,28,0.06)] backdrop-blur-[20px] sm:px-6 md:h-22 md:px-8 lg:h-24 lg:px-12 xl:px-16"
      >
        {/* Logo Section */}
        <a href={SITE_URLS.web} className="group flex flex-shrink-0 items-center gap-3 transition-opacity hover:opacity-90 sm:gap-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-white shadow-sm sm:h-11 sm:w-11 sm:text-2xl lg:h-12 lg:w-12"
            style={{ backgroundColor: '#20A9AD' }}
          >
            C
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none tracking-tight text-[#1b1c1c] transition-colors group-hover:text-[#20A9AD] sm:text-2xl">CASTOR</span>
            <span className="mt-0.5 text-[9px] font-bold uppercase leading-tight tracking-[0.05em] text-[#20A9ADB2] sm:text-[10px]">
              HEALTH ECOSYSTEM
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="mx-4 hidden min-w-0 flex-1 items-center justify-center gap-1 xl:mx-6 xl:gap-2 lg:flex">
          <NavItem label="Get Care"         href={SITE_URLS.services}  hasDropdown dropdownContent={<GetCareDropdown />} />
          <NavItem label="Medical Supplies" href={SITE_URLS.ecommerce} hasDropdown dropdownContent={<MedicalSuppliesDropdown />} />
          <NavItem label="Health Institute" href={SITE_URLS.institute} hasDropdown dropdownContent={<HealthInstituteDropdown />} />
          <NavItem label="Transportation"   href={SITE_URLS.transport} />
          <NavItem label="Careers"          href={`${SITE_URLS.web}/careers`} />
          <NavItem label="Contact"          href={`${SITE_URLS.web}/contact`} />
        </div>

        {/* Actions */}
        <div className="flex flex-shrink-0 items-center gap-2 self-stretch sm:gap-3 lg:gap-4">
          <button className="hidden rounded-full p-2.5 text-gray-400 transition-colors hover:bg-gray-50 md:block lg:p-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <Link
            href="/choose"
            className="flex h-11 items-center justify-center whitespace-nowrap rounded-[33554400px] bg-[#0E1B33] px-5 text-sm font-semibold text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] transition-all hover:opacity-90 active:scale-95 sm:h-12 sm:px-6 md:px-7 lg:h-14 lg:px-8"
          >
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
  dropdownContent?: ReactNode;
}

const NavItem = ({ label, href = "#", hasDropdown = false, dropdownContent }: NavItemProps) => {
  // Determine if this is a cross-app link (absolute URL)
  const isExternal = href.startsWith('http');

  if (!dropdownContent) {
    return isExternal ? (
      <a
        href={href}
        className="group flex items-center justify-center gap-1 whitespace-nowrap px-2 py-2 text-center text-[15px] font-bold leading-6 text-[#6A6A67] transition-colors hover:text-[#0D99FF] xl:px-3 xl:text-[16px]"
      >
        {label}
      </a>
    ) : (
      <Link
        href={href}
        className="group flex items-center justify-center gap-1 whitespace-nowrap px-2 py-2 text-center text-[15px] font-bold leading-6 text-[#6A6A67] transition-colors hover:text-[#0D99FF] xl:px-3 xl:text-[16px]"
      >
        {label}
        {hasDropdown && (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 transition-transform group-hover:translate-y-0.5">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        )}
      </Link>
    );
  }

  return (
    <div className="group relative">
      {isExternal ? (
        <a
          href={href}
          className="flex items-center justify-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-center text-[15px] font-bold leading-6 text-[#6A6A67] transition-colors hover:text-[#0D99FF] group-hover:bg-[#E8FAFB] group-hover:text-[#20A9AD] xl:text-[16px]"
        >
          {label}
          {hasDropdown && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 transition-transform group-hover:rotate-180 group-hover:text-[#20A9AD]">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          )}
        </a>
      ) : (
        <Link
          href={href}
          className="flex items-center justify-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-center text-[15px] font-bold leading-6 text-[#6A6A67] transition-colors hover:text-[#0D99FF] group-hover:bg-[#E8FAFB] group-hover:text-[#20A9AD] xl:text-[16px]"
        >
          {label}
          {hasDropdown && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 transition-transform group-hover:rotate-180 group-hover:text-[#20A9AD]">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          )}
        </Link>
      )}
      <div className="pointer-events-none absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        {dropdownContent}
      </div>
    </div>
  );
};

const getCareItems = [
  {
    title: "Home Health",
    description: "Skilled nursing & therapy services",
    href: `${SITE_URLS.services}/#hero`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20s-6-3.8-6-9a3.5 3.5 0 0 1 6-2.2A3.5 3.5 0 0 1 18 11c0 5.2-6 9-6 9Z" />
      </svg>
    ),
  },
  {
    title: "Private Duty Nursing",
    description: "One-on-one nursing care",
    href: `${SITE_URLS.services}/#hero`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11V7a3 3 0 1 1 6 0v4" />
        <path d="M12 11v6" />
        <path d="M8 14a4 4 0 1 0 8 0" />
        <path d="M19 10v4" />
      </svg>
    ),
  },
  {
    title: "Home Care (Non-Medical)",
    description: "Personal care & companionship",
    href: `${SITE_URLS.services}/#hero`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 18a5.5 5.5 0 0 1 11 0" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M14.5 18a4.5 4.5 0 0 1 7 0" />
      </svg>
    ),
  },
  {
    title: "Veterans / VA Care",
    description: "Specialized care for veterans",
    href: `${SITE_URLS.services}/#hero`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 7 5v6c0 4 2.6 7.6 5 9 2.4-1.4 5-5 5-9V5l-5-2Z" />
        <path d="M9.5 10.5a2.5 2.5 0 1 1 5 0c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5Z" />
      </svg>
    ),
  },
];

const medicalSuppliesItems = [
  {
    title: "DME Equipment",
    description: "Durable medical equipment",
    href: SITE_URLS.ecommerce,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3 7 4-7 4-7-4 7-4Z" />
        <path d="m5 7 7 4 7-4" />
        <path d="m5 12 7 4 7-4" />
        <path d="M12 11v8" />
      </svg>
    ),
  },
  {
    title: "Browse Catalog",
    description: "View all medical supplies",
    href: SITE_URLS.ecommerce,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Scrubs",
    description: "Professional medical apparel",
    href: SITE_URLS.ecommerce,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 4 1.5 2h3L15 4l4 2-1.5 5H15v9H9v-9H6.5L5 6l4-2Z" />
      </svg>
    ),
  },
];

const healthInstituteItems = [
  {
    title: "CNA Program",
    description: "Certified Nursing Assistant training",
    href: SITE_URLS.institute,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a7 7 0 0 1-7-7V8" />
        <path d="M5 11a4 4 0 1 1 8 0v3" />
        <path d="M15 10h4" />
        <path d="M17 8v4" />
      </svg>
    ),
  },
  {
    title: "Phlebotomy Training",
    description: "Blood draw certification program",
    href: SITE_URLS.institute,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c3 4 5 6.5 5 10a5 5 0 1 1-10 0c0-3.5 2-6 5-10Z" />
      </svg>
    ),
  },
  {
    title: "CPR Certification",
    description: "CPR & First Aid training",
    href: SITE_URLS.institute,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2-4 4 10 2-6h6" />
      </svg>
    ),
  },
];

const GetCareDropdown = () => (
  <div className="w-[286px] rounded-[30px] border border-[#BFECEF] bg-white/95 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.14)] backdrop-blur-[16px]">
    <div className="space-y-5">
      {getCareItems.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group flex items-start gap-4 rounded-[22px] px-3 py-3 text-left transition-colors hover:bg-[#EAF6F7]"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#E8FAFB] text-[#20A9AD] transition-colors group-hover:bg-[#20A9AD] group-hover:text-white">
            {item.icon}
          </div>
          <div>
            <div className="text-[15px] font-bold leading-5 text-[#17233C] transition-colors group-hover:text-[#20A9AD]">{item.title}</div>
            <div className="mt-1 text-[14px] leading-6 text-[#6A6A67]">{item.description}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const MedicalSuppliesDropdown = () => (
  <div className="w-[286px] rounded-[30px] border border-[#BFECEF] bg-white/95 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.14)] backdrop-blur-[16px]">
    <div className="space-y-5">
      {medicalSuppliesItems.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group flex items-start gap-4 rounded-[22px] px-3 py-3 text-left transition-colors hover:bg-[#EAF6F7]"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#E8FAFB] text-[#20A9AD] transition-colors group-hover:bg-[#20A9AD] group-hover:text-white">
            {item.icon}
          </div>
          <div>
            <div className="text-[15px] font-bold leading-5 text-[#17233C] transition-colors group-hover:text-[#20A9AD]">{item.title}</div>
            <div className="mt-1 text-[14px] leading-6 text-[#6A6A67]">{item.description}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const HealthInstituteDropdown = () => (
  <div className="w-[286px] rounded-[30px] border border-[#BFECEF] bg-white/95 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.14)] backdrop-blur-[16px]">
    <div className="space-y-5">
      {healthInstituteItems.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group flex items-start gap-4 rounded-[22px] px-3 py-3 text-left transition-colors hover:bg-[#EAF6F7]"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#E8FAFB] text-[#20A9AD] transition-colors group-hover:bg-[#20A9AD] group-hover:text-white">
            {item.icon}
          </div>
          <div>
            <div className="text-[15px] font-bold leading-5 text-[#17233C] transition-colors group-hover:text-[#20A9AD]">{item.title}</div>
            <div className="mt-1 text-[14px] leading-6 text-[#6A6A67]">{item.description}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
);
