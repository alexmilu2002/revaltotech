const quoteForm = document.querySelector('#quote-form');
const formNote = document.querySelector('#form-note');
const siteHeader = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const languageSwitcher = document.querySelector('#language-switcher');
const languageToggle = document.querySelector('#language-toggle');
const languageList = document.querySelector('#language-list');
const languageOptions = languageList ? [...languageList.querySelectorAll('li[data-lang]')] : [];
let currentLanguage = 'en';
const carousel = document.querySelector('#product-carousel');
const carouselTrack = document.querySelector('#carousel-track');
const carouselSlides = carouselTrack ? [...carouselTrack.children] : [];
const carouselPrev = document.querySelector('#carousel-prev');
const carouselNext = document.querySelector('#carousel-next');
const carouselDots = carousel ? [...carousel.querySelectorAll('.carousel-dot')] : [];

const translations = {
  en: {
    navProducts: 'Products',
    navInventory: 'Inventory',
    navWhy: 'Why us',
    navContact: 'Contact',
    quoteButton: 'Request a quote',
    heroTitle: 'Tech with a<br /><em>second life.</em>',
    heroSubtitle: 'From network equipment and servers to professional repairs and business-grade components, Revalto Tech brings hands-on experience with trusted brands across the industry.',
    findSolution: 'Find your solution',
    exploreHardware: 'Explore our hardware',
    visualLabel: 'HARDWARE / 001',
    visualReady: 'TESTED / READY',
    visualHistory: 'Hardware with history',
    productsTitle: 'Tech that fits<br /><em>your world.</em>',
    productsIntro: 'Whether you need dependable network hardware, a server refresh, or components for an entire infrastructure, we take the time to understand what will work for you, with hands-on experience across trusted brands in networking and storage.',
    cardBrandsLabel: 'Brands',
    cardOneTitle: 'Network Equipment',
    cardOneText: 'We help you source reliable switches, routers, and networking hardware, including brands like Cisco, Dell, and HP, that keeps your infrastructure stable, secure, and ready to scale.',
    cardOneTags: '<li>Switches</li><li>Routers</li><li>Network hardware</li>',
    cardOneLink: 'Talk network needs',
    cardTwoTitle: 'Components',
    cardTwoText: 'Need an SSD, memory, server drive, or accessory? We work with trusted brands like Samsung, Micron, Kingston, and SK hynix to help you find the right part, not just any part.',
    cardTwoTags: '<li>SSDs</li><li>Memory</li><li>Server drives</li><li>Accessories</li>',
    cardTwoLink: 'Talk components',
    brandsLabel: 'Brands we work with',
    cardThreeTitle: 'Repairs & enterprise',
    cardThreeText: 'When something stops working, we look for the sensible fix and help businesses keep moving. Our team has experience in repairing and refurbishing electronic components.',
    cardThreeTags: '<li>Repairs</li><li>Refurbishment</li><li>Business support</li>',
    cardThreeLink: 'Talk to our team',
    inventoryTitle: 'A quick peek<br /><em>at our stock.</em>',
    inventoryIntro: 'Every module and drive we sell is inspected, tested, and graded before it reaches you. This is not everything we sell, but just a look at what’s currently moving through our warehouse.',
    inventoryCaptionOne: 'Samsung 32GB DDR4 ECC memory, Cisco-certified',
    inventoryCaptionTwo: 'Kingston 32GB memory modules, factory sealed',
    inventoryCaptionFour: 'Server memory, tested and sorted for resale',
    inventoryCaptionFive: 'Samsung enterprise SSDs, inspected and graded',
    inventoryCaptionSix: 'Seagate Exos X18 16TB enterprise hard drive, sealed',
    inventoryCaptionSeven: 'Samsung SM883 enterprise SSDs, ready to ship',
    inventoryCaptionEight: 'SK hynix 64GB DDR4 ECC memory, Cisco-certified',
    inventoryCaptionNine: 'Samsung and HPE enterprise SSDs, tested and sorted',
    whyTitle: 'We believe good<br />tech deserves a <em>future.</em>',
    whyIntro: 'We started Revalto because too much useful technology is discarded too soon. We recover, test, repair, and repurpose hardware so more people can get reliable tech without the unnecessary cost or waste.',
    principleOneTitle: 'We listen first',
    principleOneText: 'You won’t get a one-size-fits-all answer from us. We ask what you’re trying to do, then recommend what makes sense.',
    principleTwoTitle: 'We keep it practical',
    principleTwoText: 'Our job is to make good technology easier to access, easier to maintain, and easier on your budget.',
    principleThreeTitle: 'We care what happens next',
    principleThreeText: 'Every repair and reuse decision is a chance to keep equipment useful and reduce the pressure on our planet.',
    impactTitle: 'The world has<br /><em>enough tech.</em>',
    impactIntro: 'The world produces more than 50 million tonnes of e-waste every year. Less than 20% is properly recycled. Revalto Tech is built to change that.',
    impactStatOne: 'tonnes of e-waste<br />produced every year',
    impactStatTwo: 'properly recycled<br />worldwide',
    contactTitle: 'Let’s give your<br />tech a <em>second life.</em>',
    contactIntro: 'Tell us what you need, what you have, or what you want to repair. We’ll help you find the most practical next step.',
    contactHours: 'Mon–Fri / 09:00–17:00',
    labelName: 'Your name <span>*</span>',
    labelEmail: 'Work email <span>*</span>',
    labelRequirement: 'How can we help? <span>*</span>',
    sendInquiry: 'Send inquiry',
    footerText: 'Refurbished hardware for a more sustainable cycle.',
    namePlaceholder: 'Jane Smith',
    emailPlaceholder: 'jane@company.com',
    requirementPlaceholder: 'e.g. network switches for a small office, or a server drive replacement',
    formSubmitted: 'Thanks, {name}. Your inquiry is ready for the Revalto team.',
    formError: 'Sorry, something went wrong. Please email us at nayel@revaltotech.nl.'
  },
  nl: {
    navProducts: 'Producten',
    navInventory: 'Voorraad',
    navWhy: 'Waarom ons',
    navContact: 'Contact',
    quoteButton: 'Vraag offerte aan',
    heroTitle: 'Technologie met een<br /><em>tweede leven.</em>',
    heroSubtitle: 'Van netwerkapparatuur en servers tot professionele reparaties en hoogwaardige componenten: Revalto Tech heeft praktijkervaring opgebouwd met vertrouwde merken in de branche.',
    findSolution: 'Vind uw oplossing',
    exploreHardware: 'Ontdek onze hardware',
    visualLabel: 'HARDWARE / 001',
    visualReady: 'GETEST / KLAAR',
    visualHistory: 'Hardware met geschiedenis',
    productsTitle: 'Techniek die past bij<br /><em>uw wereld.</em>',
    productsIntro: 'Of u nu betrouwbare netwerkhardware, een serverupgrade of componenten voor een volledige infrastructuur nodig heeft, we luisteren eerst naar wat het beste werkt voor u, met praktijkervaring bij vertrouwde merken in netwerken en opslag.',
    cardBrandsLabel: 'Merken',
    cardOneTitle: 'Netwerkapparatuur',
    cardOneText: 'We helpen u bij het vinden van betrouwbare switches, routers en netwerkhardware, waaronder merken zoals Cisco, Dell en HP, die uw infrastructuur stabiel, veilig en schaalbaar houden.',
    cardOneTags: '<li>Switches</li><li>Routers</li><li>Netwerkhardware</li>',
    cardOneLink: 'Praat over netwerkbehoeften',
    cardTwoTitle: 'Componenten',
    cardTwoText: 'Heeft u een SSD, geheugen, serverdrive of accessoire nodig? We werken met vertrouwde merken zoals Samsung, Micron, Kingston en SK hynix om u het juiste onderdeel te laten vinden, niet alleen het dichtstbijzijnde.',
    cardTwoTags: '<li>SSD’s</li><li>Geheugen</li><li>Serverschijven</li><li>Accessoires</li>',
    cardTwoLink: 'Praat over componenten',
    brandsLabel: 'Merken waarmee we werken',
    cardThreeTitle: 'Reparaties & enterprise',
    cardThreeText: 'Wanneer iets niet werkt, zoeken we naar de juiste oplossing zodat uw bedrijf soepel kan blijven draaien. Ons team heeft ervaring met het repareren en refurbishen van elektronische componenten.',
    cardThreeTags: '<li>Reparaties</li><li>Refurbishment</li><li>Zakelijke support</li>',
    cardThreeLink: 'Praat met ons team',
    inventoryTitle: 'Een snelle blik<br /><em>op onze voorraad.</em>',
    inventoryIntro: 'Elke module en elke drive die we verkopen wordt geïnspecteerd, getest en beoordeeld voordat deze bij u terechtkomt. Dit is niet alles wat we verkopen, maar slechts een kijkje in wat er momenteel door ons magazijn gaat.',
    inventoryCaptionOne: 'Samsung 32GB DDR4 ECC-geheugen, Cisco-gecertificeerd',
    inventoryCaptionTwo: 'Kingston 32GB geheugenmodules, fabrieksverzegeld',
    inventoryCaptionFour: 'Servergeheugen, getest en gesorteerd voor wederverkoop',
    inventoryCaptionFive: 'Samsung enterprise SSD’s, geïnspecteerd en beoordeeld',
    inventoryCaptionSix: 'Seagate Exos X18 16TB enterprise harde schijf, verzegeld',
    inventoryCaptionSeven: 'Samsung SM883 enterprise SSD’s, klaar voor verzending',
    inventoryCaptionEight: 'SK hynix 64GB DDR4 ECC-geheugen, Cisco-gecertificeerd',
    inventoryCaptionNine: 'Samsung en HPE enterprise SSD’s, getest en gesorteerd',
    whyTitle: 'We geloven dat goede<br />techniek een <em>toekomst</em> verdient.',
    whyIntro: 'We begonnen met Revalto omdat te veel nuttige technologie te vroeg wordt weggegooid. We herstellen, testen, repareren en hergebruiken hardware zodat meer mensen betrouwbare technologie kunnen gebruiken zonder onnodige kosten of afval.',
    principleOneTitle: 'We luisteren eerst',
    principleOneText: 'U krijgt geen one-size-fits-all antwoord van ons. We vragen wat u wilt bereiken en adviseren daarna wat logisch is.',
    principleTwoTitle: 'We houden het praktisch',
    principleTwoText: 'Ons werk is technologie beter toegankelijk, onderhoudbaarder en betaalbaarder te maken.',
    principleThreeTitle: 'We zorgen voor wat daarna komt',
    principleThreeText: 'Elke reparatie en elk hergebruik is een kans om apparatuur nuttig te houden en de druk op onze planeet te verminderen.',
    impactTitle: 'De wereld heeft<br /><em>genoeg techniek.</em>',
    impactIntro: 'De wereld produceert jaarlijks meer dan 50 miljoen ton e-waste. Minder dan 20% wordt correct gerecycled. Revalto Tech is gebouwd om dat te veranderen.',
    impactStatOne: 'ton e-waste<br />dat jaarlijks wordt geproduceerd',
    impactStatTwo: 'correct gerecycled<br />wereldwijd',
    contactTitle: 'Laat uw<br />techniek een <em>tweede leven</em> krijgen.',
    contactIntro: 'Vertel ons wat u nodig heeft, wat u heeft of wat u wilt laten repareren. We helpen u de meest praktische volgende stap te vinden.',
    contactHours: 'Ma–Vr / 09:00–17:00',
    labelName: 'Uw naam <span>*</span>',
    labelEmail: 'Werk e-mail <span>*</span>',
    labelRequirement: 'Hoe kunnen we helpen? <span>*</span>',
    sendInquiry: 'Verstuur bericht',
    footerText: 'Gerefurbisheerde hardware voor een duurzamere cyclus.',
    namePlaceholder: 'Jan Jansen',
    emailPlaceholder: 'jan@bedrijf.nl',
    requirementPlaceholder: 'bijv. netwerk switches voor een klein kantoor, of een serverdrive vervanging',
    formSubmitted: 'Bedankt, {name}. Uw aanvraag staat klaar voor het Revalto-team.',
    formError: 'Sorry, er ging iets mis. Mail ons via nayel@revaltotech.nl.'
  },
  de: {
    navProducts: 'Produkte',
    navInventory: 'Lagerbestand',
    navWhy: 'Warum wir',
    navContact: 'Kontakt',
    quoteButton: 'Angebot anfragen',
    heroTitle: 'Technik mit einem<br /><em>zweiten Leben.</em>',
    heroSubtitle: 'Von Netzwerkgeräten und Servern bis hin zu professionellen Reparaturen und hochwertigen Komponenten bringt Revalto Tech praktische Erfahrung mit vertrauenswürdigen Marken der Branche mit.',
    findSolution: 'Lösung finden',
    exploreHardware: 'Hardware entdecken',
    visualLabel: 'HARDWARE / 001',
    visualReady: 'GETESTET / BEREIT',
    visualHistory: 'Hardware mit Geschichte',
    productsTitle: 'Technik, die zu<br /><em>deiner Welt</em> passt.',
    productsIntro: 'Egal, ob Sie zuverlässige Netzwerkhardware, ein Server-Refresh oder Komponenten für eine gesamte Infrastruktur benötigen, wir hören erst zu, damit wir das Richtige für Sie empfehlen – mit praktischer Erfahrung bei vertrauenswürdigen Marken im Netzwerk- und Speicherbereich.',
    cardBrandsLabel: 'Marken',
    cardOneTitle: 'Netzwerkgeräte',
    cardOneText: 'Wir helfen Ihnen dabei, zuverlässige Switches, Router und Netzwerkhardware zu finden – darunter Marken wie Cisco, Dell und HP –, die Ihre Infrastruktur stabil, sicher und skalierbar machen.',
    cardOneTags: '<li>Switches</li><li>Router</li><li>Netzwerkhardware</li>',
    cardOneLink: 'Netzwerkbedarf besprechen',
    cardTwoTitle: 'Komponenten',
    cardTwoText: 'Benötigen Sie eine SSD, Speicher, Server-Drive oder Zubehör? Wir arbeiten mit vertrauenswürdigen Marken wie Samsung, Micron, Kingston und SK hynix, um Ihnen das passende Teil zu finden, nicht nur irgendeines.',
    cardTwoTags: '<li>SSDs</li><li>Arbeitsspeicher</li><li>Server-Laufwerke</li><li>Zubehör</li>',
    cardTwoLink: 'Komponenten besprechen',
    brandsLabel: 'Marken, mit denen wir arbeiten',
    cardThreeTitle: 'Reparaturen & Enterprise',
    cardThreeText: 'Wenn etwas nicht funktioniert, suchen wir nach der sinnvollsten Lösung und helfen Unternehmen, weiterzuwirken. Unser Team verfügt über Erfahrung in der Reparatur und Aufbereitung von elektronischen Komponenten.',
    cardThreeTags: '<li>Reparaturen</li><li>Aufbereitung</li><li>Business-Support</li>',
    cardThreeLink: 'Mit unserem Team sprechen',
    inventoryTitle: 'Ein kurzer Blick<br /><em>in unseren Bestand.</em>',
    inventoryIntro: 'Jedes Modul und jedes Laufwerk, das wir verkaufen, wird geprüft, getestet und bewertet, bevor es bei Ihnen ankommt. Das ist nicht alles, was wir verkaufen, sondern nur ein Einblick in das, was gerade durch unser Lager läuft.',
    inventoryCaptionOne: 'Samsung 32GB DDR4 ECC-Speicher, Cisco-zertifiziert',
    inventoryCaptionTwo: 'Kingston 32GB Speichermodule, werkseitig versiegelt',
    inventoryCaptionFour: 'Server-Speicher, getestet und sortiert für den Wiederverkauf',
    inventoryCaptionFive: 'Samsung Enterprise-SSDs, geprüft und bewertet',
    inventoryCaptionSix: 'Seagate Exos X18 16TB Enterprise-Festplatte, versiegelt',
    inventoryCaptionSeven: 'Samsung SM883 Enterprise-SSDs, versandbereit',
    inventoryCaptionEight: 'SK hynix 64GB DDR4 ECC-Speicher, Cisco-zertifiziert',
    inventoryCaptionNine: 'Samsung und HPE Enterprise-SSDs, getestet und sortiert',
    whyTitle: 'Wir glauben, gute<br />Technik verdient eine <em>Zukunft.</em>',
    whyIntro: 'Revalto begann, weil zu viel nützliche Technologie zu schnell entsorgt wird. Wir bergen, testen, reparieren und wiederverwenden Hardware, damit mehr Menschen zuverlässige Technik ohne unnötige Kosten oder Abfall nutzen können.',
    principleOneTitle: 'Wir hören zuerst zu',
    principleOneText: 'Von uns bekommen Sie keine Einheitslösung. Wir fragen, was Sie erreichen möchten, und empfehlen dann das sinnvollste Vorgehen.',
    principleTwoTitle: 'Wir bleiben praktisch',
    principleTwoText: 'Unsere Aufgabe ist es, gute Technik einfacher zugänglich, wartbarer und günstiger zu machen.',
    principleThreeTitle: 'Wir denken an das Ende',
    principleThreeText: 'Jede Reparatur und Wiederverwendung ist eine Chance, Geräte nutzbar zu halten und den Druck auf unseren Planeten zu reduzieren.',
    impactTitle: 'Die Welt hat<br /><em>genug Technik.</em>',
    impactIntro: 'Die Welt produziert jedes Jahr mehr als 50 Millionen Tonnen Elektroschrott. Weniger als 20 % werden richtig recycelt. Revalto Tech wurde entwickelt, um das zu ändern.',
    impactStatOne: 'Tonnen Elektroschrott<br />pro Jahr produziert',
    impactStatTwo: 'richtig recycelt<br />weltweit',
    contactTitle: 'Geben Sie Ihrer<br />Technik ein <em>zweites Leben.</em>',
    contactIntro: 'Sagen Sie uns, was Sie brauchen, was Sie haben oder was Sie reparieren möchten. Wir helfen Ihnen, den sinnvollsten nächsten Schritt zu finden.',
    contactHours: 'Mo–Fr / 09:00–17:00',
    labelName: 'Ihr Name <span>*</span>',
    labelEmail: 'Arbeits-E-Mail <span>*</span>',
    labelRequirement: 'Wie können wir helfen? <span>*</span>',
    sendInquiry: 'Anfrage senden',
    footerText: 'Aufbereitete Hardware für einen nachhaltigen Kreislauf.',
    namePlaceholder: 'Max Mustermann',
    emailPlaceholder: 'max@unternehmen.de',
    requirementPlaceholder: 'z. B. Netzwerk-Switches für ein kleines Büro oder ein Server-Drive Ersatz',
    formSubmitted: 'Danke, {name}. Ihre Anfrage ist für das Revalto-Team bereit.',
    formError: 'Entschuldigung, etwas ist schiefgelaufen. Bitte schreiben Sie an nayel@revaltotech.nl.'
  },
  fr: {
    navProducts: 'Produits',
    navInventory: 'Inventaire',
    navWhy: 'Pourquoi nous',
    navContact: 'Contact',
    quoteButton: 'Demander un devis',
    heroTitle: 'Une technologie avec<br /><em>une seconde vie.</em>',
    heroSubtitle: 'Des équipements réseau et des serveurs aux réparations professionnelles en passant par les composants de qualité professionnelle, Revalto Tech apporte une expérience pratique acquise avec des marques de confiance du secteur.',
    findSolution: 'Trouvez votre solution',
    exploreHardware: 'Explorez notre matériel',
    visualLabel: 'MATÉRIEL / 001',
    visualReady: 'TESTÉ / PRÊT',
    visualHistory: 'Matériel avec histoire',
    productsTitle: 'La technologie qui correspond<br /><em>à votre monde.</em>',
    productsIntro: 'Que vous ayez besoin d’équipements réseau fiables, d’un renouvellement de serveurs ou de composants pour une infrastructure complète, nous prenons le temps de comprendre ce qui fonctionnera le mieux pour vous, avec une expérience pratique auprès de marques de confiance en réseau et en stockage.',
    cardBrandsLabel: 'Marques',
    cardOneTitle: 'Équipements réseau',
    cardOneText: 'Nous vous aidons à trouver des switchs, routeurs et matériels réseau fiables, dont des marques comme Cisco, Dell et HP, qui maintiennent votre infrastructure stable, sécurisée et prête à évoluer.',
    cardOneTags: '<li>Switchs</li><li>Routeurs</li><li>Matériel réseau</li>',
    cardOneLink: 'Parlons de vos besoins réseau',
    cardTwoTitle: 'Composants',
    cardTwoText: 'Vous avez besoin d’un SSD, de mémoire, d’un disque serveur ou d’un accessoire ? Nous travaillons avec des marques de confiance comme Samsung, Micron, Kingston et SK hynix pour vous aider à trouver la bonne pièce, pas juste n’importe laquelle.',
    cardTwoTags: '<li>SSD</li><li>Mémoire</li><li>Disques serveur</li><li>Accessoires</li>',
    cardTwoLink: 'Parlons composants',
    brandsLabel: 'Marques avec lesquelles nous travaillons',
    cardThreeTitle: 'Réparations & entreprise',
    cardThreeText: 'Quand quelque chose ne fonctionne plus, nous cherchons la solution la plus sensée pour aider les entreprises à avancer. Notre équipe a de l’expérience dans la réparation et le reconditionnement de composants électroniques.',
    cardThreeTags: '<li>Réparations</li><li>Reconditionnement</li><li>Support entreprise</li>',
    cardThreeLink: 'Parlez à notre équipe',
    inventoryTitle: 'Un petit aperçu<br /><em>de notre stock.</em>',
    inventoryIntro: 'Chaque module et disque que nous vendons est inspecté, testé et évalué avant de vous parvenir. Ceci ne représente pas tout ce que nous vendons, mais seulement un aperçu de ce qui transite actuellement par notre entrepôt.',
    inventoryCaptionOne: 'Mémoire Samsung 32 Go DDR4 ECC, certifiée Cisco',
    inventoryCaptionTwo: 'Modules de mémoire Kingston 32 Go, scellés d’usine',
    inventoryCaptionFour: 'Mémoire serveur, testée et triée pour la revente',
    inventoryCaptionFive: 'SSD professionnels Samsung, inspectés et évalués',
    inventoryCaptionSix: 'Disque dur professionnel Seagate Exos X18 16 To, scellé',
    inventoryCaptionSeven: 'SSD professionnels Samsung SM883, prêts à expédier',
    inventoryCaptionEight: 'Mémoire SK hynix 64 Go DDR4 ECC, certifiée Cisco',
    inventoryCaptionNine: 'SSD professionnels Samsung et HPE, testés et triés',
    whyTitle: 'Nous croyons que la bonne<br />technologie mérite un <em>avenir.</em>',
    whyIntro: 'Nous avons fondé Revalto parce que trop de technologies utiles sont jetées trop tôt. Nous récupérons, testons, réparons et réutilisons le matériel pour que davantage de personnes aient accès à une technologie fiable sans coûts inutiles ni gaspillage.',
    principleOneTitle: 'Nous écoutons d’abord',
    principleOneText: 'Vous n’aurez pas une réponse standardisée de notre part. Nous demandons ce que vous voulez faire et vous recommandons ensuite ce qui a du sens.',
    principleTwoTitle: 'Nous gardons un sens pratique',
    principleTwoText: 'Notre travail consiste à rendre la bonne technologie plus accessible, plus facile à entretenir et plus respectueuse de votre budget.',
    principleThreeTitle: 'Nous pensons à ce qui suit',
    principleThreeText: 'Chaque réparation et chaque réutilisation est une occasion de garder les équipements utiles et de réduire la pression sur notre planète.',
    impactTitle: 'Le monde a<br /><em>assez de technologie.</em>',
    impactIntro: 'Le monde produit plus de 50 millions de tonnes de déchets électroniques chaque année. Moins de 20 % sont correctement recyclés. Revalto Tech a été conçu pour changer cela.',
    impactStatOne: 'de tonnes de déchets électroniques<br />produites chaque année',
    impactStatTwo: 'correctement recyclées<br />dans le monde',
    contactTitle: 'Offrez à votre<br />technologie une <em>seconde vie.</em>',
    contactIntro: 'Dites-nous ce dont vous avez besoin, ce que vous possédez ou ce que vous souhaitez faire réparer. Nous vous aiderons à trouver la prochaine étape la plus pratique.',
    contactHours: 'Lun–Ven / 09:00–17:00',
    labelName: 'Votre nom <span>*</span>',
    labelEmail: 'E-mail pro <span>*</span>',
    labelRequirement: 'Comment pouvons-nous vous aider ? <span>*</span>',
    sendInquiry: 'Envoyer la demande',
    footerText: 'Matériel reconditionné pour un cycle plus durable.',
    namePlaceholder: 'Marie Martin',
    emailPlaceholder: 'marie@entreprise.fr',
    requirementPlaceholder: 'par ex. switchs réseau pour un petit bureau ou un remplacement de disque serveur',
    formSubmitted: 'Merci, {name}. Votre demande est prête pour l’équipe Revalto.',
    formError: 'Désolé, une erreur s’est produite. Écrivez-nous à nayel@revaltotech.nl.'
  },
  ar: {
    navProducts: 'المنتجات',
    navInventory: 'المخزون',
    navWhy: 'لماذا نحن',
    navContact: 'تواصل',
    quoteButton: 'اطلب عرض سعر',
    heroTitle: 'تكنولوجيا بحياة<br /><em>ثانية.</em>',
    heroSubtitle: 'من معدات الشبكات والخوادم إلى الإصلاحات المهنية والمكونات عالية الجودة، تتمتع ريفالتو تيك بخبرة عملية مع علامات تجارية موثوقة في هذا المجال.',
    findSolution: 'ابحث عن الحل المناسب',
    exploreHardware: 'استكشف معداتنا',
    visualLabel: 'معدات / 001',
    visualReady: 'مُفحوص / جاهز',
    visualHistory: 'معدات ذات تاريخ',
    productsTitle: 'تكنولوجيا تناسب<br /><em>عالمك.</em>',
    productsIntro: 'سواء كنت تحتاج إلى معدات شبكة موثوقة أو تحديث خوادم أو مكونات كاملة للبنية التحتية، فإننا نأخذ الوقت لفهم ما الذي سيعمل بشكل أفضل لك، بخبرة عملية مع علامات تجارية موثوقة في مجالي الشبكات والتخزين.',
    cardBrandsLabel: 'العلامات التجارية',
    cardOneTitle: 'معدات الشبكات',
    cardOneText: 'نساعدك في الحصول على محولات وموجهات ومعدات شبكة موثوقة، بما في ذلك علامات تجارية مثل Cisco وDell وHP، تحافظ على استقرار بنيتك التحتية وأمانها وجاهزيتها للتوسع.',
    cardOneTags: '<li>محولات</li><li>موجهات</li><li>معدات الشبكة</li>',
    cardOneLink: 'تحدث عن احتياجات الشبكة',
    cardTwoTitle: 'المكونات',
    cardTwoText: 'هل تحتاج إلى SSD أو ذاكرة أو قرص خادم أو ملحق؟ نعمل مع علامات تجارية موثوقة مثل Samsung وMicron وKingston وSK hynix لمساعدتك في العثور على القطعة المناسبة، وليس أي قطعة.',
    cardTwoTags: '<li>SSD</li><li>الذاكرة</li><li>أقراص الخوادم</li><li>الملحقات</li>',
    cardTwoLink: 'تحدث عن المكونات',
    brandsLabel: 'العلامات التجارية التي نتعامل معها',
    cardThreeTitle: 'الإصلاحات ومشاريع المؤسسات',
    cardThreeText: 'عندما لا يعمل شيء، نبحث عن الحل الأكثر منطقية لمساعدة الشركات على الاستمرار في الحركة. يتمتع فريقنا بخبرة في إصلاح وتجديد المكونات الإلكترونية.',
    cardThreeTags: '<li>الإصلاحات</li><li>التجديد</li><li>دعم الشركات</li>',
    cardThreeLink: 'تحدث إلى فريقنا',
    inventoryTitle: 'نظرة سريعة<br /><em>على مخزوننا.</em>',
    inventoryIntro: 'يتم فحص واختبار وتصنيف كل وحدة ذاكرة وقرص نبيعه قبل أن يصل إليك. هذا لا يمثل كل ما نبيعه، بل مجرد نظرة على ما يمر حاليًا عبر مستودعنا.',
    inventoryCaptionOne: 'ذاكرة Samsung سعة 32 جيجابايت DDR4 ECC، معتمدة من Cisco',
    inventoryCaptionTwo: 'وحدات ذاكرة Kingston سعة 32 جيجابايت، مختومة من المصنع',
    inventoryCaptionFour: 'ذاكرة خادم، مُختبرة ومُصنّفة لإعادة البيع',
    inventoryCaptionFive: 'أقراص SSD من Samsung للمؤسسات، مفحوصة ومصنّفة',
    inventoryCaptionSix: 'قرص صلب Seagate Exos X18 بسعة 16 تيرابايت للمؤسسات، مختوم',
    inventoryCaptionSeven: 'أقراص SSD من Samsung طراز SM883 للمؤسسات، جاهزة للشحن',
    inventoryCaptionEight: 'ذاكرة SK hynix سعة 64 جيجابايت DDR4 ECC، معتمدة من Cisco',
    inventoryCaptionNine: 'أقراص SSD من Samsung وHPE للمؤسسات، مختبرة ومصنّفة',
    whyTitle: 'نؤمن أن التكنولوجيا الجيدة<br />تستحق <em>مستقبلًا.</em>',
    whyIntro: 'بدأنا ريفالتو لأن الكثير من التكنولوجيا المفيدة يتم التخلص منها قبل أوانها. نحن نستعيد المعدات ونختبرها ونصلحها ونعيد استخدامها حتى يتمكن المزيد من الناس من الحصول على تكنولوجيا موثوقة دون تكلفة أو هدر غير ضروريين.',
    principleOneTitle: 'نستمع أولاً',
    principleOneText: 'لن تحصل على إجابة مقاس واحد تناسب الجميع من جانبنا. نسأل ما الذي تحاول تحقيقه، ثم نوصي بما له معنى.',
    principleTwoTitle: 'نحافظ على التطبيق العملي',
    principleTwoText: 'مهمتنا هي جعل التكنولوجيا الجيدة أسهل في الوصول إليها، وأسهل في الصيانة، وأرخص على ميزانيتك.',
    principleThreeTitle: 'نحن نهتم بما سيحدث لاحقًا',
    principleThreeText: 'كل إصلاح وإعادة استخدام هو فرصة للحفاظ على المعدات فعالة وتقليل الضغط على كوكبنا.',
    impactTitle: 'العالم لديه<br /><em>تكنولوجيا كافية.</em>',
    impactIntro: 'يُنتج العالم أكثر من 50 مليون طن من النفايات الإلكترونية سنويًا. أقل من 20% يتم إعادة تدويرها بشكل صحيح. تم تصميم ريفالتو تيك لتغيير ذلك.',
    impactStatOne: 'طن من النفايات الإلكترونية<br />يتم إنتاجها كل عام',
    impactStatTwo: 'يتم إعادة تدويرها بشكل صحيح<br />على مستوى العالم',
    contactTitle: 'دع تكنولوجياك تحصل على<br /><em>حياة ثانية.</em>',
    contactIntro: 'أخبرنا بما تحتاجه، وما لديك، أو ما تريد إصلاحه. سنساعدك في العثور على الخطوة العملية التالية.',
    contactHours: 'من الإثنين إلى الجمعة / 09:00–17:00',
    labelName: 'اسمك <span>*</span>',
    labelEmail: 'البريد الإلكتروني للعمل <span>*</span>',
    labelRequirement: 'كيف يمكننا مساعدتك؟ <span>*</span>',
    sendInquiry: 'إرسال الاستفسار',
    footerText: 'أجهزة مُعاد تأهيلها لدورة أكثر استدامة.',
    namePlaceholder: 'سارة أحمد',
    emailPlaceholder: 'sara@company.com',
    requirementPlaceholder: 'مثل: محولات للشبكة لمكتب صغير أو استبدال قرص خادم',
    formSubmitted: 'شكرًا لك، {name}. طلبك جاهز لفريق ريفالتو.',
    formError: 'عذرًا، حدث خطأ ما. يرجى مراسلتنا على nayel@revaltotech.nl.'
  },
  zh: {
    navProducts: '产品',
    navInventory: '库存',
    navWhy: '为什么选择我们',
    navContact: '联系我们',
    quoteButton: '获取报价',
    heroTitle: '让科技,<br /><em>焕发新生。</em>',
    heroSubtitle: '从网络设备、服务器到专业维修与商用级组件,Revalto Tech 凭借丰富的实践经验,与行业内值得信赖的品牌合作。',
    findSolution: '寻找解决方案',
    exploreHardware: '探索我们的硬件',
    visualLabel: '硬件 / 001',
    visualReady: '已测试 / 可交付',
    visualHistory: '有故事的硬件',
    productsTitle: '适合你的<br /><em>科技世界。</em>',
    productsIntro: '无论您需要可靠的网络硬件、服务器更新,还是整套基础设施所需的组件,我们都会花时间了解最适合您的方案,并在网络与存储领域积累了值得信赖品牌的丰富经验。',
    cardBrandsLabel: '品牌',
    cardOneTitle: '网络设备',
    cardOneText: '我们帮助您采购可靠的交换机、路由器及网络硬件,包括思科(Cisco)、戴尔(Dell)和惠普(HP)等品牌,让您的基础设施保持稳定、安全,并具备扩展能力。',
    cardOneTags: '<li>交换机</li><li>路由器</li><li>网络硬件</li>',
    cardOneLink: '咨询网络需求',
    cardTwoTitle: '组件',
    cardTwoText: '需要固态硬盘、内存、服务器硬盘或配件?我们与三星(Samsung)、美光(Micron)、金士顿(Kingston)和 SK 海力士(SK hynix)等值得信赖的品牌合作,帮您找到真正合适的配件。',
    cardTwoTags: '<li>固态硬盘</li><li>内存</li><li>服务器硬盘</li><li>配件</li>',
    cardTwoLink: '咨询组件',
    brandsLabel: '合作品牌',
    cardThreeTitle: '维修与企业服务',
    cardThreeText: '当设备出现故障时,我们会寻找最合理的解决方案,帮助企业保持正常运转。我们的团队在电子元件维修与翻新方面拥有丰富经验。',
    cardThreeTags: '<li>维修</li><li>翻新</li><li>企业支持</li>',
    cardThreeLink: '联系我们的团队',
    inventoryTitle: '快速浏览<br /><em>我们的库存。</em>',
    inventoryIntro: '我们出售的每一条内存和每一块硬盘,在发货前都经过检测、测试与分级。这并不是我们出售的全部产品,只是目前在我们仓库中流转的一部分。',
    inventoryCaptionOne: '三星 32GB DDR4 ECC 内存,思科认证',
    inventoryCaptionTwo: '金士顿 32GB 内存条,原厂密封',
    inventoryCaptionFour: '服务器内存,经检测分级,适合转售',
    inventoryCaptionFive: '三星企业级固态硬盘,经检测分级',
    inventoryCaptionSix: '希捷 Exos X18 16TB 企业级机械硬盘,原厂密封',
    inventoryCaptionSeven: '三星 SM883 企业级固态硬盘,可直接发货',
    inventoryCaptionEight: 'SK hynix 64GB DDR4 ECC 内存,思科认证',
    inventoryCaptionNine: '三星与 HPE 企业级固态硬盘,已检测分类',
    whyTitle: '我们相信优质<br />科技值得拥有<em>未来。</em>',
    whyIntro: '我们创立 Revalto,是因为太多仍然有用的科技被过早淘汰。我们回收、测试、维修并再利用硬件,让更多人能以更低的成本获得可靠的科技产品,减少不必要的浪费。',
    principleOneTitle: '我们先倾听',
    principleOneText: '我们不会给您千篇一律的答案。我们会先了解您的实际需求,再给出合理的建议。',
    principleTwoTitle: '我们注重实用',
    principleTwoText: '我们的工作是让优质科技更容易获得、更易维护,也更符合您的预算。',
    principleThreeTitle: '我们关注后续影响',
    principleThreeText: '每一次维修与再利用,都是让设备继续发挥价值、减轻地球负担的机会。',
    impactTitle: '这个世界的<br /><em>科技已经足够多。</em>',
    impactIntro: '全球每年产生超过 5000 万吨电子垃圾,其中只有不到 20% 得到妥善回收。Revalto Tech 的使命,就是改变这一现状。',
    impactStatOne: '吨电子垃圾<br />每年产生',
    impactStatTwo: '得到妥善回收<br />全球范围内',
    contactTitle: '让您的<br />科技焕发<em>第二次生命。</em>',
    contactIntro: '告诉我们您的需求、现有设备,或想要维修的物品,我们将帮助您找到最实际可行的下一步。',
    contactHours: '周一至周五 / 09:00–17:00',
    labelName: '您的姓名 <span>*</span>',
    labelEmail: '工作邮箱 <span>*</span>',
    labelRequirement: '我们可以如何帮助您? <span>*</span>',
    sendInquiry: '发送咨询',
    footerText: '翻新硬件,成就更可持续的循环。',
    namePlaceholder: '张伟',
    emailPlaceholder: 'zhang@company.com',
    requirementPlaceholder: '例如:小型办公室所需的网络交换机,或服务器硬盘更换',
    formSubmitted: '谢谢您,{name}。您的咨询已提交至 Revalto 团队。',
    formError: '抱歉,出现了问题。请发送邮件至 nayel@revaltotech.nl。'
  }
};

