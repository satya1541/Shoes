import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";

const PILLARS = [
  {
    number: "01",
    title: "ENGINEERED PERFORMANCE",
    body: "Every component in a VYPR shoe is stress-tested to deliver measurable gains — faster energy return, better torsional rigidity, and a fit that locks in at mile one and holds at mile twenty.",
  },
  {
    number: "02",
    title: "UNCOMPROMISING DESIGN",
    body: "We don't separate performance from aesthetics. VYPR footwear is developed alongside world-class designers to ensure that what moves fast also looks the part.",
  },
  {
    number: "03",
    title: "RADICAL TRANSPARENCY",
    body: "No mystery materials. No inflated MSRPs. We publish the full cost breakdown of every shoe we make. You know exactly what you're paying for.",
  },
  {
    number: "04",
    title: "BUILT TO LAST",
    body: "Fast fashion has no place in performance footwear. VYPR uses extended-life materials and offers a two-year warranty on every pair — because your shoes should outlast your goals.",
  },
];

const STATS = [
  { value: "2020", label: "Founded" },
  { value: "48", label: "Countries shipped to" },
  { value: "500K+", label: "Pairs sold" },
  { value: "2yr", label: "Warranty on every shoe" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-16">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-end pb-16 px-12 md:px-24 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,230,0,0.07)_0%,transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#555] text-sm tracking-widest uppercase mb-4 font-bold">
            Our Story
          </p>
          <h1 className="font-display text-[8vw] md:text-[6vw] leading-none text-white">
            BUILT
            <br />
            DIFFERENT.
          </h1>
        </motion.div>
      </div>

      {/* Manifesto */}
      <div className="px-12 md:px-24 py-24 border-b border-[#1A1A1A]">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-white leading-relaxed font-medium"
          >
            VYPR was founded on a single belief: that the best performance gear
            shouldn't come with a compromise — not on speed, not on style, not on
            conscience.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-[#888] text-lg leading-relaxed"
          >
            We started in a garage in East London in 2020, obsessing over foam
            compounds and lacing geometry while the world was standing still. Three
            years later, VYPR ships to 48 countries and has become the shoe of choice
            for athletes who refuse to settle.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-[#888] text-lg leading-relaxed"
          >
            We don't follow trends. We set the pace.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-12 md:px-24 py-16 border-b border-[#1A1A1A]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-display text-5xl md:text-6xl text-primary leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-[#555] text-sm tracking-widest uppercase font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <div className="px-12 md:px-24 py-24 border-b border-[#1A1A1A]">
        <h2 className="font-display text-5xl md:text-6xl text-white mb-16">
          WHAT WE STAND FOR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-[#2A2A2A] pt-8"
            >
              <p className="font-display text-primary text-5xl mb-4">{pillar.number}</p>
              <h3 className="font-display text-2xl text-white mb-4">{pillar.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-12 md:px-24 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-display text-5xl md:text-6xl text-white">
          READY TO RUN?
        </h2>
        <div className="flex gap-4">
          <Link href="/shop">
            <button
              data-testid="about-button-shop"
              className="bg-primary text-black font-display text-lg px-10 py-4 hover:bg-white transition-colors"
            >
              SHOP NOW
            </button>
          </Link>
          <Link href="/drop">
            <button
              data-testid="about-button-drop"
              className="border border-[#2A2A2A] text-white font-display text-lg px-10 py-4 hover:border-white transition-colors"
            >
              JOIN THE DROP
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
