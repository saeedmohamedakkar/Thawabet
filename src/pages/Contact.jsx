import Icon from '../components/Icons'
import Reveal from '../components/Reveal'

/* ─── Hero ─── */
function ContactHero() {
  return (
    <section className="page-hero ph-contact" aria-label="تواصل معنا">
      <div className="hero-grid"></div>
      <div className="page-hero-glow"></div>

      <div className="hero-rail left"><span className="tick"></span><span>CONTACT · INQUIRY · BOQ</span></div>
      <div className="hero-rail right"><span>RIYADH · MUSCAT</span><span className="tick"></span></div>

      <div className="hero-top">
        <div className="hero-eyebrow">
          <span>خطوتك الأولى نحو تنفيذ هندسي دقيق.</span>
          <span className="pulse"></span>
        </div>
      </div>

      <div className="hero-main">
        <Reveal delay={1}>
          <div className="page-hero-pre">
            <span className="line"></span>
            <span>Contact Us · تواصل معنا</span>
          </div>
        </Reveal>
        <Reveal as="h1" delay={2} className="hero-headline">
          دعنا نحول مخططاتك إلى واقع.. <span className="accent">بدون تأخير أو تجاوز للميزانية.</span>
        </Reveal>
        <Reveal as="p" delay={3} className="hero-subline">
          سواء كنت تبحث عن تسعير دقيق لجدول الكميات (BOQ)، أو تحتاج استشارة فنية حول مطابقة واجهاتك واشتراطات الدفاع المدني، فريقنا الهندسي جاهز.
        </Reveal>
      </div>

      <Reveal delay={4} className="hero-bottom">
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="lab">متوسط وقت الرد</div>
            <div className="num">24<span className="plus">hr</span></div>
          </div>
          <div className="hero-stat">
            <div className="lab">استشارة فنية مجانية</div>
            <div className="num">100<span className="plus">%</span></div>
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

/* ─── Primary Lead Form ─── */
function ContactForm() {
  return (
    <section className="cta" id="contact-form">
      <div className="container">
        <div className="cta-card lead">
          <div className="cta-bg-grid"></div>

          <div className="cta-l">
            <div className="section-eyebrow light"><span className="line"></span><span>طلب العرض الفني</span></div>
            <h2 className="cta-h">
              أرسل متطلبات مشروعك، <span className="accent">وسنرد خلال 24 ساعة.</span>
            </h2>
            <p>يدرس فريق التسعير الهندسي المتطلبات ويراجع المخططات، ثم يستجيب بعرض فني ومالي ملزم وواضح.</p>

            <div className="cta-info" style={{ marginTop: 'clamp(20px,3vw,28px)' }}>
              <div className="ci">
                <Icon.Phone width="16" height="16" />
                <div><span>السعودية — الرياض — طريق الخرج</span><b>0554442125</b></div>
              </div>
              <div className="ci">
                <Icon.Phone width="16" height="16" />
                <div><span>سلطنة عُمان — مسقط — المعبيلة الصناعية</span><b>71111956</b></div>
              </div>
            </div>

            <div className="cta-trust" style={{ marginTop: 18 }}>
              <span className="lock">🔒</span>
              <span>بياناتك ومخططاتك الهندسية تُعامل بسرية تامة ولا تُشارك مع أي طرف ثالث.</span>
            </div>
          </div>

          <div className="cta-r">
            <form className="leadform" onSubmit={(e) => e.preventDefault()}>
              <div className="lf-row">
                <label className="lf-field">
                  <span>الاسم الكامل</span>
                  <input type="text" name="name" placeholder="م. خالد العتيبي" required />
                </label>
                <label className="lf-field">
                  <span>المسمى الوظيفي</span>
                  <input type="text" name="job_title" placeholder="مدير المشاريع" required />
                </label>
              </div>
              <label className="lf-field">
                <span>رقم الجوال / واتساب</span>
                <input type="tel" name="phone" placeholder="+966 5X XXX XXXX" required />
              </label>
              <label className="lf-field">
                <span>نوع المشروع</span>
                <select name="project_type" defaultValue="" required>
                  <option value="" disabled>اختر نوع المشروع</option>
                  <option>مبنى تجاري متعدد الاستخدامات</option>
                  <option>مجمع مصرفي أو مالي</option>
                  <option>مشروع سكني فاخر</option>
                  <option>مبنى حكومي أو مؤسسي</option>
                  <option>مشروع صناعي أو لوجستي</option>
                  <option>تجديد وإعادة تأهيل</option>
                  <option>غير ذلك</option>
                </select>
              </label>
              <label className="lf-field">
                <span>رفع المخططات (اختياري)</span>
                <div className="lf-upload">
                  <Icon.Layers width="18" height="18" />
                  <span>اسحب الملف هنا أو انقر للرفع · PDF · DWG · JPG</span>
                  <input type="file" accept=".pdf,.dwg,.dxf,.jpg,.png" />
                </div>
              </label>
              <label className="lf-field">
                <span>ملاحظات إضافية</span>
                <textarea
                  className="lf-textarea"
                  name="notes"
                  rows="3"
                  placeholder="اذكر أي متطلبات خاصة، موعد التسليم المطلوب، أو تفاصيل إضافية تساعد فريقنا..."
                ></textarea>
              </label>
              <button className="btn btn-primary btn-lg lf-submit" type="submit">
                <span>اطلب العرض الفني والمالي الآن</span>
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

/* ─── Process Breakdown ─── */
function ContactProcess() {
  const steps = [
    {
      n: '01',
      en: 'Engineering Review',
      title: 'التقييم الهندسي',
      desc: 'فريق التسعير يدرس المتطلبات ويراجع المخططات بعناية هندسية دقيقة، ويُحدد احتياجات المشروع الفعلية.',
      Ico: Icon.Compass,
    },
    {
      n: '02',
      en: 'Technical Contact',
      title: 'التواصل الفني',
      desc: 'يتواصل معك مدير المشاريع لمناقشة التفاصيل وترتيب زيارة ميدانية إذا لزم الأمر، ويُجيب على أي استفسارات تقنية.',
      Ico: Icon.Phone,
    },
    {
      n: '03',
      en: 'Official Proposal',
      title: 'العرض الرسمي',
      desc: 'نرسل لك عرضاً فنياً ومالياً ملزماً وواضحاً يتضمن جدول الكميات (BOQ)، الجدول الزمني، وشروط الضمان.',
      Ico: Icon.Award,
    },
  ]

  return (
    <section className="page-section alt" id="process">
      <div className="container">
        <Reveal className="section-header centered">
          <div className="section-eyebrow"><span className="line"></span><span>Process · المسار</span></div>
          <h2 className="section-h2">ماذا يحدث بعد <span className="accent">إرسال طلبك؟</span></h2>
          <p className="section-lead">عملية واضحة ومحددة من لحظة إرسال الطلب حتى استلام العرض الرسمي — بلا تعقيد أو تأخير.</p>
        </Reveal>

        <div className="contact-process">
          {steps.map((s, i) => (
            <Reveal key={s.n} className="cp-step" delay={i + 1}>
              <div className="cp-step-head">
                <span className="cp-step-n">{s.n}</span>
                <div className="cp-step-ico"><s.Ico width="20" height="20" /></div>
              </div>
              <div className="cp-step-en">{s.en}</div>
              <h3 className="cp-step-title">{s.title}</h3>
              <p className="cp-step-desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Direct Contact Channels ─── */
function ContactChannels() {
  const offices = [
    {
      country: 'المملكة العربية السعودية',
      en: 'Saudi Arabia · KSA',
      city: 'الرياض',
      address: 'طريق الخرج',
      phone: '0554442125',
    },
    {
      country: 'سلطنة عُمان',
      en: 'Sultanate of Oman',
      city: 'مسقط',
      address: 'المعبيلة الصناعية',
      phone: '71111956',
    },
  ]

  return (
    <section className="page-section" id="offices">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-eyebrow"><span className="line"></span><span>Offices · مكاتبنا</span></div>
          <h2 className="section-h2">هل تفضل التحدث مباشرة <span className="accent">مع الإدارة؟</span></h2>
          <p className="section-lead">فريقنا في الرياض ومسقط جاهز للإجابة على استفساراتك وترتيب استشارة مباشرة في أقرب وقت ممكن.</p>
        </Reveal>

        <div className="channels-grid">
          {offices.map((o, i) => (
            <Reveal key={o.country} className="channel-card" delay={i + 1}>
              <div className="ch-header">
                <div className="ch-flag"><Icon.Pin width="18" height="18" /></div>
                <div>
                  <div className="ch-country">{o.country}</div>
                  <div className="ch-en">{o.en}</div>
                </div>
              </div>

              <div className="ch-rows">
                <div className="ch-row">
                  <Icon.Pin width="14" height="14" />
                  <div>
                    <span className="ch-label">الموقع</span>
                    <b className="ch-val">{o.city} — {o.address}</b>
                  </div>
                </div>
                <div className="ch-row">
                  <Icon.Phone width="14" height="14" />
                  <div>
                    <span className="ch-label">الجوال / واتساب</span>
                    <b className="ch-val" style={{ direction: 'ltr', display: 'block' }}>{o.phone}</b>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${o.phone}`}
                className="btn btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Icon.Phone width="14" height="14" />
                <span>اتصال مباشر</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Page ─── */
export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactProcess />
      <ContactChannels />
    </>
  )
}
