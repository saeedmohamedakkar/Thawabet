import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/Icons'
import Reveal from '../../components/Reveal'
import LeadForm from '../../components/LeadForm'

/* ─── Hero ─── */
function ServicesHero() {
  return (
    <section className="page-hero" aria-label="خدماتنا الهندسية">
      <div className="hero-grid"></div>
      <div className="page-hero-glow"></div>

      <div className="hero-rail left"><span className="tick"></span><span>SERVICES · SECTORS · KSA</span></div>
      <div className="hero-rail right"><span>ENGINEERING · SOLUTIONS</span><span className="tick"></span></div>

      <div className="hero-top">
        <div className="hero-eyebrow">
          <span>حلول هندسية متكاملة للقطاعات التجارية، المالية، والحكومية</span>
          <span className="pulse"></span>
        </div>
      </div>

      <div className="hero-main">
        <Reveal delay={1}>
          <div className="page-hero-pre">
            <span className="line"></span>
            <span>Services · الخدمات</span>
          </div>
        </Reveal>
        <Reveal as="h1" delay={2} className="hero-headline">
          مشاريعك المعمارية الكبرى تحتاج إلى <span className="accent">دقة تنفيذية.</span>
        </Reveal>
        <Reveal as="p" delay={3} className="hero-subline">
          من الواجهات الزجاجية العملاقة إلى أنظمة الأمان المصفحة؛ ندمج بين التصميم الجمالي والامتثال الصارم لكود البناء السعودي ومعايير الدفاع المدني. لضمان تسليم مشروعك بالمواصفات المطلوبة، وفي الوقت المحدد.
        </Reveal>
        <Reveal delay={4} className="hero-actions">
          <Link className="btn btn-primary btn-lg" to="/contact">
            <span>تحدث مع الإدارة الهندسية الآن</span>
            <Icon.ArrowLeft className="arrow" width="8" height="8" />
          </Link>
          <a className="btn btn-outline btn-lg" href="#sectors">
            <span>استكشف قطاعات حلولنا</span>
            <Icon.ArrowDown width="16" height="16" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={5} className="hero-bottom">
        <div className="hero-stats">
          <div className="hero-stat"><div className="lab">مشروع منجز</div><div className="num">120<span className="plus">+</span></div></div>
          <div className="hero-stat"><div className="lab">قطاعات خدمية</div><div className="num">3</div></div>
          <div className="hero-stat"><div className="lab">معدل الامتثال</div><div className="num">100<span className="plus">%</span></div></div>
        </div>
        <div className="hero-scroll"><span className="track"></span></div>
      </Reveal>
    </section>
  )
}

/* ─── Compliance Strip ─── */
function ComplianceStrip() {
  const badges = [
    { dot: true, name: 'معيار SASO', sub: 'Saudi Standards Authority', en: 'SASO' },
    { dot: true, name: 'الدفاع المدني', sub: 'Civil Defense Compliance', en: 'Civil Defense' },
    { dot: true, name: 'رؤية 2030', sub: 'Vision 2030 Aligned', en: 'Vision 2030' },
  ]
  return (
    <div className="compliance-strip" role="list" aria-label="شهادات الامتثال">
      {badges.map((b, i) => (
        <Fragment key={b.en}>
          <div className="compliance-badge" role="listitem">
            <div className="cb-dot"></div>
            <div className="cb-body">
              <span className="cb-name">{b.name}</span>
              <span className="cb-sub">{b.sub}</span>
            </div>
          </div>
          {i < badges.length - 1 && <div className="compliance-div"></div>}
        </Fragment>
      ))}
    </div>
  )
}

