import { Link } from 'react-router-dom'
import Icon from '../components/Icons'
import Reveal from '../components/Reveal'

/* ─── Hero ─── */
function ProjectsHero() {
  return (
    <section className="page-hero ph-projects" aria-label="سجل المشاريع">
      <div className="hero-grid"></div>
      <div className="page-hero-glow"></div>

      <div className="hero-rail left"><span className="tick"></span><span>PORTFOLIO · CASE STUDIES</span></div>
      <div className="hero-rail right"><span>OMAN · SAUDI ARABIA</span><span className="tick"></span></div>

      <div className="hero-top">
        <div className="hero-eyebrow">
          <span>محفظة الأعمال الموثّقة · ثوابت الإنشاء</span>
          <span className="pulse"></span>
        </div>
      </div>

      <div className="hero-main">
        <Reveal delay={1}>
          <div className="page-hero-pre">
            <span className="line"></span>
            <span>سجل التنفيذ · Portfolio</span>
          </div>
        </Reveal>
        <Reveal as="h1" delay={2} className="hero-headline">
          لا نبيع وعوداً هندسية.. بل نُسلم مشاريع <span className="accent">مطابقة للمواصفات.</span>
        </Reveal>
        <Reveal as="p" delay={3} className="hero-subline">
          تصفح محفظة أعمال ثوابت الإنشاء في سلطنة عُمان والمملكة العربية السعودية. دراسات حالة موثقة لمشاريع تجارية، مالية، وسكنية تجاوزنا فيها التحديات الهندسية لنسلم الواجهات وأنظمة الأمان في وقتها المحدد.
        </Reveal>
        <Reveal delay={4} className="hero-actions">
          <a className="btn btn-primary btn-lg" href="#case-studies">
            <span>تصفح دراسات الحالة</span>
            <Icon.ArrowLeft className="arrow" width="16" height="16" />
          </a>
          <Link className="btn btn-outline btn-lg" to="/contact">
            <span>اطلب تقييم مجاني</span>
            <Icon.ArrowDown width="16" height="16" />
          </Link>
        </Reveal>
      </div>

      <Reveal delay={5} className="hero-bottom">
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="lab">مشروع منجز موثق</div>
            <div className="num">120<span className="plus">+</span></div>
          </div>
          <div className="hero-stat">
            <div className="lab">سنوات خبرة إقليمية</div>
            <div className="num">9<span className="plus">+</span></div>
          </div>
          <div className="hero-stat">
            <div className="lab">نسبة التسليم في الموعد</div>
            <div className="num">94<span className="plus">%</span></div>
          </div>
        </div>
        <div className="hero-scroll"><span className="track"></span></div>
      </Reveal>
    </section>
  )
}

