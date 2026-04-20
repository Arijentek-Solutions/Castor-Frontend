"use client";

import { useMemo } from "react";
import { PRODUCTS } from "@/lib/products/products";
import { ProductCard } from "./product-card";
import type { Product } from "@/types/product";

interface RelatedCardsProps {
    currentProduct: Product;
    maxItems?: number;
}

export function RelatedCards({ currentProduct, maxItems = 4 }: RelatedCardsProps) {
    const relatedProducts = useMemo(() => {
        return PRODUCTS
            .filter(
                (p) =>
                    p.category === currentProduct.category &&
                    p.slug !== currentProduct.slug
            )
            .slice(0, maxItems);
    }, [currentProduct.category, currentProduct.slug, maxItems]);

    if (relatedProducts.length === 0) return null;

    return (
        <section className="mt-16">
            <h2 className="mb-8 text-[24px] font-black tracking-[-0.24px] text-[#0e1b33]">
                Related Products
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2 xl:grid-cols-4">
                {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
