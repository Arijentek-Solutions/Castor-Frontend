"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown as ChevronDownIcon } from "lucide-react";
import { SITE_URLS } from "../../config/site-urls";
import { type ServiceNavLink, type ServiceContext } from "./types";
import { getCareItems, SERVICE_NAV_LINKS } from "./nav-data";
import { ChevronDown } from "./navbar-utils";

export const ServiceSubNavItem = ({ item, pathname, baseUrl }: { item: ServiceNavLink; pathname: string; baseUrl: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredParent, setHoveredParent] = useState<string | null>(null);
  const [position, setPosition] = useState({ left: 0, bottom: 0 });
  const subMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const baseClasses = "inline-flex h-8 items-center gap-1.5 whitespace-nowrap text-[14px] font-bold leading-none tracking-normal font-sans transition-all outline-none appearance-none px-4 rounded-full sm:text-[15px] border-2 border-transparent focus-visible:ring-2 focus-visible:ring-[#20A9AD]/50";
  const activeClasses = "bg-[#20A9AD] text-white border-[#20A9AD] shadow-sm";
  const inactiveClasses = "text-[#0E1B33]/70 hover:text-[#20A9AD] hover:bg-white hover:border-[#20A9AD]/20";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHoveredParent(null);
      }
    };

    const updatePosition = () => {
      if (triggerRef.current && isOpen) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({
          left: rect.left + rect.width / 2,
          bottom: rect.bottom
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen]);

  const getRelativePath = (href: string): string => {
    try { return new URL(href).pathname || '/'; }
    catch { return href || '/'; }
  };

  const mobileLeftOffset = item.label === "Courses" ? 100 : item.label === "Services" ? 20 : 20;
  const mobileTopOffset = item.label === "Courses" ? 95 : item.label === "Services" ? 85 : 15;

  const isActive = (() => {
    if (item.dropdownItems) {
      let hasActiveChild = false;
      item.dropdownItems.forEach(child => {
        const childPath = getRelativePath(child.href);
        const rootPath = getRelativePath(baseUrl);
        if (pathname === childPath && childPath !== rootPath) {
          hasActiveChild = true;
        }
        if (child.subItems) {
          child.subItems.forEach(sub => {
            const subPath = getRelativePath(sub.href);
            if (pathname === subPath && subPath !== rootPath) {
              hasActiveChild = true;
            }
          });
        }
      });
      return hasActiveChild;
    }
    return pathname === getRelativePath(item.href);
  })();

  if (item.dropdownItems) {
    const parent = hoveredParent ? item.dropdownItems.find(i => i.title === hoveredParent) : null;
    const showSubMenu = !!parent?.subItems?.length;
    const subItems = parent?.subItems;

    return (
      <div
        ref={subMenuRef}
        className="relative flex items-center h-9"
        onMouseEnter={() => {
          setIsOpen(true);
          setHoveredParent(null);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
          setHoveredParent(null);
        }}
      >
        <Link
          ref={triggerRef}
          href={item.href}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          className={`${baseClasses} cursor-pointer ${isActive ? activeClasses : inactiveClasses}`}
          onClick={(e) => {
            if (window.innerWidth < 1024) {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
        >
          <span className="block">{item.label}</span>
          <ChevronDownIcon className={`h-3 w-3 mt-0.5 opacity-60 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''} ${isActive ? 'opacity-100' : ''}`} />
        </Link>

        {isOpen && (
          <div
            style={window.innerWidth < 1024 ? {
              left: `${position.left - mobileLeftOffset}px`,
              top: `${position.bottom - mobileTopOffset}px`
            } : {}}
            className="fixed -translate-x-1/2 lg:absolute lg:left-0 lg:translate-x-0 lg:top-full lg:z-[110] pt-2"
          >
            <div className="relative w-[210px] lg:w-64 rounded-2xl border border-[#edf0f4] bg-white shadow-xl backdrop-blur-xl">
              <div className="space-y-1 lg:space-y-2 p-2 lg:p-3">
                {item.dropdownItems.map((subItem) => {
                  const subItemActive = pathname === getRelativePath(subItem.href) || (subItem.subItems && subItem.subItems.some(si => pathname === getRelativePath(si.href)));
                  const hasNestedSubItems = subItem.subItems && subItem.subItems.length > 0;
                  return (
                    <div
                      key={subItem.title}
                      className="relative"
                      onMouseEnter={() => {
                        if (window.innerWidth >= 1024) setHoveredParent(subItem.title);
                      }}
                    >
                      {hasNestedSubItems ? (
                        <Link
                          href={subItem.href}
                          className={`group flex items-start gap-2 lg:gap-3 rounded-xl p-2 lg:p-3 transition-colors cursor-pointer ${subItemActive ? 'bg-[#20A9AD] text-white' : 'hover:bg-[#f7f9fb]'}`}
                          onClick={(e) => {
                            if (window.innerWidth < 1024) {
                              e.preventDefault();
                              setHoveredParent(hoveredParent === subItem.title ? null : subItem.title);
                            } else {
                              setIsOpen(false);
                            }
                          }}
                        >
                          <div className={`flex h-8 w-8 lg:h-10 lg:w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${subItemActive
                            ? 'bg-white text-[#20A9AD]'
                            : 'bg-[#f0f9fa] text-[#20A9AD] group-hover:bg-[#20A9AD] group-hover:text-white'
                            }`}>
                            {subItem.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className={`text-[14px] lg:text-[15px] font-bold ${subItemActive ? 'text-white' : 'text-[#0E1B33]'}`}>{subItem.title}</div>
                            <div className={`mt-0.5 lg:mt-1 whitespace-normal break-words text-[12px] lg:text-[13px] leading-tight lg:leading-4 ${subItemActive ? 'text-white/80' : 'text-[#475569]'}`}>
                              {subItem.description}
                            </div>
                          </div>
                          <ChevronDown className={`h-3 w-3 opacity-60 transition-transform duration-200 ${hoveredParent === subItem.title && window.innerWidth < 1024 ? 'rotate-180' : '-rotate-90'}`} />
                        </Link>
                      ) : (
                        <Link
                          href={subItem.href}
                          className={`group flex items-start gap-2 lg:gap-3 rounded-xl p-2 lg:p-3 transition-colors ${subItemActive ? 'bg-[#20A9AD] text-white' : 'hover:bg-[#f7f9fb]'}`}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className={`flex h-8 w-8 lg:h-10 lg:w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${subItemActive
                            ? 'bg-white text-[#20A9AD]'
                            : 'bg-[#f0f9fa] text-[#20A9AD] group-hover:bg-[#20A9AD] group-hover:text-white'
                            }`}>
                            {subItem.icon}
                          </div>
                          <div className="min-w-0">
                            <div className={`text-[14px] lg:text-[15px] font-bold ${subItemActive ? 'text-white' : 'text-[#0E1B33]'}`}>{subItem.title}</div>
                            <div className={`mt-0.5 lg:mt-1 whitespace-normal break-words text-[12px] lg:text-[13px] leading-tight lg:leading-4 ${subItemActive ? 'text-white/80' : 'text-[#475569]'}`}>
                              {subItem.description}
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {showSubMenu && subItems && (
                <div className="absolute left-[95%] top-0 lg:left-full lg:top-0 w-[180px] lg:w-[220px] rounded-2xl border border-[#edf0f4] bg-white p-2 lg:p-3 shadow-xl backdrop-blur-xl z-20 ml-1 lg:ml-0">
                  <div className="space-y-1">
                    {subItems.map((nestedItem) => {
                      const nestedItemActive = pathname === getRelativePath(nestedItem.href);
                      return (
                        <Link
                          key={nestedItem.title}
                          href={nestedItem.href}
                          className={`group flex items-center gap-2 lg:gap-3 rounded-lg px-2 py-2 lg:px-3 lg:py-2.5 transition-colors ${nestedItemActive ? 'bg-[#20A9AD] text-white' : 'hover:bg-[#f7f9fb]'}`}
                          onClick={() => { setIsOpen(false); setHoveredParent(null); }}
                        >
                          <div className={`flex h-6 w-6 lg:h-8 lg:w-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${nestedItemActive
                            ? 'bg-white text-[#20A9AD]'
                            : 'bg-[#f0f9fa] text-[#20A9AD] group-hover:bg-[#20A9AD] group-hover:text-white'
                            }`}>
                            {nestedItem.icon}
                          </div>
                          <div className="min-w-0">
                            <div className={`text-[13px] lg:text-[14px] font-bold leading-tight ${nestedItemActive ? 'text-white' : 'text-[#0E1B33]'}`}>{nestedItem.title}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <span className="block leading-none">{item.label}</span>
    </Link>
  );
};

export const ServiceSubNav = ({ serviceContext }: { serviceContext: Exclude<ServiceContext, "web"> }) => {
  const links = SERVICE_NAV_LINKS[serviceContext];
  const pathname = usePathname();
  const baseUrl = SITE_URLS[serviceContext];

  if (!links) return null;

  const desktopLinks = serviceContext === "services"
    ? [
        links[0]!,
        ...getCareItems.map(item => ({ label: item.title, href: item.href })),
        ...links.slice(2)
      ]
    : links;

  return (
    <div className="border-b border-[#20A9AD]/10 bg-[#EEF8F8]/80 backdrop-blur-xl py-1.5 sm:py-2 flex items-center justify-center cursor-default select-none relative z-40">
      <div className="mx-auto max-w-[1276px] w-full">
        <div className="flex items-center justify-start gap-10 overflow-x-auto overflow-y-visible px-6 scrollbar-hide sm:justify-center sm:px-8 lg:hidden">
          {links.map((link) => (
            <ServiceSubNavItem key={link.label} item={link} pathname={pathname} baseUrl={baseUrl} />
          ))}
        </div>

        <div className="hidden items-center justify-center gap-4 overflow-visible px-8 lg:flex xl:gap-8">
          {desktopLinks.map((link, idx) => (
            <ServiceSubNavItem 
              key={`${link.label}-${idx}`} 
              item={link} 
              pathname={pathname} 
              baseUrl={baseUrl} 
            />
          ))}
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};
