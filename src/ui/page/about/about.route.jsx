import React, { useEffect } from "react";
import {
  Building2,
  GraduationCap,
  Award,
  Code,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";
import QuickAccessCard from "./components/quick-access-card.components";
import CTACard from "./components/cta-cards.components";
import ProfileCard from "./components/profile-card.components";
import { experienceData, formationData } from "./data/data";
import AboutCard from "./components/about-card";
import TitleSection from "./components/title-section.components";
import ExperienceCard from "./components/experience-card.components";
import CollaborationCTA from "../accueil/components/collaboration-cta";
import { useSlideAnimation } from "../../../hooks/useStagerredAnimation";


export default function About() {
  useSlideAnimation(".card-animate");

  return (
    <div className="min-h-screenp-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 auto-rows-min">
          {/* Profile Picture */}
          <div className="lg:row-span-2 flex items-start">
            <ProfileCard />
          </div>

          {/* Title Section */}
          <TitleSection TitleSection={"Présentation"} Soustitre={"Portfolio Personnel"} description={"Découvrez mon parcours et mes expériences"}/>

          {/* About Card */}
          <AboutCard />

          {/* Experience and Formation */}
          <div className="lg:col-span-3">
            <div className="grid gap-6 lg:grid-cols-1">
              <ExperienceCard
                title="expérience"
                data={experienceData}
                icon={Building2}
              />
              <ExperienceCard
                title="formation"
                data={formationData}
                icon={GraduationCap}
              />
            </div>
          </div>

          {/* CTA Card */}
          <CTACard />
          <CollaborationCTA />

          {/* Quick Access Cards */}
          <QuickAccessCard
            description="PLUS SUR MOI"
            title="Certifications"
            icon={Award}
            href="/credentials"
          />

          <QuickAccessCard
            description="BLOG"
            title="gFonts"
            icon={Palette}
            href="/blog"
          />

          <QuickAccessCard
            description="SHOWCASE"
            title="Projets"
            icon={Code}
            href="/work"
          />
        </div>
      </div>
    </div>
  );
}
