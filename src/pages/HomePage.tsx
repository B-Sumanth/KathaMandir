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
      description: language === "hindi"
        ? "अयोध्या से वनों, लंका और वापस श्री राम की महाकाव्य यात्रा का अनुसरण करें।"
        : language === "telugu"
        ? "అయోధ్య నుండి అడవుల గుండా, లంక వరకు మరియు తిరిగి శ్రీ రాముని ఇతిహాస ప్రయాణాన్ని అనుసరించండి."
        : "Follow the epic journey of Lord Rama from Ayodhya through the forests, to Lanka and back.",
      image: heroRamayana,
      icon: Scroll,
      path: "/ramayana",
    },
    {
      id: "mahabharata",
      title: t.nav.mahabharata,
      subtitle: t.home.greatIndianEpic,
      description: language === "hindi"
        ? "कुरुक्षेत्र के महान युद्ध और भगवद्गीता के दिव्य ज्ञान की कथा।"
        : language === "telugu"
        ? "కురుక్షేత్ర మహా యుద్ధం మరియు భగవద్గీత దివ్య జ్ఞానం యొక్క కథ."
        : "The tale of the great war of Kurukshetra and the divine wisdom of Bhagavad Gita.",
      image: heroMahabharata,
      icon: Book,
      path: "/mahabharata",
    },
  ];

  return (
    <div className="min-h-screen" key={language}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] min-h-[400px] rounded-2xl overflow-hidden mb-12"
      >
        <img
          src={heroMain}
          alt="KathaMandir"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-4"
          >
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="text-sm uppercase tracking-widest text-primary">
              {t.appTagline}
            </span>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            {t.appName}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-2xl text-lg"
          >
            {t.home.discoverWisdom}
          </motion.p>
        </div>
      </motion.section>

      {/* Epics Grid */}
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
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link to={epic.path}>
                <div className="relative h-[300px] rounded-2xl overflow-hidden border border-border">
                  <img
                    src={epic.image}
                    alt={epic.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-xs uppercase tracking-widest text-primary">
                        {epic.subtitle}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl text-foreground mb-2">
                      {epic.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {epic.description}
                    </p>
                    <Button variant="epic" className="w-fit">
                      {t.common.explore}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.section>
    </div>
  );
}
