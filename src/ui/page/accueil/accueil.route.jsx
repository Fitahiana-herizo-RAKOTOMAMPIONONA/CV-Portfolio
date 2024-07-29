import React, { useEffect } from "react";
import { Award, Code, Palette, Settings } from "lucide-react";
import HeroCard from "./components/hero-card.components";
import MarqueeBanner from "./components/marque-banner.components";
import NavigationCard from "./components/navigation-card.components";
import ContactCTA from "./components/contact-cta.components";
import StatisticsCard from "./components/statistics-card.components";
import CollaborationCTA from "./components/collaboration-cta";
import TitleSection from "../about/components/title-section.components";
import { useStaggeredAnimation } from "../../../hooks/useStagerredAnimation";



export default function Accueil() {
  useStaggeredAnimation(".card-animate");

  return (
    <div className="min-h-screen lg:p-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {/* Hero Card */}
          <HeroCard />

          {/* Marquee Banner */}
          {/* <MarqueeBanner /> */}
          <TitleSection
            TitleSection={"Software Engineer"}
            Soustitre={"Herizo Fitahiana RAKOTOMAMPIONONA"}
            description={
              "Developpeur Fullstack (Mobile - web)"
            }
          />

          {/* Navigation Cards */}
          <NavigationCard
            description="PLUS SUR MOI"
            title="Certifications"
            icon={Award}
            href="/credentials"
          />

          <NavigationCard
            description="SHOWCASE"
            title="Projets"
            icon={Code}
            image="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=200&h=200&fit=crop"
            href="/work"
          />

          <NavigationCard
            description="BLOG"
            title="gFonts"
            icon={Palette}
            image="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=200&fit=crop"
            href="/blog"
          />

          <NavigationCard
            description="SPÉCIALISATION"
            title="Services offerts"
            icon={Settings}
            image="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=200&h=200&fit=crop"
            href="/service"
          />

          <ContactCTA />

          <div className="md:col-span-3">
            <StatisticsCard />
          </div>

          <CollaborationCTA />
        </div>
      </div>
    </div>
  );
}
