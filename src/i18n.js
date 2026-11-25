import { createContext, useContext } from 'react'

/* ---------- O‘zbekcha (lotin) — asosiy matn ---------- */
const uz = {
  title: 'Mahalladosh — mahallangiz muammolari birgalikda hal bo‘ladi',
  logoAlt: 'Mahalladosh — Mahallamiz, bizning kuchimiz',
  nav: {
    main: 'Asosiy navigatsiya',
    links: ['Qanday ishlaydi', 'Imkoniyatlar', 'Ovoz demo', 'Kimlar uchun', 'Savollar'],
    demo: 'Demo so‘rash', theme: 'Rejimni almashtirish', menu: 'Menyu', lang: 'Tilni tanlang',
  },
  hero: {
    eyebrow: 'Mahalla uchun raqamli platforma',
    a: 'Mahallangiz muammosi', b: 'birgalikda', c: 'hal bo‘ladi',
    lead: 'Muammoni foto bilan e’lon qiling, qo‘shnilar ovoz beradi, har oy eng ko‘p ovoz olgan masala mas’ul va aniq muddat bilan hal qilinadi.',
    cta1: 'Mahallamga ulash', cta2: 'Ovoz berib ko‘ring',
    stats: [
      { n: 3, s: ' ovoz', d: 'har oy har bir aholiga' },
      { n: 1, s: ' g‘olib', d: 'har oy mas’ul bilan' },
      { n: 100, s: '%', d: 'ochiq holat tarixi' },
    ],
  },
  phone: {
    place: 'Yangiobod mahallasi', month: 'Noyabr ovozi', voting: 'Ovoz berilmoqda',
    issue: 'Ko‘cha chirog‘i ishlamayapti', where: 'Mustaqillik ko‘chasi, 12-uy yonida',
    votes: '86 ovoz', vote: 'Ovoz berish', progress: 'Jarayonda',
    issue2: 'Bolalar maydonchasi ta’miri', resp: 'Mas’ul: Obodonlashtirish bo‘limi · 20-dekabr',
    tabs: ['Bosh', 'Muammo', 'Tadbir', 'Chat'],
    f1: 'Hal qilindi — foto qo‘shildi', f2: 'Qolgan ovoz: 2 ta',
  },
  steps: {
    eyebrow: 'Qanday ishlaydi', title: 'Muammodan natijagacha — olti qadam',
    lead: 'Qadamni bosing: har bir bosqich ochiq ko‘rinadi, kim, qachon, nima qilgani tarixda saqlanadi.',
    label: '{n}-qadam', status: 'Holat: {s}', aria: 'Qadamlar',
    list: [
      { title: 'Muammo yuboriladi', status: 'Moderatsiyada', desc: 'Sarlavha, tavsif, toifa va joy. Uchtagacha rasm va bitta qisqa video biriktirish mumkin. Yuklash jarayoni ko‘rinadi, uzilsa qayta urinish dublikat yaratmaydi.' },
      { title: 'Admin tasdiqlaydi', status: 'Ochiq', desc: 'Post moderatsiyadan o‘tadi va lentaga chiqadi. Rad etilsa, sabab ko‘rinadi va muallif tuzatib qayta yuboradi.' },
      { title: 'Qo‘shnilar ovoz beradi', status: 'Ovoz berilmoqda', desc: 'Har oy uchta ovoz. Davr tugamaguncha ovozni qaytarib olib, boshqa postga berish mumkin.' },
      { title: 'G‘olib aniqlanadi', status: 'Oylik ovozda tanlandi', desc: 'Oy yakunida tizim o‘zi eng ko‘p ovoz olgan masalani tanlaydi. Tenglikda ertaroq chiqqan post yutadi. Qo‘lda almashtirib bo‘lmaydi.' },
      { title: 'Mas’ul va muddat', status: 'Jarayonda', desc: 'Admin mas’ul shaxs, keyingi qadam va kutilayotgan muddatni e’lon qiladi. Kuzatuvchilarga bildirishnoma boradi.' },
      { title: 'Natija tasdiqlanadi', status: 'Hal qilindi', desc: 'Bajarilgan ish fotosi postda ko‘rinadi. Muallif tasdiqlaydi yoki «Muammo davom etmoqda» deb dalil yuboradi.' },
    ],
  },
  features: {
    eyebrow: 'Imkoniyatlar', title: 'Mahalla hayoti bitta ilovada',
    list: [
      { title: 'Foto va video bilan e’lon', desc: 'Rasm 5 MB, video 25 MB gacha. Yuklash jarayoni ko‘rinadi, uzilsa qayta urinish post nusxasini yaratmaydi.' },
      { title: 'Adolatli oylik ovoz', desc: 'Limit, muddat va takroriy ovozlar serverda tekshiriladi. Tenglikda ertaroq chiqqan post yutadi.' },
      { title: 'Mahalla chati', desc: 'Faqat shu mahalla a’zolari uchun umumiy chat. Shikoyat qilish va admin tomonidan yashirish mumkin.' },
      { title: 'Tadbirlar', desc: 'Hashar, daraxt ekish, yig‘ilish, bayram. «Qatnashaman» bosing — 24 soat oldin eslatma keladi.' },
      { title: 'E’lonlar', desc: 'Yangilik va muhim xabarlar. «Muhim» e’lon push orqali yetib boradi va kerakli sahifani ochadi.' },
      { title: 'Bildirishnomalar', desc: 'Post holati, g‘olib muammo, kuzatilayotgan masala yangilanishi — push o‘chiq bo‘lsa ham ilovada ko‘rinadi.' },
    ],
  },
  demo: {
    eyebrow: 'Oylik ovoz · jonli demo', title: 'Har oy bitta eng muhim masala',
    lead: 'Davr Toshkent vaqti bilan oyning birinchi kuni 00:00 da boshlanadi va oxirida avtomatik yopiladi. Pastdagi demoda o‘zingiz ovoz berib ko‘ring.',
    points: [
      { t: '3 ta ovoz', p: 'Har bir postga bittadan. Ovozni qaytarib olib, boshqasiga berish mumkin.' },
      { t: 'Avtomatik yakun', p: 'Tizim davr yopilgan paytdagi holat bo‘yicha g‘olibni aniqlaydi.' },
      { t: 'G‘olib bo‘lmasa', p: 'Ochiq masala keyingi davrga kiritiladi va nol ovozdan boshlaydi.' },
    ],
    card: 'Mahalla ovozi', closes: 'Yopilishiga {n} kun', aria: 'Ovoz berish demosi', left: 'Qolgan ovozlar: {n}',
    issues: [
      { name: 'Ko‘cha chirog‘i ishlamayapti', place: 'Mustaqillik ko‘chasi' },
      { name: 'Chiqindi konteyneri yo‘q', place: 'Navoiy ko‘chasi, 4-uy' },
      { name: 'Ariq tozalanmagan', place: 'Bog‘ ko‘chasi' },
      { name: 'Yo‘lda chuqurlar', place: 'Amir Temur shoh ko‘chasi' },
    ],
    vote: 'Ovoz berish', withdraw: 'Qaytarish',
    status: 'Sizda {n} ta ovoz qoldi.', ok: 'Ovozingiz qabul qilindi',
    back: 'Ovoz qaytarib olindi. Limit tiklandi.', limit: 'Bu oy uchun ovozlar tugadi. Birini qaytarib oling.',
  },
  statuses: {
    eyebrow: 'Shaffoflik', title: 'Muammo holati har doim aniq',
    lead: 'Holat rang bilan birga belgi va matn bilan ham yoziladi — hamma uchun tushunarli.',
    list: ['Moderatsiyada', 'Tuzatish kerak', 'Ovoz berilmoqda', 'Oylik ovozda tanlandi', 'Jarayonda', 'Tashkilotdan javob kutilmoqda', 'Hal qilindi'],
  },
  roles: {
    eyebrow: 'Kimlar uchun', title: 'Aholi uchun ilova, admin uchun panel',
    tabs: ['Aholi · mobil ilova', 'Admin · veb-panel'],
    aholi: [
      { t: 'Muammo yuborish', p: 'Foto va video bilan' }, { t: 'Ovoz berish', p: 'Oyiga 3 ta ovoz' },
      { t: 'Mahalla chati', p: 'Qo‘shnilar bilan' }, { t: 'Tadbirga yozilish', p: '«Qatnashaman» bosing' },
      { t: 'Kuzatish', p: 'Yangiliklardan xabardor bo‘ling' }, { t: 'Android va iOS', p: 'Bitta ilova' },
    ],
    admin: [
      { t: 'Akkaunt ochish', p: 'Vaqtinchalik parol bilan' }, { t: 'Moderatsiya', p: 'Tasdiqlash va rad etish' },
      { t: 'Ovoz natijalari', p: 'Mas’ul va muddat' }, { t: 'Tadbirlar', p: 'Yaratish va nashr' },
      { t: 'E’lonlar', p: 'Muhim xabar push bilan' }, { t: 'Amallar jurnali', p: 'Hammasi qayd etiladi' },
    ],
  },
  security: {
    eyebrow: 'Xavfsizlik', title: 'Ma’lumot himoyalangan',
    list: [
      { t: 'Mahallalar ajratilgan', p: 'Bir mahalla boshqasining post, chat va fayllarini ko‘ra olmaydi.' },
      { t: 'Admin orqali kirish', p: 'Ochiq ro‘yxatdan o‘tish yo‘q. Admin aholini tekshirib, vaqtinchalik parol beradi; birinchi kirishda parol almashtiriladi.' },
      { t: 'Minimal ma’lumot', p: 'Faqat ko‘rsatish ismi. Uy manzili va pasport so‘ralmaydi, foto GPS ma’lumoti olib tashlanadi.' },
    ],
  },
  faq: {
    eyebrow: 'Savollar', title: 'Ko‘p so‘raladigan savollar',
    list: [
      { q: 'Ilovaga qanday kiraman?', a: 'Mahalla admini sizga akkaunt ochadi va vaqtinchalik parol beradi. Birinchi kirishda o‘z parolingizni o‘rnatasiz.' },
      { q: 'Nechta muammo yubora olaman?', a: 'Post yuborish cheklanmagan, lekin har oy faqat uchta ovoz berish mumkin. Har bir postga bittadan.' },
      { q: 'Shoshilinch xavf bo‘lsa-chi?', a: 'Post yaratish ekranida eslatma bor: shoshilinch holatda tegishli tezkor xizmatga bevosita murojaat qiling.' },
      { q: 'G‘olibni admin o‘zgartira oladimi?', a: 'Yo‘q. G‘olib davr yakunida tizim tomonidan avtomatik aniqlanadi va qo‘lda almashtirilmaydi.' },
      { q: 'Til qaysi?', a: 'Ilova o‘zbek (lotin va kirill) hamda rus tillarida ishlaydi.' },
    ],
  },
  contact: {
    title: 'Mahallangizni ulang',
    lead: 'Ma’lumot qoldiring — demo bilan tanishtirib, mahallangiz uchun birinchi adminni sozlaymiz.',
    name: 'Ismingiz', namePh: 'Masalan, Aziza Karimova', phone: 'Telefon', phonePh: '+998 90 123 45 67',
    mahalla: 'Mahalla nomi', mahallaPh: 'Masalan, Yangiobod', who: 'Siz kimsiz?',
    options: ['Mahalla raisi / admin', 'Tuman hokimligi vakili', 'Fuqaro'],
    submit: 'Demo so‘rash', thanks: 'Rahmat. Tez orada siz bilan bog‘lanamiz.',
  },
  footer: { copy: '© 2026 Mahalladosh. Barcha huquqlar himoyalangan.', slogan: 'Mahallamiz — bizning kuchimiz' },
}

