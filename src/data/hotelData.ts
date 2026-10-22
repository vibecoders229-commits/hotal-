import { RoomSuite, MenuItem, SpaTreatment, Testimonial } from '../types/hotel';

export const USD_TO_INR_RATE = 83;

export const HOTEL_IMAGES = {
  hero: '/src/assets/images/hero_luxury_hotel_1792644563650.jpg',
  suiteOcean: '/src/assets/images/room_luxury_suite_1792644564021.jpg',
  spa: '/src/assets/images/hotel_spa_wellness_1792644564341.jpg',
  dining: '/src/assets/images/hotel_fine_dining_1792644563916.jpg',
};

export const ROOMS_DATA: RoomSuite[] = [
  {
    id: 'royal-ocean-suite',
    title: {
      en: 'Royal Azure Oceanfront Suite',
      hi: 'रॉयल अज़्योर ओशनफ्रंट सुइट',
    },
    category: 'ocean',
    tagline: {
      en: 'Panoramic sapphire sea views with private sunset balcony and outdoor jacuzzi',
      hi: 'निजी सूर्यास्त बालकनी और आउटडोर जकूज़ी के साथ मनोरम समुद्र दृश्य',
    },
    description: {
      en: 'Perched over the turquoise coastline, this palatial suite features floor-to-ceiling glass doors, hand-carved Italian marble bathrooms, dedicated 24-hour butler service, and an open-air heated plunge tub.',
      hi: 'नीले समुद्र तट पर स्थित यह आलीशान सुइट फर्श से छत तक कांच के दरवाजे, इटैलियन संगमरमर का स्नानघर, 24 घंटे समर्पित बटलर सेवा और निजी हॉट टब की सुविधा देता है।',
    },
    priceUsd: 1250,
    sizeSqM: 140,
    sizeSqFt: 1500,
    maxGuests: 3,
    bedType: {
      en: '1 California Emperor Bed',
      hi: '1 कैलिफ़ोर्निया एम्परर बेड',
    },
    view: {
      en: 'Direct Sapphire Ocean View',
      hi: 'प्रत्यक्ष समुद्र दृश्य',
    },
    image: HOTEL_IMAGES.suiteOcean,
    galleryImages: [
      HOTEL_IMAGES.suiteOcean,
      HOTEL_IMAGES.hero,
      HOTEL_IMAGES.spa,
    ],
    keyFeatures: {
      en: [
        'Private heated plunge pool & sundeck',
        '24/7 dedicated private butler',
        'Sub-Zero private sommelier wine cellar',
        'Complimentary bottle of Laurent-Perrier Champagne',
        'Freestanding Italian marble soaking bathtub',
      ],
      hi: [
        'निजी हीटेड प्लंज पूल और सनडेक',
        '24/7 समर्पित पर्सनल बटलर',
        'प्राइवेट वाइन सेलर और बार',
        'मुफ्त शैम्पेन स्वागत उपहार',
        'भव्य इटैलियन मार्बल सोकिंग बाथटब',
      ],
    },
    detailedAmenities: {
      en: [
        'Bang & Olufsen Beosound sound system',
        'Egyptian cotton 800-thread-count bed linen',
        'Bespoke Acqua di Parma bathroom toiletries',
        'Complimentary high-speed fiber Wi-Fi 6',
        'Dyson Supersonic hair care station',
        'Custom pillow concierge menu (6 choices)',
        'Private airport chauffeur in Mercedes S-Class',
      ],
      hi: [
        'बैंग एंड ओल्फसेन साउंड सिस्टम',
        'मिस्र की बेहतरीन कॉटन लिनन बेडशीट',
        'लक्जरी डिश शावर और सुगंधित प्रसाधन',
        'अल्ट्रा हाई-स्पीड वाई-फाई',
        'डायसन हेयर केयर स्टेशन',
        'कस्टम पिलो मेनू (6 विकल्प)',
        'हवाई अड्डे से मर्सिडीज कार पिकअप',
      ],
    },
  },
  {
    id: 'imperial-penthouse-villa',
    title: {
      en: 'Imperial Penthouse Bayview Villa',
      hi: 'इंपीरियल पेंटहाउस बे-व्यू विला',
    },
    category: 'villa',
    tagline: {
      en: 'The pinnacle of private luxury with 360° coastal panoramas and private rooftop',
      hi: '360° तटीय दृश्य और निजी छत के साथ अद्वितीय शाही विलासिता',
    },
    description: {
      en: 'Occupying the entire top tier of the southern cliffside, the Imperial Penthouse delivers unmatched sanctuary. Features dual master bedrooms, private cinema room, infinity cantilevered pool, and an outdoor fireplace lounge.',
      hi: 'क्लिफसाइड के शीर्ष पर स्थित, यह पेंटहाउस दो मास्टर बेडरूम, एक निजी सिनेमा लाउंज, इन्फिनिटी पूल और ओपन-एयर फायरप्लेस के साथ सर्वोच्च एकांत प्रदान करता है।',
    },
    priceUsd: 2400,
    sizeSqM: 280,
    sizeSqFt: 3010,
    maxGuests: 5,
    bedType: {
      en: '2 Master King Beds',
      hi: '2 मास्टर किंग बेड',
    },
    view: {
      en: '360° Coastal Bay & Cliffside',
      hi: '360° तटीय खाड़ी और चट्टान दृश्य',
    },
    image: HOTEL_IMAGES.hero,
    galleryImages: [
      HOTEL_IMAGES.hero,
      HOTEL_IMAGES.suiteOcean,
      HOTEL_IMAGES.dining,
    ],
    keyFeatures: {
      en: [
        'Cantilevered private infinity edge pool',
        'Personal Michelin-trained private chef on call',
        'Private rooftop observatory & stargazing telescope',
        'Direct private elevator entrance with biometric security',
        'Custom wellness sauna & steam retreat inside villa',
      ],
      hi: [
        'निजी इन्फिनिटी एज पूल',
        'व्यक्तिगत निजी शेफ ऑन-कॉल',
        'निजी रूफटॉप वेधशाला और दूरबीन',
        'सीधा निजी लिफ्ट प्रवेश द्वार',
        'विला के अंदर कस्टम स्टीम और सौना',
      ],
    },
    detailedAmenities: {
      en: [
        'Grand Steinway & Sons Spirio player piano',
        'Private sommelier tasting sessions included',
        'Daily 60-minute in-villa restorative massage',
        'Dedicated luxury Maybach transport throughout stay',
        'Uncapped premium bar and caviar pantry',
      ],
      hi: [
        'स्टीनवे एंड संस स्पिरियो ग्रैंड पियानो',
        'निजी सोमेलियर वाइन टेस्टिंग शामिल',
        'प्रतिदिन 60 मिनट की इन-विला स्पा मालिश',
        'मायबैक लक्जरी कार परिवहन की सुविधा',
        'प्रीमियम ड्रिंक्स और कैवियार बार',
      ],
    },
  },
  {
    id: 'emerald-garden-villa',
    title: {
      en: 'Emerald Garden Sanctuary Villa',
      hi: 'एमराल्ड गार्डन सैंक्चुअरी विला',
    },
    category: 'villa',
    tagline: {
      en: 'Enclosed tropical flora courtyard with stone outdoor rainforest shower',
      hi: 'पत्थर के ओपन-एयर रेनफॉरेस्ट शावर के साथ हरा-भरा उष्णकटिबंधीय विला',
    },
    description: {
      en: 'A private sanctuary surrounded by fragrant jasmine and swaying palms. Designed with organic limestone, teak accents, and indoor-outdoor living spaces that flow into a sun-drenched private courtyard.',
      hi: 'चमेली और ताड़ के पेड़ों से घिरा एकांत विला। चूना पत्थर, सागौन की लकड़ी और प्राकृतिक प्रकाश से सुसज्जित निजी शांति स्थल।',
    },
    priceUsd: 850,
    sizeSqM: 110,
    sizeSqFt: 1180,
    maxGuests: 2,
    bedType: {
      en: '1 Handcrafted Teak King Bed',
      hi: '1 हस्तनिर्मित सागौन किंग बेड',
    },
    view: {
      en: 'Private Tropical Botanical Garden',
      hi: 'निजी बॉटनिकल गार्डन दृश्य',
    },
    image: HOTEL_IMAGES.spa,
    galleryImages: [
      HOTEL_IMAGES.spa,
      HOTEL_IMAGES.suiteOcean,
      HOTEL_IMAGES.hero,
    ],
    keyFeatures: {
      en: [
        'Private landscaped courtyard garden & daybeds',
        'Sculpted outdoor stone soaking tub under stars',
        'Daily morning yoga session with private guru',
        'Aromatherapy turndown scent bespoke bar',
        'Gourmet artisanal breakfast delivered in-garden',
      ],
      hi: [
        'निजी हरा-भरा बगीचा और डेबेड्स',
        'तारों के नीचे नक्काशीदार पत्थर का बाथटब',
        'निजी गुरु के साथ सुबह का योग सत्र',
        'अरोमाथेरेपी खुशबू का व्यक्तिगत चयन',
        'बगीचे में ताज़ा स्वादिष्ट नाश्ता',
      ],
    },
    detailedAmenities: {
      en: [
        'Organic linen kimono bathrobes & slippers',
        'Nespresso Creatista espresso bar with specialty pods',
        'Bose portable waterproof speaker',
        'Lush private outdoor relaxation hammock',
        'Botanical herb garden for fresh tea infusion',
      ],
      hi: [
        'ऑर्गेनिक लिनन किमोनो बाथरोब',
        'नेस्प्रेस्सो स्पेशल एस्प्रेसो बार',
        'बोस वाटरप्रूफ पोर्टेबल स्पीकर',
        'निजी विश्राम झूला',
        'ताज़ा हर्बल चाय के लिए बगान',
      ],
    },
  },
  {
    id: 'signature-azure-deluxe',
    title: {
      en: 'Signature Azure Deluxe Room',
      hi: 'सिग्नेचर अज़्योर डीलक्स रूम',
    },
    category: 'deluxe',
    tagline: {
      en: 'Sophisticated modern coastal room with expansive private sea-facing terrace',
      hi: 'विशाल समुद्र-उन्मुख बालकनी के साथ आधुनिक और आरामदायक कमरा',
    },
    description: {
      en: 'Elegantly proportioned with natural oak, custom brass fittings, and soothing oceanic tones. Step onto your spacious private terrace to greet sunrise over the Mediterranean-inspired bay.',
      hi: 'प्राकृतिक ओक की लकड़ी, पीतल की फिटिंग्स और सुखदायक समुद्री रंगों से सजा। सुबह की पहली किरण का आनंद लेने के लिए विशाल बालकनी।',
    },
    priceUsd: 620,
    sizeSqM: 75,
    sizeSqFt: 810,
    maxGuests: 2,
    bedType: {
      en: '1 Plush King Bed or 2 Twins',
      hi: '1 आलीशान किंग बेड या 2 ट्विन बेड',
    },
    view: {
      en: 'Azure Bay & Marina View',
      hi: 'अज़्योर बे और मरीना का दृश्य',
    },
    image: HOTEL_IMAGES.dining,
    galleryImages: [
      HOTEL_IMAGES.dining,
      HOTEL_IMAGES.suiteOcean,
      HOTEL_IMAGES.hero,
    ],
    keyFeatures: {
      en: [
        'Deep soaking marble tub with ocean horizon glass',
        'Private furnished balcony with breakfast table',
        'Artisanal mini-bar with bespoke local delicacies',
        'Interactive 4K OLED Smart TV with surround audio',
        'Complimentary access to Azure thermal baths & gym',
      ],
      hi: [
        'समुद्री दृश्य वाला संगमरमर का गहरा बाथटब',
        'नाश्ते की मेज के साथ सुसज्जित बालकनी',
        'स्थानीय स्वादिष्ट व्यंजनों से भरा मिनी-बार',
        '4K ओएलईडी स्मार्ट टीवी',
        'थर्मल बाथ और फिटनेस क्लब में मुफ्त प्रवेश',
      ],
    },
    detailedAmenities: {
      en: [
        'Individual climate control with quiet air filtration',
        'In-room safe with interior laptop charger',
        'Twice-daily housekeeping with evening gift',
        'Complimentary valet parking & shoe shine',
        'High thread-count satin sateen bed sheets',
      ],
      hi: [
        'शांत एयर फिल्ट्रेशन और तापमान नियंत्रण',
        'लैपटॉप चार्जर वाली इलेक्ट्रॉनिक तिजोरी',
        'दिन में दो बार हाउसकीपिंग सेवा',
        'मुफ्त वैले पार्किंग और शू पॉलिश',
        'मुलायम साटन कॉटन चादरें',
      ],
    },
  },
];

