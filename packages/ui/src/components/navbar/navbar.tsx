"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { useState, type ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown as ChevronDownIcon } from "lucide-react";
import { SITE_URLS } from "../../config/site-urls";
import { HelpMeChooseModal } from "../help-me-choose-modal/HelpMeChooseModal";

const inter = Inter({ subsets: ["latin"] });
const HELP_MODAL_SESSION_STORAGE_KEY = "castor-help-modal-session-handled";

type DropdownEntry = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

type NavEntry = {
  label: string;
  href: string;
  desktopWidth: string;
  dropdownItems?: DropdownEntry[];
};

const getCareItems: DropdownEntry[] = [
  {
    title: "Home Health (Medicare)",
    description: "Recovery after surgery or illness",
    href: `${SITE_URLS.services}/homehealth`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20s-6-3.8-6-9a3.5 3.5 0 0 1 6-2.2A3.5 3.5 0 0 1 18 11c0 5.2-6 9-6 9Z" />
      </svg>
    ),
  },
  {
    title: "Private Duty Nursing",
    description: "Long-term complex care",
    href: `${SITE_URLS.services}/privateduty-nursing`,
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
    title: "Personal Home Care",
    description: "Daily help (non-medical)",
    href: `${SITE_URLS.services}/home-care`,
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
    title: "Veterans Care",
    description: "VA authorized services",
    href: `${SITE_URLS.services}/veterans-care`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 7 5v6c0 4 2.6 7.6 5 9 2.4-1.4 5-5 5-9V5l-5-2Z" />
        <path d="M9.5 10.5a2.5 2.5 0 1 1 5 0c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5Z" />
      </svg>
    ),
  },
];

const medicalSuppliesItems: DropdownEntry[] = [
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

const healthInstituteItems: DropdownEntry[] = [
  {
    title: "CNA Program",
    description: "Certified Nursing Assistant training",
    href: `${SITE_URLS.institute}/courses/cna`,
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
    href: `${SITE_URLS.institute}/courses/phlebotomy`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c3 4 5 6.5 5 10a5 5 0 1 1-10 0c0-3.5 2-6 5-10Z" />
      </svg>
    ),
  },
  {
    title: "CPR Certification",
    description: "CPR & First Aid training",
    href: `${SITE_URLS.institute}/courses/cpr`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2-4 4 10 2-6h6" />
      </svg>
    ),
  }
];

const navItems: NavEntry[] = [
  { label: "Get Care", href: SITE_URLS.services, desktopWidth: "lg:w-[84px] xl:w-[106px]", dropdownItems: getCareItems },
  { label: "Medical Supplies", href: SITE_URLS.ecommerce, desktopWidth: "lg:w-[126px] xl:w-[161px]", dropdownItems: medicalSuppliesItems },
  { label: "Health Institute", href: SITE_URLS.institute, desktopWidth: "lg:w-[118px] xl:w-[153px]", dropdownItems: healthInstituteItems },
  { label: "Transportation", href: SITE_URLS.transport, desktopWidth: "lg:w-[104px] xl:w-[130px]" },
  { label: "Careers", href: `${SITE_URLS.web}/careers`, desktopWidth: "lg:w-[70px] xl:w-[81px]" },
  { label: "Contact", href: `${SITE_URLS.web}/contact`, desktopWidth: "lg:w-[72px] xl:w-[83px]" },
];

