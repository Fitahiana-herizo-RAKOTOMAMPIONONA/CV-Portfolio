import { CheckCircle, Globe, Mail, MessageCircle, Send, User } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }, 2000);
    };
  
    return (
      <div className="card-animate">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
          
          {/* Decorative Icon */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-10">
            <MessageCircle className="w-16 h-16 md:w-24 md:h-24 text-blue-500" />
          </div>
  
          <div className="relative bg-slate-900 rounded-3xl p-6 md:p-8">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                <span className="text-white">Travaillons</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ensemble.
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base">
                Partagez-moi votre projet et créons quelque chose d'extraordinaire ensemble
              </p>
            </div>
  
            {isSubmitted ? (
              <div className="text-center py-8 md:py-12">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Message envoyé !</h3>
                <p className="text-slate-400 text-sm md:text-base">Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <div className="space-y-4 md:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                      <User className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-200" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all duration-200 text-sm md:text-base"
                    />
                  </div>
  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-200" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="exemple@gmail.com"
                      className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all duration-200 text-sm md:text-base"
                    />
                  </div>
                </div>
  
                {/* Subject */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-200" />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sujet du message"
                    className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all duration-200 text-sm md:text-base"
                  />
                </div>
  
                {/* Message */}
                <div className="relative group">
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 pointer-events-none">
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-200" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre projet ou votre message..."
                    rows={4}
                    className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all duration-200 resize-none text-sm md:text-base"
                  />
                </div>
  
                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 md:p-1 group hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  <div className="bg-slate-900 rounded-2xl px-6 py-3 md:px-8 md:py-4 group-hover:bg-transparent transition-colors duration-300">
                    <div className="flex items-center justify-center gap-2 md:gap-3 text-white font-semibold text-sm md:text-base">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  