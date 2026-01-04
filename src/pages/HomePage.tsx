import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scroll, Book, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import heroMain from "@/assets/hero-main.jpg";
import heroRamayana from "@/assets/hero-ramayana.jpg";
import heroMahabharata from "@/assets/hero-mahabharata.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HomePage() {
  const { t, language } = useLanguage();

  const epics = [
    {
      id: "ramayana",
      title: t.nav.ramayana,
      subtitle: t.home.journeyOfDharma,
      description:
        language === "hindi"
          ? "अयोध्या से वनों, लंका और वापस श्री राम की महाकाव्य यात्रा का अनुसरण करें। कर्तव्य, प्रेम और अच्छाई की बुराई पर विजय की कालजयी कथा।"
          : language === "telugu"
          ? "అయోధ్య నుండి అడవుల గుండా, లంక వరకు మరియు తిరిగి శ్రీ రాముని ఇతిహాస ప్రయాణాన్ని అనుసరించండి. ధర్మం, ప్రేమ మరియు చెడుపై మంచి విజయం యొక్క శాశ్వత కథ."
          : "Follow Lord Rama's epic journey from Ayodhya through the forests, to Lanka, and back. A timeless tale of duty, love, and the triumph of good over evil.",
      image: heroRamayana,
      icon: Scroll,
      path: "/ramayana",
      stories: 7,
    },
    {
      id: "mahabharata",
      title: t.nav.mahabharata,
      subtitle: t.home.greatIndianEpic,
      description:
        language === "hindi"
          ? "पांडवों और कौरवों के बीच लड़ी गई सबसे महान युद्ध का साक्षी बनें। सम्मान, विश्वासघात, ज्ञान और दिव्य हस्तक्षेप की कथाओं का अन्वेषण करें।"
          : language === "telugu"
          ? "పాండవులు మరియు కౌరవుల మధ్య జరిగిన గొప్ప యుద్ధానికి సాక్షిగా ఉండండి. గౌరవం, విశ్వాసఘాతం, జ్ఞానం మరియు దివ్య జోక్యం కథలను అన్వేషించండి."
          : "Witness the greatest war ever fought between the Pandavas and Kauravas. Explore tales of honor, betrayal, wisdom, and divine intervention.",
      image: heroMahabharata,
      icon: Book,
      path: "/mahabharata",
      stories: 18,
    },
  ];

  return (
    <div className="min-h-screen" key={language}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] min-h-[400px] rounded-2xl overflow-hidden mb-12"
      >
        <img
          src={heroMain}
          alt="Ancient Indian Temple"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <Sparkles className="w-12 h-12 text-primary animate-glow mb-4" />
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4 tracking-wider">
            {t.appName}
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-2">
            {t.appTagline}
          </p>
          <p className="text-muted-foreground max-w-xl">
            {t.home.discoverWisdom}
          </p>
        </div>
      </motion.section>

      {/* Epic Cards */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8"
      >
        {epics.map((epic) => {
          const Icon = epic.icon;
          return (
            <motion.div
              key={epic.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden bg-card border hover:border-primary/30"
            >
              <img
                src={epic.image}
                alt={epic.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl">
                      {epic.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {epic.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {epic.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gold-light">
                    {epic.stories} {t.common.stories}
                  </span>
                  <Link to={epic.path}>
                    <Button variant="epic">
                      {t.common.explore}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.section>

      {/* Footer */}
      <footer className="mt-20 border-t border-border">
        {/* Temple Divider */}
        <div className="relative h-10 overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
          <div className="absolute inset-0 flex items-center justify-center text-gold-light text-lg">
            ॐ
          </div>
        </div>

        <div className="py-6 text-center text-sm text-muted-foreground">
          © 2026{" "}
          <span className="text-primary font-medium">
            Sumanth Bopparaju
          </span>
          . All rights reserved.
          <div className="text-xs mt-1">Developed in 2026</div>
        </div>
      </footer>
    </div>
  );
}
