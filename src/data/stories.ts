export interface Story {
  id: string;
  epic: "ramayana" | "mahabharata";
  title: string;
  titleHindi?: string;
  titleTelugu?: string;
  summary: string;
  summaryHindi?: string;
  summaryTelugu?: string;
  content: string;
  contentHindi?: string;
  contentTelugu?: string;
  keyElements: string[];
  keyElementsHindi?: string[];
  keyElementsTelugu?: string[];
  moral: string;
  moralHindi?: string;
  moralTelugu?: string;
  audioEnglish?: string;
  audioHindi?: string;
  audioTelugu?: string;
  image: string;
  chapter: number;
}

export const ramayanaStories: Story[] = [
  {
    id: "bala-kanda",
    epic: "ramayana",
    title: "Bala Kanda: The Childhood of Rama",
    titleHindi: "बालकांड: राम का बचपन",
    titleTelugu: "బాల కాండ: రాముని బాల్యము",
    summary: "Bala Kanda narrates the divine birth of Lord Rama, his education, early heroism, and marriage to Sita.",
    summaryHindi: "बालकांड में भगवान राम के दिव्य जन्म, शिक्षा, प्रारंभिक पराक्रम और सीता से विवाह की कथा है।",
    summaryTelugu: "బాలకాండలో శ్రీరాముని దివ్య జననం, విద్య, ప్రారంభ వీరత్వం మరియు సీతతో వివాహం కథనం ఉంది.",
    content: `In the sacred city of Ayodhya, situated on the banks of the holy river Sarayu, ruled the illustrious king Dasharatha of the Ikshvaku dynasty. His queens—Kaushalya, Kaikeyi, and Sumitra—adorned the palace of Ayodhya with grace and devotion. Though prosperous and beloved by his people, Dasharatha was tormented by the sorrow of being childless.

Seeking divine intervention, King Dasharatha performed the Putrakameshti Yagna under the guidance of Sage Rishyasringa, assisted by venerable sages such as Vasishta. From the sacred fire emerged a celestial being bearing divine payasam. Dasharatha distributed it among his queens—Kaushalya, Kaikeyi, and Sumitra.

In due time, Queen Kaushalya gave birth to Lord Rama, an incarnation of Lord Vishnu. Queen Kaikeyi bore Bharata, while Queen Sumitra gave birth to the twins Lakshmana and Shatrughna. The palace of Ayodhya resounded with joy, and celestial beings showered flowers from the heavens.

Rama grew under the guidance of Sage Vasishta, mastering the Vedas, Dhanurveda, ethics, and royal duties. His brothers—Lakshmana, Bharata, and Shatrughna—were bound to him by love and loyalty, with Lakshmana inseparable from Rama.

Rama and the Forest Journey with Vishwamitra

One day, Sage Vishwamitra arrived from the forests near Siddhashrama, troubled by demons—Tataka, Subahu, and Maricha—who desecrated his yajnas. Despite Dasharatha's hesitation, Rama and Lakshmana accompanied the sage.

In the dense forests near the Malada and Karusha regions, Rama slew the demoness Tataka and defeated Subahu while driving Maricha into the ocean with the Manavastra. Vishwamitra bestowed divine astras upon Rama, including the Brahmastra and Varunastra.

Marriage to Sita in Mithila

The journey continued to the kingdom of Mithila, ruled by the philosopher-king Janaka. In the grand palace, Janaka announced Sita's swayamvara, declaring that only one who could lift and string the mighty Pinaka bow of Lord Shiva would win her hand.

Kings and warriors failed, but Rama effortlessly lifted and broke the bow, causing thunderous echoes across Mithila. Sita garlanded Rama, and their divine union was celebrated. Lakshmana married Urmila, Bharata married Mandavi, and Shatrughna married Shrutakirti.

Return to Ayodhya

After blessings from sages and King Janaka, Rama, Sita, and Lakshmana returned to Ayodhya, welcomed by Dasharatha and the people with joy. Thus, Bala Kanda establishes Rama's divine origin, virtues, heroic deeds, and sacred marriage.`,
    contentHindi: `सरयू नदी के तट पर स्थित अयोध्या नगरी में इक्ष्वाकु वंश के प्रतापी राजा दशरथ राज्य करते थे। उनकी रानियाँ—कौशल्या, कैकेयी और सुमित्रा—राजमहल की शोभा थीं। संतानहीनता का दुःख राजा को व्यथित करता था।

ऋष्यशृंग के निर्देशन में पुत्रकामेष्टि यज्ञ किया गया। यज्ञ से प्राप्त दिव्य पायस से कौशल्या को राम, कैकेयी को भरत, और सुमित्रा को लक्ष्मण व शत्रुघ्न प्राप्त हुए।

वशिष्ठ मुनि के सान्निध्य में राम ने शास्त्र और धनुर्विद्या सीखी।

विश्वामित्र के साथ वनगमन

सिद्धाश्रम में यज्ञ रक्षा हेतु राम ने ताड़का, सुबाहु का वध किया और मारीच को समुद्र में फेंका।

मिथिला में सीता स्वयंवर

राजा जनक के दरबार में शिव धनुष भंग कर राम ने सीता से विवाह किया। चारों भाइयों का विवाह सम्पन्न हुआ।

अयोध्या वापसी के साथ बालकांड पूर्ण होता है।`,
    contentTelugu: `సరయు నది తీరంలో ఉన్న పవిత్ర నగరం అయోధ్యలో ఇక్ష్వాకు వంశానికి చెందిన దశరథ మహారాజు పాలన సాగించేవాడు। ఆయన రాణులు—కౌసల్య, కైకేయి, సుమిత్ర—అయోధ్య మహాలయాన్ని అలంకరించేవారు। రాజ్యం సుభిక్షంగా ఉన్నప్పటికీ సంతానం లేనందున దశరథుడు తీవ్ర దుఃఖంలో ఉండేవాడు।

ఋష్యశృంగ మహర్షి నేతృత్వంలో పుత్రకామేష్టి యజ్ఞం నిర్వహించబడింది। అగ్నిలో నుంచి దివ్య పాయసం వెలువడగా, దానిని రాణులకు పంచారు। కౌసల్య శ్రీరాముని, కైకేయి భరతుని, సుమిత్ర లక్ష్మణుడు మరియు శత్రుఘ్నుడిని కనింది।

వశిష్ఠ మహర్షి ఆశ్రమంలో రాముడు వేదాలు, ధనుర్విద్య, రాజధర్మం నేర్చుకున్నాడు। లక్ష్మణుడు ఎప్పుడూ రాముని వెంట ఉండేవాడు।

విశ్వామిత్రుడితో అరణ్య ప్రయాణం

సిద్ధాశ్రమం వద్ద యజ్ఞాలను ధ్వంసం చేస్తున్న తాటక, సుబాహు, మారీచులను సంహరించేందుకు విశ్వామిత్రుడు రామలక్ష్మణులను తీసుకెళ్లాడు। రాముడు తాటకను వధించి, సుబాహుని సంహరించి, మారీచుడిని సముద్రంలోకి విసిరాడు।

మిథిలాలో సీతా స్వయంవరం

మిథిలా రాజు జనకుడు ఏర్పాటు చేసిన స్వయంవరంలో రాముడు శివధనుస్సును విరిచి సీతను వివాహం చేసుకున్నాడు। లక్ష్మణుడు ఉర్మిళను, భరతుడు మాండవిని, శత్రుఘ్నుడు శ్రుతకీర్తిని వివాహం చేసుకున్నారు।

అయోధ్యకు తిరుగు ప్రయాణంతో బాలకాండ ముగుస్తుంది।`,
    keyElements: [
      "Ayodhya",
      "River Sarayu",
      "Ikshvaku Dynasty",
      "Sage Rishyasringa",
      "Sage Vishwamitra",
      "Tataka, Subahu, Maricha",
      "Mithila",
      "King Janaka",
      "Shiva Dhanush (Pinaka)"
    ],
    keyElementsHindi: [
      "अयोध्या",
      "सरयू नदी",
      "इक्ष्वाकु वंश",
      "ऋष्यशृंग",
      "विश्वामित्र",
      "ताटका, सुभाहु, मारीच",
      "मिथिला",
      "राजा जनक",
      "शिव धनुष (पिनाक)"
    ],
    keyElementsTelugu: [
      "అయోధ్య",
      "సరయు నది",
      "ఇక్ష్వాకు వంశం",
      "ఋష్యశృంగ",
      "విశ్వామిత్ర",
      "తాడక, సుబాహు, మారీచ",
      "మిత్రల",
      "రజ జనకుడు",
      "దైవీ ధనువు ( పినక)"
    ],
    moral: "Dharma, humility, and divine purpose guide righteous leadership.",
    moralHindi: "धर्म और विनम्रता ही सच्चे नेतृत्व का मार्ग हैं।",
    moralTelugu: "ధర్మం  మరియు వినమ్రత నిజమైన నాయకత్వానికి మూలం.",
    image: "/story-bala-kanda.jpg",
    chapter: 1
  },
  {
    id: "ayodhya-kanda",
    epic: "ramayana",
    title: "Ayodhya Kanda: The Exile of Rama",
    titleHindi: "अयोध्याकांड: राम का वनवास",
    titleTelugu: "అయోధ్య కాండ: రాముని వనవాసం",
    summary: "Ayodhya Kanda narrates the events leading to Rama's exile, Bharata's grief, and Rama's unwavering commitment to dharma.",
    summaryHindi: "अयोध्याकांड में राम के वनवास के कारण, भरत का शोक और राम का धर्म के प्रति अडिग समर्पण वर्णित है।",
    summaryTelugu: "అయోధ్య కాండలో రాముని వనవాసానికి కారణమైన సంఘటనలు, భరతుని దుఃఖం మరియు రాముని ధర్మపాలన గురించి వివరించబడింది.",
    content: `As Rama's virtues shone across Ayodhya, King Dasharatha resolved to crown him as Yuvaraja. Sage Vasishta prepared the coronation rites, and the city along the Sarayu brimmed with celebration.

However, Queen Kaikeyi, influenced by her maid Manthara, invoked two ancient boons granted during the battle against the Asuras. She demanded Bharata's coronation and Rama's fourteen-year exile to the Dandaka forest.

Bound by truth and royal honor, Dasharatha wept but consented. Rama accepted the decree with serenity, placing dharma above personal joy.

Rama's Departure from Ayodhya

Sita, daughter of King Janaka, refused to remain behind and chose exile as her sacred duty. Lakshmana, son of Sumitra, vowed to serve Rama in the forests. Clad in bark garments, the trio departed Ayodhya, crossing the Sarayu and entering the wilderness.

Overcome by grief, Dasharatha passed away remembering Rama.

Bharata at Chitrakuta

Returning from Kekaya, Bharata learned the truth and rushed to Chitrakuta with Shatrughna and Sage Vasishta. He pleaded with Rama to return. Rama refused, honoring his father's word.

Bharata placed Rama's sandals (Padukas) on the throne of Ayodhya and ruled from Nandigrama as Rama's regent, awaiting his return.

Thus, Ayodhya Kanda glorifies sacrifice, filial duty, and unwavering righteousness.`,
    contentHindi: `राम के राज्याभिषेक की तैयारी चल रही थी, पर मंथरा के बहकावे में आकर कैकेयी ने अपने वरदान माँग लिए।

रामा ने धर्म पालन करते हुए वनवास स्वीकार किया। सीता और लक्ष्मण उनके साथ गए। सरयू नदी पार कर वे वन गए।

पुत्र शोक में दशरथ का देहांत हो गया।

चित्रकूट में भरत

भरत ने राम से लौटने का आग्रह किया, पर राम ने पिता की आज्ञा का पालन किया।

भरत ने राम की पादुकाएँ सिंहासन पर रखकर नंदिग्राम से राज्य चलाया।`,
    contentTelugu: `అయోధ్యలో రాముని యువరాజుగా పట్టాభిషేకం చేయాలని దశరథుడు నిర్ణయించాడు। వశిష్ఠ మహర్షి ఆధ్వర్యంలో ఏర్పాట్లు జరుగుతున్న వేళ, మంథర ప్రభావంతో కైకేయి తన వరాలను కోరింది।

భరతుని రాజుగా చేయాలని, రాముని దండకారణ్యానికి పద్నాలుగు సంవత్సరాలు పంపాలని ఆమె ఆజ్ఞాపించింది। వాక్కుకు బద్ధుడైన దశరథుడు అంగీకరించాడు।

రాముడు ధర్మాన్ని శిరస్సు మీద పెట్టుకొని వనవాసాన్ని స్వీకరించాడు। సీత, లక్ష్మణులు ఆయనతో పాటు వెళ్లారు। సరయు నది దాటి వారు అడవిలోకి ప్రవేశించారు।

రామవియోగాన్ని తట్టుకోలేక దశరథుడు పరమపదించాడు।

చిత్రకూటంలో భరతుడు

కేకయదేశం నుంచి వచ్చిన భరతుడు చిత్రకూటంలో రాముని కలుసుకొని తిరిగి రావాలని వేడుకున్నాడు। రాముడు నిరాకరించాడు।

భరతుడు రాముని పాదుకలను సింహాసనంపై ఉంచి నందిగ్రామం నుంచి రాజ్యాన్ని పాలించాడు।`,
    keyElements: [
      "Ayodhya",
      "Sarayu River",
      "Kaikeyi",
      "Manthara",
      "Dandaka Forest",
      "Chitrakuta",
      "Nandigrama",
      "Padukas"
    ],
    keyElementsHindi: [
      "अयोध्या",
      "सरयू नदी",
      "कैकेयी",
      "मंथरा",
      "दंडकारण्य",
      "चित्रकूट",
      "नंदिग्राम",
      "पादुकाएँ"
    ],
    keyElementsTelugu: [
      "అయోధ్య",
      "సరయు నది",
      "కైకేయి",
      "మంతర",
      "దండకారణ్య",
      "చిత్రకూట",
      "నందిగ్రామ",
      "పాదుకల"
    ],
    moral: "Dharma upheld with sacrifice defines true kingship.",
    moralHindi: "त्याग सहित धर्म का पालन ही सच्चा राजधर्म है।",
    moralTelugu: "త్యాగంతో కూడిన ధర్మమే నిజమైన రాజధర్మం.",
    image: "/story-ayodhya-kanda.jpg",
    chapter: 2
  },
  {
    id: "aranya-kanda",
    epic: "ramayana",
    title: "Aranya Kanda: Trials in the Forest",
    titleHindi: "अरण्यकांड: वन की परीक्षाएँ",
    titleTelugu: "అరణ్య కాండ: అడవి పరీక్షలు",
    summary: "Aranya Kanda portrays Rama's life in the forest, his protection of sages, and the tragic abduction of Sita.",
    summaryHindi: "अरण्यकांड में राम का वन जीवन, ऋषियों की रक्षा और सीता का हरण वर्णित है।",
    summaryTelugu: "అరణ్య కాండలో రాముని అడవి జీవితం, మహర్షుల రక్షణ మరియు సీతాపహరణం గురించి వివరించబడింది.",
    content: `After leaving Chitrakuta, Rama, Sita, and Lakshmana journeyed deep into the vast Dandaka Forest. They resided near the holy ashramas of sages such as Atri, Anasuya, Sharabhanga, Sutikshna, and Agastya.

Rama destroyed the fearsome rakshasa Viradha and later annihilated Khara, Dushana, and Trishira. Fourteen thousand rakshasas perished in the fierce battle.

Surpanakha, sister of Ravana, approached Rama with lustful intentions. Rejected and humiliated, she flew to Lanka and inflamed Ravana's wrath. The demon king devised a plan to abduct Sita.

Maricha, transformed into a golden deer, lured Rama away. Ravana, disguised as an ascetic, kidnapped Sita. Despite Jatayu's heroic resistance, the vulture king fell wounded.

Sita was taken to Ashoka Vatika in Lanka, where she remained steadfast, awaiting Rama's rescue.`,
    contentHindi: `चित्रकूट छोड़कर राम, सीता और लक्ष्मण दंडकारण्य की गहराइयों में गए। वहां उन्होंने अत्रि, अनसूया, शरभंग जैसे ऋषियों के आश्रम में निवास किया।

राम ने विराध राक्षस का वध किया और खर-दूषण-त्रिशिरा को मार डाला।

शूर्पणखा ने राम के प्रति आसक्ति दिखाई। अपमानित होकर उसने रावण को भड़काया। रावण ने मारीच को स्वर्ण मृग बनाकर भेजा और सीता का हरण कर लिया।

जटायु ने वीरता से लड़ाई की पर घायल हो गए। सीता को अशोक वाटिका में रखा गया।`,
    contentTelugu: `చిత్రకూటం విడిచి రామ, సీత, లక్ష్మణులు దండకారణ్యంలోకి ప్రవేశించారు। అత్రి, అనసూయ, శరభంగ వంటి మహర్షుల ఆశ్రమాలలో నివసించారు।

రాముడు విరాధ రాక్షసుడిని సంహరించాడు। ఖర, దూషణ, త్రిశిరులను కూడా వధించాడు।

శూర్పణఖ రాముని పట్ల కామంతో చేరి అవమానించబడింది। రావణుడికి చెప్పి మారీచుడిని బంగారు లేడిగా పంపించి సీతను అపహరించాడు।

జటాయువు వీరోచితంగా పోరాడి గాయపడ్డాడు। సీత అశోక వనంలో బంధించబడింది।`,
    keyElements: [
      "Dandaka Forest",
      "Panchavati",
      "Surpanakha",
      "Ravana",
      "Maricha",
      "Golden Deer",
      "Jatayu",
      "Ashoka Vatika"
    ],
    moral: "Even in the darkest trials, dharma and devotion light the path.",
    moralHindi: "कठिनतम परीक्षाओं में भी धर्म और भक्ति मार्ग दिखाते हैं।",
    moralTelugu: "కఠినమైన పరీక్షల్లో కూడా ధర్మం మరియు భక్తి మార్గం చూపుతాయి.",
    image: "/story-aranya-kanda.jpg",
    chapter: 3
  }
];

