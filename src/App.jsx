import { useEffect, useState } from 'react'
import {
  Check, ChevronDown, CircleHelp, Globe, MapPin, Menu, Moon, Plus, Sun, X,
} from 'lucide-react'
import { dictionaries, languages, LangContext, useLang, fmt } from './i18n'

const sections = ['#qanday', '#imkoniyat', '#demo', '#rollar', '#faq']
const issueCounts = [85, 61, 43, 27]
const voteLimit = 3
const contactEndpoint = import.meta.env.VITE_DEMO_REQUEST_URL?.trim()

function storedValue(key) {
  try { return localStorage.getItem(key) } catch { return null }
}

function savePreference(key, value) {
  try { localStorage.setItem(key, value) } catch { /* Preferences still work for this visit. */ }
}

function Brand() {
  const { t } = useLang()
  return (
    <a className="brand" href="#top" aria-label={t.logoAlt}>
      <img src="/logo-mark.png" alt="" width="42" height="42" />
      <span>Mahalladosh</span>
    </a>
  )
}

function Header({ dark, toggleTheme }) {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const primaryLinks = [0, 1, 2, 3, 4]

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        document.getElementById('menu-toggle').focus()
      }
    }}>
      <div className="wrap header-inner">
        <Brand />
        <nav id="site-nav" className="site-nav" data-open={open} aria-label={t.nav.main}>
          {primaryLinks.map((index) => (
            <a key={sections[index]} href={sections[index]} onClick={() => setOpen(false)}>{t.nav.links[index]}</a>
          ))}
        </nav>
        <div className="header-actions">
          <label className="language">
            <Globe size={16} aria-hidden="true" />
            <select value={lang} title={t.nav.lang} aria-label={t.nav.lang} onChange={(event) => setLang(event.target.value)}>
              {languages.map((item) => <option key={item.code} value={item.code} lang={item.html}>{item.short}</option>)}
            </select>
            <ChevronDown size={13} aria-hidden="true" />
          </label>
          <button className="icon-button" type="button" aria-label={t.nav.theme} aria-pressed={dark} onClick={toggleTheme}>
            {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button id="menu-toggle" className="icon-button menu-button" type="button" aria-label={t.nav.menu}
            aria-controls="site-nav" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const { t } = useLang()
  return (
    <section className="wrap hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="section-label">{t.editorial.heroLabel}</p>
        <h1 id="hero-title">{t.editorial.heroTitle}{' '}<br /><em>{t.editorial.heroAccent}</em></h1>
        <p className="hero-lead">{t.editorial.heroLead}</p>
        <div className="hero-actions">
          {contactEndpoint && <a className="button button-primary" href="#aloqa">{t.hero.cta1}</a>}
          <a className={contactEndpoint ? 'text-link' : 'button button-primary'} href="#demo">{t.editorial.tryVote}</a>
          {!contactEndpoint && <a className="text-link" href="#qanday">{t.nav.links[0]}</a>}
        </div>
      </div>
      <figure className="hero-photo">
        <img src="/images/mahalla-street.webp" alt={t.editorial.streetAlt} width="724" height="724" />
        <figcaption><MapPin size={16} aria-hidden="true" />{t.editorial.streetCaption}</figcaption>
      </figure>
      <div className="hero-rule">
        <span>{t.editorial.rule[0]}</span><span>{t.editorial.rule[1]}</span><span>{t.editorial.rule[2]}</span>
      </div>
    </section>
  )
}

function StoryDetails({ step, current }) {
  const { t } = useLang()
  return (
    <>
      <div key={step} className="story-note-content">
        <p className="section-label">{current.status}</p>
        <h3>{current.title}</h3>
        <p>{t.editorial.storyDetails[step]}</p>
      </div>
      {step === 2 && <a className="text-link" href="#demo">{t.editorial.tryVote}</a>}
    </>
  )
}