const setLanguage = (lang) => {
  const selectedLanguage = translations[lang] ? lang : 'en';
  const activeTranslations = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.body.setAttribute('dir', selectedLanguage === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = activeTranslations[key];
    if (!value) return;
    element.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = activeTranslations[key];
    if (!value) return;
    element.placeholder = value;
  });

  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const requirementInput = document.querySelector('#requirement');

  if (nameInput && activeTranslations.namePlaceholder) {
    nameInput.placeholder = activeTranslations.namePlaceholder;
  }
  if (emailInput && activeTranslations.emailPlaceholder) {
    emailInput.placeholder = activeTranslations.emailPlaceholder;
  }
  if (requirementInput && activeTranslations.requirementPlaceholder) {
    requirementInput.placeholder = activeTranslations.requirementPlaceholder;
  }

  localStorage.setItem('revalto-language', selectedLanguage);
  currentLanguage = selectedLanguage;

  if (languageToggle) {
    const activeOption = languageOptions.find((option) => option.dataset.lang === selectedLanguage);
    if (activeOption) {
      languageToggle.querySelector('.flag-icon').src = activeOption.dataset.flag;
      languageToggle.querySelector('.language-code').textContent = selectedLanguage.toUpperCase();
    }
    languageOptions.forEach((option) => {
      option.setAttribute('aria-selected', String(option.dataset.lang === selectedLanguage));
    });
  }
};

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}

