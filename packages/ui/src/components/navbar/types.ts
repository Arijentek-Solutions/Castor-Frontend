import { type ReactNode } from "react";

export type DropdownEntry = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  subItems?: DropdownEntry[];
};

export type NavEntry = {
  label: string;
  href: string;
  desktopWidth: string;
  dropdownItems?: DropdownEntry[];
};

export type ServiceContext = "web" | "services" | "institute" | "transport" | "ecommerce";

export type ServiceNavLink = {
  label: string;
  href: string;
  dropdownItems?: DropdownEntry[];
};
