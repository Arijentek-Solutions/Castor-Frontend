"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ProductCard } from "./product-card";
import { Sidebar } from "./sidebar";
import { PRODUCTS } from "@/lib/products/products";

const ITEMS_PER_PAGE = 12;

export function ProductListing() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Derive unique categories from products
    const categories = useMemo(() => {
        return Array.from(new Set(PRODUCTS.map((p) => p.category))).sort();
    }, []);

    // Filter Logic (Search + Category)
    const processedProducts = useMemo(() => {
        let filtered = PRODUCTS;

        // Search Filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (p) =>
                    p.name.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query) ||
                    p.sku.toLowerCase().includes(query)
            );
        }

        // Category Filter
        if (selectedCategory !== "All") {
            filtered = filtered.filter((p) => p.category === selectedCategory);
        }

        return filtered;
    }, [selectedCategory, searchQuery]);

    const totalPages = Math.ceil(processedProducts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = processedProducts.slice(startIndex, endIndex);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1); // Reset to first page
    };

    return {
        categories,
        selectedCategory,
        searchQuery,
        handleCategoryChange,
        handleSearchChange,
        listing: (
            <div className="mx-auto max-w-[1720px] px-6 pt-3 pb-20 sm:px-8 lg:px-12 lg:pt-4">
                <div className="flex flex-col gap-8 lg:flex-row">

                    {/* Sticky Sidebar - Desktop Only */}
                    <div className="hidden shrink-0 lg:sticky lg:top-[280px] lg:h-fit lg:w-[240px] lg:block">
                        <Sidebar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={handleCategoryChange}
                        />
                    </div>

                    {/* Product Grid Area */}
                    <div className="flex-1">
                        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
                            <div className="space-y-2 text-center md:text-left">
                                <div className="hidden items-center justify-center gap-2 text-xs font-medium text-slate-400 md:flex md:justify-start">
                                    Showing {startIndex + 1}-{Math.min(endIndex, processedProducts.length)} of {processedProducts.length} products
                                </div>
                            </div>
                        </div>

                        {/* Grid: Compact list on mobile, 4 columns on desktop */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2 xl:grid-cols-4">
                            {currentProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {processedProducts.length === 0 && (
                            <div className="flex h-64 flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-slate-100 text-slate-400">
                                <p className="text-lg font-bold">No products found in this category.</p>
                            </div>
                        )}

                        {/* Pagination Controls - Compact on mobile */}
                        {totalPages > 1 && (
                            <div className="mt-12 flex items-center justify-center gap-1.5 lg:mt-16 lg:gap-2">
                                <button
                                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition-all hover:border-[#20a9ad] hover:text-[#20a9ad] disabled:pointer-events-none disabled:opacity-30 lg:h-12 lg:w-12"
                                >
                                    <ChevronLeft size={18} className="lg:hidden" />
                                    <ChevronLeft size={20} className="hidden lg:block" />
                                </button>

                                <div className="flex items-center gap-1.5 lg:gap-2">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`h-10 w-10 rounded-xl border transition-all text-[13px] font-bold lg:h-12 lg:w-12 lg:text-[14px] ${currentPage === page
                                                ? "border-[#20a9ad] bg-[#20a9ad] text-white shadow-lg shadow-[#20a9ad]/20"
                                                : "border-slate-200 text-slate-600 hover:border-[#20a9ad] hover:text-[#20a9ad]"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition-all hover:border-[#20a9ad] hover:text-[#20a9ad] disabled:pointer-events-none disabled:opacity-30 lg:h-12 lg:w-12"
                                >
                                    <ChevronRight size={18} className="lg:hidden" />
                                    <ChevronRight size={20} className="hidden lg:block" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        ),
    };
}
