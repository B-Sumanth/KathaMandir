export type Language = "english" | "hindi" | "telugu";

export interface Translations {
  appName: string;
  appTagline: string;
  nav: {
    home: string;
    ramayana: string;
    mahabharata: string;
    quizzes: string;
    wallpapers: string;
    profile: string;
    settings: string;
    search: string;
  };
  common: {
    explore: string;
    readMore: string;
    back: string;
    next: string;
    previous: string;
    download: string;
    close: string;
    save: string;
    cancel: string;
    loading: string;
    error: string;
    success: string;
    stories: string;
    chapters: string;
    comingSoon: string;
    moreStoriesComing: string;
  };
  home: {
    discoverWisdom: string;
    journeyOfDharma: string;
    greatIndianEpic: string;
    quickAccess: string;
    takeQuiz: string;
    browseWallpapers: string;
  };
  story: {
    theStory: string;
    keyElements: string;
    theMoral: string;
    chapter: string;
    selectLanguage: string;
  };
  quiz: {
    testKnowledge: string;
    challengeYourself: string;
    question: string;
    of: string;
    score: string;
    explanation: string;
    nextQuestion: string;
    seeResults: string;
    quizComplete: string;
    youScored: string;
    outOf: string;
    tryAgain: string;
    difficulty: string;
    easy: string;
    medium: string;
    hard: string;
  };
  wallpapers: {
    title: string;
    subtitle: string;
    all: string;
    temple: string;
    ramayana: string;
    mahabharata: string;
  };
  profile: {
    guestReader: string;
    exploringWisdom: string;
    storiesRead: string;
    quizzesTaken: string;
    favorites: string;
    settings: string;
    myFavorites: string;
    signOut: string;
    signIn: string;
    createAccount: string;
    syncProgress: string;
  };
  settings: {
    title: string;
    language: string;
    selectLanguage: string;
    fontSize: string;
    small: string;
    medium: string;
    large: string;
    preferences: string;
    savedSuccessfully: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    description: string;
    returnHome: string;
  };
}

