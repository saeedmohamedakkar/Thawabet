import { Link } from 'react-router-dom'
import Icon from '../../components/Icons'
import Reveal from '../../components/Reveal'
import LeadForm from '../../components/LeadForm'

/* ─── Hero ─── */
function FinanceHero() {
  return (
    <section className="page-hero ph-finance" aria-label="قطاع المصارف والمالية">
      <div className="hero-grid"></div>
      <div className="page-hero-glow"></div>

      <div className="hero-rail left"><span className="tick"></span><span>BANKING · FINANCIAL SECTOR</span></div>
      <div className="hero-rail right"><span>VAULT GRADE · ZERO TOLERANCE</span><span className="tick"></span></div>

      <div className="hero-top">
        <div className="hero-eyebrow">
          <span>حلول أمنية معمارية لمقرات البنوك والمؤسسات المالية — امتثال 100% لمتطلبات البنك المركزي</span>
          <span className="pulse"></span>
        </div>
      </div>

      <div className="hero-main">
        <Reveal delay={1}>
          <div className="page-hero-pre">
            <span className="line"></span>
            <span>Financial Sector · القطاع المالي</span>
          </div>
        </Reveal>
        <Reveal as="h1" delay={2} className="hero-headline">
          أصولك المصرفية الحساسة تستحق حمايةً <span className="accent">لا تحتمل التنازل.</span>
        </Reveal>
        <Reveal as="p" delay={3} className="hero-subline">
          من الخزائن الفولاذية إلى غرف الأمانات الكاملة، والأبواب المصفحة المقاومة للرصاص والحريق — نصمّم وننفّذ الحلول الأمنية المعمارية التي تجتاز أصعب تدقيقات البنك المركزي، دون أن تعطّل لحظةً واحدة من عملياتك التشغيلية.
        </Reveal>
        <Reveal delay={4} className="hero-actions">
          <Link className="btn btn-primary btn-lg" to="/contact">
            <span>تحدث مع مهندس أمني الآن</span>
            <Icon.ArrowLeft className="arrow" width="8" height="8" />
          </Link>
          <a className="btn btn-outline btn-lg" href="#solutions">
            <span>استكشف حلولنا المصرفية</span>
            <Icon.ArrowDown width="16" height="16" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={5} className="hero-bottom">
        <div className="hero-stats">
          <div className="hero-stat"><div className="lab">فرع بنكي منجز</div><div className="num">86<span className="plus">+</span></div></div>
          <div className="hero-stat"><div className="lab">معدل الامتثال الأمني</div><div className="num">100<span className="plus">%</span></div></div>
          <div className="hero-stat"><div className="lab">حادث أمني · 2025</div><div className="num">0</div></div>
        </div>
        <div className="hero-scroll"><span className="track"></span></div>
      </Reveal>
    </section>
  )
}

