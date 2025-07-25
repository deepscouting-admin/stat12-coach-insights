import { useState, useEffect } from 'react';

export type Language = 'fr' | 'en';

const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    why: 'Pourquoi STAT12 ?',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Vos matchs. Vos données. Vos décisions.',
    heroSubtitle: 'STAT12 transforme vos vidéos de matchs en statistiques exploitables en 24h.',
    heroButton: '🎯 Demander une démo',
    
    // Features Section
    featuresTitle: 'Tout ce qu\'un coach attend de la data. Enfin accessible.',
    feature1: 'Rapport collectif détaillé (phases offensives, défensives, CPA…)',
    feature2: 'Statistiques individuelles de chaque joueur (techniques & physiques)',
    feature3: 'Analyse des adversaires (via stats croisées)',
    feature4: 'Outil vidéo pour créer des montages facilement',
    
    // Pricing Section
    pricingTitle: 'Des formules simples, pensées pour tous les clubs',
    pricingBasic: 'Basique',
    pricingBronze: 'Bronze',
    pricingSilver: 'Silver',
    pricingGold: 'Gold',
    pricingFree: 'Gratuit',
    pricingPartner: '(si ligue partenaire)',
    pricingOtherwise: 'Sinon 159€/mois',
    pricingIncluded: 'Inclus',
    basicFeatures: '2 accès / Stats collectives de vos matchs',
    bronzeFeatures: 'Offre basique + 4 accès + Stats individuelles',
    silverFeatures: 'Bronze + 8 accès + Outil d\'analyse vidéo',
    goldFeatures: 'Silver + Accès adversaires + Stats physiques',
    
    // Why Section
    whyTitle: 'La data n\'est plus réservée aux clubs pros.',
    why1: 'Conçu pour les coachs amateurs & formateurs',
    why2: 'Aucun matériel requis (simple vidéo de match)',
    why3: 'Solution intuitive et accessible',
    why4: 'Pensé pour les besoins terrain',
    
    // Contact Section
    contactTitle: 'Besoin d\'infos ? Une démo ?',
    contactEmail: 'Email',
    contactMessage: 'Message',
    contactSend: 'Envoyer',
    contactCalendly: 'Planifier une démo',
    
    // Demo Dialog
    demoButton: 'Demander une démo',
    demoTitle: 'Réserver une démonstration',
    demoSubmitted: 'Demande envoyée !',
    demoSubmittedDescription: 'Nous vous recontacterons rapidement pour organiser votre démonstration.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    club: 'Club',
    message: 'Message',
    firstNamePlaceholder: 'Votre prénom',
    lastNamePlaceholder: 'Votre nom',
    emailPlaceholder: 'votre.email@exemple.com',
    clubPlaceholder: 'Nom de votre club',
    messagePlaceholder: 'Décrivez vos besoins et objectifs...',
    submitDemo: 'Demander la démo'
  },
  en: {
    // Navigation
    home: 'Home',
    features: 'Features',
    pricing: 'Pricing',
    why: 'Why STAT12?',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Your matches. Your data. Your decisions.',
    heroSubtitle: 'STAT12 transforms your match videos into actionable statistics in 24h.',
    heroButton: '🎯 Request a demo',
    
    // Features Section
    featuresTitle: 'Everything a coach expects from data. Finally accessible.',
    feature1: 'Detailed team report (offensive phases, defensive phases, CPA...)',
    feature2: 'Individual statistics for each player (technical & physical)',
    feature3: 'Opponent analysis (via cross-referenced stats)',
    feature4: 'Video tool to create highlights easily',
    
    // Pricing Section
    pricingTitle: 'Simple plans, designed for all clubs',
    pricingBasic: 'Basic',
    pricingBronze: 'Bronze',
    pricingSilver: 'Silver',
    pricingGold: 'Gold',
    pricingFree: 'Free',
    pricingPartner: '(if partner league)',
    pricingOtherwise: 'Otherwise €159/month',
    pricingIncluded: 'Included',
    basicFeatures: '2 access / Team stats of your matches',
    bronzeFeatures: 'Basic offer + 4 access + Individual stats',
    silverFeatures: 'Bronze + 8 access + Video analysis tool',
    goldFeatures: 'Silver + Opponent access + Physical stats',
    
    // Why Section
    whyTitle: 'Data is no longer reserved for pro clubs.',
    why1: 'Designed for amateur coaches & trainers',
    why2: 'No equipment required (simple match video)',
    why3: 'Intuitive and accessible solution',
    why4: 'Designed for field needs',
    
    // Contact Section
    contactTitle: 'Need info? A demo?',
    contactEmail: 'Email',
    contactMessage: 'Message',
    contactSend: 'Send',
    contactCalendly: 'Schedule a demo',
    
    // Demo Dialog
    demoButton: 'Request a demo',
    demoTitle: 'Book a demonstration',
    demoSubmitted: 'Request sent!',
    demoSubmittedDescription: 'We will contact you quickly to organize your demonstration.',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    club: 'Club',
    message: 'Message',
    firstNamePlaceholder: 'Your first name',
    lastNamePlaceholder: 'Your last name',
    emailPlaceholder: 'your.email@example.com',
    clubPlaceholder: 'Your club name',
    messagePlaceholder: 'Describe your needs and objectives...',
    submitDemo: 'Request demo'
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    const detectedLang: Language = browserLang.startsWith('en') ? 'en' : 'fr';
    setLanguage(detectedLang);
  }, []);

  const t = (key: keyof typeof translations.fr) => {
    return translations[language][key] || key;
  };

  return { language, setLanguage, t };
};