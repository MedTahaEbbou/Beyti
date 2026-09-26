/**
 * BEYTI SERVICE - بيتي للخدمات المنزلية في نواكشوط
 * Futuristic 3D Mobile-First Web Application Engine
 */

// ==========================================
// 1. DATA & TRANSLATIONS (ARABIC & FRENCH)
// ==========================================
const I18N_DICTIONARY = {
  ar: {
    tagline: "عاصمة الخدمات المنزلية - نواكشوط",
    phoneMode: "شاشة الهاتف",
    fullMode: "كامل الشاشة",
    city: "نواكشوط، موريتانيا",
    moughataaLabel: "المقاطعة:",
    allNouakchott: "كافة مقاطعات نواكشوط",
    tevragh: "تفرغ زينة (Tevragh-Zeina)",
    ksar: "لكصر (Ksar)",
    arafat: "عرفات (Arafat)",
    teyarett: "تيارت (Teyarett)",
    darNaim: "دار النعيم (Dar-Naim)",
    toujounine: "توجنين (Toujounine)",
    riad: "الرياض (Riad)",
    sebkha: "السبخة (Sebkha)",
    elMina: "الميناء (El Mina)",
    searchPlaceholder: "ابحث عن سباك، كهربائي، تنظيف، ميرة...",
    heroBadge: "المنصة الأولى المعتمدة في موريتانيا",
    heroTitle: "بيتك بأمان مع أفضل حرفيي نواكشوط",
    heroDesc: "احجز أفضل الفنيين المعتمدين والموثقين، قارن الأسعار، وتتبع طلبك لحظة بلحظة بدقة ثلاثية الأبعاد.",
    heroAction: "طلب خدمة فورية",
    meeraFast: "طلب ميرة الآن",
    verifiedBadge: "ضمان الجودة 100%",
    fastResponse: "استجابة خلال 15 دقيقة",
    feature1Title: "تغطية شاملة",
    feature1Desc: "كافة مقاطعات نواكشوط",
    feature2Title: "مقارنة العروض",
    feature2Desc: "أسعار شفافة ومضمونة",
    feature3Title: "تتبع مباشر",
    feature3Desc: "لحظة بلحظة على الخريطة",
    feature4Title: "تقييم موثق",
    feature4Desc: "حرفيون معتمدون وذوو خبرة",
    orderEnRoute: "الفني في الطريق إليك",
    trackNow: "تتبع مباشر",
    etaText: "الوصول المتوقع:",
    servicesHeading: "خدماتنا الرئيسية",
    servicesSub: "اختر الخدمة المطلوبة لحجز مزود مؤهل فوري",
    servicesCount: "6 خدمات",
    catCleaning: "نظافة منزلية",
    servCleaning: "التنظيف (Nettoyage)",
    descCleaning: "تنظيف المنازل، الشقق، المكاتب، التعقيم، وغسيل المفروشات والسجاد بأحدث الأجهزة.",
    catPlumbing: "تمديدات ومياه",
    servPlumbing: "السباكة (Plomberie)",
    descPlumbing: "إصلاح التسريبات، تركيب تمديدات المياه، صيانة الخزانات وسخانات المياه بدقة عالية.",
    catElectric: "أعطال وتمديدات",
    servElectric: "الكهرباء (Électricité)",
    descElectric: "فحص الأعطال الكهربائية، تركيب لوحات التحكم، الإضاءة الحديثة، والأنظمة الشمسية والمولدات.",
    catMaint: "إصلاحات عامة",
    servMaint: "الصيانة (Maintenance)",
    descMaint: "صيانة وإصلاح المكيفات، الأجهزة الكهرومنزلية، أعمال النجارة، والترميمات السريعة.",
    catTransport: "نقل وترحيل",
    servTransport: "النقل (Transport)",
    descTransport: "نقل الأثاث، المعدات الثقيلة، ترحيل المنازل وتوصيل البضائع بين مقاطعات نواكشوط بأمان.",
    catMeera: "توصيل البقالة والمؤونة",
    servMeera: "طلب ميرة (Courses & Provisions)",
    descMeera: "اطلب عامل توصيل متخصص يشتري لك كافة حاجيات البقالة، الخضار، اللحوم والمؤونة ويسلمها حتى باب بيتك.",
    meeraBadge: "خدمة حصرية",
    meeraPriceRule: "السعر يحدد بعد تمام المهمة مع فاتورة الشراء الموثقة",
    orderMeeraBtn: "اطلب ميرة الآن",
    from: "ابتداءً من",
    bookService: "احجز الآن",
    topProvidersHeading: "أفضل مزودي الخدمة المتاحين الآن",
    topProvidersSub: "حرفيون موثوقون، مؤهلون ومقيمون من قبل العملاء",
    viewAll: "عرض الكل",
    emergencyTitle: "طوارئ منزلية عاجلة؟",
    emergencyDesc: "تسرب مياه حاد، التماس كهربائي أو قفل معطل؟ إرسال فني طوارئ خلال 15 دقيقة.",
    callEmergency: "اتصال فوري",
    providersPageTitle: "مزودو الخدمات المعتمدون",
    providersPageSub: "قارن عروض الأسعار، التقييمات، وسرعة الاستجابة في مقاطعتك",
    filterAll: "الكل",
    servCleaningShort: "تنظيف",
    servPlumbingShort: "سباكة",
    servElectricShort: "كهرباء",
    servMaintShort: "صيانة",
    servTransportShort: "نقل",
    servMeeraShort: "طلب ميرة",
    sortBy: "ترتيب حسب:",
    sortRating: "الأعلى تقييماً",
    sortPriceAsc: "الأقل سعراً",
    sortSpeed: "الأسرع وصولاً",
    sortJobs: "الأكثر إنجازاً",
    liveTrackingTag: "تتبع مباشر لحظة بلحظة (GPS)",
    trackingTitle: "حالة طلبك الحالي",
    trackingSub: "متابعة تحركات الفني والوقت المتبقي حتى الوصول",
    myHome: "منزلي (تفرغ زينة)",
    minutesUnit: "دقيقة",
    kmUnit: "كم",
    step1Title: "تم استلام وتأكيد الطلب",
    step2Title: "تم تكليف الفني وقبول المهمة",
    step3Title: "الفني في الطريق إلى موقعك",
    step4Title: "بدء تنفيذ العمل والمعاينة",
    step5Title: "اكتمال الخدمة واعتماد الفاتورة",
    stepWait: "في انتظار الوصول",
    stepReviewWait: "التقييم وضمان الجودة",
    simulateStep: "محاكاة تقدم الحالة (عرض حي)",
    rateProviderBtn: "تقييم الخدمة",
    myOrdersTitle: "طلباتي والعمليات السابقة",
    myOrdersSub: "سجل كافة الخدمات ومشتريات طلب ميرة المكتملة",
    allOrders: "الكل (4)",
    activeOrdersTab: "النشطة (1)",
    doneOrdersTab: "المكتملة (3)",
    statusCompleted: "مكتملة ومسلمة",
    totalCost: "إجمالي الفاتورة:",
    invoice: "الفاتورة",
    reorder: "تكرار",
    tierVip: "عميل بيتي الذهبي (VIP)",
    walletBalance: "رصيد المحفظة",
    points: "نقاط بيتي",
    completedServices: "الخدمات المنجزة",
    serviceCount: "خدمة",
    accountSettings: "إعدادات الحساب والمقاطعة",
    savedAddresses: "عناويني المحفوظة",
    appLanguage: "لغة التطبيق (Langue)",
    guaranteePolicy: "ضمان بيتي وسياسة الجودة",
    guaranteeSub: "حماية العميل وضمان العمل 30 يوماً",
    supportCenter: "مركز مساعدة بيتي (الدعم الفوري)",
    supportSub: "متاح 24/7 عبر الهاتف والواتساب",
    joinProviderTitle: "هل أنت حرفي أو فني محترف في نواكشوط؟",
    joinProviderDesc: "انضم لشبكة بيتي المعتمدة وضاعف دخلك الشهري واستقبل الطلبات يومياً.",
    registerAsProvider: "سجل الآن كمزود خدمة",
    navHome: "الرئيسية",
    navProviders: "المزودون",
    navRequest: "طلب فوري",
    navTracking: "التتبع",
    navOrders: "طلباتي",
    chooseServiceType: "نوع الخدمة المطلوبة:",
    modalMoughataa: "المقاطعة في نواكشوط:",
    modalNeighborhood: "الحي أو المعلم القريب:",
    landmarkPlaceholder: "مثال: قرب كرفور براد، ملتقى صباح...",
    timingPref: "موعد الزيارة المفضل:",
    urgentNow: "فوري (خلال 30 دقيقة)",
    urgentSub: "للطوارئ والأعطال السريعة",
    scheduleDate: "موعد محدد لاحقاً",
    scheduleSub: "اليوم أو خلال الأيام القادمة",
    jobDetails: "تفاصيل المشكلة أو طلبك:",
    jobDescPlaceholder: "اشرح لنا بدقة ما تحتاجه لتوجيه الفني المناسب بالأدوات الملائمة...",
    baseEstimate: "التقدير التقريبي للأجرة:",
    quoteGuarantee: "السعر النهائي يؤكده الفني بشفافية قبل بدء العمل مع ضمان الجودة",
    cancel: "إلغاء",
    confirmAndDispatch: "تأكيد وحجز الفني الآن",
    meeraModalTitle: "طلب ميرة (المؤونة والبقالة)",
    meeraModalSub: "مندوب توصيل خاص يتسوق لك ويسلمها حتى باب بيتك",
    meeraHowTitle: "كيف تعمل خدمة طلب ميرة؟",
    meeraHowDesc: "اكتب قائمة الحاجيات المطلوبة أو سجلها صوتياً. ينطلق المندوب لأفضل المتاجر لشراء المواد بجودة عالية، ويسلمها مع الفاتورة الأصلية. السعر يحدد بعد تمام المهمة بحسب فاتورة الشراء + رسوم التوصيل الرمزية.",
    storePreference: "المتجر أو السوق المفضل:",
    storeAny: "أقرب بقالة وسوبرماركت",
    storeCapitale: "سوق العاصمة الكبير",
    storeCarrefour: "مجمع كارفور / البقالات الكبرى",
    storeMeat: "مجزرة لحوم طازجة وخضار",
    meeraItemsList: "قائمة المشتريات والمؤونة:",
    meeraItemPh: "أضف مادة (أرز، زيت، سكر، خضار، لحوم...)",
    addItem: "إضافة",
    voiceNoteTitle: "أو أرسل طلبك بصوتك (تسجيل صوتي)",
    voiceNoteSub: "تحدث بسهولة وسيقوم المندوب بتسجيل كل التفاصيل",
    startRecording: "اضغط للتسجيل",
    deliveryDistrict: "مقاطعة التسليم:",
    homeAddressDetail: "العنوان ورقم المنزل:",
    meeraAddressPh: "رقم الدار، الشارع أو نقطة دالة...",
    meeraPriceRuleTitle: "سياسة تسعير طلب ميرة:",
    meeraPriceRuleDesc: "يسدد العميل قيمة المشتريات الفعلية بحسب فاتورة الدكان الرسمية بالإضافة لرسوم خدمة التوصيل (تتراوح بين 150 - 250 MRU فقط حسب المسافة).",
    dispatchMeeraRunner: "إرسال عامل التوصيل الآن",
    ratingModalTitle: "تقييم مزود الخدمة",
    ratingModalSub: "رأيك يضمن جودة الخدمة لجميع سكان نواكشوط",
    verdict5: "ممتاز جداً - عمل احترافي ومتقن!",
    verdict4: "جيد جداً - خدمة سريعة وموثوقة",
    verdict3: "جيد - تم إنجاز العمل",
    verdict2: "مقبول - يحتاج تحسين",
    verdict1: "غير راضٍ عن الخدمة",
    tagPunctual: "دقة في الموعد",
    tagSkill: "إتقان واحترافية",
    tagClean: "نظافة مكان العمل",
    tagFairPrice: "سعر مناسب",
    tagPolite: "حسن التعامل والأمانة",
    writtenReviewLabel: "تعليقك أو ملاحظاتك الإضافية:",
    reviewPlaceholder: "اكتب كلمة شكر أو ملاحظة لتحسين الخدمة...",
    addTip: "إكرامية اختيارية للفني:",
    noTip: "بدون",
    skip: "تخطي",
    submitReviewBtn: "إرسال التقييم واعتماده"
  },
  fr: {
    tagline: "La référence des services à domicile à Nouakchott",
    phoneMode: "Vue Mobile",
    fullMode: "Plein Écran",
    city: "Nouakchott, Mauritanie",
    moughataaLabel: "Moughataa :",
    allNouakchott: "Toutes les Moughataas",
    tevragh: "Tevragh-Zeina",
    ksar: "Ksar",
    arafat: "Arafat",
    teyarett: "Teyarett",
    darNaim: "Dar-Naïm",
    toujounine: "Toujounine",
    riad: "Riad",
    sebkha: "Sebkha",
    elMina: "El Mina",
    searchPlaceholder: "Plombier, électricien, nettoyage, meera...",
    heroBadge: "1ère Plateforme Certifiée en Mauritanie",
    heroTitle: "Votre maison entre les mains des meilleurs pros",
    heroDesc: "Réservez des techniciens certifiés, comparez les tarifs et suivez l'avancement en temps réel avec une interface 3D futuriste.",
    heroAction: "Service Express",
    meeraFast: "Courses Meera",
    verifiedBadge: "Garantie Qualité 100%",
    fastResponse: "Arrivée en 15 minutes",
    feature1Title: "Couverture Totale",
    feature1Desc: "Toutes les moughataas",
    feature2Title: "Comparateur de Prix",
    feature2Desc: "Tarifs clairs et vérifiés",
    feature3Title: "Suivi en Direct",
    feature3Desc: "Minute par minute sur GPS",
    feature4Title: "Avis Contrôlés",
    feature4Desc: "Professionnels certifiés",
    orderEnRoute: "Technicien en route",
    trackNow: "Suivi direct",
    etaText: "Arrivée prévue :",
    servicesHeading: "Nos Services Principaux",
    servicesSub: "Sélectionnez un service pour commander un pro immédiat",
    servicesCount: "6 Services",
    catCleaning: "Ménage & Propreté",
    servCleaning: "Nettoyage (Ménage)",
    descCleaning: "Nettoyage approfondi de villas, bureaux, désinfection et lavage de canapés et tapis.",
    catPlumbing: "Tuyauterie & Sanitaire",
    servPlumbing: "Plomberie (Sanitaire)",
    descPlumbing: "Réparation de fuites, pose de sanitaires, chauffe-eau et entretien de citernes d'eau.",
    catElectric: "Installations & Pannes",
    servElectric: "Électricité Générale",
    descElectric: "Diagnostic de court-circuit, raccordement tableaux, solaire et groupes électrogènes.",
    catMaint: "Réparations Polyvalentes",
    servMaint: "Maintenance Générale",
    descMaint: "Entretien climatiseurs, électroménager, serrurerie, menuiserie et dépannages.",
    catTransport: "Déménagement & Fret",
    servTransport: "Transport & Déménagement",
    descTransport: "Transport sécurisé de meubles, cartons et matériel à travers tout Nouakchott.",
    catMeera: "Courses & Provisions",
    servMeera: "Demande Meera (Courses)",
    descMeera: "Un coursier dédié achète vos vivres, riz, légumes, provisions et vous livre à domicile.",
    meeraBadge: "Service Exclusif",
    meeraPriceRule: "Le prix est fixé après la course selon facture réelle",
    orderMeeraBtn: "Commander Meera",
    from: "À partir de",
    bookService: "Réserver",
    topProvidersHeading: "Meilleurs Prestataires Disponibles",
    topProvidersSub: "Artisans certifiés et évalués par les clients de Nouakchott",
    viewAll: "Tout Voir",
    emergencyTitle: "Urgence Domicile ?",
    emergencyDesc: "Fuite d'eau majeure, coupure électrique ou serrure bloquée ? Intervention d'urgence en 15 min.",
    callEmergency: "Appel d'Urgence",
    providersPageTitle: "Prestataires Qualifiés",
    providersPageSub: "Comparez devis, évaluations et délais d'intervention",
    filterAll: "Tous",
    servCleaningShort: "Nettoyage",
    servPlumbingShort: "Plomberie",
    servElectricShort: "Électricité",
    servMaintShort: "Maintenance",
    servTransportShort: "Transport",
    servMeeraShort: "Meera",
    sortBy: "Trier par :",
    sortRating: "Mieux notés",
    sortPriceAsc: "Prix croissant",
    sortSpeed: "Plus rapides",
    sortJobs: "Expérience",
    liveTrackingTag: "Suivi GPS en Temps Réel",
    trackingTitle: "Statut de votre demande",
    trackingSub: "Position du technicien et estimation du temps d'arrivée",
    myHome: "Mon Domicile (Tevragh-Zeina)",
    minutesUnit: "min",
    kmUnit: "km",
    step1Title: "Commande reçue et validée",
    step2Title: "Technicien assigné et mission acceptée",
    step3Title: "Technicien en route vers votre adresse",
    step4Title: "Intervention et début des travaux",
    step5Title: "Fin des travaux et validation facture",
    stepWait: "En attente de l'artisan",
    stepReviewWait: "Évaluation & garantie",
    simulateStep: "Simuler la progression (Démo)",
    rateProviderBtn: "Évaluer le Service",
    myOrdersTitle: "Mes Commandes & Historique",
    myOrdersSub: "Historique de vos interventions et livraisons Meera",
    allOrders: "Toutes (4)",
    activeOrdersTab: "En cours (1)",
    doneOrdersTab: "Terminées (3)",
    statusCompleted: "Terminée & Livrée",
    totalCost: "Montant total :",
    invoice: "Facture",
    reorder: "Recommander",
    tierVip: "Client Privilège Beyti (VIP)",
    walletBalance: "Solde Portefeuille",
    points: "Points Beyti",
    completedServices: "Services Réalisés",
    serviceCount: "missions",
    accountSettings: "Paramètres & Moughataa",
    savedAddresses: "Mes adresses enregistrées",
    appLanguage: "Langue de l'application",
    guaranteePolicy: "Garantie Beyti & Protection 30j",
    guaranteeSub: "Satisfaction garantie et couverture de l'intervention",
    supportCenter: "Centre d'Assistance 24/7",
    supportSub: "Support instantané par téléphone et WhatsApp",
    joinProviderTitle: "Êtes-vous un artisan ou technicien à Nouakchott ?",
    joinProviderDesc: "Rejoignez le réseau Beyti et recevez des commandes quotidiennes avec un revenu régulier.",
    registerAsProvider: "Devenir Prestataire",
    navHome: "Accueil",
    navProviders: "Prestataires",
    navRequest: "Commander",
    navTracking: "Suivi Live",
    navOrders: "Commandes",
    chooseServiceType: "Type de service souhaité :",
    modalMoughataa: "Moughataa à Nouakchott :",
    modalNeighborhood: "Quartier ou repère :",
    landmarkPlaceholder: "Ex: Près de Carrefour BMD, rond-point...",
    timingPref: "Délai souhaité :",
    urgentNow: "Immédiat (30 minutes)",
    urgentSub: "Pour urgences et pannes critiques",
    scheduleDate: "Sur rendez-vous",
    scheduleSub: "Aujourd'hui ou date ultérieure",
    jobDetails: "Détails du besoin :",
    jobDescPlaceholder: "Décrivez la panne ou la mission pour préparer les outils adaptés...",
    baseEstimate: "Tarif estimatif :",
    quoteGuarantee: "Prix validé en toute transparence avant intervention avec garantie",
    cancel: "Annuler",
    confirmAndDispatch: "Confirmer & Assigner le Pro",
    meeraModalTitle: "Demande Meera (Courses & Provisions)",
    meeraModalSub: "Votre coursier personnel s'occupe de vos courses et vivres",
    meeraHowTitle: "Comment fonctionne la Demande Meera ?",
    meeraHowDesc: "Ajoutez vos articles ou enregistrez un mémo vocal. Le coursier se rend au marché ou supermarché sélectionné et vous livre à domicile avec le ticket d'achat. Le prix est réglé à la fin selon la facture réelle + frais de course minimes.",
    storePreference: "Marché ou magasin préféré :",
    storeAny: "Épicerie la plus proche",
    storeCapitale: "Grand Marché Capitale",
    storeCarrefour: "Complexe Carrefour / Superettes",
    storeMeat: "Boucherie & primeur frais",
    meeraItemsList: "Liste de courses & vivres :",
    meeraItemPh: "Ajouter un article (Riz, huile, sucre, légumes...)",
    addItem: "Ajouter",
    voiceNoteTitle: "Ou dictez votre commande (Note vocale)",
    voiceNoteSub: "Enregistrez votre voix simplement pour le coursier",
    startRecording: "Microphone",
    deliveryDistrict: "Moughataa de livraison :",
    homeAddressDetail: "Adresse exacte :",
    meeraAddressPh: "Numéro de porte, rue ou point de repère...",
    meeraPriceRuleTitle: "Tarification de Demande Meera :",
    meeraPriceRuleDesc: "Vous payez le montant exact du ticket d'achat du magasin plus un forfait de livraison symbolique (150 à 250 MRU selon la distance).",
    dispatchMeeraRunner: "Lancer le coursier maintenant",
    ratingModalTitle: "Évaluation du Prestataire",
    ratingModalSub: "Votre avis certifie la qualité pour les habitants de Nouakchott",
    verdict5: "Excellent - Travail impeccable et ponctuel !",
    verdict4: "Très bien - Service rapide et soigné",
    verdict3: "Bien - Travail exécuté",
    verdict2: "Moyen - Améliorations requises",
    verdict1: "Insatisfait de la prestation",
    tagPunctual: "Ponctualité",
    tagSkill: "Grand professionnalisme",
    tagClean: "Chantier laissé propre",
    tagFairPrice: "Tarif très honnête",
    tagPolite: "Politesse et intégrité",
    writtenReviewLabel: "Commentaire ou appréciation :",
    reviewPlaceholder: "Laissez un mot d'encouragement ou une remarque...",
    addTip: "Pourboire facultatif :",
    noTip: "Aucun",
    skip: "Passer",
    submitReviewBtn: "Valider l'évaluation"
  }
};

