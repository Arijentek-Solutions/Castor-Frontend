"use client";

import Link from "next/link";

export interface NotFoundProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function NotFound({
  title = "Page Not Found",
  description = "The page you are looking for does not exist or has been moved.",
  primaryButtonText = "Go to Homepage",
  primaryButtonHref = "/",
  secondaryButtonText = "Contact Support",
  secondaryButtonHref = "/contact",
}: NotFoundProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mx-auto max-w-lg">
        <h1 className="text-[120px] font-black leading-none text-[#0e1b33] sm:text-[160px]">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#0e1b33] sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-[#6a6a67]">{description}</p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={primaryButtonHref}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#20a9ad] px-8 text-sm font-bold text-white shadow-lg shadow-[#20a9ad]/20 transition-colors hover:bg-[#1b8e91]"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonHref}
            className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[#edf0f4] px-8 text-sm font-bold text-[#0e1b33] transition-colors hover:bg-[#f7f9fb]"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
