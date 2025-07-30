import { useState, useEffect } from 'react';

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
    heroTitle: 'La "Data" au service de toutes les performances',
    heroSubtitle: 'Amateurs comme pros.',
    heroDescription: 'Grâce à notre IA révolutionnaire, nous transformons vos vidéos de match en rapports d\'analyse avancée : Rapports d\'analyse de performance collective, performances individuelles, Analyse vidéo simplifiée, statistiques physiques...',
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
    pricingFree: 'Gratuit',
    pricingPartner: '(si ligue partenaire)',
    pricingOtherwise: 'Sinon 159€/mois',
    
    basicDesc: 'Parfait pour débuter l\'analyse',
    bronzeDesc: 'L\'essentiel pour clubs amateurs',
    silverDesc: 'La solution complète',
    goldDesc: 'Pour les structures avancées',
    
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
    silverFeature4: 'Analyse comparative',
    silverFeature5: 'Formation incluse',
    
    goldFeature1: 'Utilisateurs illimités',
    goldFeature2: 'Toutes les fonctionnalités Silver',
    goldFeature3: 'Analyse des adversaires',
    goldFeature4: 'Statistiques physiques avancées',
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
    contactFirstName: 'Prénom',
    contactLastName: 'Nom',
    contactEmail: 'Email',
    contactClub: 'Club (ou société)',
    contactRole: 'Rôle',
    contactMessage: 'Message',
    contactSend: 'Envoyer',
    contactCalendly: 'Planifier une démo',
    
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
    heroTitle: 'Data-driven performance at every level',
    heroSubtitle: 'From grassroots to elite.',
    heroDescription: 'Our revolutionary AI transforms your match footage into advanced analytical reports: team performance analysis, individual player metrics, simplified video analysis, physical statistics...',
    heroButton: 'Book a demo',
    
    // About Section
    aboutTitle: 'Advanced analytics accessible to all, without constraints',
    aboutSubtitle: 'Stat12 is designed for all teams and coaches (from amateur clubs to professional structures) who want to harness the power of data and AI to refine their analysis. No technical skills or specialized equipment required: Stat12 simplifies advanced analysis and makes it accessible to everyone',
    about1: 'Accessible to all clubs',
    about1Desc: 'Whether you\'re amateur or professional organization, Stat12 democratizes data and video analysis: no technical expertise required, just your match footage.',
    about2: 'Built by coaches for coaches',
    about2Desc: 'Developed in collaboration with renowned coaches and trainers, Stat12 addresses real field needs and adapts to your specific requirements',
    about3: 'No equipment or sensors required',
    about3Desc: 'Our artificial intelligence automatically analyzes every action in your videos and generates detailed reports: physical stats, tactical analysis, individual tracking...',
    about4: 'Intuitive and accessible platform',
    about4Desc: 'Getting started with Stat12 is ultra-fast: clear interface, available support. Easily invite your collaborators and share your analyses with just a few clicks',

    // Features Section
    featuresTitle: 'Data analytics at the service of your decisions',
    featuresSubtitle: 'Step up your game with precise, fast, and intuitive analyses designed to boost your collective and individual performance. Whether refining post-match analysis, tracking player development, or analyzing opponents, our tools adapt to your needs to save time and increase efficiency',
    feature1: 'Team reports',
    feature1Desc: 'Analyze in detail every phase of play: offensive, defensive, transitions, and set pieces. Identify your team\'s preferred patterns, collective dynamics, and pinpoint areas for improvement.',
    feature2: 'Individual reports', 
    feature2Desc: 'Access comprehensive tracking of each player\'s performance, combining technical statistics (passes, dribbles, duels...) and physical metrics (distance covered, high-intensity running...). Track their progress throughout the season.',
    feature3: 'Opponent analysis',
    feature3Desc: 'Anticipate your upcoming matches with in-depth analysis of your future opponents\' strengths and weaknesses. Decode their game in advance and adapt your game plans to gain a strategic advantage.',
    feature4: 'Simplified video analysis',
    feature4Desc: 'Save time on video analysis: Our AI automatically annotates matches for you, allowing you to quickly find key actions and strategic sequences with just a few clicks, without manual effort.',
    
    // Pricing Section
    pricingTitle: 'Simple plans designed for all clubs',
    pricingBasic: 'Basic',
    pricingBronze: 'Bronze',
    pricingSilver: 'Silver',
    pricingGold: 'Gold',
    pricingFree: 'Free',
    pricingPartner: '(if partner league)',
    pricingOtherwise: 'Otherwise €159/month',
    
    basicDesc: 'Perfect for getting started with analysis',
    bronzeDesc: 'Essential for amateur clubs',
    silverDesc: 'The complete solution',
    goldDesc: 'For advanced structures',
    
    basicFeature1: '2 users included',
    basicFeature2: 'Basic team reports',
    basicFeature3: 'Email support',
    
    bronzeFeature1: '4 users included', 
    bronzeFeature2: 'Advanced team reports',
    bronzeFeature3: 'Individual statistics',
    bronzeFeature4: 'Priority support',
    
    silverFeature1: '8 users included',
    silverFeature2: 'All Bronze features',
    silverFeature3: 'Video analysis tool',
    silverFeature4: 'Comparative analysis',
    silverFeature5: 'Training included',
    
    goldFeature1: 'Unlimited users',
    goldFeature2: 'All Silver features',
    goldFeature3: 'Opponent analysis',
    goldFeature4: 'Advanced physical statistics',
    goldFeature5: 'Dedicated support',
    
    subscribe: 'Subscribe',
    
    // FAQ Section
    faqTitle: 'FAQ – Frequently Asked Questions',
    faq1Question: 'How do I get a match report?',
    faq1Answer: 'Simply upload your match video to our platform: our algorithms analyze it automatically and deliver reports within hours.',
    faq2Question: 'What video formats do you accept?',
    faq2Answer: 'You can directly upload the video link from your camera provider or download and upload it to our platform. We support all common video formats (.mp4, .mov, etc.)',
    faq3Question: 'How many users can access the data?',
    faq3Answer: 'Depending on your chosen plan, each club can invite multiple members (ranging from 2 to unlimited users depending on the package).',
    faq4Question: 'Do you provide training on how to use the platform?',
    faq4Answer: 'Yes, you\'ll have access to an explanatory tutorial when creating your account, and our teams remain available to respond to your needs promptly',
    faq5Question: 'Can I cancel my subscription at any time?',
    faq5Answer: 'Yes, subscriptions are commitment-free: you can cancel at any time.',
    
    // Footer
    footerAbout: 'About',
    footerLegal: 'Legal notice',
    footerPrivacy: 'Privacy policy',
    footerTerms: 'Terms of service',
    footerContact: 'Contact',
    footerRights: '© 2024 STAT12. All rights reserved.',
    
    // Contact Section
    contactTitle: 'Need info? A demo?',
    contactFirstName: 'First name',
    contactLastName: 'Last name',
    contactEmail: 'Email',
    contactClub: 'Club (or company)',
    contactRole: 'Role',
    contactMessage: 'Message',
    contactSend: 'Send',
    contactCalendly: 'Schedule a demo',
    
    // Demo Dialog
    demoButton: 'Book a demo',
    demoTitle: 'Book a demonstration',
    demoSubmitted: 'Request sent!',
    demoSubmittedDescription: 'Our teams will get back to you quickly to offer you a time slot.',
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