if (mainNav) {
  mainNav.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;

    siteHeader.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  });
}

if (quoteForm) {
  quoteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(quoteForm);
    const name = formData.get('name') || 'there';
    const submitButton = quoteForm.querySelector('button[type="submit"]');
    formData.append('_subject', `New inquiry from ${name} via revaltotech.nl`);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    submitButton.disabled = true;
    formNote.textContent = '';

    try {
      const response = await fetch('https://formsubmit.co/ajax/nayel@revaltotech.nl', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false || result.success === 'false') throw new Error(result.message || 'Send failed');
      const text = translations[currentLanguage]?.formSubmitted?.replace('{name}', name);
      formNote.textContent = text || `Thanks, ${name}. Your inquiry is ready for the Revalto team.`;
      quoteForm.reset();
    } catch (error) {
      formNote.textContent = translations[currentLanguage]?.formError || 'Sorry, something went wrong. Please email us at nayel@revaltotech.nl.';
    } finally {
      submitButton.disabled = false;
    }
  });
}

const closeLanguageList = () => {
  if (!languageList || languageList.hidden) return;
  languageList.hidden = true;
  languageToggle.setAttribute('aria-expanded', 'false');
};

const openLanguageList = () => {
  if (!languageList || !languageList.hidden) return;
  languageList.hidden = false;
  languageToggle.setAttribute('aria-expanded', 'true');
  const activeOption = languageOptions.find((option) => option.getAttribute('aria-selected') === 'true');
  (activeOption || languageOptions[0])?.focus();
};

