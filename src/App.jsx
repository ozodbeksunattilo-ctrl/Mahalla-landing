import { useState } from 'react'

const pillTone = {
  g: 'bg-green-l text-green',
  c: 'bg-clay-l text-clay',
  y: 'bg-gold-l text-gold-ink',
}

const Pill = ({ tone = 'g', children, className = '' }) => (
  <span className={`inline-block rounded-full px-3 py-0.5 text-[.7rem] font-bold ${pillTone[tone]} ${className}`}>{children}</span>
)

const Eyebrow = ({ children }) => (
  <span className="mb-3 inline-block text-[.8rem] font-bold uppercase tracking-[.12em] text-green">{children}</span>
)

const H2 = ({ children }) => (
  <h2 className="mb-3.5 text-[clamp(1.8rem,4vw,2.7rem)] font-bold">{children}</h2>
)

const Lead = ({ children }) => <p className="max-w-[620px] text-[1.08rem] text-muted">{children}</p>

const Section = ({ id, alt, className = '', children }) => (
  <section id={id} className={`py-16 md:py-[84px] ${alt ? 'border-y border-line bg-surface' : ''} ${className}`}>
    <div className="mx-auto max-w-[1120px] px-5">{children}</div>
  </section>
)

const steps = [
  ['Muammo yuboriladi', 'Sarlavha, tavsif, toifa va joy. Uchtagacha rasm va bitta qisqa video biriktirish mumkin.'],
  ['Admin tasdiqlaydi', 'Post moderatsiyadan o‘tadi. Rad etilsa, sabab ko‘rinadi va muallif tuzatib qayta yuboradi.'],
  ['Qo‘shnilar ovoz beradi', 'Har oy uchta ovoz. Davr tugamaguncha ovozni qaytarib, boshqa postga berish mumkin.'],
  ['G‘olib aniqlanadi', 'Oy yakunida tizim o‘zi eng ko‘p ovoz olgan masalani tanlaydi. Qo‘lda almashtirib bo‘lmaydi.'],
  ['Mas’ul va muddat', 'Admin mas’ul shaxs, keyingi qadam va muddatni e’lon qiladi. Kuzatuvchilarga bildirishnoma boradi.'],
  ['Natija tasdiqlanadi', 'Bajarilgan ish fotosi postda ko‘rinadi. Muallif tasdiqlaydi yoki «Muammo davom etmoqda» deydi.'],
]

const features = [
  ['📸', 'bg-green-l', 'Foto va video bilan e’lon', 'Rasm 5 MB, video 25 MB gacha. Yuklash jarayoni ko‘rinadi, uzilsa qayta urinish post nusxasini yaratmaydi.'],
  ['🗳', 'bg-gold-l', 'Adolatli oylik ovoz', 'Limit, muddat va takroriy ovozlar serverda tekshiriladi. Tenglikda ertaroq chiqqan post yutadi.'],
  ['💬', 'bg-clay-l', 'Mahalla chati', 'Faqat shu mahalla a’zolari uchun umumiy chat. Shikoyat qilish va admin tomonidan yashirish mumkin.'],
  ['🌳', 'bg-green-l', 'Tadbirlar', 'Hashar, daraxt ekish, yig‘ilish, bayram. «Qatnashaman» bosing — 24 soat oldin eslatma keladi.'],
  ['📢', 'bg-gold-l', 'E’lonlar', 'Yangilik va muhim xabarlar. «Muhim» e’lon push orqali yetib boradi va kerakli sahifani ochadi.'],
  ['🔔', 'bg-clay-l', 'Bildirishnomalar', 'Post holati, g‘olib muammo, kuzatilayotgan masala yangilanishi — push o‘chiq bo‘lsa ham ilovada ko‘rinadi.'],
]

