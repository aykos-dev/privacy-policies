import type { LocalizedPolicy } from "@/lib/policy";

// Public offer agreement (oferta) for the "Studio" project — a mobile app
// for salons, barbershops and independent masters: calendar, clients,
// services, team, payment records, reports, online booking website.
// Values in [square brackets] are not decided yet and must be filled in
// before the offer is published.

export const studioOferta: LocalizedPolicy = {
  en: {
    title: "Public Offer Agreement",
    updatedLabel: "Version dated",
    updatedDate: "November 21, 2026",
    intro:
      "This document is a public offer by [Company legal name] to conclude a licence agreement for the use of the Studio software service on the terms set out below. It is addressed to legal entities, individual entrepreneurs and self-employed persons in the Republic of Uzbekistan who provide beauty and other personal services. Read it carefully: by accepting it in the manner described in section 4, you conclude a binding agreement with us.",
    sections: [
      {
        heading: "1. General Provisions",
        body: [
          {
            type: "paragraph",
            text: "1.1. This Agreement is a public offer within the meaning of Articles 367 and 369 of the Civil Code of the Republic of Uzbekistan. Its acceptance in accordance with section 4 is equivalent to concluding the Agreement in writing on the terms below (Article 370 of the Civil Code).",
          },
          {
            type: "paragraph",
            text: "1.2. The Licensor is [Company legal name], TIN [●], registered at [legal address] (the “Licensor”, “we”). The Licensor's full details are given in section 21.",
          },
          {
            type: "paragraph",
            text: "1.3. The Licensor may change this Agreement in accordance with section 19. The current version is always published at this address.",
          },
        ],
      },
      {
        heading: "2. Definitions",
        body: [
          {
            type: "list",
            items: [
              "Service — the Studio mobile application for iOS and Android, its server part and the online booking websites created through it, owned and operated by the Licensor.",
              "Customer — a legal entity, individual entrepreneur or self-employed person who has created a Business in the Service and accepted this Agreement.",
              "Business — the Customer's account in the Service, containing its branches, services, team, clients, schedules, payment records and settings.",
              "User — an individual who signs in to the Service with their phone number. One User may belong to several Businesses with a different role in each.",
              "Owner, Manager, Staff — the roles a User may have in a Business, with the permissions described in section 5.",
              "Client — a customer of the Customer: a person whose data the Customer enters in the Service or who books the Customer's services through the Booking Website. Clients do not use the Studio app.",
              "Booking Website — a public web page of a Business, created in the Service, through which Clients book the Customer's services themselves.",
              "Subscription — paid access to the Service for a chosen Plan and period.",
              "Plan — a set of Service terms (name, team size limit, price options by period) published in the app.",
              "Trial — a free period of use of the Service offered on the terms shown in the app.",
            ],
          },
        ],
      },
      {
        heading: "3. Subject of the Agreement",
        body: [
          {
            type: "paragraph",
            text: "3.1. The Licensor grants the Customer a non-exclusive, non-transferable right to use the Service over the internet for the term of the paid Subscription (or Trial), within its intended functionality, and the Customer pays the licence fee under the terms of the chosen Plan.",
          },
          {
            type: "paragraph",
            text: "3.2. The Service is software only. It helps the Customer keep its appointment calendar, client base, service catalog, team and work schedules, record payments it receives from its Clients, view reports and run a Booking Website.",
          },
          {
            type: "paragraph",
            text: "3.3. The Service does not accept, hold or transfer money between the Customer and its Clients and is not a payment system or payment organisation. It only records payments that the Customer receives by its own means. The only payment the Licensor receives under this Agreement is the Subscription fee.",
          },
          {
            type: "paragraph",
            text: "3.4. No ownership or other exclusive rights to the Service, its code, design, trademarks or databases pass to the Customer.",
          },
        ],
      },
      {
        heading: "4. Acceptance of the Offer",
        body: [
          {
            type: "paragraph",
            text: "4.1. The Customer accepts this offer in full, without reservations, by performing any of the following actions: creating a Business in the Service; or paying for a Subscription. The Agreement is concluded from the moment of the first such action.",
          },
          {
            type: "paragraph",
            text: "4.2. The person performing the acceptance confirms that they are at least 18 years old and are authorised to act on behalf of the Customer. If the Customer is a legal entity, the acceptance is made on its behalf.",
          },
          {
            type: "paragraph",
            text: "4.3. Users who join an existing Business by invitation act on behalf of that Business's Customer and are bound by the rules of the Service in the part that applies to them.",
          },
        ],
      },
      {
        heading: "5. Registration, Sign-in and Roles",
        body: [
          {
            type: "paragraph",
            text: "5.1. Sign-in is by an Uzbek mobile phone number (+998) and a one-time SMS code. The first successful sign-in creates the User profile. A code is valid for 3 minutes; it can be resent after 60 seconds; no more than 5 codes may be requested per hour and no more than 5 wrong attempts are allowed per code.",
          },
          {
            type: "paragraph",
            text: "5.2. The phone number cannot be changed in the app; a change is made through support after the User's identity is confirmed.",
          },
          {
            type: "paragraph",
            text: "5.3. A session stays active for up to 30 days of inactivity for the User and up to 7 days for the selected Business. The Customer and its Users are responsible for keeping their devices and SIM cards secure; actions performed in the Service from a User's signed-in device are considered actions of that User.",
          },
          {
            type: "paragraph",
            text: "5.4. Roles in a Business:",
          },
          {
            type: "list",
            items: [
              "Owner — creates the Business; has all rights of a Manager and in addition may invite Managers, set the Business's TIN and create, rename and delete the Booking Website.",
              "Manager — runs the Business day to day: catalog, schedules, clients, invitations of Staff, payment registers and payment rules, refunds, analytics, the Subscription and its payment, notification privacy settings.",
              "Staff — performs services; sees their own appointments in full and colleagues' appointments with the Client's identity masked; may create Clients and view the client base but not edit or delete it; may take payments only if the Business allows it; sees only their own statistics.",
            ],
          },
          {
            type: "paragraph",
            text: "5.5. The Owner or a Manager invites people to the Business by entering their name, role and phone number; the Service generates an invitation code with an expiry date, which the Customer passes to the person outside the Service. Invitations may be revoked before use.",
          },
          {
            type: "paragraph",
            text: "5.6. The Customer is responsible for the choice of people it invites, the roles it gives them, and all their actions in the Service, and must remove access of people who no longer work for it.",
          },
        ],
      },
      {
        heading: "6. Functionality of the Service",
        body: [
          {
            type: "paragraph",
            text: "6.1. As of the date of this version, the Service includes:",
          },
          {
            type: "list",
            items: [
              "appointment calendar by staff member, with appointment statuses (booked, confirmed, completed, cancelled, no-show);",
              "client base: client cards, visit history, notes, categories, archive and restore;",
              "service catalog with categories, duration, prices, photos and online-booking settings;",
              "team, invitations, staff public profiles, weekly schedules, day overrides and time off;",
              "branch and business profile: address, phone, time zone, opening hours, map location, logo, cover and gallery;",
              "recording of payments (cash, card, other), refunds and price changes; payment registers; daily cash-up;",
              "reports and analytics;",
              "the Booking Website;",
              "push notifications about bookings;",
              "Subscription management and in-app support contacts.",
            ],
          },
          {
            type: "paragraph",
            text: "6.2. Sections of the app marked as “coming soon”, “not available yet” or shown with placeholder data (including payroll, the notifications inbox and booking-widget settings) are not part of the Licensor's obligations until they are launched.",
          },
          {
            type: "paragraph",
            text: "6.3. The Licensor may develop the Service: add, change or remove functions, change the interface, and switch functions on or off, provided the main purpose of the Service (sections 3.2 and 6.1) is preserved for the paid period.",
          },
          {
            type: "paragraph",
            text: "6.4. When a Business is created, the Service may pre-fill a starter set of services for the chosen business type. The Customer must check and correct these services, names and prices before use.",
          },
        ],
      },
      {
        heading: "7. Booking Website",
        body: [
          {
            type: "paragraph",
            text: "7.1. The Owner creates the Booking Website and chooses its address (3–30 Latin letters, digits or hyphens; reserved and taken addresses cannot be used). A new website is unpublished until the Owner or a Manager publishes it.",
          },
          {
            type: "paragraph",
            text: "7.2. When the address is changed, the old address stops working immediately and shows a link to the new one for 30 days. When the website is deleted, it stops working immediately and its address cannot be taken by another business for 30 days.",
          },
          {
            type: "paragraph",
            text: "7.3. The website publicly shows the information the Customer chooses to publish: business name, logo, cover, gallery, branches with addresses and phones, services available online with prices and photos, staff shown online, and free time slots. The Customer is responsible for the accuracy and lawfulness of this information and for having the consent of staff members whose name, photo and bio it publishes.",
          },
          {
            type: "paragraph",
            text: "7.4. To book, a Client enters their name and phone number, passes a captcha, confirms the phone with an SMS code and accepts the end-client terms and privacy policy of the Booking Website [link]. The Client receives a personal link through which they may cancel or reschedule the booking within the rules set by the Customer (cut-off of 0–168 hours before the visit and up to 10 reschedules) and the booking rules of the Service.",
          },
          {
            type: "paragraph",
            text: "7.5. The contract for the provision of services is concluded between the Customer and the Client. The Licensor is not a party to it and is not responsible for the quality, price, cancellation or non-provision of the Customer's services.",
          },
          {
            type: "paragraph",
            text: "7.6. The Licensor may disable a Booking Website in the cases described in section 14.",
          },
        ],
      },
      {
        heading: "8. Plans, Prices and Payment",
        body: [
          {
            type: "paragraph",
            text: "8.1. Plans, their prices, periods (in months), bonus months and team-size limits are published in the app on the Subscription screen. The price shown at the moment of checkout applies to the order.",
          },
          {
            type: "paragraph",
            text: "8.2. Prices are set in Uzbek som (UZS) in whole som and [include VAT / are not subject to VAT] in accordance with the tax legislation of the Republic of Uzbekistan.",
          },
          {
            type: "paragraph",
            text: "8.3. A Subscription may be purchased only by the Owner or a Manager. The purchase is made in the app: the Plan and period are chosen, a promo code may be applied (a percentage or fixed discount on its own terms), an order is created and paid on the hosted page of the payment provider (currently Click).",
          },
          {
            type: "paragraph",
            text: "8.4. Payment is considered made when the payment provider confirms it to the Licensor. After that the Plan is activated, or, if a Plan is already active, the period is extended. An unpaid order expires after the time set by the Service and must be created again.",
          },
          {
            type: "paragraph",
            text: "8.5. Card details are entered only on the payment provider's page and are processed by the provider under its own rules. The Licensor and the app do not receive or store card details.",
          },
          {
            type: "paragraph",
            text: "8.6. The fiscal receipt for the Subscription payment is generated through the payment provider in accordance with the law.",
          },
          {
            type: "paragraph",
            text: "8.7. The Subscription is not renewed automatically. To continue using the Service, the Customer pays for a new period before the current one ends. The start and expiry dates of the Subscription are shown in the app. If automatic renewal is introduced, it will be enabled only with the Customer's separate express consent.",
          },
          {
            type: "paragraph",
            text: "8.8. The Trial, if offered, is provided free of charge for the length and with the functionality shown in the app at activation. When the Trial ends, section 10 applies.",
          },
          {
            type: "paragraph",
            text: "8.9. The Licensor may change prices and Plans. The changes are published in the app at least 10 calendar days before they take effect and do not apply to periods already paid for.",
          },
          {
            type: "paragraph",
            text: "8.10. Payment by bank transfer against an invoice is possible by agreement with the Licensor through support.",
          },
        ],
      },
      {
        heading: "9. Refunds of the Subscription Fee",
        body: [
          {
            type: "paragraph",
            text: "9.1. The Subscription fee for a period that has started is not refunded, including when the Customer stops using the Service early, except in the cases provided by this section or by law.",
          },
          {
            type: "paragraph",
            text: "9.2. The Customer may request a refund for the unused part of the paid period if the Service was unavailable through the Licensor's fault for more than 72 hours in a row, or if the Licensor terminates the Agreement without breach by the Customer.",
          },
          {
            type: "paragraph",
            text: "9.3. A refund request is sent through support with the Business details and the order number. Approved refunds are made within 10 business days, by the same method by which the payment was made where possible.",
          },
          {
            type: "paragraph",
            text: "9.4. If a payment was charged twice or charged without the Plan being activated, the Licensor activates the Plan or refunds the amount after checking with the payment provider.",
          },
        ],
      },
      {
        heading: "10. When the Subscription Ends",
        body: [
          {
            type: "paragraph",
            text: "10.1. When the paid period or Trial ends and is not renewed, the Licensor may restrict access to the functions of the Service, leaving access to the Subscription screen, payment and support. The Booking Website may be unpublished and stop accepting bookings.",
          },
          {
            type: "paragraph",
            text: "10.2. The Business's data is kept for 90 days after the end of the Subscription. If the Subscription is renewed within this period, access is restored with the data. After this period the Licensor may delete or anonymise the data, except where the law requires longer storage.",
          },
          {
            type: "paragraph",
            text: "10.3. If a Plan with a lower team-size limit is chosen, the Customer must reduce the team to the limit; the Service may prevent new members from being added until then.",
          },
        ],
      },
      {
        heading: "11. Payments Between the Customer and Its Clients",
        body: [
          {
            type: "paragraph",
            text: "11.1. Payments recorded in the Service (cash, card through the Customer's own terminal, other methods such as Payme) are made outside the Service. Their recording is information for the Customer's own accounting only.",
          },
          {
            type: "paragraph",
            text: "11.2. A recorded payment or refund may be undone within 15 minutes with a reason; after that, only a refund record can be made. A refund cannot exceed the amount paid.",
          },
          {
            type: "paragraph",
            text: "11.3. The Service does not issue fiscal receipts for the Customer's sales. The Customer alone is responsible for using online cash registers or virtual cash registers, issuing receipts, paying taxes and other obligations related to its own sales.",
          },
          {
            type: "paragraph",
            text: "11.4. The Customer decides whether Staff may take payments and which registers they may use, and is responsible for the accuracy of the recorded amounts.",
          },
        ],
      },
      {
        heading: "12. Personal Data",
        body: [
          {
            type: "paragraph",
            text: "12.1. Client data entered into the Service by the Customer or its Users, or by Clients on the Booking Website (name, phone number, e-mail, date of birth, gender, notes, categories, visit history, number of visits and no-shows, amounts spent, booking comments), belongs to the Customer's personal data base. With respect to this data, the Customer is the owner and operator of personal data, and the Licensor is a third party processing it on the Customer's behalf and instructions in accordance with the Law of the Republic of Uzbekistan “On Personal Data”.",
          },
          {
            type: "paragraph",
            text: "12.2. The Customer warrants that it has a lawful basis for collecting and processing the data it enters, including the consent of the data subjects where required, that it informs Clients and staff about the processing, and that it does not enter data it is not entitled to process. The Customer bears responsibility to data subjects and authorities for the lawfulness of its data processing.",
          },
          {
            type: "paragraph",
            text: "12.3. By accepting this Agreement, the Customer instructs the Licensor to process this data only to provide the Service: to store it, display it to the Customer's Users according to their roles, send SMS codes and notifications, show the Booking Website and create bookings. The Licensor does not use Client data for its own purposes, does not sell it and does not pass it to third parties except as stated in section 12.6 or required by law.",
          },
          {
            type: "paragraph",
            text: "12.4. The Licensor processes the data of Users (name, phone number, photo, interface language, device data for notifications) and of the Customer as an operator in accordance with the Privacy Policy of the Service [link].",
          },
          {
            type: "paragraph",
            text: "12.5. Personal data of citizens of the Republic of Uzbekistan is collected, systematised and stored in databases located on the territory of the Republic of Uzbekistan [hosting provider / data centre].",
          },
          {
            type: "paragraph",
            text: "12.6. To provide the Service, the Licensor uses the following third-party services, which receive only the data needed for their function: an SMS provider [name] (phone number and code); Click (order number and amount; card data stays with Click); Google Firebase Cloud Messaging and Apple Push Notification service (device token and notification text); Yandex Maps (search text and coordinates; device location only on request); Cloudflare Turnstile (captcha on the Booking Website); Apple App Store and Google Play (distribution of the app under their terms).",
          },
          {
            type: "paragraph",
            text: "12.7. The Licensor applies organisational and technical measures to protect data, including role-based access, masking of Clients' identity from other Staff, the option to hide Client details in push notifications, storage of session tokens in the device's secure storage, and encryption of data in transit.",
          },
          {
            type: "paragraph",
            text: "12.8. Requests to access, correct, delete or export data, and requests to delete a User account or a Business, are sent through support. The Licensor responds within 30 days. Requests from Clients about data held by the Customer are forwarded to the Customer, which decides on them as the owner of the data.",
          },
        ],
      },
      {
        heading: "13. Rights and Obligations of the Parties",
        body: [
          {
            type: "paragraph",
            text: "13.1. The Licensor undertakes to:",
          },
          {
            type: "list",
            items: [
              "provide access to the Service for the paid period in accordance with this Agreement;",
              "keep the confidentiality of the Customer's data and not disclose it except as provided by this Agreement or by law;",
              "provide support through the channels in section 15;",
              "notify the Customer of changes to this Agreement and prices in accordance with sections 8.9 and 19.",
            ],
          },
          {
            type: "paragraph",
            text: "13.2. The Licensor has the right to:",
          },
          {
            type: "list",
            items: [
              "develop and change the Service in accordance with section 6.3;",
              "require installation of an app update and block outdated versions of the app;",
              "carry out maintenance work that may temporarily limit availability;",
              "suspend access in the cases in section 14;",
              "use anonymised and aggregated statistics about the use of the Service to improve it.",
            ],
          },
          {
            type: "paragraph",
            text: "13.3. The Customer undertakes to:",
          },
          {
            type: "list",
            items: [
              "pay the Subscription in accordance with section 8;",
              "provide accurate information about its business, prices, services and schedules, and keep it up to date;",
              "comply with the law on personal data, consumer protection, advertising, taxation and use of cash registers;",
              "ensure that its Users comply with this Agreement;",
              "not use the Service for unlawful purposes, for sending spam, or to publish false, offensive or infringing content;",
              "not attempt to bypass technical limits, gain unauthorised access, copy, decompile or modify the Service, or overload it with automated requests;",
              "not resell or transfer access to the Service to third parties.",
            ],
          },
          {
            type: "paragraph",
            text: "13.4. The Customer has the right to use the Service within its functionality and the limits of its Plan, to contact support, and to stop using the Service at any time.",
          },
        ],
      },
      {
        heading: "14. Suspension and Blocking",
        body: [
          {
            type: "paragraph",
            text: "14.1. The Licensor may suspend access to a Business or User account, or disable a Booking Website, if:",
          },
          {
            type: "list",
            items: [
              "the Customer or its Users breach this Agreement or the law;",
              "the Booking Website contains unlawful, misleading or infringing content, or receives a justified complaint;",
              "there is a reasonable suspicion of unauthorised access or fraud;",
              "this is required by a decision of a competent authority.",
            ],
          },
          {
            type: "paragraph",
            text: "14.2. Where possible, the Licensor notifies the Customer in advance and gives it a reasonable time to remedy the breach. Access is restored after the cause is removed.",
          },
        ],
      },
      {
        heading: "15. Availability, Updates and Support",
        body: [
          {
            type: "paragraph",
            text: "15.1. The Service is provided “as is” over the internet and requires a network connection. The Licensor makes reasonable efforts to keep it available but does not guarantee uninterrupted or error-free operation. No specific uptime level is guaranteed.",
          },
          {
            type: "paragraph",
            text: "15.2. The Service works on current versions of iOS and Android. The Licensor may require an update and block outdated versions of the app.",
          },
          {
            type: "paragraph",
            text: "15.3. Support is available through the in-app support screen: Telegram [@●], WhatsApp [+998 ●], e-mail [support@●]. Support hours: [●]. The Licensor aims to respond within [1 business day]. When contacting support, the Customer quotes the location ID and device code shown on the support screen.",
          },
        ],
      },
      {
        heading: "16. Liability",
        body: [
          {
            type: "paragraph",
            text: "16.1. The Parties are liable for failure to perform this Agreement in accordance with the law of the Republic of Uzbekistan and this Agreement.",
          },
          {
            type: "paragraph",
            text: "16.2. The Licensor is not liable for lost profit, lost bookings or Clients, or other indirect losses of the Customer; for the content the Customer enters or publishes; for the Customer's services and its relations with Clients; for the actions of the Customer's Users; or for failures of the internet, mobile networks, devices or third-party services (SMS provider, payment providers, push notification services, maps, app stores).",
          },
          {
            type: "paragraph",
            text: "16.3. The total liability of the Licensor under this Agreement is limited to the amount of Subscription fees paid by the Customer for the 3 months preceding the event that gave rise to the claim, unless the law provides otherwise.",
          },
          {
            type: "paragraph",
            text: "16.4. The Customer is liable for the lawfulness of the data it enters and the content it publishes, and compensates the Licensor for losses caused by claims of third parties (including Clients, staff and authorities) arising from the Customer's breach of this Agreement or the law.",
          },
        ],
      },
      {
        heading: "17. Force Majeure",
        body: [
          {
            type: "paragraph",
            text: "17.1. The Parties are released from liability for failure to perform obligations caused by circumstances of insurmountable force, including natural disasters, wars, mass unrest, decisions of state authorities, large-scale failures of power supply or communication networks, and other circumstances beyond the Parties' reasonable control.",
          },
        ],
      },
      {
        heading: "18. Term and Termination",
        body: [
          {
            type: "paragraph",
            text: "18.1. The Agreement comes into force on acceptance and is valid for an indefinite term until terminated.",
          },
          {
            type: "paragraph",
            text: "18.2. The Customer may terminate the Agreement at any time by stopping use of the Service or by requesting deletion of the Business through support. The paid fee is not refunded except as provided in section 9.",
          },
          {
            type: "paragraph",
            text: "18.3. The Licensor may terminate the Agreement unilaterally if the Customer materially or repeatedly breaches it, as well as when the Service is discontinued, by notifying the Customer at least 30 days in advance (in the latter case the unused part of the fee is refunded).",
          },
          {
            type: "paragraph",
            text: "18.4. Upon termination, the Customer may request an export of its data within 30 days. After that the data is deleted in accordance with section 10.2.",
          },
        ],
      },
      {
        heading: "19. Changes to the Agreement",
        body: [
          {
            type: "paragraph",
            text: "19.1. The Licensor may change this Agreement by publishing a new version at this address. Material changes are announced in the app at least 10 calendar days before they take effect.",
          },
          {
            type: "paragraph",
            text: "19.2. Continued use of the Service after the new version takes effect means acceptance of it. If the Customer does not agree with the changes, it may terminate the Agreement in accordance with section 18.2.",
          },
        ],
      },
      {
        heading: "20. Governing Law, Disputes and Language",
        body: [
          {
            type: "paragraph",
            text: "20.1. This Agreement is governed by the law of the Republic of Uzbekistan.",
          },
          {
            type: "paragraph",
            text: "20.2. Disputes are resolved through negotiation. A written claim is mandatory and must be answered within 30 days. If the dispute is not resolved, it is referred to the competent court of the Republic of Uzbekistan at the Licensor's location.",
          },
          {
            type: "paragraph",
            text: "20.3. This Agreement is published in Uzbek, Russian and English. In case of discrepancies, the Russian version prevails.",
          },
        ],
      },
      {
        heading: "21. Licensor Details",
        body: [
          {
            type: "list",
            items: [
              "Name: [Company legal name]",
              "TIN: [●]",
              "Legal address: [●]",
              "Bank: [●], account: [●], MFO: [●]",
              "E-mail: [support@●]",
              "Phone: [+998 ●]",
            ],
          },
        ],
      },
    ],
  },

  ru: {
    title: "Публичная оферта",
    updatedLabel: "Редакция от",
    updatedDate: "21 ноября 2026 г.",
    intro:
      "Настоящий документ является публичной офертой [наименование компании] о заключении лицензионного договора на использование программного сервиса Studio на изложенных ниже условиях. Оферта адресована юридическим лицам, индивидуальным предпринимателям и самозанятым лицам Республики Узбекистан, оказывающим услуги красоты и иные бытовые услуги. Внимательно ознакомьтесь с ней: принимая её в порядке, указанном в разделе 4, вы заключаете с нами договор.",
    sections: [
      {
        heading: "1. Общие положения",
        body: [
          {
            type: "paragraph",
            text: "1.1. Настоящий Договор является публичной офертой в соответствии со статьями 367 и 369 Гражданского кодекса Республики Узбекистан. Её акцепт в порядке раздела 4 равносилен заключению Договора в письменной форме на изложенных условиях (статья 370 Гражданского кодекса).",
          },
          {
            type: "paragraph",
            text: "1.2. Лицензиар — [наименование компании], ИНН [●], адрес: [юридический адрес] (далее — «Лицензиар», «мы»). Полные реквизиты Лицензиара приведены в разделе 21.",
          },
          {
            type: "paragraph",
            text: "1.3. Лицензиар вправе изменять настоящий Договор в порядке раздела 19. Действующая редакция всегда опубликована по настоящему адресу.",
          },
        ],
      },
      {
        heading: "2. Термины",
        body: [
          {
            type: "list",
            items: [
              "Сервис — мобильное приложение Studio для iOS и Android, его серверная часть и создаваемые через него сайты онлайн-записи, принадлежащие Лицензиару и обслуживаемые им.",
              "Заказчик — юридическое лицо, индивидуальный предприниматель или самозанятое лицо, создавшее Бизнес в Сервисе и акцептовавшее настоящий Договор.",
              "Бизнес — учётная запись Заказчика в Сервисе, содержащая его филиалы, услуги, команду, клиентов, расписания, записи об оплатах и настройки.",
              "Пользователь — физическое лицо, входящее в Сервис по номеру телефона. Один Пользователь может состоять в нескольких Бизнесах с разной ролью в каждом.",
              "Владелец, Менеджер, Сотрудник — роли Пользователя в Бизнесе с правами, описанными в разделе 5.",
              "Клиент — клиент Заказчика: лицо, данные которого Заказчик вносит в Сервис или которое записывается на услуги Заказчика через Сайт записи. Клиенты не используют приложение Studio.",
              "Сайт записи — публичная веб-страница Бизнеса, созданная в Сервисе, через которую Клиенты самостоятельно записываются на услуги Заказчика.",
              "Подписка — платный доступ к Сервису по выбранному Тарифу на выбранный срок.",
              "Тариф — набор условий Сервиса (название, лимит численности команды, варианты цены по срокам), опубликованный в приложении.",
              "Пробный период — бесплатный период использования Сервиса на условиях, указанных в приложении.",
            ],
          },
        ],
      },
      {
        heading: "3. Предмет Договора",
        body: [
          {
            type: "paragraph",
            text: "3.1. Лицензиар предоставляет Заказчику простую (неисключительную) непередаваемую лицензию на использование Сервиса через интернет в течение срока оплаченной Подписки (или Пробного периода) в пределах его функционального назначения, а Заказчик выплачивает лицензионное вознаграждение по условиям выбранного Тарифа.",
          },
          {
            type: "paragraph",
            text: "3.2. Сервис является исключительно программным обеспечением. Он помогает Заказчику вести журнал записей, клиентскую базу, каталог услуг, команду и графики работы, учитывать оплаты, получаемые от Клиентов, просматривать отчёты и вести Сайт записи.",
          },
          {
            type: "paragraph",
            text: "3.3. Сервис не принимает, не хранит и не переводит денежные средства между Заказчиком и его Клиентами и не является платёжной системой или платёжной организацией. Он лишь фиксирует оплаты, которые Заказчик получает собственными средствами. Единственный платёж, получаемый Лицензиаром по настоящему Договору, — плата за Подписку.",
          },
          {
            type: "paragraph",
            text: "3.4. Право собственности и иные исключительные права на Сервис, его код, дизайн, товарные знаки и базы данных к Заказчику не переходят.",
          },
        ],
      },
      {
        heading: "4. Акцепт оферты",
        body: [
          {
            type: "paragraph",
            text: "4.1. Заказчик принимает настоящую оферту полностью и без оговорок, совершив любое из следующих действий: создание Бизнеса в Сервисе либо оплата Подписки. Договор считается заключённым с момента первого из этих действий.",
          },
          {
            type: "paragraph",
            text: "4.2. Лицо, совершающее акцепт, подтверждает, что ему исполнилось 18 лет и оно уполномочено действовать от имени Заказчика. Если Заказчик — юридическое лицо, акцепт совершается от его имени.",
          },
          {
            type: "paragraph",
            text: "4.3. Пользователи, присоединившиеся к существующему Бизнесу по приглашению, действуют от имени Заказчика этого Бизнеса и обязаны соблюдать правила Сервиса в применимой к ним части.",
          },
        ],
      },
      {
        heading: "5. Регистрация, вход и роли",
        body: [
          {
            type: "paragraph",
            text: "5.1. Вход осуществляется по номеру мобильного телефона Узбекистана (+998) и одноразовому SMS-коду. Первый успешный вход создаёт профиль Пользователя. Код действует 3 минуты; повторно его можно запросить через 60 секунд; не более 5 запросов кода в час и не более 5 неверных попыток ввода одного кода.",
          },
          {
            type: "paragraph",
            text: "5.2. Номер телефона нельзя изменить в приложении; смена производится через службу поддержки после подтверждения личности Пользователя.",
          },
          {
            type: "paragraph",
            text: "5.3. Сессия сохраняется до 30 дней неактивности для Пользователя и до 7 дней для выбранного Бизнеса. Заказчик и его Пользователи сами отвечают за безопасность своих устройств и SIM-карт; действия в Сервисе с устройства, на котором выполнен вход, считаются действиями соответствующего Пользователя.",
          },
          {
            type: "paragraph",
            text: "5.4. Роли в Бизнесе:",
          },
          {
            type: "list",
            items: [
              "Владелец — создаёт Бизнес; имеет все права Менеджера, а также может приглашать Менеджеров, указывать ИНН Бизнеса, создавать, переименовывать и удалять Сайт записи.",
              "Менеджер — ведёт текущую работу Бизнеса: каталог, графики, клиенты, приглашение Сотрудников, кассы и правила оплаты, возвраты, аналитика, Подписка и её оплата, настройки конфиденциальности уведомлений.",
              "Сотрудник — оказывает услуги; видит свои записи полностью, а записи коллег — со скрытыми данными Клиента; может создавать Клиентов и просматривать клиентскую базу, но не редактировать и не удалять её; может принимать оплату, только если это разрешено Бизнесом; видит только свою статистику.",
            ],
          },
          {
            type: "paragraph",
            text: "5.5. Владелец или Менеджер приглашает людей в Бизнес, указывая их имя, роль и номер телефона; Сервис формирует код приглашения со сроком действия, который Заказчик передаёт приглашённому вне Сервиса. Приглашение можно отозвать до его использования.",
          },
          {
            type: "paragraph",
            text: "5.6. Заказчик отвечает за выбор приглашаемых лиц, назначенные им роли и все их действия в Сервисе и обязан отключать доступ лицам, которые у него больше не работают.",
          },
        ],
      },
      {
        heading: "6. Функциональность Сервиса",
        body: [
          {
            type: "paragraph",
            text: "6.1. На дату настоящей редакции Сервис включает:",
          },
          {
            type: "list",
            items: [
              "журнал записей по сотрудникам со статусами записи (записан, подтверждён, завершён, отменён, неявка);",
              "клиентскую базу: карточки клиентов, история визитов, заметки, категории, архив и восстановление;",
              "каталог услуг с категориями, длительностью, ценами, фотографиями и настройками онлайн-записи;",
              "команду, приглашения, публичные профили сотрудников, недельные графики, изменения по дням и отпуска;",
              "профиль филиала и бизнеса: адрес, телефон, часовой пояс, часы работы, точка на карте, логотип, обложка и галерея;",
              "учёт оплат (наличные, карта, прочее), возвратов и изменения цены; кассы; ежедневную сверку кассы;",
              "отчёты и аналитику;",
              "Сайт записи;",
              "push-уведомления о записях;",
              "управление Подпиской и контакты поддержки в приложении.",
            ],
          },
          {
            type: "paragraph",
            text: "6.2. Разделы приложения, помеченные как «скоро», «пока недоступно» или отображающие условные данные (в том числе расчёт зарплаты, лента уведомлений и настройки виджета записи), не входят в обязательства Лицензиара до их запуска.",
          },
          {
            type: "paragraph",
            text: "6.3. Лицензиар вправе развивать Сервис: добавлять, изменять или удалять функции, менять интерфейс, включать и отключать функции при условии сохранения основного назначения Сервиса (пункты 3.2 и 6.1) в течение оплаченного периода.",
          },
          {
            type: "paragraph",
            text: "6.4. При создании Бизнеса Сервис может заполнить стартовый набор услуг для выбранного вида деятельности. Заказчик обязан проверить и скорректировать эти услуги, названия и цены перед использованием.",
          },
        ],
      },
      {
        heading: "7. Сайт записи",
        body: [
          {
            type: "paragraph",
            text: "7.1. Владелец создаёт Сайт записи и выбирает его адрес (3–30 латинских букв, цифр или дефисов; зарезервированные и занятые адреса недоступны). Новый сайт не опубликован, пока Владелец или Менеджер его не опубликует.",
          },
          {
            type: "paragraph",
            text: "7.2. При смене адреса старый адрес сразу перестаёт работать и в течение 30 дней показывает ссылку на новый. При удалении сайт сразу перестаёт работать, а его адрес не может быть занят другим бизнесом в течение 30 дней.",
          },
          {
            type: "paragraph",
            text: "7.3. На сайте публично отображается информация, которую Заказчик решил опубликовать: название, логотип, обложка, галерея, филиалы с адресами и телефонами, услуги для онлайн-записи с ценами и фотографиями, сотрудники, показанные онлайн, и свободное время. Заказчик отвечает за достоверность и законность этой информации и за наличие согласия сотрудников, чьи имя, фото и описание он публикует.",
          },
          {
            type: "paragraph",
            text: "7.4. Для записи Клиент указывает имя и номер телефона, проходит капчу, подтверждает телефон SMS-кодом и принимает условия и политику конфиденциальности Сайта записи для клиентов [ссылка]. Клиент получает персональную ссылку, по которой может отменить или перенести запись в рамках правил, установленных Заказчиком (не позднее чем за 0–168 часов до визита и не более 10 переносов), и правил записи Сервиса.",
          },
          {
            type: "paragraph",
            text: "7.5. Договор об оказании услуг заключается между Заказчиком и Клиентом. Лицензиар не является его стороной и не отвечает за качество, цену, отмену или неоказание услуг Заказчика.",
          },
          {
            type: "paragraph",
            text: "7.6. Лицензиар вправе отключить Сайт записи в случаях, указанных в разделе 14.",
          },
        ],
      },
      {
        heading: "8. Тарифы, цены и оплата",
        body: [
          {
            type: "paragraph",
            text: "8.1. Тарифы, их цены, сроки (в месяцах), бонусные месяцы и лимиты численности команды публикуются в приложении на экране Подписки. К заказу применяется цена, указанная в момент оформления.",
          },
          {
            type: "paragraph",
            text: "8.2. Цены устанавливаются в узбекских сумах (UZS) в целых сумах и [включают НДС / не облагаются НДС] в соответствии с налоговым законодательством Республики Узбекистан.",
          },
          {
            type: "paragraph",
            text: "8.3. Подписку может приобрести только Владелец или Менеджер. Покупка производится в приложении: выбираются Тариф и срок, может быть применён промокод (скидка в процентах или фиксированной суммой на его условиях), создаётся заказ, который оплачивается на странице платёжного провайдера (в настоящее время — Click).",
          },
          {
            type: "paragraph",
            text: "8.4. Оплата считается произведённой с момента её подтверждения платёжным провайдером Лицензиару. После этого Тариф активируется, а если Тариф уже действует — срок продлевается. Неоплаченный заказ истекает по прошествии времени, установленного Сервисом, и должен быть создан заново.",
          },
          {
            type: "paragraph",
            text: "8.5. Данные банковской карты вводятся только на странице платёжного провайдера и обрабатываются им по его правилам. Лицензиар и приложение не получают и не хранят данные карт.",
          },
          {
            type: "paragraph",
            text: "8.6. Фискальный чек за оплату Подписки формируется через платёжного провайдера в соответствии с законодательством.",
          },
          {
            type: "paragraph",
            text: "8.7. Подписка не продлевается автоматически. Для продолжения использования Сервиса Заказчик оплачивает новый период до окончания текущего. Даты начала и окончания Подписки отображаются в приложении. В случае введения автопродления оно будет включаться только с отдельного явного согласия Заказчика.",
          },
          {
            type: "paragraph",
            text: "8.8. Пробный период, если он предлагается, предоставляется бесплатно на срок и с функциональностью, указанными в приложении при активации. По окончании Пробного периода применяется раздел 10.",
          },
          {
            type: "paragraph",
            text: "8.9. Лицензиар вправе изменять цены и Тарифы. Изменения публикуются в приложении не менее чем за 10 календарных дней до вступления в силу и не распространяются на уже оплаченные периоды.",
          },
          {
            type: "paragraph",
            text: "8.10. Оплата банковским переводом по счёту возможна по согласованию с Лицензиаром через службу поддержки.",
          },
        ],
      },
      {
        heading: "9. Возврат платы за Подписку",
        body: [
          {
            type: "paragraph",
            text: "9.1. Плата за начавшийся период Подписки не возвращается, в том числе при досрочном прекращении использования Сервиса Заказчиком, за исключением случаев, предусмотренных настоящим разделом или законодательством.",
          },
          {
            type: "paragraph",
            text: "9.2. Заказчик вправе потребовать возврат за неиспользованную часть оплаченного периода, если Сервис был недоступен по вине Лицензиара более 72 часов подряд либо если Лицензиар расторгает Договор при отсутствии нарушений со стороны Заказчика.",
          },
          {
            type: "paragraph",
            text: "9.3. Заявление о возврате направляется через службу поддержки с указанием данных Бизнеса и номера заказа. Одобренный возврат производится в течение 10 рабочих дней, по возможности тем же способом, которым была произведена оплата.",
          },
          {
            type: "paragraph",
            text: "9.4. Если оплата была списана дважды или списана без активации Тарифа, Лицензиар после сверки с платёжным провайдером активирует Тариф или возвращает сумму.",
          },
        ],
      },
      {
        heading: "10. Окончание Подписки",
        body: [
          {
            type: "paragraph",
            text: "10.1. По окончании оплаченного периода или Пробного периода без продления Лицензиар вправе ограничить доступ к функциям Сервиса, сохранив доступ к экрану Подписки, оплате и поддержке. Сайт записи может быть снят с публикации и перестать принимать записи.",
          },
          {
            type: "paragraph",
            text: "10.2. Данные Бизнеса хранятся в течение 90 дней после окончания Подписки. При продлении Подписки в этот срок доступ восстанавливается вместе с данными. По истечении этого срока Лицензиар вправе удалить или обезличить данные, кроме случаев, когда законодательство требует более длительного хранения.",
          },
          {
            type: "paragraph",
            text: "10.3. При выборе Тарифа с меньшим лимитом численности команды Заказчик обязан сократить команду до лимита; до этого Сервис может не допускать добавления новых участников.",
          },
        ],
      },
      {
        heading: "11. Расчёты между Заказчиком и его Клиентами",
        body: [
          {
            type: "paragraph",
            text: "11.1. Оплаты, учитываемые в Сервисе (наличные, карта через собственный терминал Заказчика, прочие способы, например Payme), производятся вне Сервиса. Их учёт является информацией исключительно для собственного учёта Заказчика.",
          },
          {
            type: "paragraph",
            text: "11.2. Внесённую оплату или возврат можно отменить в течение 15 минут с указанием причины; после этого возможно только оформление возврата. Сумма возврата не может превышать оплаченную.",
          },
          {
            type: "paragraph",
            text: "11.3. Сервис не выдаёт фискальные чеки по продажам Заказчика. Заказчик самостоятельно отвечает за применение онлайн-ККМ или виртуальной кассы, выдачу чеков, уплату налогов и иные обязанности, связанные с его продажами.",
          },
          {
            type: "paragraph",
            text: "11.4. Заказчик решает, могут ли Сотрудники принимать оплату и какими кассами пользоваться, и отвечает за достоверность внесённых сумм.",
          },
        ],
      },
      {
        heading: "12. Персональные данные",
        body: [
          {
            type: "paragraph",
            text: "12.1. Данные Клиентов, вносимые в Сервис Заказчиком или его Пользователями либо Клиентами на Сайте записи (имя, номер телефона, e-mail, дата рождения, пол, заметки, категории, история визитов, количество визитов и неявок, суммы оплат, комментарии к записи), составляют базу персональных данных Заказчика. В отношении этих данных Заказчик является собственником и оператором персональных данных, а Лицензиар — третьим лицом, обрабатывающим их по поручению и указаниям Заказчика в соответствии с Законом Республики Узбекистан «О персональных данных».",
          },
          {
            type: "paragraph",
            text: "12.2. Заказчик гарантирует, что имеет законное основание для сбора и обработки вносимых данных, включая согласие субъектов, где оно требуется, что информирует Клиентов и сотрудников об обработке и не вносит данные, которые не вправе обрабатывать. Заказчик несёт ответственность перед субъектами данных и государственными органами за законность своей обработки.",
          },
          {
            type: "paragraph",
            text: "12.3. Принимая настоящий Договор, Заказчик поручает Лицензиару обрабатывать эти данные исключительно для предоставления Сервиса: хранить их, показывать Пользователям Заказчика согласно их ролям, отправлять SMS-коды и уведомления, отображать Сайт записи и создавать записи. Лицензиар не использует данные Клиентов в собственных целях, не продаёт их и не передаёт третьим лицам, кроме случаев, указанных в пункте 12.6 или предусмотренных законодательством.",
          },
          {
            type: "paragraph",
            text: "12.4. Данные Пользователей (имя, номер телефона, фото, язык интерфейса, данные устройства для уведомлений) и Заказчика Лицензиар обрабатывает как оператор в соответствии с Политикой конфиденциальности Сервиса [ссылка].",
          },
          {
            type: "paragraph",
            text: "12.5. Сбор, систематизация и хранение персональных данных граждан Республики Узбекистан осуществляются в базах данных, расположенных на территории Республики Узбекистан [хостинг-провайдер / дата-центр].",
          },
          {
            type: "paragraph",
            text: "12.6. Для предоставления Сервиса Лицензиар использует следующие сторонние сервисы, получающие только данные, необходимые для их функции: SMS-провайдер [наименование] (номер телефона и код); Click (номер заказа и сумма; данные карты остаются у Click); Google Firebase Cloud Messaging и Apple Push Notification service (токен устройства и текст уведомления); Яндекс Карты (текст поиска и координаты; геолокация устройства — только по запросу); Cloudflare Turnstile (капча на Сайте записи); Apple App Store и Google Play (распространение приложения на их условиях).",
          },
          {
            type: "paragraph",
            text: "12.7. Лицензиар применяет организационные и технические меры защиты данных, в том числе разграничение доступа по ролям, скрытие данных Клиентов от других Сотрудников, возможность скрывать данные Клиента в push-уведомлениях, хранение токенов сессии в защищённом хранилище устройства и шифрование данных при передаче.",
          },
          {
            type: "paragraph",
            text: "12.8. Запросы на доступ, исправление, удаление или выгрузку данных, а также на удаление учётной записи Пользователя или Бизнеса направляются через службу поддержки. Лицензиар отвечает в течение 30 дней. Запросы Клиентов о данных, находящихся у Заказчика, передаются Заказчику, который принимает по ним решение как собственник данных.",
          },
        ],
      },
      {
        heading: "13. Права и обязанности сторон",
        body: [
          {
            type: "paragraph",
            text: "13.1. Лицензиар обязуется:",
          },
          {
            type: "list",
            items: [
              "предоставлять доступ к Сервису в течение оплаченного периода в соответствии с настоящим Договором;",
              "соблюдать конфиденциальность данных Заказчика и не раскрывать их, кроме случаев, предусмотренных Договором или законодательством;",
              "оказывать поддержку по каналам, указанным в разделе 15;",
              "уведомлять Заказчика об изменениях Договора и цен в порядке пунктов 8.9 и раздела 19.",
            ],
          },
          {
            type: "paragraph",
            text: "13.2. Лицензиар вправе:",
          },
          {
            type: "list",
            items: [
              "развивать и изменять Сервис в соответствии с пунктом 6.3;",
              "требовать установки обновления приложения и блокировать устаревшие версии;",
              "проводить технические работы, которые могут временно ограничивать доступность;",
              "приостанавливать доступ в случаях, указанных в разделе 14;",
              "использовать обезличенную и агрегированную статистику использования Сервиса для его улучшения.",
            ],
          },
          {
            type: "paragraph",
            text: "13.3. Заказчик обязуется:",
          },
          {
            type: "list",
            items: [
              "оплачивать Подписку в соответствии с разделом 8;",
              "указывать достоверную информацию о своём бизнесе, ценах, услугах и графиках и поддерживать её в актуальном состоянии;",
              "соблюдать законодательство о персональных данных, защите прав потребителей, рекламе, налогообложении и применении ККМ;",
              "обеспечивать соблюдение настоящего Договора своими Пользователями;",
              "не использовать Сервис в противоправных целях, для рассылки спама, публикации ложной, оскорбительной или нарушающей права третьих лиц информации;",
              "не пытаться обойти технические ограничения, получить несанкционированный доступ, копировать, декомпилировать или изменять Сервис, перегружать его автоматическими запросами;",
              "не перепродавать и не передавать доступ к Сервису третьим лицам.",
            ],
          },
          {
            type: "paragraph",
            text: "13.4. Заказчик вправе пользоваться Сервисом в пределах его функциональности и лимитов своего Тарифа, обращаться в поддержку и в любое время прекратить использование Сервиса.",
          },
        ],
      },
      {
        heading: "14. Приостановление и блокировка",
        body: [
          {
            type: "paragraph",
            text: "14.1. Лицензиар вправе приостановить доступ к Бизнесу или учётной записи Пользователя либо отключить Сайт записи, если:",
          },
          {
            type: "list",
            items: [
              "Заказчик или его Пользователи нарушают настоящий Договор или законодательство;",
              "Сайт записи содержит противоправную, вводящую в заблуждение или нарушающую права информацию либо в отношении него поступила обоснованная жалоба;",
              "имеются разумные подозрения в несанкционированном доступе или мошенничестве;",
              "этого требует решение уполномоченного государственного органа.",
            ],
          },
          {
            type: "paragraph",
            text: "14.2. По возможности Лицензиар заранее уведомляет Заказчика и предоставляет разумный срок для устранения нарушения. Доступ восстанавливается после устранения причины.",
          },
        ],
      },
      {
        heading: "15. Доступность, обновления и поддержка",
        body: [
          {
            type: "paragraph",
            text: "15.1. Сервис предоставляется «как есть» через интернет и требует подключения к сети. Лицензиар прилагает разумные усилия для поддержания его доступности, но не гарантирует бесперебойную и безошибочную работу. Конкретный уровень доступности не гарантируется.",
          },
          {
            type: "paragraph",
            text: "15.2. Сервис работает на актуальных версиях iOS и Android. Лицензиар вправе требовать обновления и блокировать устаревшие версии приложения.",
          },
          {
            type: "paragraph",
            text: "15.3. Поддержка доступна через экран поддержки в приложении: Telegram [@●], WhatsApp [+998 ●], e-mail [support@●]. Часы работы: [●]. Лицензиар стремится ответить в течение [1 рабочего дня]. При обращении Заказчик сообщает идентификатор филиала и код устройства, указанные на экране поддержки.",
          },
        ],
      },
      {
        heading: "16. Ответственность",
        body: [
          {
            type: "paragraph",
            text: "16.1. Стороны несут ответственность за неисполнение настоящего Договора в соответствии с законодательством Республики Узбекистан и настоящим Договором.",
          },
          {
            type: "paragraph",
            text: "16.2. Лицензиар не отвечает за упущенную выгоду, потерянные записи или клиентов и иные косвенные убытки Заказчика; за содержание информации, вносимой или публикуемой Заказчиком; за услуги Заказчика и его отношения с Клиентами; за действия Пользователей Заказчика; за сбои интернета, мобильных сетей, устройств и сторонних сервисов (SMS-провайдера, платёжных провайдеров, сервисов push-уведомлений, карт, магазинов приложений).",
          },
          {
            type: "paragraph",
            text: "16.3. Совокупная ответственность Лицензиара по настоящему Договору ограничена суммой платы за Подписку, уплаченной Заказчиком за 3 месяца, предшествующих событию, послужившему основанием для претензии, если иное не предусмотрено законодательством.",
          },
          {
            type: "paragraph",
            text: "16.4. Заказчик отвечает за законность вносимых данных и публикуемой информации и возмещает Лицензиару убытки, вызванные претензиями третьих лиц (в том числе Клиентов, сотрудников и государственных органов), возникшими из-за нарушения Заказчиком настоящего Договора или законодательства.",
          },
        ],
      },
      {
        heading: "17. Форс-мажор",
        body: [
          {
            type: "paragraph",
            text: "17.1. Стороны освобождаются от ответственности за неисполнение обязательств, вызванное обстоятельствами непреодолимой силы, включая стихийные бедствия, военные действия, массовые беспорядки, решения государственных органов, масштабные сбои электроснабжения или сетей связи и иные обстоятельства вне разумного контроля Сторон.",
          },
        ],
      },
      {
        heading: "18. Срок действия и расторжение",
        body: [
          {
            type: "paragraph",
            text: "18.1. Договор вступает в силу с момента акцепта и действует бессрочно до его расторжения.",
          },
          {
            type: "paragraph",
            text: "18.2. Заказчик вправе расторгнуть Договор в любое время, прекратив использование Сервиса или направив через поддержку запрос на удаление Бизнеса. Уплаченная плата не возвращается, кроме случаев, указанных в разделе 9.",
          },
          {
            type: "paragraph",
            text: "18.3. Лицензиар вправе в одностороннем порядке расторгнуть Договор при существенном или неоднократном его нарушении Заказчиком, а также при прекращении работы Сервиса, уведомив Заказчика не менее чем за 30 дней (в последнем случае неиспользованная часть платы возвращается).",
          },
          {
            type: "paragraph",
            text: "18.4. После расторжения Заказчик вправе в течение 30 дней запросить выгрузку своих данных. Затем данные удаляются в соответствии с пунктом 10.2.",
          },
        ],
      },
      {
        heading: "19. Изменение Договора",
        body: [
          {
            type: "paragraph",
            text: "19.1. Лицензиар вправе изменять настоящий Договор, публикуя новую редакцию по настоящему адресу. О существенных изменениях сообщается в приложении не менее чем за 10 календарных дней до их вступления в силу.",
          },
          {
            type: "paragraph",
            text: "19.2. Продолжение использования Сервиса после вступления новой редакции в силу означает её принятие. Если Заказчик не согласен с изменениями, он вправе расторгнуть Договор в порядке пункта 18.2.",
          },
        ],
      },
      {
        heading: "20. Применимое право, споры и язык",
        body: [
          {
            type: "paragraph",
            text: "20.1. Настоящий Договор регулируется законодательством Республики Узбекистан.",
          },
          {
            type: "paragraph",
            text: "20.2. Споры разрешаются путём переговоров. Претензионный порядок обязателен; срок ответа на претензию — 30 дней. При недостижении согласия спор передаётся в компетентный суд Республики Узбекистан по месту нахождения Лицензиара.",
          },
          {
            type: "paragraph",
            text: "20.3. Настоящий Договор опубликован на узбекском, русском и английском языках. При расхождении текстов преимущественную силу имеет текст на русском языке.",
          },
        ],
      },
      {
        heading: "21. Реквизиты Лицензиара",
        body: [
          {
            type: "list",
            items: [
              "Наименование: [наименование компании]",
              "ИНН: [●]",
              "Юридический адрес: [●]",
              "Банк: [●], р/с: [●], МФО: [●]",
              "E-mail: [support@●]",
              "Телефон: [+998 ●]",
            ],
          },
        ],
      },
    ],
  },

  uz: {
    title: "Ommaviy oferta",
    updatedLabel: "Tahrir sanasi",
    updatedDate: "2026-yil 21-noyabr",
    intro:
      "Ushbu hujjat [kompaniya nomi] tomonidan Studio dasturiy xizmatidan foydalanish bo‘yicha litsenziya shartnomasini quyidagi shartlarda tuzish to‘g‘risidagi ommaviy ofertadir. Oferta go‘zallik va boshqa maishiy xizmatlar ko‘rsatuvchi O‘zbekiston Respublikasidagi yuridik shaxslar, yakka tartibdagi tadbirkorlar va o‘zini o‘zi band qilgan shaxslarga qaratilgan. Uni diqqat bilan o‘qing: 4-bo‘limda ko‘rsatilgan tartibda qabul qilish orqali siz biz bilan shartnoma tuzasiz.",
    sections: [
      {
        heading: "1. Umumiy qoidalar",
        body: [
          {
            type: "paragraph",
            text: "1.1. Ushbu Shartnoma O‘zbekiston Respublikasi Fuqarolik kodeksining 367 va 369-moddalariga muvofiq ommaviy ofertadir. Uni 4-bo‘lim tartibida aksept qilish Shartnomani quyidagi shartlarda yozma shaklda tuzishga tengdir (Fuqarolik kodeksining 370-moddasi).",
          },
          {
            type: "paragraph",
            text: "1.2. Litsenziar — [kompaniya nomi], STIR [●], manzil: [yuridik manzil] (keyingi o‘rinlarda — “Litsenziar”, “biz”). Litsenziarning to‘liq rekvizitlari 21-bo‘limda keltirilgan.",
          },
          {
            type: "paragraph",
            text: "1.3. Litsenziar ushbu Shartnomani 19-bo‘lim tartibida o‘zgartirishi mumkin. Amaldagi tahrir doimo ushbu manzilda e’lon qilinadi.",
          },
        ],
      },
      {
        heading: "2. Atamalar",
        body: [
          {
            type: "list",
            items: [
              "Xizmat — iOS va Android uchun Studio mobil ilovasi, uning server qismi va u orqali yaratiladigan onlayn yozilish saytlari; Litsenziarga tegishli va u tomonidan boshqariladi.",
              "Buyurtmachi — Xizmatda Biznes yaratgan va ushbu Shartnomani aksept qilgan yuridik shaxs, yakka tartibdagi tadbirkor yoki o‘zini o‘zi band qilgan shaxs.",
              "Biznes — Buyurtmachining Xizmatdagi hisobi: filiallari, xizmatlari, jamoasi, mijozlari, ish jadvallari, to‘lov yozuvlari va sozlamalari.",
              "Foydalanuvchi — Xizmatga telefon raqami orqali kiradigan jismoniy shaxs. Bitta Foydalanuvchi har birida turli rol bilan bir nechta Biznesga a’zo bo‘lishi mumkin.",
              "Egasi, Menejer, Xodim — Foydalanuvchining Biznesdagi rollari; ularning huquqlari 5-bo‘limda bayon etilgan.",
              "Mijoz — Buyurtmachining mijozi: ma’lumotlarini Buyurtmachi Xizmatga kiritadigan yoki Yozilish sayti orqali Buyurtmachining xizmatlariga yoziladigan shaxs. Mijozlar Studio ilovasidan foydalanmaydi.",
              "Yozilish sayti — Xizmatda yaratilgan Biznesning ommaviy veb-sahifasi; u orqali Mijozlar Buyurtmachining xizmatlariga o‘zlari yoziladi.",
              "Obuna — tanlangan Tarif bo‘yicha tanlangan muddatga Xizmatdan pullik foydalanish huquqi.",
              "Tarif — ilovada e’lon qilingan Xizmat shartlari to‘plami (nomi, jamoa soni chegarasi, muddatlar bo‘yicha narx variantlari).",
              "Sinov muddati — ilovada ko‘rsatilgan shartlarda Xizmatdan bepul foydalanish muddati.",
            ],
          },
        ],
      },
      {
        heading: "3. Shartnoma predmeti",
        body: [
          {
            type: "paragraph",
            text: "3.1. Litsenziar Buyurtmachiga to‘langan Obuna (yoki Sinov muddati) davomida Xizmatdan uning vazifasi doirasida internet orqali foydalanish uchun oddiy (noeksklyuziv), boshqaga o‘tkazib bo‘lmaydigan litsenziya beradi, Buyurtmachi esa tanlangan Tarif shartlari bo‘yicha litsenziya haqini to‘laydi.",
          },
          {
            type: "paragraph",
            text: "3.2. Xizmat faqat dasturiy ta’minotdir. U Buyurtmachiga yozuvlar jurnali, mijozlar bazasi, xizmatlar katalogi, jamoa va ish jadvallarini yuritish, Mijozlardan olingan to‘lovlarni qayd etish, hisobotlarni ko‘rish va Yozilish saytini yuritishda yordam beradi.",
          },
          {
            type: "paragraph",
            text: "3.3. Xizmat Buyurtmachi va uning Mijozlari o‘rtasida pul mablag‘larini qabul qilmaydi, saqlamaydi va o‘tkazmaydi hamda to‘lov tizimi yoki to‘lov tashkiloti hisoblanmaydi. U faqat Buyurtmachi o‘z vositalari bilan olgan to‘lovlarni qayd etadi. Ushbu Shartnoma bo‘yicha Litsenziar oladigan yagona to‘lov — Obuna haqi.",
          },
          {
            type: "paragraph",
            text: "3.4. Xizmat, uning kodi, dizayni, tovar belgilari va ma’lumotlar bazalariga bo‘lgan mulk huquqi va boshqa mutlaq huquqlar Buyurtmachiga o‘tmaydi.",
          },
        ],
      },
      {
        heading: "4. Ofertani aksept qilish",
        body: [
          {
            type: "paragraph",
            text: "4.1. Buyurtmachi quyidagi harakatlardan birini bajarish orqali ushbu ofertani to‘liq va shartsiz qabul qiladi: Xizmatda Biznes yaratish yoki Obuna uchun to‘lov qilish. Shartnoma ushbu harakatlarning birinchisi bajarilgan paytdan boshlab tuzilgan hisoblanadi.",
          },
          {
            type: "paragraph",
            text: "4.2. Akseptni amalga oshiruvchi shaxs 18 yoshga to‘lganligini va Buyurtmachi nomidan harakat qilish vakolatiga ega ekanligini tasdiqlaydi. Agar Buyurtmachi yuridik shaxs bo‘lsa, aksept uning nomidan amalga oshiriladi.",
          },
          {
            type: "paragraph",
            text: "4.3. Mavjud Biznesga taklif orqali qo‘shilgan Foydalanuvchilar ushbu Biznes Buyurtmachisi nomidan harakat qiladi va Xizmat qoidalarining o‘zlariga taalluqli qismiga rioya qilishi shart.",
          },
        ],
      },
      {
        heading: "5. Ro‘yxatdan o‘tish, kirish va rollar",
        body: [
          {
            type: "paragraph",
            text: "5.1. Kirish O‘zbekiston mobil telefon raqami (+998) va bir martalik SMS-kod orqali amalga oshiriladi. Birinchi muvaffaqiyatli kirish Foydalanuvchi profilini yaratadi. Kod 3 daqiqa amal qiladi; uni 60 soniyadan keyin qayta so‘rash mumkin; soatiga 5 tadan ortiq kod so‘rab bo‘lmaydi va bitta kod uchun 5 tadan ortiq noto‘g‘ri urinishga yo‘l qo‘yilmaydi.",
          },
          {
            type: "paragraph",
            text: "5.2. Telefon raqamini ilovada o‘zgartirib bo‘lmaydi; u Foydalanuvchi shaxsi tasdiqlanganidan keyin qo‘llab-quvvatlash xizmati orqali o‘zgartiriladi.",
          },
          {
            type: "paragraph",
            text: "5.3. Sessiya Foydalanuvchi uchun faol bo‘lmagan holatda 30 kungacha, tanlangan Biznes uchun esa 7 kungacha saqlanadi. Buyurtmachi va uning Foydalanuvchilari o‘z qurilmalari va SIM-kartalari xavfsizligi uchun o‘zlari javob beradi; kirish amalga oshirilgan qurilmadan Xizmatda bajarilgan harakatlar tegishli Foydalanuvchining harakatlari hisoblanadi.",
          },
          {
            type: "paragraph",
            text: "5.4. Biznesdagi rollar:",
          },
          {
            type: "list",
            items: [
              "Egasi — Biznesni yaratadi; Menejerning barcha huquqlariga ega, shuningdek Menejerlarni taklif qilishi, Biznes STIRini ko‘rsatishi, Yozilish saytini yaratishi, nomini o‘zgartirishi va o‘chirishi mumkin.",
              "Menejer — Biznesning kundalik ishini yuritadi: katalog, jadvallar, mijozlar, Xodimlarni taklif qilish, kassalar va to‘lov qoidalari, qaytarishlar, tahlil, Obuna va uning to‘lovi, bildirishnomalar maxfiyligi sozlamalari.",
              "Xodim — xizmat ko‘rsatadi; o‘z yozuvlarini to‘liq, hamkasblarining yozuvlarini esa Mijoz ma’lumotlari yashirilgan holda ko‘radi; Mijoz yaratishi va mijozlar bazasini ko‘rishi mumkin, lekin tahrirlay yoki o‘chira olmaydi; Biznes ruxsat bergan taqdirdagina to‘lov qabul qiladi; faqat o‘z statistikasini ko‘radi.",
            ],
          },
          {
            type: "paragraph",
            text: "5.5. Egasi yoki Menejer odamlarni ism, rol va telefon raqamini ko‘rsatib Biznesga taklif qiladi; Xizmat amal qilish muddatiga ega taklif kodini yaratadi, uni Buyurtmachi taklif qilingan shaxsga Xizmatdan tashqarida yetkazadi. Taklifni foydalanilgunga qadar bekor qilish mumkin.",
          },
          {
            type: "paragraph",
            text: "5.6. Buyurtmachi taklif qilinadigan shaxslarni tanlash, ularga berilgan rollar va ularning Xizmatdagi barcha harakatlari uchun javob beradi hamda endi o‘zida ishlamaydigan shaxslarning kirish huquqini o‘chirishi shart.",
          },
        ],
      },
      {
        heading: "6. Xizmat imkoniyatlari",
        body: [
          {
            type: "paragraph",
            text: "6.1. Ushbu tahrir sanasida Xizmat quyidagilarni o‘z ichiga oladi:",
          },
          {
            type: "list",
            items: [
              "xodimlar bo‘yicha yozuvlar jurnali va yozuv holatlari (yozilgan, tasdiqlangan, yakunlangan, bekor qilingan, kelmadi);",
              "mijozlar bazasi: mijoz kartalari, tashriflar tarixi, eslatmalar, toifalar, arxivlash va tiklash;",
              "toifalar, davomiylik, narxlar, rasmlar va onlayn yozilish sozlamalari bilan xizmatlar katalogi;",
              "jamoa, takliflar, xodimlarning ommaviy profillari, haftalik jadvallar, kunlik o‘zgarishlar va dam olish kunlari;",
              "filial va biznes profili: manzil, telefon, vaqt mintaqasi, ish vaqti, xaritadagi joylashuv, logotip, muqova va galereya;",
              "to‘lovlar (naqd, karta, boshqa), qaytarishlar va narx o‘zgarishini qayd etish; kassalar; kunlik kassa hisobi;",
              "hisobotlar va tahlil;",
              "Yozilish sayti;",
              "yozuvlar haqida push-bildirishnomalar;",
              "Obunani boshqarish va ilovadagi qo‘llab-quvvatlash kontaktlari.",
            ],
          },
          {
            type: "paragraph",
            text: "6.2. Ilovaning “tez orada”, “hozircha mavjud emas” deb belgilangan yoki shartli ma’lumotlar ko‘rsatiladigan bo‘limlari (jumladan, ish haqi hisobi, bildirishnomalar lentasi va yozilish vidjeti sozlamalari) ishga tushirilgunga qadar Litsenziar majburiyatlariga kirmaydi.",
          },
          {
            type: "paragraph",
            text: "6.3. Litsenziar Xizmatni rivojlantirishi mumkin: funksiyalarni qo‘shish, o‘zgartirish yoki olib tashlash, interfeysni o‘zgartirish, funksiyalarni yoqish va o‘chirish — bunda to‘langan muddat davomida Xizmatning asosiy vazifasi (3.2 va 6.1-bandlar) saqlanib qoladi.",
          },
          {
            type: "paragraph",
            text: "6.4. Biznes yaratilganda Xizmat tanlangan faoliyat turi uchun boshlang‘ich xizmatlar to‘plamini to‘ldirishi mumkin. Buyurtmachi foydalanishdan oldin ushbu xizmatlar, nomlar va narxlarni tekshirishi va to‘g‘rilashi shart.",
          },
        ],
      },
      {
        heading: "7. Yozilish sayti",
        body: [
          {
            type: "paragraph",
            text: "7.1. Egasi Yozilish saytini yaratadi va uning manzilini tanlaydi (3–30 ta lotin harfi, raqam yoki defis; band qilingan va zaxiralangan manzillardan foydalanib bo‘lmaydi). Yangi sayt Egasi yoki Menejer uni e’lon qilmaguncha nashr etilmagan bo‘ladi.",
          },
          {
            type: "paragraph",
            text: "7.2. Manzil o‘zgartirilganda eski manzil darhol ishlashdan to‘xtaydi va 30 kun davomida yangi manzilga havolani ko‘rsatadi. Sayt o‘chirilganda u darhol ishlashdan to‘xtaydi va uning manzilini 30 kun davomida boshqa biznes egallay olmaydi.",
          },
          {
            type: "paragraph",
            text: "7.3. Saytda Buyurtmachi e’lon qilishga qaror qilgan ma’lumotlar ommaviy ko‘rsatiladi: nomi, logotipi, muqovasi, galereyasi, manzil va telefonli filiallari, narx va rasmli onlayn yozilish xizmatlari, onlayn ko‘rsatiladigan xodimlar va bo‘sh vaqtlar. Buyurtmachi ushbu ma’lumotlarning to‘g‘riligi va qonuniyligi hamda ismi, rasmi va tavsifini e’lon qilayotgan xodimlarning roziligi mavjudligi uchun javob beradi.",
          },
          {
            type: "paragraph",
            text: "7.4. Yozilish uchun Mijoz ismi va telefon raqamini kiritadi, kapchadan o‘tadi, telefonni SMS-kod bilan tasdiqlaydi va Yozilish saytining mijozlar uchun shartlari va maxfiylik siyosatini qabul qiladi [havola]. Mijoz shaxsiy havola oladi va u orqali Buyurtmachi belgilagan qoidalar (tashrifdan 0–168 soat oldingacha va ko‘pi bilan 10 marta ko‘chirish) hamda Xizmatning yozilish qoidalari doirasida yozuvni bekor qilishi yoki ko‘chirishi mumkin.",
          },
          {
            type: "paragraph",
            text: "7.5. Xizmat ko‘rsatish shartnomasi Buyurtmachi va Mijoz o‘rtasida tuziladi. Litsenziar uning tarafi emas va Buyurtmachi xizmatlarining sifati, narxi, bekor qilinishi yoki ko‘rsatilmasligi uchun javob bermaydi.",
          },
          {
            type: "paragraph",
            text: "7.6. Litsenziar 14-bo‘limda ko‘rsatilgan hollarda Yozilish saytini o‘chirib qo‘yishi mumkin.",
          },
        ],
      },
      {
        heading: "8. Tariflar, narxlar va to‘lov",
        body: [
          {
            type: "paragraph",
            text: "8.1. Tariflar, ularning narxlari, muddatlari (oylarda), bonus oylari va jamoa soni chegaralari ilovadagi Obuna ekranida e’lon qilinadi. Buyurtmaga rasmiylashtirish paytida ko‘rsatilgan narx qo‘llaniladi.",
          },
          {
            type: "paragraph",
            text: "8.2. Narxlar o‘zbek so‘mida (UZS), butun so‘mlarda belgilanadi va O‘zbekiston Respublikasi soliq qonunchiligiga muvofiq [QQSni o‘z ichiga oladi / QQSga tortilmaydi].",
          },
          {
            type: "paragraph",
            text: "8.3. Obunani faqat Egasi yoki Menejer sotib olishi mumkin. Xarid ilovada amalga oshiriladi: Tarif va muddat tanlanadi, promokod qo‘llanilishi mumkin (o‘z shartlari bo‘yicha foiz yoki qat’iy summadagi chegirma), buyurtma yaratiladi va to‘lov provayderining sahifasida (hozirda — Click) to‘lanadi.",
          },
          {
            type: "paragraph",
            text: "8.4. To‘lov provayder uni Litsenziarga tasdiqlagan paytdan boshlab amalga oshirilgan hisoblanadi. Shundan so‘ng Tarif faollashtiriladi, agar Tarif allaqachon amalda bo‘lsa — muddati uzaytiriladi. To‘lanmagan buyurtma Xizmat belgilagan vaqtdan keyin muddati tugaydi va qayta yaratilishi kerak.",
          },
          {
            type: "paragraph",
            text: "8.5. Bank kartasi ma’lumotlari faqat to‘lov provayderi sahifasida kiritiladi va u tomonidan o‘z qoidalari bo‘yicha qayta ishlanadi. Litsenziar va ilova karta ma’lumotlarini olmaydi va saqlamaydi.",
          },
          {
            type: "paragraph",
            text: "8.6. Obuna to‘lovi uchun fiskal chek qonunchilikka muvofiq to‘lov provayderi orqali shakllantiriladi.",
          },
          {
            type: "paragraph",
            text: "8.7. Obuna avtomatik ravishda uzaytirilmaydi. Xizmatdan foydalanishni davom ettirish uchun Buyurtmachi joriy muddat tugashidan oldin yangi muddat uchun to‘laydi. Obunaning boshlanish va tugash sanalari ilovada ko‘rsatiladi. Avtomatik uzaytirish joriy etilgan taqdirda u faqat Buyurtmachining alohida aniq roziligi bilan yoqiladi.",
          },
          {
            type: "paragraph",
            text: "8.8. Sinov muddati, agar taklif etilsa, faollashtirish vaqtida ilovada ko‘rsatilgan muddat va imkoniyatlar bilan bepul beriladi. Sinov muddati tugagach, 10-bo‘lim qo‘llaniladi.",
          },
          {
            type: "paragraph",
            text: "8.9. Litsenziar narxlar va Tariflarni o‘zgartirishi mumkin. O‘zgarishlar kuchga kirishidan kamida 10 kalendar kun oldin ilovada e’lon qilinadi va allaqachon to‘langan muddatlarga taalluqli emas.",
          },
          {
            type: "paragraph",
            text: "8.10. Hisob-faktura asosida bank o‘tkazmasi orqali to‘lov qo‘llab-quvvatlash xizmati orqali Litsenziar bilan kelishilgan holda mumkin.",
          },
        ],
      },
      {
        heading: "9. Obuna haqini qaytarish",
        body: [
          {
            type: "paragraph",
            text: "9.1. Boshlangan Obuna muddati uchun to‘lov, shu jumladan Buyurtmachi Xizmatdan muddatidan oldin foydalanishni to‘xtatganda ham, ushbu bo‘lim yoki qonunchilikda nazarda tutilgan hollar bundan mustasno, qaytarilmaydi.",
          },
          {
            type: "paragraph",
            text: "9.2. Agar Xizmat Litsenziar aybi bilan ketma-ket 72 soatdan ortiq ishlamagan bo‘lsa yoki Litsenziar Buyurtmachi tomonidan qoidabuzarlik bo‘lmagan holda Shartnomani bekor qilsa, Buyurtmachi to‘langan muddatning foydalanilmagan qismi uchun pulni qaytarishni talab qilishi mumkin.",
          },
          {
            type: "paragraph",
            text: "9.3. Qaytarish to‘g‘risidagi ariza Biznes ma’lumotlari va buyurtma raqami ko‘rsatilgan holda qo‘llab-quvvatlash xizmati orqali yuboriladi. Ma’qullangan qaytarish 10 ish kuni ichida, imkon qadar to‘lov qilingan usulda amalga oshiriladi.",
          },
          {
            type: "paragraph",
            text: "9.4. Agar to‘lov ikki marta yoki Tarif faollashtirilmagan holda yechib olingan bo‘lsa, Litsenziar to‘lov provayderi bilan solishtirgandan so‘ng Tarifni faollashtiradi yoki summani qaytaradi.",
          },
        ],
      },
      {
        heading: "10. Obuna tugaganda",
        body: [
          {
            type: "paragraph",
            text: "10.1. To‘langan muddat yoki Sinov muddati uzaytirilmasdan tugaganda Litsenziar Obuna ekrani, to‘lov va qo‘llab-quvvatlashga kirishni saqlab qolgan holda Xizmat funksiyalaridan foydalanishni cheklashi mumkin. Yozilish sayti nashrdan olinishi va yozuvlar qabul qilishni to‘xtatishi mumkin.",
          },
          {
            type: "paragraph",
            text: "10.2. Biznes ma’lumotlari Obuna tugaganidan keyin 90 kun davomida saqlanadi. Shu muddat ichida Obuna uzaytirilsa, kirish ma’lumotlar bilan birga tiklanadi. Bu muddat o‘tgach, qonunchilik uzoqroq saqlashni talab qiladigan hollar bundan mustasno, Litsenziar ma’lumotlarni o‘chirishi yoki anonimlashtirishi mumkin.",
          },
          {
            type: "paragraph",
            text: "10.3. Jamoa soni chegarasi kichikroq Tarif tanlanganda Buyurtmachi jamoani chegara darajasigacha qisqartirishi shart; shu vaqtgacha Xizmat yangi a’zolar qo‘shilishiga yo‘l qo‘ymasligi mumkin.",
          },
        ],
      },
      {
        heading: "11. Buyurtmachi va uning Mijozlari o‘rtasidagi hisob-kitoblar",
        body: [
          {
            type: "paragraph",
            text: "11.1. Xizmatda qayd etiladigan to‘lovlar (naqd, Buyurtmachining o‘z terminali orqali karta, Payme kabi boshqa usullar) Xizmatdan tashqarida amalga oshiriladi. Ularni qayd etish faqat Buyurtmachining o‘z hisobi uchun ma’lumot hisoblanadi.",
          },
          {
            type: "paragraph",
            text: "11.2. Kiritilgan to‘lov yoki qaytarishni sababini ko‘rsatgan holda 15 daqiqa ichida bekor qilish mumkin; shundan keyin faqat qaytarish rasmiylashtirilishi mumkin. Qaytarish summasi to‘langan summadan oshmasligi kerak.",
          },
          {
            type: "paragraph",
            text: "11.3. Xizmat Buyurtmachining savdolari bo‘yicha fiskal cheklar bermaydi. Onlayn-NKM yoki virtual kassani qo‘llash, chek berish, soliqlarni to‘lash va o‘z savdolari bilan bog‘liq boshqa majburiyatlar uchun Buyurtmachi o‘zi javob beradi.",
          },
          {
            type: "paragraph",
            text: "11.4. Xodimlar to‘lov qabul qila oladimi va qaysi kassalardan foydalanishini Buyurtmachi hal qiladi hamda kiritilgan summalarning to‘g‘riligi uchun javob beradi.",
          },
        ],
      },
      {
        heading: "12. Shaxsga doir ma’lumotlar",
        body: [
          {
            type: "paragraph",
            text: "12.1. Buyurtmachi yoki uning Foydalanuvchilari tomonidan yoxud Mijozlar tomonidan Yozilish saytida Xizmatga kiritiladigan Mijozlar ma’lumotlari (ism, telefon raqami, e-mail, tug‘ilgan sana, jins, eslatmalar, toifalar, tashriflar tarixi, tashriflar va kelmaslik soni, to‘lov summalari, yozuvga izohlar) Buyurtmachining shaxsga doir ma’lumotlar bazasini tashkil etadi. Ushbu ma’lumotlarga nisbatan Buyurtmachi shaxsga doir ma’lumotlarning mulkdori va operatori, Litsenziar esa ularni O‘zbekiston Respublikasining “Shaxsga doir ma’lumotlar to‘g‘risida”gi Qonuniga muvofiq Buyurtmachining topshirig‘i va ko‘rsatmalari asosida qayta ishlovchi uchinchi shaxs hisoblanadi.",
          },
          {
            type: "paragraph",
            text: "12.2. Buyurtmachi kiritilayotgan ma’lumotlarni yig‘ish va qayta ishlash uchun qonuniy asosga, jumladan talab qilingan hollarda sub’ektlarning roziligiga ega ekanligini, Mijozlar va xodimlarni qayta ishlash haqida xabardor qilishini hamda qayta ishlashga haqqi bo‘lmagan ma’lumotlarni kiritmasligini kafolatlaydi. Buyurtmachi o‘z qayta ishlashining qonuniyligi uchun ma’lumotlar sub’ektlari va davlat organlari oldida javobgar bo‘ladi.",
          },
          {
            type: "paragraph",
            text: "12.3. Ushbu Shartnomani qabul qilish orqali Buyurtmachi Litsenziarga ushbu ma’lumotlarni faqat Xizmatni taqdim etish uchun qayta ishlashni topshiradi: saqlash, Buyurtmachi Foydalanuvchilariga ularning rollariga ko‘ra ko‘rsatish, SMS-kodlar va bildirishnomalar yuborish, Yozilish saytini ko‘rsatish va yozuvlar yaratish. Litsenziar Mijozlar ma’lumotlaridan o‘z maqsadlarida foydalanmaydi, ularni sotmaydi va 12.6-bandda ko‘rsatilgan yoki qonunchilikda nazarda tutilgan hollardan tashqari uchinchi shaxslarga bermaydi.",
          },
          {
            type: "paragraph",
            text: "12.4. Foydalanuvchilar (ism, telefon raqami, rasm, interfeys tili, bildirishnomalar uchun qurilma ma’lumotlari) va Buyurtmachi ma’lumotlarini Litsenziar operator sifatida Xizmatning Maxfiylik siyosatiga [havola] muvofiq qayta ishlaydi.",
          },
          {
            type: "paragraph",
            text: "12.5. O‘zbekiston Respublikasi fuqarolarining shaxsga doir ma’lumotlarini yig‘ish, tizimlashtirish va saqlash O‘zbekiston Respublikasi hududida joylashgan ma’lumotlar bazalarida amalga oshiriladi [xosting-provayder / ma’lumotlar markazi].",
          },
          {
            type: "paragraph",
            text: "12.6. Xizmatni taqdim etish uchun Litsenziar faqat o‘z vazifasi uchun zarur ma’lumotlarni oladigan quyidagi uchinchi tomon xizmatlaridan foydalanadi: SMS-provayder [nomi] (telefon raqami va kod); Click (buyurtma raqami va summa; karta ma’lumotlari Clickda qoladi); Google Firebase Cloud Messaging va Apple Push Notification service (qurilma tokeni va bildirishnoma matni); Yandex Xaritalar (qidiruv matni va koordinatalar; qurilma joylashuvi — faqat so‘rov bo‘yicha); Cloudflare Turnstile (Yozilish saytidagi kapcha); Apple App Store va Google Play (ilovani ularning shartlari asosida tarqatish).",
          },
          {
            type: "paragraph",
            text: "12.7. Litsenziar ma’lumotlarni himoya qilishning tashkiliy va texnik choralarini qo‘llaydi, jumladan rollar bo‘yicha kirishni cheklash, Mijoz ma’lumotlarini boshqa Xodimlardan yashirish, push-bildirishnomalarda Mijoz ma’lumotlarini yashirish imkoniyati, sessiya tokenlarini qurilmaning himoyalangan xotirasida saqlash va uzatishda ma’lumotlarni shifrlash.",
          },
          {
            type: "paragraph",
            text: "12.8. Ma’lumotlarga kirish, ularni tuzatish, o‘chirish yoki eksport qilish, shuningdek Foydalanuvchi hisobi yoki Biznesni o‘chirish bo‘yicha so‘rovlar qo‘llab-quvvatlash xizmati orqali yuboriladi. Litsenziar 30 kun ichida javob beradi. Mijozlarning Buyurtmachidagi ma’lumotlar bo‘yicha so‘rovlari Buyurtmachiga yuboriladi va u ma’lumotlar mulkdori sifatida ular bo‘yicha qaror qabul qiladi.",
          },
        ],
      },
      {
        heading: "13. Taraflarning huquq va majburiyatlari",
        body: [
          {
            type: "paragraph",
            text: "13.1. Litsenziar quyidagilarni o‘z zimmasiga oladi:",
          },
          {
            type: "list",
            items: [
              "ushbu Shartnomaga muvofiq to‘langan muddat davomida Xizmatdan foydalanish imkonini berish;",
              "Buyurtmachi ma’lumotlarining maxfiyligini saqlash va Shartnoma yoki qonunchilikda nazarda tutilgan hollardan tashqari ularni oshkor qilmaslik;",
              "15-bo‘limda ko‘rsatilgan kanallar orqali qo‘llab-quvvatlash ko‘rsatish;",
              "Shartnoma va narxlardagi o‘zgarishlar haqida Buyurtmachini 8.9-band va 19-bo‘lim tartibida xabardor qilish.",
            ],
          },
          {
            type: "paragraph",
            text: "13.2. Litsenziar quyidagi huquqlarga ega:",
          },
          {
            type: "list",
            items: [
              "Xizmatni 6.3-bandga muvofiq rivojlantirish va o‘zgartirish;",
              "ilova yangilanishini o‘rnatishni talab qilish va eskirgan versiyalarni bloklash;",
              "vaqtincha mavjudlikni cheklashi mumkin bo‘lgan texnik ishlarni o‘tkazish;",
              "14-bo‘limda ko‘rsatilgan hollarda kirishni to‘xtatib turish;",
              "Xizmatni yaxshilash uchun undan foydalanish bo‘yicha anonimlashtirilgan va umumlashtirilgan statistikadan foydalanish.",
            ],
          },
          {
            type: "paragraph",
            text: "13.3. Buyurtmachi quyidagilarni o‘z zimmasiga oladi:",
          },
          {
            type: "list",
            items: [
              "Obunani 8-bo‘limga muvofiq to‘lash;",
              "o‘z biznesi, narxlari, xizmatlari va jadvallari haqida to‘g‘ri ma’lumot berish va uni dolzarb holatda saqlash;",
              "shaxsga doir ma’lumotlar, iste’molchilar huquqlarini himoya qilish, reklama, soliqqa tortish va NKM qo‘llash to‘g‘risidagi qonunchilikka rioya qilish;",
              "o‘z Foydalanuvchilari tomonidan ushbu Shartnomaga rioya qilinishini ta’minlash;",
              "Xizmatdan noqonuniy maqsadlarda, spam tarqatish, yolg‘on, haqoratli yoki uchinchi shaxslar huquqlarini buzuvchi ma’lumotlarni e’lon qilish uchun foydalanmaslik;",
              "texnik cheklovlarni chetlab o‘tish, ruxsatsiz kirish, Xizmatni nusxalash, dekompilyatsiya qilish yoki o‘zgartirish, uni avtomatik so‘rovlar bilan ortiqcha yuklashga urinmaslik;",
              "Xizmatdan foydalanish huquqini qayta sotmaslik va uchinchi shaxslarga bermaslik.",
            ],
          },
          {
            type: "paragraph",
            text: "13.4. Buyurtmachi Xizmatdan uning imkoniyatlari va o‘z Tarifi chegaralari doirasida foydalanish, qo‘llab-quvvatlash xizmatiga murojaat qilish va istalgan vaqtda Xizmatdan foydalanishni to‘xtatish huquqiga ega.",
          },
        ],
      },
      {
        heading: "14. To‘xtatib turish va bloklash",
        body: [
          {
            type: "paragraph",
            text: "14.1. Litsenziar quyidagi hollarda Biznes yoki Foydalanuvchi hisobiga kirishni to‘xtatib turishi yoxud Yozilish saytini o‘chirib qo‘yishi mumkin:",
          },
          {
            type: "list",
            items: [
              "Buyurtmachi yoki uning Foydalanuvchilari ushbu Shartnoma yoki qonunchilikni buzsa;",
              "Yozilish saytida noqonuniy, chalg‘ituvchi yoki huquqlarni buzuvchi ma’lumotlar bo‘lsa yoxud unga nisbatan asosli shikoyat kelib tushsa;",
              "ruxsatsiz kirish yoki firibgarlik haqida asosli shubha mavjud bo‘lsa;",
              "vakolatli davlat organining qarori buni talab qilsa.",
            ],
          },
          {
            type: "paragraph",
            text: "14.2. Imkon qadar Litsenziar Buyurtmachini oldindan xabardor qiladi va qoidabuzarlikni bartaraf etish uchun oqilona muddat beradi. Sabab bartaraf etilgandan so‘ng kirish tiklanadi.",
          },
        ],
      },
      {
        heading: "15. Mavjudlik, yangilanishlar va qo‘llab-quvvatlash",
        body: [
          {
            type: "paragraph",
            text: "15.1. Xizmat internet orqali “boricha” taqdim etiladi va tarmoqqa ulanishni talab qiladi. Litsenziar uning mavjudligini ta’minlash uchun oqilona sa’y-harakatlarni amalga oshiradi, ammo uzluksiz va xatosiz ishlashni kafolatlamaydi. Muayyan mavjudlik darajasi kafolatlanmaydi.",
          },
          {
            type: "paragraph",
            text: "15.2. Xizmat iOS va Androidning amaldagi versiyalarida ishlaydi. Litsenziar yangilashni talab qilishi va ilovaning eskirgan versiyalarini bloklashi mumkin.",
          },
          {
            type: "paragraph",
            text: "15.3. Qo‘llab-quvvatlash ilovadagi qo‘llab-quvvatlash ekrani orqali mavjud: Telegram [@●], WhatsApp [+998 ●], e-mail [support@●]. Ish vaqti: [●]. Litsenziar [1 ish kuni] ichida javob berishga intiladi. Murojaat qilishda Buyurtmachi qo‘llab-quvvatlash ekranida ko‘rsatilgan filial identifikatori va qurilma kodini ma’lum qiladi.",
          },
        ],
      },
      {
        heading: "16. Javobgarlik",
        body: [
          {
            type: "paragraph",
            text: "16.1. Taraflar ushbu Shartnomani bajarmaganlik uchun O‘zbekiston Respublikasi qonunchiligi va ushbu Shartnomaga muvofiq javobgar bo‘ladi.",
          },
          {
            type: "paragraph",
            text: "16.2. Litsenziar Buyurtmachining boy berilgan foydasi, yo‘qotilgan yozuvlar yoki mijozlar va boshqa bilvosita zararlari; Buyurtmachi kiritadigan yoki e’lon qiladigan ma’lumotlar mazmuni; Buyurtmachining xizmatlari va uning Mijozlar bilan munosabatlari; Buyurtmachi Foydalanuvchilarining harakatlari; internet, mobil tarmoqlar, qurilmalar va uchinchi tomon xizmatlaridagi (SMS-provayder, to‘lov provayderlari, push-bildirishnoma xizmatlari, xaritalar, ilovalar do‘konlari) nosozliklar uchun javob bermaydi.",
          },
          {
            type: "paragraph",
            text: "16.3. Agar qonunchilikda boshqacha tartib nazarda tutilmagan bo‘lsa, Litsenziarning ushbu Shartnoma bo‘yicha umumiy javobgarligi da’voga asos bo‘lgan voqeadan oldingi 3 oy uchun Buyurtmachi to‘lagan Obuna haqi summasi bilan cheklanadi.",
          },
          {
            type: "paragraph",
            text: "16.4. Buyurtmachi kiritilayotgan ma’lumotlar va e’lon qilinayotgan axborotning qonuniyligi uchun javob beradi hamda Buyurtmachi ushbu Shartnoma yoki qonunchilikni buzganligi sababli uchinchi shaxslarning (jumladan, Mijozlar, xodimlar va davlat organlarining) da’volari natijasida Litsenziarga yetkazilgan zararni qoplaydi.",
          },
        ],
      },
      {
        heading: "17. Fors-major",
        body: [
          {
            type: "paragraph",
            text: "17.1. Taraflar yengib bo‘lmaydigan kuch holatlari, jumladan tabiiy ofatlar, harbiy harakatlar, ommaviy tartibsizliklar, davlat organlarining qarorlari, elektr ta’minoti yoki aloqa tarmoqlaridagi keng ko‘lamli nosozliklar va Taraflarning oqilona nazoratidan tashqaridagi boshqa holatlar sababli majburiyatlarni bajarmaganlik uchun javobgarlikdan ozod qilinadi.",
          },
        ],
      },
      {
        heading: "18. Amal qilish muddati va bekor qilish",
        body: [
          {
            type: "paragraph",
            text: "18.1. Shartnoma aksept qilingan paytdan kuchga kiradi va bekor qilinguniga qadar muddatsiz amal qiladi.",
          },
          {
            type: "paragraph",
            text: "18.2. Buyurtmachi Xizmatdan foydalanishni to‘xtatish yoki qo‘llab-quvvatlash xizmati orqali Biznesni o‘chirish so‘rovini yuborish orqali istalgan vaqtda Shartnomani bekor qilishi mumkin. To‘langan haq 9-bo‘limda ko‘rsatilgan hollardan tashqari qaytarilmaydi.",
          },
          {
            type: "paragraph",
            text: "18.3. Litsenziar Buyurtmachi Shartnomani jiddiy yoki takroran buzganda, shuningdek Xizmat faoliyati to‘xtatilganda Buyurtmachini kamida 30 kun oldin xabardor qilib, Shartnomani bir tomonlama bekor qilishi mumkin (oxirgi holatda haqning foydalanilmagan qismi qaytariladi).",
          },
          {
            type: "paragraph",
            text: "18.4. Shartnoma bekor qilingandan so‘ng Buyurtmachi 30 kun ichida o‘z ma’lumotlarini eksport qilishni so‘rashi mumkin. Shundan so‘ng ma’lumotlar 10.2-bandga muvofiq o‘chiriladi.",
          },
        ],
      },
      {
        heading: "19. Shartnomaga o‘zgartirishlar",
        body: [
          {
            type: "paragraph",
            text: "19.1. Litsenziar yangi tahrirni ushbu manzilda e’lon qilish orqali Shartnomani o‘zgartirishi mumkin. Muhim o‘zgarishlar kuchga kirishidan kamida 10 kalendar kun oldin ilovada e’lon qilinadi.",
          },
          {
            type: "paragraph",
            text: "19.2. Yangi tahrir kuchga kirgandan keyin Xizmatdan foydalanishni davom ettirish uni qabul qilishni anglatadi. Agar Buyurtmachi o‘zgarishlarga rozi bo‘lmasa, Shartnomani 18.2-band tartibida bekor qilishi mumkin.",
          },
        ],
      },
      {
        heading: "20. Qo‘llaniladigan huquq, nizolar va til",
        body: [
          {
            type: "paragraph",
            text: "20.1. Ushbu Shartnoma O‘zbekiston Respublikasi qonunchiligi bilan tartibga solinadi.",
          },
          {
            type: "paragraph",
            text: "20.2. Nizolar muzokaralar yo‘li bilan hal qilinadi. Talabnoma tartibi majburiy; talabnomaga javob berish muddati — 30 kun. Kelishuvga erishilmasa, nizo Litsenziar joylashgan joydagi O‘zbekiston Respublikasining vakolatli sudiga topshiriladi.",
          },
          {
            type: "paragraph",
            text: "20.3. Ushbu Shartnoma o‘zbek, rus va ingliz tillarida e’lon qilingan. Matnlar o‘rtasida tafovut bo‘lsa, rus tilidagi matn ustunlikka ega.",
          },
        ],
      },
      {
        heading: "21. Litsenziar rekvizitlari",
        body: [
          {
            type: "list",
            items: [
              "Nomi: [kompaniya nomi]",
              "STIR: [●]",
              "Yuridik manzil: [●]",
              "Bank: [●], h/r: [●], MFO: [●]",
              "E-mail: [support@●]",
              "Telefon: [+998 ●]",
            ],
          },
        ],
      },
    ],
  },
};
