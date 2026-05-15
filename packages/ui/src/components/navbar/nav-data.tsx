import React from "react";
import { SITE_URLS } from "../../config/site-urls";
import { type DropdownEntry, type NavEntry, type ServiceNavLink, type ServiceContext } from "./types";

export const getCareItems: DropdownEntry[] = [
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
  {
    title: "Healthcare Staffing",
    description: "Professional staffing for facilities",
    href: `${SITE_URLS.services}/healthcare-staffing`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21V7" />
        <path d="M5 21V11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10" />
        <path d="M9 21v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
  {
    title: "Pediatric Nursing",
    description: "Specialized care for children",
    href: `${SITE_URLS.services}/pediatric-nursing`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h.01" />
        <path d="M15 12h.01" />
        <path d="M10 16c.5 1 1.5 1 2 1s1.5 0 2-1" />
        <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 1 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 1 1 0-3.6A9 9 0 0 1 5 6.3" />
        <path d="M12 2v2" />
      </svg>
    ),
  },
];

export const medicalSuppliesItems: DropdownEntry[] = [
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

export const healthInstituteItems: DropdownEntry[] = [
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

export const navItems: NavEntry[] = [
  { label: "Get Care", href: SITE_URLS.services, desktopWidth: "lg:w-[88px] xl:w-[106px]" },
  { label: "Medical Supplies", href: SITE_URLS.ecommerce, desktopWidth: "lg:w-[150px] xl:w-[170px]" },
  { label: "Health Institute", href: SITE_URLS.institute, desktopWidth: "lg:w-[150px] xl:w-[170px]" },
  { label: "Transportation", href: SITE_URLS.transport, desktopWidth: "lg:w-[124px] xl:w-[140px]" },
  { label: "About Us", href: `${SITE_URLS.web}/about-us`, desktopWidth: "lg:w-[62px] xl:w-[72px]" },
  { label: "Careers", href: `${SITE_URLS.web}/careers`, desktopWidth: "lg:w-[70px] xl:w-[81px]" },
  { label: "Contact", href: `${SITE_URLS.web}/contact`, desktopWidth: "lg:w-[72px] xl:w-[83px]" },
];

export const SERVICE_NAV_LINKS: Record<Exclude<ServiceContext, "web">, ServiceNavLink[]> = {
  services: [
    { label: "Home", href: SITE_URLS.services },
    { label: "Services", href: SITE_URLS.services, dropdownItems: getCareItems },
    { label: "Counties", href: `${SITE_URLS.services}/counties` },
    { label: "About Us", href: `${SITE_URLS.services}/about-us` }
  ],
  institute: [
    { label: "Home", href: SITE_URLS.institute },
    { label: "About Us", href: `${SITE_URLS.institute}/about-us` },
    {
      label: "Courses", href: `${SITE_URLS.institute}`, dropdownItems: [
        {
          title: "Courses Offered",
          description: "Browse our training programs",
          href: `${SITE_URLS.institute}`,
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          ),
          subItems: [
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
              title: "Dual Enrollment",
              description: "High school college credit program",
              href: `${SITE_URLS.institute}/courses/dual-enrollment`,
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
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
            },
          ],
        },
        {
          title: "Course Schedules",
          description: "View class timetables",
          href: `${SITE_URLS.institute}/course-schedules`,
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          ),
        },
      ]
    },
    { label: "FAQ", href: `${SITE_URLS.institute}/faq` },
    { label: "Contact Us", href: `${SITE_URLS.institute}/contact` },
    { label: "Enroll Now", href: `${SITE_URLS.institute}/enroll-now` },
  ],
  transport: [
    { label: "Home", href: SITE_URLS.transport },
    { label: "About Us", href: `${SITE_URLS.transport}/about-us` },
    { label: "Services", href: `${SITE_URLS.transport}/services` },
    { label: "Reservation", href: `${SITE_URLS.transport}/reservation` },
    { label: "Free Estimate", href: `${SITE_URLS.transport}/free-estimate` },
    { label: "Contact Us", href: `${SITE_URLS.transport}/contact` },
  ],
  ecommerce: [
    { label: "Home", href: SITE_URLS.ecommerce },
    { label: "Products", href: `${SITE_URLS.ecommerce}/products` },
    { label: "Rentals", href: `${SITE_URLS.ecommerce}/rentals` },
    { label: "About us", href: `${SITE_URLS.ecommerce}/about-us` },
    { label: "Contact Us", href: `${SITE_URLS.ecommerce}/contact` },
  ],
};
