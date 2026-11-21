import type { LocalizedPolicy } from "@/lib/policy";

// Privacy policy for the "Studio" project — a mobile app for salons,
// barbershops and independent masters. Facts mirror section 12 of the
// public offer (content/studio-oferta.ts); keep the two in sync.
// Values in [square brackets] are not decided yet and must be filled in
// before the policy is published.

export const studioPrivacy: LocalizedPolicy = {
  en: {
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    updatedDate: "November 21, 2026",
    intro:
      "This Privacy Policy explains how [Company legal name] (“we”, “us”) collects, uses, shares and protects personal data when you use the Studio mobile app for iOS and Android and the online booking websites created with it, and what choices you have.",
    sections: [
      {
        heading: "1. Who We Are",
        body: [
          {
            type: "paragraph",
            text: "Studio is operated by [Company legal name], TIN [●], [legal address], Republic of Uzbekistan. Studio is a business tool for salons, barbershops and independent masters: appointment calendar, client base, services, team, payment records, reports and an online Booking Website.",
          },
          {
            type: "paragraph",
            text: "For the data of app users and businesses we are the operator of personal data. For the data of a business's own clients, the business is the owner and operator, and we process that data only on its behalf and instructions (see section 4).",
          },
        ],
      },
      {
        heading: "2. Data We Collect",
        body: [
          {
            type: "list",
            items: [
              "Account data: your name, mobile phone number, profile photo and interface language.",
              "Sign-in data: one-time SMS codes and session tokens. Session tokens are kept in the secure storage of your device.",
              "Business data: business and branch names, addresses, phone numbers, time zone, opening hours, map location, logo, cover and gallery photos, services and prices, team members, their roles and schedules, and the TIN entered by the Owner.",
              "Client data entered by the business: name, phone number, e-mail, date of birth, gender, notes, categories, visit history, number of visits and no-shows, amounts paid and booking comments.",
              "Booking Website data: the name and phone number a client enters to make a booking, and the booking itself.",
              "Payment records: payments, refunds and cash-ups the business records for its own accounting. The Studio app does not process these payments.",
              "Subscription data: plan, period, order number, amount and payment status. Card details are entered only on the payment provider's page; we never receive or store them.",
              "Device data: push notification token, device type, operating system, app version and a device code shown on the support screen.",
              "Location: map search text and coordinates you choose for a branch. Your device location is used only when you request it and allow access.",
              "Photos: images you choose to upload from your camera or gallery (profile photo, logo, cover, gallery, service photos).",
              "Support messages you send us.",
            ],
          },
        ],
      },
      {
        heading: "3. How We Use Data",
        body: [
          {
            type: "list",
            items: [
              "To create your account, sign you in by SMS code and keep your session.",
              "To run the business features of the app: calendar, client base, services, team, schedules, payment records and reports, shown to each user according to their role.",
              "To publish the Booking Website and create, cancel and reschedule bookings.",
              "To send SMS codes and push notifications about bookings.",
              "To process Subscription orders and activate plans.",
              "To provide support, prevent fraud and abuse, and keep the service secure.",
              "To improve the service using anonymised and aggregated statistics.",
            ],
          },
          {
            type: "paragraph",
            text: "We do not sell personal data and do not use it for advertising.",
          },
        ],
      },
      {
        heading: "4. Data of Businesses' Clients",
        body: [
          {
            type: "paragraph",
            text: "Clients of a salon or master do not use the Studio app. Their data is entered by the business or by the client on the Booking Website and belongs to that business. We store it, show it to the business's users according to their roles and use it to send booking codes and notifications. We do not use it for our own purposes. A client who wants to access, correct or delete their data should contact the business; requests sent to us are forwarded to it.",
          },
        ],
      },
      {
        heading: "5. Sharing with Third Parties",
        body: [
          {
            type: "paragraph",
            text: "We share data only with the services we need to run Studio, and each receives only the data needed for its function:",
          },
          {
            type: "list",
            items: [
              "SMS provider [name]: phone number and one-time code.",
              "Click (payment provider): order number and amount. Card data stays with Click.",
              "Google Firebase Cloud Messaging and Apple Push Notification service: device token and notification text. Businesses can hide client details in notifications.",
              "Yandex Maps: map search text and coordinates.",
              "Cloudflare Turnstile: captcha check on the Booking Website.",
              "Apple App Store and Google Play: distribution of the app under their own terms.",
            ],
          },
          {
            type: "paragraph",
            text: "We may also disclose data when required by law or by a decision of a competent authority.",
          },
        ],
      },
      {
        heading: "6. Where Data Is Stored",
        body: [
          {
            type: "paragraph",
            text: "Personal data of citizens of the Republic of Uzbekistan is collected, systematised and stored in databases located in the Republic of Uzbekistan [hosting provider / data centre].",
          },
        ],
      },
      {
        heading: "7. Data Retention",
        body: [
          {
            type: "paragraph",
            text: "We keep account and business data while the account or business is active. After a subscription ends, business data is kept for 90 days so it can be restored on renewal; after that it may be deleted or anonymised. Data is kept longer only where the law requires it.",
          },
        ],
      },
      {
        heading: "8. Security",
        body: [
          {
            type: "paragraph",
            text: "We protect data with role-based access, masking of client identity from other staff, the option to hide client details in push notifications, storage of session tokens in the device's secure storage, and encryption of data in transit.",
          },
        ],
      },
      {
        heading: "9. Your Rights and Account Deletion",
        body: [
          {
            type: "paragraph",
            text: "You may request access to, correction, export or deletion of your data, and deletion of your user account or business, by contacting support (section 12). We respond within 30 days. When an account is deleted, its personal data is deleted or anonymised, except data we must keep by law.",
          },
          {
            type: "paragraph",
            text: "You can turn off push notifications and revoke location, camera and photo access at any time in your device settings.",
          },
        ],
      },
      {
        heading: "10. Children",
        body: [
          {
            type: "paragraph",
            text: "Studio is a business app intended for people aged 18 and over. We do not knowingly collect data from children through the app.",
          },
        ],
      },
      {
        heading: "11. Changes to This Policy",
        body: [
          {
            type: "paragraph",
            text: "We may update this Privacy Policy. The current version is always published at this address with its date. Material changes are announced in the app.",
          },
        ],
      },
      {
        heading: "12. Contact Us",
        body: [
          {
            type: "list",
            items: [
              "[Company legal name], [legal address]",
              "E-mail: [support@●]",
              "Telegram: [@●]",
              "Phone / WhatsApp: [+998 ●]",
            ],
          },
        ],
      },
    ],
  },

  ru: {
    title: "Политика конфиденциальности",
    updatedLabel: "Последнее обновление",
    updatedDate: "21 ноября 2026 г.",
    intro:
      "Настоящая Политика конфиденциальности объясняет, как [наименование компании] («мы») собирает, использует, передаёт и защищает персональные данные при использовании мобильного приложения Studio для iOS и Android и созданных в нём сайтов онлайн-записи, а также какие у вас есть возможности.",
    sections: [
      {
        heading: "1. Кто мы",
        body: [
          {
            type: "paragraph",
            text: "Studio предоставляется [наименование компании], ИНН [●], [юридический адрес], Республика Узбекистан. Studio — рабочий инструмент для салонов, барбершопов и частных мастеров: календарь записей, клиентская база, услуги, команда, учёт оплат, отчёты и Сайт онлайн-записи.",
          },
          {
            type: "paragraph",
            text: "В отношении данных пользователей приложения и бизнесов мы являемся оператором персональных данных. В отношении данных клиентов бизнеса собственником и оператором является сам бизнес, а мы обрабатываем эти данные только от его имени и по его поручению (см. раздел 4).",
          },
        ],
      },
      {
        heading: "2. Какие данные мы собираем",
        body: [
          {
            type: "list",
            items: [
              "Данные учётной записи: имя, номер мобильного телефона, фото профиля и язык интерфейса.",
              "Данные входа: одноразовые SMS-коды и токены сессии. Токены сессии хранятся в защищённом хранилище устройства.",
              "Данные бизнеса: названия бизнеса и филиалов, адреса, телефоны, часовой пояс, часы работы, место на карте, логотип, обложка и фото галереи, услуги и цены, сотрудники, их роли и графики, а также ИНН, указанный Владельцем.",
              "Данные клиентов, вносимые бизнесом: имя, номер телефона, e-mail, дата рождения, пол, заметки, категории, история визитов, количество визитов и неявок, суммы оплат и комментарии к записи.",
              "Данные Сайта записи: имя и номер телефона, которые клиент вводит при записи, и сама запись.",
              "Учёт оплат: оплаты, возвраты и закрытия кассы, которые бизнес фиксирует для собственного учёта. Приложение Studio эти платежи не проводит.",
              "Данные подписки: тариф, период, номер заказа, сумма и статус оплаты. Данные карты вводятся только на странице платёжного провайдера; мы их не получаем и не храним.",
              "Данные устройства: токен push-уведомлений, тип устройства, операционная система, версия приложения и код устройства, показанный на экране поддержки.",
              "Местоположение: текст поиска на карте и координаты, выбранные вами для филиала. Местоположение устройства используется только по вашему запросу и с вашего разрешения.",
              "Фотографии: изображения, которые вы сами загружаете с камеры или из галереи (фото профиля, логотип, обложка, галерея, фото услуг).",
              "Сообщения, которые вы отправляете в поддержку.",
            ],
          },
        ],
      },
      {
        heading: "3. Как мы используем данные",
        body: [
          {
            type: "list",
            items: [
              "Чтобы создать учётную запись, выполнить вход по SMS-коду и поддерживать сессию.",
              "Чтобы обеспечить работу функций приложения: календарь, клиентская база, услуги, команда, графики, учёт оплат и отчёты — каждому пользователю согласно его роли.",
              "Чтобы публиковать Сайт записи и создавать, отменять и переносить записи.",
              "Чтобы отправлять SMS-коды и push-уведомления о записях.",
              "Чтобы обрабатывать заказы подписки и активировать тарифы.",
              "Чтобы оказывать поддержку, предотвращать мошенничество и злоупотребления и обеспечивать безопасность сервиса.",
              "Чтобы улучшать сервис на основе обезличенной и агрегированной статистики.",
            ],
          },
          {
            type: "paragraph",
            text: "Мы не продаём персональные данные и не используем их для рекламы.",
          },
        ],
      },
      {
        heading: "4. Данные клиентов бизнеса",
        body: [
          {
            type: "paragraph",
            text: "Клиенты салона или мастера не пользуются приложением Studio. Их данные вносит бизнес или сам клиент на Сайте записи, и они принадлежат этому бизнесу. Мы храним их, показываем пользователям бизнеса согласно их ролям и используем для отправки кодов и уведомлений о записи. В собственных целях мы их не используем. Клиент, который хочет получить, исправить или удалить свои данные, обращается к бизнесу; запросы, направленные нам, мы передаём бизнесу.",
          },
        ],
      },
      {
        heading: "5. Передача третьим лицам",
        body: [
          {
            type: "paragraph",
            text: "Мы передаём данные только сервисам, необходимым для работы Studio, и каждый получает лишь данные, нужные для его функции:",
          },
          {
            type: "list",
            items: [
              "SMS-провайдер [наименование]: номер телефона и одноразовый код.",
              "Click (платёжный провайдер): номер заказа и сумма. Данные карты остаются у Click.",
              "Google Firebase Cloud Messaging и Apple Push Notification service: токен устройства и текст уведомления. Бизнес может скрывать данные клиента в уведомлениях.",
              "Яндекс Карты: текст поиска на карте и координаты.",
              "Cloudflare Turnstile: проверка captcha на Сайте записи.",
              "Apple App Store и Google Play: распространение приложения на их условиях.",
            ],
          },
          {
            type: "paragraph",
            text: "Мы также можем раскрыть данные, если этого требует закон или решение уполномоченного органа.",
          },
        ],
      },
      {
        heading: "6. Где хранятся данные",
        body: [
          {
            type: "paragraph",
            text: "Сбор, систематизация и хранение персональных данных граждан Республики Узбекистан осуществляются в базах данных, расположенных на территории Республики Узбекистан [хостинг-провайдер / дата-центр].",
          },
        ],
      },
      {
        heading: "7. Срок хранения",
        body: [
          {
            type: "paragraph",
            text: "Мы храним данные учётной записи и бизнеса, пока они активны. После окончания подписки данные бизнеса хранятся 90 дней, чтобы их можно было восстановить при продлении; после этого они могут быть удалены или обезличены. Дольше данные хранятся только если этого требует закон.",
          },
        ],
      },
      {
        heading: "8. Безопасность",
        body: [
          {
            type: "paragraph",
            text: "Мы защищаем данные с помощью разграничения доступа по ролям, скрытия данных клиентов от других сотрудников, возможности скрывать данные клиента в push-уведомлениях, хранения токенов сессии в защищённом хранилище устройства и шифрования данных при передаче.",
          },
        ],
      },
      {
        heading: "9. Ваши права и удаление учётной записи",
        body: [
          {
            type: "paragraph",
            text: "Вы можете запросить доступ к своим данным, их исправление, выгрузку или удаление, а также удаление учётной записи пользователя или бизнеса, обратившись в поддержку (раздел 12). Мы отвечаем в течение 30 дней. При удалении учётной записи её персональные данные удаляются или обезличиваются, кроме данных, которые мы обязаны хранить по закону.",
          },
          {
            type: "paragraph",
            text: "Вы можете в любой момент отключить push-уведомления и отозвать доступ к местоположению, камере и фото в настройках устройства.",
          },
        ],
      },
      {
        heading: "10. Дети",
        body: [
          {
            type: "paragraph",
            text: "Studio — рабочее приложение для лиц старше 18 лет. Мы сознательно не собираем данные детей через приложение.",
          },
        ],
      },
      {
        heading: "11. Изменения в политике",
        body: [
          {
            type: "paragraph",
            text: "Мы можем обновлять настоящую Политику конфиденциальности. Актуальная редакция с датой всегда опубликована по этому адресу. О существенных изменениях мы сообщаем в приложении.",
          },
        ],
      },
      {
        heading: "12. Свяжитесь с нами",
        body: [
          {
            type: "list",
            items: [
              "[наименование компании], [юридический адрес]",
              "E-mail: [support@●]",
              "Telegram: [@●]",
              "Телефон / WhatsApp: [+998 ●]",
            ],
          },
        ],
      },
    ],
  },

  uz: {
    title: "Maxfiylik siyosati",
    updatedLabel: "Oxirgi yangilanish",
    updatedDate: "2026-yil 21-noyabr",
    intro:
      "Ushbu Maxfiylik siyosati [kompaniya nomi] (“biz”) iOS va Android uchun Studio mobil ilovasi hamda u orqali yaratilgan onlayn yozilish saytlaridan foydalanganingizda shaxsga doir ma’lumotlarni qanday yig‘ishi, ishlatishi, uzatishi va himoya qilishini, shuningdek sizda qanday imkoniyatlar borligini tushuntiradi.",
    sections: [
      {
        heading: "1. Biz kimmiz",
        body: [
          {
            type: "paragraph",
            text: "Studio xizmatini [kompaniya nomi], STIR [●], [yuridik manzil], O‘zbekiston Respublikasi taqdim etadi. Studio — salonlar, barbershoplar va xususiy ustalar uchun ish vositasi: yozuvlar taqvimi, mijozlar bazasi, xizmatlar, jamoa, to‘lovlarni hisobga olish, hisobotlar va onlayn Yozilish sayti.",
          },
          {
            type: "paragraph",
            text: "Ilova foydalanuvchilari va bizneslar ma’lumotlariga nisbatan biz shaxsga doir ma’lumotlar operatorimiz. Biznes mijozlarining ma’lumotlariga nisbatan mulkdor va operator biznesning o‘zi bo‘lib, biz bu ma’lumotlarni faqat uning nomidan va topshirig‘i bo‘yicha qayta ishlaymiz (4-bo‘limga qarang).",
          },
        ],
      },
      {
        heading: "2. Qanday ma’lumotlarni yig‘amiz",
        body: [
          {
            type: "list",
            items: [
              "Hisob ma’lumotlari: ismingiz, mobil telefon raqamingiz, profil rasmi va interfeys tili.",
              "Kirish ma’lumotlari: bir martalik SMS-kodlar va sessiya tokenlari. Sessiya tokenlari qurilmaning himoyalangan xotirasida saqlanadi.",
              "Biznes ma’lumotlari: biznes va filiallar nomlari, manzillar, telefonlar, vaqt mintaqasi, ish vaqti, xaritadagi joylashuv, logotip, muqova va galereya rasmlari, xizmatlar va narxlar, xodimlar, ularning rollari va ish jadvallari, shuningdek Egasi kiritgan STIR.",
              "Biznes kiritadigan mijozlar ma’lumotlari: ism, telefon raqami, e-mail, tug‘ilgan sana, jins, eslatmalar, toifalar, tashriflar tarixi, tashriflar va kelmaslik soni, to‘lov summalari va yozuvga izohlar.",
              "Yozilish sayti ma’lumotlari: mijoz yozilishda kiritadigan ism va telefon raqami hamda yozuvning o‘zi.",
              "To‘lovlar hisobi: biznes o‘z hisobi uchun qayd etadigan to‘lovlar, qaytarishlar va kassani yopish. Studio ilovasi bu to‘lovlarni amalga oshirmaydi.",
              "Obuna ma’lumotlari: tarif, muddat, buyurtma raqami, summa va to‘lov holati. Karta ma’lumotlari faqat to‘lov provayderi sahifasida kiritiladi; biz ularni olmaymiz va saqlamaymiz.",
              "Qurilma ma’lumotlari: push-bildirishnoma tokeni, qurilma turi, operatsion tizim, ilova versiyasi va qo‘llab-quvvatlash ekranida ko‘rsatiladigan qurilma kodi.",
              "Joylashuv: xaritadagi qidiruv matni va filial uchun siz tanlagan koordinatalar. Qurilma joylashuvi faqat sizning so‘rovingiz va ruxsatingiz bilan ishlatiladi.",
              "Rasmlar: kamera yoki galereyadan o‘zingiz yuklagan tasvirlar (profil rasmi, logotip, muqova, galereya, xizmat rasmlari).",
              "Qo‘llab-quvvatlash xizmatiga yuborgan xabarlaringiz.",
            ],
          },
        ],
      },
      {
        heading: "3. Ma’lumotlardan qanday foydalanamiz",
        body: [
          {
            type: "list",
            items: [
              "Hisob yaratish, SMS-kod orqali kirish va sessiyani saqlash uchun.",
              "Ilova funksiyalari ishlashi uchun: taqvim, mijozlar bazasi, xizmatlar, jamoa, jadvallar, to‘lovlar hisobi va hisobotlar — har bir foydalanuvchiga uning roliga ko‘ra.",
              "Yozilish saytini e’lon qilish hamda yozuvlarni yaratish, bekor qilish va ko‘chirish uchun.",
              "SMS-kodlar va yozuvlar haqida push-bildirishnomalar yuborish uchun.",
              "Obuna buyurtmalarini qayta ishlash va tariflarni faollashtirish uchun.",
              "Qo‘llab-quvvatlash ko‘rsatish, firibgarlik va suiiste’molning oldini olish hamda xizmat xavfsizligini ta’minlash uchun.",
              "Anonimlashtirilgan va umumlashtirilgan statistika asosida xizmatni yaxshilash uchun.",
            ],
          },
          {
            type: "paragraph",
            text: "Biz shaxsga doir ma’lumotlarni sotmaymiz va reklama uchun ishlatmaymiz.",
          },
        ],
      },
      {
        heading: "4. Biznes mijozlarining ma’lumotlari",
        body: [
          {
            type: "paragraph",
            text: "Salon yoki usta mijozlari Studio ilovasidan foydalanmaydi. Ularning ma’lumotlarini biznes yoki mijozning o‘zi Yozilish saytida kiritadi va ular shu biznesga tegishli. Biz ularni saqlaymiz, biznes foydalanuvchilariga rollariga ko‘ra ko‘rsatamiz hamda yozuv kodlari va bildirishnomalarini yuborish uchun ishlatamiz. O‘z maqsadlarimizda ulardan foydalanmaymiz. O‘z ma’lumotlarini olish, tuzatish yoki o‘chirishni istagan mijoz biznesga murojaat qiladi; bizga yuborilgan so‘rovlarni biznesga uzatamiz.",
          },
        ],
      },
      {
        heading: "5. Uchinchi shaxslarga uzatish",
        body: [
          {
            type: "paragraph",
            text: "Biz ma’lumotlarni faqat Studio ishlashi uchun zarur xizmatlarga uzatamiz va har biri faqat o‘z vazifasi uchun kerakli ma’lumotlarni oladi:",
          },
          {
            type: "list",
            items: [
              "SMS-provayder [nomi]: telefon raqami va bir martalik kod.",
              "Click (to‘lov provayderi): buyurtma raqami va summa. Karta ma’lumotlari Clickda qoladi.",
              "Google Firebase Cloud Messaging va Apple Push Notification service: qurilma tokeni va bildirishnoma matni. Biznes bildirishnomalarda mijoz ma’lumotlarini yashirishi mumkin.",
              "Yandex Xaritalar: xaritadagi qidiruv matni va koordinatalar.",
              "Cloudflare Turnstile: Yozilish saytida captcha tekshiruvi.",
              "Apple App Store va Google Play: ilovani o‘z shartlari asosida tarqatish.",
            ],
          },
          {
            type: "paragraph",
            text: "Shuningdek, qonun yoki vakolatli organ qarori talab qilsa, ma’lumotlarni oshkor qilishimiz mumkin.",
          },
        ],
      },
      {
        heading: "6. Ma’lumotlar qayerda saqlanadi",
        body: [
          {
            type: "paragraph",
            text: "O‘zbekiston Respublikasi fuqarolarining shaxsga doir ma’lumotlarini yig‘ish, tizimlashtirish va saqlash O‘zbekiston Respublikasi hududida joylashgan ma’lumotlar bazalarida amalga oshiriladi [xosting-provayder / ma’lumotlar markazi].",
          },
        ],
      },
      {
        heading: "7. Saqlash muddati",
        body: [
          {
            type: "paragraph",
            text: "Hisob va biznes ma’lumotlarini ular faol bo‘lgan davrda saqlaymiz. Obuna tugaganidan keyin biznes ma’lumotlari uzaytirilganda tiklash mumkin bo‘lishi uchun 90 kun saqlanadi; shundan so‘ng ular o‘chirilishi yoki anonimlashtirilishi mumkin. Ma’lumotlar faqat qonun talab qilgan hollarda uzoqroq saqlanadi.",
          },
        ],
      },
      {
        heading: "8. Xavfsizlik",
        body: [
          {
            type: "paragraph",
            text: "Biz ma’lumotlarni rollar bo‘yicha kirishni cheklash, mijoz ma’lumotlarini boshqa xodimlardan yashirish, push-bildirishnomalarda mijoz ma’lumotlarini yashirish imkoniyati, sessiya tokenlarini qurilmaning himoyalangan xotirasida saqlash va uzatishda ma’lumotlarni shifrlash orqali himoya qilamiz.",
          },
        ],
      },
      {
        heading: "9. Huquqlaringiz va hisobni o‘chirish",
        body: [
          {
            type: "paragraph",
            text: "Qo‘llab-quvvatlash xizmatiga (12-bo‘lim) murojaat qilib, ma’lumotlaringizga kirish, ularni tuzatish, eksport qilish yoki o‘chirishni, shuningdek foydalanuvchi hisobi yoki biznesni o‘chirishni so‘rashingiz mumkin. Biz 30 kun ichida javob beramiz. Hisob o‘chirilganda uning shaxsga doir ma’lumotlari o‘chiriladi yoki anonimlashtiriladi, qonun bo‘yicha saqlashimiz shart bo‘lgan ma’lumotlar bundan mustasno.",
          },
          {
            type: "paragraph",
            text: "Push-bildirishnomalarni o‘chirib qo‘yish hamda joylashuv, kamera va rasmlarga ruxsatni istalgan vaqtda qurilma sozlamalarida bekor qilishingiz mumkin.",
          },
        ],
      },
      {
        heading: "10. Bolalar",
        body: [
          {
            type: "paragraph",
            text: "Studio — 18 yoshdan oshgan shaxslar uchun mo‘ljallangan ish ilovasi. Biz ilova orqali bolalarning ma’lumotlarini ongli ravishda yig‘maymiz.",
          },
        ],
      },
      {
        heading: "11. Siyosatdagi o‘zgarishlar",
        body: [
          {
            type: "paragraph",
            text: "Biz ushbu Maxfiylik siyosatini yangilashimiz mumkin. Joriy tahrir sanasi bilan har doim shu manzilda e’lon qilinadi. Muhim o‘zgarishlar haqida ilovada xabar beramiz.",
          },
        ],
      },
      {
        heading: "12. Biz bilan bog‘lanish",
        body: [
          {
            type: "list",
            items: [
              "[kompaniya nomi], [yuridik manzil]",
              "E-mail: [support@●]",
              "Telegram: [@●]",
              "Telefon / WhatsApp: [+998 ●]",
            ],
          },
        ],
      },
    ],
  },
};
