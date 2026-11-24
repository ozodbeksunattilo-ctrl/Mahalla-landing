import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import {
  Menu, X, Sun, Moon, ArrowRight, Camera, ShieldCheck, Vote, Trophy, UserCheck, CheckCircle2,
  MessageCircle, CalendarHeart, Megaphone, BellRing, Lock, KeyRound, EyeOff, Smartphone, Monitor,
  Plus, Minus, Send, Clock, Undo2, Flame, MapPin, Users, Lightbulb, Trash2, Droplets, Route,
  Hourglass, Building2, Wrench, PartyPopper, Home, ListChecks, ClipboardCheck, ScrollText, Globe,
} from 'lucide-react'
import { dictionaries, languages, LangContext, useLang, fmt } from './i18n'

/* ---------- helpers ---------- */
const tones = {
  b: 'bg-brand-l text-brand',
  s: 'bg-sun-l text-sun-ink',
  l: 'bg-leaf-l text-leaf',
  r: 'bg-red-l text-red',
}

const Pill = ({ tone = 'b', icon: Icon, children, className = '' }) => (
  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[.72rem] font-bold ${tones[tone]} ${className}`}>
    {Icon && <Icon size={12} strokeWidth={2.6} />}{children}
  </span>
)

const Reveal = ({ children, delay = 0, className = '', y = 28 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

const Eyebrow = ({ children, icon: Icon }) => (
  <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-l px-3.5 py-1.5 text-[.78rem] font-bold uppercase tracking-[.1em] text-brand">
    {Icon && <Icon size={14} strokeWidth={2.4} />}{children}
  </span>
)

const H2 = ({ children }) => <h2 className="mb-3.5 text-[clamp(1.9rem,4vw,2.8rem)] font-bold">{children}</h2>
const Lead = ({ children }) => <p className="max-w-[620px] text-[1.08rem] text-muted">{children}</p>

const Section = ({ id, alt, className = '', children }) => (
  <section id={id} className={`py-16 md:py-24 ${alt ? 'border-y border-line bg-surface' : ''} ${className}`}>
    <div className="mx-auto max-w-[1120px] px-5">{children}</div>
  </section>
)

const btnBase = 'cursor-pointer items-center justify-center gap-2 rounded-full border-2 font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none'
const btn = `${btnBase} inline-flex min-h-[52px] px-7 text-base`
const btnP = `${btn} border-brand bg-brand text-on-brand shadow-[0_8px_24px_-8px_var(--brand)] hover:bg-brand-d hover:border-brand-d`
const btnO = `${btn} border-brand text-brand hover:bg-brand-l`

function Counter({ to, suffix = '' }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let raf, start
    const tick = (t) => {
      start ??= t
      const p = Math.min((t - start) / 1400, 1)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to])
  return <>{n}{suffix}</>
}

/* ---------- brand ---------- */
function Brand({ size = 'md' }) {
  const { t } = useLang()
  const big = size === 'lg'
  return (
    <span className="flex items-center gap-2.5">
      <span className={`grid flex-none place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-line ${big ? 'size-16 p-1.5' : 'size-11 p-1 sm:size-12'}`}>
        <img src="/logo-mark.png" alt="" width="512" height="512" className="size-full object-contain" />
      </span>
      <span className="leading-none">
        <b className={`block font-serif font-bold tracking-tight text-brand ${big ? 'text-3xl' : 'text-[1.35rem]'}`}>Mahalladosh</b>
        {big && <span className="mt-1.5 block text-sm font-medium text-muted">{t.footer.slogan}</span>}
      </span>
    </span>
  )
}

/* ---------- header ---------- */
const navHrefs = ['#qanday', '#imkoniyat', '#demo', '#rollar', '#faq']

function LangSwitch({ className = '', fill = false }) {
  const { lang, setLang, t } = useLang()
  return (
    <div role="group" aria-label={t.nav.lang} className={`items-center gap-0.5 rounded-full border border-line bg-surface p-1 ${className}`}>
      <Globe size={15} className="mx-1.5 text-muted" aria-hidden="true" />
      {languages.map((l) => (
        <button key={l.code} onClick={() => setLang(l.code)} aria-pressed={lang === l.code} title={l.label} lang={l.html}
          className={`min-h-9 cursor-pointer rounded-full px-3 text-[.78rem] font-bold ${fill ? 'flex-1' : 'min-w-10'} transition-colors ${lang === l.code ? 'bg-brand text-on-brand' : 'text-muted hover:bg-brand-l hover:text-brand'}`}>
          {l.short}
        </button>
      ))}
    </div>
  )
}

function Header() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur-lg">
      <motion.div style={{ scaleX }} className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gradient-to-r from-brand via-sun to-leaf" />
      <nav aria-label={t.nav.main} className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-3 px-4 sm:px-5">
        <a href="#top" aria-label={t.logoAlt} className="flex-none rounded-2xl">
          <Brand />
        </a>
        <ul className="hidden gap-5 xl:flex 2xl:gap-7">
          {navHrefs.map((href, i) => (
            <li key={href}><a href={href} className="whitespace-nowrap text-[.92rem] font-medium text-muted transition-colors hover:text-brand">{t.nav.links[i]}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LangSwitch className="hidden sm:flex" />
          <button onClick={() => setDark(!dark)} aria-label={t.nav.theme} className="grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-brand-l">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#aloqa" className={`${btnBase} hidden min-h-11 border-sun bg-sun px-5 text-[.92rem] text-[#1d1500] shadow-[0_8px_22px_-8px_var(--sun)] hover:brightness-105 md:inline-flex`}>
            <Send size={16} />{t.nav.demo}
          </a>
          <button onClick={() => setOpen(!open)} aria-label={t.nav.menu} aria-expanded={open} className="grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface xl:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-line bg-bg xl:hidden">
            <ul className="mx-auto grid max-w-[1120px] gap-1 px-5 py-3">
              {navHrefs.map((href, i) => (
                <li key={href}><a href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-medium hover:bg-brand-l">{t.nav.links[i]}</a></li>
              ))}
              <li className="sm:hidden"><LangSwitch fill className="mt-2 flex" /></li>
              <li><a href="#aloqa" onClick={() => setOpen(false)} className={`${btn} mt-2 w-full border-sun bg-sun text-[#1d1500]`}><Send size={18} />{t.nav.demo}</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------- hero ---------- */
function Phone() {
  const { t } = useLang()
  const p = t.phone
  return (
    <div className="relative mx-auto w-[300px]" aria-hidden="true">
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="rotate-[2.5deg] rounded-[42px] border-[9px] border-ink bg-bg p-4 pb-4 shadow-soft">
        <div className="mb-3 flex items-center justify-between text-[.72rem] font-semibold">
          <span>9:41</span><span className="inline-flex items-center gap-1"><MapPin size={11} />{p.place}</span>
        </div>
        <h4 className="mb-2 font-serif text-[1.05rem] font-bold">{p.month}</h4>
        <div className="mb-2.5 rounded-2xl border border-line bg-surface p-3 text-[.8rem]">
          <Pill tone="s" icon={Flame}>{p.voting}</Pill>
          <strong className="mb-0.5 mt-2 block text-[.9rem]">{p.issue}</strong>
          {p.where}
          <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-line">
            <motion.i initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 1.4, delay: 0.5 }} className="block h-full rounded-full bg-brand" />
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <span className="font-semibold">{p.votes}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand px-3.5 py-1.5 text-[.74rem] font-bold text-on-brand"><Vote size={12} />{p.vote}</span>
          </div>
        </div>
        <div className="mb-2.5 rounded-2xl border border-line bg-surface p-3 text-[.8rem]">
          <Pill tone="l" icon={Wrench}>{p.progress}</Pill>
          <strong className="mb-0.5 mt-2 block text-[.9rem]">{p.issue2}</strong>
          {p.resp}
        </div>
        <div className="mt-1.5 flex justify-around border-t border-line pt-2 text-[.6rem] text-muted">
          {[Home, ListChecks, CalendarHeart, MessageCircle].map((I, i) => (
            <span key={i} className={`flex flex-col items-center gap-0.5 ${i === 0 ? 'font-bold text-brand' : ''}`}><I size={15} />{p.tabs[i]}</span>
          ))}
        </div>
      </motion.div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute -left-2 bottom-24 flex -rotate-[4deg] items-center gap-2 rounded-2xl border border-line bg-surface px-3.5 py-2.5 text-[.8rem] font-semibold shadow-soft sm:-left-12">
        <CheckCircle2 size={18} className="text-leaf" />{p.f1}
      </motion.div>
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute -right-2 top-16 flex rotate-[3deg] items-center gap-2 rounded-2xl border border-line bg-surface px-3.5 py-2.5 text-[.8rem] font-semibold shadow-soft sm:-right-10">
        <BellRing size={18} className="text-sun" />{p.f2}
      </motion.div>
    </div>
  )
}

