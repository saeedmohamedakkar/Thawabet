import { useEffect, useRef, useState } from 'react'
import Icon from '../components/Icons'

/* ─── Hero ─── */
function Hero() {
  const videoRef = useRef(null)
  useEffect(() => {
    const v = videoRef.current; if (!v) return
    v.muted = true; v.playsInline = true
    const tryPlay = () => v.play().catch(() => {})
    tryPlay()
    document.addEventListener('visibilitychange', tryPlay)
    return () => document.removeEventListener('visibilitychange', tryPlay)
  }, [])

  return (
    <section className="hero" id="home">
      <video ref={videoRef}  className="hero-video" autoPlay muted loop playsInline preload="auto">
        <source src="/assets/hero-bg-no-logo.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-grid"></div>

      <div className="hero-rail left"><span className="tick"></span><span>EST · 2018 · RIYADH</span></div>
      <div className="hero-rail right"><span>ISO 9001 · BIM CERTIFIED</span><span className="tick"></span></div>

      <div className="hero-top">
        <div className="hero-eyebrow">
          <span>تنفيذ الواجهات والأنظمة الأمنية للمقرات البنكية بامتثال 100% ودون تعطيل لعملياتكم</span>
          <span className="pulse"></span>
        </div>
      </div>

      <div className="hero-main">
        <div className="reveal in" data-d="1"></div>
        <h1 className="hero-headline reveal in" data-d="2">
          نبني <span className="accent">بثوابت</span>
        </h1>
        <span className="hero-headline reveal in">لا تتغيّر.</span>
        <p className="hero-subline reveal in" data-d="3">
          <br />من الرياض إلى مسقط — <b>ثوابت الإنشاء</b> شريكك الهندسي المعتمد لتوريد وتركيب الأبواب المصفّحة، الخزائن البنكية، والواجهات المعمارية المطابقة لصرامة المعايير الأمنية لرؤية المملكة 2030.
        </p>
        <div className="hero-actions reveal in" data-d="4">
          <a className="btn btn-primary btn-lg" href="/contact">
            <span>احصل على مقايسة لمشروعك</span>
            <Icon.ArrowLeft className="arrow" width="8" height="8" />
          </a>
          <a className="btn btn-outline btn-lg" href="https://wa.me/966110000000">
            <span>تواصل معنا</span>
            <Icon.ArrowUpRight width="8" height="8" />
          </a>
        </div>
      </div>

      <div className="hero-bottom reveal in" data-d="5">
        <div className="hero-stats">
          <div className="hero-stat"><div className="lab">الامتثال الأمني</div><div className="num">100<span className="plus">%</span></div></div>
          <div className="hero-stat"><div className="lab">فروع بنكية منجزة</div><div className="num">86<span className="plus">+</span></div></div>
          <div className="hero-stat"><div className="lab">تلبية التسليم في الوقت</div><div className="num">98<span className="plus">%</span></div></div>
          <div className="hero-stat"><div className="lab">مدن · السعودية وعُمان</div><div className="num">14</div></div>
        </div>
        <div className="hero-scroll"><span className="track"></span></div>
      </div>
    </section>
  )
}

/* ─── Marquee ─── */
function Marquee() {
  const items = [
    { ar: 'بنك الراجحي', en: 'Al Rajhi Bank' },
    { ar: 'بنك البلاد', en: 'BankAlbilad' },
    { ar: 'البنك الأهلي السعودي', en: 'Saudi National Bank · SNB' },
    { ar: 'هيئة الزكاة والضريبة والجمارك', en: 'ZATCA' },
    { ar: 'الخيار الهندسي المعتمد لأصول المؤسسات المالية', en: 'Trusted by Tier-1 Banks' },
  ]
  const Track = () => (
    <div className="marquee-track">
      {items.concat(items).map((it, i) => (
        <div className="marquee-item" key={i}>
          <span>{it.ar}</span><span className="dia"></span>
          <span className="en">{it.en}</span>
        </div>
      ))}
    </div>
  )
  return <div className="marquee" aria-hidden="true"><Track /><Track /></div>
}

