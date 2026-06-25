import { useState } from "react";
import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Minus, Plus } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import Footer from "@/components/Footer";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(() => product?.colors[0] ?? "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center gap-6 pt-16">
        <h1 className="font-display text-6xl">NOT FOUND</h1>
        <Link href="/shop">
          <button className="bg-primary text-black font-display px-8 py-4">
            BACK TO SHOP
          </button>
        </Link>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const activeFilter = product.colorFilters?.[selectedColor] ?? `drop-shadow(0 30px 80px rgba(0,0,0,0.7))`;

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-16">
      {/* Breadcrumb */}
      <div className="px-12 md:px-24 py-6 border-b border-[#1A1A1A]">
        <Link href="/shop">
          <button
            data-testid="button-back"
            className="flex items-center gap-2 text-[#555] hover:text-white transition-colors font-display text-sm tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO SHOP
          </button>
        </Link>
      </div>

      {/* Product layout */}
      <div className="px-12 md:px-24 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] border border-[#1A1A1A] flex items-center justify-center p-12 min-h-[400px] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,230,0,0.04)_0%,transparent_70%)]" />
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedColor}
              src={product.img}
              alt={`${product.name} — ${selectedColor}`}
              className="w-full max-w-md object-contain relative z-10"
              style={{ filter: activeFilter, transition: "filter 0.4s ease" }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
              }}
            />
          </AnimatePresence>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#555] text-xs font-bold tracking-widest uppercase">
              {product.category}
            </span>
            {product.tag && (
              <span className="bg-primary text-black font-display text-xs px-3 py-1">
                {product.tag}
              </span>
            )}
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-white leading-none mb-2">
            {product.name}
          </h1>
          <p className="text-[#888] text-lg mb-6 font-medium italic">{product.tagline}</p>
          <p className="font-display text-4xl text-primary mb-8">{product.price}</p>

          <p className="text-[#888] text-sm leading-relaxed mb-10">{product.description}</p>

          {/* Colors */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <p className="font-display text-sm tracking-widest text-[#555]">COLORWAY</p>
              <span className="text-xs text-white font-bold tracking-wider">{selectedColor.toUpperCase()}</span>
            </div>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  data-testid={`button-color-${color.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setSelectedColor(color)}
                  className={`text-xs font-bold px-4 py-2 tracking-wider border transition-all ${
                    selectedColor === color
                      ? "border-primary bg-primary text-black"
                      : "border-[#2A2A2A] text-[#888] hover:border-white hover:text-white"
                  }`}
                >
                  {color.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <p className="font-display text-sm tracking-widest text-[#555]">SELECT SIZE (UK)</p>
              {!selectedSize && (
                <span className="text-xs text-[#555]">Please select a size</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  data-testid={`button-size-${size}`}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 font-display text-sm border transition-all ${
                    selectedSize === size
                      ? "bg-primary text-black border-primary"
                      : "border-[#2A2A2A] text-[#888] hover:border-white hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-[#2A2A2A]">
              <button
                data-testid="button-qty-minus"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-12 h-14 flex items-center justify-center text-[#555] hover:text-white transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-display text-lg text-white">{qty}</span>
              <button
                data-testid="button-qty-plus"
                onClick={() => setQty((q) => q + 1)}
                className="w-12 h-14 flex items-center justify-center text-[#555] hover:text-white transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              data-testid="button-add-to-cart"
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`flex-1 h-14 font-display text-lg flex items-center justify-center gap-3 transition-all ${
                added
                  ? "bg-green-500 text-white"
                  : selectedSize
                  ? "bg-primary text-black hover:bg-white"
                  : "bg-[#1A1A1A] text-[#444] cursor-not-allowed"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" /> ADDED TO BAG
                </>
              ) : (
                <>
                  ADD TO BAG <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Related products */}
      <div className="px-12 md:px-24 py-16 border-t border-[#1A1A1A]">
        <h2 className="font-display text-4xl text-white mb-12">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {related.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#111] border border-[#1A1A1A] hover:border-[#333] transition-colors"
            >
              <Link href={`/product/${p.id}`}>
                <div className="h-48 flex items-center justify-center bg-[#0A0A0A] p-6 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))" }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-white">{p.name}</h3>
                  <p className="text-primary font-display text-lg mt-1">{p.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