// ==========================================
// 2. PROVIDERS DATABASE (NOUAKCHOTT)
// ==========================================
const PROVIDERS_DATA = [
  {
    id: "p1",
    name: "سيدي محمد ولد البشير",
    nameFr: "Sidi Mohamed El Bechir",
    service: "plumbing",
    serviceTitle: "خبير سباكة وشبكات مياه",
    serviceTitleFr: "Expert Plomberie & Réseaux",
    district: "tevragh-zeina",
    districtLabel: "تفرغ زينة",
    districtLabelFr: "Tevragh-Zeina",
    rating: 4.95,
    reviewsCount: 148,
    jobsCompleted: 650,
    priceMru: 350,
    speedMins: 12,
    badge: "معتمد VIP",
    badgeFr: "Certifié VIP",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    phone: "+22245001122"
  },
  {
    id: "p2",
    name: "المختار ولد أحمد",
    nameFr: "Mokhtar Ould Ahmed",
    service: "electricity",
    serviceTitle: "مهندس كهرباء وتمديدات",
    serviceTitleFr: "Électricien Bâtiment & Solaire",
    district: "ksar",
    districtLabel: "لكصر",
    districtLabelFr: "Ksar",
    rating: 4.92,
    reviewsCount: 185,
    jobsCompleted: 780,
    priceMru: 500,
    speedMins: 15,
    badge: "نجم الجودة",
    badgeFr: "Top Qualité",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    phone: "+22246778899"
  },
  {
    id: "p3",
    name: "فاطمة بنت اعلي (مؤسسة النقاء)",
    nameFr: "Fatimetou Mint Ely (Al-Naqaa)",
    service: "cleaning",
    serviceTitle: "مشرفة فرق نظافة وتعقيم",
    serviceTitleFr: "Responsable Équipes Ménage",
    district: "tevragh-zeina",
    districtLabel: "تفرغ زينة",
    districtLabelFr: "Tevragh-Zeina",
    rating: 4.98,
    reviewsCount: 220,
    jobsCompleted: 910,
    priceMru: 400,
    speedMins: 20,
    badge: "الأكثر طلباً",
    badgeFr: "Plus Demandé",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    phone: "+22236112233"
  },
  {
    id: "p4",
    name: "الحسن ولد الشيخ",
    nameFr: "El Hassen Ould Cheikh",
    service: "maintenance",
    serviceTitle: "فني تبريد وتكييف معتمد",
    serviceTitleFr: "Technicien Climatisation & Froid",
    district: "arafat",
    districtLabel: "عرفات",
    districtLabelFr: "Arafat",
    rating: 4.88,
    reviewsCount: 132,
    jobsCompleted: 540,
    priceMru: 450,
    speedMins: 18,
    badge: "فني معتمد",
    badgeFr: "Agréé",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    phone: "+22247334455"
  },
  {
    id: "p5",
    name: "باب ولد المصطفى (أسطول بيتي)",
    nameFr: "Baba Ould Moustapha",
    service: "transport",
    serviceTitle: "نقل وترحيل أثاث وبضائع",
    serviceTitleFr: "Déménagement & Transport Fret",
    district: "dar-naim",
    districtLabel: "دار النعيم",
    districtLabelFr: "Dar-Naïm",
    rating: 4.85,
    reviewsCount: 95,
    jobsCompleted: 390,
    priceMru: 600,
    speedMins: 25,
    badge: "شاحنات مؤمنة",
    badgeFr: "Véhicules Sécurisés",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
    phone: "+22222445566"
  },
  {
    id: "p6",
    name: "عمر كمارا (مندوب ميرة السريع)",
    nameFr: "Oumar Camara (Meera Express)",
    service: "meera",
    serviceTitle: "مندوب مشتريات ومؤونة حية",
    serviceTitleFr: "Coursier Vivres & Marchés",
    district: "tevragh-zeina",
    districtLabel: "تفرغ زينة",
    districtLabelFr: "Tevragh-Zeina",
    rating: 4.96,
    reviewsCount: 310,
    jobsCompleted: 1120,
    priceMru: 150,
    speedMins: 10,
    badge: "فائق السرعة",
    badgeFr: "Super Rapide",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
    phone: "+22248556677"
  },
  {
    id: "p7",
    name: "سليمان دياكيتي",
    nameFr: "Souleymane Diakité",
    service: "plumbing",
    serviceTitle: "سباكة وكشف تسريبات الكتروني",
    serviceTitleFr: "Plomberie & Détection Électronique",
    district: "teyarett",
    districtLabel: "تيارت",
    districtLabelFr: "Teyarett",
    rating: 4.89,
    reviewsCount: 88,
    jobsCompleted: 410,
    priceMru: 350,
    speedMins: 14,
    badge: "فحص رقمي",
    badgeFr: "Test Digital",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80",
    phone: "+22244119988"
  },
  {
    id: "p8",
    name: "محمد محمود ولد الطالب",
    nameFr: "Mohamed Mahmoud Taleb",
    service: "meera",
    serviceTitle: "مندوب أسواق وتموين العاصمة",
    serviceTitleFr: "Approvisionnement Marché Capitale",
    district: "ksar",
    districtLabel: "لكصر",
    districtLabelFr: "Ksar",
    rating: 4.94,
    reviewsCount: 165,
    jobsCompleted: 640,
    priceMru: 180,
    speedMins: 12,
    badge: "أمين وموثق",
    badgeFr: "Dévoué & Certifié",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    phone: "+22243221100"
  }
];

