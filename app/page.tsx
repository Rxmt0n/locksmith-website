'use client';

import React, { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNumber = "(778) 858-6166";
  const telLink = "tel:7788586166";

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  const serviceCities = [
    "Vancouver",
    "Coquitlam",
    "Port Moody",
    "West Vancouver",
    "Burnaby",
    "New Westminster",
    "Surrey",
    "White Rock",
    "Abbotsford"
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Sticky Header Group */}
      <div className="sticky top-0 z-50">
        {/* 1. Emergency Top Bar */}
        <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs sm:text-sm font-bold tracking-wide shadow-sm">
           24/7 Emergency Locksmith Service &mdash; Fast Mobile Dispatch
        </div>

        {/* 2. Navigation Header */}
        <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl" aria-hidden="true">🔑</span>
              <span className="font-black text-xl tracking-tight text-slate-900">
                MyLocksmith<span className="text-blue-600">Services</span>
              </span>
            </div>
            
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-700">
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#service-areas" className="hover:text-blue-600 transition-colors">Service Areas</a>
              <a href="#products" className="hover:text-blue-600 transition-colors">Products & Hardware</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            {/* Desktop & Mobile Header CTAs */}
            <div className="flex items-center space-x-3">
              <a
                href={telLink}
                className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                Call {phoneNumber}
              </a>

              {/* Hamburger Button (Mobile Only) */}
              <button
                type="button"
                onClick={toggleMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* 3. Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4 font-semibold text-base text-slate-800">
              <a href="#services" onClick={closeMenu} className="hover:text-blue-600 transition-colors py-1">
                Services
              </a>
              <a href="#service-areas" onClick={closeMenu} className="hover:text-blue-600 transition-colors py-1">
                Service Areas
              </a>
              <a href="#products" onClick={closeMenu} className="hover:text-blue-600 transition-colors py-1">
                Products & Hardware
              </a>
              <a href="#contact" onClick={closeMenu} className="hover:text-blue-600 transition-colors py-1">
                Contact
              </a>
            </nav>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={telLink}
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base py-3 rounded-xl shadow-md transition"
              >
                 Emergency Call: {phoneNumber}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 border-b border-slate-200 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-bold text-blue-900 mb-6">
            <span>🛡️ Vancouver & Lower Mainland's Trusted Locksmith</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight">
            Fast, Reliable & Licensed Locksmith Services
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Locked out of your home or car? Need high-security locks installed? We provide 24/7 mobile dispatch across Greater Vancouver.
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={telLink}
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[52px] bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition transform hover:-translate-y-0.5 text-center"
            >
               Call Dispatch ({phoneNumber})
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[52px] bg-white hover:bg-slate-100 text-slate-900 font-bold text-lg px-8 py-4 rounded-xl border border-slate-300 shadow-sm transition text-center"
            >
              Get Free Quote
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200 text-slate-700 text-sm font-semibold">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><strong className="block text-2xl text-blue-600 font-black">24/7</strong> Emergency Mobile</div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><strong className="block text-2xl text-blue-600 font-black">15-30 Min</strong> Avg. Arrival</div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><strong className="block text-2xl text-blue-600 font-black">Licensed</strong> & Insured</div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><strong className="block text-2xl text-blue-600 font-black">Upfront</strong> Clear Pricing</div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Professional Services</h2>
          <p className="text-slate-600 mt-2 text-sm">Residential, Commercial, and Automotive Locksmithing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">🏠</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Residential Locksmith</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              House lockouts, deadbolt installations, lock rekeying, high-security cylinder replacements, and smart lock setup.
            </p>
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">Emergency Response Ready</span>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">🚗</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Automotive Services</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Car door lockouts, key fob programming, transponder key duplication, and broken ignition key extraction.
            </p>
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">All Makes & Models</span>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">🏢</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Commercial Security</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Master key systems, commercial panic bars, electronic keypads, heavy-duty deadbolts, and office lockouts.
            </p>
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">Commercial Grade Hardware</span>
          </div>
        </div>
      </section>

      {/* Service Areas Section (NEW) */}
      <section id="service-areas" className="bg-slate-100 py-20 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Service Areas</h2>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              Proudly serving Vancouver and surrounding Lower Mainland communities with reliable residential, automotive, and commercial locksmith services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* List of Cities */}
            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-red-500">📍</span> Lower Mainland Coverage
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
                {serviceCities.map((city, index) => (
                  <div key={index} className="flex items-center space-x-2 py-1.5 px-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-emerald-600">✓</span>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                 Don't see your neighborhood? Call dispatch to check our current mobile unit availability.
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-7 h-[380px] rounded-2xl overflow-hidden border border-slate-300 shadow-sm relative">
              <iframe
                title="Service Area Map - Lower Mainland"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166655.30827289658!2d-123.24599385!3d49.2577143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94d3d%3A0x8a230f3408a04870!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Storefront */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Security Hardware Store</h2>
            <p className="text-slate-600 mt-2 text-sm">Direct purchase with instant checkout integration</p>
          </div>
          <span className="text-xs bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1 rounded-full mt-4 md:mt-0 font-medium">
             Powered by Stripe Payments
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
            <div>
              <div className="bg-slate-100 h-40 rounded-xl mb-4 flex items-center justify-center text-4xl">
                🔒
              </div>
              <h3 className="text-lg font-bold text-slate-900">Commercial Grade Deadbolt</h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                Grade 1 heavy-duty solid brass single cylinder deadbolt with anti-pick pins.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-extrabold text-blue-600">$49.99</span>
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black px-4 py-2.5 rounded-lg transition">
                Buy Direct
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
            <div>
              <div className="bg-slate-100 h-40 rounded-xl mb-4 flex items-center justify-center text-4xl">
                ⌨️
              </div>
              <h3 className="text-lg font-bold text-slate-900">Touchscreen Smart Deadbolt</h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                Keyless entry keypad with auto-lock timer, guest codes, and anti-peep technology.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-extrabold text-blue-600">$129.99</span>
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black px-4 py-2.5 rounded-lg transition">
                Buy Direct
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
            <div>
              <div className="bg-slate-100 h-40 rounded-xl mb-4 flex items-center justify-center text-4xl">
                🔑
              </div>
              <h3 className="text-lg font-bold text-slate-900">Universal Key Fob Replacement</h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                Programmable keyless remote fob compatible with most major vehicle brands.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-extrabold text-blue-600">$34.99</span>
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black px-4 py-2.5 rounded-lg transition">
                Buy Direct
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Quote Request Form */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 shadow-sm">
          <div className="text-center max-w-md mx-auto mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Request a Free Locksmith Quote</h2>
            <p className="text-slate-600 text-xs mt-2">Need non-emergency service? Fill out the form and we'll reply within 15 minutes.</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(778) 858-6166"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-slate-700 mb-1">Service Needed</label>
              <select
                id="service"
                name="service"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-blue-600 focus:bg-white transition"
              >
                <option value="residential">Residential Lockout / Rekey</option>
                <option value="automotive">Automotive / Car Key Duplication</option>
                <option value="commercial">Commercial Lock Installation</option>
                <option value="hardware">Hardware Order Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block text-xs font-semibold text-slate-700 mb-1">Details / Location</label>
              <textarea
                id="details"
                name="details"
                rows={3}
                placeholder="Describe your issue or specify hardware specs..."
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition"
              />
            </div>

            <button
              type="submit"
              className="w-full min-h-[48px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-lg transition shadow-md"
            >
              Submit Service Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-slate-500 text-xs">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 MyLocksmithServices. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Licensing Info</a>
          </div>
        </div>
      </footer>

    </main>
  );
}