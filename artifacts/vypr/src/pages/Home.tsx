import { useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { PRODUCTS } from "@/data/products";
import Footer from "@/components/Footer";

import shoeVoltRunner from "@assets/generated_images/shoe-volt-runner.png";
import shoeOceanSurge from "@assets/generated_images/shoe-ocean-surge.png";
import shoeHyperice from "@assets/generated_images/shoe-hyperice.png";
import shoeCrimsonGhost from "@assets/generated_images/shoe-crimson-ghost.png";
import shoeSpeedSequence from "@assets/generated_images/shoe-speed-sequence.png";
import shoePortal from "@assets/generated_images/shoe-portal.png";

export default function Home() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Hero: tracks as the hero section scrolls OUT of view
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroBg = useTransform(
    heroScroll,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "hsl(54, 100%, 50%)",
      "hsl(275, 100%, 25%)",
      "hsl(23, 96%, 46%)",
      "hsl(174, 100%, 27%)",
      "hsl(38, 33%, 94%)",
    ]
  );

  const heroColor = useTransform(
    heroScroll,
    [0, 0.25, 0.5, 0.75, 1],
    ["#000", "#FFF", "#FFF", "#FFF", "#000"]
  );

  // Portal: tracks as the portal section scrolls through the viewport
  const portalRef = useRef<HTMLElement>(null);
  const { scrollYProgress: portalScroll } = useScroll({
    target: portalRef,
    offset: ["start end", "end start"],
  });

  const portalScale = useTransform(portalScroll, [0.1, 0.55], [0, 55]);
  const portalOpacity = useTransform(portalScroll, [0.1, 0.3, 0.75], [0, 1, 0]);
  const portalTextOpacity = useTransform(portalScroll, [0.3, 0.45, 0.75], [0, 1, 0]);
  const portalShoeOpacity = useTransform(portalScroll, [0.2, 0.38, 0.72], [0, 1, 0]);
  const portalShoeScale = useTransform(portalScroll, [0.2, 0.42], [0.4, 1]);

  // Speed sequence: tracks as the speed section scrolls through the viewport
  const speedRef = useRef<HTMLElement>(null);
  const { scrollYProgress: speedScroll } = useScroll({
    target: speedRef,
    offset: ["start end", "end start"],
  });

  const runnerX = useTransform(speedScroll, [0.15, 0.85], ["-120vw", "120vw"]);
  const flyTextOpacity = useTransform(speedScroll, [0.35, 0.5, 0.65], [0, 1, 0]);

  return (
    <div className="w-full bg-background overflow-x-hidden relative">

      {/* SECTION 1: Color-Block Hero */}
      <motion.section
        ref={heroRef}
        className="h-[100vh] w-full flex items-center justify-between px-12 md:px-24 relative overflow-hidden"
        style={{ backgroundColor: heroBg, color: heroColor }}
      >
        <div className="z-10 w-1/3">
          <h1 className="font-display text-[8vw] leading-none mb-4">VYPR</h1>
          <h2 className="text-2xl font-bold tracking-widest mb-6">VYPR - VOLT RUNNER</h2>
          <p className="text-sm font-medium opacity-80 max-w-sm leading-relaxed">
            Forged in the underground. Engineered for the skyline.
            The Volt Runner defies gravity and expectations with
            relentless energy return and unapologetic style.
          </p>
        </div>

        {/* Floating hero shoe — centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.img
            src={shoeVoltRunner}
            alt="VYPR Volt Runner"
            className="w-[42vw] object-contain"
            style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.5))" }}
            animate={{ y: [0, -18, 0], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="z-10 w-1/3 flex justify-end">
          <Link href="/shop">
            <button
              data-testid="button-discover"
              className="group flex items-center gap-4 text-4xl font-display hover:scale-105 transition-transform"
            >
              DISCOVER IT{" "}
              <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </motion.section>

      {/* SECTION 2: Portal Zoom */}
      <section
        ref={portalRef}
        className="h-[100vh] w-full bg-[#0D0D0D] relative overflow-hidden flex items-center justify-center"
      >
        <motion.div
          className="absolute rounded-full"
          style={{
            scale: portalScale,
            opacity: portalOpacity,
            width: "100px",
            height: "100px",
            background:
              "radial-gradient(circle, rgba(255,230,0,1) 0%, rgba(75,0,130,1) 50%, rgba(0,0,0,1) 100%)",
            boxShadow: "0 0 100px rgba(255,230,0,0.5)",
          }}
        />

        {/* Shoe floating inside portal */}
        <motion.img
          src={shoePortal}
          alt="Portal shoe"
          className="absolute w-[28vw] object-contain z-10"
          style={{
            opacity: portalShoeOpacity,
            scale: portalShoeScale,
            filter: "drop-shadow(0 0 60px rgba(255,230,0,0.6))",
          }}
        />

        <motion.h2
          className="font-display text-[10vw] text-white z-20 mix-blend-overlay text-center"
          style={{ opacity: portalTextOpacity }}
        >
          ENTER THE DROP
        </motion.h2>
      </section>

      {/* SECTION 3: Cinematic Spotlights */}
      <section className="w-full flex flex-col">
        {/* Panel A — Born of the Deep */}
        <div className="h-[100vh] w-full bg-[#0A1628] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-30 mix-blend-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-900 to-[#0A1628]" />
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="z-10 flex flex-col items-center gap-10"
          >
            <h2 className="font-display text-[10vw] text-white leading-none text-center">
              BORN OF THE DEEP
            </h2>
            <motion.img
              src={shoeOceanSurge}
              alt="Ocean Surge"
              className="w-[38vw] object-contain"
              style={{ filter: "drop-shadow(0 20px 60px rgba(0,150,255,0.5))" }}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Panel B — Hyperice */}
        <div className="h-[100vh] w-full bg-white relative flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="z-10 flex flex-row items-center gap-16"
          >
            <motion.img
              src={shoeHyperice}
              alt="Hyperice"
              className="w-[32vw] object-contain"
              style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.2))" }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="font-display text-[12vw] text-black leading-none tracking-tighter">
              HYPERICE
            </h2>
          </motion.div>
        </div>

        {/* Panel C — Worn to Win */}
        <div className="h-[100vh] w-full bg-[#8B0000] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,0,0,0.4)_0%,rgba(0,0,0,0.8)_100%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="z-10 flex flex-col items-center gap-10"
          >
            <motion.img
              src={shoeCrimsonGhost}
              alt="Crimson Ghost"
              className="w-[38vw] object-contain"
              style={{ filter: "drop-shadow(0 20px 80px rgba(255,0,0,0.6))" }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="font-display text-[11vw] text-white leading-none">WORN TO WIN</h2>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Speed Sequence */}
      <section
        ref={speedRef}
        className="h-[100vh] w-full bg-[#0D0D0D] relative overflow-hidden flex items-center justify-center"
      >
        <div className="noise-bg" />

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-[30vh] w-[40vh] bg-primary rounded-full blur-[100px] opacity-20"
          style={{ x: runnerX }}
        />

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center"
          style={{ x: runnerX }}
        >
          <div className="h-2 w-[30vw] bg-gradient-to-r from-transparent via-primary to-primary blur-sm" />
          <img
            src={shoeSpeedSequence}
            alt="Speed sequence shoe"
            className="w-[18vw] object-contain -rotate-6"
            style={{ filter: "drop-shadow(0 0 40px rgba(255,230,0,0.9))" }}
          />
        </motion.div>

        <motion.h2
          className="font-display text-[15vw] text-white z-10 tracking-tighter"
          style={{ opacity: flyTextOpacity }}
        >
          NOW YOU FLY
        </motion.h2>
      </section>

      {/* SECTION 5: The Collection */}
      <section className="py-32 px-12 md:px-24 bg-background">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-6xl md:text-8xl mb-20 text-foreground"
        >
          THE COLLECTION
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((item, i) => (
            <motion.div
              key={item.id}
              data-testid={`card-product-${item.id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 flex flex-col group cursor-pointer"
            >
              <div className="h-64 w-full mb-8 flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.5))" }}
                />
              </div>
              <h3 className="font-display text-3xl text-card-foreground mb-2">{item.name}</h3>
              <p className="text-muted-foreground text-xl font-medium mb-8">{item.price}</p>
              <Link href={`/product/${item.id}`}>
                <button
                  data-testid={`button-shop-${item.id}`}
                  className="mt-auto w-full py-4 bg-primary text-primary-foreground font-display text-xl flex justify-between items-center px-6 hover:bg-foreground hover:text-background transition-colors"
                >
                  <span>SHOP</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/shop">
            <button
              data-testid="button-view-all"
              className="border border-foreground text-foreground font-display text-xl px-16 py-4 hover:bg-foreground hover:text-background transition-colors"
            >
              VIEW ALL STYLES
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 6: Email Capture */}
      <section className="bg-black text-white py-32 px-12 md:px-24">
        <div className="max-w-2xl mx-auto text-center border border-[#2A2A2A] p-12 bg-[#0D0D0D]">
          <h2 className="font-display text-6xl mb-4 text-[#FFE600]">JOIN THE DROP</h2>
          <p className="text-[#555] mb-8 uppercase tracking-widest font-bold">
            Limited to 500 pairs
          </p>

          {emailSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-xl font-display text-[#FFE600]"
            >
              <Check className="w-8 h-8" />
              <span>YOU'RE ON THE LIST</span>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setEmailSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                data-testid="input-email"
                className="flex-1 bg-black border border-[#2A2A2A] px-6 py-4 text-white focus:outline-none focus:border-[#FFE600] transition-colors font-mono"
              />
              <button
                type="submit"
                data-testid="button-notify"
                className="bg-[#FFE600] text-black font-display text-xl px-10 py-4 hover:bg-white transition-colors"
              >
                NOTIFY ME &rarr;
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