// ==========================================
// 3. APPLICATION STATE
// ==========================================
const AppState = {
  currentLang: localStorage.getItem("beyti_lang") || "ar",
  activeTab: "tabHome",
  selectedMoughataa: "all",
  searchQuery: "",
  activeServiceFilter: "all",
  currentSort: "rating",
  liveTrackerStep: 3, // 1 to 5
  etaTimer: 11,
  selectedBookingService: "cleaning",
  userRatingStars: 5,
  isRecordingVoice: false
};

// ==========================================
// 4. SOUND EFFECTS SYNTHESIZER (Web Audio API)
// ==========================================
class SoundFX {
  static ctx = null;

  static init() {
    if (!SoundFX.ctx && (window.AudioContext || window.webkitAudioContext)) {
      SoundFX.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  static playTap() {
    try {
      SoundFX.init();
      if (!SoundFX.ctx) return;
      const osc = SoundFX.ctx.createOscillator();
      const gain = SoundFX.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, SoundFX.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(850, SoundFX.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, SoundFX.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, SoundFX.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(SoundFX.ctx.destination);
      osc.start();
      osc.stop(SoundFX.ctx.currentTime + 0.06);
    } catch(e) { /* ignore silent failure */ }
  }

  static playSuccess() {
    try {
      SoundFX.init();
      if (!SoundFX.ctx) return;
      const now = SoundFX.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = SoundFX.ctx.createOscillator();
        const gain = SoundFX.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.1, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.14);
        osc.connect(gain);
        gain.connect(SoundFX.ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.15);
      });
    } catch(e) { /* ignore silent failure */ }
  }
}

