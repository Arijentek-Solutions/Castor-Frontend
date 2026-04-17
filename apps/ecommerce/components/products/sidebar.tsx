"use client";

import { Filter } from "lucide-react";

import { NeedHelpCard } from "./need-help-card";

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Sidebar({
  categories,
  selectedCategory,
  onCategoryChange,
}: SidebarProps) {
  return (
    <aside className="w-full">
      {/* Categories Card */}
      <div className="rounded-[32px] border-2 border-[#20a9ad]/10 bg-white/80 p-5 shadow-sm backdrop-blur-md">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f9fa] text-[#20a9ad]">
            <Filter size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-[18px] font-black tracking-tight text-[#0e1b33]">Categories</h2>
        </div>

        <div className="flex flex-col gap-2">
          {["All", ...categories].map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`flex h-12 w-full items-center rounded-full px-6 text-left text-[14px] font-bold transition-all duration-300 ${isActive
                  ? "bg-[#20a9ad] text-white shadow-lg shadow-[#20a9ad]/20"
                  : "text-[#6a6a67] hover:bg-[#20a9ad]/5 hover:text-[#20a9ad]"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Need Help Card */}
      <div className="mt-6">
        <NeedHelpCard />
      </div>
    </aside>
  );
}
