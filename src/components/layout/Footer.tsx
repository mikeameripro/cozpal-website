import Link from 'next/link';
import { siteConfig, navigation } from '@/lib/site-config';

const footerLinks = {
  product: [
    { label: '暖暖·芯 Core', href: '/solutions#core' },
    { label: '暖暖·眼 Eye', href: '/solutions#eye' },
    { label: '暖暖·护 Care', href: '/solutions#care' },
    { label: '全套方案 Full Kit', href: '/solutions#fullkit' },
  ],
  company: [
    { label: '关于我们', href: '/about' },
    { label: '技术能力', href: '/technology' },
    { label: '合作方式', href: '/partnership' },
    { label: '联系我们', href: '/contact' },
  ],
  scenarios: [
    { label: '长者关怀', href: '/scenarios#elderly' },
    { label: '儿童陪伴', href: '/scenarios#children' },
    { label: '按摩仪嵌入', href: '/scenarios#massage' },
    { label: '玩具嵌入', href: '/scenarios#toys' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white/80">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧸</span>
              <span className="font-bold text-xl text-white font-[family-name:var(--font-display)]">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {siteConfig.description}
            </p>
            <p className="text-sm text-white/40">
              {siteConfig.contact.email}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">产品模组</h3>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Scenarios */}
          <div>
            <h3 className="font-semibold text-white mb-4">应用场景</h3>
            <ul className="space-y-2.5">
              {footerLinks.scenarios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">公司</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