// ==========================================
// 5. INITIALIZATION & DOM BINDINGS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initClock();
  applyLanguage(AppState.currentLang);
  initNavigationTabs();
  initTilt3DEffect();
  renderFeaturedProviders();
  renderProvidersFullList();
  initDistrictSelector();
  initSearchAndFilter();
  initModals();
  initMeeraBuilder();
  initLiveTrackerSimulation();
  initRatingModal();
  initDesktopDock();

  // Dynamic Island Welcome text change
  setTimeout(() => {
    updateDynamicIsland(
      AppState.currentLang === "ar" 
        ? "مرحباً بك في بيتي • نواكشوط" 
        : "Bienvenue sur Beyti • Nouakchott"
    );
  }, 2500);
});

// Update Phone Clock
function initClock() {
  const clockEl = document.getElementById("statusClock");
  const update = () => {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, "0");
    const m = String(d.getMinutes()).padStart(2, "0");
    if (clockEl) clockEl.textContent = `${h}:${m}`;
  };
  update();
  setInterval(update, 30000);
}

// ==========================================
// 6. LANGUAGE SWITCHER SYSTEM (AR <-> FR)
// ==========================================
function applyLanguage(lang) {
  AppState.currentLang = lang;
  localStorage.setItem("beyti_lang", lang);

  const html = document.documentElement;
  const isAr = lang === "ar";

  html.setAttribute("lang", lang);
  html.setAttribute("dir", isAr ? "rtl" : "ltr");

  // Update tag labels
  const langTag = document.getElementById("currentLangTag");
  if (langTag) langTag.textContent = isAr ? "FR" : "AR";

  const dockLangLabel = document.getElementById("dockLangLabel");
  if (dockLangLabel) dockLangLabel.textContent = isAr ? "Français" : "العربية";

  const profileLangLabel = document.getElementById("profileLangLabel");
  if (profileLangLabel) {
    profileLangLabel.textContent = isAr ? "العربية (موريتانيا)" : "Français (Mauritanie)";
  }

  const profileLangToggle = document.getElementById("profileLangToggle");
  if (profileLangToggle) {
    profileLangToggle.textContent = isAr ? "Passer en Français" : "التبديل إلى العربية";
  }

  // Translate all text elements with data-i18n
  const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.ar;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate placeholder attributes
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Re-render dynamic components
  renderFeaturedProviders();
  renderProvidersFullList();
  updateStepperLabels();
}