if (languageToggle && languageList) {
  languageToggle.addEventListener('click', () => {
    if (languageList.hidden) {
      openLanguageList();
    } else {
      closeLanguageList();
    }
  });

  languageOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
      setLanguage(option.dataset.lang);
      closeLanguageList();
      languageToggle.focus();
    });

    option.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setLanguage(option.dataset.lang);
        closeLanguageList();
        languageToggle.focus();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        languageOptions[(index + 1) % languageOptions.length]?.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        languageOptions[(index - 1 + languageOptions.length) % languageOptions.length]?.focus();
      } else if (event.key === 'Escape') {
        closeLanguageList();
        languageToggle.focus();
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!languageSwitcher.contains(event.target)) {
      closeLanguageList();
    }
  });
}

if (carousel && carouselTrack && carouselSlides.length) {
  let currentSlide = 0;
  let autoplayId = null;
  const AUTOPLAY_MS = 5000;

  const goToSlide = (index) => {
    currentSlide = (index + carouselSlides.length) % carouselSlides.length;
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    carouselDots.forEach((dot, dotIndex) => {
      dot.setAttribute('aria-selected', String(dotIndex === currentSlide));
    });
  };

  const stopAutoplay = () => {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayId = setInterval(() => goToSlide(currentSlide + 1), AUTOPLAY_MS);
  };

  carouselPrev?.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
    startAutoplay();
  });

  carouselNext?.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
    startAutoplay();
  });

  carouselDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      startAutoplay();
    });
  });

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      goToSlide(currentSlide - 1);
      startAutoplay();
    } else if (event.key === 'ArrowRight') {
      goToSlide(currentSlide + 1);
      startAutoplay();
    }
  });

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', startAutoplay);

  let dragStartX = 0;
  let dragDeltaX = 0;
  let isDragging = false;

  carouselTrack.addEventListener('pointerdown', (event) => {
    isDragging = true;
    dragStartX = event.clientX;
    dragDeltaX = 0;
    stopAutoplay();
    carouselTrack.style.transition = 'none';
    carouselTrack.setPointerCapture(event.pointerId);
  });

  carouselTrack.addEventListener('pointermove', (event) => {
    if (!isDragging) return;
    dragDeltaX = event.clientX - dragStartX;
    const percent = (dragDeltaX / carouselTrack.clientWidth) * 100;
    carouselTrack.style.transform = `translateX(${-currentSlide * 100 + percent}%)`;
  });

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    carouselTrack.style.transition = '';
    const threshold = carouselTrack.clientWidth * 0.15;
    if (Math.abs(dragDeltaX) > threshold) {
      goToSlide(currentSlide + (dragDeltaX < 0 ? 1 : -1));
    } else {
      goToSlide(currentSlide);
    }
    dragDeltaX = 0;
    startAutoplay();
  };

  carouselTrack.addEventListener('pointerup', endDrag);
  carouselTrack.addEventListener('pointercancel', endDrag);

  goToSlide(0);
  startAutoplay();
}

const savedLanguage = localStorage.getItem('revalto-language') || 'en';
setLanguage(savedLanguage);
