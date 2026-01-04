import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Scroll } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ramayanaStories } from "@/data/stories";
import { useLanguage } from "@/i18n";
import { BackButton } from "@/components/BackButton";
import heroRamayana from "@/assets/hero-ramayana.jpg";

export default function RamayanaPage() {
  const { t, language } = useLanguage();

  const getStoryTitle = (story: typeof ramayanaStories[0]) => {
    if (language === "hindi" && story.titleHindi) return story.titleHindi;
    if (language === "telugu" && story.titleTelugu) return story.titleTelugu;
    return story.title;
  };

  const getStorySummary = (story: typeof ramayanaStories[0]) => {
    if (language === "hindi" && story.summaryHindi) return story.summaryHindi;
    if (language === "telugu" && story.summaryTelugu) return story.summaryTelugu;
    return story.summary;
  };

  return (
    <div className="min-h-screen" key={language}>
      <BackButton />
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] min-h-[300px] rounded-2xl overflow-hidden mb-12"
      >
        <img src={heroRamayana} alt={t.nav.ramayana} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="flex items-center gap-3 mb-2">
            <Scroll className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">{t.nav.ramayana}</h1>
        </div>
      </motion.section>

      <div className="grid gap-6">
        {ramayanaStories.map((story, index) => (
          <motion.div key={story.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group">
            <Link to={`/ramayana/${story.id}`}>
              <div className="flex gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-primary text-lg">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors">{getStoryTitle(story)}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{getStorySummary(story)}</p>
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100"><ArrowRight className="w-5 h-5 text-primary" /></Button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