function toggleLanguage() {
  SoundFX.playTap();
  const nextLang = AppState.currentLang === "ar" ? "fr" : "ar";
  applyLanguage(nextLang);
  showToast(
    nextLang === "ar" ? "تم التحويل إلى اللغة العربية" : "Passage en Français effectué", 
    "fa-globe"
  );
}

// Bind language buttons
document.getElementById("langSwitchBtn")?.addEventListener("click", toggleLanguage);
document.getElementById("dockLangBtn")?.addEventListener("click", toggleLanguage);
document.getElementById("profileLangToggle")?.addEventListener("click", toggleLanguage);

// ==========================================
// 7. BOTTOM DOCK & TAB SWITCHER
// ==========================================
function initNavigationTabs() {
  const tabBtns = document.querySelectorAll(".nav-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      SoundFX.playTap();
      const targetTabId = btn.getAttribute("data-tab");
      switchTab(targetTabId);
    });
  });

  // Center Float Action Button -> Opens instant booking modal
  document.getElementById("centerActionBtn")?.addEventListener("click", () => {
    SoundFX.playTap();
    openBookingModal("cleaning");
  });

  // Link button on home "عرض الكل" -> switches to tabProviders
  document.getElementById("seeAllProvidersBtn")?.addEventListener("click", () => {
    SoundFX.playTap();
    switchTab("tabProviders");
  });

  // Active order widget on home -> switches to tabTracking
  document.getElementById("openLiveTrackerBtn")?.addEventListener("click", () => {
    SoundFX.playTap();
    switchTab("tabTracking");
  });

  // Hero order button -> Opens booking
  document.getElementById("heroOrderNowBtn")?.addEventListener("click", () => {
    SoundFX.playTap();
    openBookingModal("cleaning");
  });

  // Hero Meera fast button -> Opens Meera modal
  document.getElementById("heroMeeraFastBtn")?.addEventListener("click", () => {
    SoundFX.playTap();
    openMeeraModal();
  });

  // Emergency call button
  document.getElementById("emergencyCallBtn")?.addEventListener("click", () => {
    SoundFX.playTap();
    const msg = AppState.currentLang === "ar" 
      ? "جارِ الاتصال بفريق طوارئ بيتي نواكشوط 1918..." 
      : "Appel de la brigade d'urgence Beyti Nouakchott...";
    showToast(msg, "fa-phone-volume");
  });
}

