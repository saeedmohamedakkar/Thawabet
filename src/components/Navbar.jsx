import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icons'

const useScroll = (threshold = 24) => {
  const [v, setV] = useState(false)
  useEffect(() => {
    const o = () => setV(window.scrollY > threshold)
    o()
    window.addEventListener('scroll', o, { passive: true })
    return () => window.removeEventListener('scroll', o)
  }, [threshold])
  return v
}

export default function Navbar() {
  const scrolled = useScroll(24)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { id: 'home',     ar: 'الرئيسية',   href: '/' },
    { id: 'products', ar: 'منتجاتنا',   href: '/products' },
    { id: 'services', ar: 'الخدمات',    href: '/services' },
    { id: 'projects', ar: 'المشاريع',   href: '/projects' },
    { id: 'about',    ar: 'عن الشركة',  href: '/about' },
    { id: 'contact',  ar: 'تواصل',      href: '/contact' },
  ]

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link className="nav-brand" to="/" aria-label="Thawabet home">
          <img className="brandmark" loading="lazy" src="/assets/Thawabet-Logo-Wordmark.png" alt="ثوابت الإنشاء — Thawabet" />
        </Link>

        <div className="nav-links" role="navigation">
          {links.map((l) => (
            <Link key={l.id} to={l.href} className={isActive(l.href) ? 'active' : ''}>
              {l.ar}
            </Link>
          ))}
        </div>

        <div className="nav-cta">
          <Link className="btn btn-primary btn-sm nav-quote" to="/contact">
            <span>احصل على مقايسة</span>
            <Icon.ArrowLeft className="arrow" width="14" height="14" />
          </Link>
          <button className="icon-btn nav-burger" aria-label="القائمة" onClick={() => setOpen(true)}>
            <Icon.Menu />
          </button>
        </div>
      </nav>

      <div className={`mobilenav ${open ? 'open' : ''}`} aria-hidden={!open} aria-modal="true">
        <div className="mobilenav-head">
          <img className="brandmark" loading="lazy" src="/assets/Thawabet-Logo-Wordmark.png" alt="ثوابت الإنشاء" />
          <button className="icon-btn" aria-label="إغلاق" onClick={() => setOpen(false)}>
            <Icon.Close />
          </button>
        </div>
        <div className="mobilenav-links">
          {links.map((l, i) => (
            <Link key={l.id} to={l.href} onClick={() => setOpen(false)}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <span className="t">{l.ar}</span>
              <Icon.ArrowLeft width="16" height="16" />
            </Link>
          ))}
        </div>
        <div className="mobilenav-foot">
          <Link className="btn btn-primary btn-lg" to="/contact" onClick={() => setOpen(false)}>
            <span>احصل على مقايسة</span>
            <Icon.ArrowLeft width="16" height="16" />
          </Link>
          <div className="mn-meta">
            <div><Icon.Phone width="14" height="14" /><span>+966 11 000 0000</span></div>
            <div><Icon.Mail width="14" height="14" /><span>hello@thawabet.sa</span></div>
            <div><Icon.Pin width="14" height="14" /><span>King Fahd Rd · Olaya · Riyadh</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
