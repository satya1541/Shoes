import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import Footer from "@/components/Footer";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"default" | "asc" | "desc">("default");

  const filtered = PRODUCTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "asc") return a.priceNum - b.priceNum;
    if (sortBy === "desc") return b.priceNum - a.priceNum;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-16">
      {/* Hero banner */}
      <div className="relative h-48 md:h-64 flex items-end pb-10 px-12 md:px-24 bg-[#111] border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,230,0,0.08)_0%,transparent_60%)]" />
        <div>
          <p className="text-[#555] text-sm tracking-widest uppercase mb-2 font-bold">
            Season 01
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white leading-none">
            THE COLLECTION
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-[#0D0D0D] border-b border-[#1A1A1A] px-12 md:px-24 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              data-testid={`filter-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`font-display text-sm px-5 py-2 border transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-black border-primary"
                  : "text-[#888] border-[#2A2A2A] hover:border-white hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 text-[#555]">
          <SlidersHorizontal className="w-4 h-4" />
          <select
            data-testid="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="bg-transparent text-sm font-display tracking-wider border border-[#2A2A2A] px-3 py-1 text-[#888] focus:outline-none focus:border-white"
          >
            <option value="default">SORT: FEATURED</option>
            <option value="asc">PRICE: LOW → HIGH</option>
            <option value="desc">PRICE: HIGH → LOW</option>
          </select>
        </div>
      </div>

      {/* Product grid */}
      <div className="px-12 md:px-24 py-16">
        <p className="text-[#555] text-sm mb-10 font-bold tracking-widest">
          {sorted.length} STYLES
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-testid={`card-product-${product.id}`}
              className="group bg-[#111] border border-[#1A1A1A] flex flex-col cursor-pointer hover:border-[#333] transition-colors"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative h-64 flex items-center justify-center overflow-hidden bg-[#0A0A0A] p-8">
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-primary text-black font-display text-xs px-3 py-1">
                      {product.tag}
                    </span>
                  )}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.6))" }}
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[#555] text-xs font-bold tracking-widest uppercase mb-1">
                  {product.category}
                </span>
                <h3 className="font-display text-2xl text-white mb-1">{product.name}</h3>
                <p className="text-[#888] text-sm mb-4 flex-1">{product.tagline}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-display text-xl text-white">{product.price}</span>
                  <Link href={`/product/${product.id}`}>
                    <button
                      data-testid={`button-shop-${product.id}`}
                      className="flex items-center gap-2 bg-primary text-black font-display text-sm px-6 py-3 hover:bg-white transition-colors"
                    >
                      VIEW <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
