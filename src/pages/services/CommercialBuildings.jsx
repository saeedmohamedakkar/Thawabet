import { Link } from 'react-router-dom'
import Icon from '../../components/Icons'
import Reveal from '../../components/Reveal'
import LeadForm from '../../components/LeadForm'

/* ─── Hero ─── */
function CommercialHero() {
  return (
    <section className="page-hero ph-commercial" aria-label="المباني التجارية">
      <div className="hero-grid"></div>
      <div className="page-hero-glow"></div>

      <div className="hero-rail left"><span className="tick"></span><span>COMMERCIAL · CORPORATE</span></div>
      <div className="hero-rail right"><span>CURTAIN WALL · FACADE SYSTEMS</span><span className="tick"></span></div>

      <div className="hero-top">
        <div className="hero-eyebrow">
          <span>واجهات معمارية تجارية تدمج الجماليات مع معايير كود البناء السعودي</span>
          <span className="pulse"></span>
        </div>
      </div>

      <div className="hero-main">
        <Reveal delay={1}>
          <div className="page-hero-pre">
            <span className="line"></span>
            <span>Commercial Buildings · المباني التجارية</span>
          </div>
        </Reveal>
        <Reveal as="h1" delay={2} className="hero-headline ">
          
         <span className=''> واجهات تجارية تعكس </span>
          <span className="accent">هوية علامتك</span>
           <span className='test3'>   وتُحسّن قاع أرباحك.</span>

          
        </Reveal>
        <Reveal as="p" delay={3} className="hero-subline">
          كرتن وول، سكاي لايت، وأنظمة الألمنيوم الهيكلية للمكاتب الرئيسية والمجمعات التجارية والفنادق. نجمع بين التصميم المعماري الاستثنائي وكفاءة الطاقة التي تُترجم إلى توفير موثّق في فاتورة الكهرباء.
        </Reveal>
        <Reveal delay={4} className="hero-actions">
          <Link className="btn btn-primary btn-lg" to="/contact">
            <span>احصل على دراسة الجدوى المعمارية</span>
            <Icon.ArrowLeft className="arrow" width="8" height="8" />
          </Link>
          <a className="btn btn-outline btn-lg" href="#systems">
            <span>تعرّف على أنظمتنا</span>
            <Icon.ArrowDown width="16" height="16" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={5} className="hero-bottom">
        <div className="hero-stats">
          <div className="hero-stat"><div className="lab">مشروع تجاري منجز</div><div className="num">45<span className="plus">+</span></div></div>
          <div className="hero-stat"><div className="lab">توفير الطاقة المتوسط</div><div className="num">32<span className="plus">%</span></div></div>
          <div className="hero-stat"><div className="lab">ضمان أداء الواجهات</div><div className="num">10<span className="plus">yr</span></div></div>
        </div>
        <div className="hero-scroll"><span className="track"></span></div>
      </Reveal>
    </section>
  )
}