const TopBar = () => {
  return (
    <div className="bg-[#0E1B33] border-b border-white/10 relative z-[60]">
      <div className="mx-auto flex h-9 sm:h-10 max-w-[1276px] items-center px-2.5 sm:px-6 relative">
        {/* Phone Number: Left on mobile, Center on desktop */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
          <Link 
            href="tel:1-800-CASTOR-1" 
            className="text-[11px] sm:text-[13px] xl:text-[14px] font-bold text-white transition-opacity hover:opacity-80 whitespace-nowrap"
          >
            1-800-CASTOR-1
          </Link>
        </div>
        
        {/* Right: Actions */}
        <div className="ml-auto flex items-center gap-2 sm:gap-6">
          <Link 
            href={`${SITE_URLS.services}/provider`} 
            className="text-[10px] sm:text-[13px] xl:text-[14px] font-bold text-white transition-opacity hover:opacity-80"
          >
            Provider
          </Link>
          <div className="h-3.5 w-px bg-[rgba(32,169,173,0.4)]" />
          <Link 
            href={SITE_URLS.auth}
            className="flex items-center gap-1 text-[10px] sm:text-[13px] xl:text-[14px] font-bold text-white transition-opacity hover:opacity-80"
          >
            <span>Sign In</span>
            <ChevronDownIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-60" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const hasAutoOpenedHelpModal = useRef(false);
  const [shouldAutoOpenForSession, setShouldAutoOpenForSession] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsHelpModalOpen(true);
    window.addEventListener('open-help-modal', handleOpenModal);
    return () => window.removeEventListener('open-help-modal', handleOpenModal);
  }, []);

  useEffect(() => {
    const hasSessionBeenHandled = window.sessionStorage.getItem(HELP_MODAL_SESSION_STORAGE_KEY) === "true";
    if (!hasSessionBeenHandled) {
      setShouldAutoOpenForSession(true);
    }
  }, []);

  useEffect(() => {
    if (!shouldAutoOpenForSession || hasAutoOpenedHelpModal.current || isHelpModalOpen) {
      return;
    }

    const markSessionHandled = () => {
      window.sessionStorage.setItem(HELP_MODAL_SESSION_STORAGE_KEY, "true");
      setShouldAutoOpenForSession(false);
    };

    const handleActivity = () => {
      if (hasAutoOpenedHelpModal.current || isHelpModalOpen) {
        return;
      }

      clearTimeout(timeoutId);
      markSessionHandled();
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleActivity);
      });
    };

    const activityEvents: Array<keyof WindowEventMap> = [
      "pointerdown",
      "keydown",
      "scroll",
      "touchstart",
    ];

    const timeoutId = setTimeout(() => {
      if (hasAutoOpenedHelpModal.current || isHelpModalOpen) {
        return;
      }

      hasAutoOpenedHelpModal.current = true;
      markSessionHandled();
      setIsHelpModalOpen(true);
    }, 10000);

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, handleActivity, { passive: true });
    });

    return () => {
      clearTimeout(timeoutId);
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleActivity);
      });
    };
  }, [isHelpModalOpen, shouldAutoOpenForSession]);

  const openHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  return (
    <div className={`${inter.className} fixed left-0 right-0 top-0 z-50`}>
      <TopBar />
      <div className="flex justify-center px-2 pt-2.5 sm:px-4 lg:px-6 lg:pt-4">
        <nav className="w-full max-w-[1276px] rounded-[32px] border border-[#edf0f4] bg-white/96 px-2 py-2.5 shadow-[0_18px_40px_rgba(15,23,42,0.10)] backdrop-blur-[20px] sm:px-4 lg:rounded-full lg:px-3 xl:px-4 lg:py-0">
          <div className="flex min-h-[56px] items-center justify-between gap-1.5 sm:gap-3 lg:h-20">
            <Brand />

            <div className="hidden flex-1 items-center justify-center lg:flex">
              <div className="flex h-9 w-full max-w-[574px] items-center justify-between xl:max-w-[733px]">
                {navItems.map((item) => (
                  <DesktopNavItem key={item.label} item={item} />
                ))}
              </div>
            </div>

            <div className="hidden items-center lg:flex">
              <button
                onClick={openHelpModal}
                className="flex h-12 w-[174px] items-center justify-center whitespace-nowrap rounded-full bg-[#0E1B33] px-5 text-[13px] font-bold leading-5 text-white shadow-[0_10px_15px_rgba(0,0,0,0.10),0_4px_6px_rgba(0,0,0,0.10)] transition-transform hover:scale-[0.99] active:scale-[0.97] xl:h-14 xl:w-[188px] xl:px-10 xl:text-[14px]"
              >
                Help Me Choose
              </button>
            </div>

            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                onClick={openHelpModal}
                className="hidden h-10 items-center justify-center rounded-full bg-[#0E1B33] px-3.5 text-[12px] font-bold leading-5 text-white shadow-[0_10px_15px_rgba(0,0,0,0.10),0_4px_6px_rgba(0,0,0,0.10)] min-[375px]:flex sm:h-11 sm:px-4 sm:text-[13px]"
              >
                Help Me Choose
              </button>
              <button
                aria-expanded={isMobileOpen}
                aria-label="Toggle navigation menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#edf0f4] text-[#0E1B33] transition-colors hover:bg-[#f7f9fb]"
                onClick={() => setIsMobileOpen((open) => !open)}
                type="button"
              >
                <MenuIcon open={isMobileOpen} />
              </button>
            </div>
          </div>

          {isMobileOpen ? (
            <div className="border-t border-[#edf0f4] pt-3 lg:hidden">
              <div className="space-y-1 pb-1">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    isOpen={openMobileSection === item.label}
                    onToggle={() =>
                      setOpenMobileSection((current) => (current === item.label ? null : item.label))
                    }
                  />
                ))}
              </div>
            </div>
          ) : null}
        </nav>
      </div>

      <HelpMeChooseModal 
        isOpen={isHelpModalOpen} 
        onClose={closeHelpModal} 
      />
    </div>
  );
};