/* ---------- Русский ---------- */
const ru = {
  title: 'Махаллядош — проблемы вашей махалли решаются вместе',
  logoAlt: 'Mahalladosh — Наша махалля — наша сила',
  nav: {
    main: 'Основная навигация',
    links: ['Как это работает', 'Возможности', 'Демо голосования', 'Для кого', 'Вопросы'],
    demo: 'Заказать демо', theme: 'Сменить тему', menu: 'Меню', lang: 'Выбор языка',
  },
  hero: {
    eyebrow: 'Цифровая платформа для махалли',
    a: 'Проблемы вашей махалли', b: 'вместе', c: 'решаются',
    lead: 'Опубликуйте проблему с фото, соседи проголосуют, а самый популярный вопрос каждого месяца будет решён с ответственным и чётким сроком.',
    cta1: 'Подключить махаллю', cta2: 'Попробовать голосование',
    stats: [
      { n: 3, s: ' голоса', d: 'в месяц каждому жителю' },
      { n: 1, s: ' победитель', d: 'каждый месяц с ответственным' },
      { n: 100, s: '%', d: 'открытая история статусов' },
    ],
  },
  phone: {
    place: 'Махалля Янгиобод', month: 'Голосование за ноябрь', voting: 'Идёт голосование',
    issue: 'Не работает уличный фонарь', where: 'Улица Мустакиллик, у дома 12',
    votes: '86 голосов', vote: 'Голосовать', progress: 'В работе',
    issue2: 'Ремонт детской площадки', resp: 'Ответственный: отдел благоустройства · 20 декабря',
    tabs: ['Главная', 'Проблемы', 'События', 'Чат'],
    f1: 'Решено — добавлено фото', f2: 'Осталось голосов: 2',
  },
  steps: {
    eyebrow: 'Как это работает', title: 'От проблемы до результата — шесть шагов',
    lead: 'Нажмите на шаг: каждый этап открыт, кто, когда и что сделал — сохраняется в истории.',
    label: 'Шаг {n}', status: 'Статус: {s}', aria: 'Шаги',
    list: [
      { title: 'Проблема отправлена', status: 'На модерации', desc: 'Заголовок, описание, категория и место. Можно приложить до трёх фото и одно короткое видео. Ход загрузки виден, повторная попытка не создаёт дубликат.' },
      { title: 'Админ подтверждает', status: 'Открыта', desc: 'Пост проходит модерацию и попадает в ленту. При отклонении видна причина, автор исправляет и отправляет заново.' },
      { title: 'Соседи голосуют', status: 'Идёт голосование', desc: 'Три голоса в месяц. Пока период не закрыт, голос можно вернуть и отдать другому посту.' },
      { title: 'Определяется победитель', status: 'Выбрана голосованием месяца', desc: 'По итогам месяца система сама выбирает вопрос с наибольшим числом голосов. При равенстве побеждает пост, вышедший раньше. Вручную заменить нельзя.' },
      { title: 'Ответственный и срок', status: 'В работе', desc: 'Админ объявляет ответственного, следующий шаг и ожидаемый срок. Подписчики получают уведомление.' },
      { title: 'Результат подтверждается', status: 'Решено', desc: 'Фото выполненной работы видно в посте. Автор подтверждает или сообщает «Проблема сохраняется» с доказательством.' },
    ],
  },
  features: {
    eyebrow: 'Возможности', title: 'Жизнь махалли в одном приложении',
    list: [
      { title: 'Публикация с фото и видео', desc: 'Фото до 5 МБ, видео до 25 МБ. Ход загрузки виден, повторная попытка не создаёт копию поста.' },
      { title: 'Честное ежемесячное голосование', desc: 'Лимит, сроки и повторные голоса проверяются на сервере. При равенстве побеждает пост, вышедший раньше.' },
      { title: 'Чат махалли', desc: 'Общий чат только для жителей вашей махалли. Можно пожаловаться, админ может скрыть сообщение.' },
      { title: 'События', desc: 'Хашар, посадка деревьев, собрания, праздники. Нажмите «Приду» — за 24 часа придёт напоминание.' },
      { title: 'Объявления', desc: 'Новости и важные сообщения. «Важное» объявление приходит пушем и открывает нужную страницу.' },
      { title: 'Уведомления', desc: 'Статус поста, победившая проблема, обновления отслеживаемых вопросов — видны в приложении даже при выключенных пушах.' },
    ],
  },
  demo: {
    eyebrow: 'Ежемесячное голосование · живое демо', title: 'Каждый месяц — один самый важный вопрос',
    lead: 'Период начинается в 00:00 первого числа месяца по ташкентскому времени и автоматически закрывается в конце. Проголосуйте сами в демо ниже.',
    points: [
      { t: '3 голоса', p: 'По одному на пост. Голос можно вернуть и отдать другому.' },
      { t: 'Автоматические итоги', p: 'Система определяет победителя по состоянию на момент закрытия периода.' },
      { t: 'Если победителя нет', p: 'Открытый вопрос переходит в следующий период и начинает с нуля голосов.' },
    ],
    card: 'Голосование махалли', closes: 'До закрытия: {n} дн.', aria: 'Демо голосования', left: 'Осталось голосов: {n}',
    issues: [
      { name: 'Не работает уличный фонарь', place: 'Улица Мустакиллик' },
      { name: 'Нет мусорного контейнера', place: 'Улица Навои, дом 4' },
      { name: 'Не очищен арык', place: 'Улица Бог' },
      { name: 'Ямы на дороге', place: 'Улица Амира Темура' },
    ],
    vote: 'Голосовать', withdraw: 'Вернуть',
    status: 'У вас осталось голосов: {n}.', ok: 'Ваш голос принят',
    back: 'Голос возвращён. Лимит восстановлен.', limit: 'Голоса на этот месяц закончились. Верните один.',
  },
  statuses: {
    eyebrow: 'Прозрачность', title: 'Статус проблемы всегда понятен',
    lead: 'Статус обозначается не только цветом, но и значком и текстом — понятно всем.',
    list: ['На модерации', 'Нужно исправить', 'Идёт голосование', 'Выбрана голосованием месяца', 'В работе', 'Ожидается ответ организации', 'Решено'],
  },
  roles: {
    eyebrow: 'Для кого', title: 'Приложение для жителей, панель для админа',
    tabs: ['Жители · мобильное приложение', 'Админ · веб-панель'],
    aholi: [
      { t: 'Отправить проблему', p: 'С фото и видео' }, { t: 'Голосовать', p: '3 голоса в месяц' },
      { t: 'Чат махалли', p: 'Общение с соседями' }, { t: 'Записаться на событие', p: 'Нажмите «Приду»' },
      { t: 'Отслеживать', p: 'Будьте в курсе новостей' }, { t: 'Android и iOS', p: 'Одно приложение' },
    ],
    admin: [
      { t: 'Создание аккаунтов', p: 'С временным паролем' }, { t: 'Модерация', p: 'Подтверждение и отклонение' },
      { t: 'Итоги голосования', p: 'Ответственный и срок' }, { t: 'События', p: 'Создание и публикация' },
      { t: 'Объявления', p: 'Важное — с пушем' }, { t: 'Журнал действий', p: 'Всё фиксируется' },
    ],
  },
  security: {
    eyebrow: 'Безопасность', title: 'Данные защищены',
    list: [
      { t: 'Махалли изолированы', p: 'Одна махалля не видит посты, чат и файлы другой.' },
      { t: 'Вход через админа', p: 'Открытой регистрации нет. Админ проверяет жителя и выдаёт временный пароль; при первом входе пароль меняется.' },
      { t: 'Минимум данных', p: 'Только отображаемое имя. Домашний адрес и паспорт не запрашиваются, GPS-данные из фото удаляются.' },
    ],
  },
  faq: {
    eyebrow: 'Вопросы', title: 'Частые вопросы',
    list: [
      { q: 'Как войти в приложение?', a: 'Админ махалли создаст вам аккаунт и выдаст временный пароль. При первом входе вы установите свой пароль.' },
      { q: 'Сколько проблем я могу отправить?', a: 'Количество постов не ограничено, но голосовать можно только тремя голосами в месяц, по одному на пост.' },
      { q: 'А если угроза срочная?', a: 'На экране создания поста есть напоминание: при срочной опасности обращайтесь напрямую в соответствующую экстренную службу.' },
      { q: 'Может ли админ изменить победителя?', a: 'Нет. Победитель определяется системой автоматически по итогам периода и вручную не меняется.' },
      { q: 'Какой язык?', a: 'Приложение работает на узбекском (латиница и кириллица) и русском языках.' },
    ],
  },
  contact: {
    title: 'Подключите свою махаллю',
    lead: 'Оставьте контакты — мы покажем демо и настроим первого админа для вашей махалли.',
    name: 'Ваше имя', namePh: 'Например, Азиза Каримова', phone: 'Телефон', phonePh: '+998 90 123 45 67',
    mahalla: 'Название махалли', mahallaPh: 'Например, Янгиобод', who: 'Кто вы?',
    options: ['Председатель махалли / админ', 'Представитель хокимията района', 'Житель'],
    submit: 'Заказать демо', thanks: 'Спасибо. Мы скоро свяжемся с вами.',
  },
  footer: { copy: '© 2026 Mahalladosh. Все права защищены.', slogan: 'Наша махалля — наша сила' },
}

