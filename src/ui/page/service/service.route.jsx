import React, { useEffect } from "react";
import { Code, Award, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "./components/hero-section.components";
import AdditionalServicesBar from "./components/service-bar.components";
import ServiceCard from "./components/service-card.components";
import NavigationCard from "./components/navigation-card.components";
import { servicesData } from "./data/service.data";
import { useStaggeredAnimation } from "../../../hooks/useStagerredAnimation";

export default function Service() {
  useStaggeredAnimation(".animate-card");

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <HeroSection />

        {/* Additional Services */}
        <AdditionalServicesBar />

        {/* Main Services */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            icon={FileText}
            image="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=200&fit=crop"
            href="/blog"
          />

          <NavigationCard
            description="CONTACT"
            title="Contactez-moi"
            icon={MessageCircle}
            href="/contact"
          />
        </div>
      </div>
    </div>
  );
}
