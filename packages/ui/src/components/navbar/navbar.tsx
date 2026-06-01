"use client";

import { Inter } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { HelpMeChooseModal } from "../help-me-choose-modal/HelpMeChooseModal";
import { type ServiceContext } from "./types";
import { navItems } from "./nav-data";
import { MenuIcon } from "./navbar-utils";
import { ServiceSubNav } from "./service-sub-nav";
import {
  TopBar,
  Brand,
  DesktopNavItem,
  MobileNavItem,
  HelpMeChooseButton
} from "./navbar-components";

const inter = Inter({ subsets: ["latin"] });
const HELP_MODAL_SESSION_STORAGE_KEY = "castor-help-modal-session-handled";

export const Navbar = ({ serviceContext }: { serviceContext?: ServiceContext }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const hasAutoOpenedHelpModal = useRef(false);
  const [shouldAutoOpenForSession, setShouldAutoOpenForSession] = useState(false);
  const pathname = usePathname();

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
          <div className="flex min-h-[56px] items-center justify-between gap-1.5 sm:gap-3 lg:h-20 lg:gap-8">
            <Brand />

            <div className="hidden flex-1 items-center justify-end lg:flex">
              <div className="flex h-9 items-center gap-1 xl:gap-2">
                {navItems.map((item) => (
                  <DesktopNavItem key={item.label} item={item} pathname={pathname} serviceContext={serviceContext} />
                ))}
              </div>
            </div>

            <div className="hidden items-center pl-4 lg:flex lg:flex-shrink-0">
              <HelpMeChooseButton className="flex" onClick={openHelpModal} />
            </div>

            <div className="flex items-center gap-1.5 lg:hidden">
              <HelpMeChooseButton className="hidden min-[350px]:flex" onClick={openHelpModal} />
              <button
                aria-expanded={isMobileOpen}
                aria-controls="mobile-navigation-menu"
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
            <nav id="mobile-navigation-menu" className="border-t border-[#edf0f4] pt-3 lg:hidden" aria-label="Mobile navigation">
              <div className="space-y-1 pb-1">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    pathname={pathname}
                    serviceContext={serviceContext}
                    isOpen={openMobileSection === item.label}
                    onToggle={() =>
                      setOpenMobileSection((current) => (current === item.label ? null : item.label))
                    }
                  />
                ))}
              </div>
            </nav>
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