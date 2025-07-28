import { useState, useEffect } from 'react';

export type Language = 'fr' | 'en';

const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    features: 'Solutions',
    pricing: 'Tarifs',
    why: 'Pourquoi STAT12 ?',
    contact: 'Contact',
    faq: 'FAQ',
    demo: 'Réserve ta démo',
    
    // Hero Section
    heroTitle: 'La Data au service de votre performance.',
    heroSubtitle: 'À tous les niveaux.',
    heroDescription: 'Grâce à notre IA révolutionnaire, nous transformons vos vidéos de match en rapports d\'analyse avancée : Rapports d\'analyse de performance collective, performances individuelles, Analyse vidéo simplifiée, statistiques physiques...',
    heroDescription2: 'Une approche innovante, pensée pour démocratiser l\'analyse de performance, du monde amateur jusqu\'aux structures professionnelles.',
    heroButton: 'Réserve ta démo',
    
    // Features Section
    featuresTitle: 'Des solutions innovantes pour révolutionner votre analyse',
    featuresSubtitle: 'Découvrez nos outils pensés pour maximiser les performances de vos équipes',
    feature1: 'Rapports collectifs',
    feature1Desc: 'Analyse complète des phases de jeu : offensives, défensives, transitions et situations spéciales. Comprendre le collectif pour mieux progresser.',
    feature2: 'Rapports individuels', 
    feature2Desc: 'Statistiques détaillées de chaque joueur : techniques, physiques et tactiques. Personnalisez le développement de vos joueurs.',
    feature3: 'Analyse de l\'adversaire',
    feature3Desc: 'Décryptez le jeu adverse grâce à nos analyses croisées. Préparez vos matchs avec une longueur d\'avance stratégique.',
    feature4: 'Analyse vidéo simplifiée',
    feature4Desc: 'Créez facilement des montages vidéo pour illustrer vos analyses. Communiquez efficacement avec vos joueurs.',
    
    // Pricing Section
    pricingTitle: 'Des formules simples, pensées pour tous les clubs',
    pricingStarter: 'Starter',
    pricingPro: 'Pro', 
    pricingPremium: 'Premium',
    pricingEnterprise: 'Enterprise',
    pricingFree: 'Gratuit',
    pricingPartner: '(si ligue partenaire)',
    pricingOtherwise: 'Sinon 159€/mois',
    
    starterDesc: 'Parfait pour débuter l\'analyse',
    proDesc: 'L\'essentiel pour clubs amateurs',
    premiumDesc: 'La solution complète',
    enterpriseDesc: 'Pour les structures avancées',
    
    starterFeature1: '2 utilisateurs inclus',
    starterFeature2: 'Rapports collectifs de base',
    starterFeature3: 'Support email',
    
    proFeature1: '4 utilisateurs inclus', 
    proFeature2: 'Rapports collectifs avancés',
    proFeature3: 'Statistiques individuelles',
    proFeature4: 'Support prioritaire',
    
    premiumFeature1: '8 utilisateurs inclus',
    premiumFeature2: 'Toutes les fonctionnalités Pro',
    premiumFeature3: 'Outil d\'analyse vidéo',
    premiumFeature4: 'Analyse comparative',
    premiumFeature5: 'Formation incluse',
    
    enterpriseFeature1: 'Utilisateurs illimités',
    enterpriseFeature2: 'Toutes les fonctionnalités Premium',
    enterpriseFeature3: 'Analyse des adversaires',
    enterpriseFeature4: 'Statistiques physiques avancées',
    enterpriseFeature5: 'Support dédié',
    enterpriseFeature6: 'API personnalisée',
    
    subscribe: 'Souscrire',
    
    // Why Section
    whyTitle: 'La data n\'est plus réservée aux clubs pros.',
    why1: 'Conçu pour les coachs amateurs & formateurs',
    why2: 'Aucun matériel requis (simple vidéo de match)',
    why3: 'Solution intuitive et accessible',
    why4: 'Pensé pour les besoins terrain',
    
    // FAQ Section
    faqTitle: 'Questions fréquemment posées',
    faq1Question: 'Comment fonctionne l\'analyse vidéo ?',
    faq1Answer: 'Envoyez-nous simplement votre vidéo de match, notre IA analyse automatiquement les actions et génère vos rapports en moins de 24h.',
    faq2Question: 'Quel format de vidéo acceptez-vous ?',
    faq2Answer: 'Nous acceptons tous les formats vidéo courants (MP4, AVI, MOV). La qualité HD est recommandée pour une analyse optimale.',
    faq3Question: 'Combien d\'utilisateurs peuvent accéder aux données ?',
    faq3Answer: 'Cela dépend de votre formule : 2 utilisateurs pour Starter, 4 pour Pro, 8 pour Premium, et illimité pour Enterprise.',
    faq4Question: 'Proposez-vous une formation à l\'utilisation ?',
    faq4Answer: 'Oui, une formation complète est incluse dans les formules Premium et Enterprise. Les autres formules bénéficient du support email.',
    faq5Question: 'Puis-je résilier mon abonnement à tout moment ?',
    faq5Answer: 'Absolument, vous pouvez résilier votre abonnement à tout moment sans frais supplémentaires.',
    
    // Footer
    footerAbout: 'À propos',
    footerLegal: 'Mentions légales',
    footerPrivacy: 'Politique de confidentialité',
    footerTerms: 'Conditions générales',
    footerContact: 'Contact',
    footerRights: '© 2024 STAT12. Tous droits réservés.',
    
    // Contact Section
    contactTitle: 'Besoin d\'infos ? Une démo ?',
    contactEmail: 'Email',
    contactMessage: 'Message',
    contactSend: 'Envoyer',
    contactCalendly: 'Planifier une démo',
    
    // Demo Dialog
    demoButton: 'Réserve ta démo',
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