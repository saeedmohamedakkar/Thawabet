import Icon from './Icons'

/*
  Reusable lead form component.
  Props:
    eyebrow       - section eyebrow text (string)
    title         - CTA headline (string or JSX)
    subtitle      - body paragraph (string)
    serviceOptions - array of option strings for the service select
    submitLabel   - submit button text
    responseTime  - footer "avg response" text
    compact       - boolean, renders compact version without contact info
*/
export default function LeadForm({
  eyebrow = 'تواصل معنا',
  title,
  subtitle,
  serviceOptions = ['الخزائن البنكية وغرف الأمانات', 'الأبواب المصفّحة والتقنية', 'الواجهات الزجاجية المعمارية', 'حلٌّ متكامل · أكثر من خدمة'],
  submitLabel = 'اطلب عرض السعر المبدئي الآن',
  responseTime = 'أقل من 24 ساعة عمل',
  compact = false,
}) {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className={`cta-card lead ${compact ? 'compact' : ''}`}>
          <div className="cta-bg-grid"></div>
          <div className="cta-l">
            {eyebrow && <div className="section-eyebrow light"><span className="line"></span><span>{eyebrow}</span></div>}
            {title && (
              typeof title === 'string'
                ? <h2 className="cta-h" dangerouslySetInnerHTML={{ __html: title }} />
                : <h2 className="cta-h">{title}</h2>
            )}
            {subtitle && <p>{subtitle}</p>}
            {!compact && (
              <div className="cta-info" style={{ marginTop: 'clamp(20px,3vw,28px)' }}>
                <div className="ci"><Icon.Phone width="16" height="16" /><div><span>اتصال مباشر</span><b>+966 11 000 0000</b></div></div>
                <div className="ci"><Icon.Mail width="16" height="16" /><div><span>البريد المؤسّسي</span><b>projects@thawabet.sa</b></div></div>
                <div className="ci"><Icon.Pin width="16" height="16" /><div><span>المقرّان</span><b>الرياض · مسقط</b></div></div>
              </div>
            )}
            <div className="cta-trust" style={{ marginTop: 18 }}>
              <span className="lock">🔒</span>
              <span>بياناتك المؤسسيّة في أمان تام وتخضع لسياسة سرّية المعلومات الصارمة.</span>
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
                  <span>اسم الشركة / المكتب</span>
                  <input type="text" name="org" placeholder="بنك الراجحي · إدارة المرافق" required />
                </label>
              </div>
              <label className="lf-field">
                <span>رقم الجوّال</span>
                <input type="tel" name="phone" placeholder="+966 5X XXX XXXX" required />
              </label>
              <label className="lf-field">
                <span>نوع الخدمة المطلوبة</span>
                <select  name="service" required defaultValue="">
                  <option value="" disabled>اختر الخدمة</option>
                  {serviceOptions.map((o) => <option className='leadFormSelection'  key={o}>{o}</option>)}
                </select>
              </label>
              <button className="btn btn-primary btn-lg lf-submit" type="submit">
                <span>{submitLabel}</span>
                <Icon.ArrowLeft className="arrow" width="16" height="16" />
              </button>
              <div className="lf-foot">
                <span>متوسّط الردّ</span><b>{responseTime}</b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
