import { useEffect, useRef } from 'react'

/* Scroll-reveal wrapper using IntersectionObserver + existing .reveal CSS classes.
   Spreads all extra props onto the rendered element, so it works with Link, a, etc. */
export default function Reveal({ children, as: Tag = 'div', delay, className = '', style, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in'); io.disconnect() } },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-d={delay || undefined}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
