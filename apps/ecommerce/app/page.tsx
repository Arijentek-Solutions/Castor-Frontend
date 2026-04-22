"use client";

import { Navbar } from "@/components/navbar";
import { ProductListing } from "@/components/products/product-listing";
import { Hero } from "./hero/hero";
import { Footer } from "@castor/ui";

export default function Home() {
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
      <main className="w-full pt-[92px] sm:pt-[96px] lg:pt-[120px]">
        <Navbar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Product Catalog Layout */}
        {listing}
      </main>
      <Footer />
    </div>
  );
}
