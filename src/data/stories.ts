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
  summary:
    "Bala Kanda narrates the divine birth of Lord Rama, his education, early heroism, and marriage to Sita.",
  summaryHindi:`बालकांड में भगवान राम के दिव्य जन्म, शिक्षा, प्रारंभिक पराक्रम और सीता से विवाह की कथा है।`,
  summaryTelugu:`బాలకాండలో శ్రీరాముని దివ్య జననం, విద్య, ప్రారంభ వీరత్వం మరియు సీతతో వివాహం కథనం ఉంది.`,
    content: `
In the sacred city of Ayodhya, situated on the banks of the holy river Sarayu, ruled the illustrious king Dasharatha of the Ikshvaku dynasty. His queens—Kaushalya, Kaikeyi, and Sumitra—adorned the palace of Ayodhya with grace and devotion. Though prosperous and beloved by his people, Dasharatha was tormented by the sorrow of being childless.

Seeking divine intervention, King Dasharatha performed the Putrakameshti Yagna under the guidance of Sage Rishyasringa, assisted by venerable sages such as Vasishta. From the sacred fire emerged a celestial being bearing divine payasam. Dasharatha distributed it among his queens—Kaushalya, Kaikeyi, and Sumitra.

In due time, Queen Kaushalya gave birth to Lord Rama, an incarnation of Lord Vishnu. Queen Kaikeyi bore Bharata, while Queen Sumitra gave birth to the twins Lakshmana and Shatrughna. The palace of Ayodhya resounded with joy, and celestial beings showered flowers from the heavens.

Rama grew under the guidance of Sage Vasishta, mastering the Vedas, Dhanurveda, ethics, and royal duties. His brothers—Lakshmana, Bharata, and Shatrughna—were bound to him by love and loyalty, with Lakshmana inseparable from Rama.

Rama and the Forest Journey with Vishwamitra

One day, Sage Vishwamitra arrived from the forests near Siddhashrama, troubled by demons—Tataka, Subahu, and Maricha—who desecrated his yajnas. Despite Dasharatha’s hesitation, Rama and Lakshmana accompanied the sage.

In the dense forests near the Malada and Karusha regions, Rama slew the demoness Tataka and defeated Subahu while driving Maricha into the ocean with the Manavastra. Vishwamitra bestowed divine astras upon Rama, including the Brahmastra and Varunastra.

Marriage to Sita in Mithila

The journey continued to the kingdom of Mithila, ruled by the philosopher-king Janaka. In the grand palace, Janaka announced Sita’s swayamvara, declaring that only one who could lift and string the mighty Pinaka bow of Lord Shiva would win her hand.

Kings and warriors failed, but Rama effortlessly lifted and broke the bow, causing thunderous echoes across Mithila. Sita garlanded Rama, and their divine union was celebrated. Lakshmana married Urmila, Bharata married Mandavi, and Shatrughna married Shrutakirti.

Return to Ayodhya

After blessings from sages and King Janaka, Rama, Sita, and Lakshmana returned to Ayodhya, welcomed by Dasharatha and the people with joy. Thus, Bala Kanda establishes Rama’s divine origin, virtues, heroic deeds, and sacred marriage.
`,
  contentTelugu: `
సరయు నది తీరంలో ఉన్న పవిత్ర నగరం అయోధ్యలో ఇక్ష్వాకు వంశానికి చెందిన దశరథ మహారాజు పాలన సాగించేవాడు. ఆయన రాణులు—కౌసల్య, కైకేయి, సుమిత్ర—అయోధ్య మహాలయాన్ని అలంకరించేవారు. రాజ్యం సుభిక్షంగా ఉన్నప్పటికీ సంతానం లేనందున దశరథుడు తీవ్ర దుఃఖంలో ఉండేవాడు.

ఋష్యశృంగ మహర్షి నేతృత్వంలో పుత్రకామేష్టి యజ్ఞం నిర్వహించబడింది. అగ్నిలో నుంచి దివ్య పాయసం వెలువడగా, దానిని రాణులకు పంచారు. కౌసల్య శ్రీరాముని, కైకేయి భరతుని, సుమిత్ర లక్ష్మణుడు మరియు శత్రుఘ్నుడిని కనింది.

వశిష్ఠ మహర్షి ఆశ్రమంలో రాముడు వేదాలు, ధనుర్విద్య, రాజధర్మం నేర్చుకున్నాడు. లక్ష్మణుడు ఎప్పుడూ రాముని వెంట ఉండేవాడు.

విశ్వామిత్రుడితో అరణ్య ప్రయాణం

సిద్ధాశ్రమం వద్ద యజ్ఞాలను ధ్వంసం చేస్తున్న తాటక, సుబాహు, మారీచులను సంహరించేందుకు విశ్వామిత్రుడు రామలక్ష్మణులను తీసుకెళ్లాడు. రాముడు తాటకను వధించి, సుబాహుని సంహరించి, మారీచుడిని సముద్రంలోకి విసిరాడు.

మిథిలాలో సీతా స్వయంవరం

మిథిలా రాజు జనకుడు ఏర్పాటు చేసిన స్వయంవరంలో రాముడు శివధనుస్సును విరిచి సీతను వివాహం చేసుకున్నాడు. లక్ష్మణుడు ఉర్మిళను, భరతుడు మాండవిని, శత్రుఘ్నుడు శ్రుతకీర్తిని వివాహం చేసుకున్నారు.

అయోధ్యకు తిరుగు ప్రయాణంతో బాలకాండ ముగుస్తుంది.
`,
  contentHindi: `
सरयू नदी के तट पर स्थित अयोध्या नगरी में इक्ष्वाकु वंश के प्रतापी राजा दशरथ राज्य करते थे। उनकी रानियाँ—कौशल्या, कैकेयी और सुमित्रा—राजमहल की शोभा थीं। संतानहीनता का दुःख राजा को व्यथित करता था।

ऋष्यशृंग के निर्देशन में पुत्रकामेष्टि यज्ञ किया गया। यज्ञ से प्राप्त दिव्य पायस से कौशल्या को राम, कैकेयी को भरत, और सुमित्रा को लक्ष्मण व शत्रुघ्न प्राप्त हुए।

वशिष्ठ मुनि के सान्निध्य में राम ने शास्त्र और धनुर्विद्या सीखी।

विश्वामित्र के साथ वनगमन

सिद्धाश्रम में यज्ञ रक्षा हेतु राम ने ताड़का, सुबाहु का वध किया और मारीच को समुद्र में फेंका।

मिथिला में सीता स्वयंवर

राजा जनक के दरबार में शिव धनुष भंग कर राम ने सीता से विवाह किया। चारों भाइयों का विवाह सम्पन्न हुआ।

अयोध्या वापसी के साथ बालकांड पूर्ण होता है।
`,
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
  audioEnglish: "/ramayana/bala-kanda-english.mp3",
  audioHindi: "/ramayana/bala-kanda-hindi.mp3",
  audioTelugu: "/ramayana/bala-kanda-telugu.mp3",
  image: "/story-bala-kanda.jpg",
  chapter: 1
},
   {
  id: "ayodhya-kanda",
  epic: "ramayana",
  title: "Ayodhya Kanda: The Exile of Rama",
  titleHindi: "अयोध्याकांड: राम का वनवास",
  titleTelugu: "అయోధ్య కాండ: రాముని వనవాసం",
  summary:
    "Ayodhya Kanda narrates the events leading to Rama’s exile, Bharata’s grief, and Rama’s unwavering commitment to dharma.",
  summaryHindi:`अयोध्याकांड में राम के वनवास के कारण, भरत का शोक और राम का धर्म के प्रति अडिग समर्पण वर्णित है।`,
  summaryTelugu:`అయోధ్య కాండలో రాముని వనవాసానికి కారణమైన సంఘటనలు, భరతుని దుఃఖం మరియు రాముని ధర్మపాలన గురించి వివరించబడింది.`,
    content: `
As Rama’s virtues shone across Ayodhya, King Dasharatha resolved to crown him as Yuvaraja. Sage Vasishta prepared the coronation rites, and the city along the Sarayu brimmed with celebration.

However, Queen Kaikeyi, influenced by her maid Manthara, invoked two ancient boons granted during the battle against the Asuras. She demanded Bharata’s coronation and Rama’s fourteen-year exile to the Dandaka forest.

Bound by truth and royal honor, Dasharatha wept but consented. Rama accepted the decree with serenity, placing dharma above personal joy.

Rama’s Departure from Ayodhya

Sita, daughter of King Janaka, refused to remain behind and chose exile as her sacred duty. Lakshmana, son of Sumitra, vowed to serve Rama in the forests. Clad in bark garments, the trio departed Ayodhya, crossing the Sarayu and entering the wilderness.

Overcome by grief, Dasharatha passed away remembering Rama.

Bharata at Chitrakuta

Returning from Kekaya, Bharata learned the truth and rushed to Chitrakuta with Shatrughna and Sage Vasishta. He pleaded with Rama to return. Rama refused, honoring his father’s word.

Bharata placed Rama’s sandals (Padukas) on the throne of Ayodhya and ruled from Nandigrama as Rama’s regent, awaiting his return.

Thus, Ayodhya Kanda glorifies sacrifice, filial duty, and unwavering righteousness.
`,
  contentTelugu: `
అయోధ్యలో రాముని యువరాజుగా పట్టాభిషేకం చేయాలని దశరథుడు నిర్ణయించాడు. వశిష్ఠ మహర్షి ఆధ్వర్యంలో ఏర్పాట్లు జరుగుతున్న వేళ, మంథర ప్రభావంతో కైకేయి తన వరాలను కోరింది.

భరతుని రాజుగా చేయాలని, రాముని దండకారణ్యానికి పద్నాలుగు సంవత్సరాలు పంపాలని ఆమె ఆజ్ఞాపించింది. వాక్కుకు బద్ధుడైన దశరథుడు అంగీకరించాడు.

రాముడు ధర్మాన్ని శిరస్సు మీద పెట్టుకొని వనవాసాన్ని స్వీకరించాడు. సీత, లక్ష్మణులు ఆయనతో పాటు వెళ్లారు. సరయు నది దాటి వారు అడవిలోకి ప్రవేశించారు.

రామవియోగాన్ని తట్టుకోలేక దశరథుడు పరమపదించాడు.

చిత్రకూటంలో భరతుడు

కేకయదేశం నుంచి వచ్చిన భరతుడు చిత్రకూటంలో రాముని కలుసుకొని తిరిగి రావాలని వేడుకున్నాడు. రాముడు నిరాకరించాడు.

భరతుడు రాముని పాదుకలను సింహాసనంపై ఉంచి నందిగ్రామం నుంచి రాజ్యాన్ని పాలించాడు.
`,
  contentHindi: `
राम के राज्याभिषेक की तैयारी चल रही थी, पर मंथरा के बहकावे में आकर कैकेयी ने अपने वरदान माँग लिए।

रामा ने धर्म पालन करते हुए वनवास स्वीकार किया। सीता और लक्ष्मण उनके साथ गए। सरयू नदी पार कर वे वन गए।

पुत्र शोक में दशरथ का देहांत हो गया।

चित्रकूट में भरत

भरत ने राम से लौटने का आग्रह किया, पर राम ने पिता की आज्ञा का पालन किया।

भरत ने राम की पादुकाएँ सिंहासन पर रखकर नंदिग्राम से राज्य चलाया।
`,
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
  title: "Aranya Kanda: Trials in the Forest and the Abduction of Sita",
  titleHindi: "अरण्यकांड: वन की परीक्षाएँ और सीता हरण",
  titleTelugu: "అరణ్య కాండ: అడవి పరీక్షలు మరియు సీతాపహరణం",
  summary:
    "Aranya Kanda portrays Rama’s life in the forest, his protection of sages, the rise of evil forces, and the tragic abduction of Sita.",
  summaryHindi:`अरण्यकांड में राम का वन जीवन, ऋषियों की रक्षा, बुराई का उदय और सीता का हरण वर्णित है।`,
  summaryTelugu:`అరణ్య కాండలో రాముని అడవి జీవితం, మహర్షుల రక్షణ, చెడు శక్తుల ఉద్భవం మరియు సీతాపహరణం గురించి వివరించబడింది.`,
  content: `
| JOURNEY INTO DANDARANYA

After leaving Chitrakuta, Rama, Sita, and Lakshmana journeyed deep into the vast Dandaka Forest, a land stretching across present-day Panchavati, the sacred Godavari riverbanks, and ancient hermitages. They resided near the holy ashramas of sages such as Atri, Anasuya, Sharabhanga, Sutikshna, and Agastya, offering protection to ascetics who were constantly terrorized by rakshasas during their penance.


| DESTRUCTION OF RAKSHASAS IN JANASTHANA

Rama destroyed the fearsome rakshasa Viradha near the forest paths and later annihilated Khara, Dushana, and Trishira in the Janasthana region. Fourteen thousand rakshasas perished in the fierce battle, restoring peace to the Dandakaranya forests. These victories spread Rama’s fame across the three worlds and ignited Ravana’s wrath in the golden city of Lanka.


| SURPANAKHA AND RAVANA’S WRATH

Surpanakha, Ravana’s sister and a rakshasi of Janasthana, encountered Rama and Lakshmana near Panchavati on the banks of the Godavari River. Enchanted by Rama’s divine beauty, she proposed marriage. When rejected and humiliated, she attacked Sita. Lakshmana punished her by severing her nose and ears. Enraged and humiliated, Surpanakha fled to Lanka and incited Ravana with tales of Sita’s unmatched beauty.


| THE GOLDEN DEER AND MARICHA’S DECEPTION

Ravana conspired with Maricha, who transformed himself into a radiant golden deer adorned with silver spots and gem-like hooves. Captivated by its beauty, Sita urged Rama to capture it. Rama pursued the deer deep into the forest. Struck by Rama’s arrow, Maricha cried out in Rama’s own voice, creating a terrible illusion that deceived Sita.


| ABDUCTION OF SITA AND JATAYU’S SACRIFICE

Bound by duty, Lakshmana crossed the Lakshmana Rekha and left Sita alone in the hermitage. Ravana appeared disguised as a Brahmin mendicant, seized Sita, and carried her southward in the Pushpaka Vimana toward Lanka. Jatayu, the noble king of vultures and loyal friend of King Dasharatha, confronted Ravana in the skies and fought valiantly, but fell mortally wounded.


| RAMA’S GRIEF AND VOW OF DHARMA

When Rama discovered Jatayu near death and learned of Sita’s abduction, his grief shook the forests, mountains, and rivers of the world. From that sorrow arose an unbreakable vow—to destroy Ravana, rescue Sita, and restore dharma. Thus ends Aranya Kanda, darkened by loss and burning with righteous resolve.
`,

  contentTelugu: `
| దండకారణ్య ప్రవేశం

చిత్రకూటాన్ని విడిచి రాముడు, సీత, లక్ష్మణుడు విస్తారమైన దండకారణ్యంలో ప్రవేశించారు. గోదావరి నది ఒడ్డున పంచవటి వద్ద వారు అత్రి, అనసూయ, శరభంగ, సుతీక్ష్ణ, అగస్త్య మహర్షుల ఆశ్రమాలను రక్షించారు.


| జనస్థాన రాక్షస సంహారం

విరాధుడు, ఖరుడు, దూషణుడు, త్రిశిరుడు సహా పద్నాలుగు వేల రాక్షసులను రాముడు సంహరించాడు. ఈ విజయం లంకలో ఉన్న రావణుడిని క్రోధంతో నింపింది.


| శూర్పణఖ అవమానం

శూర్పణఖ రాముని చూసి మోహించింది. సీతపై దాడి చేయగా లక్ష్మణుడు ఆమె ముక్కు, చెవులు కోశాడు. అవమానంతో లంకకు వెళ్లి రావణుడిని రెచ్చగొట్టింది.


| మారిచుడి మాయాజింక

మారిచుడు బంగారు జింకగా మారి మాయ చేశాడు. సీత కోరికతో రాముడు అడవిలోకి వెంబడించాడు. గాయపడిన మారిచుడు రామ స్వరంతో కేక వేసాడు.


| సీతాపహరణ మరియు జటాయువు వీరత్వం

రావణుడు సన్యాసి వేషంలో వచ్చి పుష్పక విమానంలో సీతను లంకకు తీసుకెళ్లాడు. జటాయువు వీరోచితంగా పోరాడి వీరమరణం పొందాడు.


| రాముని సంకల్పం

సీతాపహరణ తెలిసిన రాముని దుఃఖం అరణ్యాన్ని కంపించింది. అదే దుఃఖం రావణ వధ సంకల్పంగా మారింది.
`,

  contentHindi: `
| दंडकारण्य में प्रवेश

चित्रकूट से आगे राम, सीता और लक्ष्मण दंडकारण्य में पहुँचे। वे पंचवटी में गोदावरी तट पर ऋषियों के आश्रमों की रक्षा करते रहे।


| जनस्थान में राक्षस वध

राम ने विराध, खर, दूषण और त्रिशिरा सहित चौदह हजार राक्षसों का वध किया। इससे लंका में रावण क्रोधित हुआ।


| शूर्पणखा का अपमान

शूर्पणखा राम पर मोहित हुई। सीता पर आक्रमण करने पर लक्ष्मण ने उसका नासिका छेदन किया।


| स्वर्ण मृग की माया

मारीच स्वर्ण मृग बना। सीता की इच्छा से राम उसका पीछा करने गए। उसने राम की आवाज़ में पुकार लगाई।


| सीता हरण और जटायु बलिदान

रावण साधु वेश में आया और पुष्पक विमान से सीता का हरण कर लंका ले गया। जटायु वीरगति को प्राप्त हुआ।


| धर्म की प्रतिज्ञा

राम का शोक प्रतिशोध और धर्म स्थापना के संकल्प में बदल गया। यहीं अरण्यकांड समाप्त होता है।
`,

  keyElements: [
    "Dandaka Forest",
    "Panchavati",
    "Godavari River",
    "Viradha",
    "Khara, Dushana, Trishira",
    "Surpanakha",
    "Maricha",
    "Golden Deer",
    "Lakshmana Rekha",
    "Pushpaka Vimana",
    "Jatayu"
  ],
  keyElementsHindi: [
    "दंडकारण्य",
    "पंचवटी",
    "गोदावरी नदी",
    "विराध",
    "खर, दूषण, त्रिशिरा",
    "शूर्पणखा",
    "मारीच",
    "स्वर्ण मृग",
    "लक्ष्मण रेखा",
    "पुष्पक विमान",
    "जटायु"
  ],
  keyElementsTelugu: [
    "దండకారణ్య",
    "పంచవటి",
    "గోదావరి నది",
    "విరాధ",
    "ఖరుడు, దూషణుడు, త్రిశిరుడు",
    "శూర్పణఖ",
    "మారీచుడు",
    "స్వర్ణ మృగ",
    "లక్ష్మణ రేఖ",
    "పుష్పక విమాన",
    "జటాయు"
  ],

  moral: "Unchecked desire and deceit bring ruin, while righteousness demands unwavering courage.",
  moralHindi: "अनियंत्रित वासना और छल विनाश का कारण बनते हैं।",
  moralTelugu: "అనియంత్రిత కోరికలు వినాశనానికి దారి తీస్తాయి.",

  image: "/story-aranya-kanda.jpg",
  chapter: 3
},
{
  id: "kishkindha-kanda",
  epic: "ramayana",
  title: "Kishkindha Kanda: Alliance with the Vanaras",
  titleHindi: "किश्किंधा कांड: वानरों से मित्रता",
  titleTelugu: "కిష్కింధ కాండ: వానరులతో స్నేహబంధం",
  summary:
    "Kishkindha Kanda depicts Rama’s alliance with Sugriva, the defeat of Vali, and the beginning of the search for Sita.",
  summaryHindi:`किश्किंधा कांड में राम की सुग्रीव से मित्रता, वली का पराजय और सीता की खोज की शुरुआत वर्णित है।`,
  summaryTelugu:`కిష్కింధ కాండలో రాముని సుగ్రీవుతో స్నేహం, వాలి పరాజయం మరియు సీతా అన్వేషణ ప్రారంభం గురించి వివరించబడింది.`,
  content: `
| ARRIVAL AT KISHKINDHA

Grieving yet resolute, Rama and Lakshmana journeyed southward and reached the rugged terrain of Kishkindha, nestled among the Rishyamuka Mountain and the Matanga Hills. There, they encountered Hanuman, son of Vayu, disguised as a Brahmin, whose wisdom, humility, and devotion immediately revealed his divine nature.


| MEETING SUGRIVA AND THE ALLIANCE

Hanuman led Rama to Sugriva, the exiled Vanara king living in fear of his brother Vali. Sugriva recounted how Vali, ruler of Kishkindha, had unjustly driven him out and taken his wife Ruma. Rama pledged friendship, sealing their alliance with a sacred fire ritual.


| PROOF OF RAMA’S STRENGTH AND VALI’S DEFEAT

To prove his strength, Rama shattered the seven Sal trees with a single arrow. Later, in the battlefield near Kishkindha, Rama slew Vali with a divine arrow while Vali battled Sugriva. Before dying, Vali realized Rama’s righteousness and entrusted his son Angada to Rama’s care.


| SUGRIVA CROWNED KING

Sugriva was crowned king of Kishkindha, with Tara as queen and Angada as prince. After initial neglect of duty, Lakshmana reminded Sugriva of his promise. Soon, the vast Vanara Sena was assembled.


| DISPATCH OF THE VANARA SEARCH PARTIES

Monkeys such as Angada, Jambavan, Nala, Nila, Mainda, Dwivida, and Hanuman were dispatched to all directions—north, south, east, and west. Hanuman was chosen to lead the southern search toward the vast southern ocean, marking the dawn of the mission to find Sita.
`,

  contentTelugu: `
| కిష్కింధకు రాక

రాముడు, లక్ష్మణుడు దక్షిణంగా ప్రయాణించి ఋష్యమూక పర్వతం, మతంగాశ్రమం సమీపంలోని కిష్కింధకు చేరుకున్నారు. అక్కడ వాయుపుత్రుడు హనుమంతుడిని బ్రాహ్మణ వేషంలో కలిశారు.


| సుగ్రీవునితో స్నేహబంధం

హనుమంతుడు రాముని సుగ్రీవుని దగ్గరకు తీసుకెళ్లాడు. వాలి తనను రాజ్యంనుంచి వెలివేసి భార్య రుమను లాక్కున్నట్లు సుగ్రీవుడు వివరించాడు. అగ్నిసాక్షిగా రాముడు స్నేహవ్రతం చేశాడు.


| రాముని శక్తి మరియు వాలి సంహారం

ఏడు శాలవృక్షాలను ఒకే బాణంతో చీల్చి రాముడు తన శక్తిని చూపించాడు. యుద్ధంలో వాలిని సంహరించాడు. మరణానికి ముందు వాలి ధర్మాన్ని అర్థం చేసుకొని అంగదుడిని రామునికి అప్పగించాడు.


| సుగ్రీవ పట్టాభిషేకం

సుగ్రీవుడు కిష్కింధ రాజుగా పట్టాభిషేకం పొందాడు. తార రాణిగా నిలిచింది. అనంతరం వానరసేన సమీకరించబడింది.


| సీతాన్వేషణ ఆరంభం

అంగదుడు, జాంబవంతుడు, నలుడు, నీలుడు, మైందుడు, ద్వివిదుడు, హనుమంతుడు సీతాన్వేషణకు బయలుదేరారు. దక్షిణ సముద్రం వైపు హనుమంతుడి నాయకత్వంలో అన్వేషణ ప్రారంభమైంది.
`,

  contentHindi: `
| किश्किंधा में आगमन

राम और लक्ष्मण ऋष्यमूक पर्वत के पास स्थित किश्किंधा पहुँचे। वहीं उनकी भेंट वायुपुत्र हनुमान से हुई।


| सुग्रीव से मैत्री

हनुमान राम को सुग्रीव के पास ले गए। सुग्रीव ने बताया कि उसके भाई वाली ने राज्य और पत्नी रुमा छीन ली थी। अग्नि साक्षी में राम-सुग्रीव मैत्री हुई।


| राम की शक्ति और वाली वध

राम ने सात साल वृक्षों को भेदकर अपनी शक्ति दिखाई। युद्ध में वाली का वध हुआ। मरते समय वाली ने अंगद को राम के संरक्षण में सौंपा।


| सुग्रीव का राज्याभिषेक

सुग्रीव को किश्किंधा का राजा बनाया गया। तारा रानी बनी। वानर सेना संगठित हुई।


| सीता खोज अभियान

हनुमान, अंगद, जाम्बवान, नल, नील आदि को सीता की खोज के लिए भेजा गया। दक्षिण दिशा का नेतृत्व हनुमान को सौंपा गया।
`,

  keyElements: [
    "Kishkindha",
    "Rishyamuka Mountain",
    "Matanga Hills",
    "Hanuman",
    "Sugriva",
    "Vali",
    "Ruma",
    "Angada",
    "Tara",
    "Vanara Sena"
  ],
  keyElementsHindi: [
    "किश्किंधा",
    "ऋष्यमूक पर्वत",
    "मतंग पर्वत",
    "हनुमान",
    "सुग्रीव",
    "वाली",
    "रुमा",
    "अंगद",
    "तारा",
    "वानर सेना"
  ],
  keyElementsTelugu: [
    "కిష్కింధ",
    "ఋష్యమూక పర్వతం",
    "మతంగ పర్వతం",
    "హనుమంతుడు",
    "సుగ్రీవుడు",
    "వాలి",
    "రుమ",
    "అంగదుడు",
    "తార",
    "వానర సేన"
  ],

  moral: "True friendship is forged through loyalty, justice, and selfless action.",
  moralHindi: "सच्ची मित्रता न्याय और निष्ठा से बनती है।",
  moralTelugu: "నిజమైన స్నేహం న్యాయం, నిష్ఠపై ఆధారపడి ఉంటుంది.",

  image: "/story-kishkindha-kanda.jpg",
  chapter: 4
},
{
  id: "sundara-kanda",
  epic: "ramayana",
  title: "Sundara Kanda: Hanuman’s journey to Lanka",
  titleHindi: "सुंदरकांड: हनुमान का लंका यात्रा",
  titleTelugu: "సుందర కాండ: హనుమంతుడి లంక యాత్ర",
  summary:
    "Sundara Kanda narrates Hanuman’s heroic journey across the Mahodadhi, his discovery of Sita in Lanka, and his fearless confrontation with Ravana.",
  summaryHindi:`सुंदरकांड में हनुमान का महोदधि पार करना, लंका में सीता की खोज और रावण से सामना वर्णित है।`,
  summaryTelugu:`సుందరకాండలో హనుమంతుడి మహోదధి లంఘనం, లంకలో సీతా అన్వేషణ మరియు రావణుడితో సాహసోపేతమైన ఎదురుదెబ్బ గురించి వివరించబడింది.`,
  content: `
| HANUMAN AT MAHENDRA MOUNTAIN

Standing atop the Mahendra Mountain on the southern shores of Bharata Varsha, Hanuman gazed upon the vast Mahodadhi—the mighty ocean separating the mainland from the golden city of Lanka. Remembering the divine mission entrusted by Lord Rama at Kishkindha, and encouraged by Angada, Jambavan, Nala, and Neela, Hanuman recalled his immense strength, once blessed by Vayu, the Wind God.


| THE GREAT LEAP ACROSS MAHODADHI

With a thunderous leap, Hanuman soared across the skies, crossing the roaring ocean inhabited by Mainaka Mountain, Surasa the serpent goddess, and Simhika the shadow-grasping demoness. Overcoming each obstacle with wisdom and restraint, Hanuman continued his flight toward Lanka.


| ENTRY INTO THE GOLDEN CITY OF LANKA

Reaching the island kingdom ruled by Ravana, Hanuman beheld the splendor of Lanka—its golden gates, jeweled palaces, and towering mansions guarded by fierce rakshasas such as Lankini. Assuming a subtle form, Hanuman entered the city by night and searched through Ravana’s palaces, including the grand chambers of Mandodari, but did not find Sita.


| DISCOVERY OF SITA IN ASHOKA VATIKA

At last, in the serene Ashoka Vatika, beneath a Shimshupa tree, Hanuman found Sita—frail from sorrow yet radiant in purity. She was guarded by rakshasis such as Trijata, while Ravana repeatedly attempted to break her resolve. Sita rejected Ravana’s threats and temptations, remaining steadfast in her devotion to Rama of Ayodhya.


| RAMA’S MESSAGE AND THE DIVINE RING

Hanuman approached Sita with humility, reciting Rama’s name and presenting the royal ring engraved with the name of Raghu. Tears of hope filled Sita’s eyes as Hanuman conveyed Rama’s message and assured her of rescue.


| CAPTURE, WARNING TO RAVANA, AND BURNING OF LANKA

Allowing himself to be captured by Indrajit (Meghanada), Hanuman was brought before Ravana’s court. Fearlessly, Hanuman warned Ravana of his impending destruction. When his tail was set ablaze, Hanuman used the fire to burn Lanka—reducing palaces, arsenals, and towers to ashes, sparing only Ashoka Vatika.


| RETURN TO RAMA WITH GOOD TIDINGS

Extinguishing the flames in the ocean, Hanuman returned across the sea to Mahendra Mountain and delivered the joyful news to Rama. Sundara Kanda stands as the heart of the Ramayana—celebrating devotion, courage, intelligence, and divine grace.
`,

  contentTelugu: `
| మహేంద్ర పర్వతంపై హనుమంతుడు

మహేంద్ర పర్వత శిఖరంపై నిలబడి హనుమంతుడు మహోదధిని తిలకించాడు. కిష్కింధలో శ్రీరాముడు అప్పగించిన కార్యాన్ని స్మరించుకొని, వాయుదేవుని ఆశీస్సులతో తన అపార శక్తిని గుర్తు చేసుకున్నాడు.


| మహోదధి లంఘనం

ఒక్క ఎగిరిలోనే సముద్రాన్ని దాటి, మైనాక పర్వతం, సురసా దేవి, సింహిక వంటి అవరోధాలను ధైర్యంతో అధిగమించాడు.


| లంక ప్రవేశం

లంక నగరానికి చేరుకొని రావణుడి స్వర్ణ ప్రాసాదాలు, లంకిణి కాపలాలు చూశాడు. మాండోదరి మందిరం సహా అనేక భవనాలు వెతికినా సీత కనిపించలేదు.


| అశోకవనికలో సీత దర్శనం

చివరికి అశోకవనికలో శింశుపా వృక్షం కింద సీతను చూశాడు. రావణుడి బెదిరింపుల్ని తృణీకరించి ఆమె రామభక్తిలో నిలిచింది.


| రాముని ఉంగరం మరియు సందేశం

హనుమంతుడు రాముని ఉంగరాన్ని చూపించగా, సీతకు ఆశ చిగురించింది.


| లంక దహనం మరియు తిరుగు ప్రయాణం

అనంతరం మేఘనాదుడు హనుమంతుడిని బంధించి రావణ సభకు తీసుకెళ్లాడు. వెంట్రుకలతో కూడిన వాలానికి నిప్పంటించినా, హనుమంతుడు లంకను దహనం చేసి అశోకవనికను మాత్రమే కాపాడాడు. అనంతరం సముద్రంలో అగ్ని ఆర్పి శ్రీరాముని వద్దకు శుభవార్తను తీసుకెళ్లాడు.
`,

  contentHindi: `
| महेंद्र पर्वत पर हनुमान

महेंद्र पर्वत पर खड़े होकर हनुमान ने महोदधि सागर का अवलोकन किया। वायुदेव के वरदान को स्मरण कर वे एक विशाल छलांग में समुद्र लांघ गए।


| समुद्र लंघन और बाधाएँ

मार्ग में मैनाक पर्वत, सुरसा देवी और सिंहिका जैसे बाधाओं को पार करते हुए वे लंका पहुँचे।


| लंका नगर में प्रवेश

सोने से जड़ी लंका नगरी में उन्होंने मन्दोदरी के महल सहित अनेक भवनों की खोज की।


| अशोक वाटिका में सीता

अंततः अशोक वाटिका में शिंशुपा वृक्ष के नीचे दुखी किंतु अडिग सीता को पाया।


| राम की अंगूठी और संदेश

हनुमान ने राम की अंगूठी देकर अपनी पहचान सिद्ध की।


| लंका दहन और वापसी

इंद्रजीत द्वारा बंदी बनाए जाने पर हनुमान ने रावण को धर्म का संदेश दिया। पूँछ में आग लगाए जाने पर उन्होंने लंका को जला दिया और समुद्र में अग्नि शांत कर राम के पास लौट आए।
`,

  keyElements: [
    "Mahendra Mountain",
    "Mahodadhi Ocean",
    "Mainaka Parvata",
    "Ashoka Vatika",
    "Shimshupa Tree",
    "Ravana",
    "Mandodari",
    "Indrajit",
    "Trijata"
  ],
  keyElementsHindi: [
    "महेंद्र पर्वत",
    "महोदधि सागर",
    "मैनाक पर्वत",
    "अशोक वाटिका",
    "शिंशुपा वृक्ष",
    "रावण",
    "मन्दोदरी",
    "इंद्रजीत",
    "त्रिजटा"
  ],
  keyElementsTelugu: [
    "మహేంద్ర పర్వతం",
    "మహోదధి సముద్రం",
    "మైనాక పర్వతం",
    "అశోక వనిక",
    "శింశుపా చెట్టు",
    "రావణుడు",
    "మాండోదరి",
    "ఇంద్రజిత్",
    "త్రిజట"
  ],

  moral: "Pure devotion combined with courage can overcome even the greatest obstacles.",
  moralHindi: "भक्ति और साहस मिलकर असंभव को भी संभव बना देते हैं।",
  moralTelugu: "భక్తి మరియు ధైర్యం కలిస్తే అసాధ్యమూ సాధ్యమే.",

  image: "/story-sundara-kanda.jpg",
  chapter: 5,
},
{
  id: "yuddha-kanda",
  epic: "ramayana",
  title: "Yuddha Kanda: The Great War of Lanka",
  titleHindi: "युद्धकांड: लंका युद्ध",
  titleTelugu: "యుద్ధ కాండ: లంకా యుద్ధం",
  summary:
    "Yuddha Kanda recounts the epic war between Rama and Ravana, the fall of Lanka, and the ultimate triumph of dharma.",
  summaryHindi:`युद्धकांड में राम और रावण के बीच महायुद्ध, लंका का पतन और धर्म की विजय वर्णित है।`,
  summaryTelugu:`యుద్ధ కాండలో రాముడు మరియు రావణుడి మధ్య మహాయుద్ధం, లంకా పతనం మరియు ధర్మ విజయం గురించి వివరించబడింది.`,
  content: `
| MARCHING TO LANKA

Marching southward from Kishkindha, Rama reached the shores of the Mahodadhi with Sugriva, Hanuman, Angada, Jambavan, Nala, Neela, and the vast vanara sena. Under Rama's guidance, Nala built the legendary Rama Setu across the ocean, connecting the mainland to Lanka.
| FIERCE BATTLES IN LANKA

Crossing into Lanka, fierce battles erupted between the vanaras and rakshasas. Mighty warriors such as Kumbhakarna, Indrajit (Meghanada), Atikaya, Prahasta, and Akampana fought valiantly. Indrajit wounded Rama and Lakshmana with the Nagapasha, but Garuda freed them.

| SLAYING OF KUMBHAKARNA AND INDRAJIT

Kumbhakarna, awakened from deep sleep, devastated the vanara army before being slain by Rama. Indrajit was eventually defeated and killed by Lakshmana with the Indra Shakti, guided by Vibhishana.

| RAMA VS RAVANA

At last, Rama faced Ravana on the battlefield of Lanka. The earth trembled as celestial beings watched. After a fierce duel, Rama invoked the Brahmastra, guided by Sage Agastya’s Aditya Hridayam, and struck Ravana, ending his tyranny.

| CORONATION AND RETURN

Following Ravana’s fall, Vibhishana was crowned king of Lanka. Sita underwent Agni Pariksha to affirm her purity. Rama, Sita, Lakshmana, Hanuman, and their companions returned to Ayodhya aboard the Pushpaka Vimana.

| RAMA RAJYA

Bharata welcomed Rama with tears of joy. The coronation of Rama marked the beginning of Rama Rajya—a reign of justice, peace, and righteousness that endured for generations.
`,

  contentTelugu: `
| కిష్కింధ నుండి మహోదధి

కిష్కింధ నుండి మహోదధి తీరానికి చేరిన రాముడు వానరసేనతో కలిసి నలుడి నేతృత్వంలో రామసేతువును నిర్మించాడు.

| లంకలో భీకర యుద్ధం

లంకలో ప్రవేశించిన తరువాత వానరులు, రాక్షసుల మధ్య భీకర యుద్ధం జరిగింది. కుంభకర్ణుడు, ఇంద్రజిత్తు, అతికాయుడు వంటి రాక్షసులు యుద్ధం చేశారు. నాగపాశంతో రామలక్ష్మణులు గాయపడగా గరుడుడు రక్షించాడు.

| కుంభకర్ణ మరియు ఇంద్రజిత్ సంహారం

కుంభకర్ణుడు నిద్ర నుండి లేచిన తర్వాత వానర సేనను నాశనం చేశాడు, కానీ రాముడు అతన్ని సంహరించాడు. లక్ష్మణుడు ఇంద్రశక్తితో ఇంద్రజిత్తును సంహరించాడు.

| రాముడు రావణుని ఎదుర్కొనడం

చివరికి రాముడు లంకా యుద్ధభూమిలో రావణుడిని ఎదుర్కొన్నాడు. భూమి కంపించింది, దేవతలు కూడా చూడటానికి వచ్చాయి. బ్రహ్మాస్త్రం ఉపయోగించి, రాముడు రావణుని సంహరించాడు.

| రాజ్యభిషేకం మరియు తిరిగి రావడం

రావణుడి మరణం తరువాత విభీషణుడు లంక రాజుగా అయ్యాడు. సీత అగ్నిపరీక్షనుండి స్వచ్చమైనది అని నిర్ధారించబడింది. రాముడు, సీత, లక్ష్మణుడు, హనుమాన్ మరియు వారి తోడ్పాటుదారులు పుష్పక విమానంలో అయోధ్యకు తిరిగి వచ్చారు.

| రామరాజ్యం

భరతుడు రాముని ఆనందంతో స్వాగతించాడు. రామభిషేకం న్యాయం, శాంతి, ధర్మ పరిపాలనతో నడిచిన రామరాజ్యానికి ఆరంభం అయ్యింది.
`,

  contentHindi: `
| किश्किंधा से प्रस्थान

किश्किंधा से प्रस्थान कर राम महोदधि तट पर पहुँचे। नल के नेतृत्व में रामसेतु का निर्माण हुआ और वानर सेना लंका पहुँची।

| भीषण युद्ध

भीषण युद्ध में कुंभकर्ण, इंद्रजीत, अतिकाय जैसे राक्षसों का अंत हुआ। नागपाश से घायल राम-लक्ष्मण को गरुड़ ने मुक्त किया।

| कुंभकर्ण और इंद्रजीत का वध

कुंभकर्ण, गहरी नींद से जागकर, वानर सेना को तबाह कर दिया, लेकिन राम ने उसे मार डाला। लक्ष्मण ने इंद्रशक्ति से इंद्रजीत का संहार किया।

| राम बनाम रावण

अंततः राम ने लंका के युद्धक्षेत्र में रावण का सामना किया। ब्रह्मास्त्र से राम ने रावण का वध किया, जिससे उसकी दुराचार समाप्त हुआ।

| राज्याभिषेक और लौटना

रावण के पतन के बाद, विभीषण को लंका का राजा बनाया गया। सीता ने अपनी पवित्रता साबित करने के लिए अग्नि परीक्षा दी। राम, सीता, लक्ष्मण, हनुमान और उनके साथियों ने पुष्पक विमान से अयोध्या लौटकर।

| रामराज्य

भरत ने राम का आनंदपूर्वक स्वागत किया। रामराज्य की स्थापना न्याय, शांति और धर्म के पालन का प्रतीक बनी।
`,

  keyElements: [
    "Rama Setu",
    "Mahodadhi",
    "Lanka",
    "Indrajit",
    "Kumbhakarna",
    "Brahmastra",
    "Agni Pariksha",
    "Pushpaka Vimana",
    "Rama Rajya",
  ],
  keyElementsHindi: [
    "रामसेतु",
    "महोदधि",
    "लंका",
    "इंद्रजीत",
    "कुंभकर्ण",
    "ब्रह्मास्त्र",
    "अग्नि परीक्षा",
    "पुष्पक विमान",
    "रामराज्य",
  ],
  keyElementsTelugu: [
    "రామసేతు",
    "మహోదధి",
    "లంకా",
    "ఇంద్రజిత్",
    "కుంభకర్ణ",
    "బ్రహ్మాస్త్రం",
    "అగ్ని పరీక్ష",
    "పుష్పక విమాన",
    "రామరాజ్యం",
  ],

  moral: "When righteousness is upheld, even the mightiest evil must fall.",
  moralHindi: "धर्म की विजय निश्चित है।",
  moralTelugu: "ధర్మం గెలవడం అనివార్యం.",

  image: "/story-yuddha-kanda.jpg",
  chapter: 6,
},
{
  id: "uttara-kanda",
  epic: "ramayana",
  title: "Uttara Kanda: Rama’s Reign and the Final Journey",
  titleHindi: "उत्तरकांड: राम का राज्य और अंतिम लीला",
  titleTelugu: "ఉత్తర కాండ: రామ రాజ్యం మరియు అంతిమ ప్రయాణం",
  summary:
    "Uttara Kanda describes Rama’s righteous rule, the trials of Sita, the birth of Lava and Kusha, and the divine conclusion of the Ramayana.",
  summaryHindi:`उत्तरकांड में राम का धर्मपरायण शासन, सीता की परीक्षाएँ, लव-कुश का जन्म और रामायण का दिव्य समापन वर्णित है।`,
  summaryTelugu:`ఉత్తరకాండలో రాముని ధర్మపరాయణ పాలన, సీత పరీక్షలు, లవ కుశుల జననం మరియు రామాయణం యొక్క దివ్య ముగింపు గురించి వివరించబడింది.`,
  content: `
| RAMA RAJYA AND RULE

After the defeat of Ravana and the triumphant return from Lanka, Rama was crowned king of Ayodhya. The sacred city once again flourished on the banks of the Sarayu River. Rama ruled with unwavering devotion to dharma, assisted by Sita, Lakshmana, Bharata, Shatrughna, Hanuman, Sugriva, Vibhishana, and his trusted ministers.

| SITA’S EXILE

This golden era came to be known as Rama Rajya. The rains arrived in time, crops flourished, justice prevailed, and no citizen suffered hunger or fear. Yet, despite his perfect rule, whispers arose among the people questioning Sita’s purity after her captivity in Lanka. Though his heart shattered, Rama placed his duty as king above personal happiness. To uphold the honor of the throne of the Ikshvaku dynasty, he ordered Lakshmana to leave the pregnant Sita near the hermitage of Sage Valmiki, deep within the forest beside the Tamasa River. Sita accepted her fate with dignity, finding refuge in Valmiki’s ashrama.

| BIRTH AND UPBRINGING OF LAVA AND KUSHA

In time, Sita gave birth to twin sons—Lava and Kusha. Raised among sages, forests, deer, peacocks, and sacred chants, the boys were trained by Valmiki himself in archery, scriptures, music, and the story of the Ramayana, which Valmiki had composed.

| ASHWAMEDHA YAGNA AND REVELATION

Years later, Rama performed the Ashwamedha Yagna to reaffirm his sovereignty. The sacrificial horse wandered freely across kingdoms until it entered Valmiki’s hermitage. Lava and Kusha, unaware of their royal lineage, captured the horse and defeated Rama’s warriors, including Shatrughna and Lakshmana. When Rama arrived, Valmiki revealed the truth. Lava and Kusha recited the Ramayana before the entire court of Ayodhya, narrating Rama’s own life with divine precision. Overcome with emotion, Rama reunited with his sons.

| SITA’S RETURN TO EARTH

Rama then requested Sita to prove her purity once more. Calling upon Mother Earth, Sita prayed and the earth opened, receiving her back into its divine womb. Rama stood in silent agony as Sita disappeared, leaving behind an eternal lesson of sacrifice and righteousness.

| RAMA’S FINAL JOURNEY

Having completed his divine mission, Rama entrusted the kingdom to Lava and Kusha. Along with his brothers and companions, he walked toward the Sarayu River. As the waters parted, Rama returned to his eternal abode of Vaikuntha, revealing his true form as Lord Vishnu. Thus ends the Ramayana, not with conquest, but with renunciation—teaching the world that dharma, sacrifice, and compassion are the highest truths.
`,

  contentTelugu: `
| రామ రాజ్యం

లంక నుండి విజయవంతంగా తిరిగి వచ్చిన తరువాత రాముడు అయోధ్య రాజుగా పట్టాభిషేకం పొందాడు. సరయు నది ఒడ్డున ఉన్న అయోధ్య నగరం సుభిక్షంగా వికసించింది. సీత, లక్ష్మణుడు, భరతుడు, శత్రుఘ్నుడు, హనుమంతుడు, సుగ్రీవుడు, విభీషణుడు రామునికి తోడుగా నిలిచారు.

| సీత త్యాగం

ఈ కాలం రామరాజ్యంగా ప్రసిద్ధి చెందింది. అయితే ప్రజల మధ్య సీత పవిత్రతపై సందేహాలు మొదలయ్యాయి. రాజధర్మాన్ని పరిరక్షించేందుకు హృదయం చీలిపోయినా రాముడు కఠిన నిర్ణయం తీసుకున్నాడు. లక్ష్మణుడు గర్భవతైన సీతను తామసా నది సమీపంలో వాల్మీకి ఆశ్రమం దగ్గర విడిచిపెట్టాడు. వాల్మీకి మహర్షి ఆశ్రయంలో సీత లవుడు, కుశుడు అనే కవల కుమారులను ప్రసవించింది.

| లవ కుశుల జననం మరియు పెరుగుదల

అరణ్యంలో పెరిగిన లవకుశులు ధనుర్విద్య, వేదాలు, సంగీతం నేర్చుకొని వాల్మీకి రచించిన రామాయణాన్ని కంఠస్థం చేశారు.

| అశ్వమేధ యజ్ఞం మరియు నిజం వెలుగు

అశ్వమేధ యజ్ఞ సమయంలో రాజగుర్రం వాల్మీకి ఆశ్రమానికి చేరింది. లవకుశులు దానిని బంధించి రామసేనను ఓడించారు. వాస్తవం తెలిసిన తరువాత వారు అయోధ్యకు తీసుకువచ్చబడ్డారు. రాముడు తన కుమారులను మళ్ళీ కలుసుకున్నాడు.

| సీత భూమికి తిరిగి వెళ్లడం

సీత భూమాతను ప్రార్థించగా భూమి ఆమెను స్వీకరించింది. రాముడు తన రాజ్యాన్ని లవకుశులకు అప్పగించి సరయు నదిలో ప్రవేశించి విష్ణురూపాన్ని ధరించాడు.

| రాముని త్యాగం మరియు రామాయణ ముగింపు

ఈ విధంగా రామాయణం ధర్మం, త్యాగం, కరుణలతో ముగుస్తుంది.
`,

  contentHindi: `
| रामराज्य

लंका विजय के बाद राम का अयोध्या में राज्याभिषेक हुआ। सरयू नदी के तट पर अयोध्या समृद्ध हो उठी। सीता, लक्ष्मण, भरत, शत्रुघ्न, हनुमान, सुग्रीव और विभीषण राम के सहायक बने।

| सीता का निर्वासन

इस काल को रामराज्य कहा गया। किंतु प्रजा में सीता की शुद्धता पर प्रश्न उठे। राजधर्म की रक्षा हेतु राम ने अत्यंत कठोर निर्णय लिया। लक्ष्मण गर्भवती सीता को तमसा नदी के पास वाल्मीकि आश्रम में छोड़ आए। वहीं सीता ने लव और कुश को जन्म दिया। वाल्मीकि के मार्गदर्शन में वे वीर और विद्वान बने।

| लव-कुश का जन्म और पालन-पोषण

अरण्य में बड़े हुए लव-कुश ने धनुर्विद्या, वेद, संगीत सीखा और वाल्मीकि द्वारा रचित रामायण का अध्ययन किया।

| अश्वमेध यज्ञ और सत्य का प्रकाश

अश्वमेध यज्ञ के दौरान राम का घोड़ा वाल्मीकि आश्रम पहुँचा। लव-कुश ने उसे रोककर राम की सेना को पराजित किया। बाद में सच्चाई प्रकट हुई और राम ने अपने पुत्रों से मिलकर पुनर्मिलन किया।

| सीता का पृथ्वी में लौटना

सीता ने धरती माता से प्रार्थना की और पृथ्वी ने उन्हें अपने में समा लिया। राम ने राज्य लव-कुश को सौंपा और सरयू में प्रवेश करके विष्णु रूप में वैकुंठ लौट गए।

| रामायण का अंतिम संदेश

इस प्रकार रामायण का समापन त्याग, धर्म और करुणा के शाश्वत संदेश के साथ हुआ।
`,

  keyElements: [
    "Rama Rajya",
    "Ayodhya",
    "Sarayu River",
    "Sita’s Exile",
    "Valmiki Ashrama",
    "Lava and Kusha",
    "Ashwamedha Yagna",
    "Earth’s Embrace",
    "Rama’s Return to Vaikuntha"
  ],
  keyElementsHindi: [
    "रामराज्य",
    "अयोध्या",
    "सरयू नदी",
    "सीता का निर्वासन",
    "वाल्मीकि आश्रम",
    "लव-कुश",
    "अश्वमेध यज्ञ",
    "पृथ्वी में समाना",
    "राम का वैकुंठ लौटना"
  ],
  keyElementsTelugu: [
    "రామరాజ్యం",
    "అయోధ్య",
    "సరయు నది",
    "సీత త్యాగం",
    "వాల్మీకి ఆశ్రమం",
    "లవ కుశులు",
    "అశ్వమేధ యజ్ఞం",
    "భూమి ఆమోదం",
    "రాముని వైకుంఠం తిరుగు ప్రయాణం"
  ],

  moral: "Dharma often demands painful sacrifice, but it alone sustains the world.",
  moralHindi: "धर्म की रक्षा हेतु त्याग आवश्यक होता है।",
  moralTelugu: "ధర్మ పరిరక్షణకు త్యాగం అనివార్యం.",

  image: "/story-uttara-kanda.jpg",
  chapter: 7
},
];