const Brand = () => {
  return (
    <a href={SITE_URLS.web} className="flex items-center gap-1.5 transition-opacity hover:opacity-90 sm:gap-2.5 lg:gap-2 xl:gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#20A9AD_0%,#1A8B8F_100%)] text-[16px] font-black leading-7 tracking-[-0.05em] text-white shadow-[0_10px_15px_rgba(0,0,0,0.10),0_4px_6px_rgba(0,0,0,0.10)] sm:h-11 sm:w-11 sm:text-[20px] lg:h-10 lg:w-10 xl:h-12 xl:w-12">
        C
      </div>
      <div className="min-w-0">
        <div className="text-[16px] font-black leading-6 tracking-[-0.025em] text-[#0E1B33] sm:text-[20px] sm:leading-7 lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7">
          CASTOR
        </div>
        <div className="truncate text-[7.5px] font-bold uppercase leading-[10px] tracking-[0.14em] text-[rgba(32,169,173,0.7)] sm:text-[9px] sm:tracking-[0.2em] lg:text-[8px] lg:tracking-[0.14em] xl:text-[10px] xl:tracking-[0.2em]">
          Health Ecosystem
        </div>
      </div>
    </a>
  );
};

const DesktopNavItem = ({ item }: { item: NavEntry }) => {
  const hasDropdown = Boolean(item.dropdownItems?.length);

  if (!hasDropdown) {
    return (
      <NavLink
        className={`flex h-9 items-center justify-center rounded-full px-2 text-center text-[13px] font-bold leading-5 text-[#6A6A67] transition-colors hover:text-[#0E1B33] xl:px-4 xl:text-[14px] ${item.desktopWidth}`}
        href={item.href}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className={`group relative flex h-9 ${item.desktopWidth} items-center justify-center`}>
      <NavLink
        className="flex h-9 w-full items-center justify-center gap-0.5 rounded-full px-2 text-center text-[13px] font-bold leading-5 text-[#6A6A67] transition-colors group-hover:text-[#0E1B33] xl:gap-1 xl:px-[14px] xl:text-[14px]"
        href={item.href}
      >
        <span>{item.label}</span>
        <ChevronDown className="mt-px h-3 w-3 text-current opacity-60 transition-transform duration-200 group-hover:rotate-180" />
      </NavLink>
      <div className="pointer-events-none absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <DropdownMenu items={item.dropdownItems ?? []} />
      </div>
    </div>
  );
};

const MobileNavItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: NavEntry;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const hasDropdown = Boolean(item.dropdownItems?.length);

  if (!hasDropdown) {
    return (
      <NavLink
        className="flex h-11 items-center rounded-[20px] px-4 text-[14px] font-bold leading-5 text-[#0E1B33] transition-colors hover:bg-[#f7f9fb]"
        href={item.href}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className="rounded-[22px] border border-[#edf0f4] p-1">
      <div className="flex items-center gap-2">
        <NavLink
          className="flex min-w-0 flex-1 items-center rounded-[18px] px-3 py-3 text-[14px] font-bold leading-5 text-[#0E1B33]"
          href={item.href}
        >
          {item.label}
        </NavLink>
        <button
          aria-expanded={isOpen}
          aria-label={`Toggle ${item.label} links`}
          className="flex h-10 w-10 items-center justify-center rounded-[18px] text-[#6A6A67] transition-colors hover:bg-[#f7f9fb]"
          onClick={onToggle}
          type="button"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>
      {isOpen ? (
        <div className="space-y-1 px-2 pb-2 pt-1">
          {item.dropdownItems?.map((dropdownItem) => (
            <a
              key={dropdownItem.title}
              href={dropdownItem.href}
              className="group flex items-start gap-3 rounded-[18px] px-3 py-3 transition-colors hover:bg-[#f7f9fb]"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#eef8f8] text-[#20A9AD] transition-colors group-hover:bg-[#20A9AD] group-hover:text-white">
                {dropdownItem.icon}
              </div>
              <div>
                <div className="text-[14px] font-bold leading-5 text-[#17233C]">{dropdownItem.title}</div>
                <div className="mt-1 text-[13px] leading-5 text-[#6A6A67]">{dropdownItem.description}</div>
              </div>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const DropdownMenu = ({ items }: { items: DropdownEntry[] }) => (
  <div className="w-[286px] rounded-[28px] border border-[#edf0f4] bg-white/98 p-4 shadow-[0_24px_60px_rgba(17,24,39,0.14)] backdrop-blur-[16px]">
    <div className="space-y-2">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group flex items-start gap-4 rounded-[20px] px-3 py-3 text-left transition-colors hover:bg-[#f7f9fb]"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#eef8f8] text-[#20A9AD] transition-colors group-hover:bg-[#20A9AD] group-hover:text-white">
            {item.icon}
          </div>
          <div>
            <div className="text-[15px] font-bold leading-5 text-[#17233C]">{item.title}</div>
            <div className="mt-1 text-[14px] leading-6 text-[#6A6A67]">{item.description}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const NavLink = ({
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

const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {open ? (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ) : (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    )}
  </svg>
);