/* ─── ROI / Pain Section ─── */
function ROISection() {
  const pains = [
    {
      Ico: Icon.Sun,
      h: 'واجهات رديئة تُضاعف فاتورة التبريد',
      b: 'الزجاج غير المُعالج حرارياً يرفع درجة حرارة المبنى الداخلية بمعدل 8-12 درجة، مما يزيد حِمل التبريد بنسبة تصل إلى 40% في المناخ السعودي.',
    },
    {
      Ico: Icon.Building,
      h: 'الواجهة هي أول ما يراه المستأجر والمستثمر',
      b: 'دراسات سوق العقارات التجارية تُثبت أن المباني ذات الواجهات المعمارية المميزة تحقق معدلات إيجار أعلى بـ 15-22% وقيمة إعادة بيع أفضل.',
    },
    {
      Ico: Icon.Award,
      h: 'التسليم المتأخر يكسر عقود الإيجار المبرمة',
      b: 'المطورون يوقّعون عقود إيجار قبل الاكتمال. أي تأخير في الواجهة — آخر عنصر في المبنى — قد يُفعّل بنود الغرامة وتأجيل الإيرادات.',
    },
    {
      Ico: Icon.Zap,
      h: 'الاستدامة أصبحت متطلباً، لا ميزة تنافسية',
      b: 'كود البناء السعودي 2024 يشترط حدًا أدنى لكفاءة الطاقة في المباني التجارية. الواجهة غير المطابقة تعني رفض رخصة الإشغال.',
    },
  ]

  const roi = [
    { v: '32%', lab: 'متوسط توفير الطاقة', note: 'بالزجاج المعزول مقارنةً بالزجاج المفرد' },
    { v: '18%', lab: 'ارتفاع معدل الإيجار', note: 'للمباني ذات الواجهات المعمارية المميزة' },
    { v: '10yr', lab: 'ضمان أداء الأنظمة', note: 'مكتوب على الواجهات والتركيبات' },
  ]

  return (
    <section className="pain-section" id="roi">
      <div className="container">
        <Reveal className="pain-grid">
          <div>
            <div className="section-eyebrow"><span className="line"></span><span>ROI · العائد على الاستثمار</span></div>
            <h2 className="section-h2">الواجهة ليست تكلفة — <span className="accent">هي استثمار يُقاس بالأرقام.</span></h2>
            <p className="section-lead" style={{ marginTop: 18 }}>الواجهة الصحيحة تخفض تكاليف التشغيل وتزيد القيمة الإيجارية. إليك الأرقام.</p>
            <div className="impact-grid" style={{ gridTemplateColumns: '1fr', gap: 12, marginTop: 28 }}>
              {roi.map((r, i) => (
                <div className="impact-stat" key={i} style={{ minHeight: 0, padding: 'clamp(16px,1.6vw,22px)' }}>
                  <div className="is-num" style={{ fontSize: 'clamp(28px,3vw,40px)' }}><span>{r.v}</span></div>
                  <div className="is-lab" style={{ fontSize: 14 }}>{r.lab}</div>
                  <div className="is-note">{r.note}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pain-list">
            {pains.map((p, i) => (
              <div className="pain-item" key={i}>
                <div className="pain-ico"><p.Ico width="18" height="18" /></div>
                <div>
                  <div className="pain-item-h">{p.h}</div>
                  <div className="pain-item-b">{p.b}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Systems ─── */
function Systems() {
  const systems = [
    {
      num: '01',
      ar: 'كرتن وول الهيكلي',
      en: 'Structural Curtain Wall',
      desc: 'أنظمة كرتن وول بإطارات ألمنيوم مقسّمة أو بالزجاج الهيكلي الكامل. تتحمّل أحمال الرياح والزلازل وفق متطلبات الكود السعودي، مع أداء حراري موثّق بتقارير NFRC.',
      specs: ['Structural Silicone', 'Wind Load ≥ 3kPa', 'Thermal Break', 'NFRC Certified'],
      featured: true,
      Ico: Icon.Layers,
    },
    {
      num: '02',
      ar: 'السكاي لايت ومداخل الإضاءة الطبيعية',
      en: 'Skylights & Daylighting Systems',
      desc: 'سقوف زجاجية وفتحات ضوء طبيعي بزوايا ومقاسات مخصصة. تقلّل الاعتماد على الإضاءة الاصطناعية بنسبة تصل إلى 45%، وتُحسّن رفاهية المستخدمين ومستوى الإنتاجية.',
      specs: ['Custom Geometry', 'SHGC < 0.25', 'Glare Control', 'Low-E Coating'],
      featured: false,
      Ico: Icon.Sun,
    },
    {
      num: '03',
      ar: 'الألمنيوم المعماري والكسوة',
      en: 'Architectural Aluminum & Cladding',
      desc: 'أنظمة كسوة ألمنيوم كومبوزيت (ACP)، وألواح ألمنيوم مجوّف، وبروفيلات معمارية مخصصة. تشطيب PVDF متدرّج بألوان RAL يضمن متانة تتجاوز 25 سنة في الظروف الخارجية.',
      specs: ['PVDF Coating', '25yr Warranty', 'RAL Colors', 'ACP/ACM Panels'],
      featured: false,
      Ico: Icon.Building,
    },
    {
      num: '04',
      ar: 'أنظمة الرول شتر التجاري',
      en: 'Commercial Roll-Shutter Systems',
      desc: 'رول شتر إنشائي للواجهات التجارية والمداخل الرئيسية، مع موتورات صامتة، أنظمة تحكم آلي، وإمكانية التكامل مع أنظمة إدارة المبنى (BMS). مطابق لمعايير الدفاع المدني.',
      specs: ['BMS Integration', 'Silent Motor', 'Fire-Link Ready', 'Anti-Wind Bar'],
      featured: false,
      Ico: Icon.Door,
    },
  ]

  return (
    <section className="page-section alt" id="systems">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Systems · الأنظمة</span></div>
          <h2 className="section-h2">أنظمة الكرتن وول <span className="accent">والألمنيوم التجاري</span></h2>
          <p className="section-lead">كل نظام مُصمَّم ليتكامل مع المخططات المعمارية من اليوم الأول، لا كإضافة لاحقة.</p>
        </Reveal>
        <div className="solutions-grid">
          {systems.map((s, i) => (
            <Reveal key={s.num} className={`solution-card ${s.featured ? 'featured' : ''}`} delay={i % 2 + 1}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="solution-num">{s.num}</div>
                <div className="solution-ico"><s.Ico width="20" height="20" /></div>
              </div>
              <h3 className="solution-title">{s.ar}</h3>
              <span className="solution-en">{s.en}</span>
              <p className="solution-desc">{s.desc}</p>
              <div className="solution-specs">
                {s.specs.map((sp) => <span className="spec-tag" key={sp}>{sp}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Project Gallery ─── */
function ProjectGallery() {
  const projects = [
    { no: '01', title: 'برج الأعمال الرئيسي · الرياض', sub: 'Curtain Wall · 18 Floors', year: '2024' },
    { no: '02', title: 'مجمع المكاتب المتكاملة · جدة', sub: 'Structural Glazing · G+8', year: '2024', featured: true },
    { no: '03', title: 'مركز التسوق الإقليمي · الخبر', sub: 'Skylight + ACP Cladding', year: '2023' },
    { no: '04', title: 'فندق الأعمال الفاخر · مسقط', sub: 'Full-Height Curtain Wall', year: '2023' },
    { no: '05', title: 'مقر الشركة التقنية · الرياض', sub: 'Unitized Facade · G+5', year: '2025' },
    { no: '06', title: 'مركز اللوجستيات · الدمام', sub: 'Roll-Shutter + ACP', year: '2024' },
  ]
  return (
    <section className="page-section">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Case Studies · مشاريع منجزة</span></div>
          <h2 className="section-h2">مشاريع تجارية <span className="accent">تتحدث عن نفسها</span></h2>
          <p className="section-lead">من المجمعات التجارية إلى أبراج الأعمال — هذه إنجازات توثّق التزامنا بالجودة.</p>
        </Reveal>
        <div className="gallery-grid">
          {projects.map((p, i) => (
            <Reveal key={p.no} className={`gallery-item ${p.featured ? 'featured' : ''}`} delay={i % 3 + 1}>
              <span className="gallery-no">{p.no}</span>
              <div className="gallery-overlay">
                <div className="gallery-title">{p.title}</div>
                <span className="gallery-sub">{p.sub} · {p.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(24px,3vw,36px)' }}>
            <a className="btn btn-outline" href="/projects">
              <span>شاهد جميع مشاريعنا التجارية</span>
              <Icon.ArrowLeft className="arrow" width="16" height="16" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Commercial Buildings Page ─── */
export default function CommercialBuildings() {
  return (
    <>
      <CommercialHero />
      <ROISection />
      <Systems />
      <ProjectGallery />
      <LeadForm
        eyebrow="استشارة معمارية مجانية"
        title='مشروعك التجاري يستحق واجهةً <span class="accent">تُحسّن أداءه لعقود.</span>'
        subtitle="احصل على مراجعة مجانية للمخططات المعمارية وتوصية بالنظام الأمثل لواجهة مبناك — دراسة تشمل الأداء الحراري، تكاليف التشغيل، وجدول التسليم."
        serviceOptions={['كرتن وول هيكلي', 'سكاي لايت ومداخل الإضاءة', 'كسوة ألمنيوم معمارية', 'أنظمة رول شتر تجاري', 'واجهة متكاملة']}
        submitLabel="احصل على دراسة الجدوى المجانية"
        responseTime="أقل من 24 ساعة عمل"
      />
    </>
  )
}