/* ─── Sectors Navigation ─── */
function SectorsNav() {
  const sectors = [
    {
      num: '01',
      ar: 'قطاع الواجهات والزجاج',
      en: 'Facades & Glazing',
      desc: 'كرتن وول، سكاي لايت، وأنظمة العزل الحراري للمباني التجارية والمؤسسية الكبرى. تصاميم معمارية حديثة بكفاءة طاقة عالية.',
      tag: 'Curtain Wall · Skylight · Thermal',
      Ico: Icon.Layers,
      href: '/services/commercial-buildings',
    },
    {
      num: '02',
      ar: 'قطاع أنظمة الأمان والأبواب المصفحة',
      en: 'Security Systems & Armored Doors',
      desc: 'خزائن بنكية، أبواب فولاذية مقاومة للرصاص، وغرف الأمانات. امتثال 100% لمتطلبات البنك المركزي السعودي.',
      tag: 'Vaults · Armored · Fire-Rated',
      Ico: Icon.Shield,
      href: '/services/financial-sector',
    },
    {
      num: '03',
      ar: 'قطاع الألمنيوم والأبواب التقنية',
      en: 'Aluminum & Technical Doors',
      desc: 'أبواب وشبابيك ألمنيوم عالي الجودة، رول شتر تجاري، وأبواب فولدينج للفلل السكنية والمشاريع السكنية الراقية.',
      tag: 'Aluminum · Folding · Roll-Shutter',
      Ico: Icon.Door,
      href: '/services/residential-projects',
    },
  ]

  return (
    <section className="page-section" id="sectors">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Sectors · القطاعات</span></div>
          <h2 className="section-h2">اختر القطاع الهندسي <span className="accent">المطابق لاحتياجات مشروعك</span></h2>
          <p className="section-lead">كل قطاع له متطلباته التقنية وإطاره القانوني الخاص — اختر المسار الهندسي الصحيح لمشروعك.</p>
        </Reveal>
        <div className="sectors-grid">
          {sectors.map((s, i) => (
            <Reveal key={s.num} as={Link} to={s.href} delay={i + 1} className="sector-card">
              <div className="sector-num">{s.num}</div>
              <div className="sector-ico"><s.Ico width="24" height="24" /></div>
              <h3 className="sector-title">{s.ar}</h3>
              <span className="sector-en">{s.en}</span>
              <p className="sector-desc">{s.desc}</p>
              <div className="sector-foot">
                <span className="sector-tag">{s.tag}</span>
                <span className="sector-arrow"><Icon.ArrowLeft width="16" height="16" /></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why Thawabet ─── */
function WhyThawabet() {
  const features = [
    {
      en: 'Central Project Management',
      ar: 'إدارة مركزية للمشروع',
      desc: 'مدير مشروع واحد يتولى التنسيق الكامل بين التصميم والتوريد والتنفيذ — نقطة اتصال واحدة، ومسؤولية غير مقسّمة. لا تضيع وقتك في التنسيق بين جهات متعددة.',
      Ico: Icon.Users,
    },
    {
      en: 'Non-Negotiable Compliance',
      ar: 'امتثال غير قابل للتفاوض',
      desc: 'كل منتج نورّده يحمل شهادة اعتماد دولية، وكل تركيب يخضع لبروتوكول فحص صارم. الامتثال ليس خياراً في ثوابت — هو المعيار الوحيد لقبول التسليم.',
      Ico: Icon.Award,
    },
    {
      en: 'Sacred Timelines',
      ar: 'جداول زمنية مقدّسة',
      desc: 'نبني جداول تنفيذ حقيقية، ونلتزم بها. معدل الالتزام بالتسليم في الوقت المحدد لدينا 98% على مدار آخر 24 شهرًا. لأن التأخير له تكلفة تشغيلية لا تحتملها.',
      Ico: Icon.Clock,
    },
  ]
  return (
    <section className="page-section alt">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Why Thawabet · لماذا ثوابت</span></div>
          <h2 className="section-h2">لماذا تفضّل المكاتب الاستشارية <span className="accent">إسناد مشاريعها لـ ثوابت؟</span></h2>
          <p className="section-lead">لأن الشريك الهندسي الصحيح لا يُنجز المشروع فقط — يحمي سمعتك أمام العميل النهائي.</p>
        </Reveal>
        <div className="why-grid">
          {features.map((f, i) => (
            <Reveal key={f.en} className="why-block" delay={i + 1}>
              <div className="why-ico"><f.Ico width="24" height="24" /></div>
              <span className="why-en">{f.en}</span>
              <h3 className="why-title">{f.ar}</h3>
              <p className="why-desc">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Services Main Page ─── */
export default function ServicesMain() {
  return (
    <>
      <ServicesHero />
      <ComplianceStrip />
      <SectorsNav />
      <WhyThawabet />
      <LeadForm
        eyebrow="استشارة هندسية مجانية"
        title='هل لديك مشروع قيد التصميم أو التنفيذ؟ <span class="accent">دعنا نراجع المخططات.</span>'
        subtitle="أرسل لنا بيانات مشروعك الأساسية — يتواصل معك مهندس متخصص خلال 24 ساعة لمراجعة المتطلبات التقنية وتقديم توصية هندسية مبدئية مجانية."
        serviceOptions={['الواجهات الزجاجية والكرتن وول', 'الخزائن البنكية والأبواب المصفحة', 'الألمنيوم والأبواب التقنية', 'حلٌّ متكامل · أكثر من قطاع']}
        submitLabel="اطلب استشارة هندسية للمشروع"
      />
    </>
  )
}