function Story() {
  const { t } = useLang()
  const [step, setStep] = useState(0)
  const current = t.steps.list[step]

  return (
    <section id="qanday" className="section story" aria-labelledby="story-title">
      <div className="wrap">
        <div className="section-intro">
          <div><p className="section-label">{t.nav.links[0]}</p><h2 id="story-title">{t.editorial.storyTitle}</h2></div>
          <p>{t.editorial.storyLead}</p>
        </div>
        <div className="story-layout">
          <ol className="story-steps" aria-label={t.steps.aria}>
            {t.steps.list.map((item, index) => (
              <li key={item.title}>
                <button type="button" aria-pressed={step === index} aria-controls={`story-note story-note-${index}`} onClick={() => setStep(index)}>
                  <span className="step-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span>{item.title}</span>
                  {step === index && <span className="step-active" aria-hidden="true" />}
                </button>
                <div id={`story-note-${index}`} className="story-note-mobile" hidden={step !== index}>
                  {step === index && <StoryDetails step={step} current={current} />}
                </div>
              </li>
            ))}
          </ol>
          <div className="story-example">
            <figure className="story-photo">
              <img src="/images/streetlight.webp" alt={t.editorial.lampAlt} width="724" height="724" loading="lazy" />
              <figcaption>{t.editorial.example} · {t.phone.where}</figcaption>
            </figure>
            <div id="story-note" className="story-note" aria-live="polite" aria-atomic="true">
              <StoryDetails step={step} current={current} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VoteDemo() {
  const { t } = useLang()
  const dm = t.demo
  const [{ selected, message }, setPoll] = useState(() => ({ selected: new Set(), message: '' }))
  const left = voteLimit - selected.size

  function toggleVote(index) {
    setPoll((previous) => {
      const next = new Set(previous.selected)
      if (next.delete(index)) return { selected: next, message: 'back' }
      if (next.size >= voteLimit) return { ...previous, message: 'limit' }
      next.add(index)
      return { selected: next, message: 'ok' }
    })
  }

  return (
    <section id="demo" className="section vote-section" aria-labelledby="vote-title">
      <div className="wrap vote-layout">
        <div className="vote-intro">
          <p className="section-label">{t.editorial.demoLabel}</p>
          <h2 id="vote-title">{t.editorial.voteTitle}</h2>
          <p>{t.editorial.voteLead}</p>
          <dl className="vote-rules">
            {dm.points.map((point) => (
              <div key={point.t}><dt>{point.t}</dt><dd>{point.p}</dd></div>
            ))}
          </dl>
        </div>
        <div className="ballot" aria-label={dm.aria}>
          <div className="ballot-title">
            <div><p className="section-label">{t.editorial.example}</p><h3>{dm.card}</h3></div>
            <p className="vote-count"><strong>{left}/{voteLimit}</strong><span>{t.editorial.remaining}</span></p>
          </div>
          <ul className="ballot-list">
            {dm.issues.map((issue, index) => {
              const voted = selected.has(index)
              const count = issueCounts[index] + Number(voted)
              return (
                <li key={index} data-voted={voted}>
                  <div className="issue-copy"><strong>{issue.name}</strong><span>{issue.place}</span>
                    <span className="issue-track" aria-hidden="true"><span style={{ width: `${count}%` }} /></span>
                  </div>
                  <strong className="issue-count" aria-label={fmt(t.editorial.voteTotal, { n: count })}>{count}</strong>
                  <button type="button" aria-pressed={voted} aria-label={`${voted ? dm.withdraw : dm.vote} — ${issue.name}`} onClick={() => toggleVote(index)}>
                    {voted && <Check size={15} aria-hidden="true" />}{voted ? dm.withdraw : dm.vote}
                  </button>
                </li>
              )
            })}
          </ul>
          <p className="ballot-note" role="status">{message ? dm[message] : t.editorial.demoNote} {fmt(dm.left, { n: left })}</p>
        </div>
      </div>
    </section>
  )
}

function Community() {
  const { t } = useLang()
  return (
    <section id="imkoniyat" className="section" aria-labelledby="community-title">
      <div className="wrap community-layout">
        <figure className="community-photo">
          <img src="/images/hashar.webp" alt={t.editorial.hasharAlt} width="724" height="724" loading="lazy" />
          <figcaption>{t.editorial.hasharCaption}</figcaption>
        </figure>
        <div>
          <p className="section-label">{t.features.eyebrow}</p>
          <h2 id="community-title">{t.editorial.communityTitle}</h2>
          <dl className="community-list">
            {t.features.list.slice(2).map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.desc}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Roles() {
  const { t } = useLang()
  return (
    <section id="rollar" className="section roles" aria-labelledby="roles-title">
      <div className="wrap">
        <p className="section-label">{t.roles.eyebrow}</p>
        <h2 id="roles-title">{t.editorial.rolesTitle}</h2>
        <div className="roles-layout">
          {['aholi', 'admin'].map((role, index) => (
            <article key={role}>
              <h3>{t.roles.tabs[index]}</h3>
              <ul>{t.roles[role].map((item) => <li key={item.t}><Check size={17} aria-hidden="true" /><span>{item.t}<small>{item.p}</small></span></li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const { t } = useLang()
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="wrap faq-layout">
        <h2 id="faq-title">{t.faq.title}</h2>
        <div className="questions">
          {[...t.faq.list, ...t.security.list.map(({ t: q, p: a }) => ({ q, a }))].map(({ q, a }) => (
            <details key={q} name="faq">
              <summary>{q}<Plus size={18} aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { t } = useLang()
  const [status, setStatus] = useState('')
  const c = t.contact

  async function submit(event) {
    event.preventDefault()
    if (!contactEndpoint || status === 'pending' || status === 'sent') return
    const form = event.currentTarget
    const details = Object.fromEntries(new FormData(form))
    setStatus('pending')
    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details),
      })
      if (!response.ok) throw new Error('Demo request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="aloqa" className="section contact" aria-labelledby="contact-title">
      <div className="wrap contact-layout">
        <div>
          <h2 id="contact-title">{c.title}</h2>
          <p>{contactEndpoint ? c.lead : t.editorial.contactUnavailable}</p>
          {!contactEndpoint && <a className="button button-paper" href="#demo">{t.editorial.tryVote}</a>}
        </div>
        {contactEndpoint && (
          <form onSubmit={submit}>
            <label>{c.name}<input name="name" required autoComplete="name" placeholder={c.namePh} /></label>
            <label>{c.phone}<input name="phone" type="tel" required autoComplete="tel" placeholder={c.phonePh} /></label>
            <label>{c.mahalla}<input name="mahalla" required placeholder={c.mahallaPh} /></label>
            <label>{c.who}<select name="role">{c.options.map((option, index) => (
              <option key={option} value={['admin', 'district', 'resident'][index]}>{option}</option>
            ))}</select></label>
            <button type="submit" className="button button-paper" disabled={status === 'pending' || status === 'sent'}>{c.submit}</button>
            <p role="status">{status === 'sent' ? c.thanks : t.editorial.formStatus[status]}</p>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <Brand />
        <span>{t.footer.copy}</span>
        <a className="text-link" href="#faq"><CircleHelp size={16} aria-hidden="true" />{t.nav.links[4]}</a>
      </div>
    </footer>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => {
    const saved = storedValue('lang')
    return Object.hasOwn(dictionaries, saved) ? saved : navigator.language.startsWith('ru') ? 'ru' : 'uz'
  })
  const [dark, setDark] = useState(() => {
    const saved = storedValue('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const t = dictionaries[lang]

  useEffect(() => {
    document.documentElement.lang = languages.find((language) => language.code === lang).html
    document.title = t.title
    savePreference('lang', lang)
  }, [lang, t.title])

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    savePreference('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <a className="skip-link" href="#main">{t.editorial.skip}</a>
      <div id="top" />
      <Header dark={dark} toggleTheme={() => setDark(!dark)} />
      <main id="main">
        <Hero />
        <Story />
        <VoteDemo />
        <Community />
        <Roles />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </LangContext.Provider>
  )
}
