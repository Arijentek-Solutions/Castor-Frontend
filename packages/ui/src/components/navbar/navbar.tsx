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

type ServiceContext = "web" | "services" | "institute" | "transport" | "ecommerce";

type ServiceNavLink = {
  label: string;
  href: string;
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
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9" />
        <path d="M12 12 21 3" />
        <path d="m21 8-3-5h5l-2 5Z" />
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
  { label: "Get Care", href: SITE_URLS.services, desktopWidth: "lg:w-[84px] xl:w-[106px]" },
  { label: "Medical Supplies", href: SITE_URLS.ecommerce, desktopWidth: "lg:w-[126px] xl:w-[161px]" },
  { label: "Health Institute", href: SITE_URLS.institute, desktopWidth: "lg:w-[118px] xl:w-[153px]" },
  { label: "Transportation", href: SITE_URLS.transport, desktopWidth: "lg:w-[104px] xl:w-[130px]" },
  { label: "Careers", href: `${SITE_URLS.web}/careers`, desktopWidth: "lg:w-[70px] xl:w-[81px]" },
  { label: "Contact", href: `${SITE_URLS.web}/contact`, desktopWidth: "lg:w-[72px] xl:w-[83px]" },
];

const SERVICE_NAV_LINKS: Record<Exclude<ServiceContext, "web">, ServiceNavLink[]> = {
  services: [
    { label: "Home", href: SITE_URLS.services },
    { label: "Services", href: SITE_URLS.services, dropdownItems: getCareItems },
    { label: "Counties", href: `${SITE_URLS.services}/counties` },
    { label: "About Us", href: `${SITE_URLS.services}/about-us` }
  ],
  institute: [
    { label: "Home", href: SITE_URLS.institute },
    { label: "CNA Program", href: `${SITE_URLS.institute}/courses/cna` },
    { label: "Phlebotomy", href: `${SITE_URLS.institute}/courses/phlebotomy` },
    { label: "CPR Training", href: `${SITE_URLS.institute}/courses/cpr` },
    { label: "Student Life", href: `${SITE_URLS.institute}/students` },
    { label: "Facilities", href: `${SITE_URLS.institute}/facilities` },
  ],
  transport: [
    { label: "Home", href: SITE_URLS.transport },
    { label: "Service Coverage", href: `${SITE_URLS.transport}/service-coverage` },
    { label: "Fleet", href: `${SITE_URLS.transport}/fleet` },
    { label: "Safety", href: `${SITE_URLS.transport}/safety` },
    { label: "Booking", href: `${SITE_URLS.transport}/booking` },
  ],
  ecommerce: [
    { label: "Shop All", href: SITE_URLS.ecommerce },
    { label: "DME Equipment", href: `${SITE_URLS.ecommerce}/category/dme` },
    { label: "Medical Scrubs", href: `${SITE_URLS.ecommerce}/category/scrubs` },
    { label: "Wellness", href: `${SITE_URLS.ecommerce}/category/wellness` },
    { label: "Track Order", href: `${SITE_URLS.ecommerce}/track` },
  ],
};

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
        <div className="ml-auto flex items-center gap-1.5 sm:gap-6">
          <Link
            href={`${SITE_URLS.services}/provider`}
            className="text-[9px] sm:text-[13px] xl:text-[14px] font-bold text-white transition-opacity hover:opacity-80"
          >
            Provider
          </Link>
          <div className="h-3.5 w-px bg-[rgba(32,169,173,0.4)]" />
          <Link
            href={SITE_URLS.auth}
            className="flex items-center gap-0.5 text-[9px] sm:text-[13px] xl:text-[14px] font-bold text-white transition-opacity hover:opacity-80"
          >
            <span>Sign In</span>
            <ChevronDownIcon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 opacity-60" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Navbar = ({ serviceContext }: { serviceContext?: ServiceContext }) => {
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
      <nav className="w-full border-b border-[#edf0f4] bg-white/96 shadow-[0_2px_15px_rgba(0,0,0,0.05)] backdrop-blur-[20px]">
        <div className="mx-auto max-w-[1276px] px-4 sm:px-6">
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
                className="hidden h-9 items-center justify-center rounded-full bg-[#0E1B33] px-2.5 text-[11px] font-bold leading-5 text-white shadow-[0_10px_15px_rgba(0,0,0,0.10),0_4px_6px_rgba(0,0,0,0.10)] min-[350px]:flex sm:h-11 sm:px-4 sm:text-[13px]"
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
        </div>
      </nav>

      <HelpMeChooseModal
        isOpen={isHelpModalOpen}
        onClose={closeHelpModal}
      />
      {serviceContext && serviceContext !== "web" && (
        <ServiceSubNav serviceContext={serviceContext as Exclude<ServiceContext, "web">} />
      )}
    </div>
  );
};

