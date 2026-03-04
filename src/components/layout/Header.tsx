'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
      <nav className="container-main flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🧸</span>
          <div>
            <span className="font-bold text-lg text-text-dark font-[family-name:var(--font-display)]">
              {siteConfig.name}
            </span>
            <span className="hidden sm:inline text-xs text-text-muted ml-2">
              {siteConfig.nameZh}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'text-primary bg-primary/10'
                  : 'text-text-muted hover:text-text-dark hover:bg-bg-light'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
        >
          开始合作
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-bg-light transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-primary/10 bg-white/95 backdrop-blur-md"
          >
            <div className="container-main py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-text-muted hover:text-text-dark hover:bg-bg-light'
                  )}
                >
                  <div>{item.label}</div>
                  {item.description && (
                    <div className="text-xs text-text-light mt-0.5">{item.description}</div>
                  )}
                </Link>
              ))}
              <div className="pt-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 rounded-full bg-primary text-white text-sm font-medium"
                >
                  开始合作
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