const rules = [
  ['3 ta ovoz', 'Har bir postga bittadan. Ovozni qaytarib olib, boshqasiga berish mumkin.'],
  ['Avtomatik yakun', 'Tizim davr yopilgan paytdagi holat bo‘yicha g‘olibni aniqlaydi.'],
  ['G‘olib bo‘lmasa', 'Ochiq masala keyingi davrga kiritiladi va nol ovozdan boshlaydi.'],
]

const results = [
  ['🏆 Ko‘cha chirog‘i', 86, true],
  ['Chiqindi konteyneri', 61],
  ['Ariq tozalash', 43],
  ['Yo‘l chuqurlari', 27],
]

const statuses = [
  ['y', 'Moderatsiyada'], ['c', 'Tuzatish kerak'], ['g', 'Ovoz berilmoqda'], ['y', 'Oylik ovozda tanlandi'],
  ['g', 'Jarayonda'], ['y', 'Tashkilotdan javob kutilmoqda'], ['g', 'Hal qilindi'],
]

const security = [
  ['🔒 Mahallalar ajratilgan', 'Bir mahalla boshqasining post, chat va fayllarini ko‘ra olmaydi.'],
  ['🔑 Admin orqali kirish', 'Ochiq ro‘yxatdan o‘tish yo‘q. Admin aholini tekshirib, vaqtinchalik parol beradi; birinchi kirishda parol almashtiriladi.'],
  ['🕵️ Minimal ma’lumot', 'Faqat ko‘rsatish ismi. Uy manzili va pasport so‘ralmaydi, foto GPS ma’lumoti olib tashlanadi.'],
]

const faq = [
  ['Ilovaga qanday kiraman?', 'Mahalla admini sizga akkaunt ochadi va vaqtinchalik parol beradi. Birinchi kirishda o‘z parolingizni o‘rnatasiz.'],
  ['Nechta muammo yubora olaman?', 'Post yuborish cheklanmagan, lekin har oy faqat uchta ovoz berish mumkin. Har bir postga bittadan.'],
  ['Shoshilinch xavf bo‘lsa-chi?', 'Post yaratish ekranida eslatma bor: shoshilinch holatda tegishli tezkor xizmatga bevosita murojaat qiling.'],
  ['G‘olibni admin o‘zgartira oladimi?', 'Yo‘q. G‘olib davr yakunida tizim tomonidan avtomatik aniqlanadi va qo‘lda almashtirilmaydi.'],
  ['Til qaysi?', 'Birinchi til — o‘zbek (lotin). Rus tili keyingi relizda qo‘shiladi.'],
]

const navLinks = [
  ['#qanday', 'Qanday ishlaydi'], ['#imkoniyat', 'Imkoniyatlar'], ['#ovoz', 'Oylik ovoz'],
  ['#rollar', 'Kimlar uchun'], ['#faq', 'Savollar'],
]

const btn = 'inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border-2 px-[26px] text-base font-semibold transition-transform hover:-translate-y-0.5 motion-reduce:transition-none'

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <nav aria-label="Asosiy navigatsiya" className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-5">
        <a href="#top" aria-label="Mahalladosh">
          <img src="/logo.jpg" alt="Mahalladosh — Mahallamiz, bizning kuchimiz" className="h-[60px] w-auto rounded-lg bg-white" />
        </a>
        <ul className="hidden gap-[26px] md:flex">
          {navLinks.map(([href, label]) => (
            <li key={href}><a href={href} className="text-[.95rem] font-medium text-muted hover:text-ink">{label}</a></li>
          ))}
        </ul>
        <a href="#aloqa" className={`${btn} !min-h-[42px] border-green bg-green px-5 !text-[.92rem] text-on-green hover:bg-green-d`}>Demo so‘rash</a>
      </nav>
    </header>
  )
}