/* ---------- lotin → kirill (avtomatik) ---------- */
const MAP = { a:'а',b:'б',c:'к',d:'д',e:'е',f:'ф',g:'г',h:'ҳ',i:'и',j:'ж',k:'к',l:'л',m:'м',n:'н',o:'о',p:'п',q:'қ',r:'р',s:'с',t:'т',u:'у',v:'в',w:'в',x:'х',y:'й',z:'з' }
const isLetter = (c) => /[A-Za-z]/.test(c || '')
const APOS = /[‘’ʻ`']/

function cyr(src) {
  let out = ''
  for (let i = 0; i < src.length; i++) {
    const ch = src[i], low = ch.toLowerCase(), up = ch !== low
    const n1 = (src[i + 1] || '').toLowerCase()
    const n2 = src[i + 2] || ''
    const put = (s) => (up ? s.toUpperCase() : s)

    if ((low === 'o' || low === 'g') && APOS.test(src[i + 1] || '')) { out += put(low === 'o' ? 'ў' : 'ғ'); i++; continue }
    if (ch === '’' || ch === '‘' || ch === 'ʻ' || ch === "'") { out += 'ъ'; continue }
    const two = low + n1
    if (two === 'sh') { out += put('ш'); i++; continue }
    if (two === 'ch') { out += put('ч'); i++; continue }
    if (two === 'ts') { out += put('ц'); i++; continue }
    if (two === 'yo' && !APOS.test(n2)) { out += put('ё'); i++; continue }
    if (two === 'yu') { out += put('ю'); i++; continue }
    if (two === 'ya') { out += put('я'); i++; continue }
    if (two === 'ye') { out += put('е'); i++; continue }
    if (low === 'e' && !isLetter(src[i - 1]) && !APOS.test(src[i - 1] || '') && src[i - 1] !== '’') { out += put('э'); continue }
    out += MAP[low] ? put(MAP[low]) : ch
  }
  return out
}

const KEEP = /(\{[a-z]+\}|Android|iOS|GPS|MB)/g
const translit = (s) => s.split(KEEP).map((p, i) => (i % 2 ? p : cyr(p))).join('')
const walk = (v) => (typeof v === 'string' ? translit(v) : Array.isArray(v) ? v.map(walk) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)])) : v)

uz.editorial = {
  heroLabel: 'Mahalla uchun raqamli platforma',
  heroTitle: 'Mahalla ishi',
  heroAccent: 'qo‘shnilardan boshlanadi.',
  heroLead: 'Ko‘changizdagi muammoni suratga oling. Qo‘shnilar ovoz bersin. Tanlangan ishni kim va qachon bajarishini kuzating.',
  tryVote: 'Ovoz berib ko‘ring',
  streetAlt: 'Daraxt soyasi tushgan mahalla ko‘chasi va yashil darvoza',
  streetCaption: 'Toshkent mahallasidan illyustratsiya',
  rule: ['Har oy 3 ta ovoz', 'Bitta ustuvor masala', 'Mas’ul va muddat ochiq'],
  storyTitle: 'Bitta chiroqning hikoyasi',
  storyLead: 'Mustaqillik ko‘chasida chiroq ishlamay qoldi. Shu misolda har bir bosqichni ko‘ring: xabar berishdan ta’mirni tasdiqlashgacha.',
  storyDetails: [
    'Qo‘shni chiroqni suratga olib, xabarda Mustaqillik ko‘chasi va 12-uy yonini ko‘rsatadi.',
    'Admin xabarni tekshiradi. Tasdiqlangach, muammo mahalla lentasida hammaga ko‘rinadi.',
    'Qo‘shnilar chiroqni ta’mirlash uchun ovoz beradi. Oy tugaguncha fikrini o‘zgartirgan kishi ovozini qaytarib olishi mumkin.',
    'Oy oxirida chiroq eng ko‘p ovoz olsa, tizim uni ustuvor masala sifatida tanlaydi. Ovozlar teng bo‘lsa, oldinroq e’lon qilingan muammo tanlanadi.',
    'Admin chiroqni kim ta’mirlashi va ish qachon tugashini e’lon qiladi. Masalani kuzatgan qo‘shnilarga bildirishnoma boradi.',
    'Ta’mirdan so‘ng e’longa yonib turgan chiroqning surati qo‘shiladi. Xabar muallifi natijani tasdiqlashi yoki muammo davom etayotganini bildirishi mumkin.',
  ],
  lampAlt: 'Kechki payt o‘chiq turgan ko‘cha chirog‘i',
  example: 'Misol',
  demoLabel: 'Ovoz berish demosi',
  voteTitle: 'Mahallada avval nima hal qilinadi?',
  voteLead: 'Quyidagi misollardan uchtasigacha tanlang. Fikringiz o‘zgarsa, ovozingizni qaytarib oling.',
  remaining: 'qolgan ovoz',
  voteTotal: '{n} ta ovoz',
  demoNote: 'Bu mashq uchun misol.',
  hasharAlt: 'Hasharda qo‘shnilar birgalikda ko‘chat ekmoqda',
  hasharCaption: 'Hashar · mahalla hayotidan illyustratsiya',
  communityTitle: 'Mahallada yana nimalar bor?',
  rolesTitle: 'Aholi va mahalla admini',
  contactUnavailable: 'Hozircha ulanish uchun arizalar qabul qilinmaydi. Ovoz berish demosini sinab ko‘rishingiz mumkin.',
  formStatus: { pending: 'Ariza yuborilmoqda…', error: 'Ariza yuborilmadi. Qayta urinib ko‘ring.' },
  skip: 'Asosiy mazmunga o‘tish',
}

ru.editorial = {
  heroLabel: 'Цифровая платформа для махалли',
  heroTitle: 'Дела махалли',
  heroAccent: 'начинаются с соседей.',
  heroLead: 'Сфотографируйте проблему на улице, предложите соседям проголосовать и следите, кто и к какому сроку займётся выбранной задачей.',
  tryVote: 'Попробовать голосование',
  streetAlt: 'Улица махалли с зелёными воротами в тени деревьев',
  streetCaption: 'Иллюстрация ташкентской махалли',
  rule: ['3 голоса в месяц', 'Одна приоритетная задача', 'Видны ответственный и срок'],
  storyTitle: 'История одного фонаря',
  storyLead: 'На улице Мустакиллик погас фонарь. Посмотрите, что происходит с заявкой от первого сообщения до подтверждения ремонта.',
  storyDetails: [
    'Житель фотографирует фонарь и указывает в заявке место: улица Мустакиллик, у дома 12.',
    'Администратор проверяет заявку. После подтверждения она появляется в ленте махалли.',
    'Соседи голосуют за ремонт фонаря. Если кто-то передумает, до конца месяца он может вернуть свой голос.',
    'Если ремонт фонаря набирает больше всего голосов, система выбирает его автоматически. При равном счёте выигрывает заявка, опубликованная раньше.',
    'Администратор сообщает, кто отремонтирует фонарь и к какому сроку. Подписчики получают уведомление.',
    'После ремонта в заявке появляется фото работающего фонаря. Автор подтверждает результат или сообщает, что проблема осталась.',
  ],
  lampAlt: 'Неработающий уличный фонарь в сумерках',
  example: 'Пример',
  demoLabel: 'Демо голосования',
  voteTitle: 'Что в махалле нужно решить первым?',
  voteLead: 'Выберите до трёх задач из списка. Если передумаете, голос можно вернуть.',
  remaining: 'осталось голосов',
  voteTotal: 'Голосов: {n}',
  demoNote: 'Это учебный пример.',
  hasharAlt: 'Соседи вместе сажают дерево во время хашара',
  hasharCaption: 'Хашар · иллюстрация жизни махалли',
  communityTitle: 'Что ещё происходит в махалле?',
  rolesTitle: 'Жители и администратор махалли',
  contactUnavailable: 'Приём заявок на подключение пока закрыт. Вы можете попробовать демо голосования.',
  formStatus: { pending: 'Отправляем заявку…', error: 'Не удалось отправить заявку. Попробуйте ещё раз.' },
  skip: 'Перейти к содержанию',
}

/* ---------- English ---------- */
const en = {
  title: 'Mahalladosh — your mahalla solves its problems together',
  logoAlt: 'Mahalladosh — Our mahalla is our strength',
  nav: {
    main: 'Main navigation',
    links: ['How it works', 'Features', 'Voting demo', 'Who it’s for', 'FAQ'],
    demo: 'Request a demo', theme: 'Switch theme', menu: 'Menu', lang: 'Choose language',
  },
  hero: {
    eyebrow: 'A digital platform for the mahalla',
    a: 'Your mahalla’s problems', b: 'get solved', c: 'together',
    lead: 'Post a problem with a photo, neighbors vote, and each month the most-voted issue gets a responsible person and a clear deadline.',
    cta1: 'Connect my mahalla', cta2: 'Try voting',
    stats: [
      { n: 3, s: ' votes', d: 'per resident each month' },
      { n: 1, s: ' winner', d: 'each month, with someone responsible' },
      { n: 100, s: '%', d: 'open status history' },
    ],
  },
  phone: {
    place: 'Yangiobod mahalla', month: 'November vote', voting: 'Voting open',
    issue: 'Street light is out', where: 'Mustaqillik Street, by house 12',
    votes: '86 votes', vote: 'Vote', progress: 'In progress',
    issue2: 'Playground repair', resp: 'Responsible: Public works department · December 20',
    tabs: ['Home', 'Issues', 'Events', 'Chat'],
    f1: 'Solved — photo added', f2: 'Votes left: 2',
  },
  steps: {
    eyebrow: 'How it works', title: 'From problem to result in six steps',
    lead: 'Tap a step: every stage is visible, and who did what and when stays in the history.',
    label: 'Step {n}', status: 'Status: {s}', aria: 'Steps',
    list: [
      { title: 'Problem submitted', status: 'In moderation', desc: 'Title, description, category and location. Attach up to three photos and one short video. Upload progress is shown, and a retry after a dropped connection doesn’t create a duplicate.' },
      { title: 'Admin approves', status: 'Open', desc: 'The post passes moderation and appears in the feed. If it’s rejected, the reason is shown and the author can fix it and resubmit.' },
      { title: 'Neighbors vote', status: 'Voting open', desc: 'Three votes a month. Until the period closes, a vote can be taken back and given to another post.' },
      { title: 'Winner is chosen', status: 'Chosen in the monthly vote', desc: 'At the end of the month the system picks the most-voted issue on its own. On a tie, the earlier post wins. Nobody can swap it by hand.' },
      { title: 'Owner and deadline', status: 'In progress', desc: 'The admin names the responsible person, the next step and the expected deadline. Followers get a notification.' },
      { title: 'Result confirmed', status: 'Solved', desc: 'A photo of the finished work appears on the post. The author confirms it or reports “Problem persists” with evidence.' },
    ],
  },
  features: {
    eyebrow: 'Features', title: 'Mahalla life in one app',
    list: [
      { title: 'Posts with photos and video', desc: 'Photos up to 5 MB, video up to 25 MB. Upload progress is shown, and a retry never creates a copy of the post.' },
      { title: 'Fair monthly voting', desc: 'Limits, deadlines and repeat votes are checked on the server. On a tie, the earlier post wins.' },
      { title: 'Mahalla chat', desc: 'A shared chat only for members of your mahalla. Messages can be reported, and the admin can hide them.' },
      { title: 'Events', desc: 'Hashar clean-up days, tree planting, meetings, celebrations. Tap “I’m going” and get a reminder 24 hours before.' },
      { title: 'Announcements', desc: 'News and important messages. An “Important” announcement arrives as a push and opens the right page.' },
      { title: 'Notifications', desc: 'Post status, the winning issue, updates on issues you follow — all visible in the app even with push turned off.' },
    ],
  },
  demo: {
    eyebrow: 'Monthly vote · live demo', title: 'One most important issue each month',
    lead: 'The period starts at 00:00 Tashkent time on the first day of the month and closes automatically at the end. Try voting yourself in the demo below.',
    points: [
      { t: '3 votes', p: 'One per post. You can take a vote back and give it to another.' },
      { t: 'Automatic result', p: 'The system picks the winner based on the standings when the period closes.' },
      { t: 'If there’s no winner', p: 'Open issues move to the next period and start again from zero votes.' },
    ],
    card: 'Mahalla vote', closes: '{n} days until it closes', aria: 'Voting demo', left: 'Votes left: {n}',
    issues: [
      { name: 'Street light is out', place: 'Mustaqillik Street' },
      { name: 'No trash container', place: 'Navoi Street, house 4' },
      { name: 'Irrigation ditch not cleaned', place: 'Bog Street' },
      { name: 'Potholes in the road', place: 'Amir Temur Avenue' },
    ],
    vote: 'Vote', withdraw: 'Take back',
    status: 'You have {n} votes left.', ok: 'Your vote is counted',
    back: 'Vote taken back. Your limit is restored.', limit: 'You’ve used this month’s votes. Take one back first.',
  },
  statuses: {
    eyebrow: 'Transparency', title: 'An issue’s status is always clear',
    lead: 'Each status has an icon and a label as well as a color, so everyone can read it.',
    list: ['In moderation', 'Needs changes', 'Voting open', 'Chosen in the monthly vote', 'In progress', 'Waiting for an organization’s reply', 'Solved'],
  },
  roles: {
    eyebrow: 'Who it’s for', title: 'An app for residents, a panel for the admin',
    tabs: ['Residents · mobile app', 'Admin · web panel'],
    aholi: [
      { t: 'Report a problem', p: 'With photos and video' }, { t: 'Vote', p: '3 votes a month' },
      { t: 'Mahalla chat', p: 'Talk with neighbors' }, { t: 'Join events', p: 'Tap “I’m going”' },
      { t: 'Follow issues', p: 'Stay up to date' }, { t: 'Android and iOS', p: 'One app' },
    ],
    admin: [
      { t: 'Create accounts', p: 'With a temporary password' }, { t: 'Moderation', p: 'Approve and reject' },
      { t: 'Vote results', p: 'Owner and deadline' }, { t: 'Events', p: 'Create and publish' },
      { t: 'Announcements', p: 'Important ones by push' }, { t: 'Activity log', p: 'Everything is recorded' },
    ],
  },
  security: {
    eyebrow: 'Security', title: 'Your data is protected',
    list: [
      { t: 'Mahallas are kept apart', p: 'One mahalla can’t see another’s posts, chat or files.' },
      { t: 'Access through the admin', p: 'There’s no open sign-up. The admin verifies each resident and issues a temporary password, which is changed at first sign-in.' },
      { t: 'Minimal data', p: 'Only a display name. No home address or passport is requested, and GPS data is stripped from photos.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ', title: 'Frequently asked questions',
    list: [
      { q: 'How do I sign in to the app?', a: 'Your mahalla admin creates an account for you and gives you a temporary password. You set your own password the first time you sign in.' },
      { q: 'How many problems can I report?', a: 'Posting is unlimited, but you get only three votes a month, one per post.' },
      { q: 'What if it’s an emergency?', a: 'The post screen has a reminder: in an emergency, contact the relevant emergency service directly.' },
      { q: 'Can the admin change the winner?', a: 'No. The system picks the winner automatically when the period ends, and it can’t be changed by hand.' },
      { q: 'Which languages are supported?', a: 'The app works in Uzbek (Latin and Cyrillic) and Russian. This site is also available in English.' },
    ],
  },
  contact: {
    title: 'Connect your mahalla',
    lead: 'Leave your details — we’ll walk you through a demo and set up the first admin for your mahalla.',
    name: 'Your name', namePh: 'e.g. Aziza Karimova', phone: 'Phone', phonePh: '+998 90 123 45 67',
    mahalla: 'Mahalla name', mahallaPh: 'e.g. Yangiobod', who: 'Who are you?',
    options: ['Mahalla chair / admin', 'District administration representative', 'Resident'],
    submit: 'Request a demo', thanks: 'Thank you. We’ll be in touch soon.',
  },
  footer: { copy: '© 2026 Mahalladosh. All rights reserved.', slogan: 'Our mahalla is our strength' },
  editorial: {
    heroLabel: 'A digital platform for the mahalla',
    heroTitle: 'Mahalla work',
    heroAccent: 'starts with neighbors.',
    heroLead: 'Take a photo of a problem on your street. Let neighbors vote. See who will fix the chosen issue, and by when.',
    tryVote: 'Try voting',
    streetAlt: 'A mahalla street with a green gate in the shade of trees',
    streetCaption: 'Illustration of a Tashkent mahalla',
    rule: ['3 votes a month', 'One priority issue', 'Owner and deadline in the open'],
    storyTitle: 'The story of one street light',
    storyLead: 'A street light went out on Mustaqillik Street. Follow it through every stage, from the first report to the confirmed repair.',
    storyDetails: [
      'A neighbor photographs the light and marks the spot in the report: Mustaqillik Street, by house 12.',
      'The admin checks the report. Once approved, the problem appears in the mahalla feed for everyone.',
      'Neighbors vote to fix the light. Anyone who changes their mind can take their vote back until the month ends.',
      'If the light gets the most votes by the end of the month, the system picks it as the priority issue. On a tie, the earlier report wins.',
      'The admin announces who will repair the light and when the work will be done. Neighbors following the issue get a notification.',
      'After the repair, a photo of the working light is added to the post. The author can confirm the result or report that the problem persists.',
    ],
    lampAlt: 'A street light that is off at dusk',
    example: 'Example',
    demoLabel: 'Voting demo',
    voteTitle: 'What should the mahalla fix first?',
    voteLead: 'Pick up to three of the examples below. If you change your mind, take your vote back.',
    remaining: 'votes left',
    voteTotal: '{n} votes',
    demoNote: 'This is a practice example.',
    hasharAlt: 'Neighbors planting a tree together during a hashar',
    hasharCaption: 'Hashar · illustration of mahalla life',
    communityTitle: 'What else happens in the mahalla?',
    rolesTitle: 'Residents and the mahalla admin',
    contactUnavailable: 'We aren’t taking connection requests yet. You can try the voting demo in the meantime.',
    formStatus: { pending: 'Sending your request…', error: 'Your request wasn’t sent. Please try again.' },
    skip: 'Skip to main content',
  },
}

const uzCyrl = walk(uz)
uzCyrl.logoAlt = uz.logoAlt

export const dictionaries = { uz, uzc: uzCyrl, ru, en }
export const languages = [
  { code: 'uz', short: 'UZ', label: 'O‘zbekcha (lotin)', html: 'uz' },
  { code: 'uzc', short: 'ЎЗ', label: 'Ўзбекча (кирилл)', html: 'uz-Cyrl' },
  { code: 'ru', short: 'RU', label: 'Русский', html: 'ru' },
  { code: 'en', short: 'EN', label: 'English', html: 'en' },
]

export const LangContext = createContext({ lang: 'uz', setLang: () => {}, t: uz })
export const useLang = () => useContext(LangContext)
export const fmt = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '')