const statIcons = [Vote, Trophy, ScrollText]

function Hero() {
  const { t, lang } = useLang()
  const h = t.hero
  return (
    <section className="relative overflow-hidden pb-24 pt-14 md:pt-20">
      <div aria-hidden="true" className="dots absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -right-32 -top-24 -z-10 size-[560px] rounded-full bg-[radial-gradient(circle,var(--sun-l),transparent_70%)]" />
      <div aria-hidden="true" className="absolute -left-40 top-64 -z-10 size-[460px] rounded-full bg-[radial-gradient(circle,var(--brand-l),transparent_70%)]" />
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <Eyebrow icon={Users}>{h.eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mb-5 text-[clamp(2.3rem,6vw,4.1rem)] font-bold">
            {h.a} <span className="shine">{h.b}</span> {h.c}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mb-8 max-w-[520px] text-[1.18rem] text-muted">{h.lead}</motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3">
            <a href="#aloqa" className={btnP}>{h.cta1} <ArrowRight size={18} /></a>
            <a href="#demo" className={btnO}><Vote size={18} />{h.cta2}</a>
          </motion.div>
          <div className="mt-11 flex flex-wrap gap-4">
            {h.stats.map((s, i) => {
              const I = statIcons[i]
              return (
                <div key={s.d} className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-sm">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand-l text-brand"><I size={20} /></span>
                  <div><b className="block font-serif text-xl leading-tight"><Counter key={lang} to={s.n} suffix={s.s} /></b><span className="text-[.8rem] text-muted">{s.d}</span></div>
                </div>
              )
            })}
          </div>
        </div>
        <Phone />
      </div>
    </section>
  )
}

/* ---------- steps (interactive) ---------- */
const stepMeta = [[Camera, 'b'], [ShieldCheck, 's'], [Vote, 'b'], [Trophy, 's'], [UserCheck, 'l'], [CheckCircle2, 'l']]

function Steps() {
  const { t } = useLang()
  const [i, setI] = useState(0)
  const [Icon, tone] = stepMeta[i]
  const s = t.steps.list[i]
  return (
    <Section id="qanday">
      <Reveal>
        <Eyebrow icon={ListChecks}>{t.steps.eyebrow}</Eyebrow>
        <H2>{t.steps.title}</H2>
        <Lead>{t.steps.lead}</Lead>
      </Reveal>
      <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div role="tablist" aria-label={t.steps.aria} className="grid gap-2.5">
          {t.steps.list.map((st, n) => {
            const [I] = stepMeta[n]
            const active = n === i
            return (
              <button key={n} role="tab" aria-selected={active} onClick={() => setI(n)}
                className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 text-left transition-all ${active ? 'border-brand bg-brand text-on-brand shadow-soft' : 'border-line bg-surface hover:border-brand hover:bg-brand-l'}`}>
                <span className={`grid size-11 flex-none place-items-center rounded-xl ${active ? 'bg-white/20' : 'bg-brand-l text-brand'}`}><I size={22} /></span>
                <span className="flex-1"><span className={`block text-[.72rem] font-bold uppercase tracking-wider ${active ? 'opacity-80' : 'text-muted'}`}>{fmt(t.steps.label, { n: n + 1 })}</span><b className="font-semibold">{st.title}</b></span>
                <ArrowRight size={18} className={active ? '' : 'opacity-30'} />
              </button>
            )
          })}
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-soft">
          <div aria-hidden="true" className="absolute -right-10 -top-10 size-44 rounded-full bg-brand-l" />
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }} className="relative">
              <span className={`mb-5 grid size-16 place-items-center rounded-2xl ${tones[tone]}`}><Icon size={32} /></span>
              <Pill tone={tone}>{fmt(t.steps.status, { s: s.status })}</Pill>
              <h3 className="mb-3 mt-3 text-2xl font-bold">{s.title}</h3>
              <p className="text-muted">{s.desc}</p>
              <div className="mt-6 flex gap-1.5">
                {stepMeta.map((_, n) => <i key={n} className={`h-1.5 flex-1 rounded-full transition-colors ${n <= i ? 'bg-brand' : 'bg-line'}`} />)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}

/* ---------- features ---------- */
const featMeta = [[Camera, 'b'], [Vote, 's'], [MessageCircle, 'r'], [CalendarHeart, 'l'], [Megaphone, 'b'], [BellRing, 's']]

function Features() {
  const { t } = useLang()
  return (
    <Section id="imkoniyat" alt>
      <Reveal><Eyebrow icon={Lightbulb}>{t.features.eyebrow}</Eyebrow><H2>{t.features.title}</H2></Reveal>
      <div className="mt-11 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {t.features.list.map((f, n) => {
          const [I, tone] = featMeta[n]
          return (
            <Reveal key={n} delay={n * 0.06}>
              <motion.article whileHover={{ y: -6 }} className="group h-full rounded-3xl border border-line bg-bg p-7 transition-shadow hover:shadow-soft">
                <div className={`mb-5 grid size-14 place-items-center rounded-2xl transition-transform group-hover:rotate-6 group-hover:scale-110 ${tones[tone]}`}><I size={28} /></div>
                <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
                <p className="text-[.96rem] text-muted">{f.desc}</p>
              </motion.article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

/* ---------- interactive voting demo ---------- */
const issueMeta = [
  { id: 1, icon: Lightbulb, base: 85 },
  { id: 2, icon: Trash2, base: 61 },
  { id: 3, icon: Droplets, base: 43 },
  { id: 4, icon: Route, base: 27 },
]
const LIMIT = 3
const pointIcons = [Vote, Trophy, Hourglass]

function daysLeft() {
  const d = new Date()
  const end = new Date(d.getFullYear(), d.getMonth() + 1, 1)
  return Math.max(1, Math.ceil((end - d) / 86400000))
}

function VoteDemo() {
  const { t } = useLang()
  const dm = t.demo
  const [voted, setVoted] = useState(() => new Set())
  const [msgKey, setMsgKey] = useState('')
  const left = LIMIT - voted.size
  const list = useMemo(
    () => issueMeta.map((x, n) => ({ ...x, ...dm.issues[n], count: x.base + (voted.has(x.id) ? 1 : 0) })).sort((a, b) => b.count - a.count || a.id - b.id),
    [voted, dm],
  )
  const max = Math.max(...list.map((x) => x.count))

  const toggle = (id) => {
    const next = new Set(voted)
    if (next.has(id)) { next.delete(id); setMsgKey('back') }
    else if (next.size >= LIMIT) { setMsgKey('limit'); return }
    else { next.add(id); setMsgKey('ok') }
    setVoted(next)
  }

  return (
    <Section id="demo">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal className="min-w-0">
          <Eyebrow icon={Vote}>{dm.eyebrow}</Eyebrow>
          <H2>{dm.title}</H2>
          <Lead>{dm.lead}</Lead>
          <ul className="mt-7 grid gap-4">
            {dm.points.map((pt, n) => {
              const I = pointIcons[n]
              return (
                <li key={n} className="flex gap-4">
                  <span className="grid size-11 flex-none place-items-center rounded-xl bg-brand text-on-brand"><I size={20} /></span>
                  <div><b className="block">{pt.t}</b><p className="text-[.94rem] text-muted">{pt.p}</p></div>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <div className="rounded-3xl border border-line bg-surface p-4 shadow-soft sm:p-7" aria-label={dm.aria}>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <b className="block font-serif text-xl">{dm.card}</b>
                <span className="inline-flex items-center gap-1 text-[.82rem] text-muted"><Clock size={13} />{fmt(dm.closes, { n: daysLeft() })}</span>
              </div>
              <div className="flex gap-1.5" aria-label={fmt(dm.left, { n: left })}>
                {Array.from({ length: LIMIT }).map((_, n) => (
                  <motion.span key={n} animate={{ scale: n < left ? 1 : 0.8 }} className={`grid size-10 place-items-center rounded-full border-2 ${n < left ? 'border-brand bg-brand text-on-brand' : 'border-dashed border-line text-muted'}`}>
                    <Vote size={18} />
                  </motion.span>
                ))}
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-2.5">
              {list.map((x, rank) => {
                const on = voted.has(x.id)
                const I = x.icon
                return (
                  <motion.li layout key={x.id} transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className={`rounded-2xl border p-4 ${on ? 'border-brand bg-brand-l' : 'border-line bg-bg'}`}>
                    <div className="flex items-center gap-3">
                      <span className={`grid size-11 flex-none place-items-center rounded-xl ${rank === 0 ? 'bg-sun-l text-sun-ink' : 'bg-surface text-brand'}`}>
                        {rank === 0 ? <Trophy size={22} /> : <I size={22} />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <b className="block truncate text-[.98rem]">{x.name}</b>
                        <span className="inline-flex items-center gap-1 text-[.8rem] text-muted"><MapPin size={12} />{x.place}</span>
                      </div>
                      <button onClick={() => toggle(x.id)} aria-pressed={on}
                        className={`inline-flex min-h-11 flex-none cursor-pointer items-center gap-1.5 rounded-full px-4 text-[.85rem] max-[430px]:size-11 max-[430px]:justify-center max-[430px]:px-0 font-bold transition-colors ${on ? 'border-2 border-brand text-brand hover:bg-surface' : 'bg-brand text-on-brand hover:bg-brand-d'}`}>
                        {on ? <Undo2 size={16} /> : <Vote size={16} />}<span className="max-[430px]:sr-only">{on ? dm.withdraw : dm.vote}</span>
                      </button>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-line">
                        <motion.i className={`block h-full rounded-full ${rank === 0 ? 'bg-sun' : 'bg-brand'}`} animate={{ width: `${(x.count / max) * 100}%` }} transition={{ duration: 0.5 }} />
                      </div>
                      <b className="w-9 text-right text-[.9rem] tabular-nums">{x.count}</b>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
            <p role="status" aria-live="polite" className="mt-4 min-h-6 text-center text-[.88rem] font-medium text-brand">
              {msgKey ? dm[msgKey] : fmt(dm.status, { n: left })}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* ---------- statuses ---------- */
const statusMeta = [['s', Hourglass], ['r', Wrench], ['b', Flame], ['s', Trophy], ['l', Wrench], ['b', Building2], ['l', CheckCircle2]]

function Statuses() {
  const { t } = useLang()
  return (
    <Section alt>
      <Reveal>
        <Eyebrow icon={ScrollText}>{t.statuses.eyebrow}</Eyebrow>
        <H2>{t.statuses.title}</H2>
        <Lead>{t.statuses.lead}</Lead>
      </Reveal>
      <div className="mt-9 flex flex-wrap gap-3">
        {t.statuses.list.map((label, n) => {
          const [tone, I] = statusMeta[n]
          return (
            <motion.span key={n} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: n * 0.07 }} whileHover={{ scale: 1.06, rotate: -1.5 }}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[.92rem] font-bold ${tones[tone]}`}>
              <I size={17} />{label}
            </motion.span>
          )
        })}
      </div>
    </Section>
  )
}

