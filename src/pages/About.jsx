import { Link } from 'react-router-dom'
import Icon from '../components/Icons'
import Reveal from '../components/Reveal'
import LeadForm from '../components/LeadForm'

/* ─── Hero ─── */
function AboutHero() {
  return (
    <section className="page-hero ph-about" aria-label="عن ثوابت الإنشاء">
      <div className="hero-grid"></div>
      <div className="page-hero-glow"></div>

      <div className="hero-rail left"><span className="tick"></span><span>SINCE 2016 · OMAN & KSA</span></div>
      <div className="hero-rail right"><span>ENGINEERING · PRECISION · TRUST</span><span className="tick"></span></div>

      <div className="hero-top">
        <div className="hero-eyebrow">
          <span>ندمج بين متانة التنفيذ وأناقة التصميم.</span>
          <span className="pulse"></span>
        </div>
      </div>

      <div className="hero-main">
        <Reveal delay={1}>
          <div className="page-hero-pre">
            <span className="line"></span>
            <span>About · عن الشركة</span>
          </div>
        </Reveal>
        <Reveal as="h1" delay={2} className="hero-headline">
          القوة الهندسية التي تعتمد عليها كبرى المؤسسات.. <span className="accent">من مسقط إلى قلب الرياض.</span>
        </Reveal>
        <Reveal as="p" delay={3} className="hero-subline">
          منذ عام 2016، رسخت ثوابت الإنشاء اسمها كشريك تقني وهندسي موثوق في سلطنة عُمان. واليوم، ننقل هذه الخبرة الإقليمية إلى المملكة العربية السعودية لدعم التطور العمراني السريع بحلول لا تقبل المساومة.
        </Reveal>
        <Reveal delay={4} className="hero-actions">
          <Link className="btn btn-primary btn-lg" to="/contact">
            <span>تواصل مع الإدارة الهندسية</span>
            <Icon.ArrowLeft className="arrow" width="16" height="16" />
          </Link>
          <a className="btn btn-outline btn-lg" href="#vision2030">
            <span>تعرّف على رؤيتنا</span>
            <Icon.ArrowDown width="16" height="16" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={5} className="hero-bottom">
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="lab">سنوات في السوق الإقليمي</div>
            <div className="num">9<span className="plus">+</span></div>
          </div>
          <div className="hero-stat">
            <div className="lab">مشروع منجز موثق</div>
            <div className="num">120<span className="plus">+</span></div>
          </div>
          <div className="hero-stat">
            <div className="lab">نسبة رضا العملاء</div>
            <div className="num">97<span className="plus">%</span></div>
          </div>
        </div>
        <div className="hero-scroll"><span className="track"></span></div>
      </Reveal>
    </section>
  )
}