function switchTab(tabId) {
  AppState.activeTab = tabId;

  // Toggle active class on pages
  document.querySelectorAll(".tab-page").forEach(page => {
    page.classList.remove("active-page");
  });
  const targetPage = document.getElementById(tabId);
  if (targetPage) {
    targetPage.classList.add("active-page");
  }

  // Toggle active class on nav buttons
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Scroll to top of app body
  const scrollBody = document.getElementById("appScrollBody");
  if (scrollBody) scrollBody.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 8. 3D TILT EFFECT ENGINE (Cards & Modals)
// ==========================================
function initTilt3DEffect() {
  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach(card => {
    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      if (!clientX || !clientY) return;

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
    card.addEventListener("touchmove", handleMove, { passive: true });
    card.addEventListener("touchend", handleLeave);
  });
}

// ==========================================
// 9. NOUAKCHOTT DISTRICT & SEARCH FILTER
// ==========================================
function initDistrictSelector() {
  const select = document.getElementById("moughataaSelect");
  if (!select) return;

  select.addEventListener("change", (e) => {
    SoundFX.playTap();
    AppState.selectedMoughataa = e.target.value;
    const districtName = select.options[select.selectedIndex].text;
    const toastMsg = AppState.currentLang === "ar"
      ? `تم ضبط التغطية على: ${districtName}`
      : `Zone définie sur : ${districtName}`;
    showToast(toastMsg, "fa-location-dot");
    
    renderFeaturedProviders();
    renderProvidersFullList();
  });
}

function initSearchAndFilter() {
  const searchInput = document.getElementById("serviceSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value.trim().toLowerCase();
      renderProvidersFullList();
    });
  }

  // Filter button next to search
  document.getElementById("filterModalBtn")?.addEventListener("click", () => {
    SoundFX.playTap();
    switchTab("tabProviders");
  });

  // Providers tab service pills
  const pills = document.querySelectorAll("#categoryFilterPills .pill-btn");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      SoundFX.playTap();
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      AppState.activeServiceFilter = pill.getAttribute("data-filter");
      renderProvidersFullList();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById("sortProvidersSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.currentSort = e.target.value;
      renderProvidersFullList();
    });
  }
}

// Filter logic helper
function getFilteredProviders() {
  return PROVIDERS_DATA.filter(p => {
    // District match
    const matchDistrict = (AppState.selectedMoughataa === "all") || (p.district === AppState.selectedMoughataa);
    // Service category match
    const matchService = (AppState.activeServiceFilter === "all") || (p.service === AppState.activeServiceFilter);
    // Search query match
    let matchQuery = true;
    if (AppState.searchQuery) {
      const q = AppState.searchQuery;
      matchQuery = p.name.toLowerCase().includes(q) ||
                   p.nameFr.toLowerCase().includes(q) ||
                   p.serviceTitle.toLowerCase().includes(q) ||
                   p.serviceTitleFr.toLowerCase().includes(q) ||
                   p.districtLabel.toLowerCase().includes(q) ||
                   p.districtLabelFr.toLowerCase().includes(q);
    }
    return matchDistrict && matchService && matchQuery;
  }).sort((a, b) => {
    if (AppState.currentSort === "rating") return b.rating - a.rating;
    if (AppState.currentSort === "price-asc") return a.priceMru - b.priceMru;
    if (AppState.currentSort === "speed") return a.speedMins - b.speedMins;
    if (AppState.currentSort === "jobs") return b.jobsCompleted - a.jobsCompleted;
    return 0;
  });
}

// ==========================================
// 10. RENDERING PROVIDERS (Home & Tab 2)
// ==========================================
function renderFeaturedProviders() {
  const container = document.getElementById("featuredProvidersList");
  if (!container) return;

  const isAr = AppState.currentLang === "ar";
  // Filter top 3 providers
  const list = PROVIDERS_DATA.slice(0, 3);

  container.innerHTML = list.map(p => `
    <article class="provider-card-3d tilt-card" data-provider-id="${p.id}">
      <div class="provider-avatar-box">
        <img src="${p.photo}" alt="${isAr ? p.name : p.nameFr}" class="provider-img">
        <span class="provider-verified-badge" title="مزود معتمد"><i class="fa-solid fa-check"></i></span>
      </div>
      <div class="provider-info-box">
        <div class="provider-top-line">
          <h4 class="provider-name">${isAr ? p.name : p.nameFr}</h4>
          <span class="provider-rate-badge"><i class="fa-solid fa-star"></i> ${p.rating}</span>
        </div>
        <span class="provider-job-title">${isAr ? p.serviceTitle : p.serviceTitleFr}</span>
        <span class="provider-district-tag">
          <i class="fa-solid fa-location-dot"></i> ${isAr ? p.districtLabel : p.districtLabelFr} • ${p.jobsCompleted} ${isAr ? 'مهمة' : 'missions'}
        </span>
      </div>
      <div class="provider-actions">
        <span class="provider-starting-price">${p.priceMru} <small>MRU</small></span>
        <button class="btn-book-quick" onclick="openBookingModal('${p.service}', '${p.id}')">
          ${isAr ? 'حجز' : 'Réserver'}
        </button>
      </div>
    </article>
  `).join("");

  initTilt3DEffect();
}