function Phone() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="mx-auto w-[290px] rotate-[2.5deg] rounded-[42px] border-[9px] border-ink bg-bg p-4 pb-[18px] shadow-soft">
        <div className="mb-2.5 flex justify-between text-[.72rem] font-semibold"><span>9:41</span><span>Yangiobod mahallasi</span></div>
        <h4 className="mb-2 font-serif text-[1.05rem] font-bold">Noyabr ovozi</h4>
        <div className="mb-2.5 rounded-[14px] border border-line bg-surface p-3 text-[.8rem]">
          <Pill tone="y">Ovoz berilmoqda</Pill>
          <strong className="mb-0.5 mt-1.5 block text-[.88rem]">Ko‘cha chirog‘i ishlamayapti</strong>
          Mustaqillik ko‘chasi, 12-uy yonida
          <div className="mt-2 h-1.5 overflow-hidden rounded-md bg-line"><i className="block h-full w-[72%] bg-green" /></div>
          <div className="mt-2 flex items-center justify-between"><span>86 ovoz</span>
            <span className="rounded-full bg-green px-3.5 py-1.5 text-[.74rem] font-bold text-on-green">Ovoz berish</span></div>
        </div>
        <div className="mb-2.5 rounded-[14px] border border-line bg-surface p-3 text-[.8rem]">
          <Pill tone="g">Jarayonda</Pill>
          <strong className="mb-0.5 mt-1.5 block text-[.88rem]">Bolalar maydonchasi ta’miri</strong>
          Mas’ul: Obodonlashtirish bo‘limi · muddat 20-dekabr
        </div>
        <div className="mt-1.5 flex justify-around border-t border-line pt-2 text-[.62rem] text-muted">
          <b className="text-green">Bosh sahifa</b><span>Muammolar</span><span>Tadbirlar</span><span>Chat</span><span>Profil</span>
        </div>
      </div>
      <div className="absolute -left-2 bottom-[90px] -rotate-[4deg] rounded-[14px] border border-line bg-surface px-3.5 py-2.5 text-[.8rem] font-semibold shadow-soft sm:-left-10">✅ Hal qilindi — foto qo‘shildi</div>
      <div className="absolute -right-2 top-[70px] rotate-[3deg] rounded-[14px] border border-line bg-surface px-3.5 py-2.5 text-[.8rem] font-semibold shadow-soft sm:-right-9">🗳 Qolgan ovoz: 2 ta</div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-[90px] pt-16">
      <div aria-hidden="true" className="absolute -right-[120px] -top-20 -z-10 size-[520px] rounded-full bg-[radial-gradient(circle,var(--gold-l),transparent_70%)]" />
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <Eyebrow>Mahalla uchun raqamli platforma</Eyebrow>
          <h1 className="mb-5 text-[clamp(2.4rem,6vw,4.1rem)] font-bold">Mahallangiz muammosi <em className="not-italic text-clay">birgalikda</em> hal bo‘ladi</h1>
          <p className="mb-[30px] max-w-[520px] text-[1.18rem] text-muted">Muammoni foto bilan e’lon qiling, qo‘shnilar ovoz beradi, har oy eng ko‘p ovoz olgan masala mas’ul va aniq muddat bilan hal qilinadi.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#aloqa" className={`${btn} border-green bg-green text-on-green hover:bg-green-d`}>Mahallamga ulash</a>
            <a href="#qanday" className={`${btn} border-green text-green`}>Qanday ishlaydi?</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-[34px]">
            {[['3 ovoz', 'har oy har bir aholiga'], ['1 g‘olib', 'har oy mas’ul bilan'], ['100%', 'ochiq holat tarixi']].map(([b, s]) => (
              <div key={b}><b className="block font-serif text-[2rem] text-green">{b}</b><span className="text-[.88rem] text-muted">{s}</span></div>
            ))}
          </div>
        </div>
        <Phone />
      </div>
    </section>
  )
}

