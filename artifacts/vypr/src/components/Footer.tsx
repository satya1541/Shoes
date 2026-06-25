import { Link } from "wouter";

const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  Shop: [
    { label: "All Products", href: "/shop" },
    { label: "Performance", href: "/shop" },
    { label: "Lifestyle", href: "/shop" },
    { label: "New Arrivals", href: "/shop" },
  ],
  About: [
    { label: "Our Story", href: "/about" },
    { label: "Technology", href: "/about" },
    { label: "Sustainability", href: "/about" },
    { label: "Careers", href: "/about" },
  ],
  Support: [
    { label: "Sizing Guide", href: "/shop" },
    { label: "Shipping", href: "/drop" },
    { label: "Returns", href: "/drop" },
    { label: "Contact", href: "/drop" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Use", href: "/" },
    { label: "Cookie Policy", href: "/" },
    { label: "Accessibility", href: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white px-12 md:px-24 pt-20 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 border-b border-[#2A2A2A] pb-20">
        <div>
          <h2 className="font-display text-[5vw] leading-[0.85] text-white">
            ENGINEERED
            <br />
            TO FLY.
            <br />
            <span className="text-[#FFE600]">
              BUILT TO
              <br />
              DOMINATE.
            </span>
          </h2>
          <Link href="/drop">
            <button
              data-testid="footer-button-drop"
              className="mt-10 bg-[#FFE600] text-black font-display text-lg px-8 py-4 hover:bg-white transition-colors"
            >
              JOIN THE DROP &rarr;
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col}>
              <h4 className="font-display text-lg mb-6 text-white">{col}</h4>
              <ul className="space-y-3 text-[#555] text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-[#555] text-xs gap-4">
        <p>&copy; 2026 VYPR. All rights reserved. Designed by Akash.</p>
        <div className="flex gap-6">
          <span className="font-display text-xl text-white tracking-widest">VYPR</span>
        </div>
      </div>
    </footer>
  );
}