/* ─── Featured Case Studies ─── */
function CaseStudies() {
  const cases = [
    {
      id: '01',
      location: 'بوشر / مسقط',
      title: 'مبنى تجاري متعدد الاستخدامات',
      en: 'Mixed-Use Commercial · Bawshar',
      challenge: 'متطلبات صارمة للعزل الحراري بنسبة 100% وجدول زمني ضيق جداً مع ارتباطات إنشائية متداخلة.',
      solution: 'توريد وتركيب أنظمة واجهات استركشر متطورة، وتخصيص فرق عمل بنظام الورديات لتحقيق التسليم.',
      result: 'اجتياز اختبارات العزل الحراري بنسبة 100%، وتسليم الواجهات قبل الموعد النهائي بـ 14 يوماً.',
      badge: 'سُلّم قبل الموعد بـ 14 يوماً',
      metrics: [
        { v: '100%', lab: 'نجاح اختبارات العزل' },
        { v: '14d', lab: 'قبل الموعد' },
      ],
      type: 'واجهات هيكلية',
      Ico: Icon.Building,
    },
    {
      id: '02',
      location: 'المعبيلة الصناعية / مسقط',
      title: 'مجمع مصرفي وإداري',
      en: 'Banking & Admin Complex · Maabelah',
      challenge: 'اشتراطات الدفاع المدني للأبواب المصفحة بمعايير مقاومة الحريق مع تنسيق دقيق مع المقاول الرئيسي.',
      solution: 'تصميم وتوريد أبواب مصفحة مخصصة مُعتمدة من الدفاع المدني، مع جدولة دقيقة لا تعطّل تسلسل الأعمال.',
      result: 'اعتماد فوري من الدفاع المدني دون ملاحظات تصحيحية، وتسليم نهائي مطابق لجدول المالك.',
      badge: 'اعتماد الدفاع المدني بلا ملاحظات',
      metrics: [
        { v: '0', lab: 'ملاحظات تصحيحية' },
        { v: '100%', lab: 'اعتماد الدفاع المدني' },
      ],
      type: 'أبواب مصفحة',
      Ico: Icon.Shield,
    },
    {
      id: '03',
      location: 'طريق الخرج / الرياض',
      title: 'برج أعمال إداري',
      en: 'Administrative Tower · Riyadh',
      challenge: 'مساحة واجهة تتجاوز 8,000 م² مع اشتراطات رؤية 2030 لكفاءة الطاقة وزجاج منخفض الانبعاث.',
      solution: 'تطبيق أنظمة كرتن وول بزجاج Low-E مزدوج مع نظام تصريف مائي متكامل وشهادات NFRC موثّقة.',
      result: 'توفير 28% في استهلاك الطاقة مقارنةً بالمواصفة القياسية، مع حصول المشروع على شهادة الاستدامة.',
      badge: 'توفير 28% في استهلاك الطاقة',
      metrics: [
        { v: '28%', lab: 'توفير في الطاقة' },
        { v: '8k', lab: 'م² واجهات منجزة' },
      ],
      type: 'كرتن وول',
      Ico: Icon.Layers,
    },
  ]

  return (
    <section className="page-section alt" id="case-studies">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Case Studies · دراسات الحالة</span></div>
          <h2 className="section-h2">مشاريع <span className="accent">تحدٍّ وحلول وأرقام حقيقية.</span></h2>
          <p className="section-lead">لكل مشروع قصة تحدٍّ وحل مدروس ونتيجة موثّقة — لأن الأرقام تتحدث عن نفسها.</p>
        </Reveal>

        <div className="cs-grid">
          {cases.map((c, i) => (
            <Reveal key={c.id} className="cs-card" delay={i % 3 + 1}>
              <div className="cs-head">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className="cs-ico"><c.Ico width="20" height="20" /></div>
                  <div>
                    <div className="cs-id">{c.id}</div>
                    <div className="cs-type">{c.type}</div>
                  </div>
                </div>
                <span className="cs-badge">{c.badge}</span>
              </div>

              <div className="cs-project-name">
                <h3 className="cs-title">{c.title}</h3>
                <div className="cs-location"><Icon.Pin width="12" height="12" /> {c.location}</div>
                <span className="cs-en">{c.en}</span>
              </div>

              <div className="cs-phases">
                <div className="cs-phase">
                  <span className="cs-phase-label challenge">التحدي · Challenge</span>
                  <p className="cs-phase-text">{c.challenge}</p>
                </div>
                <div className="cs-phase">
                  <span className="cs-phase-label solution">الحل · Solution</span>
                  <p className="cs-phase-text">{c.solution}</p>
                </div>
                <div className="cs-phase">
                  <span className="cs-phase-label result">النتيجة · Result</span>
                  <p className="cs-phase-text">{c.result}</p>
                </div>
              </div>

              <div className="cs-metrics">
                {c.metrics.map((m) => (
                  <div className="cs-metric" key={m.lab}>
                    <span className="cs-metric-val">{m.v}</span>
                    <span className="cs-metric-lab">{m.lab}</span>
                  </div>
                ))}
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
  const areas = [
    { no: '01', title: 'المعبيلة', sub: 'المنطقة الصناعية · مسقط', year: '2023', featured: true },
    { no: '02', title: 'العذيبة', sub: 'مسقط · سلطنة عُمان', year: '2024' },
    { no: '03', title: 'الخوض', sub: 'مسقط · سلطنة عُمان', year: '2023' },
    { no: '04', title: 'السيب', sub: 'مسقط · سلطنة عُمان', year: '2024' },
    { no: '05', title: 'العامرات', sub: 'مسقط · سلطنة عُمان', year: '2025' },
    { no: '06', title: 'الأنصب', sub: 'سلطنة عُمان', year: '2024' },
  ]

  return (
    <section className="page-section">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Gallery · المعرض</span></div>
          <h2 className="section-h2">بصمتنا الهندسية <span className="accent">في كل زاوية..</span></h2>
          <p className="section-lead">من المعبيلة الصناعية إلى العامرات — مشاريع تعكس جودة التنفيذ وعمق الخبرة الإقليمية.</p>
        </Reveal>

        <div className="gallery-grid">
          {areas.map((a, i) => (
            <Reveal key={a.no} className={`gallery-item ${a.featured ? 'featured' : ''}`} delay={i % 3 + 1}>
              <span className="gallery-no">{a.no}</span>
              <div className="gallery-overlay">
                <div className="gallery-title">{a.title}</div>
                <span className="gallery-sub">{a.sub} · {a.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Partners & Trust ─── */
function PartnersSection() {
  const partners = [
    { name: 'بنك مسقط', en: 'Bank Muscat · Oman', scope: 'خزائن وغرف أمانات مصرفية' },
    { name: 'مجموعة مالية كبرى', en: 'Financial Group · KSA', scope: 'واجهات هيكلية متكاملة' },
    { name: 'مطوّر عقاري سعودي', en: 'Real Estate Dev · Riyadh', scope: 'كرتن وول وكسوة ألمنيوم' },
    { name: 'منشأة أمنية حكومية', en: 'Government Entity · Oman', scope: 'أبواب مصفحة وأنظمة أمان' },
  ]

  return (
    <section className="proof-section" id="partners">
      <div className="container">
        <Reveal className="section-header centered">
          <div className="section-eyebrow"><span className="line"></span><span>Partners · الشركاء</span></div>

          <h2 className="section-h2 ">شركاء النجاح الذين وضعوا <span className="accent test3">ثقتهم في دقة تنفيذنا.</span></h2>

          <p className="section-lead ">مؤسسات مالية وتجارية وحكومية اختارت ثوابت لأنهم يعرفون أن الجودة لا تقبل المساومة.</p>

        </Reveal>

        <div className="proof-grid">
          {partners.map((p, i) => (
            <Reveal key={p.name} className="proof-item" delay={i % 4 + 1}>
              <div className="proof-scope">{p.en}</div>
              <div className="proof-name">{p.name}</div>
              <div className="proof-detail">{p.scope}</div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="cs-trust-strip">
            <div className="cs-trust-item"><Icon.Award width="15" height="15" /><span>مُقاول معتمد لدى الجهات الحكومية</span></div>
            <div className="cs-trust-div"></div>
            <div className="cs-trust-item"><Icon.Shield width="15" height="15" /><span>امتثال كامل لاشتراطات الدفاع المدني</span></div>
            <div className="cs-trust-div"></div>
            <div className="cs-trust-item"><Icon.Check width="15" height="15" /><span>ضمان أداء مكتوب على جميع الأنظمة</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Project Inquiry Form ─── */
function ProjectsForm() {
  return (
    <section className="cta" id="project-form">
      <div className="container">
        <div className="cta-card lead">
          <div className="cta-bg-grid"></div>

          <div className="cta-l">
            <div className="section-eyebrow light"><span className="line"></span><span>تقييم المشروع</span></div>
            <h2 className="cta-h">
              هل تبحث عن مستوى <span className="accent">التنفيذ ذاته</span> لمشروعك القادم؟
            </h2>
            <p>أرسل لنا تفاصيل المخطط أو طلب التسعير، وسيقوم مهندسونا بتقديم استشارة فنية مجانية خلال 24 ساعة.</p>

            <div className="cta-info" style={{ marginTop: 'clamp(20px,3vw,28px)' }}>
              <div className="ci">
                <Icon.Phone width="16" height="16" />
                <div><span>السعودية — الرياض</span><b>0554442125</b></div>
              </div>
              <div className="ci">
                <Icon.Phone width="16" height="16" />
                <div><span>سلطنة عُمان — مسقط</span><b>71111956</b></div>
              </div>
              <div className="ci">
                <Icon.Pin width="16" height="16" />
                <div><span>المقرّان</span><b>الرياض · مسقط</b></div>
              </div>
            </div>

            <div className="cta-trust" style={{ marginTop: 18 }}>
              <span className="lock">🔒</span>
              <span>مخططاتك الهندسية تُعامل بسرية تامة ولا تُشارك مع أي طرف ثالث.</span>
            </div>
          </div>

          <div className="cta-r">
            <form className="leadform" onSubmit={(e) => e.preventDefault()}>
              <div className="lf-row">
                <label className="lf-field">
                  <span>الاسم</span>
                  <input type="text" name="name" placeholder="م. محمد الحارثي" required />
                </label>
                <label className="lf-field">
                  <span>المالك / الجهة</span>
                  <input type="text" name="owner" placeholder="شركة التطوير العقاري" required />
                </label>
              </div>
              <label className="lf-field">
                <span>رقم الجوال</span>
                <input type="tel" name="phone" placeholder="+966 5X XXX XXXX" required />
              </label>
              <label className="lf-field">
                <span>نوع المشروع</span>
                <select name="type" defaultValue="" required>
                  <option value="" disabled>اختر نوع المشروع</option>
                  <option>مبنى تجاري متعدد الاستخدامات</option>
                  <option>مجمع مصرفي أو إداري</option>
                  <option>مشروع سكني فاخر</option>
                  <option>مبنى حكومي أو مؤسسي</option>
                  <option>مشروع صناعي أو لوجستي</option>
                  <option>غير ذلك</option>
                </select>
              </label>
              <label className="lf-field">
                <span>إرفاق المخطط (اختياري)</span>
                <div className="lf-upload">
                  <Icon.Layers width="18" height="18" />
                  <span>اسحب الملف هنا أو انقر للرفع · PDF · DWG · JPG</span>
                  <input type="file" accept=".pdf,.dwg,.dxf,.jpg,.png" />
                </div>
              </label>
              <button className="btn btn-primary btn-lg lf-submit" type="submit">
                <span>اطلب تقييم وتسعير مشروعك</span>
                <Icon.ArrowLeft className="arrow" width="16" height="16" />
              </button>
              <div className="lf-foot">
                <span>متوسّط الردّ</span><b>أقل من 24 ساعة عمل</b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Projects Page ─── */
export default function Projects() {
  return (
    <>
      <ProjectsHero />
      <CaseStudies />
      <ProjectGallery />
      <PartnersSection />
      <ProjectsForm />
    </>
  )
}