export const mahabharataStories: Story[] = [
{
  id: "adi-parva",
  epic: "mahabharata",
  title: "Adi Parva – The Book of Beginnings",
  titleHindi: "आदि पर्व – आरंभ की कथा",
  titleTelugu: "ఆది పర్వం – ఆరంభ గాథ",

  summary: "Adi Parva narrates the origin of the Kuru dynasty, the stories of Shantanu, Bhishma, Vyasa, and the births of the Pandavas and Kauravas, laying the foundation for the Mahabharata.",
  summaryHindi: "आदि पर्व में कुरु वंश की उत्पत्ति, शांतनु, भीष्म, व्यास तथा पांडवों और कौरवों के जन्म की कथा वर्णित है, जो महाभारत की नींव रखती है।",
  summaryTelugu: "ఆది పర్వంలో కురు వంశ ఆరంభం, శంతనుడు, భీష్ముడు, వ్యాసుడు మరియు పాండవులు-కౌరవుల జనన కథలు వివరించబడి మహాభారతానికి పునాది వేయబడుతుంది.",

  content: `
| ORIGIN OF THE KURU DYNASTY

The Mahabharata begins with the mighty Kuru dynasty, ruling from the city of Hastinapura. King Shantanu, renowned for his wisdom, courage, and devotion to dharma, governed with justice and compassion. The kingdom flourished under his leadership, and the seeds of destiny for future generations were sown.

| SHANTANU AND GANGA

While walking along the banks of the sacred Ganga, Shantanu saw the river goddess Ganga. Enchanted by her beauty and divinity, he married her under the solemn vow that he would never question her actions. From this union was born Devavrata, later called Bhishma, who took the terrible vow of lifelong celibacy to ensure the continuity of the royal lineage.

| SHANTANU AND SATYAVATI

After Ganga returned to the heavens, Shantanu married Satyavati. They had two sons, Chitrangada and Vichitravirya. Both sons died young without heirs, creating a crisis in the Kuru lineage. To preserve the dynasty, Satyavati called upon her firstborn, Sage Vyasa, who fathered Dhritarashtra, Pandu, and Vidura through the practice of niyoga.

| BIRTH OF PANDAVAS AND KAURAVAS

Pandu married Kunti and Madri. Through divine blessings, Kunti bore Yudhishthira, Bhima, and Arjuna, while Madri bore Nakula and Sahadeva. Dhritarashtra married Gandhari, who blindfolded herself in devotion to her husband, and gave birth to a hundred sons, the Kauravas, led by Duryodhana.

| CHILDHOOD AND EDUCATION

The Pandavas and Kauravas were raised together under royal tutors and sages. They mastered archery, statecraft, and sacred knowledge. While the Pandavas grew virtuous and disciplined, Duryodhana’s jealousy and greed for power intensified.

| SEEDS OF FUTURE CONFLICT

Early rivalry, envy, and competition among the cousins planted the seeds for the great Kurukshetra war, where dharma and adharma would clash.

`,

  contentTelugu: `
| కురు వంశ ఆరంభం

మహాభారతం హస్తినాపురాన్ని రాజధానిగా చేసుకుని పాలించిన కురు వంశంతో ప్రారంభమవుతుంది. ధర్మాన్ని, జ్ఞానాన్ని, ధైర్యాన్ని పరిగణించిన రాజు శంతనుడు న్యాయం మరియు దయతో పాలించాడు. ఈ రాజ్యానికి శాంతి మరియు సౌభాగ్యము లభించింది, భవిష్యత్తు తరాల విధిని ఏర్పరిచే బీజాలు విత్తబడాయి.

| శంతనుడు మరియు గంగ

పవిత్ర గంగానది తీరంలో శాంతనుడు గంగాదేవిని చూశాడు. ఆమె అందం మరియు దివ్యత్వం శాంతనుడిని ఆకట్టుకుంది. తన జీవిత భాగస్వామిగా ఆమెను వివాహం చేసుకున్నాడు, మరియు ఆమె చర్యలను ఎప్పుడూ ప్రశ్నించకూడదని వ్రతం తీసుకున్నాడు. వారి కలయికలో జన్మించిన దేవవ్రతుడు, భవిష్యత్తులో భీష్ముడిగా ప్రసిద్ధి పొందాడు, రాజ్య వంశాన్ని కాపాడటానికి జీవితాంతం బ్రహ్మచర్య వ్రతం తీసుకున్నాడు.

| శంతనుడు మరియు సత్యవతి

గంగాదేవి స్వర్గానికి తిరిగిన తర్వాత శంతనుడు సత్యవతిని వివాహం చేసుకున్నాడు. వారికి చిత్రాంగదుడు మరియు విచిత్రవీర్యుడు జన్మించారు. వారు చిన్న వయసులో మరణించటంతో కురు వంశంలో సంక్షోభం ఏర్పడింది. వంశాన్ని నిలిపేందుకు సత్యవతి తన మొదటి కుమారుడైన వ్యాస మహర్షిని పిలిచి, నియోగం ద్వారా ధృతరాష్ట్రుడు, పాండు మరియు విదురుడు జన్మించారు.

| పాండవులు మరియు కౌరవులు

పాండు కుంతి మరియు మాద్రిని వివాహం చేసుకున్నాడు. కున్తి ద్వారా యుధిష్టిరుడు, భీముడు, అర్జునుడు, మాద్రి ద్వారా నకులుడు, సహదేవుడు జన్మించారు. ధృతరాష్ట్రుడు గాంధరి తో వివాహం చేసుకున్నాడు, ఆమె తన భర్త కోసం కన్ను మూసుకుని నమ్మకంగా జీవించి, వంద కుమారులను జన్మించారు, వీరి నాయకుడు దుర్యోధనుడు.

| బాల్యం మరియు విద్యాభ్యాసం

పాండవులు మరియు కౌరవులు రాజ్య గురువుల వద్ద పెరిగి విద్య, ధనుర్విద్య, రాజశాస్త్రం మరియు ధార్మిక జ్ఞానం నేర్చుకున్నారు. పాండవులు నైతికత మరియు నియమపాలనలో పెరిగారు, కానీ దుర్యోధనునిలో అసూయ మరియు శక్తి కోరిక పెరిగింది.

| భవిష్యత్తు ఘర్షణల విత్తనాలు

క్రింద వ్యతిరేకత, అసూయ, మరియు పరస్పర పోటీ భవిష్యత్తులో కురుక్షేత్ర యుద్ధానికి బీజమివ్వడం జరిగింది, అప్పుడు ధర్మం మరియు అధర్మం ఎదురుద్దిరవుతాయి.

`,

  contentHindi: `
| कुरु वंश की उत्पत्ति

महाभारत की शुरुआत हास्तिनापुर में शासन करने वाले कुरु वंश से होती है। राजा शांतनु, जो बुद्धिमान, साहसी और धर्मनिष्ठ थे, ने न्याय और करुणा से राज्य का संचालन किया। राज्य में शांति और समृद्धि थी और भविष्य की पीढ़ियों का भाग्य तय होने लगा।

| शांतनु और गंगा

गंगा नदी के तट पर शांतनु ने गंगा देवी को देखा। उनके सौंदर्य और दिव्यता से मोहित होकर उन्होंने उन्हें पत्नी बनाया और प्रतिज्ञा ली कि उनकी हर क्रिया पर कभी प्रश्न नहीं करेंगे। उनके पुत्र देवव्रत, जिसे बाद में भीष्म कहा गया, ने राजवंश की रक्षा के लिए जीवनभर ब्रह्मचर्य का व्रत लिया।

| शांतनु और सत्यवती

गंगा के स्वर्गारोहण के बाद शांतनु ने सत्यवती से विवाह किया। उनके दो पुत्र हुए, चित्रांगद और विचित्रवीर्य। दोनों की अल्पायु में मृत्यु हो गई, जिससे कुरु वंश संकट में पड़ा। वंश को बचाने के लिए व्यास महर्षि ने नियोग द्वारा धृतराष्ट्र, पांडु और विदुर को जन्म दिया।

| पांडव और कौरव

पांडु ने कुंती और माद्री से संतानें प्राप्त की: युधिष्ठिर, भीम, अज्ञात, नकुल और सहदेव। धृतराष्ट्र ने गांधारी से विवाह किया और वचनबद्ध होकर अपनी आंखें ढक लीं, जिससे उन्हें सौ पुत्र प्राप्त हुए। इनमें दुर्योधन मुख्य था।

| बाल्यकाल और शिक्षा

पांडव और कौरव राजकीय गुरुओं के अधीन बड़े हुए। उन्होंने धनुर्विद्या, राज्यशास्त्र और धार्मिक ज्ञान सीखा। पांडव गुणी और अनुशासित हुए, जबकि दुर्योधन में ईर्ष्या और सत्ता की लालसा बढ़ी।

| भविष्य के संघर्ष की बीज

किशोरावस्था में ही भाईचारे में असंतोष और ईर्ष्या ने भविष्य के कुरुक्षेत्र युद्ध की नींव रख दी, जिसमें धर्म और अधर्म का टकराव हुआ।

`,

  keyElements: [
    "Kuru Dynasty",
    "Shantanu and Ganga",
    "Bhishma’s Vow",
    "Satyavati and Vyasa",
    "Birth of Pandavas",
    "Birth of Kauravas",
    "Childhood Education",
    "Seeds of Conflict"
  ],
  keyElementsHindi: [
    "कुरु वंश",
    "शांतनु और गंगा",
    "भीष्म का व्रत",
    "सत्यवती और व्यास",
    "पांडवों का जन्म",
    "कौरवों का जन्म",
    "बाल्यकाल शिक्षा",
    "संघर्ष के बीज"
  ],
  keyElementsTelugu: [
    "కురు వంశం",
    "శంతనుడు మరియు గంగా",
    "భీష్మ వ్రతం",
    "సత్యవతి మరియు వ్యాసుడు",
    "పాండవుల జననం",
    "కౌరవుల జననం",
    "బాల్య విద్య",
    "సంఘర్షణ విత్తనాలు"
  ],

  moral: "The destiny of generations is shaped by early choices guided by dharma.",
  moralHindi: "पीढ़ियों का भविष्य धर्म और कर्म से निर्धारित होता है।",
  moralTelugu: "ధర్మం మరియు కర్మలే తరాల భవితవ్యాన్ని నిర్ణయిస్తాయి.",

  image: "/story-adi-parva.jpg",
  chapter: 1
},
{
  id: "sabha-parva",
  epic: "mahabharata",
  title: "Sabha Parva – The Book of the Assembly Hall",
  titleHindi: "सभा पर्व – सभागृह की कथा",
  titleTelugu: "సభా పర్వం – సభాగృహ గాథ",

  summary: "Sabha Parva describes the rise of Indraprastha, Yudhishthira’s glorious rule, the deceitful game of dice, Draupadi’s humiliation, and the exile of the Pandavas.",
  summaryHindi: "सभा पर्व में इंद्रप्रस्थ की स्थापना, युधिष्ठिर का धर्मपूर्ण शासन, कपटपूर्ण द्यूत क्रीड़ा, द्रौपदी का अपमान और पांडवों का वनवास वर्णित है।",
  summaryTelugu: "సభా పర్వంలో ఇంద్రప్రస్థ అభివృద్ధి, యుధిష్ఠిరుని ధర్మపరమైన పాలన, మాయద్యూతం, ద్రౌపది అవమానం మరియు పాండవుల వనవాసం వివరించబడుతుంది.",

  content: `
| ESTABLISHMENT OF INDRAPRASTHA

After the Pandavas completed their training under Drona, Kripa, and other royal teachers, King Dhritarashtra granted them a part of the Kuru kingdom. Guided by wise ministers and elders like Vidura, the Pandavas constructed a magnificent city called Indraprastha, filled with palaces, gardens, and temples, reflecting divine prosperity and human ingenuity.

| YUDHISHTHIRA’S GLORIOUS RULE

Yudhishthira, the eldest Pandava, was crowned king. Under his just and dharmic rule, the city flourished. Citizens enjoyed peace and justice, commerce thrived, and scholars, sages, and artists gathered in Indraprastha. Bhima ensured security, Arjuna trained soldiers and protected borders, Nakula and Sahadeva managed cattle, horses, and agriculture, while Draupadi encouraged social harmony.

| DURYODHANA’S ENVY

The splendor of Indraprastha fueled Duryodhana’s jealousy. His resentment grew as he compared Indraprastha’s grandeur to the decayed city of Hastinapura, leading him to plot against the Pandavas with his uncle Shakuni’s cunning.

| THE GAME OF DICE

Shakuni invited Yudhishthira to a dice game. Bound by dharma, honor, and hospitality, Yudhishthira accepted. Using loaded dice, Shakuni manipulated the game. Yudhishthira lost his kingdom, wealth, brothers, and finally Draupadi. This deceitful act humiliated the Pandavas and initiated their exile.

| DRAUPADI’S HUMILIATION

Duryodhana ordered Draupadi to be dragged to the assembly hall. Before elders, kings, and warriors, she was humiliated. Draupadi called upon Lord Krishna, whose divine intervention made her sari endless, preserving her dignity and teaching that divine justice protects the righteous.

| EXILE OF THE PANDAVAS

According to the dice game’s terms, the Pandavas were sentenced to twelve years of forest exile followed by one year of living in disguise (Agyatavasa). This period tested their resilience, wisdom, and adherence to dharma, shaping their character for future challenges.

`,

  contentTelugu: `
| ఇంద్రప్రస్థ స్థాపన

పాండవులు ద్రోణ, కృప మరియు ఇతర గురువుల వద్ద శిక్షణ పూర్తిచేసిన తర్వాత ధృతరాష్ట్రుడు వారికి కురు రాజ్యంలోని భాగాన్ని ఇచ్చాడు. విద్యావంతులైన మంత్రులు మరియు విదురుల సలహాలతో, వారు ఇంద్రప్రస్థ అనే మహానగరం నిర్మించారు. ఈ నగరంలో రాజభవనాలు, తోటలు, దేవాలయాలు ఉన్నాయి, ఇవి దివ్య సంపద మరియు మానవ నైపుణ్యాన్ని ప్రతిబింబిస్తాయి.

| యుధిష్టిరుని మహానుభావ పాలన

పాండవుల్లో అగ్రగామి యుధిష్టిరుడు రాజుగా అయ్యాడు. ధర్మపరమైన మరియు న్యాయపరమైన పాలనలో రాజ్యం వికసించాయి. ప్రజలు శాంతి మరియు న్యాయం పొందారు, వాణిజ్యం అభివృద్ధి చెందింది. భీముడు రక్షణను చూసి, అర్జునుడు సైనికులను శిక్షణ ఇచ్చాడు. నకులుడు, సహదేవుడు పశుపాలకులు మరియు వ్యవసాయాన్ని చూసుకున్నారు. ద్రౌపది సామాజిక సౌభిక్యతకు ప్రేరణ ఇచ్చింది.

| దుర్యోధనుని అసూయ

ఇంద్రప్రస్థ వైభవం దుర్యోధనుని అసూయ పెంచింది. హస్తినాపురం పాతగా ఉండటంతో, తన శత్రువులను ప్రతికూలంగా చూడటంతో, దుర్యోధనుడు పాండవులపై కుట్ర పన్నడానికి శకుని సహాయాన్ని కోరాడు.

| మాయద్యూతం

శకుని దుర్వినియోగంతో యుధిష్టిరుడు ద్యూత క్రీడలో ఆహ్వానించబడ్డాడు. క్రీడలో ఆయన తన రాజ్యం, ధన, సోదరులు, మరియు చివరగా ద్రౌపదిని కోల్పోయాడు. ఈ మోసపూరిత క్రీడ పాండవులను అవమానానికి గురి చేసింది.

| ద్రౌపది అవమానం

దుర్యోధనుడు ద్రౌపదిని సభలోకి తెచ్చమని ఆదేశించాడు. వృద్ధులు, రాజులు, యోధుల ముందు ఆమెను అవమానించారు. ద్రౌపది కృష్ణుని భక్తితో పరిగణిస్తూ తన గౌరవాన్ని కాపాడింది. ఆమె దైవసహాయం ద్వారా దాస్యభావం నుంచి విముక్తి పొందింది.

| పాండవుల వనవాసం

ద్యూత క్రీడా నిబంధనల ప్రకారం, పాండవులు పన్నెండు సంవత్సరాల వనవాసం, తరువాత ఒక సంవత్సరం అజ్ఞాతవాసం చేయాల్సి వచ్చింది. ఇది వారి ధర్మపరమైన, ధైర్యం మరియు జ్ఞాన పరీక్ష కాలం, భవిష్యత్తులో ఎదురయ్యే సవాళ్ల కోసం శిక్షణగా మారింది.

`,

  contentHindi: `
| इंद्रप्रस्थ की स्थापना

पांडवों ने द्रोण, कृपा और अन्य गुरुओं से प्रशिक्षण प्राप्त किया। धृतराष्ट्र ने उन्हें कुरु राज्य का एक हिस्सा प्रदान किया। विद्वान मंत्री और विदुर की सलाह से उन्होंने इंद्रप्रस्थ नामक महानगर बनाया, जिसमें महल, उद्यान और मंदिर थे, जो दिव्य संपदा और मानव कौशल का प्रतीक थे।

| युधिष्ठिर का धर्मपरायण शासन

पांडवों में सबसे बड़े युधिष्ठिर को राजा बनाया गया। उनके न्यायपूर्ण शासन में राज्य फल-फूल गया। नागरिक शांतिपूर्ण और सुरक्षित रहे। भीम सुरक्षा सुनिश्चित करता, अर्जुन सैनिकों को प्रशिक्षित करता और सीमाओं की रक्षा करता। नकुल और सहदेव पशुपालन और कृषि संभालते। द्रौपदी सामाजिक सामंजस्य बनाए रखने में मदद करती।

| दुर्योधन की ईर्ष्या

इंद्रप्रस्थ की वैभवता ने दुर्योधन में ईर्ष्या उत्पन्न की। हास्तिनापुर की स्थिति देखकर और अपने विरोधियों से प्रतिस्पर्धा देखकर, उसने शकुनि के साथ पांडवों के खिलाफ योजना बनाई।

| द्यूत क्रीड़ा

शकुनि के चालाकीपूर्ण क़दमों से युधिष्ठिर को द्यूत क्रीड़ा में आमंत्रित किया गया। खेल में उन्होंने राज्य, धन, भाइयों और अंत में द्रौपदी को खो दिया। इस छलपूर्ण क्रीड़ा ने पांडवों को अपमानित किया और उनके वनवास की शुरुआत हुई।

| द्रौपदी का अपमान

सभा में दुर्योधन ने द्रौपदी को लाने का आदेश दिया। सभी के सामने उनका अपमान हुआ। द्रौपदी ने भगवान कृष्ण से सहायता मांगी, जिन्होंने उनके वस्त्र को अनंत किया और उनका सम्मान सुरक्षित रखा। 

| पांडवों का वनवास

द्यूत क्रीड़ा की शर्तों के अनुसार, पांडव बारह वर्षों के वनवास और एक वर्ष के अज्ञातवास को स्वीकार करते हैं। यह काल उनके साहस, ज्ञान और धर्म पालन की परीक्षा बन गया।

`,

  keyElements: [
    "Indraprastha Construction",
    "Yudhishthira’s Rule",
    "Duryodhana’s Envy",
    "Game of Dice",
    "Draupadi’s Humiliation",
    "Pandavas’ Exile"
  ],
  keyElementsHindi: [
    "इंद्रप्रस्थ निर्माण",
    "युधिष्ठिर का शासन",
    "दुर्योधन की ईर्ष्या",
    "द्यूत क्रीड़ा",
    "द्रौपदी का अपमान",
    "पांडवों का वनवास"
  ],
  keyElementsTelugu: [
    "ఇంద్రప్రస్థ నిర్మాణం",
    "యుధిష్టిరుని పాలన",
    "దుర్యోధనుని అసూయ",
    "మాయద్యూతం",
    "ద్రౌపది అవమానం",
    "పాండవుల వనవాసం"
  ],

  moral: "Pride and deceit destroy, whereas righteousness and faith protect.",
  moralHindi: "अहंकार और छल नाश लाते हैं, धर्म और श्रद्धा रक्षा करते हैं।",
  moralTelugu: "అహంకారం మరియు మోసం నాశనం చేస్తాయి, ధర్మం మరియు భక్తి రక్షణ ఇస్తాయి.",

  image: "/story-sabha-parva.jpg",
  chapter: 2
}
,{
  id: "vana-parva",
  epic: "mahabharata",
  title: "Vana Parva – The Book of the Forest",
  titleHindi: "वन पर्व – अरण्य की कथा",
  titleTelugu: "వన పర్వం – అరణ్య గాథ",

  summary:
    "Vana Parva narrates the twelve-year forest exile of the Pandavas, their life of hardship, encounters with sages and demons, spiritual growth, and preparation for the future war.",
  summaryHindi:
    "वन पर्व में पांडवों के बारह वर्षों के वनवास, कठिन जीवन, ऋषियों से भेंट, दैवी अस्त्रों की प्राप्ति और युद्ध की तैयारी का वर्णन है।",
  summaryTelugu:
    "వన పర్వంలో పాండవుల పన్నెండు సంవత్సరాల వనవాసం, అరణ్య జీవితం, ఋషులతో భేటీలు, దైవాస్త్రాల సాధన మరియు యుద్ధ సిద్ధత వివరించబడుతుంది.",

  content: `
| BEGINNING OF THE FOREST EXILE

After losing the game of dice, the Pandavas, along with Draupadi, were sent into exile for twelve years, followed by one year of living in disguise. Leaving behind the splendor of Indraprastha, they entered the vast and untamed forests, guided by faith, duty, and mutual support.

| LIFE IN THE FORESTS

The forests were dense, beautiful, and filled with hidden dangers. The Pandavas adapted to a simple life, dwelling in hermitages, practicing meditation, gathering food, and serving sages engaged in sacred rituals.

| DUTIES OF THE PANDAVAS

Yudhishthira remained steadfast in dharma, performing daily prayers and guiding his brothers with patience and wisdom. Bhima protected the family and hunted in the forest using his immense strength. Arjuna practiced archery relentlessly and sought advanced knowledge of warfare. Nakula and Sahadeva cared for cattle, horses, and the daily needs of the hermitage.

| ROLE OF DRAUPADI

Draupadi stood as a pillar of strength throughout the exile. She managed household responsibilities, offered emotional support, and encouraged the Pandavas during moments of despair. Her dignity, faith, and courage held the family together.

| ENCOUNTERS WITH SAGES AND DIVINE BEINGS

During their forest journey, the Pandavas encountered numerous sages who imparted spiritual wisdom, moral guidance, and lessons of righteous conduct. Through intense penance, Arjuna pleased Lord Shiva and other celestial beings, receiving powerful divine weapons.

| BATTLES AND TRIALS IN THE FOREST

The Pandavas faced many trials, including attacks by demons and mystical beings who sought to disturb their penance. Bhima defeated fearsome demons such as Kirmira and Bakasura, protecting sages and the innocent from terror.

| SPIRITUAL GROWTH AND PREPARATION

Every challenge in the forest strengthened the Pandavas’ character, discipline, and unity. The wisdom gained from sages, the divine weapons acquired, and the hardships endured prepared them mentally and spiritually for the great war that lay ahead.

`,

  contentTelugu: `
| వనవాస ఆరంభం

పాచికల ఆటలో ఓడిన తరువాత పాండవులు ద్రౌపదితో కలిసి పన్నెండు సంవత్సరాల వనవాసానికి పంపబడ్డారు. ఇంద్రప్రస్థ వైభవాన్ని వదిలి వారు అరణ్యాలలోకి ప్రవేశించారు.

| అరణ్య జీవితం

అరణ్యాలు అందంగా ఉన్నప్పటికీ ప్రమాదాలతో నిండినవిగా ఉండేవి. పాండవులు తపస్సు, సాధన, ఋషుల సేవతో సరళ జీవితం గడిపారు.

| పాండవుల బాధ్యతలు

యుధిష్ఠిరుడు ధర్మాన్ని అనుసరించి అన్నదమ్ములను మార్గనిర్దేశం చేశాడు. భీముడు రక్షణ మరియు వేట బాధ్యతలు చేపట్టాడు. అర్జునుడు ధనుర్విద్యలో సాధన చేశాడు. నకులుడు, సహదేవుడు ఆశ్రమ సంరక్షణ నిర్వహించారు.

| ద్రౌపది పాత్ర

ద్రౌపది ధైర్యంగా కుటుంబాన్ని నిలబెట్టింది. ఆమె సహనం, విశ్వాసం పాండవులకు బలాన్నిచ్చాయి.

| ఋషులు మరియు దైవ అనుగ్రహం

అరణ్యంలో ఋషుల ద్వారా ఆధ్యాత్మిక బోధనలు పొందారు. అర్జునుడు తపస్సుతో శివుడి అనుగ్రహం పొంది దైవాస్త్రాలు సాధించాడు.

| అరణ్య పరీక్షలు

కిర్మీరుడు, బకాసురుడు వంటి రాక్షసులతో భీముడు పోరాడి ధర్మాన్ని కాపాడాడు.

`,

  contentHindi: `
| वनवास का आरंभ

द्यूत क्रीड़ा में पराजय के बाद पांडव द्रौपदी सहित बारह वर्षों के वनवास को गए। उन्होंने इंद्रप्रस्थ का वैभव त्याग दिया।

| वन जीवन

वन सुंदर होने के साथ-साथ खतरों से भरे थे। पांडवों ने आश्रमों में रहकर तप, सेवा और साधना का जीवन अपनाया।

| पांडवों की भूमिकाएँ

युधिष्ठिर धर्म का पालन करते हुए नेतृत्व करते रहे। भीम ने रक्षा और शिकार किया। अर्जुन ने अस्त्र-शस्त्र विद्या में अभ्यास किया। नकुल और सहदेव आश्रम की देखभाल करते रहे।

| द्रौपदी का साहस

द्रौपदी ने हर कठिनाई में पांडवों का मनोबल बढ़ाया और गरिमा बनाए रखी।

| ऋषि और दिव्य वरदान

अर्जुन ने तपस्या द्वारा शिव से दिव्य अस्त्र प्राप्त किए। ऋषियों ने पांडवों को नीति और धर्म की शिक्षा दी।

`,

  keyElements: [
    "Forest Exile",
    "Life of Simplicity",
    "Draupadi’s Strength",
    "Encounters with Sages",
    "Arjuna’s Penance",
    "Divine Weapons",
    "Spiritual Preparation"
  ],
  keyElementsHindi: [
    "वनवास",
    "सरल जीवन",
    "द्रौपदी की शक्ति",
    "ऋषियों से भेंट",
    "अर्जुन की तपस्या",
    "दिव्य अस्त्र",
    "आध्यात्मिक तैयारी"
  ],
  keyElementsTelugu: [
    "వనవాసం",
    "సరళ జీవితం",
    "ద్రౌపది బలం",
    "ఋషులతో భేటీలు",
    "అర్జును తపస్సు",
    "దైవాస్త్రాలు",
    "ఆధ్యాత్మిక సిద్ధత"
  ],

  moral: "True strength is forged through hardship, faith, and unwavering adherence to dharma.",
  moralHindi: "कठिनाइयों, श्रद्धा और धर्म से ही सच्ची शक्ति का निर्माण होता है।",
  moralTelugu: "కష్టాలు, విశ్వాసం మరియు ధర్మమే నిజమైన బలాన్ని ఇస్తాయి.",

  image: "/story-vana-parva.jpg",
  chapter: 3
},
{
  id: "virata-parva",
  epic: "mahabharata",
  title: "Virata Parva – The Book of Virata",
  titleHindi: "विराट पर्व – विराट की कथा",
  titleTelugu: "విరాట పర్వం – విరాట గాథ",

  summary:
    "Virata Parva narrates the final year of the Pandavas’ exile spent in disguise, their service to King Virata, hidden acts of heroism, and successful completion of Agyatavasa.",
  summaryHindi:
    "विराट पर्व में पांडवों का अज्ञातवास, विराट राज्य में उनका गुप्त जीवन, वीरता के कार्य और निर्वासन की शर्तों की पूर्णता का वर्णन है।",
  summaryTelugu:
    "విరాట పర్వంలో పాండవుల అజ్ఞాతవాసం, విరాట రాజ్యంలో వేషధారణలో జీవితం, గుప్త వీరత్వం మరియు నిర్బంధ కాలం విజయవంతంగా పూర్తవడం వివరించబడుతుంది.",

  content: `
| BEGINNING OF AGYATAVASA

After completing twelve years of forest exile, the Pandavas were required to spend one final year living in complete secrecy. This incognito period, known as Agyatavasa, demanded that they hide their identities entirely or face another twelve years of exile.

| ARRIVAL IN THE KINGDOM OF VIRATA

To fulfill this condition, the Pandavas traveled to the kingdom of Virata, ruled by King Virata. There, they assumed humble roles within the palace and among the people, concealing their royal identities while serving the kingdom faithfully.

| DISGUISES OF THE PANDAVAS

Yudhishthira took the name Kanka and served as a wise courtier and advisor. Bhima became Valala, a cook in the royal kitchen, disguising his immense strength through ordinary labor. Arjuna assumed the form of Brihannala, a dance and music teacher, hiding his unmatched skill in archery. Nakula worked as a caretaker of horses, while Sahadeva served as a cowherd, tending cattle with diligence. Draupadi, under the name Sairandhri, served Queen Sudeshna as a maid, performing her duties with grace and restraint.

| LIFE IN DISGUISE

Though living in concealment, the Pandavas remained vigilant. Each carried out their responsibilities with discipline, ensuring their identities remained hidden while protecting the kingdom from internal and external threats.

| THREATS TO VIRATA’S KINGDOM

During the incognito year, the kingdom of Virata faced invasions by the Trigartas and later by the Kauravas. The Pandavas, bound by secrecy, intervened carefully to safeguard the kingdom without exposing themselves.

| ARJUNA’S REVEALED HEROISM

When the Kauravas attempted to seize Virata’s cattle, Arjuna temporarily revealed his true identity. Using divine weapons, he single-handedly defeated the attackers and recovered the cattle. Despite this act of valor, the secrecy of the Pandavas was preserved until the year’s end.

| COURAGE AND WISDOM IN HIDING

Bhima defended the palace and royal household during times of danger. Draupadi maintained dignity and offered strength to the royal family. Yudhishthira provided counsel to King Virata, resolving disputes and guiding the kingdom with wisdom.

| COMPLETION OF AGYATAVASA

At the end of the incognito year, the Pandavas successfully completed the terms of their exile. They revealed their true identities, earning the admiration and gratitude of King Virata and his people.

`,

  contentTelugu: `
| అజ్ఞాతవాస ఆరంభం

పన్నెండు సంవత్సరాల వనవాసం పూర్తయ్యాక పాండవులు ఒక సంవత్సరం అజ్ఞాతవాసం చేయాల్సి వచ్చింది. తమ గుర్తింపులు బయటపడితే మళ్లీ వనవాసం చేయాల్సి ఉండేది.

| విరాట రాజ్యంలో ప్రవేశం

పాండవులు విరాట రాజ్యానికి వెళ్లి విభిన్న వేషధారణలతో రాజసభలో సేవ చేశారు.

| పాండవుల వేషధారణలు

యుధిష్ఠిరుడు కంకుడిగా సలహాదారుడయ్యాడు. భీముడు వలాలుడిగా వంటగదిలో పని చేశాడు. అర్జునుడు బృహన్నలగా నృత్య సంగీత బోధకుడయ్యాడు. నకులుడు గుర్రాల సంరక్షకుడిగా, సహదేవుడు పశుపాలకుడిగా సేవ చేశాడు. ద్రౌపది సైరంధ్రీగా రాణి సుదేష్ణ సేవలో ఉంది.

| విరాట రాజ్యంపై దాడులు

త్రిగర్తులు మరియు కౌరవులు దాడి చేయగా పాండవులు గుప్తంగా రాజ్యాన్ని రక్షించారు.

| అర్జునుని వీరత్వం

పశువులను దోచుకునే ప్రయత్నం చేసిన కౌరవులను అర్జునుడు ఓడించాడు.

| అజ్ఞాతవాస ముగింపు

అజ్ఞాతవాసం విజయవంతంగా పూర్తయి పాండవులు తమ స్వరూపాన్ని వెల్లడించారు.

`,

  contentHindi: `
| अज्ञातवास का आरंभ

बारह वर्षों के वनवास के बाद पांडवों को एक वर्ष का अज्ञातवास करना पड़ा, जिसमें पहचान छिपाना अनिवार्य था।

| विराट राज्य में प्रवेश

पांडव विराट के राज्य में वेश बदलकर सेवा में लगे।

| पांडवों के वेश

युधिष्ठिर कंक बनकर सलाहकार बने। भीम वलाल नामक रसोइया बना। अर्जुन बृहन्नला बनकर नृत्य-संगीत सिखाने लगे। नकुल अश्वपाल और सहदेव ग्वाला बने। द्रौपदी सैरंध्री बनकर रानी सुदेष्णा की सेवा करने लगी।

| राज्य पर संकट

त्रिगर्त और कौरवों के आक्रमण के समय पांडवों ने गुप्त रूप से रक्षा की।

| अर्जुन का पराक्रम

अर्जुन ने कौरवों को पराजित कर विराट की गायों की रक्षा की।

| अज्ञातवास की पूर्णता

एक वर्ष पूरा होने पर पांडवों ने अपनी पहचान प्रकट की।

`,

  keyElements: [
    "Agyatavasa",
    "King Virata’s Kingdom",
    "Disguises of the Pandavas",
    "Hidden Heroism",
    "Cattle Raid",
    "Completion of Exile"
  ],
  keyElementsHindi: [
    "अज्ञातवास",
    "राजा विराट का राज्य",
    "पांडवों के वेश",
    "गुप्त वीरता",
    "गायों की रक्षा",
    "वनवास की पूर्णता"
  ],
  keyElementsTelugu: [
    "అజ్ఞాతవాసం",
    "విరాట రాజ్యం",
    "పాండవుల వేషధారణలు",
    "గుప్త వీరత్వం",
    "పశువుల రక్షణ",
    "వనవాసం పూర్తి"
  ],

  moral: "Patience, humility, and strategy are as powerful as strength and valor.",
  moralHindi: "धैर्य, विनम्रता और रणनीति ही सच्ची शक्ति हैं।",
  moralTelugu: "సహనం, వినయం మరియు వ్యూహమే నిజమైన బలం.",

  image: "/story-virata-parva.jpg",
  chapter: 4
},
{
  id: "udyoga-parva",
  epic: "mahabharata",
  title: "Udyoga Parva – The Book of Effort",
  titleHindi: "उद्योग पर्व – युद्ध की तैयारी",
  titleTelugu: "ఉద్యోగ పర్వం – యుద్ధ సిద్ధత",

  summary:
    "Udyoga Parva describes the Pandavas’ final efforts for peace, Krishna’s diplomatic mission, the Kauravas’ rejection, and the intense preparations leading to the Kurukshetra war.",
  summaryHindi:
    "उद्योग पर्व में पांडवों के शांति प्रयास, कृष्ण की दूत यात्रा, कौरवों का इनकार और कुरुक्षेत्र युद्ध की तैयारी का वर्णन है।",
  summaryTelugu:
    "ఉద్యోగ పర్వంలో పాండవుల శాంతి ప్రయత్నాలు, కృష్ణుడి దౌత్యం, కౌరవుల నిరాకరణ మరియు కురుక్షేత్ర యుద్ధ సిద్ధత వివరించబడుతుంది.",

  content: `
| RETURN AFTER EXILE

After completing their forest exile and incognito year, the Pandavas returned, expecting justice and restoration of their rightful kingdom. However, their claims were denied, and tensions between the Pandavas and Kauravas intensified.

| FAILED PEACE EFFORTS

Yudhishthira repeatedly sought a peaceful settlement, requesting only a small portion of land to avoid bloodshed. Despite these efforts, Duryodhana remained arrogant and refused to yield even a single village.

| KRISHNA’S PEACE MISSION

Determined to prevent war, Lord Krishna undertook a diplomatic mission to Hastinapura. He approached the Kaurava court with humility and wisdom, urging Duryodhana to grant five villages to the Pandavas and preserve peace.

| REJECTION OF DHARMA

Duryodhana rejected Krishna’s counsel with pride and contempt. Blinded by ego and hunger for power, he dismissed the warnings and insulted Krishna, revealing that reconciliation was no longer possible.

| MOBILIZATION OF ALLIES

With peace efforts exhausted, both sides began gathering allies. The Kauravas sought support from powerful kings, while the Pandavas secured alliances through diplomacy and kinship. Warriors, rulers, and entire kingdoms pledged their support.

| LOYALTY AND DILEMMAS

Elders and teachers found themselves torn between loyalty and righteousness. Bhishma remained bound to the throne, while Drona agreed to fight out of duty, despite his affection for the Pandavas. These choices reflected the complex nature of dharma.

| PREPARATION FOR WAR

Armies were assembled with chariots, elephants, cavalry, and foot soldiers. Strategies were discussed, battle formations planned, and commanders prepared for the inevitable conflict at Kurukshetra.

| MORAL CONFLICTS

Even as preparations continued, both sides reflected on the moral cost of war. Questions of justice, duty, loyalty, and sacrifice dominated discussions, revealing the heavy burden carried by all involved.

`,

  contentTelugu: `
| వనవాసం అనంతరం తిరుగు ప్రయాణం

వనవాసం మరియు అజ్ఞాతవాసం పూర్తయ్యాక పాండవులు తమ హక్కుల కోసం తిరిగి వచ్చారు. కానీ న్యాయం లభించలేదు.

| శాంతి ప్రయత్నాలు విఫలం

యుధిష్ఠిరుడు యుద్ధం నివారించేందుకు భూమి的一భాగాన్ని మాత్రమే కోరాడు. అయినా దుర్యోధనుడు ఒప్పుకోలేదు.

| కృష్ణుని శాంతి దౌత్యం

యుద్ధాన్ని నివారించేందుకు కృష్ణుడు హస్తినాపురానికి వెళ్లి దుర్యోధనుడిని శాంతికి పిలిచాడు.

| ధర్మ నిరాకరణ

అహంకారంతో నిండిన దుర్యోధనుడు కృష్ణుని మాటలను తిరస్కరించాడు.

| మిత్రుల సమీకరణ

రెండు పక్షాలు తమ తమ మిత్రులను సమీకరించాయి. అనేక రాజ్యాలు యుద్ధానికి సిద్ధమయ్యాయి.

| విధి మరియు సందేహాలు

భీష్ముడు, ద్రోణుడు విధి మరియు ధర్మ మధ్య తడబడ్డారు.

| యుద్ధ సిద్ధత

సేనలు, వ్యూహాలు, యుద్ధ ఏర్పాట్లు వేగంగా జరిగాయి.

`,

  contentHindi: `
| वनवास के बाद वापसी

वनवास और अज्ञातवास पूर्ण होने के बाद पांडव अपने अधिकार की मांग लेकर लौटे, किंतु उन्हें न्याय नहीं मिला।

| शांति प्रयासों की विफलता

युधिष्ठिर ने युद्ध टालने के लिए केवल कुछ गाँव माँगे, परंतु दुर्योधन ने इनकार कर दिया।

| कृष्ण का शांति दूत बनना

कृष्ण ने हस्तिनापुर जाकर दुर्योधन को शांति का संदेश दिया।

| धर्म का अस्वीकार

अहंकार में डूबे दुर्योधन ने कृष्ण की बात ठुकरा दी।

| सेनाओं का गठन

दोनों पक्षों ने अपने-अपने सहयोगियों को एकत्र किया और युद्ध की तैयारी की।

| कर्तव्य और दुविधा

भीष्म और द्रोण जैसे योद्धा धर्म और निष्ठा के बीच फँसे रहे।

| युद्ध की तैयारी

सेनाएँ, रणनीतियाँ और युद्ध संरचनाएँ तैयार की गईं।

`,

  keyElements: [
    "Peace Negotiations",
    "Krishna’s Diplomacy",
    "Rejection by Duryodhana",
    "Alliance Formation",
    "Moral Dilemmas",
    "Preparation for Kurukshetra War"
  ],
  keyElementsHindi: [
    "शांति वार्ता",
    "कृष्ण की कूटनीति",
    "दुर्योधन का अस्वीकार",
    "मित्रता गठन",
    "नैतिक दुविधाएँ",
    "कुरुक्षेत्र युद्ध की तैयारी"
  ],
  keyElementsTelugu: [
    "శాంతి చర్చలు",
    "కృష్ణుడి దౌత్యం",
    "దుర్యోధనుని నిరాకరణ",
    "మిత్రుల సమీకరణ",
    "నైతిక సందేహాలు",
    "కురుక్షేత్ర యుద్ధ సిద్ధత"
  ],

  moral: "Peace must be pursued with sincerity, but when adharma prevails, righteous effort becomes a duty.",
  moralHindi: "जब अधर्म हावी हो जाए, तब धर्म के लिए प्रयास करना कर्तव्य बन जाता है।",
  moralTelugu: "అధర్మం ప్రబలితే ధర్మరక్షణ కోసం ప్రయత్నం కర్తవ్యమవుతుంది.",

  image: "/story-udyoga-parva.jpg",
  chapter: 5
},
{
  id: "bhishma-parva",
  epic: "mahabharata",
  title: "Bhishma Parva – The Book of Bhishma",
  titleHindi: "भीष्म पर्व – भीष्म की कथा",
  titleTelugu: "భీష్మ పర్వం – భీష్మ గాథ",

  summary:
    "Bhishma Parva marks the beginning of the Kurukshetra war, Bhishma’s command of the Kaurava army, and the divine revelation of the Bhagavad Gita to Arjuna.",
  summaryHindi:
    "भीष्म पर्व में कुरुक्षेत्र युद्ध का आरंभ, भीष्म का सेनापतित्व और अर्जुन को उपदेशित भगवद्गीता का दिव्य संदेश वर्णित है।",
  summaryTelugu:
    "భీష్మ పర్వంలో కురుక్షేత్ర యుద్ధారంభం, కౌరవ సేనాధిపతిగా భీష్ముడు మరియు అర్జునునికి ఉపదేశించిన భగవద్గీత సందేశం వివరించబడుతుంది.",

  content: `
| THE BATTLEFIELD OF KURUKSHETRA

The great battlefield of Kurukshetra was prepared for war as the Pandava and Kaurava armies assembled with countless warriors, chariots, elephants, and cavalry. The land echoed with conch shells, war cries, and the weight of destiny.

| BHISHMA AS COMMANDER

At the head of the Kaurava army stood Bhishma, the revered patriarch of the Kuru dynasty. Though he loved the Pandavas and upheld dharma, his vow-bound loyalty to the throne compelled him to fight for the Kauravas. His presence inspired awe and fear across both armies.

| FORMATION OF THE ARMIES

Bhishma skillfully arranged the Kaurava forces into powerful battle formations, deploying warriors with precision and strategy. On the Pandava side, Krishna took the role of Arjuna’s charioteer, guiding strategy and morale.

| ARJUNA’S DESPAIR

As the armies stood face to face, Arjuna gazed upon teachers, elders, friends, and relatives on both sides. Overcome with sorrow and moral confusion, he laid down his bow, refusing to fight against his own kin.

| THE TEACHING OF THE BHAGAVAD GITA

Krishna responded to Arjuna’s despair with profound wisdom, revealing the eternal teachings of the Bhagavad Gita. He explained the nature of dharma, karma, selfless action, devotion, and detachment, guiding Arjuna toward clarity and purpose.

| ARJUNA’S RESOLVE

Strengthened by Krishna’s teachings, Arjuna rose with renewed courage. Understanding his duty as a warrior, he prepared to fight without attachment to victory or defeat, dedicating his actions to righteousness.

| BATTLE UNDER BHISHMA

With the war underway, Bhishma displayed unmatched mastery in combat. His skill struck fear into the Pandava ranks as he defeated numerous warriors, yet always fought within the ethical boundaries of warfare.

| VALOR OF THE PANDAVAS

The Pandavas fought with coordination and courage. Yudhishthira upheld moral conduct, Bhima unleashed his strength against enemy ranks, and Arjuna countered Bhishma’s strategies with precision and discipline.

| KRISHNA’S GUIDANCE IN WAR

Throughout the battles, Krishna’s divine insight guided the Pandavas, ensuring that strategy, wisdom, and dharma shaped their actions even amid chaos and destruction.

`,

  contentTelugu: `
| కురుక్షేత్ర యుద్ధభూమి

పాండవులు, కౌరవులు అపార సేనలతో కురుక్షేత్రంలో యుద్ధానికి సిద్ధమయ్యారు. శంఖనాదాలు మరియు యుద్ధ ఘోషలు భూమిని కంపింపజేశాయి.

| కౌరవ సేనాధిపతి భీష్ముడు

కురు వంశ పితామహుడైన భీష్ముడు కౌరవ సేనకు నాయకత్వం వహించాడు. పాండవులపై ప్రేమ ఉన్నా రాజసింహాసనానికి విధేయత అతన్ని యుద్ధానికి బద్ధుడిని చేసింది.

| సేనల వ్యూహాలు

భీష్ముడు కౌరవ సేనను వ్యూహాత్మకంగా ఏర్పాటు చేశాడు. పాండవుల వైపు కృష్ణుడు అర్జునుని సారథిగా నిలిచాడు.

| అర్జునుని విషాదం

స్వజనులను ఎదుర్కొనే వేళ అర్జునుడు శోకంతో విల్లు వదిలి యుద్ధానికి నిరాకరించాడు.

| భగవద్గీత ఉపదేశం

కృష్ణుడు అర్జునునికి ధర్మం, కర్మ, భక్తి మరియు వైరాగ్యంపై భగవద్గీత ఉపదేశం చేశాడు.

| అర్జునుని ధైర్యం

కృష్ణుని బోధలతో అర్జునుడు తన కర్తవ్యాన్ని గ్రహించి యుద్ధానికి సిద్ధమయ్యాడు.

| భీష్ముని వీరత్వం

భీష్ముడు తన అపూర్వ యుద్ధ నైపుణ్యంతో పాండవ సేనను వణికించాడు.

`,

  contentHindi: `
| कुरुक्षेत्र का रणक्षेत्र

पांडव और कौरव विशाल सेनाओं के साथ कुरुक्षेत्र में एकत्र हुए। शंखनाद और युद्धघोष से वातावरण गूंज उठा।

| कौरवों के सेनापति भीष्म

कुरु वंश के पितामह भीष्म कौरव सेना के नेतृत्व में थे। धर्मप्रिय होते हुए भी उन्होंने सिंहासन के प्रति निष्ठा निभाई।

| युद्ध की व्यवस्था

भीष्म ने कौरव सेना को रणनीतिक रूप से सजाया। पांडवों की ओर से कृष्ण अर्जुन के सारथी बने।

| अर्जुन का विषाद

अपने स्वजनों को सामने देखकर अर्जुन शोकग्रस्त हो गए और युद्ध से पीछे हटने लगे।

| भगवद्गीता का उपदेश

कृष्ण ने अर्जुन को धर्म, कर्म, भक्ति और वैराग्य का दिव्य ज्ञान दिया।

| अर्जुन का निश्चय

गीता के उपदेश से अर्जुन ने अपने कर्तव्य को स्वीकार कर युद्ध के लिए धनुष उठाया।

| भीष्म का पराक्रम

भीष्म ने युद्ध में अद्भुत वीरता दिखाई और पांडवों की सेना को भारी क्षति पहुँचाई।

`,

  keyElements: [
    "Kurukshetra Battlefield",
    "Bhishma as Commander",
    "Battle Formations",
    "Arjuna’s Despair",
    "Bhagavad Gita",
    "Krishna’s Guidance",
    "Beginning of the Great War"
  ],
  keyElementsHindi: [
    "कुरुक्षेत्र रणक्षेत्र",
    "भीष्म का सेनापतित्व",
    "युद्ध व्यवस्था",
    "अर्जुन का विषाद",
    "भगवद्गीता",
    "कृष्ण की मार्गदर्शन",
    "महायुद्ध की शुरुआत"
  ],
  keyElementsTelugu: [
    "కురుక్షేత్ర యుద్ధభూమి",
    "భీష్ముని నాయకత్వం",
    "యుద్ధ ఏర్పాట్లు",
    "అర్జునుని విషాదం",
    "భగవద్గీత",
    "కృష్ణుడి మార్గదర్శనం",
    "మహాయుద్ధ ప్రారంభం"
  ],

  moral: "Duty guided by wisdom and detachment is the highest form of righteousness.",
  moralHindi: "ज्ञान और वैराग्य से किया गया कर्तव्य ही सर्वोच्च धर्म है।",
  moralTelugu: "జ్ఞానం మరియు వైరాగ్యంతో చేసిన కర్తవ్యమే పరమ ధర్మం.",

  image: "/story-bhishma-parva.jpg",
  chapter: 6
},
{
  id: "drona-parva",
  epic: "mahabharata",
  title: "Drona Parva – The Book of Drona",
  titleHindi: "द्रोण पर्व – द्रोणाचार्य की कथा",
  titleTelugu: "ద్రోణ పర్వం – ద్రోణాచార్యుని గాథ",

  summary:
    "Drona Parva describes Drona’s command of the Kaurava army after Bhishma’s fall, the intensification of the Kurukshetra war, great acts of heroism, and the tragic death of Drona through strategic deception.",
  summaryHindi:
    "द्रोण पर्व में भीष्म के पतन के बाद द्रोणाचार्य का सेनापतित्व, युद्ध की तीव्रता, महान वीरता और रणनीतिक छल से द्रोण की मृत्यु का वर्णन है।",
  summaryTelugu:
    "ద్రోణ పర్వంలో భీష్ముని పతనం తరువాత ద్రోణాచార్యుడు కౌరవ సేనాధిపతిగా బాధ్యతలు స్వీకరించడం, యుద్ధ తీవ్రత పెరగడం మరియు వ్యూహాత్మక మోసంతో ద్రోణుని మరణం వర్ణించబడుతుంది.",

  content: `
| BHISHMA’S FALL AND NEW COMMAND

After Bhishma fell on the battlefield, lying alive on a bed of arrows, the Kauravas appointed Drona as their commander. As the revered teacher of both Pandavas and Kauravas, Drona brought unmatched knowledge of warfare, archery, and strategy to the battlefield.

| DRONA TAKES COMMAND

Drona reorganized the Kaurava army with strict discipline and complex battle formations. His leadership struck fear into the Pandava forces, as his vyuhas tested their strength, coordination, and adaptability.

| INTENSIFIED WARFARE

The battlefield grew more violent and chaotic. Drona encouraged relentless attacks while still observing certain rules of dharma, creating a war that balanced ruthless efficiency with moral restraint.

| ADAPTATION OF THE PANDAVAS

Guided by Krishna, the Pandavas adjusted their tactics. Arjuna, Bhima, and the others relied on their training and unity to counter Drona’s advanced strategies.

| MAJOR BATTLES AND HEROISM

Under Drona’s command, many crucial battles unfolded. Bhima repeatedly clashed with Duryodhana, testing raw strength and endurance. Arjuna fought fiercely against Jayadratha, demonstrating supreme mastery of archery. Drona himself battled the Pandavas, unleashing celestial weapons and causing heavy losses.

| FALL OF GREAT WARRIORS

Numerous brave heroes from both sides were slain. Their deaths highlighted the tragic cost of war and the destructive consequences of ambition, pride, and unrestrained desire for power.

| DRONA’S TRAGIC END

Drona’s greatest weakness was his deep love for his son, Ashwatthama. To stop Drona’s devastation, the Pandavas used a strategic deception, spreading the false news that Ashwatthama was dead.

| DECEPTION AND DEATH

Believing his son had perished, Drona was overwhelmed by grief and laid down his weapons. At that moment, Dhrishtadyumna, the Pandava commander destined to kill Drona, struck him down, ending his command.

| MORAL CONFLICT OF THE WAR

Drona Parva raises painful ethical questions about deception, loyalty, and righteousness. The fall of a great teacher through deceit shows the complexity of dharma in war.

`,

  contentTelugu: `
| భీష్ముని పతనం – ద్రోణుని ఆదేశం

యుద్ధభూమిలో బాణాలపై పడుకొని ఉన్న భీష్ముని తరువాత, కౌరవులు ద్రోణాచార్యుడిని సేనాధిపతిగా నియమించారు. ఆయన యుద్ధ విజ్ఞానంలో అపూర్వుడు.

| ద్రోణుని నాయకత్వం

ద్రోణుడు సంక్లిష్ట వ్యూహాలతో కౌరవ సేనను పునఃసంఘటితం చేశాడు. ఆయన వ్యూహాలు పాండవులకు తీవ్రమైన సవాలుగా మారాయి.

| యుద్ధ తీవ్రత

యుద్ధం మరింత భీకరంగా మారింది. ద్రోణుడు కఠినంగా దాడులు చేయించినా ధర్మ పరిమితులను పూర్తిగా విస్మరించలేదు.

| పాండవుల అనుసరణ

కృష్ణుని మార్గదర్శకత్వంలో పాండవులు తమ వ్యూహాలను మార్చుకున్నారు.

| ద్రోణుని మరణం

అశ్వత్థామ మృతిచెందాడనే తప్పుడు వార్త విని ద్రోణుడు ఆయుధాలు వదిలాడు. ఆ సమయంలో ధృష్టద్యుమ్నుడు ద్రోణుని సంహరించాడు.

`,

  contentHindi: `
| भीष्म के बाद द्रोण का सेनापतित्व

भीष्म के शरशय्या पर गिरने के बाद कौरवों ने द्रोणाचार्य को सेनापति बनाया। वे युद्ध और धनुर्विद्या के महान आचार्य थे।

| द्रोण की रणनीति

द्रोण ने कौरव सेना को जटिल व्यूहों में सजाया और पांडवों के लिए युद्ध को अत्यंत कठिन बना दिया।

| युद्ध की भीषणता

युद्ध और अधिक उग्र हो गया। द्रोण ने कठोर आक्रमण किए, फिर भी कुछ धर्म नियमों का पालन किया।

| द्रोण की मृत्यु

अश्वत्थामा की झूठी मृत्यु की खबर सुनकर द्रोण शोक में हथियार त्याग बैठे। तब धृष्टद्युम्न ने उनका वध किया।

`,

  keyElements: [
    "Bhishma’s Fall",
    "Drona as Commander",
    "Complex Battle Formations",
    "Major Duels",
    "Death of Heroes",
    "Deception of Ashwatthama’s Death",
    "Fall of Drona"
  ],
  keyElementsHindi: [
    "भीष्म का पतन",
    "द्रोण का सेनापतित्व",
    "जटिल युद्ध व्यवस्था",
    "महान द्वंद्वयुद्ध",
    "योद्धाओं की मृत्यु",
    "अश्वत्थामा की मृत्यु का छल",
    "द्रोण का पतन"
  ],
  keyElementsTelugu: [
    "భీష్ముని పతనం",
    "ద్రోణుని నాయకత్వం",
    "సంక్లిష్ట యుద్ధ ఏర్పాట్లు",
    "ముఖ్య ద్వంద్వయుద్ధాలు",
    "యోధుల మరణం",
    "అశ్వత్థామ మృతిచెందాడనే మోసం",
    "ద్రోణుని పతనం"
  ],

  moral:
    "Attachment can become the greatest weakness, and dharma in war demands painful discernment.",
  moralHindi:
    "मोह सबसे बड़ी कमजोरी बन सकता है, और युद्ध में धर्म कठिन निर्णय माँगता है।",
  moralTelugu:
    "అనుబంధమే అతిపెద్ద బలహీనతగా మారుతుంది; యుద్ధంలో ధర్మం కఠినమైన నిర్ణయాలను కోరుతుంది.",

  image: "/story-drona-parva.jpg",
  chapter: 7
},
{
  id: "karna-parva",
  epic: "mahabharata",
  title: "Karna Parva – The Book of Karna",
  titleHindi: "कर्ण पर्व – कर्ण की कथा",
  titleTelugu: "కర్ణ పర్వం – కర్ణ గాథ",

  summary:
    "Karna Parva narrates Karna’s rise as the Kaurava commander, his unmatched valor in battle, moral conflicts born of loyalty and fate, and his tragic fall at the hands of Arjuna.",
  summaryHindi:
    "कर्ण पर्व में कौरव सेनापति के रूप में कर्ण का उदय, उसकी अद्भुत वीरता, निष्ठा और भाग्य से उत्पन्न नैतिक संघर्ष तथा अर्जुन के हाथों उसका दुखद अंत वर्णित है।",
  summaryTelugu:
    "కర్ణ పర్వంలో కౌరవ సేనాధిపతిగా కర్ణుని నియామకం, అతని అపూర్వ వీరత్వం, విధి మరియు విధేయతల వల్ల వచ్చిన నైతిక సంఘర్షణలు మరియు అర్జునుని చేతిలో అతని విషాదాంతం వర్ణించబడుతుంది.",

  content: `
| KARNA RISES AS COMMANDER

After the fall of Drona, the Kauravas entrusted the command of their army to Karna. Born to Kunti yet raised by a charioteer, Karna stood as a symbol of merit, resilience, and unwavering loyalty to Duryodhana.

| KARNA TAKES COMMAND

Karna’s leadership infused new energy into the Kaurava ranks. Armed with divine weapons and sharp tactical insight, he launched fierce assaults on the Pandava formations and restored confidence among his warriors despite mounting losses.

| LOYALTY ABOVE ALL

Though he knew the truth of his birth and the righteousness of the Pandavas’ cause, Karna’s gratitude and friendship toward Duryodhana remained absolute, guiding every decision he made on the battlefield.

| MAJOR DUELS AND HEROISM

Under Karna’s command, some of the fiercest duels of the war took place. Karna confronted Arjuna in long-anticipated clashes of archery and valor. He also faced Bhima and Nakula, overpowering many Pandava warriors with strength, skill, and strategy.

| MORAL STRUGGLES OF KARNA

Karna fought with honor while unknowingly battling his own brothers. Bound by vows and loyalty, he accepted the burden of destiny, even when it conflicted with dharma and personal truth.

| THE FALL OF KARNA

Karna’s end came through fate and circumstance. During his duel with Arjuna, his chariot wheel became trapped in the earth. As Karna sought to free it, Arjuna, urged by Krishna, released a divine arrow that struck Karna down.

| A HERO’S DEATH

Karna’s death was both tragic and heroic. He fell as a warrior of immense courage and integrity, earning respect from allies and enemies alike, and leaving behind a legacy shaped by loyalty, sacrifice, and valor.

`,

  contentTelugu: `
| కౌరవ సేనాధిపతిగా కర్ణుడు

ద్రోణుని పతనం తరువాత కౌరవులు కర్ణుని సేనాధిపతిగా నియమించారు. కుంతి పుత్రుడైనా సూతపుత్రుడిగా పెరిగిన కర్ణుడు ప్రతిభకు ప్రతీకగా నిలిచాడు.

| కర్ణుని నాయకత్వం

కర్ణుడు కౌరవ సేనలో కొత్త ఉత్సాహాన్ని నింపాడు. దివ్యాస్త్రాలు మరియు వ్యూహ నైపుణ్యంతో పాండవ సేనపై ఘాటైన దాడులు చేశాడు.

| విధేయత మరియు మిత్రత్వం

తన జన్మ రహస్యం తెలిసినా, ధుర్యోధనుడిపై కర్ణుని విధేయత అచంచలంగా నిలిచింది.

| కర్ణుని పతనం

అర్జునునితో యుద్ధంలో కర్ణుని రథచక్రం భూమిలో ఇరుక్కుపోయింది. ఆ క్షణంలో కృష్ణుని సూచనతో అర్జునుడు కర్ణుని సంహరించాడు.

`,

  contentHindi: `
| कौरव सेनापति कर्ण

द्रोण के पतन के बाद कौरवों ने कर्ण को सेनापति बनाया। कुंती का पुत्र होते हुए भी सूतपुत्र के रूप में पले कर्ण ने अपने पराक्रम से पहचान बनाई।

| कर्ण का नेतृत्व

कर्ण ने कौरव सेना में नया उत्साह भरा। दिव्य अस्त्रों और युद्धकौशल से उसने पांडवों पर तीव्र आक्रमण किए।

| निष्ठा और मित्रता

अपने जन्मसत्य को जानने के बावजूद कर्ण की निष्ठा दुर्योधन के प्रति अडिग रही।

| कर्ण का अंत

अर्जुन के साथ युद्ध में कर्ण का रथचक्र भूमि में फँस गया। कृष्ण के निर्देश पर अर्जुन ने उसे मार गिराया।

`,

  keyElements: [
    "Karna as Commander",
    "Unwavering Loyalty to Duryodhana",
    "Major Duels with Arjuna",
    "Moral Conflicts",
    "Curses and Destiny",
    "Tragic Death of Karna"
  ],
  keyElementsHindi: [
    "कर्ण का सेनापतित्व",
    "दुर्योधन के प्रति अडिग निष्ठा",
    "अर्जुन के साथ प्रमुख द्वंद्वयुद्ध",
    "नैतिक संघर्ष",
    "शाप और भाग्य",
    "कर्ण की दुखद मृत्यु"
  ],
  keyElementsTelugu: [
    "కర్ణుని నాయకత్వం",
    "ధుర్యోధనుని పట్ల అచంచల విధేయత",
    "అర్జునునితో ప్రధాన ద్వంద్వయుద్ధాలు",
    "నైతిక సంఘర్షణలు",
    "శాపాలు మరియు విధి",
    "కర్ణుని విషాదాంతం"
  ],

  moral:
    "Loyalty and destiny can elevate a hero, yet also lead him toward tragedy.",
  moralHindi:
    "निष्ठा और भाग्य वीर को महान भी बनाते हैं और त्रासदी की ओर भी ले जाते हैं।",
  moralTelugu:
    "విధేయత మరియు విధి ఒక వీరుని మహిమకూ విషాదానికీ దారితీస్తాయి.",

  image: "/story-karna-parva.jpg",
  chapter: 8
},
{
  id: "shalya-parva",
  epic: "mahabharata",
  title: "Shalya Parva – The Book of Shalya",
  titleHindi: "शल्य पर्व – शल्य की कथा",
  titleTelugu: "శల్య పర్వం – శల్య గాథ",

  summary:
    "Shalya Parva describes Shalya’s command of the Kaurava army after Karna’s death, the final decisive battles of Kurukshetra, the fall of Duryodhana, and the tragic aftermath of victory.",
  summaryHindi:
    "शल्य पर्व में कर्ण के पतन के बाद शल्य का सेनापतित्व, कुरुक्षेत्र युद्ध के अंतिम निर्णायक युद्ध, दुर्योधन का पतन और विजय के बाद की त्रासदी का वर्णन है।",
  summaryTelugu:
    "శల్య పర్వంలో కర్ణుని మరణం తరువాత శల్యుడు కౌరవ సేనాధిపతిగా బాధ్యతలు స్వీకరించడం, కురుక్షేత్ర యుద్ధంలోని తుదిదశ పోరాటాలు, దుర్యోధనుని పతనం మరియు విజయానంతర విషాదం వర్ణించబడుతుంది.",

  content: `
| SHALYA APPOINTED AS COMMANDER

After the fall of Karna, the Kauravas appointed Shalya, the king of Madra, as their commander. Though a powerful warrior and skilled tactician, Shalya was bound by duty and circumstance, entering the final and most intense phase of the war.

| SHALYA TAKES COMMAND

Shalya reorganized the demoralized Kaurava forces, strengthening defenses and restoring discipline. Though inwardly sympathetic to the Pandavas, he fulfilled his responsibility as commander, advising Duryodhana on strategy and encouraging valor among the troops.

| BATTLES UNDER SHALYA

Under Shalya’s leadership, the fighting grew fierce and decisive. He personally engaged in combat, defeating several Pandava warriors and demonstrating his mastery of warfare and chariot combat.

| THE DUEL OF BHIMA AND DURYODHANA

The climax of the war came with the legendary mace duel between Bhima and Duryodhana. Driven by justice and his vow to Draupadi, Bhima fought with unmatched ferocity and struck Duryodhana on the thigh, breaking the rules of combat but fulfilling destiny.

| FALL OF THE KAURAVAS

With Duryodhana defeated and Shalya unable to reverse the tide, the remaining Kaurava warriors fell. The collapse of their leadership marked the end of Kaurava dominance in the war.

| AFTERMATH OF THE WAR

The battlefield lay silent, covered with the fallen from both sides. Though victorious, Yudhishthira was overwhelmed with grief at the immense loss of life. Draupadi mourned the destruction of families and the heavy price paid for ambition and pride.

| A VICTORY SHADOWED BY GRIEF

The Pandavas ascended the throne of Hastinapura, but joy was tempered by sorrow. The war had fulfilled dharma, yet it had also shattered countless lives and bonds.

`,

  contentTelugu: `
| శల్యుడు సేనాధిపతిగా

కర్ణుని పతనం తరువాత మద్రదేశ రాజైన శల్యుడు కౌరవ సేనాధిపతిగా నియమితుడయ్యాడు. ఇది యుద్ధంలోని చివరి మరియు అత్యంత తీవ్ర దశకు నాంది పలికింది.

| శల్యుని నాయకత్వం

శల్యుడు నిరుత్సాహపడ్డ కౌరవ సేనను పునఃసంఘటితం చేశాడు. పాండవులపై అనుకంప ఉన్నా, తన కర్తవ్యాన్ని నెరవేర్చాడు.

| భీముడు – దుర్యోధనుడు యుద్ధం

భీముడు దుర్యోధనునితో గదాయుద్ధం చేసి, తొడపై దెబ్బకొట్టి అతన్ని ఓడించాడు. ఇది నియమభంగమైనా విధిని నెరవేర్చింది.

| యుద్ధానంతర విషాదం

విజయం సాధించినప్పటికీ యుధిష్ఠిరుడు తీవ్ర శోకానికి లోనయ్యాడు. యుద్ధం తెచ్చిన నష్టం అపారమైనది.

`,

  contentHindi: `
| शल्य का सेनापतित्व

कर्ण के पतन के बाद मद्रराज शल्य को कौरवों का सेनापति बनाया गया। यह युद्ध के अंतिम और निर्णायक चरण की शुरुआत थी।

| शल्य का नेतृत्व

शल्य ने निराश कौरव सेना को संगठित किया। पांडवों के प्रति सहानुभूति होते हुए भी उसने अपने कर्तव्य का पालन किया।

| भीम और दुर्योधन का द्वंद्व

भीम और दुर्योधन का गदायुद्ध युद्ध का चरम बिंदु बना। भीम ने दुर्योधन की जंघा पर प्रहार कर उसे पराजित किया।

| युद्ध के बाद का शोक

युद्ध समाप्त होने के बाद चारों ओर मृत्यु और विनाश था। विजय के बावजूद युधिष्ठिर शोक में डूबे रहे।

`,

  keyElements: [
    "Shalya as Commander",
    "Final Phase of Kurukshetra War",
    "Bhima vs Duryodhana",
    "Fall of the Kauravas",
    "Aftermath of War",
    "Grief after Victory"
  ],
  keyElementsHindi: [
    "शल्य का सेनापतित्व",
    "कुरुक्षेत्र युद्ध का अंतिम चरण",
    "भीम बनाम दुर्योधन",
    "कौरवों का पतन",
    "युद्ध के बाद की स्थिति",
    "विजय के बाद शोक"
  ],
  keyElementsTelugu: [
    "శల్యుని నాయకత్వం",
    "కురుక్షేత్ర యుద్ధం తుదిదశ",
    "భీముడు vs దుర్యోధనుడు",
    "కౌరవుల పతనం",
    "యుద్ధానంతర పరిస్థితి",
    "విజయానంతర విషాదం"
  ],

  moral:
    "Even righteous victory carries sorrow, reminding that war should always be the last resort.",
  moralHindi:
    "धर्मयुक्त विजय भी दुःख से भरी होती है, इसलिए युद्ध अंतिम उपाय होना चाहिए।",
  moralTelugu:
    "ధర్మబద్ధమైన విజయంలో కూడా విషాదం ఉంటుందనే సత్యాన్ని ఈ పర్వం గుర్తు చేస్తుంది.",

  image: "/story-shalya-parva.jpg",
  chapter: 9
},
{
  id: "sauptika-parva",
  epic: "mahabharata",
  title: "Sauptika Parva – The Book of the Sleeping Warriors",
  titleHindi: "सौप्तिक पर्व – सोते हुए योद्धाओं की कथा",
  titleTelugu: "సౌప్తిక పర్వం – నిద్రిస్తున్న యోధుల గాథ",

  summary:
    "Sauptika Parva describes Ashwatthama’s night raid on the sleeping Pandava camp, the massacre driven by revenge, divine intervention by Krishna, and the severe consequences of adharma.",
  summaryHindi:
    "सौप्तिक पर्व में अश्वत्थामा का रात्रि आक्रमण, प्रतिशोध से किया गया नरसंहार, कृष्ण का हस्तक्षेप और अधर्म के दुष्परिणामों का वर्णन है।",
  summaryTelugu:
    "సౌప్తిక పర్వంలో అశ్వత్థామ చేసిన రాత్రి దాడి, ప్రతీకారంతో జరిగిన సంహారం, కృష్ణుని దైవ హస్తక్షేపం మరియు అధర్మ ఫలితాలు వివరించబడతాయి.",

  content: `
| WAR AFTER THE WAR

Though the Kurukshetra war had ended with the defeat of the Kauravas, peace did not follow. Ashwatthama, son of Drona, was consumed by rage, grief, and an unquenchable thirst for revenge.

| ASHWATTHAMA’S VOW OF REVENGE

Unable to accept the deaths of his father and allies, Ashwatthama resolved to destroy the Pandava camp. Blinded by anger, he abandoned the path of dharma.

| THE NIGHT RAID

Aided by Kritavarma and Kripa, Ashwatthama attacked the Pandava camp under the cover of darkness. The warriors lay asleep, exhausted after the war, unaware of the approaching horror.

| MASSACRE OF THE SLEEPING

Ashwatthama unleashed divine weapons and ruthless violence. Soldiers, women, and children were slain indiscriminately. The attack violated every rule of righteous warfare.

| CAMP OF DESOLATION

When the Pandavas returned, they found their camp reduced to a field of corpses and sorrow. Victory had turned into unbearable grief.

| CONFRONTATION WITH THE PANDAVAS

Ashwatthama fled but was soon confronted. In desperation, he invoked powerful astras, threatening further destruction.

| KRISHNA’S INTERVENTION

Krishna intervened to prevent catastrophe. Declaring Ashwatthama’s actions unforgivable, he cursed him to wander the earth for thousands of years, suffering from disease, loneliness, and remorse.

`,

  contentTelugu: `
| యుద్ధానంతర యుద్ధం

కురుక్షేత్ర యుద్ధం ముగిసినా శాంతి రాలేదు. ద్రోణుని కుమారుడు అశ్వత్థామ కోపం మరియు ప్రతీకారంతో మండిపడ్డాడు.

| అశ్వత్థామ ప్రతీకారం

తండ్రి మరణాన్ని జీర్ణించుకోలేక అశ్వత్థామ పాండవ శిబిరంపై దాడి చేయాలని నిర్ణయించాడు.

| రాత్రి దాడి

కృతవర్మ మరియు కృపాచార్యుల సహాయంతో అశ్వత్థామ రాత్రివేళ నిద్రిస్తున్న పాండవ శిబిరంపై దాడి చేశాడు.

| నిద్రిస్తున్న వారిపై సంహారం

యుద్ధ నియమాలను ఉల్లంఘిస్తూ అశ్వత్థామ నిర్దయగా సంహారం చేశాడు.

| కృష్ణుని శాపం

కృష్ణుడు అశ్వత్థామను వెయ్యేళ్ల పాటు బాధతో సంచరించాలని శపించాడు.

`,

  contentHindi: `
| युद्ध के बाद भी युद्ध

कुरुक्षेत्र युद्ध समाप्त हो चुका था, परंतु शांति नहीं आई। द्रोणाचार्य का पुत्र अश्वत्थामा क्रोध और प्रतिशोध से भर गया।

| अश्वत्थामा का प्रतिशोध

अपने पिता की मृत्यु से व्यथित होकर अश्वत्थामा ने पांडव शिविर पर आक्रमण का निश्चय किया।

| रात्रि आक्रमण

कृतवर्मा और कृपाचार्य के साथ अश्वत्थामा ने सोते हुए योद्धाओं पर रात्रि में हमला किया।

| सोते हुए योद्धाओं का वध

यह आक्रमण अधर्म की पराकाष्ठा था, जहाँ निर्दोषों का भी संहार हुआ।

| कृष्ण का हस्तक्षेप

कृष्ण ने अश्वत्थामा को सहस्रों वर्षों तक दुःख भोगने का शाप दिया।

`,

  keyElements: [
    "Ashwatthama’s Revenge",
    "Night Raid on Pandava Camp",
    "Massacre of Sleeping Warriors",
    "Violation of Dharma",
    "Krishna’s Curse",
    "Aftermath of War"
  ],
  keyElementsHindi: [
    "अश्वत्थामा का प्रतिशोध",
    "पांडव शिविर पर रात्रि आक्रमण",
    "सोते हुए योद्धाओं का वध",
    "धर्म का उल्लंघन",
    "कृष्ण का शाप",
    "युद्ध के बाद की स्थिति"
  ],
  keyElementsTelugu: [
    "అశ్వత్థామ ప్రతీకారం",
    "పాండవ శిబిరంపై రాత్రి దాడి",
    "నిద్రిస్తున్న యోధుల సంహారం",
    "ధర్మ ఉల్లంఘనం",
    "కృష్ణుని శాపం",
    "యుద్ధానంతర పరిస్థితి"
  ],

  moral:
    "Revenge without restraint leads to adharma and endless suffering.",
  moralHindi:
    "संयमहीन प्रतिशोध अधर्म और अनंत दुःख की ओर ले जाता है।",
  moralTelugu:
    "అంకుశం లేని ప్రతీకారం అధర్మానికీ అంతులేని బాధకీ దారి తీస్తుంది.",

  image: "/story-sauptika-parva.jpg",
  chapter: 10
},
{
  id: "stri-parva",
  epic: "mahabharata",
  title: "Stri Parva – The Book of the Women",
  titleHindi: "स्त्री पर्व – स्त्रियों का विलाप",
  titleTelugu: "స్త్రీ పర్వం – స్త్రీల విలాపం",

  summary:
    "Stri Parva deeply portrays the sorrow, lamentations, and moral reflections of the women after the Kurukshetra war, revealing the true human cost of victory and the enduring pain of loss.",
  summaryHindi:
    "स्त्री पर्व कुरुक्षेत्र युद्ध के बाद स्त्रियों के शोक, विलाप और गहन नैतिक चिंतन को दर्शाता है, जो विजय की भारी मानवीय कीमत को उजागर करता है।",
  summaryTelugu:
    "స్త్రీ పర్వం కురుక్షేత్ర యుద్ధానంతరం స్త్రీలు అనుభవించిన లోతైన శోకం, విలాపం మరియు నైతిక ఆత్మపరిశీలనను ప్రతిబింబిస్తుంది.",

  content: `
| THE SILENT BATTLEFIELD

When the Kurukshetra war ended, the battlefield fell silent, but that silence was heavier than the roar of war. The land was covered with the bodies of kings, warriors, sons, and brothers. The earth itself seemed to mourn the destruction brought by ambition, pride, and hatred.

| ARRIVAL OF THE WOMEN

Mothers, wives, daughters, and sisters from both the Pandava and Kaurava clans arrived at the battlefield. They searched among the fallen, calling out familiar names, hoping against hope to find their loved ones alive. Their cries filled the air with unbearable grief.

| DRAUPADI’S LAMENT

Draupadi, queen of the Pandavas, stood amidst the devastation and mourned the destruction of the Kuru lineage. She grieved not only for the fallen warriors but for the generations lost and the suffering endured by innocent women and children. Her sorrow reflected the pain of those who had no role in war yet bore its heaviest burden.

| GANDHARI’S UNSPEAKABLE GRIEF

Gandhari, blindfolded queen and mother of the Kauravas, was led through the battlefield. Upon learning of the deaths of her hundred sons, her grief knew no bounds. She lamented the blindness of ambition, the cruelty of fate, and the unchecked pride that had destroyed her family. Her sorrow was a powerful reminder that a mother’s pain transcends victory and defeat.

| KUNTI’S INNER TORMENT

Kunti, mother of the Pandavas, mourned the countless lives lost on both sides. She reflected deeply on the moral dilemmas her sons had faced and the heavy responsibility they bore as instruments of destiny. Her grief was quiet yet profound, shaped by guilt, acceptance, and wisdom.

| THE CRIES OF THE WIDOWS

Widows clung to the lifeless bodies of their husbands, lamenting futures stolen from them. Young women mourned lives that would never be lived, while elderly mothers wept for sons who would never return. These laments revealed the irreversible human cost of war.

| YUDHISHTHIRA’S REMORSE

Witnessing the suffering of the women, Yudhishthira was overwhelmed with remorse. Victory felt hollow in the face of such immense sorrow. He questioned whether righteousness could ever justify such destruction and resolved to rule with compassion and restraint.

| COUNSEL AND CONSOLATION

Gandhari reminded Yudhishthira that all life is impermanent and that attachment to power leads only to suffering. Draupadi urged the Pandavas to govern with justice, humility, and empathy, ensuring that such devastation would never repeat.

`,

  contentTelugu: `
| నిశ్శబ్దమైన యుద్ధభూమి

కురుక్షేత్ర యుద్ధం ముగిసిన తరువాత యుద్ధభూమి నిశ్శబ్దంగా మారింది. కానీ ఆ నిశ్శబ్దం యుద్ధ ఘోషలకన్నా భారంగా అనిపించింది.

| స్త్రీల రాక

పాండవులు మరియు కౌరవుల కుటుంబాలకు చెందిన స్త్రీలు యుద్ధభూమికి వచ్చి తమ భర్తలు, కుమారులు, సోదరుల కోసం వెతికారు. వారి విలాపం గుండెను కలిచివేసింది.

| ద్రౌపది విలాపం

కురు వంశ నాశనాన్ని చూసి ద్రౌపది తీవ్రంగా దుఃఖించింది. యుద్ధం వల్ల స్త్రీలు, పిల్లలు అనుభవించిన బాధను ఆమె గుర్తుచేసింది.

| గాంధారి దుఃఖం

తన వందమంది కుమారుల మరణం గాంధారిని విరగదీసింది. ఆమె అహంకారం మరియు విధి యొక్క క్రూరత్వాన్ని నిందించింది.

| కుంతి ఆత్మవేదన

కుంతి యుద్ధం తెచ్చిన నైతిక భారాన్ని మరియు తన కుమారుల కర్తవ్యాలను తలచుకొని లోతైన శోకంలో మునిగింది.

`,

  contentHindi: `
| निस्तब्ध रणभूमि

कुरुक्षेत्र युद्ध समाप्त हुआ, परंतु रणभूमि मृत्यु और शोक से भरी थी। वह मौन युद्धघोष से भी अधिक पीड़ादायक था।

| स्त्रियों का आगमन

पांडव और कौरव पक्ष की स्त्रियाँ रणभूमि पर पहुँचीं और अपने प्रियजनों को खोजने लगीं। उनके विलाप से वातावरण भर गया।

| द्रौपदी का विलाप

द्रौपदी ने कुरु वंश के विनाश और स्त्रियों के कष्ट पर शोक व्यक्त किया।

| गांधारी का दुःख

अपने सौ पुत्रों की मृत्यु से गांधारी का हृदय टूट गया। उसने अहंकार और भाग्य की निष्ठुरता पर विलाप किया।

| कुंती का आत्ममंथन

कुंती ने युद्ध से उत्पन्न नैतिक दुविधाओं और अपने पुत्रों के कर्तव्यों पर विचार किया।

`,

  keyElements: [
    "Aftermath of Kurukshetra War",
    "Women on the Battlefield",
    "Gandhari’s Lament",
    "Draupadi’s Grief",
    "Kunti’s Reflection",
    "Widows’ Sorrow",
    "Moral Introspection"
  ],
  keyElementsHindi: [
    "कुरुक्षेत्र युद्ध के बाद की स्थिति",
    "रणभूमि पर स्त्रियाँ",
    "गांधारी का विलाप",
    "द्रौपदी का शोक",
    "कुंती का चिंतन",
    "विधवाओं का दुःख",
    "नैतिक आत्मपरीक्षण"
  ],
  keyElementsTelugu: [
    "కురుక్షేత్ర యుద్ధానంతర పరిస్థితి",
    "యుద్ధభూమిపై స్త్రీలు",
    "గాంధారి విలాపం",
    "ద్రౌపది శోకం",
    "కుంతి ఆలోచన",
    "విధవల యొక్క విషాదం",
    "నైతిక ఆత్మపరిశీలన"
  ],

  moral:
    "No victory is complete when it leaves behind oceans of grief; compassion is the highest dharma after war.",
  moralHindi:
    "जहाँ अपार शोक हो, वहाँ विजय अधूरी होती है; करुणा ही युद्धोत्तर सर्वोच्च धर्म है।",
  moralTelugu:
    "అపారమైన శోకం మిగిలితే విజయం సంపూర్ణం కాదు; యుద్ధానంతరం కరుణనే పరమ ధర్మం.",

  image: "/story-stri-parva.jpg",
  chapter: 11
},
{
  id: "shanti-parva",
  epic: "mahabharata",
  title: "Shanti Parva – The Book of Peace",
  titleHindi: "शांति पर्व – शांति और धर्म का उपदेश",
  titleTelugu: "శాంతి పర్వం – శాంతి మరియు ధర్మ బోధ",

  summary:
    "Shanti Parva narrates Bhishma’s profound teachings to Yudhishthira on peace, governance, dharma, justice, and the moral and spiritual responsibilities of a king after the devastation of the Kurukshetra war.",
  summaryHindi:
    "शांति पर्व में शरशय्या पर पड़े भीष्म द्वारा युधिष्ठिर को शांति, राजधर्म, न्याय, और युद्ध के बाद शासक के नैतिक और आध्यात्मिक कर्तव्यों का गहन उपदेश दिया गया है।",
  summaryTelugu:
    "శాంతి పర్వం భీష్ముడు బాణశయ్యపై ఉన్న సమయంలో యుధిష్ఠిరునికి శాంతి, రాజధర్మం, న్యాయం మరియు యుద్ధం తరువాత రాజు యొక్క నైతిక మరియు ఆధ్యాత్మిక కర్తవ్యాలపై లోతైన బోధన చేస్తాడు.",

  content: `
| THE BURDENED KING

After the Kurukshetra war, Yudhishthira ascended the throne of Hastinapura, but victory brought no solace. The battlefield was still vivid in his mind, littered with the bodies of elders, teachers, warriors, and sons of both families. Despite regaining power, Yudhishthira’s heart was heavy with sorrow, guilt, and the weight of responsibility. He questioned the value of victory when it came at such a tremendous human cost.

| BHISHMA ON THE BED OF ARROWS

On the battlefield, Bhishma lay on a bed of arrows, sustained by the boon to choose the time of his death. His breathing was calm, his mind serene, yet his eyes reflected deep wisdom. Observing the devastation around him, he called Yudhishthira to his side, intent on imparting knowledge about dharma, governance, and the duties of kingship, ensuring the survival of righteousness in the world.

| SEEKING GUIDANCE

Yudhishthira approached Bhishma with humility and reverence, confessing his inner turmoil. He expressed grief for the lives lost, guilt for his role in the war, and uncertainty about ruling a kingdom so deeply scarred by bloodshed. He asked: “How can a king restore peace, uphold dharma, and govern wisely when the world is filled with sorrow and ruin?”

| RAJADHARMA: THE DUTIES OF A KING

Bhishma’s voice, firm yet gentle, echoed lessons of Rajadharma. He explained that a king’s foremost duty is the welfare of his people, not personal glory or ambition. Every action, whether in war or governance, must be guided by justice, fairness, compassion, and wisdom. He emphasized that a ruler’s power is a responsibility to protect the vulnerable, ensure law and order, and promote ethical conduct among citizens.

| PEACE, NON-VIOLENCE, AND RESTRAINT

Bhishma elaborated on the principles of peace and non-violence. While war may sometimes be unavoidable, the true mark of greatness is restraint. A wise king does not seek vengeance or personal gain but acts to uphold dharma. He counseled that forgiveness, mercy, and patience are superior to brute force, and inner mastery over anger and ego is essential for sustaining peace.

| WEALTH, CHARITY, AND SOCIAL RESPONSIBILITY

The teachings extended to wealth and social ethics. Bhishma advised that wealth should be acquired through righteous means and used to benefit the community. Charitable acts, protection of the poor, care for widows and children, and respect for elders were highlighted as essential pillars of a stable and moral kingdom. He reminded Yudhishthira that ethical prosperity is the foundation of lasting power.

| FORGIVENESS AND SELF-MASTERY

Bhishma impressed upon Yudhishthira that true power lies in self-mastery. The greatest king conquers anger, desire, and pride, not neighboring kingdoms. Forgiveness and detachment are higher forms of strength than weapons or armies. Inner peace, Bhishma taught, is the source of true governance and societal harmony.

| THE TRANSFORMATION OF YUDHISHTHIRA

Listening intently, Yudhishthira’s sorrow gradually transformed into understanding. The despair over the battlefield deaths softened into acceptance and resolve. He realized that kingship is not a reward but a solemn duty to heal the wounded world, ensure justice, and maintain dharma. He resolved to be a ruler whose compassion and wisdom would restore hope and order to the kingdom.

`,

  contentTelugu: `
| భారంతో నిండిన రాజు

కురుక్షేత్ర యుద్ధం తరువాత యుధిష్ఠిరుడు హస్తినాపుర సింహాసనాన్ని అధిష్ఠించాడు, కానీ విజయం హృదయానికి శాంతి తీసుకోలేదు. యుద్ధభూమిలో పాడైపోయిన రాజులు, గురువులు, యోధులు, మరియు కుమారులు కన్పించడంతో అతనికి తీవ్ర బాధ, పాపభారం మరియు బాధ్యత తలెత్తింది.

| బాణశయ్యపై భీష్ముడు

భీష్ముడు బాణాలపై పడుకొని ఉన్నాడు. మరణ సమయాన్ని తన అనుగ్రహంతో ఎంచుకునే అవకాశం పొందిన భీష్ముడు, చుట్టూ ఉన్న విధ్వంసాన్ని చూసి యుధిష్ఠిరుని పక్కన పిలిచాడు, ధర్మం, రాజధర్మం మరియు రాజుల కర్తవ్యాలపై లోతైన బోధన అందించడానికి.

| మార్గదర్శకత్వం కోసం అడుగడుగున

యుధిష్ఠిరుడు నమస్కారంతో భీష్ముడి దగ్గరకు వెళ్లి తన బాధ, బాధ్యత మరియు యుద్ధంలో వ్యక్తిగత పాత్రపై inner turmoil ను చెప్పాడు. అతను అడిగాడు: “విషమ పరిస్థితుల్లో రాజు ధర్మాన్ని ఎలా నిలబెట్టాలి, శాంతిని ఎలా స్థాపించాలి?”

| రాజధర్మం: రాజు యొక్క కర్తవ్యాలు

భీష్ముడు వివరిస్తున్నాడు: రాజు యొక్క ప్రధాన కర్తవ్యం ప్రజల క్షేమం. ప్రతి నిర్ణయం న్యాయం, కరుణ, జ్ఞానం మరియు న్యాయబద్ధతతో నడవాలి. రాజు తన ప్రజలను రక్షించడం, చట్టాన్ని అమలు చేయించడం, మరియు నైతిక పరిపాలనను ప్రోత్సహించాలి.

| శాంతి, హింసా నిరోధం మరియు నియంత్రణ

యుద్ధం తప్పనిసరిగా ఉన్నా, నిజమైన శక్తి నియంత్రణలో ఉంది. క్షమ, సహనం, మరియు అహంకారాన్ని జయించడం రాజుకు అత్యంత ముఖ్యమైన లక్షణాలు.

| సంపద, దానం మరియు సామాజిక బాధ్యత

భీష్ముడు చెప్పాడు: సంపదను న్యాయంగా సంపాదించాలి మరియు సమాజానికి ఉపయోగించాలి. పేదలను రక్షించడం, అనాథలను చూసుకోవడం, వృద్ధులను గౌరవించడం మరియు మహిళల పరిరక్షణ సుస్థిర రాజ్యానికి మూలాధారం.

| క్షమ మరియు ఆత్మనియంత్రణ

భీష్ముడు బోధించాడు: నిజమైన శక్తి ఆత్మనియంత్రణలో ఉంది. రాగం, కోపం, ఇష్టం పై జయించడం, యుద్ధం గెలవడం కంటే గొప్ప.

| యుధిష్ఠిరుని మార్పు

భీష్ముని బోధలను వినడం ద్వారా యుధిష్ఠిరుని శోకం అర్ధం, అవగాహన మరియు కర్తవ్యం భావనగా మారింది. అతను రాజసింహాసనాన్ని భయం లేదా స్వార్థం కోసం కాకుండా ధర్మం, న్యాయం మరియు సానుభూతితో పాలన చేయాలని నిర్ణయించుకున్నాడు.

`,

  contentHindi: `
| भारी बोझ तले राजा

कुरुक्षेत्र युद्ध के बाद युधिष्ठिर हस्तिनापुर के सिंहासन पर बैठे, परंतु विजय उनके हृदय में शांति नहीं ला सकी। युद्धभूमि पर पड़े मृत योद्धाओं की छवि उन्हें लगातार पीड़ित करती रही।

| शरशय्या पर भीष्म

भीष्म बाणों की शय्या पर पड़े, मृत्यु का समय स्वयं चुनने का वरदान पाकर, युधिष्ठिर को धैर्य, न्याय, और राजधर्म का उपदेश दे रहे थे।

| मार्गदर्शन की खोज

युधिष्ठिर ने भीष्म से पूछा कि युद्ध के बाद राज्य को कैसे शांतिपूर्ण बनाया जाए और न्याय, करुणा तथा धर्म का पालन कैसे सुनिश्चित किया जाए।

| राजधर्म का उपदेश

भीष्म ने बताया कि राजा का मुख्य उद्देश्य प्रजा का कल्याण है। निर्णय न्याय, करुणा, संयम और धैर्य से लेने चाहिए। राजा का शक्ति व्यक्तिगत लाभ के लिए नहीं, बल्कि लोगों की सेवा के लिए होनी चाहिए।

| शांति, अहिंसा और संयम

भीष्म ने समझाया कि वास्तविक शक्ति संयम में है। क्रोध, अहंकार और लालसा पर विजय ही सच्ची वीरता है।

| धन, दान और सामाजिक जिम्मेदारी

धन का सही उपयोग समाज के कल्याण के लिए होना चाहिए। दीनों, अनाथों और वृद्धों की रक्षा करना राजा की जिम्मेदारी है।

| क्षमा और आत्मनियंत्रण

भीष्म ने कहा कि क्षमा सर्वोच्च शक्ति है और आंतरिक शांति बाहरी शासन के लिए आधार है।

| युधिष्ठिर का परिवर्तन

भीष्म की उपदेश सुनकर युधिष्ठिर का शोक धीरे-धीरे समझ और निर्णय में बदल गया। उन्होंने शासन को जिम्मेदारी के रूप में स्वीकार किया।

`,

  keyElements: [
    "Yudhishthira’s Grief and Guilt",
    "Bhishma on the Bed of Arrows",
    "Rajadharma (Duties of a King)",
    "Peace, Forgiveness, and Compassion",
    "Wealth and Social Responsibility",
    "Self-Mastery and Inner Strength",
    "Moral Governance and Restoration after War"
  ],
  keyElementsHindi: [
    "युधिष्ठिर का शोक और पापबोध",
    "बाणशय्या पर भीष्म",
    "राजधर्म (राजा के कर्तव्य)",
    "शांति, क्षमा और करुणा",
    "धन और सामाजिक जिम्मेदारी",
    "आत्मनियंत्रण और आंतरिक शक्ति",
    "नैतिक शासन और युद्ध के बाद पुनर्स्थापन"
  ],
  keyElementsTelugu: [
    "యుధిష్ఠిరుని విషాదం మరియు పాపబోధ",
    "బాణశయ్యపై భీష్ముడు",
    "రాజధర్మం (రాజు యొక్క కర్తవ్యాలు)",
    "శాంతి, క్షమ మరియు కరుణ",
    "సంపద మరియు సామాజిక బాధ్యత",
    "ఆత్మనియంత్రణ మరియు అంతర్గత శక్తి",
    "నైతిక పాలన మరియు యుద్ధానంతర పునరుద్ధరణ"
  ],

  moral:
    "True peace arises from justice, compassion, ethical action, and self-mastery, not from victory in war.",
  moralHindi:
    "सच्ची शांति युद्ध में विजय से नहीं, बल्कि न्याय, करुणा, नैतिकता और आत्मनियंत्रण से आती है।",
  moralTelugu:
    "నిజమైన శాంతి యుద్ధ విజయం వల్ల కాదు, న్యాయం, కరుణ, నైతిక చర్యలు మరియు ఆత్మ నియంత్రణ వల్ల వస్తుంది.",

  image: "/story-shanti-parva.jpg",
  chapter: 12
},
{
  id: "anushasana-parva",
  epic: "mahabharata",
  title: "Anushasana Parva – The Book of Instructions",
  titleHindi: "अनुशासन पर्व – आदेश और नैतिक शिक्षा",
  titleTelugu: "అనుశాసన పర్వం – ఆదేశాలు మరియు నైతిక బోధన",

  summary: 
    "Anushasana Parva presents Bhishma’s counsel to Yudhishthira on ethics, duties, dharma, penance, and righteous governance. It emphasizes moral conduct, societal order, and spiritual wisdom, guiding a king and citizens toward disciplined living.",
  summaryHindi: 
    "अनुशासन पर्व में भीष्म युधिष्ठिर को नैतिकता, कर्तव्य, धर्म, तपस्या और धर्मपरायण शासन का उपदेश देते हैं। यह व्यक्तिगत आचार, सामाजिक व्यवस्था और आध्यात्मिक ज्ञान पर जोर देता है।",
  summaryTelugu: 
    "అనుశాసన పర్వం భీష్ముడు యుధిష్ఠిరునికి నైతికత, కర్తవ్యాలు, ధర్మం, యజ్ఞాలు మరియు సముచిత పాలన గురించి బోధిస్తాడు. ఇది వ్యక్తిగత నైతికత, సామాజిక శ్రేణి మరియు ఆధ్యాత్మిక జ్ఞానాన్ని ప్రసారం చేస్తుంది.",

  content: `
| THE DUTIFUL KING

After the Kurukshetra war, Yudhishthira, now king of Hastinapura, faced the immense task of restoring order, ethics, and justice in a kingdom scarred by violence. Burdened with responsibility, he sought guidance on righteous living and governance, wishing to heal both the land and its people.

| BHISHMA’S COUNSEL

Bhishma, still on his bed of arrows, shared his vast wisdom. Calm, composed, and deeply aware of dharma, he advised Yudhishthira on personal discipline, kingly duties, and the proper conduct of citizens. He stressed that the foundation of a prosperous and moral kingdom lies in virtuous behavior, justice, and societal harmony.

| DUTIES AND ETHICAL CONDUCT

Bhishma elaborated on the duties of kings, nobles, and subjects. He emphasized honesty, integrity, respect for elders, compassion for the weak, and fairness in all decisions. Every act, he said, must align with dharma; rulers must guide their citizens with righteousness, while people must uphold moral responsibilities for social stability.

| PENANCE, SELF-DISCIPLINE, AND SPIRITUAL PRACTICES

Bhishma guided Yudhishthira on the importance of penance, self-restraint, and spiritual practices. Observing rituals, performing sacrifices, and practicing meditation cultivate inner strength, wisdom, and purity. Bhishma explained that disciplined living prevents moral decay and ensures the longevity of kingdoms and dharma.

| CHARITY AND SOCIAL RESPONSIBILITY

The elder statesman instructed on philanthropy and civic duties. Supporting widows, orphans, Brahmanas, and the needy was paramount. Bhishma highlighted that wealth should be ethically earned and generously shared to maintain societal balance and promote righteousness.

| FORGIVENESS, HUMILITY, AND MENTORSHIP

Forgiveness and humility, Bhishma said, are higher virtues than valor or power. A ruler must guide through example, counsel through wisdom, and inspire citizens through virtue. True leadership fosters moral and spiritual growth in society, not fear or blind obedience.

| MORAL AND SPIRITUAL TEACHINGS

Bhishma narrated stories of legendary kings, sages, and warriors to illustrate dharma, consequences of adharma, and rewards of virtuous living. These examples reinforced the principles of self-restraint, ethical governance, and devotion to truth and righteousness.

| THE TRANSFORMATION OF YUDHISHTHIRA

Absorbing Bhishma’s teachings, Yudhishthira embraced a vision of governance rooted in discipline, ethics, and moral responsibility. He resolved to be a king whose justice, compassion, and adherence to dharma would heal his kingdom and inspire generations.

`,

  contentTelugu: `
| విధి విధాన రాజు

కురుక్షేత్ర యుద్ధం తరువాత యుధిష్ఠిరుడు హస్తినాపుర సింహాసనాన్ని గ్రహించారు. యుద్ధం వల్ల క్షతగ్రస్తమైన రాజ్యాన్ని న్యాయం, నియమాలు మరియు ధర్మంతో నడిపించడం ప్రధాన బాధ్యతగా ఉండింది. 

| భీష్ముని బోధనలు

బాణశయ్యపై భీష్ముడు యుధిష్ఠిరునికి వ్యక్తిగత నియమాలు, రాజధర్మం మరియు పౌర కర్తవ్యాలపై లోతైన బోధన అందించాడు. నిజమైన రాజ్యం నైతికత, న్యాయం మరియు సామాజిక సమరసతపై ఆధారపడి ఉంది అని చెప్పారు.

| కర్తవ్యాలు మరియు నైతిక ఆచరణ

రాజు, ప్రజలు మరియు అధికారులు తమ కర్తవ్యాలను పూర్ణంగా నిర్వహించాలి. నిజాయితీ, సమానత్వం, వృద్ధుల గౌరవం, బలహీనుల పట్ల కరుణ మరియు న్యాయపూర్వక నిర్ణయాలు అనుసరించాలి. ప్రతి చర్య ధర్మానుగుణంగా ఉండాలి.

| తపస్సు, ఆత్మ నియంత్రణ మరియు ఆధ్యాత్మిక ఆచరణలు

భీష్ముడు తపస్సు, ఆత్మ నియంత్రణ మరియు ఆధ్యాత్మిక ఆచరణల ప్రాముఖ్యతను వివరించాడు. యజ్ఞాలు, ప్రార్థనలు మరియు ధ్యానం ద్వారా లోతైన జ్ఞానం మరియు శుద్ధత వస్తుంది.

| దానం మరియు సామాజిక బాధ్యత

సంపదను ధర్మంగా సంపాదించి పేదలు, అనాధులు, వృద్ధులు మరియు బ్రాహ్మణులను రక్షించడం సమాజం లో సమతుల్యత మరియు ధర్మ స్థాపనకు అవసరం.

| క్షమ, వినయం మరియు మార్గదర్శనం

క్షమ మరియు వినయం, భీష్ముడు చెప్పినట్లుగా, సైన్యం మరియు శక్తికి మించినవి. శాసకుడు తన పర్యాయంగా అచరణం ద్వారా ప్రజలను మార్గనిర్దేశం చేయాలి.

| నైతిక మరియు ఆధ్యాత్మిక బోధనలు

భీష్ముడు రాజులు, రిషులు మరియు యోధుల కథల ద్వారా ధర్మం, అధర్మం మరియు మంచి పనుల ప్రాముఖ్యతను వివరించాడు.

| యుధిష్టిరుని మార్పు

భీష్ముని బోధనలతో యుధిష్టిరుడు తన పాలనలో నియమం, నైతికత మరియు కర్తవ్యత్మకతను అంగీకరించాడు. న్యాయం మరియు కరుణతో రాజ్యాన్ని పునరుద్ధరించడానికి సంకల్పించాడు.

`,
  contentHindi: `
| कर्तव्यपरायण राजा

कुरुक्षेत्र युद्ध के बाद युधिष्ठिर हस्तिनापुर का सिंहासन संभाल चुके थे। युद्ध के विनाश से जख्मी राज्य में व्यवस्था, न्याय और नैतिकता बहाल करना उनका मुख्य कर्तव्य था। उन्होंने सही शासन और व्यक्तिगत धर्म के मार्गदर्शन की खोज की।

| भीष्म का उपदेश

भूष्म, बाणों की शय्या पर पड़े, युधिष्ठिर को व्यक्तिगत अनुशासन, राजधर्म और नागरिक कर्तव्यों पर गहन उपदेश देते हैं। उन्होंने बताया कि समृद्ध और नैतिक राज्य का आधार सदाचार, न्याय और सामाजिक समरसता है।

| कर्तव्य और नैतिक आचरण

भीष्म ने राजा, प्रजा और अधिकारियों के कर्तव्यों पर प्रकाश डाला। ईमानदारी, न्याय, बुजुर्गों का सम्मान, कमजोरों के प्रति करुणा और निष्पक्ष निर्णय आवश्यक हैं। हर कार्य धर्म के अनुरूप होना चाहिए। 

| तप, आत्म-नियंत्रण और आध्यात्मिक अभ्यास

भीष्म ने तप, संयम और धार्मिक क्रियाओं के महत्व को समझाया। यज्ञ, पूजा और ध्यान से आंतरिक शक्ति, ज्ञान और शुद्धता आती है। अनुशासित जीवन नैतिक पतन रोकता है और राज्य की स्थिरता सुनिश्चित करता है।

| दान और सामाजिक जिम्मेदारी

धन का सही उपयोग और दीनों, विधवाओं और अनाथों की सहायता राज्य की स्थिरता के लिए आवश्यक है। भीष्म ने बताया कि परोपकार से समाज में धर्म और न्याय की स्थापना होती है।

| क्षमा, विनम्रता और मार्गदर्शन

क्षमा और विनम्रता, भीष्म के अनुसार, वीरता और शक्ति से श्रेष्ठ हैं। शासक को उदाहरण के माध्यम से मार्गदर्शन करना चाहिए, और समाज में नैतिक एवं आध्यात्मिक विकास को बढ़ावा देना चाहिए।

| नैतिक और आध्यात्मिक शिक्षा

भीष्म ने महाकाव्य के अन्य राजा, ऋषि और योद्धाओं की कथाएँ सुनाईं, जिससे धर्म, अधर्म और पुण्य के महत्व को स्पष्ट किया गया।

| युधिष्ठिर का रूपांतरण

भीष्म की बोधवाणी से युधिष्ठिर ने शासन में अनुशासन, नैतिकता और कर्तव्यपरायणता को अपनाया। उन्होंने न्याय और करुणा से राज्य को सुगठित करने का संकल्प लिया।

`,


  keyElements: [
    "Yudhishthira’s Responsibility as King",
    "Bhishma’s Counsel on Dharma and Ethics",
    "Penance, Self-discipline, and Spiritual Practices",
    "Charity and Social Responsibility",
    "Forgiveness and Humility",
    "Moral Examples from Legends",
    "Guidance for Citizens and Governance"
  ],
  keyElementsHindi: [
    "राजा के रूप में युधिष्ठिर की जिम्मेदारी",
    "धर्म और नैतिकता पर भीष्म की सलाह",
    "तप, आत्म-अनुशासन और आध्यात्मिक अभ्यास",
    "दान और सामाजिक जिम्मेदारी",
    "क्षमा और विनम्रता",
    "किंवदंतियों से नैतिक उदाहरण",
    "नागरिकों और शासन के लिए मार्गदर्शन"
  ],
  keyElementsTelugu: [
    "రాజుగా యుధిష్ఠిరుని బాధ్యత",
    "ధర్మం మరియు నైతికతపై భీష్ముని సలహా",
    "తపస్సు, ఆత్మ నియంత్రణ మరియు ఆధ్యాత్మిక ఆచరణలు",
    "దానం మరియు సామాజిక బాధ్యత",
    "క్షమ మరియు వినయం",
    "పురాణాల నుండి నైతిక ఉదాహరణలు",
    "పౌరులు మరియు పాలన కోసం మార్గదర్శనం"
  ],

  moral: 
    "Righteous living, self-discipline, and moral governance are the true foundations of personal and societal harmony.",
  moralHindi: 
    "धार्मिक जीवन, आत्म-नियंत्रण और नैतिक शासन ही व्यक्तिगत और सामाजिक सामंजस्य की वास्तविक नींव हैं।",
  moralTelugu: 
    "ధర్మపరమైన జీవనం, ఆత్మ నియంత్రణ మరియు నైతిక పాలన వ్యక్తిగత మరియు సామాజిక సమరసతకు నిజమైన మూలాధారం.",

  image: "/story-anushasana-parva.jpg",
  chapter: 13
},
{
  id: "ashvamedha-parva",
  epic: "mahabharata",
  title: "Ashvamedha Parva – The Book of the Horse Sacrifice",
  titleHindi: "अश्वमेध पर्व – घोड़ादान और विजय यज्ञ",
  titleTelugu: "అశ్వమేధ పర్వం – గుర్రపు యజ్ఞం మరియు విజయం",

  summary: "Ashvamedha Parva describes King Yudhishthira’s grand horse sacrifice to establish imperial sovereignty, secure peace, and honor dharma after the Kurukshetra war. Guided by sages like Vyasa and Krishna, it narrates the journey of the sacrificial horse and the exploits of Arjuna, Bhima, and other warriors, emphasizing righteous rule, courage, and unity.",
  summaryHindi: "अश्वमेध पर्व में कुरुक्षेत्र युद्ध के बाद युधिष्ठिर के अश्वमेध यज्ञ का वर्णन है, जो उनकी सम्राज्य प्रतिष्ठा, शांति और धर्मपालन सुनिश्चित करने के लिए किया गया। वेदव्यास और कृष्ण के मार्गदर्शन में यह यज्ञ सम्पन्न हुआ, जिसमें अश्व के भ्रमण और अर्जुन, भीम तथा अन्य योद्धाओं की वीरतापूर्ण गाथाएँ शामिल हैं।",
  summaryTelugu: "అశ్వమేధ పర్వంలో కురుక్షేత్ర యుద్ధం తరువాత రాజు యుధిష్ఠిరుని మహా అశ్వమేధ యజ్ఞం వివరించబడింది. వ్యాసుడు, కృష్ణుడు వంటి మునులు మార్గదర్శకులుగా ఉన్నారు. గుర్రం ప్రయాణం మరియు అర్జునుడు, భీముడు మరియు ఇతర యోధుల ధైర్యకథనాలు ఇందులో ఉన్నాయి, ఇవి ధర్మపరమైన పాలన, ధైర్యం మరియు ఏకైకత్వాన్ని సూచిస్తాయి.",

  content: `
| SETTING THE STAGE

After the Kurukshetra war, King Yudhishthira of Hastinapura wished to confirm his authority over the realms and bring lasting peace to the lands. To establish his supreme position and honor his ancestors, he decided to perform the grand Ashvamedha Yajna—a horse sacrifice that declared his sovereignty across the world.

| THE SACRED HORSE AND ITS JOURNEY

Under the guidance of sages like Vyasa and Narada, a consecrated horse was released to roam freely for a year. Warriors were appointed to follow and protect the horse, ensuring that any kingdom it entered would either acknowledge Yudhishthira’s suzerainty or contest it. Arjuna, the peerless archer, led this expedition, accompanied by Bhima, Sahadeva, Nakula, and other stalwart princes.

| ENCOUNTERS AND ALLIANCES

As the horse traveled far and wide, it passed through numerous kingdoms. In each encounter, warriors tested their strength and valor. Arjuna, representing the Pandava cause, engaged in battles that reinforced Yudhishthira’s reputation as a righteous and powerful ruler. Many kings accepted Yudhishthira’s authority, while others were humbled in combat.

| KRISHNA AND THE SACRIFICIAL RITES

Meanwhile, preparations for the yagna continued at the capital. Krishna, ever the guide and strategist, advised Yudhishthira, ensuring the ritual’s proper conduct. Rituparna of Ayodhya and sage Dhaumya also participated in officiating roles, overseeing the complex rites of the Ashvamedha.

| LESSONS IN LEADERSHIP AND DUTY

Through dialogues and demonstrations of duty (dharma), the parva shows that leadership requires courage, compassion, and respect for all beings. The wandering horse symbolized the expansion of righteous rule—where might was tempered by moral restraint and justice.

| RETURN OF THE HORSE AND COMPLETION OF THE YAJNA

After a year of roaming, the sacred horse returned. Victorious and unchallenged in crucial encounters, it signified widespread acceptance of Yudhishthira’s leadership. With all rites completed, the Ashvamedha Yajna was concluded with grand celebration, reaffirming the Pandavas’ rightful place as protectors of dharma and peace.

`,

  contentTelugu: `
| నేపధ్యంలో

కురుక్షేత్ర యుద్ధం తరువాత హస్తినాపుర రాజు యుధిష్ఠిరుడు తన సామ్రాజ్యాధికారాన్ని, శాంతిని నిర్ధారించడానికి మహా అశ్వమేధ యజ్ఞం నిర్వహించాలి అనుకొన్నాడు. ఇది అతని రాజ్యాధికారానికి శక్తివంతమైన ప్రకటనగా నిలిచింది.

| పవిత్ర గుర్రం మరియు దాని ప్రయాణం

వ్యాసుడు, నారదుడు వంటి మునులు సూచించిన ప్రకారం పవిత్ర గుర్రాన్ని ఒక సంవత్సరం పాటు స్వేచ్ఛగా విడిచారు. అతన్ని రక్షించడానికి అర్జునుడు, భీముడు, సహదేవుడు మరియు ఇతర యువార్యులు అతని వెంట పాటు ఉండి, గుర్రం ప్రవేశించిన ప్రతి రాజ్యంలో యుధిష్ఠిరుని అధిపత్యాన్ని ప్రకటించారు.

| ఎదురుముఖాలు మరియు సఖ్యతలు

గుర్రం ప్రయాణించిన కొద్దీ రాజ్యాలతో ఘర్షణలు జరిగాయి. అర్జునుడు ధర్మం, ధైర్యం మరియు న్యాయపరమైన విధానాలను పాటిస్తూ శక్తిని ప్రదర్శించాడు. యుధిష్ఠిరుని అధిపత్యాన్ని చాలా రాజ్యాలు అంగీకరించగా, కొందరు యుధిష్ఠిరుకి వ్యతిరేకంగా పోరాడారు.

| కృష్ణుడు మరియు యజ్ఞ విధులు

రాజధానిలో యజ్ఞం కోసం సిద్ధత జరుగుతుండగా, శ్రీకృష్ణుడు యుధిష్ఠిరునికి మార్గదర్శకంగా సలహాలు ఇచ్చారు. అయోధ్యనగరపు రాజు ఋతుపర్ణుడు మరియు ముని ధౌమ్య కూడా యజ్ఞ కర్మకాండాలను పర్యవేక్షించారు.

| నాయకత్వం మరియు ధర్మ పాఠాలు

అశ్వమేధ పర్వం ధర్మపాలనలో ధైర్యం, సంప్రదాయానికి గౌరవం మరియు కరుణ అవసరమని స్పష్టంచేస్తుంది. గుర్రం ప్రయాణం ధర్మపరమైన రాజ్యాధికారాన్ని ప్రదర్శిస్తుంది.

| గుర్రం తిరిగి రావడం మరియు యజ్ఞం ముగింపు

సంవత్సరం పూర్తయిన తర్వాత పవిత్ర గుర్రం విజయవంతంగా తిరిగి వచ్చి యజ్ఞం పూర్తయింది. మహా ఉత్సవాలతో యజ్ఞాన్ని సమాప్తం చేశారు.

`,
contentHindi: `
| प्रारंभिक भूमिका

कुरुक्षेत्र युद्ध के पश्चात हस्तिनापुर के राजा युधिष्ठिर ने अपनी सार्वभौम प्रतिष्ठा और शांति सुनिश्चित करने हेतु महान अश्वमेध यज्ञ करने का निर्णय लिया। यह यज्ञ सम्राज्य की सार्वभौमता दर्शाने का प्रमुख प्रतीक था।

| पवित्र अश्व और उसका भ्रमण

मुनियों जैसे वेदव्यास और नारद के मार्गदर्शन में पवित्र अश्व को वर्ष भर के लिये मुक्त छोड़ दिया गया। उसे सुरक्षित रखने और उसे मार्गदर्शित करने हेतु अर्जुन, भीम, सहदेव तथा नकुल जैसे योद्धा साथ गए। 

| संघर्ष और मित्रता

अश्व ने अनेक राज्यों का भ्रमण किया, जहाँ विभिन्न राजाओं और योद्धाओं से उसके साथ परख हुई। अर्जुन ने धर्म और वीरता का उदाहरण देते हुए संघर्षों का सामना किया। कई राज्यों ने युधिष्ठिर की प्रभुता स्वीकार की, जबकि कुछ ने लड़ाई में हार स्वीकार की।

| कृष्ण और यज्ञ की विधियाँ

राजधानी में यज्ञ की तैयारियाँ पूरी हो रही थीं। श्रीकृष्ण ने युधिष्ठिर को सतत मार्गदर्शन दिया। अयोध्या के हितोपदेशक ऋतुपर्ण तथा मुनि धौम्य भी यज्ञ के अनुष्ठानों की देखरेख में थे।

| नेतृत्व और कर्तव्य की शिक्षा

अश्वमेध पर्व स्पष्ट करता है कि नेतृत्व के लिये साहस, दया और सभी प्राणियों के प्रति सम्मान आवश्यक है। अश्व का भ्रमण न्याय और धार्मिक शासन का विस्तार दर्शाता है।

| अश्व का लौटना और यज्ञ का समापन

वर्ष भर के बाद पवित्र अश्व युधिष्ठिर के पास लौटा। इसके सफल भ्रमण ने व्यापक स्वीकार्यता दर्शाई और यज्ञ की विधियाँ सम्पन्न होकर विशाल उत्सव के साथ समाप्त हुईं।

`,

  keyElements: [
    "Yudhishthira’s Imperial Intent and Ashvamedha Yajna",
    "The Sacred Horse’s Journey and Encounters",
    "Arjuna, Bhima, Sahadeva, Nakula on Expedition",
    "Krishna’s Guidance and Ritual Officiation",
    "Lessons on Dharma and Leadership",
    "Completion of the Yajna and Universal Acceptance"
  ],
  keyElementsHindi: [
    "युधिष्ठिर की सम्राज्यवादी मंशा और अश्वमेध यज्ञ",
    "पवित्र अश्व का भ्रमण और संघर्ष",
    "अर्जुन, भीम, सहदेव, नकुल का अभियान",
    "कृष्ण का मार्गदर्शन और यज्ञ अनुष्ठान",
    "धर्म और नेतृत्व पर पाठ",
    "यज्ञ का समापन और सार्वभौमिक स्वीकार्यता"
  ],
  keyElementsTelugu: [
    "యుధిష్ఠిరుని సామ్రాజ్యాధికార ఉద్దేశ్యం మరియు అశ్వమేధ యజ్ఞం",
    "పవిత్ర గుర్రం ప్రయాణం మరియు ఎదురుముఖాలు",
    "అర్జునుడు, భీముడు, సహదేవుడు, నకులుడు యాత్ర",
    "కృష్ణుని మార్గదర్శనం మరియు యజ్ఞ విధులు",
    "ధర్మం మరియు నాయకత్వంపై పాఠాలు",
    "యజ్ఞం ముగింపు మరియు విశ్వవ్యాప్తి"
  ],

  moral: "True sovereignty and peace are established through righteous conduct, courage, and respect for all peoples.",
  moralHindi: "सच्ची सार्वभौमिकता और शांति धर्मपरायण आचरण, वीरता और सभी लोगों के प्रति सम्मान से स्थापित होती है।",
  moralTelugu: "నిజమైన సామ్రాజ్యాధికారాన్ని మరియు శాంతిని ధర్మపరమైన ప్రవర్తన, ధైర్యం మరియు ప్రతి వ్యక్తికి గౌరవం ద్వారా సృష్టించాలి.",

  image: "/story-ashvamedha-parva.jpg",
  chapter: 14
},
{
  id: "ashramavasika-parva",
  epic: "mahabharata",
  title: "Ashramavasika Parva – The Book of the Hermitage Life",
  titleHindi: "आश्रमवासिक पर्व – संन्यास और वनवास",
  titleTelugu: "ఆశ్రమవాసిక పర్వం – సంసార విరమణ మరియు వనవాసం",

  summary: "Ashramavasika Parva narrates the final phase of Dhritarashtra, Gandhari, Kunti, and other elders as they retire to the forest or hermitage. It describes the transition from worldly power to spiritual life, the renunciation of kingship, reflections on mortality, and the pursuit of peace and liberation.",
  summaryHindi: "आश्रमवासिक पर्व में धृतराष्ट्र, गांधारी, कुन्ती और अन्य बुजुर्गों के वनवास और संन्यास का वर्णन है। इसमें सांसारिक सत्ता से आध्यात्मिक जीवन की ओर संक्रमण, मृत्यु के चिंतन और शांति व मोक्ष की प्राप्ति का चित्रण किया गया है।",
  summaryTelugu: "ఆశ్రమవాసిక పర్వం ధృతరాష్ట్రుడు, గాంధారి, కుంతీ మరియు ఇతర వృద్ధుల వనవాసం, సంసార విరమణ యొక్క దశను వివరిస్తుంది. ఇది రాజ్యాధికారాన్ని వదిలి ఆధ్యాత్మిక జీవితం వైపు మార్గాన్ని, మృతిని మరియు శాంతి, moksha సాధనాన్ని చూపిస్తుంది.",

  content: `
| RETREAT TO THE HERMITAGE

After the devastation of the Kurukshetra war, the elders of the Kuru dynasty, including Dhritarashtra, Gandhari, and Kunti, chose to renounce worldly life. They withdrew to the forest, leaving the palace and power behind, seeking peace and spiritual fulfillment. Their transition marked the shift from temporal authority to contemplation and asceticism.

| DHRITARASTRA AND GANDHARI’S LIFE IN THE FOREST

The blind king Dhritarashtra and his devoted wife Gandhari spent their days in penance and prayer. They reflected upon the consequences of ambition, attachment, and war, expressing sorrow for the loss of their sons and kingdom. Their austerities were not only acts of personal penance but also lessons for future generations on detachment and dharma.

| KUNTI AND THE PANDAVAS

Kunti, after serving her sons, joined the hermitage life as well. She guided and nurtured her family in spirit, offering wisdom, prayers, and devotion. The Pandavas, having fulfilled their worldly duties, respected their elders’ retreat, ensuring the continuity of dharma while continuing governance from afar.

| SPIRITUAL REFLECTIONS AND TEACHINGS

In the solitude of the forest, the elders meditated on the impermanence of life, the importance of truth, and the value of dharma over wealth or power. Stories of past kings, sages, and warriors were recounted to illustrate moral lessons, forgiveness, and the pursuit of liberation (moksha).

| FINAL DAYS AND LEGACY

The parva highlights the gentle passing of Dhritarashtra, Gandhari, Kunti, and other elders, emphasizing the peace and liberation attained through renunciation. Their lives inspire generations, showing that the ultimate goal transcends worldly attachments and lies in spiritual wisdom, detachment, and dharma.

`,

  contentTelugu: `
| ఆశ్రమవాసానికి ప్రవేశం

కురుక్షేత్ర యుద్ధం తర్వాత, ధృతరాష్ట్రుడు, గాంధారి, కుంతీ మరియు ఇతర వృద్ధులు భౌతిక జీవితం నుంచి విరమించేందుకు నిర్ణయించుకున్నారు. వారు రాజభవనాన్ని, అధికారాన్ని వదిలి వనంలో ఆశ్రమ వాసం చేపట్టారు, శాంతి మరియు ఆధ్యాత్మిక తృప్తిని సాధించడానికి.

| ధృతరాష్ట్రుడు మరియు గాంధారి వనవాసంలో

మూఢరాజు ధృతరాష్ట్రుడు మరియు తన భర్త గాంధారి తన జీవితాన్ని తపస్సు, ప్రార్థనలు మరియు ధ్యానంలో గడిపారు. ఆశయం, సంపద మరియు యుద్ధం కారణంగా వచ్చిన విధులను, తన కుమారుల మరియు రాజ్యం నష్టాన్ని ఆలోచిస్తూ వారు బాధ వ్యక్తం చేసారు. వారి కఠినాశ్రమాలు వ్యక్తిగత క్షమాపణ మాత్రమే కాదు, భవిష్యత్తు తరాలకు విడిపోవడం మరియు ధర్మ పాఠాలుగా నిలిచాయి.

| కుంతీ మరియు పాండవులు

కుంతీ, తన కుమారుల సేవ పూర్తయిన తర్వాత, ఆశ్రమ వాసం చేపట్టింది. ఆమె కుటుంబానికి ఆధ్యాత్మిక మార్గదర్శకత్వం ఇచ్చి, జ్ఞానం, ప్రార్థనలు మరియు భక్తిని అందించింది. పాండవులు, వారి భౌతిక కర్తవ్యత్మకతను పూర్తిచేసి, వృద్ధుల వనవాసాన్ని గౌరవిస్తూ, ధర్మ కొనసాగింపును దూరం నుండి చూసుకున్నారు.

| ఆధ్యాత్మిక ఆలోచనలు మరియు బోధనలు

వనంలోని నిశ్శబ్దంలో, వృద్ధులు జీవన శాశ్వతత, నిజం ప్రాముఖ్యత మరియు సంపద లేదా శక్తి కంటే ధర్మ విలువపై ధ్యానం చేశారు. గత రాజులు, మునులు మరియు యోధుల కథలు విన్నారు, అవి క్షమ, నైతిక పాఠాలు మరియు moksha సాధనకు మార్గనిర్దేశం చేసాయి.

| చివరి దినాలు మరియు వారసత్వం

పర్వం ధృతరాష్ట్రుడు, గాంధారి, కుంతీ మరియు ఇతర వృద్ధుల సాంత్వనమయమైన మరణాన్ని చూపిస్తుంది, విరమణ ద్వారా పొందిన శాంతి మరియు విమోచనను హైలైట్ చేస్తుంది. వారి జీవితం తరతరాలకు ఆధ్యాత్మిక జ్ఞానం, విడిపోవడం మరియు ధర్మం యొక్క మహత్తును సూచిస్తుంది.

`,

  contentHindi: `
| आश्रमवास के लिए निवृत्ति

कुरुक्षेत्र युद्ध के बाद, धृतराष्ट्र, गांधारी, कुन्ती और अन्य बुजुर्गों ने सांसारिक जीवन से विराम लेने का निर्णय लिया। उन्होंने महल और सत्ता छोड़कर वन में आश्रमवास करना प्रारंभ किया, शांति और आध्यात्मिक तृप्ति पाने के लिए।

| धृतराष्ट्र और गांधारी का वनवास

अंधे राजा धृतराष्ट्र और उनकी पत्नी गांधारी ने तपस्या और प्रार्थना में अपने दिन व्यतीत किए। उन्होंने महत्वाकांक्षा, लगाव और युद्ध के परिणामों पर विचार किया और अपने पुत्रों और राज्य की हानि के लिए शोक व्यक्त किया। उनके कठोर तप व्यक्तिगत प्रायश्चित ही नहीं, बल्कि भविष्य की पीढ़ियों के लिए धर्म और त्याग का पाठ भी थे।

| कुन्ती और पांडव

कुन्ती, अपने पुत्रों की सेवा पूर्ण करने के बाद, आश्रम जीवन में शामिल हुई। उसने परिवार का मार्गदर्शन किया, ज्ञान, प्रार्थना और भक्ति का संचार किया। पांडवों ने, अपने सांसारिक कर्तव्यों को पूरा करने के बाद, बुजुर्गों के वनवास का सम्मान किया और धर्म की निरंतरता सुनिश्चित की।

| आध्यात्मिक चिंतन और शिक्षा

वन की एकान्तता में, बुजुर्गों ने जीवन की अनित्य, सत्य का महत्व और धन या शक्ति की तुलना में धर्म का मूल्य समझा। उन्होंने अतीत के राजा, मुनि और योद्धाओं की कथाएँ सुनाईं, जो क्षमा, नैतिक शिक्षा और मोक्ष के मार्ग को दर्शाती थीं।

| अंतिम दिन और विरासत

पर्व में धृतराष्ट्र, गांधारी, कुन्ती और अन्य बुजुर्गों के शांतिपूर्ण निधन को दर्शाया गया, जो त्याग और आत्मसात के माध्यम से प्राप्त शांति और मुक्ति को उजागर करता है। उनके जीवन से यह संदेश मिलता है कि अंतिम लक्ष्य सांसारिक बंधनों से परे जाकर आध्यात्मिक ज्ञान, त्याग और धर्म में निहित है।

`,

  keyElements: [
    "Retirement of Dhritarashtra, Gandhari, and Kunti",
    "Transition from Kingship to Hermitage Life",
    "Reflections on Dharma, Mortality, and Detachment",
    "Guidance of Elders for Future Generations",
    "Final Days and Spiritual Liberation"
  ],
  keyElementsHindi: [
    "धृतराष्ट्र, गांधारी और कुन्ती का निवृत्ति",
    "राजसत्ता से आश्रमवास जीवन में संक्रमण",
    "धर्म, मृत्यु और विरक्ति पर चिंतन",
    "भविष्य की पीढ़ियों के लिए बुजुर्गों का मार्गदर्शन",
    "अंतिम दिन और आध्यात्मिक मुक्ति"
  ],
  keyElementsTelugu: [
    "ధృతరాష్ట్రుడు, గాంధారి మరియు కుంతీ విరమణ",
    "రాజ్యాధికారంతో ఆశ్రమవాస జీవితం మధ్య మార్పు",
    "ధర్మం, మృత్యం మరియు విడిపోవడం పై ఆలోచనలు",
    "భవిష్యత్తు తరాలకు వృద్ధుల మార్గదర్శనం",
    "చివరి దినాలు మరియు ఆధ్యాత్మిక విమోచనం"
  ], 

  moral: "Renunciation, reflection, and spiritual pursuit lead to inner peace and liberation from worldly attachments.",
  moralHindi: "विरक्ति, चिंतन और आध्यात्मिक साधना आंतरिक शांति और सांसारिक बंधनों से मुक्ति का मार्ग हैं।",
  moralTelugu: "విరమణ, ఆలోచనలు మరియు ఆధ్యాత్మిక సాధన అంతరిక్ష శాంతి మరియు భౌతిక బంధాల నుంచి విమోచనకు దారితీస్తాయి.",

  image: "/story-ashramavasika-parva.jpg",
  chapter: 15
},
{
  id: "mausala-parva",
  epic: "mahabharata",
  title: "Mausala Parva – The Book of the Clubs",
  titleHindi: "मौसला पर्व – यज्ञ और विनाश",
  titleTelugu: "మౌసల పర్వం – అస్త్రాలు మరియు ధ్వంసం",

  summary: "Mausala Parva recounts the destruction of the Yadava dynasty due to internal strife, curses, and divine will. It describes the events leading to the annihilation of Krishna’s clan, highlighting the impermanence of power, the consequences of pride, and the unfolding of destiny.",
  summaryHindi: "मौसला पर्व में यदुवंश के अंत और आंतरिक कलह का वर्णन है। इसमें कृष्ण और उनके कुल के विनाश के कारणों और परिणामों को बताया गया है, जो शक्ति की अस्थायी प्रकृति, अहंकार के परिणाम और नियति की अव्यवस्था को दर्शाता है।",
  summaryTelugu: "మౌసల పర్వం యదు వంశానికి లోపలి కలహం మరియు నాశనం గురించి చెప్పుతుంది. ఇందులో కృష్ణా కుటుంబం యొక్క నాశనం, అధికారంలో అస్థిరత, ఘృణ మరియు విధి యొక్క ఫలితాలను చూపిస్తుంది.",

  content: `
| INTERNAL STRIFE AMONG THE YADAVAS

After the end of the Kurukshetra war and Krishna’s continued guidance, the Yadavas enjoyed prosperity. However, pride, internal conflicts, and resentment grew among them. The elders, including Satyaki and Ugrasena, warned of the consequences, but tensions remained unresolved.

| THE CURSE AND DIVINE WILL

A curse by sage Samba and others foretold the destruction of the Yadavas through infighting. Despite Krishna’s attempts to avert disaster, destiny unfolded, demonstrating the inevitability of fate and the limits of human power.

| THE DESTRUCTION OF THE YADAVAS

During a festival, a quarrel escalated into a violent fight where the Yadavas killed each other using broken clubs (mausalas). Even Krishna, though he tried to mediate, could not prevent the tragedy. The once-proud dynasty was annihilated, leaving grief and shock throughout Dwaraka.

| KRISHNA’S REFLECTIONS

Krishna observed the fulfillment of destiny with calm acceptance. He reflected on dharma, impermanence, and the cosmic order, teaching that attachment, pride, and disregard for counsel lead to downfall. His teachings became a guide for future generations on humility and foresight.

| AFTERMATH AND LESSONS

The surviving elders mourned the loss of their kin and kingdom. Mausala Parva emphasizes the transient nature of power, the consequences of discord, and the necessity of adhering to dharma even amidst prosperity. It serves as a somber reminder that no dynasty or human power is eternal.

`,

  contentTelugu: `
| యదువులలో లోపలి కలహం

కురుక్షేత్ర యుద్ధం తరువాత, కృష్ణా మార్గదర్శకత్వంలో యదువులు సంపన్న జీవితం గడిపారు. అయితే, గర్వం, కలహం మరియు ద్వేషం లోపల పెరిగాయి. సత్యకీ, ఉగ్రసేన వంటి వృద్ధులు ఫలితాల గురించి హెచ్చరించారు, కానీ సమస్యలు పరిష్కరించబడలేదు.

| శాపం మరియు దైవీ నిర్ణయం

సంభా మరియు ఇతర మహర్షుల శాపం యదువుల వధను ముందస్తు సూచించింది. కృష్ణా విపత్తును నివారించడానికి ప్రయత్నించినప్పటికీ, విధి అమలైంది, మానవ శక్తికి పరిమితులు ఉన్నాయని చూపుతూ.

| యదువుల నాశనం

ఒక ఉత్సవ సమయంలో, కలహం ఘోర హింసగా మారింది, యదువులు బ్రోకెన్ క్లబ్ (మౌసల) తో ఒకరిని ఒకరు చంపారు. కృష్ణా మధ్యస్తం చేసినా, విపత్తును ఆపలేకపోయాడు. గర్వకుళానికి నాశనం జరిగి, దుఃఖం మరియు షాక్ డ్వారకా లో వ్యాప్తి చెందింది.

| కృష్ణా ఆలోచనలు

కృష్ణా శాంతితో విధి సాకారాన్ని గమనించాడు. ధర్మం, అనిత్యత మరియు బ్రహ్మాండ క్రమంపై ఆలోచించి, ఘృణ, గర్వం మరియు సలహాను నిర్లక్ష్యం చేయడం అగతికి దారితీస్తుందని బోధించాడు.

| ఫలితాలు మరియు పాఠాలు

తిరిగి ఉన్న వృద్ధులు తమ కుటుంబం మరియు రాజ్యం నష్టానికి శోకించారు. మౌసల పర్వం అధికారంలో అస్థిరత, కలహం ఫలితాలు మరియు ధర్మం పాటన అవసరం చూపిస్తుంది.

`,

  contentHindi: `
| यदुवंश में आंतरिक कलह

कुरुक्षेत्र युद्ध के बाद और कृष्ण के मार्गदर्शन में, यदुवंश समृद्ध जीवन जी रहा था। लेकिन गर्व, कलह और द्वेष बढ़ने लगे। सत्याकी और उग्रसेन जैसे वृद्धों ने परिणामों की चेतावनी दी, पर समस्या बनी रही।

| शाप और दैवीय इच्छा

संभा और अन्य महर्षियों के शाप ने यदुवंश के विनाश की भविष्यवाणी की। कृष्ण ने विपत्ति टालने का प्रयास किया, फिर भी नियति पूरी हुई, जो मानव शक्ति की सीमाओं को दर्शाती है।

| यदुवंश का विनाश

एक उत्सव के दौरान, झगड़ा हिंसक हो गया और यदुवंश ने एक-दूसरे को टूटे हुए लाठियों (मौसला) से मार डाला। कृष्ण ने मध्यस्थता की कोशिश की, लेकिन त्रासदी को रोक नहीं सका। गौरवशाली कुल का नाश हो गया, और द्वारका में दुःख और सदमा फैल गया।

| कृष्ण के विचार

कृष्ण ने शांति के साथ नियति की पूर्ति देखी। उन्होंने धैर्य, अनित्य और ब्रह्मांडीय व्यवस्था पर विचार किया और सिखाया कि अहंकार और उपेक्षा विनाश का कारण हैं।

| परिणाम और शिक्षा

जीवित बचे वृद्ध अपने परिवार और राज्य के नुकसान का शोक मनाते हैं। मौसला पर्व शक्ति की अस्थायी प्रकृति, कलह के परिणाम और समृद्धि में भी धर्म का पालन आवश्यक होने की चेतावनी देता है।

`,

  keyElements: [
    "Internal Strife Among the Yadavas",
    "Curse and Divine Will",
    "Destruction of the Yadavas",
    "Krishna’s Reflections on Dharma and Impermanence",
    "Lessons on Humility and Unity"
  ],
  keyElementsHindi: [
    "यदुवंश में आंतरिक कलह",
    "शाप और दैवीय इच्छा",
    "यदुवंश का विनाश",
    "धर्म और अनित्य पर कृष्ण के विचार",
    "विनम्रता और एकता पर पाठ"
  ],
  keyElementsTelugu: [
    "యాదువులలో లోపలి కలహం",
    "శాపం మరియు దైవీ నిర్ణయం",
    "యదువుల నాశనం",
    "ధర్మం మరియు అనిత్యతపై కృష్ణా ఆలోచనలు",
    "వినయ మరియు ఐక్యతపై పాఠాలు"
  ],

  moral: "Pride, discord, and neglect of dharma lead to downfall; humility and unity ensure true security.",
  moralHindi: "गर्व, कलह और धर्म की उपेक्षा पतन लाती है; विनम्रता और एकता सच्ची सुरक्षा देती हैं।",
  moralTelugu: "ఘృణ, కలహం మరియు ధర్మ నిర్లక్ష్యం పతనానికి దారితీస్తాయి; వినయ మరియు ఐక్యత నిజమైన భద్రతను అందిస్తాయి.",

  image: "/story-mausala-parva.jpg",
  chapter: 16
},
{
  id: "mahaprasthana-parva",
  epic: "mahabharata",
  title: "Mahaprasthana Parva – The Great Departure",
  titleHindi: "महाप्रस्थान पर्व – महान प्रस्थान",
  titleTelugu: "మహాప్రస్థాన పర్వం – మహా ప్రస్థానం",

  summary: "Mahaprasthana Parva describes the final journey of the Pandavas as they renounce the world and embark on their last pilgrimage toward the Himalayas. It highlights detachment, mortality, and the culmination of dharma in their lives.",
  summaryHindi: "महाप्रस्थान पर्व में पांडवों का अंतिम यात्रा वर्णित है, जिसमें वे संसार त्यागकर हिमालय की ओर अंतिम तीर्थयात्रा पर निकलते हैं। इसमें असंग attachment, मृत्यु और उनके जीवन में धर्म का समापन दिखाया गया है।",
  summaryTelugu: "మహాప్రస్థాన పర్వం పాండవుల చివరి ప్రయాణాన్ని వర్ణిస్తుంది. వారు ప్రపంచాన్ని వదిలి హిమాలయాల వైపు చివరి యాత్ర ప్రారంభించారు. ఇందులో విడిపోవడం, మృతి, మరియు వారి జీవితాల్లో ధర్మం యొక్క తీరును చూపిస్తుంది.",

  content: `
| THE FINAL RENUNCIATION

After ruling Hastinapura justly, the Pandavas, led by Yudhishthira, decided to renounce their kingdom. They handed over authority to Parikshit, the grandson of Arjuna, and prepared for their final journey, leaving behind wealth, power, and worldly ties.

| JOURNEY TOWARDS THE HIMALAYAS

Accompanied by Draupadi and their loyal companions, the Pandavas began their pilgrimage towards the mountains. The journey symbolized detachment and preparation for spiritual liberation, with each step bringing lessons of humility and impermanence.

| FALL OF THE COMPANIONS

One by one, the companions of the Pandavas, including Draupadi, Sahadeva, Nakula, Arjuna, and Bhima, succumbed to human frailty and fell during the journey. Only Yudhishthira, virtuous and steadfast, continued, embodying dharma and patience.

| REFLECTIONS ON LIFE AND DEATH

During the journey, Yudhishthira reflected on the lives of his brothers, the consequences of action, and the impermanence of the human body. He meditated on dharma, detachment, and the ultimate goal of moksha, gaining insight into cosmic order and justice.

| THE ASCENT OF YUDHISHTHIRA

At the journey’s end, Yudhishthira reached the gates of heaven, where he was tested for his virtues, humility, and devotion. His steadfast adherence to dharma earned him entrance to Svarga (heaven), completing the moral arc of his life.

`,

  contentTelugu: `
| చివరి విరమణ

హస్తినాపురంలో న్యాయపూర్వకంగా పాలన చేసిన తరువాత, యుధిష్ఠిరుడు నేతృత్వంలో పాండవులు రాజ్యాన్ని విరమించటానికి నిర్ణయించారు. వారు రాజ్యాధికారాన్ని అర్జున పుత్రుడు పరిక్షిత్ కు అప్పగించి, సంపద, అధికార మరియు భౌతిక బంధాలను వదిలి చివరి ప్రయాణానికి సిద్ధమయ్యారు.

| హిమాలయాల వైపు యాత్ర

ద్రౌపది మరియు విశ్వాసపాత్ర సహచరులతో పాండవులు పర్వతాల వైపు యాత్ర ప్రారంభించారు. ఈ యాత్ర విడిపోవడం మరియు ఆధ్యాత్మిక విమోచన కోసం సిద్దతను సూచిస్తుంది. ప్రతి అడుగు వినయం మరియు అనిత్యత పాఠాలను అందించింది.

| సహచరుల అస్తిత్వపు విరమణ

ద్రౌపది, సహదేవ, నాగుల, అర్జున మరియు భీమ వంటి పాండవుల సహచరులు మనవశ్యతకు succumb అయ్యారు మరియు యాత్రలో పడిపోయారు. కేవలం ధర్మపరాయణ, స్థిరమైన యుధిష్ఠిరుడు మాత్రమే కొనసాగాడు.

| జీవితం మరియు మృతి పై ఆలోచనలు

యాత్రలో, యుధిష్ఠిరుడు తన సోదరుల జీవితం, చర్యల ఫలితాలు మరియు మానవ శరీర యొక్క అనిత్యతను ఆలోచించాడు. ధర్మం, విడిపోవడం మరియు moksha యొక్క తుదిపరిణామం మీద ధ్యానం చేశాడు.

| యుధిష్ఠిరుని ఆకాశारोहణం

యాత్ర ముగింపులో, యుధిష్ఠిరుడు స్వర్గ ద్వారాలకు చేరాడు, తన గుణాలు, వినయం మరియు భక్తి కోసం పరీక్షించబడ్డాడు. ధర్మం పై స్థిరమైన అతడి ఆధారంతో, అతడు స్వర్గ లో ప్రవేశించాడు.

`,

  contentHindi: `
| अंतिम विरमण

हस्तिनापुर में न्यायपूर्वक शासन करने के बाद, युधिष्ठिर के नेतृत्व में पांडवों ने राजसत्ता त्यागने का निर्णय लिया। उन्होंने अर्चुन के पोते परीक्षित को राजसत्ता सौंप दी और धन, शक्ति और सांसारिक बंधनों को छोड़ अंतिम यात्रा के लिए तैयार हुए।

| हिमालय की ओर यात्रा

द्रौपदी और विश्वासपात्र साथियों के साथ पांडवों ने पर्वतों की ओर यात्रा शुरू की। यह यात्रा असंगता और आध्यात्मिक मुक्ति की तैयारी का प्रतीक थी, हर कदम पर विनम्रता और अनित्यता के पाठ मिले।

| साथियों का निधन

द्रौपदी, सहदेव, नकुल, अर्जुन और भीम सहित पांडवों के साथी मानव कमजोरी के कारण यात्रा में गिर गए। केवल धर्मपरायण युधिष्ठिर ही बने रहे और यात्रा जारी रखी।

| जीवन और मृत्यु पर चिंतन

यात्रा के दौरान, युधिष्ठिर ने अपने भाइयों के जीवन, कर्मों के परिणाम और मानव शरीर की अनित्यता पर चिंतन किया। उन्होंने धर्म, असंगता और मोक्ष के अंतिम लक्ष्य पर ध्यान केंद्रित किया।

| युधिष्ठिर का स्वर्गारोहण

यात्रा के अंत में, युधिष्ठिर स्वर्ग द्वार तक पहुंचे, जहाँ उनकी गुणों, विनम्रता और भक्ति की परीक्षा हुई। धर्म के प्रति उनकी स्थिरता ने उन्हें स्वर्ग में प्रवेश दिलाया।
`,

  keyElements: [
    "Renunciation of the Pandavas",
    "Journey towards the Himalayas",
    "Fall of Companions due to Human Frailty",
    "Reflections on Dharma and Impermanence",
    "Yudhishthira’s Ascent to Heaven"
  ],
  keyElementsHindi: [
    "पांडवों का विरमण",
    "हिमालय की ओर यात्रा",
    "मानव कमजोरी के कारण साथियों का निधन",
    "धर्म और अनित्यता पर चिंतन",
    "युधिष्ठिर का स्वर्गारोहण"
  ],
  keyElementsTelugu: [
    "పాండవుల విరమణ",
    "హిమాలయాల వైపు యాత్ర",
    "మానవ దుర్బలత కారణంగా సహచరుల అస్తిత్వపు విరమణ",
    "ధర్మం మరియు అనిత్యతపై ఆలోచనలు",
    "యుధిష్ఠిరుని ఆకాశారోహణం"
  ],

  moral: "Detachment, righteousness, and spiritual perseverance lead to true liberation.",
  moralHindi: "असंगता, धर्म और आध्यात्मिक perseverance सच्चे मोक्ष का मार्ग हैं।",
  moralTelugu: "విడిపోవడం, ధర్మం మరియు ఆధ్యాత్మిక సహనం నిజమైన విమోచనకు దారితీస్తాయి.",

  image: "/story-mahaprasthana-parva.jpg",
  chapter: 17
},
{
  id: "swargarohana-parva",
  epic: "mahabharata",
  title: "Swargarohana Parva – The Ascension to Heaven",
  titleHindi: "स्वर्गारोहण पर्व – स्वर्गारोहण",
  titleTelugu: "స్వర్గారోహణ పర్వం – స్వర్గారోహణం",

  summary: "Swargarohana Parva narrates the final ascent of Yudhishthira to heaven, depicting his tests of virtue, the ultimate judgment of deeds, and the reward of dharma. It symbolizes the culmination of the Pandavas’ earthly journey and the triumph of righteousness.",
  summaryHindi: "स्वर्गारोहण पर्व में युधिष्ठिर का स्वर्गारोहण वर्णित है, जिसमें उनके गुणों की परीक्षा, कर्मों का अंतिम न्याय और धर्म का फल दिखाया गया है। यह पांडवों की सांसारिक यात्रा और धर्म की विजय का प्रतीक है।",
  summaryTelugu: "స్వర్గారోహణ పర్వం యుధిష్ఠిరుని స్వర్గారోహణను వివరిస్తుంది, అతని గుణాల పరీక్ష, కర్మల తుది తీర్పు మరియు ధర్మ ఫలాన్ని చూపిస్తుంది. ఇది పాండవుల భౌతిక యాత్ర ముగింపు మరియు ధర్మ విజయం సూచిస్తుంది.",

  content: `
| THE FINAL TESTS OF YUDHISHTHIRA

After the Mahaprasthana journey, Yudhishthira reached the gates of heaven, where he was tested on virtues like truth, patience, compassion, and detachment. The tests revealed his steadfast adherence to dharma despite worldly attachments and losses.

| ENCOUNTER WITH THE DIVINE

Yudhishthira met his ancestors, Krishna, and other celestial beings. He was shown the consequences of actions, the rewards of righteousness, and the punishment of adharma. The divine assembly emphasized justice, moral integrity, and the eternal principles of dharma.

| THE REWARD OF DHARMA

Yudhishthira’s unwavering commitment to virtue earned him a place in heaven. He witnessed the reunion with his brothers, Draupadi, and other companions, highlighting that righteous living, moral integrity, and devotion are ultimately rewarded.

| REFLECTIONS AND COSMIC ORDER

The parva underscores the ultimate triumph of dharma over adharma. Yudhishthira’s ascent illustrates that adherence to truth, righteousness, and ethical conduct leads to spiritual liberation, peace, and cosmic harmony.
`,
  contentTelugu: `
| యుధిష్ఠిరుని చివరి పరీక్షలు

మహాప్రస్థాన యాత్ర తర్వాత, యుధిష్ఠిరుడు స్వర్గ ద్వారాల వద్దకు చేరాడు, అక్కడ అతన్ని నిజం, సహనం, కరుణ మరియు విడిపోవడం వంటి గుణాలపై పరీక్షించారు. ఈ పరీక్షలు భౌతిక బంధాల మరియు నష్టాల మధ్య ధర్మాన్ని పాటించిన స్థిరత్వాన్ని చూపించాయి.

| దైవిక సమావేశం

యుధిష్ఠిరుడు తన పూర్వీకులు, కృష్ణ మరియు ఇతర దివ్య ప్రాణులతో కలసాడు. కార్యాల ఫలితాలు, ధర్మపాలన ఫలితాలు, మరియు అధర్మ శిక్ష చూపించబడ్డాయి. దివ్య సమితి న్యాయం, నైతికత మరియు శాశ్వత ధర్మ సూత్రాలను హైలైట్ చేసింది.

| ధర్మ ఫలం

యుధిష్ఠిరుని స్థిరమైన గుణపరమైన కట్టుబాటుకు స్వర్గంలో స్థానం లభించింది. అతను తన సోదరులు, ద్రౌపది మరియు ఇతర సహచరులతో పునర్మీలనం చూసాడు, ఇది ధర్మపూర్వక జీవితం, నైతికత మరియు భక్తి చివరకు ఫలితాన్ని ఇస్తుందని చూపిస్తుంది.

| ఆలోచనలు మరియు బ్రహ్మాండ క్రమం

పర్వం అధర్మంపై ధర్మం యొక్క తుది విజయం చూపిస్తుంది. యుధిష్ఠిరుని ఆకాశारोहణం సత్యం, ధర్మం మరియు నైతికత పాటన ఆధ్యాత్మిక విమోచన, శాంతి మరియు బ్రహ్మాండ సమరసతకు దారితీస్తుందని సూచిస్తుంది.
`,

  contentHindi: `
| युधिष्ठिर की अंतिम परीक्षा

महाप्रस्थान यात्रा के बाद, युधिष्ठिर स्वर्ग द्वार पर पहुंचे, जहाँ उन्हें सत्य, धैर्य, करुणा और असंगता जैसे गुणों पर परखा गया। परीक्षाओं ने दिखाया कि भौतिक बंधनों और हानि के बावजूद उन्होंने धर्म के पालन में स्थिरता रखी।

| दैवीय सभा

युधिष्ठिर ने अपने पूर्वजों, कृष्ण और अन्य दैवीय प्राणियों से मुलाकात की। कर्मों के परिणाम, धर्मपालन का फल और अधर्म का दंड दिखाया गया। दैवीय सभा ने न्याय, नैतिकता और स्थायी धर्म सिद्धांतों पर जोर दिया।

| धर्म का पुरस्कार

युधिष्ठिर की स्थिर नैतिकता और सदाचार ने उन्हें स्वर्ग में स्थान दिलाया। उन्होंने अपने भाइयों, द्रौपदी और अन्य साथियों के साथ पुनर्मिलन देखा, यह दिखाते हुए कि धर्मपरायण जीवन, नैतिकता और भक्ति का अंततः पुरस्कार मिलता है।

| चिंतन और ब्रह्मांडीय व्यवस्था

पर्व अधर्म पर धर्म की अंतिम विजय को उजागर करता है। युधिष्ठिर का स्वर्गारोहण दिखाता है कि सत्य, धर्म और नैतिक आचरण पालन से आध्यात्मिक मुक्ति, शांति और ब्रह्मांडीय समरसता मिलती है।
`,

  keyElements: [
    "Final Tests of Yudhishthira",
    "Divine Encounters and Judgment",
    "Reward for Dharma",
    "Reflections on Life, Death, and Cosmic Order",
    "Ultimate Spiritual Liberation"
  ],
  keyElementsHindi: [
    "युधिष्ठिर की अंतिम परीक्षा",
    "दैवीय सभा और न्याय",
    "धर्म का पुरस्कार",
    "जीवन, मृत्यु और ब्रह्मांडीय व्यवस्था पर चिंतन",
    "अंतिम आध्यात्मिक मुक्ति"
  ],
  keyElementsTelugu: [
    "యుధిష్ఠిరుని చివరి పరీక్షలు",
    "దైవీ సమావేశం మరియు న్యాయం",
    "ధర్మ ఫలం",
    "జీవితం, మృత్యం మరియు బ్రహ్మాండ క్రమం పై ఆలోచనలు",
    "అంతిమ ఆధ్యాత్మిక విమోచనం"
  ],

  moral: "Virtue, dharma, and steadfast devotion lead to ultimate spiritual reward.",
  moralHindi: "गुण, धर्म और स्थिर भक्ति अंतिम आध्यात्मिक पुरस्कार का मार्ग हैं।",
  moralTelugu: "గుణం, ధర్మం మరియు స్థిరమైన భక్తి అంతిమ ఆధ్యాత్మిక ఫలానికి దారితీస్తాయి.",

  image: "/story-swargarohana-parva.jpg",
  chapter: 18
},
];

export const allStories = [...ramayanaStories, ...mahabharataStories];