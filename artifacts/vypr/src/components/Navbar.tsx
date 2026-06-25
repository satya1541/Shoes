import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "SHOP", href: "/shop" },
  { label: "ABOUT", href: "/about" },
  { label: "DROP", href: "/drop" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-16 ${
          isHome
            ? "mix-blend-multiply bg-transparent"
            : "bg-[#0D0D0D] border-b border-[#1A1A1A]"
        }`}
      >
        <Link href="/" data-testid="link-logo">
          <span className="font-display text-3xl text-white tracking-widest cursor-pointer hover:text-primary transition-colors">
            VYPR
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
              <span
                className={`font-display text-sm tracking-widest cursor-pointer transition-colors ${
                  location === link.href
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/shop" data-testid="link-bag">
            <ShoppingBag className="w-5 h-5 text-white hover:text-primary transition-colors cursor-pointer" />
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          data-testid="button-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col items-center justify-center gap-10"
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="font-display text-5xl text-white hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
