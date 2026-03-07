"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WeddingInvitation() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer
  useEffect(() => {
    // Use first main event (Rasm-e-Hina) as countdown target
    const weddingDate = new Date("2026-03-23T18:00:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
  };

  // Scroll to next section
  const scrollToContent = () => {
    const element = document.getElementById("countdown");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F5F5DC]">
      {/* Envelope Landing Page */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#F5F5DC]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E5DCC8' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div className="text-center">
              {/* Wax Seal */}
              <motion.button
                onClick={handleEnvelopeClick}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Realistic Wax Seal */}
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  {/* Main seal circle */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F0E8D8] via-[#E8DCC0] to-[#D4C4A8] shadow-2xl" 
                    style={{
                      boxShadow: "0 20px 60px rgba(0,0,0,0.3), inset 0 -5px 15px rgba(0,0,0,0.2), inset 0 5px 15px rgba(255,255,255,0.5)"
                    }}
                  />
                  
                  {/* Inner embossed circle */}
                  <div className="absolute inset-6 md:inset-8 rounded-full border-4 border-[#C4B49A]/40" 
                    style={{
                      boxShadow: "inset 0 2px 8px rgba(0,0,0,0.15)"
                    }}
                  />
                  
                  {/* Monogram */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-serif text-5xl md:text-7xl text-[#A89678] italic"
                      style={{
                        textShadow:
                          "2px 2px 4px rgba(0,0,0,0.2), -1px -1px 2px rgba(255,255,255,0.5)",
                        fontWeight: 300,
                        letterSpacing: "2px",
                      }}
                    >
                      T ♥ A
                    </span>
                  </div>
                  
                  {/* Texture overlay */}
                  <div className="absolute inset-0 rounded-full opacity-30" 
                    style={{
                      background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)"
                    }}
                  />
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
                    filter: "blur(20px)"
                  }}
                />
              </motion.button>

              {/* Envelope fold lines */}
              <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none">
                <svg className="w-full h-full opacity-10" preserveAspectRatio="none" viewBox="0 0 100 50">
                  <line x1="0" y1="50" x2="50" y2="0" stroke="#8B7355" strokeWidth="0.5"/>
                  <line x1="100" y1="50" x2="50" y2="0" stroke="#8B7355" strokeWidth="0.5"/>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none">
                <svg className="w-full h-full opacity-10" preserveAspectRatio="none" viewBox="0 0 100 50">
                  <line x1="0" y1="0" x2="50" y2="50" stroke="#8B7355" strokeWidth="0.5"/>
                  <line x1="100" y1="0" x2="50" y2="50" stroke="#8B7355" strokeWidth="0.5"/>
                </svg>
              </div>

              {/* Call-to-action under seal */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 text-center font-serif font-semibold text-sm md:text-base tracking-wider text-[#4A3A25]"
              >
                Tap to open
              </motion.p>

              {/* Bottom text (kept under seal, responsive) */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="mt-4 mx-auto max-w-md text-[#8B7355] text-xs md:text-sm font-serif italic text-center px-6"
              >
                This invitation is personal and non-transferable.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Wedding Website Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isEnvelopeOpen ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={isEnvelopeOpen ? "block" : "hidden"}
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23D4C4A8' width='1200' height='800'/%3E%3Cpath fill='%23B8A88F' d='M0 400 Q300 300 600 400 T1200 400 L1200 800 L0 800 Z' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Decorative illustrations */}
          <div className="absolute top-12 left-8 md:left-20 w-16 h-32 md:w-24 md:h-48 opacity-40">
            <svg viewBox="0 0 100 200" className="text-[#7A8448]" fill="currentColor">
              <ellipse cx="30" cy="180" rx="25" ry="15" opacity="0.6"/>
              <rect x="25" y="40" width="10" height="150" rx="5" opacity="0.7"/>
              <circle cx="30" cy="35" r="8" opacity="0.8"/>
              <path d="M20 30 Q15 20 20 15 Q25 20 20 30" opacity="0.6"/>
              <path d="M40 30 Q45 20 40 15 Q35 20 40 30" opacity="0.6"/>
            </svg>
          </div>

          <div className="absolute bottom-20 left-8 md:left-24 opacity-30">
            <svg width="80" height="80" viewBox="0 0 100 100" className="text-[#D4AF37]">
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="35" r="8" fill="currentColor" opacity="0.7"/>
              <circle cx="50" cy="65" r="8" fill="currentColor" opacity="0.7"/>
              <circle cx="35" cy="50" r="8" fill="currentColor" opacity="0.7"/>
              <circle cx="65" cy="50" r="8" fill="currentColor" opacity="0.7"/>
            </svg>
          </div>

          <div className="text-center z-10 px-4">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-[#6E7A3D] text-sm md:text-base tracking-[0.25em] uppercase mb-6"
            >
              Wedding Invitation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <p className="font-serif text-lg md:text-xl text-[#4A5228] mb-2">
                Mr &amp; Mrs <span className="italic">Sh. Yaseen</span>
              </p>
              <p className="text-[#6E7A3D] text-sm md:text-base mb-6 tracking-wide">
                cordially invite you to the wedding of their beloved son
              </p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#4A5228] mb-3 uppercase tracking-[0.15em]">
                M Talha Yaseen
              </h1>
              <div className="flex items-center justify-center gap-4 my-4">
                <div className="h-px w-16 md:w-24 bg-[#D4AF37]" />
                <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
                <div className="h-px w-16 md:w-24 bg-[#D4AF37]" />
              </div>
              <p className="font-serif text-sm md:text-base text-[#6E7A3D] italic max-w-xl mx-auto">
                With the blessings and warmest wishes of all family members.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              onClick={scrollToContent}
              className="mt-16 px-8 py-3 border-2 border-[#6E7A3D] text-[#6E7A3D] uppercase tracking-widest text-sm hover:bg-[#6E7A3D] hover:text-white transition-all duration-300"
            >
              View Wedding Details
              <div className="mt-2 flex justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12L5 7h10l-5 5z"/>
                </svg>
              </div>
            </motion.button>
          </div>
        </section>

        {/* Premium Invitation Card Layout */}
        <section className="py-16 px-4 bg-[#F5F5DC]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Outer glow / frame */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-[#6E7A3D]/20 blur-xl pointer-events-none" />

            {/* Main card */}
            <div className="relative rounded-[32px] bg-[#FFFEF8] border border-[#E3D7BF] shadow-[0_24px_80px_rgba(0,0,0,0.15)] px-6 py-8 md:px-12 md:py-12 overflow-hidden">
              {/* Corner ornaments */}
              <div className="pointer-events-none">
                <div className="absolute -top-3 -left-3 w-20 h-20 opacity-40 text-[#E3D7BF]">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0 100 Q40 60 80 0 H60 Q30 40 0 80Z" />
                  </svg>
                </div>
                <div className="absolute -top-3 -right-3 w-20 h-20 opacity-40 text-[#E3D7BF] rotate-90">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0 100 Q40 60 80 0 H60 Q30 40 0 80Z" />
                  </svg>
                </div>
                <div className="absolute -bottom-3 -left-3 w-20 h-20 opacity-40 text-[#E3D7BF] -rotate-90">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0 100 Q40 60 80 0 H60 Q30 40 0 80Z" />
                  </svg>
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 opacity-40 text-[#E3D7BF] rotate-180">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0 100 Q40 60 80 0 H60 Q30 40 0 80Z" />
                  </svg>
                </div>
              </div>

              <div className="text-center space-y-4 md:space-y-5 relative z-10">
                <p className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-[#B39A76]">
                  In the name of Allah, the Most Merciful, the Most Kind
                </p>

                <div className="flex justify-center mt-2">
                  <div className="flex items-center gap-3 text-[#D4AF37]">
                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                    <span className="text-sm md:text-base font-serif italic">
                      Wedding Card
                    </span>
                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <p className="font-serif text-base md:text-lg text-[#4A5228]">
                    Mr &amp; Mrs <span className="italic">Sh. Yaseen</span>
                  </p>
                  <p className="text-xs md:text-sm text-[#6E7A3D] tracking-wide">
                    request the honour of your presence at the wedding of their son
                  </p>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase mt-3">
                  <span className="block text-[#C19A6B]">M Talha Yaseen</span>
                  <span className="block text-xl md:text-2xl tracking-[0.35em] text-[#D4AF37] mt-1">
                    weds
                  </span>
                  <span className="block text-[#C19A6B]">Adan Riaz</span>
                </h2>

                {/* Residence */}
                <div className="mt-6 space-y-1 text-xs md:text-sm text-[#6E7A3D] leading-relaxed">
                  <p className="font-semibold uppercase tracking-[0.3em] text-[#4A5228]">
                    Residence
                  </p>
                  <p>House No. 8, W Block, Burewala</p>
                  <p>Looking forward to celebrating together with family and friends.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* RSVP & Contact Section (placed directly after wedding card) */}
        <section id="rsvp" className="py-20 px-4 bg-[#FFFEF0]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-[#4A5228] mb-4 italic">
                Looking Forward
              </h2>
              <p className="text-[#6E7A3D] text-lg">
                Your presence will add joy to our celebrations
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-[#E3D7BF]"
            >
              <div className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#4A5228]">
                    <div>
                      <p className="font-semibold">Sh. M Ahmad</p>
                      <p className="text-[#6E7A3D]">0321-6913251</p>
                    </div>
                    <div>
                      <p className="font-semibold">M. Hamza Yaseen</p>
                      <p className="text-[#6E7A3D]">0315-6124268</p>
                    </div>
                  </div>
                  <p className="font-serif text-lg text-[#4A5228]">
                    R.S.V.P &amp; Best Compliments From
                  </p>
                  <p className="text-[#6E7A3D] leading-relaxed">
                    Mr &amp; Mrs Sh. Yaseen &amp; all family members &amp; all relatives
                  </p>
                  <div className="pt-2 text-sm text-[#6E7A3D]">
                    <p>
                      <span className="font-semibold text-[#4A5228]">Contact:</span>{" "}
                      0321-6991651, 0309-0210551
                    </p>
                  </div>
                </div>
                <div className="border-l border-dashed border-[#E3D7BF] pl-6 hidden md:block">
                  <p className="font-serif text-sm text-[#4A5228] mb-2 italic">
                    Kindly respond at your earliest convenience.
                  </p>
                  <p className="text-xs text-[#6E7A3D] leading-relaxed">
                    Your prayers, love and blessings are the most precious gifts for
                    Talha and the entire family.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Countdown Section */}
        <section id="countdown" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #7A8448 0%, #8B9556 50%, #9BA665 100%)"
          }}
        >
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}
          />
          
          <div className="text-center z-10 px-4 max-w-6xl mx-auto">
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-4 italic">Countdown</h2>
            <p className="text-white/80 text-lg md:text-xl mb-16">
              To the beginning of Talha&apos;s wedding festivities
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hours" },
                { value: countdown.minutes, label: "Minutes" },
                { value: countdown.seconds, label: "Seconds" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-10 border border-white/20"
                  style={{
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)"
                  }}
                >
                  <div className="text-5xl md:text-7xl font-serif text-white mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base text-white/70 uppercase tracking-widest">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section - Rasm-e-Hina, Barat, Walima */}
        <section className="py-20 px-4 bg-[#F5F5DC]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#4A5228] mb-4 italic">
                Wedding Events
              </h2>
              <p className="text-[#6E7A3D] text-lg">
                You are warmly invited to join us on every special occasion
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              {/* Rasm-e-Hina */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-[#FFFEF0] rounded-3xl shadow-xl p-8 border border-[#E3D7BF]"
              >
                <p className="text-center text-2xl mb-4">🌿</p>
                <h3 className="font-serif text-2xl text-[#4A5228] mb-2 text-center italic">
                  Rasm-e-Hina
                </h3>
                <p className="text-center text-sm uppercase tracking-[0.25em] text-[#6E7A3D] mb-4">
                  of M Talha Yaseen
                </p>
                <div className="h-px w-16 mx-auto bg-[#D4AF37] mb-4" />
                <p className="text-[#4A5228] text-sm font-semibold mb-1 text-center">
                  Programme:
                </p>
                <p className="text-[#6E7A3D] text-sm mb-3 text-center">
                  23rd March 2026 · 7:00 PM
                </p>
                <p className="text-[#4A5228] text-sm font-semibold mb-1 text-center">
                  Venue:
                </p>
                <p className="text-[#6E7A3D] text-sm mb-4 text-center">
                  Qasr-e-Sadiq
                </p>
                <div className="mt-4 pt-4 border-t border-dashed border-[#E3D7BF] text-center">
                  <p className="font-serif text-sm text-[#4A5228] mb-1 italic">
                    Awaiting eyes
                  </p>
                  <p className="text-[#6E7A3D] text-xs leading-relaxed">
                    Ayesha, Faiqa and all bhabis and cousins
                  </p>
                </div>
              </motion.div>

              {/* Barat */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-[#FFFEF0] rounded-3xl shadow-xl p-8 border border-[#E3D7BF]"
              >
                <p className="text-center text-2xl mb-4">💍</p>
                <h3 className="font-serif text-2xl text-[#4A5228] mb-2 text-center italic">
                  Barat
                </h3>
                <p className="text-center text-sm uppercase tracking-[0.25em] text-[#6E7A3D] mb-4">
                  of M Talha Yaseen
                </p>
                <div className="h-px w-16 mx-auto bg-[#D4AF37] mb-4" />
                <p className="text-[#4A5228] text-sm font-semibold mb-1 text-center">
                  Date:
                </p>
                <p className="text-[#6E7A3D] text-sm mb-3 text-center">
                  24th March 2026
                </p>
                <div className="grid grid-cols-3 gap-3 text-sm text-[#4A5228] mb-4">
                  <div className="text-center">
                    <p className="font-semibold">Sehra Bandi</p>
                    <p className="text-[#6E7A3D]">6:00 PM</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Departure</p>
                    <p className="text-[#6E7A3D]">7:00 PM</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Venue</p>
                    <p className="text-[#6E7A3D]">Nawab Marque, Vehari</p>
                  </div>
                </div>
                <p className="text-[#4A5228] text-sm font-semibold mb-1 text-center">
                  Address:
                </p>
                <p className="text-[#6E7A3D] text-xs leading-relaxed text-center">
                  House No. 8, W Block, Burewala
                </p>
              </motion.div>

              {/* Walima */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-[#FFFEF0] rounded-3xl shadow-xl p-8 border border-[#E3D7BF]"
              >
                <p className="text-center text-2xl mb-4">✨</p>
                <h3 className="font-serif text-2xl text-[#4A5228] mb-2 text-center italic">
                  Walima
                </h3>
                <p className="text-center text-sm uppercase tracking-[0.25em] text-[#6E7A3D] mb-4">
                  of M Talha Yaseen
                </p>
                <div className="h-px w-16 mx-auto bg-[#D4AF37] mb-4" />
                <p className="text-[#4A5228] text-sm font-semibold mb-1 text-center">
                  Date:
                </p>
                <p className="text-[#6E7A3D] text-sm mb-3 text-center">
                  25th March 2026
                </p>
                <p className="text-[#4A5228] text-sm font-semibold mb-1 text-center">
                  Dinner:
                </p>
                <p className="text-[#6E7A3D] text-sm mb-3 text-center">
                  8:00 PM
                </p>
                <p className="text-[#4A5228] text-sm font-semibold mb-1 text-center">
                  Venue:
                </p>
                <p className="text-[#6E7A3D] text-sm text-center">
                  Qasr-e-Sadiq
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-[#4A5228] text-white text-center">
          <div className="mb-4 text-3xl">💚</div>
          <p className="text-lg font-serif italic mb-2">
            M Talha Yaseen
          </p>
          <p className="text-sm opacity-70">Rasm-e-Hina, Barat &amp; Walima — March 23, 24 &amp; 25, 2026</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-white/30"/>
            <div className="w-2 h-2 rotate-45 bg-white/50"/>
            <div className="h-px w-16 bg-white/30"/>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