/* ---------- roles (tabs) ---------- */
const roleMeta = {
  aholi: { icon: Smartphone, tone: 'bg-brand text-on-brand', icons: [Camera, Vote, MessageCircle, CalendarHeart, BellRing, MapPin] },
  admin: { icon: Monitor, tone: 'bg-sun text-[#1d1500]', icons: [UserCheck, ClipboardCheck, Trophy, CalendarHeart, Megaphone, ScrollText] },
}
const roleKeys = ['aholi', 'admin']

function Roles() {
  const { t } = useLang()
  const [r, setR] = useState('aholi')
  const meta = roleMeta[r]
  return (
    <Section id="rollar">
      <Reveal>
        <Eyebrow icon={Users}>{t.roles.eyebrow}</Eyebrow>
        <H2>{t.roles.title}</H2>
      </Reveal>
      <div role="tablist" className="mt-8 inline-flex max-w-full flex-wrap rounded-3xl border border-line bg-surface p-1.5 sm:rounded-full">
        {roleKeys.map((k, n) => {
          const V = roleMeta[k].icon
          return (
            <button key={k} role="tab" aria-selected={r === k} onClick={() => setR(k)}
              className={`relative inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-5 text-[.92rem] font-semibold transition-colors ${r === k ? 'text-on-brand' : 'text-muted hover:text-ink'}`}>
              {r === k && <motion.span layoutId="roletab" className="absolute inset-0 rounded-full bg-brand" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className="relative flex items-center gap-2"><V size={17} />{t.roles.tabs[n]}</span>
            </button>
          )
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={r} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
          className="mt-6 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {t.roles[r].map((it, n) => {
            const I = meta.icons[n]
            return (
              <motion.div key={n} whileHover={{ y: -4 }} className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
                <span className={`grid size-12 flex-none place-items-center rounded-xl ${meta.tone}`}><I size={23} /></span>
                <div><b className="block">{it.t}</b><span className="text-[.9rem] text-muted">{it.p}</span></div>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}

/* ---------- security ---------- */
const secIcons = [Lock, KeyRound, EyeOff]

function Security() {
  const { t } = useLang()
  return (
    <Section alt>
      <Reveal><Eyebrow icon={ShieldCheck}>{t.security.eyebrow}</Eyebrow><H2>{t.security.title}</H2></Reveal>
      <div className="mt-11 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {t.security.list.map((s, n) => {
          const I = secIcons[n]
          return (
            <Reveal key={n} delay={n * 0.1}>
              <article className="h-full rounded-3xl border border-line bg-bg p-7">
                <span className="mb-5 grid size-14 place-items-center rounded-2xl bg-leaf-l text-leaf"><I size={28} /></span>
                <h3 className="mb-2 text-xl font-bold">{s.t}</h3><p className="text-[.96rem] text-muted">{s.p}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

/* ---------- faq ---------- */
function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState(0)
  return (
    <Section id="faq">
      <Reveal><Eyebrow icon={MessageCircle}>{t.faq.eyebrow}</Eyebrow><H2>{t.faq.title}</H2></Reveal>
      <div className="mt-7 grid max-w-[780px] gap-3">
        {t.faq.list.map(({ q, a }, n) => {
          const isOpen = open === n
          return (
            <div key={n} className={`rounded-2xl border bg-surface transition-colors ${isOpen ? 'border-brand' : 'border-line'}`}>
              <button onClick={() => setOpen(isOpen ? -1 : n)} aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left text-[1.04rem] font-semibold">
                {q}
                <span className={`grid size-8 flex-none place-items-center rounded-full ${isOpen ? 'bg-brand text-on-brand' : 'bg-brand-l text-brand'}`}>{isOpen ? <Minus size={16} /> : <Plus size={16} />}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

/* ---------- contact ---------- */
const field = 'mt-1 min-h-[50px] w-full rounded-xl border-2 bg-white px-4 text-[#0f1b3d] placeholder:text-slate-400'

function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const next = {}
    for (const k of ['n', 'p', 'm']) if (!String(data.get(k)).trim()) next[k] = true
    setErrors(next)
    if (!Object.keys(next).length) setSent(true)
  }
  const border = (k) => (errors[k] ? 'border-red' : 'border-transparent')

  return (
    <Section id="aloqa" className="!pt-0">
      <Reveal>
        <div className="relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[32px] bg-brand p-6 text-on-brand md:grid-cols-2 md:p-14">
          <div aria-hidden="true" className="absolute -right-20 -top-20 size-72 rounded-full bg-sun/30 blur-2xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -left-16 size-72 rounded-full bg-leaf/30 blur-2xl" />
          <div className="relative">
            <h2 className="mb-3 text-[clamp(1.9rem,4vw,2.8rem)] font-bold">{c.title}</h2>
            <p className="opacity-90">{c.lead}</p>
          </div>
          <form onSubmit={submit} noValidate className="relative grid gap-3">
            <label className="text-[.85rem] font-semibold">{c.name}<input name="n" autoComplete="name" placeholder={c.namePh} className={`${field} ${border('n')}`} /></label>
            <label className="text-[.85rem] font-semibold">{c.phone}<input name="p" type="tel" autoComplete="tel" placeholder={c.phonePh} className={`${field} ${border('p')}`} /></label>
            <label className="text-[.85rem] font-semibold">{c.mahalla}<input name="m" placeholder={c.mahallaPh} className={`${field} ${border('m')}`} /></label>
            <label className="text-[.85rem] font-semibold">{c.who}
              <select name="r" className={`${field} border-transparent`}>
                {c.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <button type="submit" disabled={sent} className={`${btn} mt-1 w-full border-sun bg-sun text-[#1d1500] hover:brightness-110 disabled:opacity-60`}>
              <Send size={18} />{c.submit}
            </button>
            <AnimatePresence>
              {sent && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} role="status" className="flex items-center gap-2 rounded-xl bg-white p-3.5 font-semibold text-[#0d2260]">
                  <CheckCircle2 size={20} className="text-leaf" />{c.thanks}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </Reveal>
    </Section>
  )
}

/* ---------- mobil: pastda qotib turuvchi tugma ---------- */
function StickyCta() {
  const { t } = useLang()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById('aloqa')
      const nearForm = form && form.getBoundingClientRect().top < window.innerHeight
      setShow(window.scrollY > 600 && !nearForm)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 90, opacity: 0 }}
          className="fixed inset-x-0 bottom-0 z-30 p-4 pt-0 md:hidden">
          <a href="#aloqa" className={`${btn} w-full border-sun bg-sun text-[#1d1500] shadow-soft`}><Send size={18} />{t.nav.demo}</a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ---------- kirish animatsiyasi ---------- */
const WORD = 'Mahalladosh'

function Splash({ onDone }) {
  const { t } = useLang()
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(onDone, reduce ? 400 : 2600)
    return () => { clearTimeout(timer); document.body.style.overflow = prev }
  }, [onDone])

  return (
    <motion.div
      role="presentation"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      onClick={onDone}
      className="fixed inset-0 z-[100] grid cursor-pointer place-items-center overflow-hidden bg-bg"
    >
      <div aria-hidden="true" className="dots absolute inset-0 opacity-50 [mask-image:radial-gradient(circle,black,transparent_70%)]" />
      <motion.div aria-hidden="true" className="absolute size-[480px] rounded-full bg-[radial-gradient(circle,var(--sun-l),transparent_70%)]"
        initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1.2, opacity: 1 }} transition={{ duration: 1.6, ease: 'easeOut' }} />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="relative grid size-32 place-items-center sm:size-40">
          {[0, 1].map((n) => (
            <motion.span key={n} aria-hidden="true" className="absolute inset-0 rounded-[2rem] border-2 border-brand"
              initial={{ scale: 1, opacity: 0.5 }} animate={{ scale: 1.7, opacity: 0 }}
              transition={{ duration: 1.8, delay: 0.5 + n * 0.5, repeat: Infinity, ease: 'easeOut' }} />
          ))}
          <motion.span className="grid size-full place-items-center rounded-[2rem] bg-white p-3 shadow-soft ring-1 ring-line"
            initial={{ scale: 0, rotate: -25, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.1 }}>
            <img src="/logo-mark.png" alt="" width="512" height="512" className="size-full object-contain" />
          </motion.span>
        </div>

        <div role="img" className="mt-7 flex font-serif text-[clamp(2.2rem,9vw,3.6rem)] font-bold tracking-tight text-brand" aria-label="Mahalladosh">
          {WORD.split('').map((ch, i) => (
            <motion.span key={i} aria-hidden="true" initial={{ y: 30, opacity: 0, filter: 'blur(6px)' }} animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}>{ch}</motion.span>
          ))}
        </div>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.55, duration: 0.5 }}
          className="mt-2 text-[1.02rem] font-medium text-muted">{t.footer.slogan}</motion.p>

        <div className="mt-8 h-1 w-44 overflow-hidden rounded-full bg-line">
          <motion.i className="block h-full rounded-full bg-gradient-to-r from-brand via-sun to-leaf" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2.1, ease: 'easeInOut' }} />
        </div>
      </div>
    </motion.div>
  )
}

/* ---------- app ---------- */
const readLang = () => {
  try {
    const saved = localStorage.getItem('lang')
    if (saved && dictionaries[saved]) return saved
  } catch { /* private mode */ }
  return navigator.language?.startsWith('ru') ? 'ru' : 'uz'
}

export default function App() {
  const [lang, setLangState] = useState(readLang)
  const [splash, setSplash] = useState(true)
  const t = dictionaries[lang]

  const setLang = (l) => {
    setLangState(l)
    try { localStorage.setItem('lang', l) } catch { /* ignore */ }
  }

  useEffect(() => {
    document.documentElement.lang = languages.find((l) => l.code === lang).html
    document.title = t.title
  }, [lang, t])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <AnimatePresence>{splash && <Splash key="splash" onDone={() => setSplash(false)} />}</AnimatePresence>
      <Header />
      <main id="top">
        <Hero />
        <Steps />
        <Features />
        <VoteDemo />
        <Statuses />
        <Roles />
        <Security />
        <Faq />
        <Contact />
      </main>
      <footer className="border-t border-line bg-surface py-12 pb-28 text-[.9rem] text-muted md:pb-12">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-6 px-5">
          <div className="grid gap-3">
            <Brand size="lg" />
            <span>{t.footer.copy}</span>
          </div>
          <a href="#aloqa" className={`${btn} border-sun bg-sun text-[#1d1500] hover:brightness-105`}><PartyPopper size={18} />{t.nav.demo}</a>
        </div>
      </footer>
      <StickyCta />
    </LangContext.Provider>
  )
}