function renderProvidersFullList() {
  const container = document.getElementById("providersFullList");
  const countLabel = document.getElementById("providerCountLabel");
  if (!container) return;

  const isAr = AppState.currentLang === "ar";
  const list = getFilteredProviders();

  if (countLabel) {
    countLabel.textContent = isAr 
      ? `${list.length} مزود متاح في نواكشوط`
      : `${list.length} prestataires disponibles`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box" style="text-align: center; padding: 40px 10px; color: var(--text-secondary);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.2rem; color: var(--cyan-primary); margin-bottom: 10px; display: block;"></i>
        <h4>${isAr ? 'لا يوجد مزودون يطابقون البحث' : 'Aucun prestataire trouvé'}</h4>
        <p style="font-size: 0.8rem; margin-top: 5px;">${isAr ? 'جرّب تغيير المقاطعة أو اختيار خدمة أخرى' : 'Veuillez élargir votre recherche ou changer de moughataa'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(p => `
    <article class="provider-card-3d tilt-card" data-provider-id="${p.id}">
      <div class="provider-avatar-box">
        <img src="${p.photo}" alt="${isAr ? p.name : p.nameFr}" class="provider-img">
        <span class="provider-verified-badge"><i class="fa-solid fa-check"></i></span>
      </div>
      <div class="provider-info-box">
        <div class="provider-top-line">
          <h4 class="provider-name">${isAr ? p.name : p.nameFr}</h4>
          <span class="provider-rate-badge"><i class="fa-solid fa-star"></i> ${p.rating} (${p.reviewsCount})</span>
        </div>
        <span class="provider-job-title">${isAr ? p.serviceTitle : p.serviceTitleFr}</span>
        <span class="provider-district-tag">
          <i class="fa-solid fa-location-dot"></i> ${isAr ? p.districtLabel : p.districtLabelFr} • 
          <i class="fa-solid fa-stopwatch" style="margin: 0 3px;"></i> ${p.speedMins} ${isAr ? 'دقيقة' : 'min'}
        </span>
      </div>
      <div class="provider-actions">
        <span class="provider-starting-price">${p.priceMru} <small>MRU</small></span>
        <button class="btn-book-quick" onclick="openBookingModal('${p.service}', '${p.id}')">
          ${isAr ? 'طلب الخدمة' : 'Choisir'}
        </button>
      </div>
    </article>
  `).join("");

  initTilt3DEffect();
}

// ==========================================
// 11. BOOKING & SERVICE MODALS
// ==========================================
function initModals() {
  // Bind service cards click
  document.querySelectorAll(".service-card-3d").forEach(card => {
    card.addEventListener("click", (e) => {
      const service = card.getAttribute("data-service");
      if (service === "meera") {
        openMeeraModal();
      } else {
        openBookingModal(service);
      }
    });
  });

  // Modal Service chips inside Booking Modal
  const modalChips = document.querySelectorAll("#bookingServiceChips .serv-chip");
  modalChips.forEach(chip => {
    chip.addEventListener("click", () => {
      SoundFX.playTap();
      modalChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const serv = chip.getAttribute("data-serv");
      if (serv === "meera") {
        closeModal("bookingModal");
        openMeeraModal();
      } else {
        updateBookingQuote(serv);
      }
    });
  });

  // Modal Close buttons
  document.getElementById("closeBookingModal")?.addEventListener("click", () => closeModal("bookingModal"));
  document.getElementById("cancelBookingBtn")?.addEventListener("click", () => closeModal("bookingModal"));
  document.getElementById("closeMeeraModal")?.addEventListener("click", () => closeModal("meeraModal"));
  document.getElementById("cancelMeeraBtn")?.addEventListener("click", () => closeModal("meeraModal"));
  document.getElementById("closeRatingModal")?.addEventListener("click", () => closeModal("ratingModal"));
  document.getElementById("skipRatingBtn")?.addEventListener("click", () => closeModal("ratingModal"));

  // Confirm booking button
  document.getElementById("confirmBookingBtn")?.addEventListener("click", () => {
    SoundFX.playSuccess();
    closeModal("bookingModal");
    const isAr = AppState.currentLang === "ar";
    showToast(
      isAr ? "تم حجز وتكليف الفني بنجاح! جاري التتبع الفوري..." : "Artisan assigné ! Suivi live en cours...", 
      "fa-circle-check"
    );
    // Switch to tracker tab
    setTimeout(() => {
      switchTab("tabTracking");
      updateDynamicIsland(isAr ? "طلبك قيد المتابعة • 11 د" : "Commande en direct • 11m");
    }, 600);
  });
}

function openBookingModal(serviceKey = "cleaning", providerId = null) {
  SoundFX.playTap();
  AppState.selectedBookingService = serviceKey;
  const isAr = AppState.currentLang === "ar";

  // Activate matching chip
  const modalChips = document.querySelectorAll("#bookingServiceChips .serv-chip");
  modalChips.forEach(chip => {
    if (chip.getAttribute("data-serv") === serviceKey) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  updateBookingQuote(serviceKey);

  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }
}

function updateBookingQuote(serviceKey) {
  const quoteEl = document.getElementById("modalQuoteAmount");
  if (!quoteEl) return;

  const estimates = {
    cleaning: "400 MRU",
    plumbing: "350 MRU",
    electricity: "500 MRU",
    maintenance: "450 MRU",
    transport: "600 MRU",
    meera: "150 MRU"
  };
  quoteEl.textContent = estimates[serviceKey] || "400 MRU";
}

function closeModal(modalId) {
  SoundFX.playTap();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
}

// ==========================================
// 12. "طلب ميرة" SMART GROCERY BUILDER
// ==========================================
function openMeeraModal() {
  SoundFX.playTap();
  const modal = document.getElementById("meeraModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }
}

function initMeeraBuilder() {
  const addBtn = document.getElementById("btnAddMeeraItem");
  const itemInput = document.getElementById("meeraItemInput");
  const listEl = document.getElementById("meeraItemsChecklist");

  const addItem = (itemName) => {
    if (!itemName || !itemName.trim()) return;
    SoundFX.playTap();

    const li = document.createElement("li");
    li.className = "meera-item-row";
    li.innerHTML = `
      <span class="item-bullet"><i class="fa-solid fa-check"></i></span>
      <span class="item-name">${escapeHtml(itemName.trim())}</span>
      <button type="button" class="btn-remove-item"><i class="fa-solid fa-trash-can"></i></button>
    `;

    li.querySelector(".btn-remove-item").addEventListener("click", () => {
      SoundFX.playTap();
      li.remove();
    });

    listEl.prepend(li);
    if (itemInput) itemInput.value = "";
  };

  addBtn?.addEventListener("click", () => {
    if (itemInput) addItem(itemInput.value);
  });

  itemInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem(itemInput.value);
    }
  });

  // Bind existing remove buttons
  document.querySelectorAll(".meera-item-row .btn-remove-item").forEach(btn => {
    btn.addEventListener("click", (e) => {
      SoundFX.playTap();
      e.currentTarget.closest(".meera-item-row").remove();
    });
  });

  // Clickable suggested essentials
  document.querySelectorAll(".sugg-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const item = tag.getAttribute("data-item");
      addItem(item);
    });
  });

  // Store selection pills
  const storePills = document.querySelectorAll(".store-pill");
  storePills.forEach(pill => {
    pill.addEventListener("click", () => {
      SoundFX.playTap();
      storePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
    });
  });

  // Simulated Voice Note Recording
  const recordBtn = document.getElementById("btnRecordSim");
  const recordLabel = document.getElementById("recordLabel");
  recordBtn?.addEventListener("click", () => {
    SoundFX.playTap();
    AppState.isRecordingVoice = !AppState.isRecordingVoice;
    const isAr = AppState.currentLang === "ar";

    if (AppState.isRecordingVoice) {
      recordBtn.classList.add("recording");
      recordLabel.textContent = isAr ? "جاري التسجيل... (اضغط للحفظ)" : "Enregistrement... (Arrêter)";
      showToast(isAr ? "جاري تسجيل طلبك الصوتي..." : "Enregistrement vocal actif...", "fa-microphone");
    } else {
      recordBtn.classList.remove("recording");
      recordLabel.textContent = isAr ? "تم إرفاق التسجيل الصوتي ✓" : "Mémo vocal joint ✓";
      showToast(isAr ? "تم حفظ التسجيل وإرفاقه للمندوب" : "Mémo vocal prêt et attaché", "fa-check");
    }
  });

  // Confirm Meera Order
  document.getElementById("confirmMeeraBtn")?.addEventListener("click", () => {
    SoundFX.playSuccess();
    closeModal("meeraModal");
    const isAr = AppState.currentLang === "ar";
    showToast(
      isAr 
        ? "تم إرسال طلب ميرة! المندوب يتوجه الآن لشراء المواد." 
        : "Commande Meera envoyée ! Le coursier part aux achats.",
      "fa-basket-shopping"
    );

    // Update Live Tracker with Meera info & switch
    const trackBadge = document.getElementById("trackOrderTypeBadge");
    if (trackBadge) {
      trackBadge.textContent = isAr ? "طلب ميرة (توصيل تموين ومؤونة)" : "Demande Meera (Courses & Vivres)";
    }
    const pinName = document.getElementById("gpsPinName");
    if (pinName) {
      pinName.textContent = isAr ? "المندوب: عمر كمارا" : "Coursier: Oumar Camara";
    }

    setTimeout(() => {
      switchTab("tabTracking");
      updateDynamicIsland(isAr ? "ميرة • المندوب في الطريق" : "Meera • Coursier en route");
    }, 700);
  });
}

