import { Link } from 'react-router-dom'
import Icon from './Icons'

export default function Footer() {
  const cols = [
    { h: 'منتجاتنا', links: [
      { t: 'الخزائن البنكية وغرف الأمانات', href: '/services/financial-sector' },
      { t: 'الأبواب المصفّحة والتقنية', href: '/services/financial-sector' },
      { t: 'الواجهات الزجاجية (كرتن وول)', href: '/services/commercial-buildings' },
      { t: 'السكاي لايت ومداخل الإضاءة', href: '/services/commercial-buildings' },
      { t: 'أنظمة الرول شتر', href: '/services/commercial-buildings' },
    ]},
    { h: 'الخدمات', links: [
      { t: 'قطاع المصارف والمالية', href: '/services/financial-sector' },
      { t: 'المباني التجارية', href: '/services/commercial-buildings' },
      { t: 'المشاريع السكنية', href: '/services/residential-projects' },
      { t: 'جميع الخدمات', href: '/services' },
    ]},
    { h: 'الشركة', links: [
      { t: 'عن ثوابت', href: '/about' },
      { t: 'المنهجية', href: '/methodology' },
      { t: 'سابقة الأعمال', href: '/projects' },
      { t: 'الفريق الهندسي', href: '/about' },
      { t: 'المهن', href: '/careers' },
    ]},
    { h: 'الموارد', links: [
      { t: 'المواصفات الفنّية', href: '/resources' },
      { t: 'ملف الشركة الكامل', href: '/resources' },
      { t: 'شهادات الامتثال', href: '/resources' },
      { t: 'تواصل', href: '/contact' },
    ]},
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="nav-brand" to="/">
              <img className="brandmark" loading="lazy" src="/assets/Thawabet-Logo-Wordmark.png" alt="ثوابت الإنشاء — Thawabet" />
            </Link>
            <p>الشريك الهندسي المعتمد لتوريد وتركيب الأنظمة الأمنية والواجهات المعمارية للمؤسسات المالية — من الرياض إلى مسقط.</p>
            <div className="footer-news">
              <div className="newslab">اشترك بالنشرة</div>
              <form className="newsform" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="بريدك الإلكتروني" aria-label="البريد الإلكتروني" />
                <button className="btn btn-primary btn-sm" type="submit">
                  <span>اشترك</span>
                  <Icon.ArrowLeft width="14" height="14" />
                </button>
              </form>
            </div>
          </div>
          <div className="footer-cols">
            {cols.map((c) => (
              <div className="fcol" key={c.h}>
                <h4>{c.h}</h4>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.t}><Link to={l.href}>{l.t}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bot">
          <div className="fbot-l">© 2018 — 2026 · ثوابت الإنشاء · Thawabet Al Inshaa Co.</div>
          <div className="fbot-c">
            <span>ISO 9001</span><span className="dia"></span>
            <span>Mostadam Certified</span><span className="dia"></span>
            <span>Saudi Council of Engineers</span>
          </div>
          <div className="fbot-r"><span className="on"></span><span></span></div>
        </div>
      </div>
    </footer>
  )
}
