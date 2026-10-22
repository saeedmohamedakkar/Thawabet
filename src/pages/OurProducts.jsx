import Icon from '../components/Icons'
import '../styles/products.css'

const products = [
    {
        number: '01',
        title: 'الخزائن البنكية وغرف الأمانات',
        subtitle: 'BANKING VAULTS & SAFE DEPOSIT BOXES',
        description:
            'حلول متخصصة لحماية الأصول والمقتنيات القيّمة، تجمع بين التكوينات الفولاذية المتينة وأنظمة التأمين والإغلاق، بما يناسب متطلبات المنشآت المالية.',
        image: '#',
        imageAlt: 'الخزائن البنكية وغرف الأمانات',
        features: ['خزائن بنكية', 'غرف أمانات', 'أنظمة تأمين'],
    },
    {
        number: '02',
        title: 'الأبواب المصفّحة والتقنية',
        subtitle: 'ARMORED & TECHNICAL DOORS',
        description:
            'أبواب مصممة لتلبية متطلبات الحماية والتحكم في الوصول، بخيارات متعددة تناسب الاستخدامات البنكية والتجارية والتقنية، مع الاهتمام بالدقة في التصنيع والتركيب.',
        image: '#',
        imageAlt: 'الأبواب المصفحة والتقنية',
        features: ['أبواب مصفّحة', 'أبواب تقنية', 'حلول حسب الاستخدام'],
    },
    {
        number: '03',
        title: 'الواجهات الزجاجية المعمارية',
        subtitle: 'ARCHITECTURAL GLASS FACADES',
        description:
            'واجهات معمارية تمنح المباني حضورًا عصريًا، مع حلول زجاجية وأنظمة تثبيت مدروسة تحقق التوازن بين المظهر الجمالي والأداء الوظيفي.',
        image: '#',
        imageAlt: 'الواجهات الزجاجية المعمارية',
        features: ['واجهات زجاجية', 'Curtain Wall', 'Skylights'],
    },
]


function ProductItem({ product, reverse }) {
  return (
    <article
      className={`product-item ${reverse ? 'product-item-reverse' : ''}`}
      id={`product-${product.number}`}
    >
      <div className="product-visual">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          decoding="async"
        />

        <span className="product-image-number">
          PRODUCT / {product.number}
        </span>

        <span className="product-image-corner" aria-hidden="true" />
      </div>

      <div className="product-content">
        <div className="product-overline">
          <span className="product-line" />
          <span>{product.subtitle}</span>
        </div>

        <span className="product-index">{product.number}</span>

        <h2>{product.title}</h2>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-features">
          {product.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        <a className="product-contact-link" href="/contact">
          <span>استفسر عن المنتج</span>
          <Icon.ArrowLeft width="16" height="16" />
        </a>
      </div>
    </article>
  )
}

 function OurProducts() {



    return (

        <>
 <main className="our-products">
      <section className="products-intro">
        <div className="products-intro-grid" aria-hidden="true" />

        <div className="products-intro-inner">
          <div className="products-eyebrow">
            <span className="product-line" />
            <span>حلولنا ومنتجاتنا</span>
          </div>

          <h1>
            حلول هندسية
            <br />
            <span>تُصنع لتدوم.</span>
          </h1>

          <div className="products-intro-bottom">
            <p>
              من أنظمة الحماية البنكية إلى الواجهات المعمارية،
              نقدم حلولًا تجمع بين جودة التنفيذ ودقة التفاصيل
              واحتياجات كل مشروع.
            </p>

            <a href="#product-01" className="products-discover">
              <span>اكتشف منتجاتنا</span>
              <Icon.ArrowLeft width="16" height="16" />
            </a>
          </div>

          <span className="products-intro-mark" aria-hidden="true">
            THAWABET
          </span>
        </div>
      </section>

      <section className="products-list">
        <div className="products-list-heading">
          <span>01 — 03</span>
          <p>منتجات مصممة لتلبية متطلبات مشروعك</p>
        </div>

        {products.map((product, index) => (
          <ProductItem
            key={product.number}
            product={product}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <section className="products-outro">
        <div>
          <span className="products-outro-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            لكل مشروع متطلباته.
            <br />
            <span>دعنا نناقش مشروعك.</span>
          </h2>
        </div>

        <a className="products-outro-button" href="/contact">
          <span>تواصل مع فريقنا</span>
          <Icon.ArrowLeft width="18" height="18" />
        </a>
      </section>
    </main>

          



        </>
    );
}

export default OurProducts;
