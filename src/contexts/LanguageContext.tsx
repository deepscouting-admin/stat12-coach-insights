import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en';

const translations = {
  fr: {
    // Navigation
    about: 'À propos',
    features: 'Solutions',
    pricing: 'Tarifs',
    contact: 'Contact',
    faq: 'FAQ',
    demo: 'Réserve ta démo',
    
    // Hero Section
    heroTitle: 'La Data au service\nde vos performances',
    heroSubtitle: 'Amateurs comme pros.',
    heroDescription: 'Grâce à notre IA révolutionnaire, nous transformons vos vidéos de match en rapports d\'analyse avancée : rapports collectifs, rapports individuels, analyse vidéo simplifiée, statistiques physiques...désormais accessibles à tous.',
    heroButton: 'Réserve ta démo',
    
    // About Section
    aboutTitle: 'Des analyses avancées accessibles à tous, sans contraintes',
    aboutSubtitle: 'Stat12 s\'adresse à toutes les équipes et entraîneurs (des clubs amateurs aux structures professionnelles) qui souhaitent exploiter la puissance de la data et de l\'IA pour affiner leurs analyses. Aucune compétence technique ni matériel spécifique ne sont nécessaires : Stat12 simplifie l\'analyse avancée et la met à la portée de tous',
    about1: 'Accessible à tous les clubs',
    about1Desc: 'Que vous soyez amateur ou organisation professionnelle, Stat12 démocratise la data et l\'analyse vidéo : aucune compétence technique requise, juste la vidéo de vos matchs.',
    about2: 'Conçu par des coachs pour des coachs',
    about2Desc: 'Développé en collaboration avec des coachs et formateurs renommés, Stat12 répond aux besoins réels du terrain et s\'adapte à vos besoins spécifiques',
    about3: 'Aucun matériel ou capteur requis',
    about3Desc: 'Notre intelligence artificielle analyse automatiquement chaque action de vos vidéos et génère des rapports détaillés : stats physiques, analyses tactiques, suivi individuel…',
    about4: 'Plateforme intuitive et accessible',
    about4Desc: 'La prise en main de Stat12 est ultra-rapide : interface claire, assistance disponible. Invitez facilement vos collaborateurs et partagez vos analyses en quelques clics',

    // Features Section
    featuresTitle: 'Des analyses data au service de vos décisions',
    featuresSubtitle: 'Passez au niveau supérieur grâce à des analyses précises, rapides et intuitives, conçues pour booster vos performances collectives et individuelles. Que ce soit pour affiner vos analyses post-match, suivre l\'évolution des performances de vos ou analyser vos adversaires, nos outils s\'adaptent à vos besoins pour vous faire gagner du temps et de l\'efficacité',
    feature1: 'Rapports collectifs',
    feature1Desc: 'Analysez en détail chaque phase du jeu : offensives, défensives, transitions et coups de pied arrêtés. Identifiez les schémas préférentiels de votre équipe, les dynamiques collectives et identifiez précisément les axes d\'amélioration.',
    feature2: 'Rapports individuels', 
    feature2Desc: 'Accédez à un suivi complet des performances de chaque joueur, alliant statistiques techniques (Passes, dribbles, duels...) et physiques (Km parcouru, course à haute intensité...). Suivez également leur évolution tout au long de la saison.',
    feature3: 'Analyse de l\'adversaire',
    feature3Desc: 'Anticipez vos prochains matchs grâce à une analyse approfondie des forces et faiblesses de vos futurs adversaires. Décriptez leur jeu en amont et adaptez vos plans de jeu pour prendre une longueur d\'avance.',
    feature4: 'Analyse vidéo simplifiée',
    feature4Desc: 'Gagnez du temps sur vos analyses vidéo: Notre IA pour annote automatiquement le match pour vous, ce qui vous permet de retrouver rapidement les actions clés et les séquences stratégiques en quelques clics, sans effort manuel.',
    
    // Pricing Section
    pricingTitle: 'Des formules simples, pensées pour tous les clubs',
    pricingBasic: 'Basic',
    pricingBronze: 'Bronze',
    pricingSilver: 'Silver',
    pricingGold: 'Gold',
    pricingFree: 'Gratuit*',
    pricingPartner: '(en partenariat avec la ligue)',
    pricingOtherwise: 'Sinon 159€/mois',
    
    basicFeature1: '2 utilisateurs inclus',
    basicFeature2: 'Rapports collectifs de base',
    basicFeature3: 'Support email',
    
    bronzeFeature1: '4 utilisateurs inclus', 
    bronzeFeature2: 'Rapports collectifs avancés',
    bronzeFeature3: 'Statistiques individuelles',
    bronzeFeature4: 'Support prioritaire',
    
    silverFeature1: '8 utilisateurs inclus',
    silverFeature2: 'Toutes les fonctionnalités Bronze',
    silverFeature3: 'Outil d\'analyse vidéo',
    silverFeature4: 'Analyse de l\'adversaire',
    
    goldFeature1: 'Utilisateurs illimités',
    goldFeature2: 'Toutes les fonctionnalités Silver',
    goldFeature3: 'Statistiques physiques équipe',
    goldFeature4: 'Statistiques physiques individuelles',
    goldFeature5: 'Support dédié',
    
    subscribe: 'Souscrire',
    
    // FAQ Section
    faqTitle: 'FAQ – Vos questions fréquentes',
    faq1Question: 'Comment obtenir un rapport de match ?',
    faq1Answer: 'Déposer simplement la vidéo de votre match sur notre plateforme : nos algorithmes l\'analysent automatiquement et délivrent les rapports en quelques heures.',
    faq2Question: 'Quels formats de vidéo acceptez-vous ?',
    faq2Answer: 'Vous pouvez déposer directement le lien de la vidéo de votre fournisseur de caméras ou la télécharger et la déposer sur notre plateforme. Nous supportons tous les formats vidéo courants (.mp4, .mov, etc.)',
    faq3Question: 'Combien d\'utilisateurs peuvent accéder aux données ?',
    faq3Answer: 'Selon la formule choisie, chaque club peut inviter plusieurs membres (Cela varie de 2 à un nombre d\'utilisateurs illimités en fonction de l\'offre).',
    faq4Question: 'Proposez-vous une formation à l\'utilisation ?',
    faq4Answer: 'Oui, vous aurez accès à un tutoriel explicatif lors de la création de votre compte et nos équipes restent disponibles pour répondre à vos besoins dans les meilleurs délais',
    faq5Question: 'Puis-je résilier mon abonnement à tout moment ?',
    faq5Answer: 'Oui, les abonnements sont sans engagement : vous pouvez résilier à tout moment.',
    
    // Footer
    footerAbout: 'À propos',
    footerLegal: 'Mentions légales',
    footerPrivacy: 'Politique de confidentialité',
    footerTerms: 'Conditions générales',
    footerContact: 'Contact',
    footerRights: '© 2024 STAT12. Tous droits réservés.',
    
    // Contact Section
    contactTitle: 'Besoin d\'infos ? Une démo ?',
    contactDescription: 'Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans votre découverte de STAT12.',
    contactFormTitle: 'Nous contacter',
    contactDemoTitle: 'Planifier une démonstration',
    contactDemoDescription: 'Découvrez STAT12 en action avec une démonstration personnalisée de 30 minutes.',
    contactToastTitle: 'Message envoyé !',
    contactToastDescription: 'Nous vous recontacterons dans les plus brefs délais.',
    contactFirstName: 'Prénom',
    contactLastName: 'Nom',
    contactEmail: 'Email',
    contactClub: 'Club (ou société)',
    contactRole: 'Rôle',
    contactMessage: 'Message',
    contactSend: 'Envoyer',
    contactCalendly: 'Planifier une démo',
    contactFirstNamePlaceholder: 'Votre prénom',
    contactLastNamePlaceholder: 'Votre nom',
    contactEmailPlaceholder: 'votre.email@exemple.com',
    contactClubPlaceholder: 'Nom de votre club',
    contactRolePlaceholder: 'Votre rôle',
    contactMessagePlaceholder: 'Parlez-nous de votre club et de vos besoins...',
    
    // Footer
    footerDescription: 'La solution d\'analyse de performance football qui démocratise la data pour tous les niveaux de jeu.',
    footerSolutions: 'Solutions',
    footerPricing: 'Tarifs',
    footerFAQ: 'FAQ',
    footerLegalTitle: 'Légal',
    
    // Demo Dialog
    demoButton: 'Réserve ta démo',
    demoTitle: 'Réserver une démonstration',
    demoSubmitted: 'Demande envoyée !',
    demoSubmittedDescription: 'Nos équipes reviennent vers vous rapidement pour vous proposer un créneau.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    club: 'Club (ou société)',
    role: 'Rôle',
    message: 'Message',
    firstNamePlaceholder: 'Votre prénom',
    lastNamePlaceholder: 'Votre nom',
    emailPlaceholder: 'votre.email@exemple.com',
    clubPlaceholder: 'Nom de votre club',
    rolePlaceholder: 'Votre rôle',
    messagePlaceholder: 'Décrivez vos besoins et objectifs...',
    submitDemo: 'Réserve ta démo'
  },
  en: {
    // Navigation
    about: 'About',
    features: 'Solutions',
    pricing: 'Pricing',
    contact: 'Contact',
    faq: 'FAQ',
    demo: 'Book a demo',
    
    // Hero Section
    heroTitle: 'Data-driven performance\nanalysis for all',
    heroSubtitle: 'From grassroots to pro clubs.',
    heroDescription: 'Thanks to our cutting-edge AI technology, we transform your game video into in-depth performance reports: advanced team stats, individual player metrics, simplified video analysis, physical metrics, and more.',
    heroButton: 'Book your demo',
    
    // About Section
    aboutTitle: 'Pro-level analysis for all, no barriers',
    aboutSubtitle: 'Stat12 empowers coaches and squads at every level, who want to harness the power of data and AI to refine their game analysis. Whether you manage a grassroots side or a performance center, we bring elite analysis within reach: No analysts, GPS trackers or tech skills required.\nAll you need is your game video',
    about1: 'For all clubs: amateur to elite',
    about1Desc: 'Whether you\'re managing a local side or a professional organization, Stat12 democratizes football data and video analysis. No tech expertise needed: You just need to upload your game videos and access your intuitive reports',
    about2: 'Designed by coaches, for coaches',
    about2Desc: 'We worked closely with top-level coaches and educators to build a tool that fits the day-to-day of football staff: focused, intuitive, and actionable.\nStat12 adapts to your workflow, not the other way around.',
    about3: 'No hardware or trackers needed',
    about3Desc: 'Our AI instantly breaks down every key moment and delivers clear, structured reports: tactical phases, player stat reports, physical stats, simplified video analysis: Everything you need at one place',
    about4: 'Intuitive and easy-to-use platform',
    about4Desc: 'Stat12 is quick to onboard: Intuitive interface is, on-hand support, and seamless collaboration. Invite your staff and share key insights in just a few clicks.',

    // Features Section
    featuresTitle: 'Analytics that fuel smarter decisions',
    featuresSubtitle: 'Move beyond gut feeling and base your decisions on clear, objective insights.\nStat12 helps you refine post-match reviews, track player development, scout opponents, and focus your training with precision.',
    feature1: 'Team reports',
    feature1Desc: 'Understand your side\'s behaviour across all phases of play: build-up, pressing, transitions, set pieces.\nVisualize tendencies, spot recurring patterns, and uncover areas for collective improvement.',
    feature2: 'Player Reports', 
    feature2Desc: 'Track every player\'s performance over time with both technical and physical stats.\nPasses, duels, dribbles, distance covered, high-intensity runs... Stat12 allows you to monitor your players progress throughout the season',
    feature3: 'Opponent analysis',
    feature3Desc: 'Get ahead of your next game with opponent analysis reports. Identify their strengths, weaknesses, and habits to build game plans with confidence',
    feature4: 'Automatic Video Analysis',
    feature4Desc: 'No more tagging through hours of footage: our AI auto-tags your key moments, so you can instantly locate what matters (highlights, specific actions, or player focused clips) in just a few clicks.',
    
    // Pricing Section
    pricingTitle: 'Simple plans, tailored for all levels',
    pricingBasic: 'Basic',
    pricingBronze: 'Bronze',
    pricingSilver: 'Silver',
    pricingGold: 'Gold',
    pricingFree: 'Free*',
    pricingPartner: '(with league partnership)',
    pricingOtherwise: 'Otherwise €159/month',
    
    basicFeature1: 'Up to 2 users',
    basicFeature2: 'Own team analytics',
    basicFeature3: 'Email support',
    
    bronzeFeature1: 'Up to 4 users', 
    bronzeFeature2: 'Advanced team analytics',
    bronzeFeature3: 'Individual player stats',
    bronzeFeature4: 'Priority support',
    
    silverFeature1: 'Up to 8 users',
    silverFeature2: 'Everything in Bronze',
    silverFeature3: 'Integrated video analysis',
    silverFeature4: 'Opponent analysis',
    
    goldFeature1: 'Unlimited users',
    goldFeature2: 'Everything in Silver',
    goldFeature3: 'Team physical stats',
    goldFeature4: 'Individual physical stats',
    goldFeature5: 'Dedicated support',
    
    subscribe: 'Subscribe',
    
    // FAQ Section
    faqTitle: 'FAQ',
    faq1Question: 'How do I get a match report?',
    faq1Answer: 'Simply upload your match video to our platform: our algorithms analyze it automatically and deliver reports within hours.',
    faq2Question: 'What video formats are supported?',
    faq2Answer: 'You can directly upload the video link from your camera provider or download and upload it to our platform. We support all common video formats (.mp4, .mov, etc.)',
    faq3Question: 'How many users can access the data?',
    faq3Answer: 'Depending on your chosen plan, each club can invite multiple members (ranging from 2 to unlimited users depending on the package).',
    faq4Question: 'Is training provided?',
    faq4Answer: 'Yes, you\'ll have access to an explanatory tutorial when creating your account, and our teams remain available to respond to your needs promptly',
    faq5Question: 'Can I cancel my subscription at any time?',
    faq5Answer: 'Yes, subscriptions are commitment-free: you can cancel at any time.',
    
    // Footer
    footerAbout: 'About',
    footerLegal: 'Legal notice',
    footerPrivacy: 'Privacy policy',
    footerTerms: 'Terms of service',
    footerContact: 'Contact',
    footerRights: 'STAT12\nPerformance analysis for football: bringing match data to every level of the game.',
    
    // Contact Section
    contactTitle: 'Need more info or a personal walkthrough?\nOur team is here to answer your questions and guide your Stat12 discovery.',
    contactDescription: 'Our team is here to answer all your questions and guide you through your Stat12 discovery.',
    contactFormTitle: 'Contact us',
    contactDemoTitle: 'Schedule a demonstration',
    contactDemoDescription: 'Discover STAT12 in action with a personalized 30-minute demonstration.',
    contactToastTitle: 'Message sent!',
    contactToastDescription: 'We will get back to you as soon as possible.',
    contactFirstName: 'First name',
    contactLastName: 'Last name',
    contactEmail: 'Email',
    contactClub: 'Club/Company',
    contactRole: 'Role',
    contactMessage: 'Message',
    contactSend: 'Send',
    contactCalendly: 'Book a demo',
    contactFirstNamePlaceholder: 'Your first name',
    contactLastNamePlaceholder: 'Your last name',
    contactEmailPlaceholder: 'your.email@example.com',
    contactClubPlaceholder: 'Your club name',
    contactRolePlaceholder: 'Your role',
    contactMessagePlaceholder: 'Tell us about your club and your needs...',
    
    // Footer
    footerDescription: 'STAT12\nPerformance analysis for football: bringing match data to every level of the game.',
    footerSolutions: 'Solutions',
    footerPricing: 'Pricing',
    footerFAQ: 'FAQ',
    footerLegalTitle: 'Legal',
    
    // Demo Dialog
    demoButton: 'Book a demo',
    demoTitle: 'Book a demonstration',
    demoSubmitted: 'Request sent!',
    demoSubmittedDescription: 'See Stat12 in action with a 30-minute personalized demo.',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    club: 'Club (or company)',
    role: 'Role',
    message: 'Message',
    firstNamePlaceholder: 'Your first name',
    lastNamePlaceholder: 'Your last name',
    emailPlaceholder: 'your.email@example.com',
    clubPlaceholder: 'Your club name',
    rolePlaceholder: 'Your role',
    messagePlaceholder: 'Describe your needs and objectives...',
    submitDemo: 'Book a demo'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.fr) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    const detectedLang: Language = browserLang.startsWith('en') ? 'en' : 'fr';
    setLanguage(detectedLang);
  }, []);

  const t = (key: keyof typeof translations.fr) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};