import React, { useEffect } from "react";

import { AwardIcon, Building2, GraduationCap } from "lucide-react";
import TitleSection from "../about/components/title-section.components";
import ProfileCard from "./components/profile-card.components";
import ExperienceCard from "./components/experience-card.components";
import SkillsSection from "./components/skills-section.conponents";
import { experienceData, formationData } from "../about/data/data";
import AboutCard from "../about/components/about-card";
import CertificationCard from "./components/certification-card.components";
import { certificationsData } from "./data/certification";
import { useSlideAnimation } from "../../../hooks/useStagerredAnimation";


export default function Credentials() {
  useSlideAnimation(".card-animate");

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 auto-rows-min">
          {/* Profile Picture */}
          <div className="lg:row-span-2 flex items-start row-span-2">
            <ProfileCard />
          </div>

          {/* Title Section */}
          <TitleSection
            TitleSection={"Credentials"}
            Soustitre={"Portfolio Personnel"}
            description={
              "Mes compétences, expériences et formations détaillées"
            }
          />

          {/* About Card */}
          <AboutCard />

          {/* Experience et Formation */}
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
              <CertificationCard
                title="certifications"
                data={certificationsData}
                icon={AwardIcon}
              />
            </div>
          </div>

          {/* Skills Section */}
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}
