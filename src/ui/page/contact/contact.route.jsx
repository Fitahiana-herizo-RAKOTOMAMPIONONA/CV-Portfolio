import React, { useEffect } from "react";
import ContactForm from "./components/contact-form.components";
import ContactInfoCard from "./components/contact-info-card.components";
import SocialMediaCard from "./components/social-media-card.components";
import { useSlideAnimation } from "../../../hooks/useStagerredAnimation";


export default function Contact() {
  useSlideAnimation('.card-animate');

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 card-animate">
          <div className="inline-flex items-center gap-2 text-blue-400 mb-3 md:mb-4">
            <div className="w-6 md:w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
            <span className="text-xs md:text-sm font-medium uppercase tracking-wider">Contact</span>
            <div className="w-6 md:w-8 h-px bg-gradient-to-l from-blue-500 to-transparent" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Parlons de votre projet
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Vous avez une idée ? Un projet ? N'hésitez pas à me contacter pour en discuter.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <ContactInfoCard />
          </div>
          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />

          </div>
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <SocialMediaCard/>
          </div>

        </div>
      </div>
    </div>
  );
}