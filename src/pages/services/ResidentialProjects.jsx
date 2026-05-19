import { Link } from 'react-router-dom'
import Icon from '../../components/Icons'
import Reveal from '../../components/Reveal'

/* ─── Hero ─── */
function ResidentialHero() {
  return (
    <section className="page-hero ph-residential" aria-label="المشاريع السكنية">
      <div className="hero-grid"></div>
      <div className="page-hero-glow"></div>

      <div className="hero-rail left"><span className="tick"></span><span>RESIDENTIAL · VILLAS · KSA</span></div>
      <div className="hero-rail right"><span>QUALITY · SECURITY · COMFORT</span><span className="tick"></span></div>

      <div className="hero-top">
        <div className="hero-eyebrow">
          <span>أبواب، نوافذ، وواجهات ألمنيوم للفلل والمشاريع السكنية الراقية</span>
          <span className="pulse"></span>
        </div>
      </div>

      <div className="hero-main">
        <Reveal delay={1}>
          <div className="page-hero-pre">
            <span className="line"></span>
            <span>Residential Projects · المشاريع السكنية</span>
          </div>
        </Reveal>
        <Reveal as="h1" delay={2} className="hero-headline">

          بيتك يستحق واجهةً <span className="accent test6">تليق بقيمته</span> <span className='test5'> وأمانًا لا يُساوَم. </span>

        </Reveal>
        <Reveal as="p" delay={3} className="hero-subline ">
          أبواب ألمنيوم فاخرة، نوافذ عازلة للصوت والحرارة، وأبواب أمان مقاومة للاقتحام — لفلل الرياض وجدة والخبر. نُقدّم المعاينة المجانية، ونلتزم بالمواصفات المتفق عليها.
        </Reveal>
        <Reveal delay={4} className="hero-actions">
          <a className="btn btn-primary btn-lg" href="#inspection">
            <span>احصل على معاينة مجانية لمنزلك</span>
            <Icon.ArrowLeft className="arrow" width="8" height="8" />
          </a>
          <a className="btn btn-outline btn-lg discoverbtn" href="#products">
            تصفّح منتجاتنا السكنية
            <Icon.ArrowDown width="16" height="16" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={5} className="hero-bottom">
        <div className="hero-stats">
          <div className="hero-stat"><div className="lab">فيلا ومنزل منجز</div><div className="num">200<span className="plus">+</span></div></div>
          <div className="hero-stat"><div className="lab">ضمان على التركيب</div><div className="num">5<span className="plus">yr</span></div></div>
          <div className="hero-stat"><div className="lab">معاينة مجانية</div><div className="num">24<span className="plus">h</span></div></div>
        </div>
        <div className="hero-scroll"><span className="track"></span></div>
      </Reveal>
    </section>
  )
}

/* ─── Pain / Solution ─── */
function PainSolution() {
  const pains = [
    {
      Ico: Icon.Sun,
      h: 'الحرارة تخترق النوافذ العادية وترفع فاتورة الكهرباء',
      b: 'النوافذ ذات الزجاج المفرد أو الإطارات التقليدية تُسرّب الحرارة الخارجية للداخل. النتيجة: مكيّفات تعمل بأقصى طاقتها وفاتورة مضاعفة طوال العام.',
    },
    {
      Ico: Icon.Lock,
      h: 'الأبواب التقليدية لا تكفي لحماية الأسرة',
      b: 'أبواب الخشب والألمنيوم العادية قابلة للاقتحام في دقائق. الأمان الحقيقي يبدأ بأبواب مقوّاة بصفائح فولاذية وأقفال متعددة النقاط.',
    },
    {
      Ico: Icon.Clock,
      h: 'التشطيب المتدني يظهر بعد أشهر قليلة',
      b: 'الإطارات والأبواب منخفضة الجودة تتعرض للتآكل والتلوّن في المناخ السعودي خلال سنتين. إعادة التشطيب تكلف أضعاف الفارق في السعر الأولي.',
    },
  ]
  return (
    <section className="pain-section">
      <div className="container">
        <Reveal className="pain-grid">
          <div>
            <div className="section-eyebrow"><span className="line"></span><span>Challenges · مشكلات شائعة</span></div>
            <h2 className="section-h2">لماذا <span className="accent">الاختيار الصحيح</span> منذ البداية؟</h2>
            <p className="section-lead" style={{ marginTop: 18 }}>ثوابت تقدّم منتجات مُعمَّرة من مصادر أوروبية وخليجية معتمدة، مع تركيب متخصص وضمان مكتوب.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 32 }}>
              {[
                { Ico: Icon.Check, t: 'مواد مطابقة للمعايير السعودية والأوروبية' },
                { Ico: Icon.Check, t: 'طاقم تركيب محترف ومعتمد' },
                { Ico: Icon.Check, t: 'ضمان 5 سنوات على التركيب والمواد' },
                { Ico: Icon.Check, t: 'معاينة مجانية وتقرير ميداني' },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--thw-gray)' }}>
                  <div style={{ color: 'var(--thw-orange)', flexShrink: 0 }}><f.Ico width="16" height="16" /></div>
                  <span>{f.t}</span>
                </div>
              ))}
            </div>
            <a className="btn btn-primary" href="#inspection" style={{ marginTop: 28, display: 'inline-flex' }}>
              <span>احجز معاينة مجانية</span>
              <Icon.ArrowLeft className="arrow" width="16" height="16" />
            </a>
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