export const ADDON_SERVICES = [
  {
    id: 'airport-transfer',
    name: {
      en: 'Private Rolls-Royce / Maybach Airport Transfer',
      hi: 'निजी रोल्स-रॉयस / मायबैक एयरपोर्ट पिकअप',
    },
    description: {
      en: 'Chauffeured luxury sedan with chilled refreshments, cold towels, and Wi-Fi',
      hi: 'सर्द तौलिये, शीतल पेय और वाई-फाई से सुसज्जित आलीशान कार पिकअप',
    },
    priceUsd: 180,
  },
  {
    id: 'champagne-welcome',
    name: {
      en: 'Dom Pérignon Vintage & Caviar Welcome',
      hi: 'डोम पेरिग्नन शैम्पेन और कैवियार स्वागत',
    },
    description: {
      en: 'Chilled bottle of vintage Dom Pérignon paired with Royal Oscietra Caviar on arrival',
      hi: 'कमरे में आगमन पर ठंडी विंटेज शैम्पेन और ऑसिएत्रा कैवियार का स्वागत',
    },
    priceUsd: 240,
  },
  {
    id: 'couples-spa',
    name: {
      en: 'Couples 90-Min Ayurvedic Spa Treatment',
      hi: 'जोड़ों के लिए 90-मिनट का आयुर्वेदिक स्पा',
    },
    description: {
      en: 'Full-body restorative botanical oil massage, herbal steam, and sound bowl healing',
      hi: 'हर्बल तेल मालिश, औषधीय भाप स्नान और ध्यान ध्वनि चिकित्सा',
    },
    priceUsd: 350,
  },
  {
    id: 'daily-breakfast',
    name: {
      en: 'Daily Gourmet Champagne Breakfast Buffet',
      hi: 'दैनिक शैम्पेन गॉरमे बुफे नाश्ता',
    },
    description: {
      en: 'Unlimited à la carte and live artisanal stations served seaside or in-suite',
      hi: 'समुद्र किनारे या कमरे में असीमित स्वादिष्ट व्यंजनों का नाश्ता',
    },
    priceUsd: 65, // per guest per day
  },
];