function Steps() {
  return (
    <Section id="qanday">
      <Eyebrow>Qanday ishlaydi</Eyebrow>
      <H2>Muammodan natijagacha — olti qadam</H2>
      <Lead>Har bir bosqich ochiq ko‘rinadi: kim, qachon, nima qilgani tarixda saqlanadi.</Lead>
      <div className="mt-11 grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
        {steps.map(([t, p], i) => (
          <div key={t} className="rounded-[18px] border border-line bg-surface p-[26px]">
            <span className="mb-2.5 block font-serif text-[2.6rem] font-bold leading-none text-gold">{i + 1}</span>
            <h3 className="mb-1.5 text-xl font-bold">{t}</h3>
            <p className="text-[.95rem] text-muted">{p}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Features() {
  return (
    <Section id="imkoniyat" alt>
      <Eyebrow>Imkoniyatlar</Eyebrow>
      <H2>Mahalla hayoti bitta ilovada</H2>
      <div className="mt-11 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {features.map(([icon, bg, t, p]) => (
          <article key={t} className="rounded-[18px] border border-line bg-bg p-7">
            <div className={`mb-4 grid size-12 place-items-center rounded-[14px] text-2xl ${bg}`}>{icon}</div>
            <h3 className="mb-2 text-xl font-bold">{t}</h3>
            <p className="text-[.96rem] text-muted">{p}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Voting() {
  return (
    <Section id="ovoz">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <Eyebrow>Oylik ovoz</Eyebrow>
          <H2>Har oy bitta eng muhim masala</H2>
          <Lead>Davr Toshkent vaqti bilan oyning birinchi kuni 00:00 da boshlanadi va oxirida avtomatik yopiladi.</Lead>
          <ul className="mt-6 grid gap-3.5">
            {rules.map(([t, p], i) => (
              <li key={t} className="flex gap-3.5">
                <span className="grid size-[30px] flex-none place-items-center rounded-full bg-green text-[.9rem] font-bold text-on-green">{i + 1}</span>
                <div><b className="block">{t}</b><p className="text-[.94rem] text-muted">{p}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[18px] border border-line bg-surface p-[26px] shadow-soft" aria-label="Ovoz natijalari namunasi">
          <div className="mb-4 flex items-center justify-between font-bold"><span>Noyabr natijalari</span><Pill tone="y">Yopilishiga 6 kun</Pill></div>
          {results.map(([name, n, win]) => (
            <div key={name} className="border-t border-line py-3">
              <div className="flex justify-between text-[.95rem] font-semibold"><span className={win ? 'text-clay' : ''}>{name}</span><span>{n}</span></div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-md bg-line"><i className={`block h-full ${win ? 'bg-clay' : 'bg-green'}`} style={{ width: `${n}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Statuses() {
  return (
    <Section alt>
      <Eyebrow>Shaffoflik</Eyebrow>
      <H2>Muammo holati har doim aniq</H2>
      <Lead>Holat rang bilan birga matn bilan ham yoziladi — hamma uchun tushunarli.</Lead>
      <div className="mt-8 flex flex-wrap gap-2.5">
        {statuses.map(([tone, label]) => (
          <span key={label} className={`rounded-full border border-current px-4 py-2 text-[.88rem] font-bold ${pillTone[tone]}`}>● {label}</span>
        ))}
      </div>
    </Section>
  )
}

function Roles() {
  const list = 'grid list-disc gap-2 pl-5'
  return (
    <Section id="rollar">
      <Eyebrow>Kimlar uchun</Eyebrow>
      <H2>Aholi uchun ilova, admin uchun panel</H2>
      <div className="mt-11 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        <div className="rounded-[18px] bg-green p-[34px] text-on-green">
          <h3 className="mb-3.5 text-2xl font-bold">📱 Aholi — mobil ilova</h3>
          <ul className={list}>
            <li>Android va iOS uchun bitta ilova</li><li>Muammo yuborish, ovoz berish, izoh qoldirish</li>
            <li>Tadbirga yozilish va mahalla chati</li><li>Kuzatilgan muammo yangiliklari</li>
          </ul>
        </div>
        <div className="rounded-[18px] bg-gold-l p-[34px]">
          <h3 className="mb-3.5 text-2xl font-bold">💻 Mahalla admini — veb-panel</h3>
          <ul className={list}>
            <li>Aholi akkauntlarini ochish va boshqarish</li><li>Moderatsiya navbati va shikoyatlar</li>
            <li>Ovoz natijalari, mas’ul va muddat</li><li>Tadbir, e’lon va amallar jurnali</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Security() {
  return (
    <Section alt>
      <Eyebrow>Xavfsizlik</Eyebrow>
      <H2>Ma’lumot himoyalangan</H2>
      <div className="mt-11 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {security.map(([t, p]) => (
          <article key={t} className="rounded-[18px] border border-line bg-bg p-7">
            <h3 className="mb-2 text-xl font-bold">{t}</h3><p className="text-[.96rem] text-muted">{p}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Faq() {
  return (
    <Section id="faq">
      <Eyebrow>Savollar</Eyebrow>
      <H2>Ko‘p so‘raladigan savollar</H2>
      <div className="mt-7 max-w-[760px]">
        {faq.map(([q, a]) => (
          <details key={q} className="group border-b border-line py-[18px]">
            <summary className="flex cursor-pointer list-none justify-between gap-4 text-[1.05rem] font-semibold">
              {q}<span className="text-2xl leading-none text-green group-open:hidden">+</span><span className="hidden text-2xl leading-none text-green group-open:inline">–</span>
            </summary>
            <p className="mt-2.5 max-w-[700px] text-muted">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

const field = 'mt-1 min-h-[50px] w-full rounded-xl border-2 bg-white px-4 text-[#1d2a24]'

function Contact() {
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

  const border = (k) => (errors[k] ? 'border-clay' : 'border-transparent')

  return (
    <Section id="aloqa" className="!pt-0">
      <div className="grid items-center gap-10 rounded-[28px] bg-green p-6 text-on-green md:grid-cols-2 md:p-14">
        <div>
          <h2 className="mb-2.5 text-[clamp(1.8rem,4vw,2.7rem)] font-bold">Mahallangizni ulang</h2>
          <p className="opacity-90">Ma’lumot qoldiring — demo bilan tanishtirib, mahallangiz uchun birinchi adminni sozlaymiz.</p>
        </div>
        <form onSubmit={submit} noValidate className="grid gap-3">
          <label className="text-[.85rem] font-semibold">Ismingiz<input name="n" autoComplete="name" placeholder="Masalan, Aziza Karimova" className={`${field} ${border('n')}`} /></label>
          <label className="text-[.85rem] font-semibold">Telefon<input name="p" type="tel" autoComplete="tel" placeholder="+998 90 123 45 67" className={`${field} ${border('p')}`} /></label>
          <label className="text-[.85rem] font-semibold">Mahalla nomi<input name="m" placeholder="Masalan, Yangiobod" className={`${field} ${border('m')}`} /></label>
          <label className="text-[.85rem] font-semibold">Siz kimsiz?
            <select name="r" className={`${field} border-transparent`}>
              <option>Mahalla raisi / admin</option><option>Tuman hokimligi vakili</option><option>Fuqaro</option>
            </select>
          </label>
          <button type="submit" disabled={sent} className={`${btn} w-full border-gold bg-gold text-[#1d2a24] disabled:opacity-60`}>Demo so‘rash</button>
          {sent && <div role="status" className="rounded-xl bg-white p-3.5 font-semibold text-green-d">Rahmat! Tez orada siz bilan bog‘lanamiz.</div>}
        </form>
      </div>
    </Section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Steps />
        <Features />
        <Voting />
        <Statuses />
        <Roles />
        <Security />
        <Faq />
        <Contact />
      </main>
      <footer className="mt-[84px] border-t border-line py-10 text-[.9rem] text-muted">
        <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-3 px-5">
          <span>© 2026 Mahalladosh. Barcha huquqlar himoyalangan.</span>
          <span>Mahalla — birgalikda kuchli.</span>
        </div>
      </footer>
    </>
  )
}