export const mahabharataStories: Story[] = [
  {
    id: "adi-parva",
    epic: "mahabharata",
    title: "Adi Parva: The Beginning",
    titleHindi: "आदि पर्व: आरंभ",
    titleTelugu: "ఆది పర్వం: ప్రారంభం",
    summary: "Adi Parva introduces the origins of the Kuru dynasty, the birth of the Pandavas and Kauravas, and the seeds of the great conflict.",
    summaryHindi: "आदि पर्व में कुरु वंश का उद्भव, पांडव और कौरव जन्म, और महान संघर्ष के बीज वर्णित हैं।",
    summaryTelugu: "ఆది పర్వంలో కురు వంశ మూలాలు, పాండవులు మరియు కౌరవుల జన్మ, మహా సంఘర్షణ బీజాలు వివరించబడ్డాయి.",
    content: `The Mahabharata begins with the story of King Shantanu, who fell in love with Ganga. She bore him Devavrata, later known as Bhishma, who took a terrible vow of celibacy for his father's happiness.

Shantanu later married Satyavati, who bore Chitrangada and Vichitravirya. After their deaths, Sage Vyasa fathered Dhritarashtra (blind from birth), Pandu, and Vidura through Niyoga.

Dhritarashtra married Gandhari, who bore 100 sons—the Kauravas, led by Duryodhana. Pandu married Kunti and Madri. Through divine boons, Kunti bore Yudhishthira, Bhima, and Arjuna, while Madri bore Nakula and Sahadeva—the five Pandavas.

After Pandu's death, the princes were raised in Hastinapura under Bhishma's guidance. Trained by Drona and Kripacharya, rivalry grew between the cousins.

The house of lac (Lakshagriha) was built to trap the Pandavas. They escaped through a tunnel, beginning their life in exile.`,
    contentHindi: `महाभारत की कथा राजा शांतनु से आरंभ होती है। गंगा से उनके पुत्र देववर्त (भीष्म) का जन्म हुआ।

सत्यवती से चित्रांगद और विचित्रवीर्य का जन्म हुआ। व्यास ऋषि ने नियोग से धृतराष्ट्र, पांडु और विदुर को जन्म दिया।

धृतराष्ट्र और गांधारी से 100 कौरव, पांडु और कुंती-माद्री से पांच पांडव उत्पन्न हुए।

द्रोणाचार्य के मार्गदर्शन में राजकुमारों की शिक्षा हुई। कौरवों ने लाक्षागृह में पांडवों को मारने का षड्यंत्र किया पर वे बच निकले।`,
    contentTelugu: `మహాభారతం శాంతను మహారాజు కథతో ప్రారంభమవుతుంది। గంగ నుండి దేవవ్రతుడు (భీష్ముడు) జన్మించాడు।

సత్యవతి నుండి చిత్రాంగదుడు మరియు విచిత్రవీర్యుడు జన్మించారు। వ్యాస మహర్షి ద్వారా ధృతరాష్ట్రుడు, పాండు, విదురుడు జన్మించారు।

ధృతరాష్ట్రుడు మరియు గాంధారికి 100 మంది కౌరవులు, పాండు మరియు కుంతి-మాద్రికి 5 మంది పాండవులు జన్మించారు।

ద్రోణాచార్యుని దగ్గర శిక్షణ పొందారు। లక్క ఇల్లులో పాండవులను చంపే కుట్ర జరిగింది కానీ వారు తప్పించుకున్నారు।`,
    keyElements: [
      "Hastinapura",
      "Bhishma",
      "Vyasa",
      "Pandavas",
      "Kauravas",
      "Drona",
      "Lakshagriha"
    ],
    moral: "The seeds of conflict are often sown in jealousy and ambition.",
    moralHindi: "संघर्ष के बीज अक्सर ईर्ष्या और महत्वाकांक्षा में बोए जाते हैं।",
    moralTelugu: "సంఘర్షణ బీజాలు తరచుగా అసూయ మరియు ఆశల్లో వేయబడతాయి.",
    image: "/story-adi-parva.jpg",
    chapter: 1
  },
  {
    id: "sabha-parva",
    epic: "mahabharata",
    title: "Sabha Parva: The Game of Dice",
    titleHindi: "सभा पर्व: चौसर का खेल",
    titleTelugu: "సభా పర్వం: పాచికల ఆట",
    summary: "Sabha Parva describes the construction of Indraprastha, the game of dice, Draupadi's humiliation, and the Pandavas' exile.",
    summaryHindi: "सभा पर्व में इंद्रप्रस्थ निर्माण, चौसर का खेल, द्रौपदी का अपमान और पांडवों का वनवास वर्णित है।",
    summaryTelugu: "సభా పర్వంలో ఇంద్రప్రస్థ నిర్మాణం, పాచికల ఆట, ద్రౌపది అవమానం మరియు పాండవుల వనవాసం వివరించబడింది.",
    content: `After surviving Lakshagriha, the Pandavas married Draupadi and established their kingdom at Indraprastha. Maya built them a magnificent palace with magical illusions.

Yudhishthira performed the Rajasuya Yagna, establishing supremacy. This inflamed Duryodhana's jealousy.

Shakuni proposed a game of dice. Through deceit, he won everything from Yudhishthira—kingdom, brothers, himself, and finally Draupadi.

Draupadi was dragged to the court. Dushasana attempted to disrobe her, but Krishna's divine grace saved her honor with an endless sari.

The Pandavas lost a second game, resulting in 12 years of forest exile and one year of incognito living. Thus began their long exile.`,
    contentHindi: `लाक्षागृह से बचने के बाद पांडवों ने द्रौपदी से विवाह किया और इंद्रप्रस्थ में राज्य स्थापित किया।

राजसूय यज्ञ से दुर्योधन की ईर्ष्या बढ़ी।

शकुनि के छल से जुए में युधिष्ठिर सब हार गए। द्रौपदी को सभा में घसीटा गया। दुःशासन ने उनका चीरहरण करने का प्रयास किया पर कृष्ण की कृपा से वे सुरक्षित रहीं।

दूसरे जुए में पांडव हारे और 12 वर्ष वनवास व 1 वर्ष अज्ञातवास का दंड मिला।`,
    contentTelugu: `లక్క ఇంటి నుండి తప్పించుకున్న తరువాత పాండవులు ద్రౌపదిని వివాహం చేసుకొని ఇంద్రప్రస్థంలో రాజ్యాన్ని స్థాపించారు।

రాజసూయ యజ్ఞం దుర్యోధనుని అసూయను రేకెత్తించింది।

శకుని మోసంతో జూదంలో యుధిష్ఠిరుడు అన్నీ ఓడిపోయాడు। ద్రౌపదిని సభలోకి లాగారు। దుశ్శాసనుడు ఆమె వస్త్రాపహరణం చేయబోగా కృష్ణుని కృపతో ఆమె రక్షించబడింది।

రెండవ జూదంలో ఓడి 12 సంవత్సరాల వనవాసం మరియు 1 సంవత్సరం అజ్ఞాతవాసం శిక్ష వేయబడింది।`,
    keyElements: [
      "Indraprastha",
      "Rajasuya Yagna",
      "Game of Dice",
      "Shakuni",
      "Draupadi Vastraharan",
      "Krishna",
      "Exile"
    ],
    moral: "Unchecked gambling and pride lead to ruin.",
    moralHindi: "अनियंत्रित जुआ और अहंकार विनाश की ओर ले जाते हैं।",
    moralTelugu: "అదుపులేని జూదం మరియు అహంకారం నాశనానికి దారి తీస్తాయి.",
    image: "/story-sabha-parva.jpg",
    chapter: 2
  },
  {
    id: "bhagavad-gita",
    epic: "mahabharata",
    title: "Bhagavad Gita: The Divine Song",
    titleHindi: "भगवद्गीता: दिव्य गान",
    titleTelugu: "భగవద్గీత: దివ్య గానం",
    summary: "The Bhagavad Gita is Krishna's divine discourse to Arjuna on the battlefield, addressing duty, righteousness, and the nature of existence.",
    summaryHindi: "भगवद्गीता युद्धभूमि पर अर्जुन को कृष्ण का दिव्य उपदेश है जो कर्तव्य, धर्म और अस्तित्व की प्रकृति पर केंद्रित है।",
    summaryTelugu: "భగవద్గీత యుద్ధభూమిలో అర్జునునికి కృష్ణుని దివ్య ఉపదేశం, ధర్మం, కర్తవ్యం మరియు ఉనికి స్వభావం గురించి.",
    content: `On the battlefield of Kurukshetra, as the two armies faced each other, Arjuna asked Krishna to drive his chariot between them. Seeing his teachers, elders, and kinsmen on both sides, Arjuna was overcome with grief and refused to fight.

Krishna then delivered the Bhagavad Gita—700 verses of divine wisdom spanning 18 chapters.

He explained the immortality of the soul, the importance of dharma, and the paths of knowledge (Jnana Yoga), devotion (Bhakti Yoga), and action (Karma Yoga).

"You have the right to action, but not to its fruits. Do your duty without attachment."

Krishna revealed his cosmic form (Vishwarupa), showing Arjuna the entire universe within himself.

Enlightened by divine knowledge, Arjuna took up his Gandiva bow and prepared to fulfill his duty as a warrior.`,
    contentHindi: `कुरुक्षेत्र की युद्धभूमि में अर्जुन ने कृष्ण से रथ दोनों सेनाओं के बीच ले जाने को कहा। अपने गुरुओं और संबंधियों को देखकर वे दुखी हो गए और युद्ध करने से मना कर दिया।

कृष्ण ने तब भगवद्गीता का उपदेश दिया—18 अध्यायों में 700 श्लोक।

उन्होंने आत्मा की अमरता, धर्म का महत्व, ज्ञान योग, भक्ति योग और कर्म योग समझाया।

"कर्म करो, फल की चिंता मत करो।"

कृष्ण ने विश्वरूप दिखाया। ज्ञान प्राप्त कर अर्जुन युद्ध के लिए तैयार हो गए।`,
    contentTelugu: `కురుక్షేత్ర యుద్ధభూమిలో అర్జునుడు రథాన్ని రెండు సేనల మధ్య నిలపమని కృష్ణుని అడిగాడు। తన గురువులు మరియు బంధువులను చూసి దుఃఖంతో యుద్ధం చేయడానికి నిరాకరించాడు।

కృష్ణుడు భగవద్గీతను బోధించాడు—18 అధ్యాయాలలో 700 శ్లోకాలు।

ఆత్మ అమరత్వం, ధర్మ ప్రాముఖ్యత, జ్ఞాన యోగం, భక్తి యోగం మరియు కర్మ యోగం వివరించాడు।

"కర్మ చేయండి, ఫలాల గురించి ఆందోళన పడకండి।"

కృష్ణుడు విశ్వరూపం చూపించాడు। జ్ఞానం పొందిన అర్జునుడు యుద్ధానికి సిద్ధమయ్యాడు।`,
    keyElements: [
      "Kurukshetra",
      "Arjuna",
      "Krishna",
      "Gandiva",
      "Karma Yoga",
      "Bhakti Yoga",
      "Jnana Yoga",
      "Vishwarupa"
    ],
    moral: "Perform your duty without attachment to results; the soul is eternal.",
    moralHindi: "फल की आसक्ति बिना कर्म करो; आत्मा अमर है।",
    moralTelugu: "ఫలాల పట్ల ఆసక్తి లేకుండా కర్మ చేయండి; ఆత్మ శాశ్వతం.",
    image: "/story-bhagavad-gita.jpg",
    chapter: 3
  }
];

export const allStories: Story[] = [...ramayanaStories, ...mahabharataStories];