// ==========================================
// 13. LIVE TRACKER REAL-TIME SIMULATION
// ==========================================
function initLiveTrackerSimulation() {
  const nextStepBtn = document.getElementById("btnNextStepSim");
  const gpsPin = document.getElementById("providerGpsPin");

  nextStepBtn?.addEventListener("click", () => {
    SoundFX.playTap();
    AppState.liveTrackerStep = (AppState.liveTrackerStep % 5) + 1;
    updateStepperView();

    // Animate map pin position based on step
    if (gpsPin) {
      if (AppState.liveTrackerStep === 1) {
        gpsPin.style.top = "20%";
        gpsPin.style.left = "80%";
        updateTrackerStats(22, 5.2);
      } else if (AppState.liveTrackerStep === 2) {
        gpsPin.style.top = "28%";
        gpsPin.style.left = "70%";
        updateTrackerStats(17, 3.8);
      } else if (AppState.liveTrackerStep === 3) {
        gpsPin.style.top = "42%";
        gpsPin.style.left = "52%";
        updateTrackerStats(9, 1.8);
      } else if (AppState.liveTrackerStep === 4) {
        gpsPin.style.top = "62%";
        gpsPin.style.left = "38%";
        updateTrackerStats(2, 0.3);
      } else if (AppState.liveTrackerStep === 5) {
        gpsPin.style.top = "68%";
        gpsPin.style.left = "35%"; // arrived at home
        updateTrackerStats(0, 0);
        // Prompt for rating
        setTimeout(() => {
          openRatingModal();
        }, 800);
      }
    }
  });
}

function updateTrackerStats(mins, dist) {
  const etaEl = document.getElementById("etaMinutes");
  const distEl = document.getElementById("distKm");
  if (etaEl) etaEl.textContent = mins;
  if (distEl) distEl.textContent = dist;
}

function updateStepperView() {
  const items = document.querySelectorAll("#trackingStepper .step-item");
  const currentStep = AppState.liveTrackerStep;
  const isAr = AppState.currentLang === "ar";

  items.forEach((item, index) => {
    const stepNumber = index + 1;
    item.classList.remove("step-completed", "step-current", "step-upcoming");

    if (stepNumber < currentStep) {
      item.classList.add("step-completed");
    } else if (stepNumber === currentStep) {
      item.classList.add("step-current");
    } else {
      item.classList.add("step-upcoming");
    }
  });

  const stepMessages = {
    1: isAr ? "تم استلام الطلب وتأكيده بنجاح" : "Demande validée",
    2: isAr ? "تم قبول المهمة من قبل الفني" : "Mission acceptée par l'artisan",
    3: isAr ? "الفني في الطريق إليك الآن" : "Artisan en route",
    4: isAr ? "الفني وصل ويبدأ العمل والمعاينة" : "Travaux en cours",
    5: isAr ? "اكتمل العمل بنجاح! يرجى التقييم" : "Mission terminée avec succès !"
  };
  showToast(stepMessages[currentStep], "fa-satellite-dish");
}

function updateStepperLabels() {
  // Handles language translation refresh on stepper
  updateStepperView();
}

// ==========================================
// 14. PROVIDER RATING & QUALITY ASSURANCE MODAL
// ==========================================
function initRatingModal() {
  document.getElementById("btnOpenRatingModal")?.addEventListener("click", () => {
    openRatingModal();
  });

  // Star clicks
  const stars = document.querySelectorAll("#starRatingGroup .star-btn");
  const verdictEl = document.getElementById("ratingVerdict");

  stars.forEach(star => {
    star.addEventListener("click", () => {
      SoundFX.playTap();
      const val = parseInt(star.getAttribute("data-val"));
      AppState.userRatingStars = val;

      stars.forEach(s => {
        const sVal = parseInt(s.getAttribute("data-val"));
        if (sVal <= val) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });

      const isAr = AppState.currentLang === "ar";
      const verdicts = {
        5: isAr ? "ممتاز جداً - عمل احترافي ومتقن!" : "Excellent - Travail impeccable !",
        4: isAr ? "جيد جداً - خدمة سريعة وموثوقة" : "Très bien - Service soigné",
        3: isAr ? "جيد - تم إنجاز العمل" : "Bien - Mission accomplie",
        2: isAr ? "مقبول - يحتاج إلى تحسين" : "Moyen - Doit s'améliorer",
        1: isAr ? "غير راضٍ عن الخدمة" : "Insatisfait de la prestation"
      };
      if (verdictEl) verdictEl.textContent = verdicts[val];
    });
  });

  // Quality tags toggle
  document.querySelectorAll("#qualityTagsGroup .quality-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      SoundFX.playTap();
      tag.classList.toggle("active");
    });
  });

  // Tip chips toggle
  document.querySelectorAll(".tip-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      SoundFX.playTap();
      document.querySelectorAll(".tip-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    });
  });

  // Submit Rating
  document.getElementById("submitRatingBtn")?.addEventListener("click", () => {
    SoundFX.playSuccess();
    closeModal("ratingModal");
    const isAr = AppState.currentLang === "ar";
    showToast(
      isAr 
        ? "شكراً لك! تم اعتماد تقييمك بنجاح وتعزيز موثوقية المزود." 
        : "Merci ! Évaluation enregistrée avec succès.",
      "fa-award"
    );
  });
}

function openRatingModal() {
  SoundFX.playTap();
  const modal = document.getElementById("ratingModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }
}

// ==========================================
// 15. DESKTOP DOCK (Presentation Modes)
// ==========================================
function initDesktopDock() {
  const frame = document.getElementById("phoneFrame");
  const btnPhone = document.getElementById("btnPhoneView");
  const btnFull = document.getElementById("btnFullView");

  btnPhone?.addEventListener("click", () => {
    SoundFX.playTap();
    btnPhone.classList.add("active");
    btnFull?.classList.remove("active");
    frame?.classList.remove("full-view-mode");
  });

  btnFull?.addEventListener("click", () => {
    SoundFX.playTap();
    btnFull.classList.add("active");
    btnPhone?.classList.remove("active");
    frame?.classList.add("full-view-mode");
  });
}

// ==========================================
// 16. DYNAMIC ISLAND & TOAST HELPERS
// ==========================================
function updateDynamicIsland(text) {
  const el = document.getElementById("islandText");
  const island = document.getElementById("dynamicIsland");
  if (!el || !island) return;

  island.style.transform = "scale(1.08)";
  el.textContent = text;
  setTimeout(() => {
    island.style.transform = "scale(1)";
  }, 350);
}

function showToast(message, iconClass = "fa-circle-info") {
  const hub = document.getElementById("toastHub");
  if (!hub) return;

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${escapeHtml(message)}</span>`;
  hub.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[m]);
}
