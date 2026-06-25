import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PRODUCTS } from "@/data/products";
import Footer from "@/components/Footer";

const PERKS = [
  "48-hour early access before the public",
  "Exclusive colourways never available in the main store",
  "Free express shipping on every drop order",
  "Priority customer support line",
];

export default function Drop() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const featured = PRODUCTS.find((p) => p.tag === "LIMITED") || PRODUCTS[0];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-16">
      {/* Hero split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left — product teaser */}
        <div className="relative bg-[#0A0A0A] flex items-center justify-center p-16 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#1A1A1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,230,0,0.06)_0%,transparent_70%)]" />
          <motion.img
            src={featured.img}
            alt={featured.name}
            className="w-full max-w-sm object-contain relative z-10"
            style={{ filter: "drop-shadow(0 30px 80px rgba(255,230,0,0.3))" }}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute bottom-10 left-10">
            <span className="bg-primary text-black font-display text-xs px-3 py-1 mb-3 inline-block">
              LIMITED DROP
            </span>
            <p className="font-display text-3xl text-white">{featured.name}</p>
            <p className="text-[#555] text-sm mt-1">{featured.price} · Limited to 500 pairs</p>
          </div>
        </div>

        {/* Right — signup */}
        <div className="flex flex-col justify-center px-12 md:px-16 py-20">
          <p className="text-[#555] text-sm tracking-widest uppercase font-bold mb-4">
            Exclusive Access
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white leading-none mb-6">
            JOIN
            <br />
            THE DROP.
          </h1>
          <p className="text-[#888] text-base leading-relaxed mb-10 max-w-sm">
            500 pairs. One release window. Drop members get first pick — before
            anyone else even sees it.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-primary p-8 flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-display text-3xl text-white">YOU'RE IN.</h3>
                <p className="text-[#888] text-sm">
                  We'll email you at{" "}
                  <span className="text-white font-medium">{email}</span> the
                  moment the drop goes live.
                </p>
                <Link href="/shop">
                  <button className="bg-primary text-black font-display px-6 py-3 hover:bg-white transition-colors mt-2">
                    BROWSE THE COLLECTION
                  </button>
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    data-testid="input-drop-email"
                    className="w-full bg-[#111] border border-[#2A2A2A] px-6 py-4 text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-[#444]"
                  />
                  {error && (
                    <p className="text-red-500 text-xs mt-2 font-medium">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  data-testid="button-drop-submit"
                  className="bg-primary text-black font-display text-lg px-8 py-4 flex items-center justify-between hover:bg-white transition-colors"
                >
                  NOTIFY ME <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-[#444] text-xs">
                  No spam. Unsubscribe any time. One email per drop.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Perks */}
      <div className="px-12 md:px-24 py-20 border-t border-[#1A1A1A]">
        <h2 className="font-display text-4xl text-white mb-12">DROP MEMBER PERKS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PERKS.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-[#2A2A2A] pt-6"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mb-4">
                <Check className="w-4 h-4 text-black" />
              </div>
              <p className="text-[#888] text-sm leading-relaxed">{perk}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Past drops */}
      <div className="px-12 md:px-24 py-16 border-t border-[#1A1A1A]">
        <h2 className="font-display text-4xl text-white mb-12">PAST DROPS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 3).map((p, i) => (
            <div key={p.id} className="relative border border-[#1A1A1A] bg-[#111] p-6 opacity-60">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl text-[#333] rotate-[-20deg]">SOLD OUT</span>
              </div>
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-32 object-contain mb-4 grayscale"
              />
              <h3 className="font-display text-xl text-[#555]">{p.name}</h3>
              <p className="text-[#333] text-sm mt-1">Drop {i + 1} · 2025</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