/* ─── Products ─── */
function Products() {
  const prods = [
    {
      ar: 'الأبواب والنوافذ الألمنيوم',
      en: 'Aluminum Doors & Windows',
      desc: 'أبواب ونوافذ بإطارات ألمنيوم مُعالج بالبودرة PVDF بألوان RAL. مزدوجة الزجاج بطبقة Low-E للعزل الحراري الفائق. خيارات: شرائح، بكرة، ودفة كاملة.',
      tag: 'Low-E · PVDF · Double Glazed',
      Ico: Icon.Window,
    },
    {
      ar: 'واجهات الفلل الزجاجية',
      en: 'Villa Glass Facades',
      desc: 'واجهات زجاجية هيكلية للفلل الراقية — زجاج أمان لامينيت، بدرابزين زجاجي، وبرجولات ألمنيوم. تصميم يُضاهي أحدث مشاريع الفلل في الرياض وجدة.',
      tag: 'Structural · Laminated · Safety',
      Ico: Icon.Layers,
    },
    {
      ar: 'أبواب الأمان والمقاومة للاقتحام',
      en: 'Security & Anti-Intrusion Doors',
      desc: 'أبواب مقاومة للاقتحام بتصنيف RC2-RC3 الأوروبي، مع أقفال متعددة النقاط وصفائح فولاذية مدمجة. تجمع بين المظهر الفاخر والحماية الفعلية.',
      tag: 'RC2/RC3 · Multi-Point · Steel Core',
      Ico: Icon.Shield,
    },
  ]
  return (
    <section className="page-section alt" id="products">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Products · المنتجات</span></div>
          <h2 className="section-h2">منتجات <span className="accent">تُرقّي مستوى</span> بيتك</h2>
          <p className="section-lead">كل منتج مُختار بعناية من موردين أوروبيين وخليجيين معتمدين، ويأتي مع ضمان تركيب مكتوب.</p>
        </Reveal>
        <div className="product-cards">
          {prods.map((p, i) => (
            <Reveal key={p.en} className="product-card" delay={i + 1}>
              <div className="product-thumb">
                <div className="product-ico-wrap"><p.Ico width="28" height="28" /></div>
              </div>
              <h3 className="product-title">{p.ar}</h3>
              <p className="product-desc">{p.desc}</p>
              <div className="product-foot">
                <span className="product-tag">{p.tag}</span>
                <span className="product-arrow"><Icon.ArrowLeft width="16" height="16" /></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Project Showcase ─── */
function ProjectShowcase() {
  const projs = [
    {
      no: '01',
      h: 'فيلا الصحو · حي الفيحاء · الرياض',
      loc: 'الرياض · حي الفيحاء',
      specs: ['Double-Glazed', '14 Opening', 'PVDF Anthracite', '2024'],
    },
    {
      no: '02',
      h: 'قصر النور · حي السلامة · جدة',
      loc: 'جدة · حي السلامة',
      specs: ['Full-Glass Facade', 'Aluminum Pergola', 'RC2 Entry Door', '2025'],
    },
    {
      no: '03',
      h: 'مجمع الفلل الفاخرة · الخبر',
      loc: 'الخبر · العزيزية',
      specs: ['6 Villas', 'Uniform Facade', '5yr Warranty', '2024'],
    },
  ]
  return (
    <section className="page-section">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Showcase · مشاريع منجزة</span></div>
          <h2 className="section-h2">فلل تفخر <span className="accent">بواجهاتها</span></h2>
          <p className="section-lead">هذه مشاريع أسر اختارت ثوابت للجودة التي تدوم — لا التوفير الذي يكلّف لاحقًا.</p>
        </Reveal>
        <div className="res-showcase">
          {projs.map((p, i) => (
            <Reveal key={p.no} className="res-proj" delay={i + 1}>
              <div className="res-proj-img">
                <span className="res-proj-no">{p.no}</span>
              </div>
              <h3 className="res-proj-h">{p.h}</h3>
              <div className="res-proj-loc">
                <Icon.Pin width="13" height="13" style={{ color: 'var(--thw-orange)', flexShrink: 0 }} />
                <span>{p.loc}</span>
              </div>
              <div className="res-proj-specs">
                {p.specs.map((s) => <span className="res-proj-spec" key={s}>{s}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Free Inspection Banner ─── */
function InspectionForm() {
  const features = [
    'معاينة ميدانية لمنزلك دون أي التزام',
    'تقرير تفصيلي بتوصيات الأبواب والنوافذ',
    'عرض سعر مبدئي خلال 48 ساعة',
    'مهندس متخصص يزورك في الموعد المحدد',
  ]
  return (
    <section className="page-section alt" id="inspection">
      <div className="container">
        <div className="inspection-banner">
          <div className="ib-l">
            <div className="section-eyebrow light"><span className="line"></span><span>Free Inspection · معاينة مجانية</span></div>
            <h2 className="ib-h">احصل على <span className="accent">معاينة مجانية</span> لمنزلك — بدون التزام.</h2>
            <p className="ib-p">مهندسنا يزورك في الموعد المناسب، يفحص النوافذ والأبواب الحالية، ويقدّم توصية هندسية بالمنتج الأمثل لبيئتك واحتياجاتك.</p>
            <div className="ib-features">
              {features.map((f, i) => (
                <div className="ib-feature" key={i}>
                  <div className="ib-check"><Icon.Check width="16" height="16" /></div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="ib-badge">
              <Icon.Award width="14" height="14" />
              <span>ضمان 5 سنوات مكتوب على التركيب</span>
            </div>
          </div>
          <div className="ib-r">
            <form className="leadform" onSubmit={(e) => e.preventDefault()} style={{ background: 'rgba(0,0,0,0.28)' }}>
              <div className="lf-field">
                <span>الاسم الكامل</span>
                <input type="text" name="name" placeholder="محمد عبدالله الأحمد" required />
              </div>
              <div className="lf-field">
                <span>رقم الجوّال</span>
                <input type="tel" name="phone" placeholder="+966 5X XXX XXXX" required />
              </div>
              <div className="lf-field">
                <span>المدينة والحي</span>
                <input type="text" name="location" placeholder="الرياض · حي الملقا" required />
              </div>
              <label className="lf-field">
                <span>نوع المشروع</span>
                <select name="type" required defaultValue="">
                  <option value="" disabled>اختر نوع المشروع</option>
                  <option className='leadFormSelection' >فيلا سكنية جديدة</option>
                  <option className='leadFormSelection' >استبدال نوافذ وأبواب قائمة</option>
                  <option className='leadFormSelection' >إضافة واجهة زجاجية</option>
                  <option className='leadFormSelection' >مشروع مجمع فلل</option>
                  <option className='leadFormSelection' >غير ذلك</option>
                </select>
              </label>
              <button className="btn btn-primary btn-lg lf-submit" type="submit">
                <span>احجز معاينتك المجانية الآن</span>
                <Icon.ArrowLeft className="arrow" width="16" height="16" />
              </button>
              <div className="lf-foot">
                <span>ردّنا خلال</span><b>24 ساعة</b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Residential Projects Page ─── */
export default function ResidentialProjects() {
  return (
    <>
      <ResidentialHero />
      <PainSolution />
      <Products />
      <ProjectShowcase />
      <InspectionForm />
    </>
  )
}
