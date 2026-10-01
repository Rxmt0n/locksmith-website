import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* 1. Emergency Top Bar */}
      <div className="bg-amber-500 text-slate-950 px-4 py-2 text-center text-sm font-bold tracking-wide sticky top-0 z-50 shadow-md">
        ⚡ 24/7 Emergency Locksmith Service
      </div>

      {/* 2. Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-[36px] z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔑</span>
            <span className="font-extrabold text-xl tracking-tight text-white">
              Apex<span className="text-amber-500">Locksmith</span>
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition">Services</a>
            <a href="#products" className="hover:text-amber-400 transition">Products & Hardware</a>
            <a href="#about" className="hover:text-amber-400 transition">About</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </nav>
          <a
            href="tel:1234567890"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-4 py-2 rounded-lg transition shadow-sm"
          >
            Call (778) 858-6166
          </a>
        </div>
      </header>

      {/* 3. Hero Section (Conversion Focused) */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-400 mb-6">
          <span>Shielding Your Home, Car & Business</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Fast, Reliable & Licensed Locksmith Services
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Locked out of your home or car? Need high-security hardware installed? We provide 24/7 mobile locksmith dispatch and verified security products.
        </p>

        {/* Primary Call to Action */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:1234567890"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-lg px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition transform hover:-translate-y-0.5"
          >
            📞 Call Dispatch Now
          </a>
          <a
            href="#products"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg px-8 py-4 rounded-xl border border-slate-800 transition"
          >
            Shop Hardware Store
          </a>
        </div>

        {/* Quick Stats Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-900 text-slate-400 text-sm font-medium">
          <div><strong className="block text-xl text-white font-bold">15-20 Min</strong> Avg Arrival Time</div>
          <div><strong className="block text-xl text-white font-bold">24/7</strong> Emergency Mobile</div>
          <div><strong className="block text-xl text-white font-bold">Licensed</strong> & Insured</div>
        </div>
      </section>

      {/* 4. Core Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Our Professional Services</h2>
          <p className="text-slate-400 mt-2 text-sm">Residential, Commercial, and Automotive Locksmithing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800/80 hover:border-amber-500/50 transition">
            <div className="text-3xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-white mb-2">Residential Locksmith</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              House lockouts, deadbolt installations, lock rekeying, high-security cylinder replacements, and smart lock setup.
            </p>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Emergency Response Ready</span>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800/80 hover:border-amber-500/50 transition">
            <div className="text-3xl mb-4">🚗</div>
            <h3 className="text-xl font-bold text-white mb-2">Automotive Services</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Car door lockouts, key fob programming, transponder key duplication, and broken ignition key extraction.
            </p>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">All Makes & Models</span>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800/80 hover:border-amber-500/50 transition">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-white mb-2">Commercial Security</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Master key systems, commercial panic bars, electronic keypads, heavy-duty deadbolts, and office lockouts.
            </p>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Commercial Grade Hardware</span>
          </div>
        </div>
      </section>

      {/* 5. Products Storefront (E-Commerce Section) */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Security Hardware Store</h2>
            <p className="text-slate-400 mt-2 text-sm">Direct purchase with instant Stripe checkout integration</p>
          </div>
          <span className="text-xs bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 rounded-full mt-4 md:mt-0">
            🔒 Powered by Stripe Payments
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Product 1 */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="bg-slate-950 h-40 rounded-xl mb-4 flex items-center justify-center text-4xl">
                🔒
              </div>
              <h3 className="text-lg font-bold text-white">Commercial Grade Deadbolt</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Grade 1 heavy-duty solid brass single cylinder deadbolt with anti-pick pins.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
              <span className="text-xl font-extrabold text-amber-400">$49.99</span>
              <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold px-4 py-2 rounded-lg transition">
                Buy Direct
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="bg-slate-950 h-40 rounded-xl mb-4 flex items-center justify-center text-4xl">
                ⌨️
              </div>
              <h3 className="text-lg font-bold text-white">Touchscreen Smart Deadbolt</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Keyless entry keypad with auto-lock timer, guest codes, and anti-peep technology.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
              <span className="text-xl font-extrabold text-amber-400">$129.99</span>
              <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold px-4 py-2 rounded-lg transition">
                Buy Direct
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="bg-slate-950 h-40 rounded-xl mb-4 flex items-center justify-center text-4xl">
                🔑
              </div>
              <h3 className="text-lg font-bold text-white">Universal Key Fob Replacement</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Programmable keyless remote fob compatible with most major vehicle brands.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
              <span className="text-xl font-extrabold text-amber-400">$34.99</span>
              <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold px-4 py-2 rounded-lg transition">
                Buy Direct
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Contact & Quote Request Form */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="text-center max-w-md mx-auto mb-8">
            <h2 className="text-2xl font-bold text-white">Request a Free Locksmith Quote</h2>
            <p className="text-slate-400 text-xs mt-2">Need non-emergency service? Fill out the form and we'll reply within 15 minutes.</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Service Needed</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-amber-500 transition">
                <option>Residential Lockout / Rekey</option>
                <option>Automotive / Car Key Duplication</option>
                <option>Commercial Lock Installation</option>
                <option>Hardware Order Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Details / Location</label>
              <textarea
                rows={3}
                placeholder="Describe your issue or specify hardware specs..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition"
              />
            </div>

            <button
              type="button"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm py-3 rounded-lg transition"
            >
              Submit Service Request
            </button>
          </form>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-slate-500 text-xs">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Apex Locksmith Services. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition">Licensing Info</a>
          </div>
        </div>
      </footer>

    </main>
  );
}