export const translations: Record<Language, Translations> = {
  english: {
    appName: "KathaMandir",
    appTagline: "The Indian Epics",
    nav: {
      home: "Home",
      ramayana: "Ramayana",
      mahabharata: "Mahabharata",
      quizzes: "Quizzes",
      wallpapers: "Wallpapers",
      profile: "Profile",
      settings: "Settings",
      search: "Search stories...",
    },
    common: {
      explore: "Explore",
      readMore: "Read More",
      back: "Back",
      next: "Next",
      previous: "Previous",
      download: "Download",
      close: "Close",
      save: "Save",
      cancel: "Cancel",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      stories: "Stories",
      chapters: "chapters",
      comingSoon: "Coming Soon",
      moreStoriesComing: "More stories will be added gradually",
    },
    home: {
      discoverWisdom: "Discover the timeless wisdom of Ramayana and Mahabharata through immersive storytelling",
      journeyOfDharma: "The Journey of Dharma",
      greatIndianEpic: "The Great Indian Epic",
      quickAccess: "Quick Access",
      takeQuiz: "Take a Quiz",
      browseWallpapers: "Browse Wallpapers",
    },
    story: {
      theStory: "The Story",
      keyElements: "Key Elements",
      theMoral: "The Moral",
      chapter: "Chapter",
      selectLanguage: "Select Language",
    },
    quiz: {
      testKnowledge: "Test Your Knowledge",
      challengeYourself: "Challenge yourself with questions from the Indian epics",
      question: "Question",
      of: "of",
      score: "Score",
      explanation: "Explanation",
      nextQuestion: "Next Question",
      seeResults: "See Results",
      quizComplete: "Quiz Complete!",
      youScored: "You scored",
      outOf: "out of",
      tryAgain: "Try Again",
      difficulty: "Difficulty",
      easy: "Easy",
      medium: "Medium",
      hard: "Hard",
    },
    wallpapers: {
      title: "Wallpapers",
      subtitle: "Beautiful artwork from the Indian epics for your devices",
      all: "All",
      temple: "Temple",
      ramayana: "Ramayana",
      mahabharata: "Mahabharata",
    },
    profile: {
      guestReader: "Guest Reader",
      exploringWisdom: "Exploring the ancient wisdom",
      storiesRead: "Stories Read",
      quizzesTaken: "Quizzes Taken",
      favorites: "Favorites",
      settings: "Settings",
      myFavorites: "My Favorites",
      signOut: "Sign Out",
      signIn: "Sign In",
      createAccount: "Create Account",
      syncProgress: "Sign in to sync your progress across devices and unlock personalized recommendations.",
    },
    settings: {
      title: "Settings",
      language: "Language",
      selectLanguage: "Select your preferred language",
      fontSize: "Font Size",
      small: "Small",
      medium: "Medium",
      large: "Large",
      preferences: "Preferences",
      savedSuccessfully: "Settings saved successfully",
    },
    notFound: {
      title: "404",
      subtitle: "Path Not Found",
      description: "Like Rama wandering the forests, you've ventured into unknown territory.",
      returnHome: "Return Home",
    },
  },
  hindi: {
    appName: "कथा मंदिर",
    appTagline: "भारतीय महाकाव्य",
    nav: {
      home: "होम",
      ramayana: "रामायण",
      mahabharata: "महाभारत",
      quizzes: "प्रश्नोत्तरी",
      wallpapers: "वॉलपेपर",
      profile: "प्रोफ़ाइल",
      settings: "सेटिंग्स",
      search: "कथाएं खोजें...",
    },
    common: {
      explore: "देखें",
      readMore: "और पढ़ें",
      back: "वापस",
      next: "अगला",
      previous: "पिछला",
      download: "डाउनलोड",
      close: "बंद करें",
      save: "सहेजें",
      cancel: "रद्द करें",
      loading: "लोड हो रहा है...",
      error: "त्रुटि",
      success: "सफलता",
      stories: "कथाएं",
      chapters: "अध्याय",
      comingSoon: "जल्द आ रहा है",
      moreStoriesComing: "और कथाएं जल्द जोड़ी जाएंगी",
    },
    home: {
      discoverWisdom: "रामायण और महाभारत की कालजयी शिक्षाओं को जीवंत कथाओं के माध्यम से जानें",
      journeyOfDharma: "धर्म की यात्रा",
      greatIndianEpic: "महान भारतीय महाकाव्य",
      quickAccess: "त्वरित पहुंच",
      takeQuiz: "प्रश्नोत्तरी लें",
      browseWallpapers: "वॉलपेपर देखें",
    },
    story: {
      theStory: "कथा",
      keyElements: "मुख्य तत्व",
      theMoral: "शिक्षा",
      chapter: "अध्याय",
      selectLanguage: "भाषा चुनें",
    },
    quiz: {
      testKnowledge: "अपना ज्ञान परखें",
      challengeYourself: "भारतीय महाकाव्यों से प्रश्नों के साथ खुद को चुनौती दें",
      question: "प्रश्न",
      of: "में से",
      score: "अंक",
      explanation: "व्याख्या",
      nextQuestion: "अगला प्रश्न",
      seeResults: "परिणाम देखें",
      quizComplete: "प्रश्नोत्तरी पूर्ण!",
      youScored: "आपने प्राप्त किए",
      outOf: "में से",
      tryAgain: "पुनः प्रयास करें",
      difficulty: "कठिनाई",
      easy: "आसान",
      medium: "मध्यम",
      hard: "कठिन",
    },
    wallpapers: {
      title: "वॉलपेपर",
      subtitle: "आपके उपकरणों के लिए भारतीय महाकाव्यों की सुंदर कला",
      all: "सभी",
      temple: "मंदिर",
      ramayana: "रामायण",
      mahabharata: "महाभारत",
    },
    profile: {
      guestReader: "अतिथि पाठक",
      exploringWisdom: "प्राचीन ज्ञान की खोज में",
      storiesRead: "पढ़ी गई कथाएं",
      quizzesTaken: "दी गई प्रश्नोत्तरी",
      favorites: "पसंदीदा",
      settings: "सेटिंग्स",
      myFavorites: "मेरे पसंदीदा",
      signOut: "साइन आउट",
      signIn: "साइन इन",
      createAccount: "खाता बनाएं",
      syncProgress: "अपनी प्रगति को सभी उपकरणों पर सिंक करने के लिए साइन इन करें।",
    },
    settings: {
      title: "सेटिंग्स",
      language: "भाषा",
      selectLanguage: "अपनी पसंदीदा भाषा चुनें",
      fontSize: "फ़ॉन्ट आकार",
      small: "छोटा",
      medium: "मध्यम",
      large: "बड़ा",
      preferences: "प्राथमिकताएं",
      savedSuccessfully: "सेटिंग्स सफलतापूर्वक सहेजी गईं",
    },
    notFound: {
      title: "४०४",
      subtitle: "पृष्ठ नहीं मिला",
      description: "वनों में राम की भांति, आप अज्ञात क्षेत्र में आ गए हैं।",
      returnHome: "होम पर लौटें",
    },
  },
  telugu: {
    appName: "కథా మందిర్",
    appTagline: "భారతీయ ఇతిహాసాలు",
    nav: {
      home: "హోమ్",
      ramayana: "రామాయణం",
      mahabharata: "మహాభారతం",
      quizzes: "క్విజ్‌లు",
      wallpapers: "వాల్‌పేపర్లు",
      profile: "ప్రొఫైల్",
      settings: "సెట్టింగ్‌లు",
      search: "కథలు వెతకండి...",
    },
    common: {
      explore: "అన్వేషించండి",
      readMore: "మరింత చదవండి",
      back: "వెనుకకు",
      next: "తదుపరి",
      previous: "మునుపటి",
      download: "డౌన్‌లోడ్",
      close: "మూసివేయి",
      save: "సేవ్ చేయి",
      cancel: "రద్దు చేయి",
      loading: "లోడ్ అవుతోంది...",
      error: "లోపం",
      success: "విజయం",
      stories: "కథలు",
      chapters: "అధ్యాయాలు",
      comingSoon: "త్వరలో వస్తోంది",
      moreStoriesComing: "మరిన్ని కథలు త్వరలో జోడించబడతాయి",
    },
    home: {
      discoverWisdom: "రామాయణం మరియు మహాభారతం యొక్క శాశ్వత జ్ఞానాన్ని కథల ద్వారా కనుగొనండి",
      journeyOfDharma: "ధర్మ యాత్ర",
      greatIndianEpic: "గొప్ప భారతీయ ఇతిహాసం",
      quickAccess: "త్వరిత యాక్సెస్",
      takeQuiz: "క్విజ్ తీసుకోండి",
      browseWallpapers: "వాల్‌పేపర్లు చూడండి",
    },
    story: {
      theStory: "కథ",
      keyElements: "ముఖ్య అంశాలు",
      theMoral: "నీతి",
      chapter: "అధ్యాయం",
      selectLanguage: "భాష ఎంచుకోండి",
    },
    quiz: {
      testKnowledge: "మీ జ్ఞానాన్ని పరీక్షించండి",
      challengeYourself: "భారతీయ ఇతిహాసాల ప్రశ్నలతో మిమ్మల్ని మీరు సవాలు చేసుకోండి",
      question: "ప్రశ్న",
      of: "లో",
      score: "స్కోర్",
      explanation: "వివరణ",
      nextQuestion: "తదుపరి ప్రశ్న",
      seeResults: "ఫలితాలు చూడండి",
      quizComplete: "క్విజ్ పూర్తయింది!",
      youScored: "మీరు సాధించారు",
      outOf: "లో",
      tryAgain: "మళ్ళీ ప్రయత్నించండి",
      difficulty: "కష్టం",
      easy: "సులభం",
      medium: "మధ్యస్థం",
      hard: "కఠినం",
    },
    wallpapers: {
      title: "వాల్‌పేపర్లు",
      subtitle: "మీ పరికరాల కోసం భారతీయ ఇతిహాసాల అందమైన కళ",
      all: "అన్నీ",
      temple: "దేవాలయం",
      ramayana: "రామాయణం",
      mahabharata: "మహాభారతం",
    },
    profile: {
      guestReader: "అతిథి పాఠకుడు",
      exploringWisdom: "పురాతన జ్ఞానాన్ని అన్వేషిస్తోంది",
      storiesRead: "చదివిన కథలు",
      quizzesTaken: "తీసుకున్న క్విజ్‌లు",
      favorites: "ఇష్టమైనవి",
      settings: "సెట్టింగ్‌లు",
      myFavorites: "నా ఇష్టమైనవి",
      signOut: "సైన్ అవుట్",
      signIn: "సైన్ ఇన్",
      createAccount: "ఖాతా సృష్టించండి",
      syncProgress: "మీ ప్రగతిని అన్ని పరికరాలలో సింక్ చేయడానికి సైన్ ఇన్ చేయండి.",
    },
    settings: {
      title: "సెట్టింగ్‌లు",
      language: "భాష",
      selectLanguage: "మీ ఇష్టమైన భాషను ఎంచుకోండి",
      fontSize: "ఫాంట్ పరిమాణం",
      small: "చిన్న",
      medium: "మధ్యస్థం",
      large: "పెద్ద",
      preferences: "ప్రాధాన్యతలు",
      savedSuccessfully: "సెట్టింగ్‌లు విజయవంతంగా సేవ్ చేయబడ్డాయి",
    },
    notFound: {
      title: "404",
      subtitle: "పేజీ కనుగొనబడలేదు",
      description: "అడవులలో రాముని వలె, మీరు తెలియని ప్రాంతంలోకి వచ్చారు.",
      returnHome: "హోమ్‌కు తిరిగి వెళ్ళండి",
    },
  },
};