const ServiceSubNavItem = ({ item }: { item: ServiceNavLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ left: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const sharedClasses = "inline-flex h-9 items-center gap-1.5 whitespace-nowrap text-[12px] font-bold leading-none tracking-normal font-sans text-[#0E1B33]/70 transition-colors hover:text-[#20A9AD] sm:text-[13px] outline-none appearance-none bg-transparent p-0";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    const updatePosition = () => {
      if (triggerRef.current && isOpen) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({ left: rect.left + rect.width / 2 });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", updatePosition, true); // True to catch events in scrollable containers
    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen]);

  if (item.dropdownItems) {
    return (
      <div 
        ref={menuRef}
        className="relative flex items-center h-9"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          ref={triggerRef}
          href={item.href}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          className={`${sharedClasses} cursor-pointer rounded-none`}
          onClick={(e) => {
            if (window.innerWidth < 1024) {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
        >
          <span className="block leading-none">{item.label}</span>
          <ChevronDownIcon className={`h-3 w-3 mt-0.5 opacity-60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </Link>

        {isOpen && (
          <div 
            style={window.innerWidth < 1024 ? { 
              left: `${position.left + 10}px`,
              top: '120px'
            } : {}}
            className="fixed -translate-x-1/2 lg:absolute lg:left-1/2 lg:top-full lg:z-[110] pt-2"
          >
            <div className="w-64 rounded-2xl border border-[#edf0f4] bg-white p-2 shadow-xl backdrop-blur-xl">
              {item.dropdownItems.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.href}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#f7f9fb]"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#f0f9fa] text-[#20A9AD]">
                    {subItem.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13px] font-bold text-[#0E1B33]">{subItem.title}</div>
                    <div className="mt-1 whitespace-normal break-words text-[11px] leading-4 text-[#475569]">
                      {subItem.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={sharedClasses}
    >
      <span className="block leading-none">{item.label}</span>
    </Link>
  );
};

const ServiceSubNav = ({ serviceContext }: { serviceContext: Exclude<ServiceContext, "web"> }) => {
  const links = SERVICE_NAV_LINKS[serviceContext];
  const pathname = usePathname();

  if (!links) return null;

  return (
    <div className="border-b border-[#20A9AD]/10 bg-[#EEF8F8]/80 backdrop-blur-xl py-1.5 sm:py-2 flex items-center justify-center cursor-default select-none relative z-40">
      <div className="mx-auto max-w-[1276px] w-full">
        <div className="flex items-center justify-start gap-10 overflow-x-auto overflow-y-visible px-6 scrollbar-hide sm:justify-center sm:px-8 lg:overflow-visible">
          {links.map((link) => {
            return (
              <ServiceSubNavItem key={link.label} item={link} />
            );
          })}
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

const Brand = () => {
  return (
    <a href={SITE_URLS.web} className="flex flex-shrink-0 items-center gap-1.5 transition-opacity hover:opacity-90 sm:gap-2.5 lg:gap-2 xl:gap-3">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#20A9AD_0%,#1A8B8F_100%)] text-[16px] font-black leading-7 tracking-[-0.05em] text-white shadow-[0_10px_15px_rgba(0,0,0,0.10),0_4px_6px_rgba(0,0,0,0.10)] sm:h-11 sm:w-11 sm:text-[20px] lg:h-10 lg:w-10 xl:h-12 xl:w-12">
        C
      </div>
      <div className="min-w-0">
        <div className="text-[15px] font-black leading-6 tracking-[-0.025em] text-[#0E1B33] sm:text-[20px] sm:leading-7 lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7">
          CASTOR
        </div>
        <div className="hidden truncate text-[7.5px] font-bold uppercase leading-[10px] tracking-[0.14em] text-[rgba(32,169,173,0.7)] sm:block sm:text-[9px] sm:tracking-[0.2em] lg:text-[8px] lg:tracking-[0.14em] xl:text-[10px] xl:tracking-[0.2em]">
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
