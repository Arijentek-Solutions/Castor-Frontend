"use client";

import { Navbar } from "@/components/navbar";
import { ProductListing } from "@/components/products/product-listing";
import { Footer } from "@castor/ui";

export default function ProductsPage() {
  const {
    categories,
    selectedCategory,
    searchQuery,
    handleCategoryChange,
    handleSearchChange,
    listing,
  } = ProductListing();

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <main className="w-full pt-[140px] sm:pt-[148px] lg:pt-[172px]">
        <Navbar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        {/* Product Catalog Layout */}
        <div className="pt-8">
            {listing}
        </div>
      </main>
      <Footer />
    </div>
  );
}
