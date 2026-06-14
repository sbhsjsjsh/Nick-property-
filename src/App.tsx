import { useState } from 'react';
import { Building2, Search, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PropertyCard } from './components/PropertyCard';
import { featuredProperties, popularLocalities } from './data';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-2xl text-indigo-950 tracking-tight cursor-pointer">
                Nick Property
              </span>
            </div>

            <div className="hidden lg:flex flex-1 max-w-md ml-12">
               <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search by city, locality or project..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-100/80 border-transparent rounded-full text-sm focus:bg-white focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="#neighborhoods" className="text-gray-900 hover:text-indigo-600 transition-colors">Neighborhoods</a>
              <a href="#properties" className="text-gray-600 hover:text-indigo-600 transition-colors">Properties</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
              <div className="w-px h-5 bg-gray-200"></div>
              <a href="#contact" className="bg-indigo-950 hover:bg-indigo-900 text-white px-6 py-2.5 rounded-full transition-colors font-semibold text-sm">
                Get in Touch
              </a>
            </div>

            <button 
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-indigo-950/95 backdrop-blur-xl flex flex-col lg:hidden"
          >
            <div className="px-4 border-b border-indigo-900/50 flex justify-between items-center h-20">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/20">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="font-heading font-bold text-2xl text-white tracking-tight">
                  Nick Property
                </span>
              </div>
              <button 
                className="p-2 text-indigo-200 hover:bg-white/10 rounded-full transition-colors backdrop-blur-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 flex flex-col justify-center max-w-sm mx-auto w-full gap-8">
              {[
                { name: 'Neighborhoods', href: '#neighborhoods' },
                { name: 'Properties', href: '#properties' },
                { name: 'Contact Us', href: '#contact' }
              ].map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  className="group flex items-center justify-between gap-4 py-2"
                >
                  <span className="text-4xl sm:text-5xl font-heading font-bold text-white/50 group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 pr-4">
                    <ArrowRight className="w-8 h-8 text-indigo-400" />
                  </div>
                </motion.a>
              ))}

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-8 pt-8 border-t border-indigo-900/50"
              >
                <a 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-white text-indigo-950 py-4.5 rounded-2xl font-bold flex justify-center items-center gap-2 shadow-xl shadow-white/10 hover:bg-indigo-50 transition-colors"
                >
                  Get in Touch
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="p-6 text-center text-indigo-300/60 pb-8"
            >
              <p className="text-sm mb-1">support@nickproperty.in</p>
              <p className="text-sm">1800-XXX-XXXX</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* Updated Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Stunning Border Container */}
          <div className="relative max-w-7xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] p-[2px] overflow-hidden group shadow-2xl shadow-indigo-900/20">
            {/* Spinning Gradient Background over a dark base */}
            <div className="absolute inset-0 bg-indigo-950" />
            
            {/* Animated glowing borders */}
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_70%,#6366f1_100%)] animate-[spin_3s_linear_infinite]" />
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0%,transparent_70%,#a855f7_100%)] animate-[spin_3s_linear_infinite]" />
            
            {/* Inner Content Container */}
            <div className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 rounded-[calc(2.5rem-2px)] sm:rounded-[calc(3rem-2px)] pt-24 pb-28 sm:pt-36 sm:pb-40 px-6 text-center overflow-hidden z-10">
              {/* Ambient Orbs */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-[128px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />

              <div className="relative z-20 max-w-3xl mx-auto">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-tight mb-6"
                >
                  Find Your Premium Home in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Mumbai</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl text-indigo-100/80 mb-10"
                >
                  Exclusive property listings across South Mumbai, Western Suburbs, and the wider MMR region.
                </motion.p>
                
                {/* Clean CTA Buttons */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                   <button className="w-full sm:w-auto bg-white text-indigo-950 font-bold px-8 py-4 rounded-full hover:bg-indigo-50 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-white/10 flex items-center justify-center gap-2">
                     <Search className="w-5 h-5" />
                     Explore Properties
                   </button>
                   <button className="w-full sm:w-auto border border-indigo-300/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
                     Contact an Agent
                   </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Cities */}
        <section id="neighborhoods" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-10 mb-16 sm:mb-24">
           <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-6">Premium Neighborhoods</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                 {popularLocalities.map((locality, idx) => (
                    <motion.a 
                      href="#"
                      key={locality.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (idx * 0.05) }}
                      className="group flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-indigo-50 hover:border-indigo-100 transition-colors"
                    >
                      <MapPin className="w-6 h-6 text-indigo-400 group-hover:text-indigo-600 mb-2 transition-colors" />
                      <span className="font-semibold text-sm text-gray-700 group-hover:text-indigo-700 transition-colors text-center">
                        {locality.name}
                      </span>
                    </motion.a>
                 ))}
              </div>
           </div>
        </section>

        {/* Featured Properties */}
        <section id="properties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900">Handpicked Properties</h2>
              <p className="text-gray-500 mt-2">Discover the best value homes and luxury projects currently available.</p>
            </div>
            <a href="#" className="hidden sm:inline-flex text-indigo-600 font-semibold hover:text-indigo-700 hover:underline underline-offset-4">
              View All Properties
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, idx) => (
              <PropertyCard key={property.id} property={property} index={idx} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <a href="#" className="inline-flex items-center justify-center w-full bg-indigo-50 text-indigo-700 font-semibold py-3 rounded-xl">
              View All Properties
            </a>
          </div>
        </section>
        
      </main>

      {/* Footer with Form */}
      <footer id="contact" className="bg-indigo-950 text-indigo-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="font-heading font-bold text-xl text-white">Nick Property</span>
              </div>
              <p className="text-indigo-200/80 text-sm leading-relaxed mb-6">
                Mumbai's most trusted real estate broker. We help you find properties, verify projects, and secure your new home with complete peace of mind.
              </p>
              <ul className="space-y-2 text-sm text-indigo-200/80">
                <li>1800-XXX-XXXX (Toll Free)</li>
                <li>support@nickproperty.in</li>
                <li>Level 4, BKC, Bandra East, Mumbai</li>
              </ul>
            </div>
            
            <div className="lg:col-span-3">
              <h3 className="font-heading font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm text-indigo-200/80">
                <li><a href="#" className="hover:text-white transition-colors">Property in Bandra</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Property in South Mumbai</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Buy a Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rent a Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">List your Property</a></li>
              </ul>
            </div>

            <div className="lg:col-span-5">
              <h3 className="font-heading font-bold text-white mb-4">Request a Callback</h3>
              <form className="bg-indigo-900/50 p-6 rounded-2xl border border-indigo-800" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-indigo-950/50 border border-indigo-800 rounded-lg text-sm text-white placeholder:text-indigo-300 focus:outline-none focus:border-indigo-500 transition-colors" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 bg-indigo-950/50 border border-indigo-800 rounded-lg text-sm text-white placeholder:text-indigo-300 focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
                <textarea placeholder="I am looking for..." rows={3} className="w-full px-4 py-3 bg-indigo-950/50 border border-indigo-800 rounded-lg text-sm text-white placeholder:text-indigo-300 focus:outline-none focus:border-indigo-500 transition-colors mb-4 resize-none"></textarea>
                <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2.5 rounded-lg transition-colors">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-indigo-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-indigo-300/60">
            <p>© {new Date().getFullYear()} Nick Property Real Estate. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-indigo-200 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-200 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