/* ─── Pain / Agitation ─── */
function PainSection() {
  const pains = [
    {
      Ico: Icon.Clock,
      h: 'تأخير الافتتاح يعني خسارة إيرادية مباشرة',
      b: 'كل يوم تأخير في افتتاح فرع جديد يكلّف البنك مئات الآلاف. شركاء التنفيذ غير المتخصصين يتسببون في تأخيرات متكررة بسبب إعادة العمل وعدم مطابقة المواصفات.',
    },
    {
      Ico: Icon.Shield,
      h: 'الفشل في تدقيق SAMA يوقف الافتتاح كليًا',
      b: 'الهيئة السعودية للمصارف لا تقبل الحلول المؤقتة. منتج واحد غير معتمد في غرفة الخزائن يعني إيقاف كامل للمشروع وإعادة تنفيذ مكلفة.',
    },
    {
      Ico: Icon.Lock,
      h: 'الخزائن والأبواب: الحلقة الأضعف في سلسلة الأمان',
      b: 'اختيار منتج غير مطابق للمواصفات الأمنية الدولية يعرّض البنك لمخاطر تشغيلية وقانونية. الاقتصاد في التكلفة هنا يكلّف أضعاف الفارق لاحقًا.',
    },
    {
      Ico: Icon.Building,
      h: 'الواجهات التجارية تتدهور قبل نهاية الضمان',
      b: 'مقاولون غير متخصصين في الواجهات الزجاجية الإنشائية يورّدون منتجات لا تتحمّل البيئة السعودية. النتيجة: تسرّب مياه، تشقّق، وتكاليف صيانة متكررة.',
    },
  ]
  return (
    <section className="pain-section" id="challenges">
      <div className="container">
        <Reveal className="pain-grid">
          <div>
            <div className="section-eyebrow"><span className="line"></span><span>Challenges · التحديات</span></div>
            <h2 className="section-h2">التحديات الحقيقية التي يواجهها <span className="accent">قطاع البنوك</span> في مشاريع الإنشاء</h2>
            <p className="section-lead" style={{ marginTop: 18 }}>كل تحدٍّ من هذه التحديات يمكن تفاديه بالاختيار الصحيح للشريك الهندسي قبل بدء التصميم.</p>
            <Link className="btn btn-outline" to="/contact" style={{ marginTop: 32, display: 'inline-flex' }}>
              <span>ناقش مشروعك مع مهندسنا</span>
              <Icon.ArrowLeft className="arrow" width="16" height="16" />
            </Link>
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

/* ─── Solutions ─── */
function Solutions() {
  const sols = [
    {
      num: '01',
      ar: 'الخزائن البنكية وغرف الأمانات',
      en: 'Bank Vaults & Safe Deposit Rooms',
      desc: 'تصفيح فولاذي مزدوج بمعيار EN 1143-1 أوروبي، مع أنظمة إغلاق ميكانيكية ورقمية ذات كودات متغيّرة. حماية كاملة للأصول النقدية والمستندات الحساسة ضد الاختراق والحريق.',
      specs: ['EN 1143-1 Grade VI', 'Fire-Rated RWS', 'Dual-Lock System', 'Biometric Ready'],
      featured: true,
      Ico: Icon.Lock,
    },
    {
      num: '02',
      ar: 'الأبواب المصفّحة والرصاص',
      en: 'Armored & Bullet-Proof Doors',
      desc: 'أبواب فولاذية مقاومة للرصاص بمعيار EN 1522 (FB4-FB7)، ومقاومة للحريق بمعيار EI 120. مناسبة لنقاط التحكم، صرافات النقد، وخزائن الأوراق المالية.',
      specs: ['EN 1522 FB4-FB7', 'EI 120 Fire Rated', 'Anti-Drill', 'Anti-Lever'],
      featured: false,
      Ico: Icon.Shield,
    },
    {
      num: '03',
      ar: 'الواجهات الزجاجية المطابقة للمعايير',
      en: 'Code-Compliant Glazed Facades',
      desc: 'كرتن وول وواجهات زجاجية هيكلية بمعايير AAMA/NFRC مع تقارير الأداء الحراري والمقاومة للرياح. تضمن اجتياز تدقيقات كود البناء السعودي واشتراطات الدفاع المدني.',
      specs: ['AAMA 501', 'NFRC Thermal', 'Wind Load Certified', 'Daylighting Report'],
      featured: false,
      Ico: Icon.Layers,
    },
    {
      num: '04',
      ar: 'أنظمة الإغلاق والتحكم بالدخول',
      en: 'Access Control & Fire-Exit Systems',
      desc: 'أبواب رول شتر آلية للأقسام الداخلية، بوابات الدفاع المدني للمخارج، وأبواب الغرف التقنية. تصميم يدمج بين الأمان التشغيلي ومتطلبات الإخلاء الطارئ.',
      specs: ['Fire Exit Rated', 'Panic Hardware', 'Automated Shutter', 'Access Log'],
      featured: false,
      Ico: Icon.Door,
    },
  ]
  return (
    <section className="page-section" id="solutions">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Solutions · الحلول</span></div>
          <h2 className="section-h2">حلول <span className="accent">مصرفية درجة أولى</span> لكل نقطة في مبناك</h2>
          <p className="section-lead">كل منتج نقدّمه يأتي مع وثيقة الاعتماد الكاملة، وتقرير الفحص الميداني، وضمان مكتوب.</p>
        </Reveal>
        <div className="solutions-grid">
          {sols.map((s, i) => (
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

/* ─── Banking Social Proof ─── */
function BankingProof() {
  const clients = [
    { name: 'بنك الراجحي', scope: 'Armored Doors · Vaults', detail: 'أكثر من 40 فرع في المملكة العربية السعودية وسلطنة عُمان — تسليم في الوقت المحدد 100%.' },
    { name: 'بنك البلاد', scope: 'Vault Room · Skylight', detail: 'المقر المؤسسي الرئيسي في مسقط — مساحة 3,260 م² وأنظمة أمان متكاملة.' },
    { name: 'البنك الأهلي · SNB', scope: 'Curtain Wall · Vaults', detail: 'مركز العمليات الإقليمي في منطقة الخوض — خزائن من الدرجة الأولى.' },
    { name: 'ZATCA · الزكاة والضريبة', scope: 'Curtain Wall · Roll-Shutter', detail: 'المبنى الإقليمي في العذيبة — واجهة زجاجية هيكلية كاملة مطابقة للكود.' },
  ]
  return (
    <section className="proof-section">
      <div className="container">
        <Reveal className="section-header centered">
          <div className="section-eyebrow"><span className="line"></span><span>Clients · عملاؤنا</span></div>
          <h2 className="section-h2">مؤسسات مالية من الصف الأول <span className="accent">تثق بثوابت</span></h2>
          <p className="section-lead">من بنك الراجحي إلى ZATCA — هذه المؤسسات اختارت ثوابت لأن السمعة والامتثال لا يُساوَمان.</p>
        </Reveal>
        <div className="proof-grid">
          {clients.map((c, i) => (
            <Reveal key={c.name} className="proof-item" delay={i % 4 + 1}>
              <div className="proof-name">{c.name}</div>
              <div className="proof-scope">{c.scope}</div>
              <div className="proof-detail">{c.detail}</div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="impact-grid" style={{ marginTop: 'clamp(28px,3vw,40px)' }}>
            {[
              { v: '86+', suf: '', ar: 'فرع بنكي ومقر مالي منجز', note: 'KSA · Oman · 2018-2026' },
              { v: '100', suf: '%', ar: 'معدل الامتثال الأمني', note: 'لا قبول للمشروع دون اجتياز التدقيق' },
              { v: '0', suf: '', ar: 'خرق أمني موثّق', note: 'سجل نظيف منذ التأسيس' },
              { v: '<24', suf: 'h', ar: 'متوسط الردّ على طلبات الدعم', note: 'دعم ما بعد البيع المستمر' },
            ].map((s, i) => (
              <div className="impact-stat" key={i}>
                <div className="is-num"><span>{s.v}</span><span className="suf">{s.suf}</span></div>
                <div className="is-lab">{s.ar}</div>
                <div className="is-note">{s.note}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Financial Sector Page ─── */
export default function FinancialSector() {
  return (
    <>
      <FinanceHero />
      <PainSection />
      <Solutions />
      <BankingProof />
      <LeadForm
        eyebrow="استشارة أمنية مجانية"
        title='مشروعك المصرفي يستحق شريكًا <span class="accent">لا يساوم على الامتثال.</span>'
        subtitle="شاركنا تفاصيل مشروعك — يتواصل معك مهندس أمني متخصص خلال 24 ساعة لمراجعة المتطلبات التقنية وتقديم توصية مبدئية حول الحل الأمثل لغرف الخزائن والأبواب المصفحة."
        serviceOptions={['الخزائن البنكية وغرف الأمانات', 'الأبواب المصفّحة والتقنية', 'الواجهات الزجاجية للبنوك', 'أنظمة الإخلاء والدفاع المدني', 'حلٌّ أمني متكامل']}
        submitLabel="اطلب مراجعة هندسية أمنية"
        responseTime="أقل من 12 ساعة للمشاريع المصرفية"
      />
    </>
  )
}