/* ─── About ─── */
function About() {
  const pillars = [
    { ar: 'امتثال غير قابل للمساومة', en: 'Uncompromising Compliance', desc: 'أبواب مصفّحة وخزائن أمانات مطابقة لأعلى المعايير الأمنية العالمية، لضمان اجتياز مؤسستك لأي تدقيق أمني من الجهات الرقابية.' },
    { ar: 'هندسة تعكس هويتك', en: 'Architecture That Reflects You', desc: 'واجهات زجاجية (كرتن وول) و(سكاي لايت) تدمج بين كفاءة العزل الحراري، الاستدامة، والمظهر المؤسّسي الذي يليق بحجم بنكك.' },
    { ar: 'تنفيذ دقيق بلا تأخير', en: 'Precise Execution', desc: 'الوقت هو مال في القطاع البنكي. فريقنا الهندسي يدير مشروعك من الرفع المساحي إلى التسليم النهائي بجدول زمني صارم.' },
  ]
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-l">
          <div className="section-eyebrow"><span className="line"></span><span>لماذا نحن</span></div>
          <h2 className="section-h2">لماذا تُسند كبرى البنوك <span className="accent">مشاريعها الحساسة</span> لـ ثوابت؟</h2>
          <p className="section-lead">لأن حلول الإنشاء العادية تسقط عند أوّل تدقيق أمني. نحن في »ثوابت« نتعامل مع الأصول الحساسة بوصفها وعودًا لا مشاريع.</p>
          <div className="about-pillars">
            {pillars.map((p) => (
              <div className="pillar" key={p.en}>
                <div className="pillar-h">
                  <span className="ar">{p.ar}</span>
                  <span className="en">{p.en}</span>
                </div>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="about-actions">
            <a className="btn btn-outline" href="/contact">
              <span>تحدّث إلى مدير مشاريع</span>
              <Icon.ArrowLeft className="arrow" width="16" height="16" />
            </a>
          </div>
        </div>
        <aside className="about-r">
          <div className="about-card"><div className="ac-num">100%</div><div className="ac-cap">امتثال تدقيقي</div></div>
          <div className="about-card alt"><div className="ac-num">86+</div><div className="ac-cap">فرع بنكي ومقر مؤسّسي منجز</div></div>
          <div className="about-card"><div className="ac-num">KSA · OM</div><div className="ac-cap">تغطية خليجيّة · الرياض إلى مسقط</div></div>
          <div className="about-card mark test2">
            <img className='test' loading="lazy" src="/assets/Thawabet-Logo-Wordmark.png" alt="ثوابت الإنشاء" />
          </div>
        </aside>
      </div>
    </section>
  )
}

/* ─── Services ─── */
function Services() {
  const cards = [
    { num: '01', ar: 'الخزائن البنكية وغرف الأمانات', en: 'Vaults & Safe Deposit Boxes', desc: 'تصفيح فولاذي مزدوج مطابق للمواصفات العالمية، مع أنظمة إغلاق ميكانيكية ورقمية معقدة — حماية مطلقة للأصول النقدية والمستندات الحساسة.', tag: 'Steel-Class · Fire-Rated', Ico: Icon.Cube },
    { num: '02', ar: 'الأبواب المصفّحة والتقنية', en: 'Armored & Technical Doors', desc: 'أبواب فولاذيّة مقاومة للرصاص والحريق، أبواب فولدينج سريعة، ورول شتر للخدمات الشاقة ومواقف سيارات نقل الأموال.', tag: 'Bullet-Proof · Folding · Roll-Shutter', Ico: Icon.Crane },
    { num: '03', ar: 'الواجهات الزجاجية المعمارية', en: 'Curtain Walls & Skylights', desc: 'قطاعات زجاجية عالية التحمّل مدمجة بأنظمة عزل حراري فائقة وتصميمات معمارية حديثة — خفض تكاليف استهلاك الطاقة وإضاءة طبيعيّة.', tag: 'Curtain Wall · Skylight · Thermal', Ico: Icon.Compass },
  ]
  return (
    <section className="services" id="products">
      <div className="container">
        <div className="services-head">
          <div className="lh">
            <div className="section-eyebrow"><span className="line"></span><span>منتجاتنا</span></div>
            <h2 className="section-h2">بنية تحتية ماديّة <span className="accent test3">توافق أدقّ المعايير الرقابية</span>.</h2>
          </div>
          <div className="services-meta">
            <div className="meta-row"><span>Products</span><span></span></div>
            <p>تجهيزات أمنيّة ومعماريّة مُصمّمة لضمان اجتياز مؤسستك الماليّة للتدقيق الأمني، مع الحفاظ على الانسيابيّة التشغيليّة.</p>
            <a className="btn btn-primary btn-sm" href="/products/data-sheets" style={{ marginTop: 14, alignSelf: 'flex-start' }}>
              <span>اطلب المواصفات الفنّية الكاملة</span>
              <Icon.ArrowLeft className="arrow" width="14" height="14" />
            </a>
          </div>
        </div>
        <div className="services-grid">
          {cards.map((c) => (
            <article className="svc" key={c.num}>
              <div className="svc-top">
                <div className="svc-num">{c.num}</div>
                <div className="svc-ico"><c.Ico width="22" height="22" /></div>
              </div>
              <h3 className="svc-title">{c.ar}</h3>
              <div className="svc-en">{c.en}</div>
              <p className="svc-desc">{c.desc}</p>
              <div className="svc-foot">
                <span className="tag">{c.tag}</span>
                <span className="svc-arrow"><Icon.ArrowLeft width="14" height="14" /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Projects ─── */
function Projects() {
  const proj = [
    { id: '01', ar: 'فرع الراجحي · المعبيلة', en: 'Al Rajhi Branch · Maabela', loc: 'مسقط · المعبيلة', year: '2024', scope: 'Armored Doors · Curtain Wall', area: '1,840 m²', floors: 'G+2', img: 'linear-gradient(135deg, #2a1c14 0%, #16100c 50%, #0a0707 100%)' },
    { id: '02', ar: 'مقرّ البلاد المؤسّسي · بوشر', en: 'BankAlbilad HQ · Bawshar', loc: 'مسقط · بوشر', year: '2023', scope: 'Vault Room · Skylight', area: '3,260 m²', floors: 'B1 + G+4', img: 'linear-gradient(135deg, #1f1410 0%, #120c08 50%, #080606 100%)' },
    { id: '03', ar: 'مركز SNB التشغيلي · الخوض', en: 'SNB Operations Centre · Khoud', loc: 'مسقط · الخوض', year: '2024', scope: 'Vaults · Bullet-Proof Doors', area: '2,410 m²', floors: 'G+3', img: 'linear-gradient(135deg, #1d1410 0%, #120b08 50%, #060404 100%)' },
    { id: '04', ar: 'مبنى ZATCA الإقليمي · العذيبة', en: 'ZATCA Regional Office · Azaiba', loc: 'مسقط · العذيبة', year: 'Ongoing', scope: 'Curtain Wall · Roll-Shutter', area: '1,980 m²', floors: 'G+5', img: 'linear-gradient(135deg, #281a13 0%, #160e0a 50%, #080605 100%)' },
  ]
  const [idx, setIdx] = useState(0)
  const cur = proj[idx]
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-head">
          <div className="lh">
            <div className="section-eyebrow"><span className="line"></span><span>مشاريعنا</span></div>
            <h2 className="section-h2">من مسقط إلى الرياض — <span className="accent">إنجازات هندسيّة</span> تتحدّث عن متانتها على أرض الواقع.</h2>
          </div>
          <a className="btn btn-ghost projects-all" href="/projects">
            <span>حمّل ملف سابقة الأعمال الكامل (PDF)</span>
            <Icon.ArrowLeft className="arrow" width="14" height="14" />
          </a>
        </div>
        <div className="projects-stage">
          <div className="proj-frame">
            <div className="proj-img" style={{ backgroundImage: cur.img }}>
              <img className="proj-mark" loading="lazy" src="/assets/Thawabet-Logo.svg" alt="" />
              <div className="proj-tape">
                <span>{cur.en.toUpperCase()}</span><span className="dia"></span>
                <span>{cur.year}</span><span className="dia"></span>
                <span>{cur.scope.toUpperCase()}</span>
              </div>
            </div>
            <div className="proj-meta">
              <div className="pm-id">PROJECT · {cur.id} / 04</div>
              <h3 className="pm-h">{cur.ar}</h3>
              <div className="pm-en">{cur.en}</div>
              <div className="pm-rows">
                <div className="pmr"><span className="k">الموقع</span><span className="v">{cur.loc}</span></div>
                <div className="pmr"><span className="k">السنة</span><span className="v">{cur.year}</span></div>
                <div className="pmr"><span className="k">النطاق</span><span className="v">{cur.scope}</span></div>
                <div className="pmr"><span className="k">المساحة</span><span className="v">{cur.area}</span></div>
                <div className="pmr"><span className="k">الأدوار</span><span className="v">{cur.floors}</span></div>
              </div>
              <a className="btn btn-outline" href="#">
                <span>دراسة الحالة</span>
                <Icon.ArrowUpRight width="16" height="16" />
              </a>
            </div>
          </div>
          <div className="proj-tabs">
            {proj.map((p, i) => (
              <button key={p.id} className={`proj-tab ${idx === i ? 'active' : ''}`} onClick={() => setIdx(i)}>
                <span className="n">{p.id}</span>
                <span className="t">{p.ar}</span>
                <span className="l">{p.loc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Process ─── */
function Process() {
  const steps = [
    { n: '01', ar: 'الاستكشاف', en: 'Discovery', desc: 'ندرس الموقع، نلتقط مدخلات العميل، ونرسم نطاقًا أوّليًا واضحًا قبل أيّ التزام.' },
    { n: '02', ar: 'التصميم والنمذجة', en: 'Design + BIM', desc: 'تصميم متكامل ونماذج LOD متدرّجة لكشف التعارضات قبل أن تصل إلى الموقع.' },
    { n: '03', ar: 'التخطيط والتعاقد', en: 'Planning · Contract', desc: 'جدول دقيق، ميزانية مكشوفة، وعقدٌ يضمن التزامات الطرفين بلا غموض.' },
    { n: '04', ar: 'التنفيذ والإشراف', en: 'Build + Supervision', desc: 'إدارة ميدانيّة بمعايير QA/QC وتقارير أسبوعية شفافة على كل ميل قطعنا.' },
    { n: '05', ar: 'التسليم والتشغيل', en: 'Handover · O&M', desc: 'اختبار الأنظمة، تدريب الفِرق، ومرافقتك لسنةٍ كاملة بعد التشغيل.' },
  ]
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-head">
          <div className="section-eyebrow"><span className="line"></span><span>كيف نعمل</span></div>
          <h2 className="section-h2">منهجيّةٌ من خمس ثوابت.</h2>
          <p className="section-lead">كل خطوة تُغلق بقرارٍ موثّق — لا لبس، ولا غموض، ولا متغيّرات بعد البدء.</p>
        </div>
        <ol className="process-list">
          {steps.map((s, i) => (
            <li className="step" key={s.n} style={{ '--i': i }}>
              <span className="step-rail"></span>
              <span className="step-dot"></span>
              <div className="step-body">
                <div className="step-head">
                  <span className="step-n">{s.n}</span>
                  <span className="step-en">{s.en}</span>
                </div>
                <h3 className="step-h">{s.ar}</h3>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ─── Impact ─── */
function Impact() {
  const stats = [
    { ar: 'نسبة الالتزام بالجداول', v: '98', suf: '%', note: 'متوسط آخر 24 شهرًا · 47 مشروع' },
    { ar: 'تجاوز التكلفة', v: '0.6', suf: '%', note: 'أقل من المتوسط القطاعي بـ 4×' },
    { ar: 'مهندسون معتمدون BIM', v: '26', suf: '/38', note: 'Autodesk · Revit · Navisworks' },
    { ar: 'حادث ميداني · 2025', v: '0', suf: '', note: '1.4M ساعة عمل · سجل آمن' },
  ]
  return (
    <section className="impact">
      <div className="container">
        <div className="impact-head">
          <div className="section-eyebrow light"><span className="line"></span><span>نتائجنا</span></div>
          <h2 className="section-h2">أرقامٌ هادئة. <span className="accent">نتائجُ صاخبة.</span></h2>
        </div>
        <div className="impact-grid">
          {stats.map((s, i) => (
            <div className="impact-stat" key={i}>
              <div className="is-num"><span>{s.v}</span><span className="suf">{s.suf}</span></div>
              <div className="is-lab">{s.ar}</div>
              <div className="is-note">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonial ─── */
function Testimonial() {
  const items = [
    { quote: 'تعاملنا مع شركاتٍ كثيرة، لكن ثوابت كانوا الوحيدين الذين سلّمونا المشروع كما وُعدنا — بالتاريخ والميزانية، ودون مفاجآت في التشطيب.', who: 'م. خالد العتيبي', role: 'مدير مشاريع · شركة نُسُك العقارية' },
    { quote: 'نموذج BIM الذي أعدّوه أنقذنا من تعارضٍ كان سيكلّفنا 3 أشهر إضافية. هذا هو الفرق بين شركةٍ تخطّط، وشركةٍ ترتجل.', who: 'د. ليلى الراشد', role: 'كبيرة المعماريين · مكتب الراشد للاستشارات' },
    { quote: 'تقاريرهم الأسبوعية كانت أوضح من تقاريرنا الداخلية. شفافية تمنحك الراحة لتفويضهم بقرار.', who: 'أ. عبدالله الزهراني', role: 'الرئيس التنفيذي · رواسي اللوجستية' },
  ]
  const [i, setI] = useState(0)
  return (
    <section className="testimonial">
      <div className="container">
        <div className="t-grid">
          <div className="t-side">
            <div className="section-eyebrow"><span className="line"></span><span>آراء عملاءنا</span></div>
            <h2 className="section-h2">يقولون عنّا.</h2>
            <div className="t-dots">
              {items.map((_, k) => (
                <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`}></button>
              ))}
            </div>
            <div className="t-of">{String(i + 1).padStart(2, '0')} <span>/ {String(items.length).padStart(2, '0')}</span></div>
          </div>
          <blockquote className="t-quote">
            <span className="qm">«</span>
            <p>{items[i].quote}</p>
            <footer>
              <strong>{items[i].who}</strong>
              <span>{items[i].role}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

/* ─── Insights ─── */
function Insights() {
  const posts = [
    { tag: 'BIM', read: '6 دقائق', ar: 'كيف تختصر LOD 400 ثلاثة أشهر من النزاعات الميدانيّة؟', date: 'أبريل 2026' },
    { tag: 'Sustainability', read: '9 دقائق', ar: 'مواد محلّيّة، انبعاثات أقل: قراءة في كود البناء السعودي 2026.', date: 'مارس 2026' },
    { tag: 'PM', read: '5 دقائق', ar: 'تقريرٌ أسبوعيّ يحترم وقت العميل: قالبٌ من الأرشيف.', date: 'فبراير 2026' },
  ]
  return (
    <section className="insights" id="insights">
      <div className="container">
        <div className="insights-head">
          <div className="lh">
            <div className="section-eyebrow"><span className="line"></span><span>آخر اخبارنا</span></div>
            <h2 className="section-h2">رؤى من الميدان.</h2>
          </div>
          <a className="btn btn-ghost" href="#">
            <span>كل المقالات</span>
            <Icon.ArrowLeft className="arrow" width="14" height="14" />
          </a>
        </div>
        <div className="insights-grid">
          {posts.map((p, k) => (
            <article className="post" key={k}>
              <div className="post-thumb"><span className="post-no">{String(k + 1).padStart(2, '0')}</span></div>
              <div className="post-meta">
                <span className="tag">{p.tag}</span><span className="dia"></span><span>{p.read}</span>
              </div>
              <h3 className="post-h">{p.ar}</h3>
              <div className="post-foot">
                <span>{p.date}</span>
                <Icon.ArrowLeft width="14" height="14" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-card lead">
          <div className="cta-bg-grid"></div>
          <div className="cta-l">
            <div className="section-eyebrow light"><span className="line"></span><span>تواصل معنا</span></div>
            <h2 className="cta-h">دعنا نناقش <span className="accent">الجانب الهندسي</span><br />لمشروعك القادم.</h2>
            <p>أدخل تفاصيل مشروعك الأساسيّة — يتواصل معك مدير المشاريع خلال 24 ساعة لترتيب معاينة ميدانيّة أو تقديم عرض سعر مبدئي مبني على الأرقام.</p>
            <div className="cta-info">
              <div className="ci"><Icon.Phone width="16" height="16" /><div><span>اتصال مباشر</span><b>+966 11 000 0000</b></div></div>
              <div className="ci"><Icon.Mail width="16" height="16" /><div><span>البريد المؤسّسي</span><b>projects@thawabet.sa</b></div></div>
              <div className="ci"><Icon.Pin width="16" height="16" /><div><span>المقرّان</span><b>الرياض · مسقط</b></div></div>
            </div>
            <div className="cta-trust">
              <span className="lock">🔒</span>
              <span>بياناتك المؤسسيّة في أمان تام وتخضع لسياسة سرّية المعلومات الصارمة.</span>
            </div>
          </div>
          <div className="cta-r">
            <form className="leadform" onSubmit={(e) => e.preventDefault()}>
              <div className="lf-row">
                <label className="lf-field">
                  <span>الاسم الكامل</span>
                  <input type="text" name="name" placeholder="مثال: م. خالد العتيبي" required />
                </label>
                <label className="lf-field">
                  <span>المسمّى الوظيفي</span>
                  <input type="text" name="title" placeholder="مثال: مدير المشاريع" required />
                </label>
              </div>
              <label className="lf-field">
                <span>اسم الجهة / البنك</span>
                <input type="text" name="org" placeholder="مثال: بنك الراجحي · إدارة المرافق" required />
              </label>
              <div className="lf-row">
                <label className="lf-field">
                  <span>رقم الجوّال</span>
                  <input type="tel" name="phone" placeholder="+966 5X XXX XXXX" required />
                </label>
                <label className="lf-field">
                  <span>نوع الخدمة المطلوبة</span>
                  <select name="service" required defaultValue="">
                    <option value="" disabled>اختر الخدمة</option>
                    <option>الخزائن البنكية وغرف الأمانات</option>
                    <option>الأبواب المصفّحة والتقنية</option>
                    <option>الواجهات الزجاجية المعمارية</option>
                    <option>حلٌّ متكامل · أكثر من خدمة</option>
                  </select>
                </label>
              </div>
              <button className="btn btn-primary btn-lg lf-submit" type="submit">
                <span>اطلب عرض السعر المبدئي الآن</span>
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

/* ─── Home page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Process />
      <Impact />
      <Testimonial />
      <Insights />
      <CTA />
    </>
  )
}