export const DINING_MENUS: {
  category: 'degustation' | 'coastal' | 'cocktails';
  title: { en: string; hi: string };
  subtitle: { en: string; hi: string };
  items: MenuItem[];
}[] = [
  {
    category: 'degustation',
    title: { en: 'Grand Degustation', hi: 'ग्रैंड डिगस्टेशन' },
    subtitle: {
      en: 'Seven-course tasting curated by Michelin-Starred Chef Laurent Vane',
      hi: 'मिशेलिन-स्टार शेफ लॉरेंट वेन द्वारा तैयार 7-कोर्स अनुभव',
    },
    items: [
      {
        name: { en: 'Imperial Oscietra Caviar', hi: 'शाही ऑसिएत्रा कैवियार' },
        description: {
          en: 'Buckwheat blini, crème fraîche, cured egg yolk, fine chive oil',
          hi: 'बकवीट ब्लिनी, क्रीम फ्रेश, एग योक और हर्ब ऑयल',
        },
        priceUsd: 78,
        dietary: 'Signature',
      },
      {
        name: { en: 'Wild Hokkaido Scallops', hi: 'वाइल्ड होक्काइडो स्कैलॉप्स' },
        description: {
          en: 'Pan-seared, cauliflower velouté, black winter truffle, hazelnut crisp',
          hi: 'पैन-सियर्ड स्कैलॉप्स, फूलगोभी वेलोउटे और ब्लैक ट्रफल',
        },
        priceUsd: 64,
        dietary: 'Gluten-Free',
      },
      {
        name: { en: 'A5 Miyazaki Wagyu Striploin', hi: 'A5 मियाज़ाकी वाग्यू बीफ/मशरूम' },
        description: {
          en: 'Smoked shallot puree, morel mushroom ragout, bone marrow reduction',
          hi: 'स्मोक्ड शैलोट प्यूरी, मोरेल मशरूम और रिच रिडक्शन',
        },
        priceUsd: 110,
        dietary: 'Chef Choice',
      },
      {
        name: { en: 'Valrhona Grand Cru Soufflé', hi: 'वाल्र्होना चॉकलेट सूफ्ले' },
        description: {
          en: 'Dark chocolate 70%, Tahitian vanilla bean bean gelato, gold dust',
          hi: '70% डार्क चॉकलेट, ताहिती वेनिला जेलाटो और सोने की चमक',
        },
        priceUsd: 32,
        dietary: 'Vegetarian',
      },
    ],
  },
  {
    category: 'coastal',
    title: { en: 'Coastal & Terrace', hi: 'कोस्टल एवं टेरेस मेनू' },
    subtitle: {
      en: 'Fresh Mediterranean catch and garden-harvested organic ingredients',
      hi: 'ताज़ी समुद्री मछलियाँ और बगान से चुनी गई जैविक सामग्रियां',
    },
    items: [
      {
        name: { en: 'Burrata di Puglia', hi: 'बुर्राटा डि पुगलिया' },
        description: {
          en: 'Heirloom tomatoes, compressed peach, aged Modena balsamic, pine nuts',
          hi: 'ताज़ा टमाटर, आड़ू, मोडेना बाल्समिक और पाइन नट्स',
        },
        priceUsd: 36,
        dietary: 'Vegetarian',
      },
      {
        name: { en: 'Charred Mediterranean Octopus', hi: 'चारर्ड मेडिटेरेनियन ऑक्टोपस' },
        description: {
          en: 'Fingerling potatoes, smoked pimentón emulsion, caper berries',
          hi: 'पोटैटो, स्मोक्ड लाल शिमला मिर्च इमल्शन और केपर्स',
        },
        priceUsd: 46,
        dietary: 'Seafood',
      },
      {
        name: { en: 'Lobster & Saffron Risotto', hi: 'लॉबस्टर और केसर रिसोट्टो' },
        description: {
          en: 'Carnaroli rice, poached Maine lobster tail, Kashmiri saffron, Parmigiano 36m',
          hi: 'कार्नारोली चावल, लॉबस्टर टेल, कश्मीरी केसर और 36 महीने का परमेसन',
        },
        priceUsd: 58,
        dietary: 'Signature',
      },
      {
        name: { en: 'Wood-Fired Branzino', hi: 'वुड-फायर्ड ब्रांज़िनो मछली' },
        description: {
          en: 'Whole sea bass roasted with rosemary, lemon confit, olive tapenade',
          hi: 'रोज़मेरी, नींबू और जैतून के साथ भुनी हुई साबुत सी बास',
        },
        priceUsd: 52,
        dietary: 'Gluten-Free',
      },
    ],
  },
  {
    category: 'cocktails',
    title: { en: 'Artisan Cellar & Bar', hi: 'कॉकटेल एवं वाइन बार' },
    subtitle: {
      en: 'Rare spirits, botanical infusions, and vintage reserve vintages',
      hi: 'दुर्लभ मदिरा, हर्बल सुगंध और विंटेज रिज़र्व ड्रिंक्स',
    },
    items: [
      {
        name: { en: 'The Azure Golden Sunset', hi: 'द अज़्योर गोल्डन सनसेट' },
        description: {
          en: 'Macallan 12 Double Cask, bergamot honey, angostura bitters, 24k gold leaf',
          hi: 'मैलकन 12 विस्की, बर्गमोट शहद, बिटर्स और 24 कैरेट स्वर्ण पत्ती',
        },
        priceUsd: 34,
        dietary: 'House Special',
      },
      {
        name: { en: 'Saffron & Botanist Gin Tonic', hi: 'केसर और बोटैनिस्ट जिन टॉनिक' },
        description: {
          en: 'Islay botanical gin, infused Spanish saffron threads, fever-tree elderflower',
          hi: 'बॉटनिकल जिन, कश्मीरी केसर के धागे और एल्डरफ्लावर टॉनिक',
        },
        priceUsd: 28,
        dietary: 'Aromatic',
      },
      {
        name: { en: 'Smoked Fig Old Fashioned', hi: 'स्मोक्ड फिग ओल्ड फैशन्ड' },
        description: {
          en: 'Rye whiskey, charred mission fig syrup, walnut bitters, applewood smoke',
          hi: 'राई व्हिस्की, भुने हुए अंजीर का सिरप, अखरोट बिटर्स और एपलवुड धुआं',
        },
        priceUsd: 30,
        dietary: 'Signature',
      },
    ],
  },
];

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
    id: 'ocean-stone-therapy',
    name: {
      en: 'Deep Ocean Basalt Stone Therapy',
      hi: 'डीप ओशन बेसाल्ट स्टोन थेरेपी',
    },
    duration: '90 Minutes',
    priceUsd: 280,
    description: {
      en: 'Heated volcanic ocean basalt stones aligned with organic cold-pressed sea-kelp oil to dissolve deep tension and restore circulation.',
      hi: 'गर्म ज्वालामुखी पत्थरों और समुद्री केल्प तेल से मांसपेशियों के तनाव को दूर करने वाली गहरी शांतिदायक मालिश।',
    },
  },
  {
    id: 'ayurvedic-abhyanga',
    name: {
      en: 'Royal Ayurvedic Abhyanga & Shirodhara',
      hi: 'शाही आयुर्वेदिक अभ्यंग एवं शिरोधारा',
    },
    duration: '120 Minutes',
    priceUsd: 360,
    description: {
      en: 'Synchronized warm herbal oil full-body therapy followed by a continuous soothing stream of medicated oil poured on the forehead (third eye).',
      hi: 'दो थेरेपिस्ट द्वारा गर्म औषधीय तेल से पूरे शरीर की मालिश और माथे पर सुखदायक तेल की अविरल धारा (शिरोधारा)।',
    },
  },
  {
    id: 'pearl-radiance-facial',
    name: {
      en: 'Crushed Marine Pearl Radiance Facial',
      hi: 'क्रश्ड मरीन पर्ल रेडियंस फेशियल',
    },
    duration: '75 Minutes',
    priceUsd: 240,
    description: {
      en: 'Micro-exfoliation with genuine crushed South Sea pearl powder, marine collagen infusion, and lymphatic cooling jade roller sculpting.',
      hi: 'सच्चे मोतियों के चूर्ण से त्वचा की सफाई, मरीन कोलेजन और जेड रोलर से चेहरे की चमक लौटाने वाला फेशियल।',
    },
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'rev-1',
    guestName: 'Eleanor Vance-Sterling',
    guestLocation: 'London, United Kingdom',
    suiteStayed: {
      en: 'Royal Azure Oceanfront Suite',
      hi: 'रॉयल अज़्योर ओशनफ्रंट सुइट',
    },
    date: 'February 2026',
    rating: 5,
    review: {
      en: 'From the private chauffeur awaiting us at the tarmac to the sunset champagne on our terrace, the attention to detail is unmatched anywhere in the world. The dining was utterly sublime.',
      hi: 'हवाई अड्डे से पर्सनल पिकअप से लेकर हमारी बालकनी में सूर्यास्त शैम्पेन तक, यहाँ का आतिथ्य सत्कार दुनिया में सबसे बेमिसाल है। भोजन तो अविश्वसनीय रूप से स्वादिष्ट था।',
    },
  },
  {
    id: 'rev-2',
    guestName: 'Vikram & Radhika Singhania',
    guestLocation: 'Mumbai & New Delhi, India',
    suiteStayed: {
      en: 'Imperial Penthouse Bayview Villa',
      hi: 'इंपीरियल पेंटहाउस बे-व्यू विला',
    },
    date: 'January 2026',
    rating: 5,
    review: {
      en: 'We celebrated our 20th wedding anniversary here. The private rooftop pool overlooking the sapphire coast gave us unforgettable memories. Staff anticipated every need with genuine warmth.',
      hi: 'हमने अपनी 20वीं शादी की सालगिरह यहाँ मनाई। नीले समंदर के नज़ारे वाले निजी रूफटॉप पूल ने हमारी छुट्टियों को हमेशा के लिए यादगार बना दिया। यहाँ का स्टाफ बेहद विनम्र है।',
    },
  },
  {
    id: 'rev-3',
    guestName: 'Dr. Jean-Luc Moreau',
    guestLocation: 'Geneva, Switzerland',
    suiteStayed: {
      en: 'Emerald Garden Sanctuary Villa',
      hi: 'एमराल्ड गार्डन सैंक्चुअरी विला',
    },
    date: 'March 2026',
    rating: 5,
    review: {
      en: 'A sanctuary in every sense. The SOMA Ayurvedic spa eliminated weeks of executive fatigue in two sessions. The silence at night, broken only by gentle waves, is pure restoration.',
      hi: 'सच्चे मायनों में शांति का धाम। सोमा आयुर्वेदिक स्पा ने मेरी सारी थकान कुछ ही समय में मिटा दी। रात में केवल लहरों की धीमी आवाज़ सुनना अद्भुत अनुभव था।',
    },
  },
];

