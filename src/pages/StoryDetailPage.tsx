import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Star,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { allStories } from "@/data/stories";
import { useLanguage, Language } from "@/i18n";
import { cn } from "@/lib/utils";
import StoryAudioButton from "@/components/StoryAudioButton";

export default function StoryDetailPage() {
  const { epic, storyId } = useParams<{
    epic: "ramayana" | "mahabharata";
    storyId: string;
  }>();

  const { t, language: globalLanguage } = useLanguage();
  const [storyLanguage, setStoryLanguage] =
    useState<Language>(globalLanguage);

  if (!epic || !storyId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Invalid story path</p>
      </div>
    );
  }

  const epicStories = allStories.filter((s) => s.epic === epic);
  const story = epicStories.find((s) => s.id === storyId);

  const currentIndex = epicStories.findIndex((s) => s.id === storyId);
  const prevStory =
    currentIndex > 0 ? epicStories[currentIndex - 1] : null;
  const nextStory =
    currentIndex < epicStories.length - 1
      ? epicStories[currentIndex + 1]
      : null;

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to={`/${epic}`}>
          <Button variant="outline">{t.common.back}</Button>
        </Link>
      </div>
    );
  }

  // ---------- CONTENT HELPERS ----------
  const getTitle = () => {
    switch (storyLanguage) {
      case "hindi":
        return story.titleHindi || story.title;
      case "telugu":
        return story.titleTelugu || story.title;
      default:
        return story.title;
    }
  };

  const getContent = () => {
    switch (storyLanguage) {
      case "hindi":
        return story.contentHindi || story.content;
      case "telugu":
        return story.contentTelugu || story.content;
      default:
        return story.content;
    }
  };

  const getMoral = () => {
    switch (storyLanguage) {
      case "hindi":
        return story.moralHindi || story.moral;
      case "telugu":
        return story.moralTelugu || story.moral;
      default:
        return story.moral;
    }
  };

  const getKeyElements = () => {
    switch (storyLanguage) {
      case "hindi":
        return story.keyElementsHindi || story.keyElements;
      case "telugu":
        return story.keyElementsTelugu || story.keyElements;
      default:
        return story.keyElements;
    }
  };

  // ---------- AUDIO SOURCE ----------
  const audioSrc =
    storyLanguage === "hindi"
      ? story.audioHindi
      : storyLanguage === "telugu"
      ? story.audioTelugu
      : story.audioEnglish;

  return (
    <div className="min-h-screen max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
      >
        <Link to="/" className="hover:text-primary">
          {t.nav.home}
        </Link>
        <span>/</span>
        <Link to={`/${epic}`} className="hover:text-primary">
          {epic === "ramayana" ? t.nav.ramayana : t.nav.mahabharata}
        </Link>
        <span>/</span>
        <span className="text-foreground">{getTitle()}</span>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="text-xs uppercase tracking-widest text-primary">
          {t.story.chapter} {story.chapter}
        </span>

        <div className="flex items-center justify-between gap-4 mt-2 mb-4">
          <h1 className="font-display text-4xl">{getTitle()}</h1>

          {/* ✅ AUDIO BUTTON (ONLY HERE) */}
          {audioSrc && <StoryAudioButton src={audioSrc} />}
        </div>

        {/* Language Switch */}
        <div className="flex gap-2 mb-4">
          {(["english", "hindi", "telugu"] as Language[]).map(
            (lang) => (
              <Button
                key={lang}
                size="sm"
                variant={
                  storyLanguage === lang ? "default" : "outline"
                }
                onClick={() => setStoryLanguage(lang)}
                className={cn(
                  "capitalize",
                  storyLanguage === lang && "bg-primary"
                )}
              >
                {lang === "english"
                  ? "English"
                  : lang === "hindi"
                  ? "हिन्दी"
                  : "తెలుగు"}
              </Button>
            )
          )}
        </div>
      </motion.header>

      {/* Story */}
      <motion.article className="prose-lg">
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-primary" />
            <h2 className="font-display text-2xl">
              {t.story.theStory}
            </h2>
          </div>

          {getContent()
            .split("\n\n")
            .map((block, i) => (
              <p key={i} className="text-lg leading-relaxed">
                {block}
              </p>
            ))}
        </section>

        {/* Key Elements */}
        <section className="mb-12 p-6 rounded-xl border">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-primary" />
            <h2 className="font-display text-xl">
              {t.story.keyElements}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {getKeyElements().map((el, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary"
              >
                {el}
              </span>
            ))}
          </div>
        </section>

        {/* Moral */}
        <section className="mb-12 p-6 rounded-xl border">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="text-primary" />
            <h2 className="font-display text-xl">
              {t.story.theMoral}
            </h2>
          </div>
          <p className="italic text-lg">"{getMoral()}"</p>
        </section>
      </motion.article>

      {/* Navigation */}
      <motion.footer className="flex justify-between py-8 border-t">
        {prevStory ? (
          <Link to={`/${epic}/${prevStory.id}`}>
            <Button variant="ghost">
              <ArrowLeft className="mr-2" />
              {t.common.previous}
            </Button>
          </Link>
        ) : (
          <div />
        )}

        {nextStory ? (
          <Link to={`/${epic}/${nextStory.id}`}>
            <Button variant="epic">
              {t.common.next}
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        ) : (
          <Link to={`/${epic}`}>
            <Button variant="epic">{t.common.back}</Button>
          </Link>
        )}
      </motion.footer>
    </div>
  );
}
