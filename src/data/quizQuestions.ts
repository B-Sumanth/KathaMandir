export interface QuizQuestion {
  id: number;
  question: string;
  questionHindi: string;
  questionTelugu: string;
  options: string[];
  optionsHindi: string[];
  optionsTelugu: string[];
  correct: number;
  explanation: string;
  explanationHindi: string;
  explanationTelugu: string;
  difficulty: "easy" | "medium" | "hard";
  source: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    difficulty: "easy",
    source: "NCERT Class 6 Social Science",
    question: "Who was Rama's devoted brother who accompanied him to the forest?",
    questionHindi: "राम के साथ वन जाने वाले भक्त भाई कौन थे?",
    questionTelugu: "రాముని భక్తుడైన సోదరుడు ఎవరు అడవికి వెళ్ళారు?",
    options: ["Bharata", "Shatrughna", "Lakshmana", "Vibhishana"],
    optionsHindi: ["भरत", "शत्रुघ्न", "लक्ष्मण", "विभीषण"],
    optionsTelugu: ["భరతుడు", "శత్రుఘ్నుడు", "లక్ష్మణుడు", "విభీషణుడు"],
    correct: 2,
    explanation: "Lakshmana voluntarily accompanied Rama and Sita during their 14-year exile.",
    explanationHindi: "लक्ष्मण ने स्वेच्छा से राम और सीता के साथ 14 वर्ष का वनवास बिताया।",
    explanationTelugu: "లక్ష్మణుడు 14 సంవత్సరాల వనవాసంలో రాముడు మరియు సీతను స్వచ్ఛందంగా అనుసరించాడు.",
  },
  {
    id: 2,
    difficulty: "easy",
    source: "NCERT Class 6 Social Science",
    question: "Who narrated the Bhagavad Gita to Arjuna?",
    questionHindi: "अर्जुन को भगवद्गीता किसने सुनाई?",
    questionTelugu: "భగవద్గీతను అర్జునుడికి ఎవరు బోధించారు?",
    options: ["Vyasa", "Bhishma", "Krishna", "Drona"],
    optionsHindi: ["व्यास", "भीष्म", "कृष्ण", "द्रोण"],
    optionsTelugu: ["వ్యాసుడు", "భీష్ముడు", "కృష్ణుడు", "ద్రోణుడు"],
    correct: 2,
    explanation: "Lord Krishna imparted the Bhagavad Gita to Arjuna on Kurukshetra battlefield.",
    explanationHindi: "भगवान कृष्ण ने कुरुक्षेत्र में अर्जुन को भगवद्गीता का उपदेश दिया।",
    explanationTelugu: "కురుక్షేత్ర యుద్ధభూమిలో శ్రీకృష్ణుడు అర్జునుడికి భగవద్గీతను బోధించారు.",
  },
  {
    id: 3,
    difficulty: "easy",
    source: "NCERT Class 7 History",
    question: "What was the capital city of Rama's kingdom?",
    questionHindi: "राम के राज्य की राजधानी क्या थी?",
    questionTelugu: "రాముని రాజ్యానికి రాజధాని ఏది?",
    options: ["Mithila", "Ayodhya", "Lanka", "Kishkindha"],
    optionsHindi: ["मिथिला", "अयोध्या", "लंका", "किष्किंधा"],
    optionsTelugu: ["మిథిల", "అయోధ్య", "లంక", "కిష్కింధ"],
    correct: 1,
    explanation: "Ayodhya was the capital of Kosala kingdom, ruled by King Dasharatha and later Rama.",
    explanationHindi: "अयोध्या कोसल राज्य की राजधानी थी, जिस पर राजा दशरथ और बाद में राम ने शासन किया।",
    explanationTelugu: "అయోధ్య కోసల రాజ్యానికి రాజధాని, దశరథ మహారాజు మరియు తరువాత రాముడు పాలించారు.",
  },
  {
    id: 4,
    difficulty: "easy",
    source: "CBSE Class 6 Social Studies",
    question: "Who was the wife of Lord Rama?",
    questionHindi: "भगवान राम की पत्नी कौन थीं?",
    questionTelugu: "శ్రీరాముని భార్య ఎవరు?",
    options: ["Mandodari", "Sita", "Tara", "Urmila"],
    optionsHindi: ["मंदोदरी", "सीता", "तारा", "उर्मिला"],
    optionsTelugu: ["మండోదరి", "సీత", "తార", "ఊర్మిళ"],
    correct: 1,
    explanation: "Sita, daughter of King Janaka of Mithila, was the devoted wife of Lord Rama.",
    explanationHindi: "मिथिला के राजा जनक की पुत्री सीता भगवान राम की समर्पित पत्नी थीं।",
    explanationTelugu: "మిథిల రాజు జనకుని కుమార్తె సీత శ్రీరాముని భక్తిగల భార్య.",
  },
  {
    id: 5,
    difficulty: "easy",
    source: "NCERT Class 6",
    question: "How many Pandava brothers were there?",
    questionHindi: "पांडव भाई कितने थे?",
    questionTelugu: "పాండవ సోదరులు ఎంతమంది ఉన్నారు?",
    options: ["Three", "Four", "Five", "Six"],
    optionsHindi: ["तीन", "चार", "पांच", "छह"],
    optionsTelugu: ["మూడు", "నాలుగు", "ఐదు", "ఆరు"],
    correct: 2,
    explanation: "There were five Pandava brothers: Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva.",
    explanationHindi: "पांच पांडव भाई थे: युधिष्ठिर, भीम, अर्जुन, नकुल और सहदेव।",
    explanationTelugu: "ఐదుగురు పాండవ సోదరులు ఉన్నారు: ధర్మరాజు, భీముడు, అర్జునుడు, నకులుడు మరియు సహదేవుడు.",
  },
  {
    id: 6,
    difficulty: "medium",
    source: "NCERT Class 7 History",
    question: "What is the name of the bow that Rama broke to win Sita's hand?",
    questionHindi: "सीता को जीतने के लिए राम ने कौन सा धनुष तोड़ा?",
    questionTelugu: "సీత చేతిని గెలవడానికి రాముడు విరిచిన ధనస్సు పేరు ఏమిటి?",
    options: ["Gandiva", "Sharanga", "Pinaka", "Kodanda"],
    optionsHindi: ["गांडीव", "शारंग", "पिनाक", "कोदंड"],
    optionsTelugu: ["గాండీవం", "శారంగం", "పినాకం", "కోదండం"],
    correct: 2,
    explanation: "Pinaka was Lord Shiva's bow that Rama broke at Sita's swayamvara in Mithila.",
    explanationHindi: "पिनाक भगवान शिव का धनुष था जिसे राम ने मिथिला में सीता स्वयंवर में तोड़ा।",
    explanationTelugu: "పినాకం శివుని ధనస్సు, మిథిలలో సీత స్వయంవరంలో రాముడు దానిని విరిచాడు.",
  },
  {
    id: 7,
    difficulty: "medium",
    source: "CBSE Class 7",
    question: "Who was Draupadi's brother?",
    questionHindi: "द्रौपदी के भाई कौन थे?",
    questionTelugu: "ద్రౌపది సోదరుడు ఎవరు?",
    options: ["Karna", "Dhrishtadyumna", "Shikhandi", "Satyaki"],
    optionsHindi: ["कर्ण", "धृष्टद्युम्न", "शिखंडी", "सात्यकि"],
    optionsTelugu: ["కర్ణుడు", "ధృష్టద్యుమ్నుడు", "శిఖండి", "సాత్యకి"],
    correct: 1,
    explanation: "Dhrishtadyumna was Draupadi's brother, born from a yajna to kill Drona.",
    explanationHindi: "धृष्टद्युम्न द्रौपदी के भाई थे, जो द्रोण वध हेतु यज्ञ से उत्पन्न हुए।",
    explanationTelugu: "ధృష్టద్యుమ్నుడు ద్రౌపది సోదరుడు, ద్రోణుడిని సంహరించడానికి యజ్ఞం నుండి జన్మించాడు.",
  },
  {
    id: 8,
    difficulty: "hard",
    source: "NCERT Class 8",
    question: "What divine weapon did Arjuna receive from Lord Shiva?",
    questionHindi: "अर्जुन को भगवान शिव से कौन सा दिव्यास्त्र मिला?",
    questionTelugu: "అర్జునుడు శివుని నుండి ఏ దివ్యాస్త్రం పొందాడు?",
    options: ["Brahmastra", "Narayanastra", "Pashupatastra", "Varunastra"],
    optionsHindi: ["ब्रह्मास्त्र", "नारायणास्त्र", "पाशुपतास्त्र", "वरुणास्त्र"],
    optionsTelugu: ["బ్రహ్మాస్త్రం", "నారాయణాస్త్రం", "పాశుపతాస్త్రం", "వరుణాస్త్రం"],
    correct: 2,
    explanation: "Arjuna received the powerful Pashupatastra from Lord Shiva after a fierce battle as a Kirata (hunter).",
    explanationHindi: "अर्जुन ने किरात रूपी शिव से युद्ध के बाद पाशुपतास्त्र प्राप्त किया।",
    explanationTelugu: "కిరాత రూపంలో ఉన్న శివునితో యుద్ధం తర్వాత అర్జునుడు పాశుపతాస్త్రం పొందాడు.",
  },
  {
    id: 9,
    difficulty: "hard",
    source: "Advanced Studies",
    question: "Who killed Abhimanyu in the Chakravyuha?",
    questionHindi: "चक्रव्यूह में अभिमन्यु को किसने मारा?",
    questionTelugu: "చక్రవ్యూహంలో అభిమన్యుడిని ఎవరు చంపారు?",
    options: ["Karna alone", "Multiple warriors together", "Drona", "Duryodhana"],
    optionsHindi: ["अकेले कर्ण", "कई योद्धाओं ने मिलकर", "द्रोण", "दुर्योधन"],
    optionsTelugu: ["కర్ణుడు ఒంటరిగా", "అనేక యోధులు కలిసి", "ద్రోణుడు", "దుర్యోధనుడు"],
    correct: 1,
    explanation: "Abhimanyu was killed by multiple warriors including Karna, Drona, Kripa, Ashwatthama, and Dushasana's son, who attacked him together after his bow was broken.",
    explanationHindi: "अभिमन्यु को कर्ण, द्रोण, कृप, अश्वत्थामा और दुःशासन पुत्र ने मिलकर मारा।",
    explanationTelugu: "అభిమన్యుడిని కర్ణ, ద్రోణ, కృప, అశ్వత్థామ మరియు దుశ్శాసన కుమారుడు కలిసి సంహరించారు.",
  },
  {
    id: 10,
    difficulty: "medium",
    source: "CBSE Class 7",
    question: "Who built the bridge to Lanka?",
    questionHindi: "लंका तक पुल किसने बनाया?",
    questionTelugu: "లంకకు వంతెన ఎవరు నిర్మించారు?",
    options: ["Hanuman", "Sugriva", "Nala and Neela", "Jambavan"],
    optionsHindi: ["हनुमान", "सुग्रीव", "नल और नील", "जामवंत"],
    optionsTelugu: ["హనుమంతుడు", "సుగ్రీవుడు", "నల మరియు నీల", "జాంబవంతుడు"],
    correct: 2,
    explanation: "Nala and Neela, the vanara engineers, led the construction of Rama Setu with the help of the vanara army.",
    explanationHindi: "नल और नील ने वानर सेना की सहायता से रामसेतु का निर्माण किया।",
    explanationTelugu: "నల మరియు నీల వానర సేన సహాయంతో రామసేతు నిర్మాణానికి నాయకత్వం వహించారు.",
  },
];

export function getQuestionsByDifficulty(difficulty: "easy" | "medium" | "hard"): QuizQuestion[] {
  return quizQuestions.filter(q => q.difficulty === difficulty);
}

export function shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomQuestions(difficulty: "easy" | "medium" | "hard", count: number = 10): QuizQuestion[] {
  const filtered = getQuestionsByDifficulty(difficulty);
  const shuffled = shuffleQuestions(filtered);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