export const HOTEL_FAQS = [
  {
    question: {
      en: 'What are the check-in and check-out times?',
      hi: 'चेक-इन और चेक-आउट का समय क्या है?',
    },
    answer: {
      en: 'Check-in begins at 3:00 PM, and check-out is at 12:00 PM. Early check-in and guaranteed late check-out (up to 4:00 PM) are available upon request and subject to suite availability.',
      hi: 'चेक-इन का समय दोपहर 3:00 बजे से है और चेक-आउट दोपहर 12:00 बजे तक है। उपलब्धता के आधार पर अर्ली चेक-इन और लेट चेक-आउट की सुविधा प्रदान की जाती है।',
    },
  },
  {
    question: {
      en: 'How do airport transfers work?',
      hi: 'एयरपोर्ट पिकअप और ड्रॉप की क्या सुविधा है?',
    },
    answer: {
      en: 'We offer private luxury transfers in our fleet of Mercedes S-Class, Maybach, and Range Rover vehicles, with VIP tarmac greeting. Helicopter transfer directly to our resort helipad is also available upon inquiry.',
      hi: 'हम मर्सिडीज एस-क्लास और मायबैक कारों से सीधे हवाई अड्डे से पिकअप प्रदान करते हैं। इसके अलावा रिज़ॉर्ट के हेलीपैड पर प्राइवेट हेलिकॉप्टर लैंडिंग की सुविधा भी उपलब्ध है।',
    },
  },
  {
    question: {
      en: 'What is the resort cancellation policy?',
      hi: 'बुकिंग रद्द करने (कैंसिलेशन) की क्या नीति है?',
    },
    answer: {
      en: 'Reservations can be modified or cancelled free of charge up to 72 hours prior to scheduled arrival date. For villas and penthouses, a 7-day complimentary cancellation window applies.',
      hi: 'आगमन की तारीख से 72 घंटे पहले तक आप अपनी बुकिंग बिना किसी शुल्क के बदल या रद्द कर सकते हैं। विला और पेंटहाउस के लिए 7 दिन की कैंसिलेशन विंडो है।',
    },
  },
  {
    question: {
      en: 'Are children and families welcome?',
      hi: 'क्या बच्चों और परिवारों के लिए विशेष सुविधाएं हैं?',
    },
    answer: {
      en: 'Yes. The Grand Azure offers dedicated Family Suites, a curated Kids Discovery Nature Club, certified babysitting services, and tailored children dining menus.',
      hi: 'जी हाँ, द ग्रैंड अज़्योर में पारिवारिक सुइट्स, बच्चों के लिए किड्स क्लब, पेशेवर बेबीसिटिंग और बच्चों के अनुकूल मेनू उपलब्ध हैं।',
    },
  },
];