/* ─── Vision 2030 Alignment ─── */
function Vision2030() {
  const blocks = [
    {
      Ico: Icon.Sun,
      en: 'Sustainability',
      title: 'واجهات مستدامة تخفض استهلاك الطاقة',
      desc: 'نركز على ريادة الواجهات المستدامة التي ترفع كفاءة استهلاك الطاقة وتمتثل لمتطلبات كود البناء السعودي 2024 وتُحقق أهداف الحياد الكربوني.',
    },
    {
      Ico: Icon.Users,
      en: 'Local Content',
      title: 'توطين الخبرات وتعزيز المحتوى المحلي',
      desc: 'نلتزم بتوطين الخبرات العالمية وتعزيز المحتوى المحلي بمعايير دولية دعماً لأهداف رؤية 2030 وبناء كوادر وطنية في قطاع التشييد المتخصص.',
    },
    {
      Ico: Icon.Award,
      en: 'Compliance',
      title: 'امتثال كامل لاشتراطات الجهات التنظيمية',
      desc: 'نعمل تحت مظلة الامتثال الكامل لاشتراطات الدفاع المدني والهيئات التنظيمية في عُمان والمملكة العربية السعودية — من التصميم حتى شهادة التسليم.',
    },
  ]

  return (
    <section className="page-section" id="vision2030">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Vision 2030 · الشراكة الاستراتيجية</span></div>
          <h2 className="section-h2">شريكك الهندسي نحو مستقبل <span className="accent test4">رؤية 2030.</span></h2>
          <p className="section-lead">نحن لا نكتفي بتوريد الزجاج والألمنيوم؛ بل نركز على ريادة الواجهات المستدامة التي ترفع كفاءة استهلاك الطاقة، مع التزامنا التام بتوطين الخبرات العالمية وتعزيز المحتوى المحلي بمعايير دولية.</p>
        </Reveal>
        <div className="why-grid">
          {blocks.map((b, i) => (
            <Reveal key={b.en} className="why-block" delay={i + 1}>
              <div className="why-ico"><b.Ico width="22" height="22" /></div>
              <div className="why-en">{b.en}</div>
              <h3 className="why-title">{b.title}</h3>
              <p className="why-desc">{b.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Operational Capability ─── */
function OperationalCapability() {
  const ops = [
    {
      Ico: Icon.Compass,
      en: 'Project Management',
      title: 'إدارة المشاريع والهندسة',
      desc: 'فريق هندسي متخصص يشرف على كل مشروع من التصميم التقني حتى التسليم النهائي، مع متابعة يومية دقيقة للجدول الزمني والمواصفات والمراسلات الرسمية.',
    },
    {
      Ico: Icon.Crane,
      en: 'Operations & Technicians',
      title: 'إدارة العمليات والفنيين',
      desc: 'فرق تنفيذ مدربة تمتلك خبرة موثّقة في تركيب الواجهات الهيكلية، الأبواب المصفحة، وأنظمة الألمنيوم المعماري بأعلى معايير السلامة والجودة.',
    },
    {
      Ico: Icon.Shield,
      en: 'Financial Oversight',
      title: 'الرقابة والمتابعة المالية',
      desc: 'إدارة مالية شفافة تضمن التزام المشروع بالميزانية المعتمدة، مع تقارير دورية واضحة للمالك في كل مرحلة من مراحل التنفيذ بلا مفاجآت.',
    },
  ]

  return (
    <section className="page-section alt">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Structure · الهيكل التنظيمي</span></div>
          <h2 className="section-h2">هيكل إداري مصمم <span className="accent">لضمان التسليم في الموعد.</span></h2>
          <p className="section-lead">ثلاثة محاور تشغيلية تعمل بتناسق لضمان أن كل مشروع يُسلَّم في موعده وبالمواصفة المتفق عليها — دون استثناء.</p>
        </Reveal>
        <div className="why-grid">
          {ops.map((o, i) => (
            <Reveal key={o.en} className="why-block" delay={i + 1}>
              <div className="why-ico"><o.Ico width="22" height="22" /></div>
              <div className="why-en">{o.en}</div>
              <h3 className="why-title">{o.title}</h3>
              <p className="why-desc">{o.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Trust Wall & Certifications ─── */
function TrustWall() {
  const certs = [
    {
      label: 'رقم التسجيل الضريبي / الزكاة',
      value: '7050482236',
      detail: 'Tax & Zakat Registration · KSA',
      Ico: Icon.Award,
    },
    {
      label: 'منشأة معتمدة',
      value: 'مُسجَّلة ومُعتمدة رسمياً',
      detail: 'Registered & Certified Business Entity',
      Ico: Icon.Shield,
    },
    {
      label: 'الدفاع المدني',
      value: 'امتثال شامل ومُوثَّق',
      detail: 'Civil Defense · Full Compliance Certified',
      Ico: Icon.Check,
    },
    {
      label: 'رؤية 2030',
      value: 'شريك هندسي معتمد',
      detail: 'Vision 2030 Aligned Engineering Partner',
      Ico: Icon.Layers,
    },
  ]

  return (
    <section className="proof-section">
      <div className="container">
        <Reveal className="section-header centered">
          <div className="section-eyebrow"><span className="line"></span><span>Compliance · الامتثال</span></div>
          <h2 className="section-h2">نعمل تحت مظلة <span className="accent">الامتثال والموثوقية.</span></h2>
          <p className="section-lead">تسجيلات رسمية، اعتمادات حكومية، وامتثال كامل يضمن لمالك المشروع حماية حقوقه وجودة التنفيذ من اليوم الأول.</p>
        </Reveal>

        <div className="proof-grid">
          {certs.map((c, i) => (
            <Reveal key={c.label} className="proof-item" delay={i % 4 + 1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--thw-orange)' }}>
                <c.Ico width="16" height="16" />
                <span className="proof-scope">{c.label}</span>
              </div>
              <div className="proof-name">{c.value}</div>
              <div className="proof-detail">{c.detail}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Vision & Mission ─── */
function VisionMission() {
  return (
    <section className="page-section" id="vision-mission">
      <div className="container">
        <Reveal className="section-header centered">
          <div className="section-eyebrow"><span className="line"></span><span>Vision & Mission · الرؤية والمهمة</span></div>
          <h2 className="section-h2">ما الذي يقودنا <span className="accent">كل يوم؟</span></h2>
        </Reveal>

        <div className="vm-grid">
          <Reveal className="vm-card" delay={1}>
            <div className="vm-icon"><Icon.Compass width="24" height="24" /></div>
            <div className="vm-label">Vision · رؤيتنا</div>
            <h3 className="vm-title">
              أن نكون المورد والشريك التقني الأول لحلول الزجاج والأبواب المصفحة في الخليج.
            </h3>
            <p className="vm-desc">
              نسعى إلى بناء حضور إقليمي راسخ يجعل من ثوابت الإنشاء الاسم الأول الذي يتبادر إلى الذهن عند الحديث عن واجهات زجاجية متطورة وأنظمة أمان موثوقة — في عُمان، المملكة العربية السعودية، وبقية دول الخليج.
            </p>
          </Reveal>

          <Reveal className="vm-card featured" delay={2}>
            <div className="vm-icon"><Icon.Crane width="24" height="24" /></div>
            <div className="vm-label">Mission · مهمتنا</div>
            <h3 className="vm-title">
              تقديم حلول هندسية تدمج متانة الأمان بأناقة المعمار وفق المعايير الدولية.
            </h3>
            <p className="vm-desc">
              نلتزم بتقديم خدمة هندسية شاملة تبدأ بالاستشارة التقنية وتنتهي بالتسليم المُوثَّق، دون مساومة على الجودة أو التوقيت — لأن كل مشروع هو شراكة طويلة الأمد قبل أن يكون عقداً تجارياً.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─── About Page ─── */
export default function About() {
  return (
    <>
      <AboutHero />
      <Vision2030 />
      <OperationalCapability />
      <TrustWall />
      <VisionMission />
      <LeadForm
        eyebrow="تواصل مع الإدارة"
        title='هل تبحث عن مقاول يمكنك <span class="accent">الاعتماد عليه فعلياً؟</span>'
        subtitle="نحن لا نبيع وعوداً — نقدم جداول تنفيذ واضحة، وعروضاً فنية مفصّلة، ونتائج موثّقة على أرض الواقع."
        submitLabel="أرسل طلب التواصل للإدارة"
        responseTime="أقل من 24 ساعة عمل"
      />
    </>
  )
}
