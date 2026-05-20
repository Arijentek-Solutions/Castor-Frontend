"use client";

import React, { type ReactNode } from "react";
import Link from "next/link";
import { Phone, ChevronDown as ChevronDownIcon } from "lucide-react";
import { SITE_URLS } from "../../config/site-urls";
import { type NavEntry, type ServiceContext, type DropdownEntry } from "./types";
import { ChevronDown, getPathname } from "./navbar-utils";
import styles from "./HelpMeChooseButton.module.css";

export const TopBar = () => {
  return (
    <div className="bg-[#0E1B33] border-b border-white/10 relative z-[60]">
      <div className="mx-auto flex h-9 sm:h-10 max-w-[1276px] items-center px-2.5 sm:px-6 relative">
        <div className="flex items-center gap-1.5 sm:gap-2 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
          <Link
            href="tel:815-564-0977"
            className="text-[11px] sm:text-[13px] xl:text-[14px] font-bold text-white transition-opacity hover:opacity-80 whitespace-nowrap"
          >
            815-564-0977
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-6">
          <Link
            href={`${SITE_URLS.web}/#provider-referral`}
            className="text-[9px] sm:text-[13px] xl:text-[14px] font-bold text-white transition-opacity hover:opacity-80"
          >
            Provider
          </Link>
          <div className="h-3.5 w-px bg-[rgba(32,169,173,0.4)]" />
          <a
            href={SITE_URLS.auth}
            className="flex items-center gap-0.5 text-[9px] sm:text-[13px] xl:text-[14px] font-bold text-white transition-opacity hover:opacity-80"
          >
            <span>Sign In</span>
            <ChevronDownIcon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const HelpMeChooseButton = ({
  className = "",
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) => (
  <button
    className={`${styles.helpButton} ${className}`}
    onClick={onClick}
    style={{ fontFamily: "inherit" }}
    type="button"
  >
    Help Me Choose
  </button>
);

export const Brand = () => {
  return (
    <a href={SITE_URLS.web} className="flex flex-shrink-0 items-center transition-opacity hover:opacity-90">
      <img
        src="/logo.png"
        alt="CASTOR Logo"
        className="h-10 w-auto sm:h-12 lg:h-11 xl:h-14"
      />
    </a>
  );
};

export const NavLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) => {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export const DropdownMenu = ({ items, pathname }: { items: DropdownEntry[]; pathname: string }) => (
  <div className="w-[286px] rounded-[28px] border border-[#edf0f4] bg-white/98 p-4 shadow-[0_24px_60px_rgba(17,24,39,0.14)] backdrop-blur-[16px]">
    <div className="space-y-2">
      {items.map((item) => {
        const isActive = pathname === getPathname(item.href);
        return (
          <a
            key={item.title}
            href={item.href}
            className={`group flex items-start gap-4 rounded-[20px] px-3 py-3 text-left transition-colors ${isActive ? 'bg-[#20A9AD] text-white' : 'hover:bg-[#f7f9fb]'}`}
          >
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors ${isActive
              ? 'bg-white text-[#20A9AD]'
              : 'bg-[#eef8f8] text-[#20A9AD] group-hover:bg-[#20A9AD] group-hover:text-white'
              }`}>
              {item.icon}
            </div>
            <div>
              <div className={`text-[15px] font-bold leading-5 ${isActive ? 'text-white' : 'text-[#17233C]'}`}>{item.title}</div>
              <div className={`mt-1 text-[14px] leading-6 ${isActive ? 'text-white/80' : 'text-[#6A6A67]'}`}>{item.description}</div>
            </div>
          </a>
        );
      })}
    </div>
  </div>
);

export const DesktopNavItem = ({ item, pathname, serviceContext }: { item: NavEntry; pathname: string; serviceContext?: ServiceContext }) => {
  const hasDropdown = Boolean(item.dropdownItems?.length);
  let isActive = false;
  const contextToLabel: Record<string, string> = {
    services: "Get Care",
    ecommerce: "Medical Supplies",
    institute: "Health Institute",
    transport: "Transportation",
  };

  if (serviceContext && contextToLabel[serviceContext]) {
    isActive = contextToLabel[serviceContext] === item.label;
  }

  if (!isActive && (!serviceContext || serviceContext === "web")) {
    const pathFromHref = getPathname(item.href);
    if (pathFromHref === '/') {
      isActive = pathname === '/' && item.label !== "Medical Supplies";
    } else {
      isActive =
        pathname === pathFromHref || pathname.startsWith(pathFromHref + '/');
    }
  }

  if (!hasDropdown) {
    return (
      <NavLink
        className={`flex h-9 items-center justify-center rounded-full px-2 text-center text-[13px] font-bold leading-5 transition-colors whitespace-nowrap xl:px-4 xl:text-[14px] ${isActive
          ? "bg-[#20A9AD] text-white"
          : "text-[#6A6A67] hover:text-[#0E1B33]"
          } ${item.desktopWidth}`}
        href={item.href}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className={`group relative flex h-9 ${item.desktopWidth} items-center justify-center`}>
      <NavLink
        className={`flex h-9 w-full items-center justify-center gap-0.5 rounded-full px-2 text-center text-[13px] font-bold leading-5 transition-colors whitespace-nowrap xl:gap-1 xl:px-[14px] xl:text-[14px] ${isActive
          ? "bg-[#20A9AD] text-white"
          : "text-[#6A6A67] group-hover:text-[#0E1B33]"
          }`}
        href={item.href}
      >
        <span>{item.label}</span>
        <ChevronDown className={`mt-px h-3 w-3 text-current opacity-60 transition-transform duration-200 group-hover:rotate-180 ${isActive ? 'opacity-100' : ''}`} />
      </NavLink>
      <div className="pointer-events-none absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <DropdownMenu items={item.dropdownItems ?? []} pathname={pathname} />
      </div>
    </div>
  );
};

export const MobileNavItem = ({
  item,
  isOpen,
  onToggle,
  pathname,
  serviceContext,
}: {
  item: NavEntry;
  isOpen: boolean;
  onToggle: () => void;
  pathname: string;
  serviceContext?: ServiceContext;
}) => {
  const hasDropdown = Boolean(item.dropdownItems?.length);
  let isActive = false;
  const contextToLabel: Record<string, string> = {
    services: "Get Care",
    ecommerce: "Medical Supplies",
    institute: "Health Institute",
    transport: "Transportation",
  };

  if (serviceContext && contextToLabel[serviceContext]) {
    isActive = contextToLabel[serviceContext] === item.label;
  }

  if (!isActive && (!serviceContext || serviceContext === "web")) {
    const pathFromHref = getPathname(item.href);
    if (pathFromHref === '/') {
      isActive = pathname === '/' && item.label !== "Medical Supplies";
    } else {
      isActive =
        pathname === pathFromHref || pathname.startsWith(pathFromHref + '/');
    }
  }

  if (!hasDropdown) {
    return (
      <NavLink
        className={`flex h-11 items-center rounded-[20px] px-4 text-[14px] font-bold leading-5 transition-colors hover:bg-[#f7f9fb] ${isActive
          ? "bg-[#20A9AD] text-white"
          : "text-[#0E1B33]"
          }`}
        href={item.href}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className={`rounded-[22px] border border-[#edf0f4] p-1 ${isActive ? 'bg-[#f0f9fa] border-[#20A9AD]' : ''}`}>
      <div className="flex items-center gap-2">
        <NavLink
          className={`flex min-w-0 flex-1 items-center rounded-[18px] px-3 py-3 text-[14px] font-bold leading-5 transition-colors ${isActive
            ? "bg-[#20A9AD] text-white"
            : "text-[#0E1B33]"
            }`}
          href={item.href}
        >
          {item.label}
        </NavLink>
        <button
          aria-expanded={isOpen}
          aria-label={`Toggle ${item.label} links`}
          className={`flex h-10 w-10 items-center justify-center rounded-[18px] transition-colors hover:bg-[#f7f9fb] ${isActive ? 'bg-[#20A9AD] text-white' : 'text-[#6A6A67]'}`}
          onClick={onToggle}
          type="button"
        >
          <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>
      {isOpen ? (
        <div className="space-y-1 px-2 pb-2 pt-1">
          {item.dropdownItems?.map((dropdownItem) => {
            const subItemActive = pathname === dropdownItem.href || pathname.startsWith(dropdownItem.href);
            return (
              <a
                key={dropdownItem.title}
                href={dropdownItem.href}
                className={`group flex items-start gap-3 rounded-[18px] px-3 py-3 transition-colors ${subItemActive ? 'bg-[#20A9AD] text-white' : 'hover:bg-[#f7f9fb]'}`}
              >
                <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors ${subItemActive
                  ? 'bg-white text-[#20A9AD]'
                  : 'bg-[#eef8f8] text-[#20A9AD] group-hover:bg-[#20A9AD] group-hover:text-white'
                  }`}>
                  {dropdownItem.icon}
                </div>
                <div className={subItemActive ? 'text-white' : ''}>
                  <div className="text-[14px] font-bold leading-5">{dropdownItem.title}</div>
                  <div className={`mt-1 text-[13px] leading-5 ${subItemActive ? 'text-white/80' : 'text-[#6A6A67]'}`}>{dropdownItem.description}</div>
                </div>
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
