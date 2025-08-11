import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/sections/FooterSection';
import { useState } from 'react';

const ConditionsGenerales = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
            {language === 'fr' ? 'Conditions générales d\'utilisation' : 'Terms & Conditions'}
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            {language === 'fr' ? (
              <>
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 1 - Objet et champ d'application</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») définissent les modalités et conditions d'utilisation des services proposés par la société Deep Scouting via la plateforme STAT12, accessible à l'adresse www.stat12.com.</p>
                    
                    <p className="mb-4">STAT12 est une plateforme de services d'analyse automatisée de matchs de football, incluant la génération de statistiques avancées, de rapports détaillés et de contenus vidéo personnalisés destinés aux clubs, entraîneurs, joueurs et professionnels du football.</p>
                    
                    <p className="mb-4">Ces CGU s'appliquent sans restriction ni réserve à tous les utilisateurs du site et des services STAT12, qu'ils disposent d'un compte gratuit (offre Basique) ou d'un abonnement payant (offre Premium).</p>
                    
                    <p>L'utilisation de nos services implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous devez vous abstenir d'utiliser nos services.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 2 - Accès aux services</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">L'accès aux services STAT12 est subordonné aux conditions suivantes :</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Conditions d'âge</h3>
                    <p className="mb-4">L'utilisation de STAT12 est réservée aux personnes physiques âgées de seize (16) ans révolus et plus, ou aux personnes morales agissant par l'intermédiaire d'une personne physique dûment habilitée.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Inscription et création de compte</h3>
                    <p className="mb-4">L'inscription sur STAT12 est gratuite et s'effectue en ligne via le formulaire dédié. Elle donne accès à l'offre Basique de nos services. L'utilisateur s'engage à fournir des informations exactes, à jour et complètes lors de son inscription.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Période d'essai Premium</h3>
                    <p className="mb-4">Tout nouvel utilisateur bénéficie automatiquement d'un accès Premium pendant une durée de quinze (15) jours calendaires à compter de la validation de son inscription, afin de découvrir l'ensemble des fonctionnalités avancées de la plateforme.</p>
                    
                    <p>À l'expiration de cette période d'essai, l'utilisateur repasse automatiquement en mode Basique, sauf souscription d'un abonnement Premium selon les modalités définies à l'article 4.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 3 - Modèle économique freemium</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">STAT12 fonctionne selon un modèle économique « freemium » proposant deux niveaux de service :</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Offre Basique (gratuite)</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Accès limité à certaines statistiques de base</li>
                      <li>Fonctionnalités d'analyse simplifiées</li>
                      <li>Nombre restreint de rapports mensuels</li>
                      <li>Support client par email uniquement</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Offre Premium (payante)</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Accès complet à toutes les statistiques et analyses avancées</li>
                      <li>Rapports détaillés et personnalisables illimités</li>
                      <li>Contenus vidéo haute définition et analyses tactiques</li>
                      <li>Fonctionnalités de comparaison et benchmarking</li>
                      <li>Export des données dans différents formats</li>
                      <li>Support client prioritaire et accompagnement personnalisé</li>
                      <li>Accès aux nouvelles fonctionnalités en avant-première</li>
                    </ul>
                    
                    <p>Le passage vers l'offre Premium s'effectue par souscription d'un abonnement payant selon les tarifs et modalités en vigueur, consultables sur notre site web.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 4 - Conditions tarifaires et modalités de paiement</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Les tarifs des abonnements Premium sont indiqués en euros, toutes taxes comprises, et sont consultables sur le site www.stat12.com. Ces tarifs peuvent être modifiés à tout moment, mais toute modification sera communiquée à l'utilisateur au moins trente (30) jours avant son entrée en vigueur.</p>
                    
                    <p className="mb-4">Les abonnements sont payables par avance, par carte bancaire ou tout autre moyen de paiement accepté sur la plateforme. Le paiement s'effectue de manière sécurisée via nos prestataires de paiement agréés.</p>
                    
                    <p className="mb-4">Les abonnements sont renouvelables automatiquement pour des périodes identiques, sauf résiliation dans les conditions prévues à l'article 7. L'utilisateur peut désactiver le renouvellement automatique à tout moment dans les paramètres de son compte.</p>
                    
                    <p>En cas de défaut de paiement, l'accès aux services Premium sera suspendu après un délai de grâce de sept (7) jours. L'utilisateur conservera néanmoins l'accès à l'offre Basique.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 5 - Obligations et responsabilités des utilisateurs</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">L'utilisateur s'engage à :</p>
                    
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Utiliser les services STAT12 conformément à leur destination et dans le respect des présentes CGU</li>
                      <li>Ne pas porter atteinte aux droits de propriété intellectuelle de Deep Scouting ou de tiers</li>
                      <li>Ne pas utiliser les services à des fins illégales, frauduleuses ou préjudiciables</li>
                      <li>Maintenir la confidentialité de ses identifiants de connexion</li>
                      <li>Signaler immédiatement toute utilisation non autorisée de son compte</li>
                      <li>Respecter les droits d'autrui et les bonnes mœurs</li>
                      <li>Fournir des informations exactes et tenir ses données à jour</li>
                    </ul>
                    
                    <p className="mb-4">Il est strictement interdit de :</p>
                    
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Reproduire, copier, vendre ou exploiter les contenus STAT12 à des fins commerciales sans autorisation écrite</li>
                      <li>Utiliser des dispositifs automatisés pour accéder aux services (robots, scripts, etc.)</li>
                      <li>Tenter d'accéder aux comptes d'autres utilisateurs ou aux systèmes informatiques de Deep Scouting</li>
                      <li>Transmettre des contenus illégaux, diffamatoires, obscènes ou contraires à l'ordre public</li>
                      <li>Perturber le fonctionnement normal des services ou compromettre leur sécurité</li>
                    </ul>
                    
                    <p>L'utilisateur demeure seul responsable de l'usage qu'il fait des informations et données fournies par STAT12, notamment dans le cadre de ses activités professionnelles ou décisions tactiques.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 6 - Responsabilité et garanties de Deep Scouting</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Deep Scouting s'efforce de fournir un service de qualité et met tout en œuvre pour assurer la continuité, la sécurité et la performance de la plateforme STAT12. Néanmoins, Deep Scouting ne peut garantir :</p>
                    
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>L'absence totale d'erreurs, de bugs, d'omissions ou d'interruptions de service</li>
                      <li>L'exactitude absolue des données d'analyse et statistiques générées</li>
                      <li>La disponibilité permanente des services (maintenance, mise à jour, panne technique)</li>
                      <li>La compatibilité avec tous les équipements et configurations informatiques</li>
                    </ul>
                    
                    <p className="mb-4">La responsabilité de Deep Scouting ne pourra être engagée en cas de :</p>
                    
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Dommages résultant d'un usage non conforme aux présentes CGU</li>
                      <li>Perte de données due à une défaillance du matériel de l'utilisateur</li>
                      <li>Préjudices indirects (perte de chiffre d'affaires, de clientèle, de chance, etc.)</li>
                      <li>Force majeure ou fait imputable à un tiers</li>
                      <li>Décisions prises par l'utilisateur sur la base des analyses STAT12</li>
                    </ul>
                    
                    <p className="mb-4">En tout état de cause, la responsabilité de Deep Scouting est limitée au montant des sommes effectivement payées par l'utilisateur au cours des douze (12) mois précédant la survenance du dommage.</p>
                    
                    <p>Deep Scouting se réserve le droit d'interrompre temporairement l'accès aux services pour des raisons de maintenance, de mise à jour ou d'amélioration. Les utilisateurs en seront informés dans la mesure du possible.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 7 - Durée et résiliation</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Les présentes CGU s'appliquent pour une durée indéterminée à compter de la première utilisation des services STAT12.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Résiliation par l'utilisateur</h3>
                    <p className="mb-4">L'utilisateur peut résilier son compte et cesser d'utiliser les services STAT12 à tout moment, sans préavis ni indemnité, en :</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Supprimant son compte via les paramètres de son espace personnel</li>
                      <li>Adressant une demande de résiliation à contact@deepscouting.com</li>
                    </ul>
                    
                    <p className="mb-4">Pour les abonnements Premium, la résiliation prend effet à la fin de la période d'abonnement en cours. Aucun remboursement ne sera effectué pour la période non consommée, sauf en cas d'inexécution grave de nos obligations.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Résiliation par Deep Scouting</h3>
                    <p className="mb-4">Deep Scouting peut suspendre ou résilier l'accès aux services, avec ou sans préavis, en cas de :</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Violation grave ou répétée des présentes CGU</li>
                      <li>Défaut de paiement persistant</li>
                      <li>Comportement nuisant au bon fonctionnement des services ou à l'image de STAT12</li>
                      <li>Cessation d'activité ou de commercialisation des services</li>
                    </ul>
                    
                    <p>En cas de résiliation, l'utilisateur perd définitivement l'accès à son compte et aux données associées, sauf obligations légales de conservation.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 8 - Propriété intellectuelle</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">L'ensemble des contenus générés par STAT12, incluant mais non limité aux rapports d'analyse, vidéos, graphiques, interfaces utilisateur, logos, algorithmes, bases de données, et éléments de design, sont protégés par les droits de propriété intellectuelle et demeurent la propriété exclusive de Deep Scouting ou de ses partenaires licenciés.</p>
                    
                    <p className="mb-4">L'utilisateur bénéficie d'un droit d'usage personnel, non exclusif, non transférable et révocable sur ces contenus, strictement limité à l'utilisation des services STAT12 dans le cadre de ses activités footballistiques légitimes.</p>
                    
                    <p className="mb-4">Toute reproduction, représentation, adaptation, traduction, ou exploitation commerciale des contenus STAT12, totale ou partielle, par quelque procédé que ce soit, sans l'autorisation écrite préalable de Deep Scouting, est strictement interdite et constitue une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle.</p>
                    
                    <p className="mb-4">L'utilisateur s'interdit notamment de :</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Revendre, distribuer ou céder les analyses et rapports STAT12 à des tiers</li>
                      <li>Utiliser les contenus STAT12 pour développer des services concurrents</li>
                      <li>Procéder à de l'ingénierie inverse des algorithmes et technologies propriétaires</li>
                      <li>Supprimer ou modifier les mentions de copyright et autres notices de propriété intellectuelle</li>
                    </ul>
                    
                    <p>Les marques « STAT12 », « Deep Scouting » et tous signes distinctifs associés sont des marques déposées ou en cours de dépôt. Toute utilisation de ces marques sans autorisation expresse est prohibée.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 9 - Protection des données personnelles</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">La collecte et le traitement des données personnelles des utilisateurs sont régis par notre Politique de confidentialité, accessible sur le site www.stat12.com et intégrée par référence aux présentes CGU.</p>
                    
                    <p className="mb-4">Cette politique détaille notamment :</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Les catégories de données collectées et les finalités du traitement</li>
                      <li>Les bases légales justifiant ces traitements</li>
                      <li>Les durées de conservation des données</li>
                      <li>Les droits des utilisateurs en matière de protection des données (accès, rectification, effacement, etc.)</li>
                      <li>Les mesures de sécurité mises en place</li>
                    </ul>
                    
                    <p className="mb-4">Deep Scouting s'engage à respecter la réglementation en vigueur en matière de protection des données personnelles, notamment le Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et la loi « Informatique et Libertés » modifiée.</p>
                    
                    <p>Pour toute question relative au traitement de vos données personnelles ou pour exercer vos droits, vous pouvez nous contacter à l'adresse : contact@deepscouting.com.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 10 - Modification des CGU</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Deep Scouting se réserve le droit de modifier les présentes CGU à tout moment, afin de les adapter aux évolutions technologiques, légales, réglementaires ou commerciales.</p>
                    
                    <p className="mb-4">Toute modification des CGU sera portée à la connaissance des utilisateurs par :</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Publication sur le site www.stat12.com</li>
                      <li>Notification par courrier électronique à l'adresse renseignée dans le compte utilisateur</li>
                      <li>Message d'information lors de la première connexion suivant la modification</li>
                    </ul>
                    
                    <p className="mb-4">Les CGU modifiées entrent en vigueur trente (30) jours après leur publication, sauf en cas de modifications imposées par la réglementation qui peuvent s'appliquer immédiatement.</p>
                    
                    <p className="mb-4">La poursuite de l'utilisation des services STAT12 après l'entrée en vigueur des nouvelles CGU vaut acceptation de celles-ci. Si l'utilisateur n'accepte pas les modifications, il doit cesser d'utiliser les services et peut résilier son compte dans les conditions prévues à l'article 7.</p>
                    
                    <p>Il est recommandé aux utilisateurs de consulter régulièrement les CGU pour prendre connaissance de leurs éventuelles modifications.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 11 - Droit applicable et juridiction compétente</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Les présentes CGU sont régies par le droit français, à l'exclusion de toute autre législation.</p>
                    
                    <p className="mb-4">En cas de litige relatif à l'interprétation, l'exécution ou la validité des présentes CGU, les parties s'efforceront de résoudre leur différend à l'amiable. À défaut d'accord amiable dans un délai de soixante (60) jours à compter de la notification du litige par lettre recommandée avec avis de réception, le litige sera porté devant les tribunaux compétents.</p>
                    
                    <p className="mb-4">Conformément aux articles L. 615-1 et suivants du Code de la consommation, les consommateurs ont la possibilité de recourir à un médiateur de la consommation en cas de litige. Les coordonnées du médiateur compétent sont disponibles sur demande.</p>
                    
                    <p className="mb-4">Attribution exclusive de juridiction est faite aux tribunaux du ressort de Marseille, y compris en cas de référé, pluralité de défendeurs ou d'appel en garantie, même en cas de paiement à terme ou de paiement échelonné.</p>
                    
                    <p>La langue de référence pour l'interprétation et l'exécution des présentes CGU est le français. En cas de traduction en d'autres langues, seule la version française fait foi.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 12 - Dispositions diverses</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Intégralité de l'accord</h3>
                    <p className="mb-4">Les présentes CGU constituent l'intégralité de l'accord entre Deep Scouting et l'utilisateur concernant l'utilisation des services STAT12. Elles remplacent tous accords antérieurs, écrits ou oraux, relatifs au même objet.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Nullité partielle</h3>
                    <p className="mb-4">Si une ou plusieurs dispositions des présentes CGU étaient déclarées nulles ou inapplicables en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, les autres dispositions garderont toute leur force et leur portée.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Renonciation</h3>
                    <p className="mb-4">Le fait pour Deep Scouting de ne pas se prévaloir temporairement d'une quelconque disposition des présentes CGU ne peut être interprété comme valant renonciation à s'en prévaloir ultérieurement.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Contact</h3>
                    <p className="mb-2">Pour toute question relative aux présentes CGU ou aux services STAT12, vous pouvez nous contacter :</p>
                    <p className="mb-2">📧 Par courrier électronique : contact@deepscouting.com</p>
                    <p className="mb-2">📞 Par téléphone : 04 13 42 16 09</p>
                    <p>📮 Par courrier postal : Deep Scouting - 26 boulevard Longchamp, 13001 Marseille, France</p>
                  </div>
                </section>

                <section>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      Conditions générales d'utilisation de STAT12 - Version en vigueur au 1er janvier 2024
                    </p>
                  </div>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 1 - Purpose and Scope</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">These Terms and Conditions of Use (hereinafter "Terms") define the terms and conditions for using the services offered by Deep Scouting through the STAT12 platform, accessible at www.stat12.com.</p>
                    
                    <p className="mb-4">STAT12 is a platform providing automated football match analysis services, including the generation of advanced statistics, detailed reports, and personalized video content for clubs, coaches, players, and football professionals.</p>
                    
                    <p className="mb-4">These Terms apply without restriction to all users of the STAT12 site and services, whether they have a free account (Basic plan) or a paid subscription (Premium plan).</p>
                    
                    <p>Using our services implies full acceptance of these Terms. If you do not accept these conditions, you must refrain from using our services.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 2 - Service Access</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Access to STAT12 services is subject to the following conditions:</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Age Requirements</h3>
                    <p className="mb-4">Use of STAT12 is restricted to individuals aged sixteen (16) years and above, or legal entities acting through a duly authorized natural person.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Registration and Account Creation</h3>
                    <p className="mb-4">Registration on STAT12 is free and is done online via the dedicated form. It provides access to the Basic tier of our services. Users commit to providing accurate, current, and complete information during registration.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Premium Trial Period</h3>
                    <p className="mb-4">All new users automatically receive Premium access for fifteen (15) calendar days from registration validation, to discover all advanced platform features.</p>
                    
                    <p>Upon expiration of this trial period, users automatically revert to Basic mode, unless they subscribe to a Premium plan according to the terms defined in Article 4.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 3 - Freemium Business Model</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">STAT12 operates on a "freemium" business model offering two service levels:</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Basic Plan (Free)</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Limited access to basic statistics</li>
                      <li>Simplified analysis features</li>
                      <li>Restricted number of monthly reports</li>
                      <li>Email-only customer support</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Premium Plan (Paid)</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Complete access to all statistics and advanced analytics</li>
                      <li>Unlimited detailed and customizable reports</li>
                      <li>High-definition video content and tactical analysis</li>
                      <li>Comparison and benchmarking features</li>
                      <li>Data export in various formats</li>
                      <li>Priority customer support and personalized assistance</li>
                      <li>Early access to new features</li>
                    </ul>
                    
                    <p>Upgrading to Premium is done through a paid subscription according to current rates and terms, available on our website.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 4 - Pricing and Payment Terms</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Premium subscription prices are indicated in euros, all taxes included, and are available on www.stat12.com. These prices may be modified at any time, but any modification will be communicated to users at least thirty (30) days before taking effect.</p>
                    
                    <p className="mb-4">Subscriptions are payable in advance by credit card or any other payment method accepted on the platform. Payment is made securely through our approved payment providers.</p>
                    
                    <p className="mb-4">Subscriptions are automatically renewable for identical periods, unless canceled under the conditions provided in Article 7. Users can disable automatic renewal at any time in their account settings.</p>
                    
                    <p>In case of payment default, access to Premium services will be suspended after a seven (7) day grace period. Users will retain access to the Basic plan.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 5 - User Obligations and Responsibilities</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Users commit to:</p>
                    
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Use STAT12 services in accordance with their intended purpose and in compliance with these Terms</li>
                      <li>Not infringe the intellectual property rights of Deep Scouting or third parties</li>
                      <li>Not use services for illegal, fraudulent, or harmful purposes</li>
                      <li>Maintain confidentiality of their login credentials</li>
                      <li>Immediately report any unauthorized use of their account</li>
                      <li>Respect the rights of others and public morality</li>
                      <li>Provide accurate information and keep their data current</li>
                    </ul>
                    
                    <p className="mb-4">It is strictly prohibited to:</p>
                    
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Reproduce, copy, sell or exploit STAT12 content for commercial purposes without written authorization</li>
                      <li>Use automated devices to access services (robots, scripts, etc.)</li>
                      <li>Attempt to access other users' accounts or Deep Scouting's computer systems</li>
                      <li>Transmit illegal, defamatory, obscene, or public order-contrary content</li>
                      <li>Disrupt normal service operation or compromise their security</li>
                    </ul>
                    
                    <p>Users remain solely responsible for their use of information and data provided by STAT12, particularly in their professional activities or tactical decisions.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 6 - Deep Scouting Liability and Warranties</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Deep Scouting strives to provide quality service and makes every effort to ensure continuity, security, and performance of the STAT12 platform. However, Deep Scouting cannot guarantee:</p>
                    
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Complete absence of errors, bugs, omissions, or service interruptions</li>
                      <li>Absolute accuracy of generated analysis data and statistics</li>
                      <li>Permanent service availability (maintenance, updates, technical failures)</li>
                      <li>Compatibility with all equipment and computer configurations</li>
                    </ul>
                    
                    <p className="mb-4">Deep Scouting's liability cannot be engaged in case of:</p>
                    
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Damage resulting from non-compliant use with these Terms</li>
                      <li>Data loss due to user equipment failure</li>
                      <li>Indirect damages (loss of revenue, clientele, opportunity, etc.)</li>
                      <li>Force majeure or third-party acts</li>
                      <li>Decisions made by users based on STAT12 analyses</li>
                    </ul>
                    
                    <p className="mb-4">In any case, Deep Scouting's liability is limited to the amount actually paid by the user during the twelve (12) months preceding the damage occurrence.</p>
                    
                    <p>Deep Scouting reserves the right to temporarily interrupt service access for maintenance, updates, or improvements. Users will be informed when possible.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 7 - Duration and Termination</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">These Terms apply for an indefinite duration from first use of STAT12 services.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">User Termination</h3>
                    <p className="mb-4">Users can terminate their account and stop using STAT12 services at any time, without notice or compensation, by:</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Deleting their account via personal space settings</li>
                      <li>Sending a termination request to contact@deepscouting.com</li>
                    </ul>
                    
                    <p className="mb-4">For Premium subscriptions, termination takes effect at the end of the current subscription period. No refund will be made for unused periods, except in case of serious breach of our obligations.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Deep Scouting Termination</h3>
                    <p className="mb-4">Deep Scouting may suspend or terminate service access, with or without notice, in case of:</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Serious or repeated violation of these Terms</li>
                      <li>Persistent payment default</li>
                      <li>Behavior harming proper service operation or STAT12's image</li>
                      <li>Business cessation or service commercialization discontinuation</li>
                    </ul>
                    
                    <p>Upon termination, users permanently lose access to their account and associated data, except for legal retention obligations.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 8 - Intellectual Property</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">All content generated by STAT12, including but not limited to analysis reports, videos, graphics, user interfaces, logos, algorithms, databases, and design elements, are protected by intellectual property rights and remain the exclusive property of Deep Scouting or its licensed partners.</p>
                    
                    <p className="mb-4">Users receive a personal, non-exclusive, non-transferable, and revocable right to use this content, strictly limited to using STAT12 services within their legitimate football activities.</p>
                    
                    <p className="mb-4">Any reproduction, representation, adaptation, translation, or commercial exploitation of STAT12 content, total or partial, by any means whatsoever, without prior written authorization from Deep Scouting, is strictly prohibited and constitutes counterfeiting sanctioned by articles L. 335-2 and following of the Intellectual Property Code.</p>
                    
                    <p className="mb-4">Users specifically refrain from:</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Reselling, distributing, or transferring STAT12 analyses and reports to third parties</li>
                      <li>Using STAT12 content to develop competing services</li>
                      <li>Reverse engineering proprietary algorithms and technologies</li>
                      <li>Removing or modifying copyright notices and other intellectual property notices</li>
                    </ul>
                    
                    <p>The trademarks "STAT12," "Deep Scouting," and all associated distinctive signs are registered or pending trademarks. Any use of these trademarks without express authorization is prohibited.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 9 - Personal Data Protection</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Collection and processing of users' personal data are governed by our Privacy Policy, accessible at www.stat12.com and incorporated by reference into these Terms.</p>
                    
                    <p className="mb-4">This policy details in particular:</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Categories of data collected and processing purposes</li>
                      <li>Legal bases justifying these processes</li>
                      <li>Data retention periods</li>
                      <li>Users' rights regarding data protection (access, rectification, erasure, etc.)</li>
                      <li>Security measures implemented</li>
                    </ul>
                    
                    <p className="mb-4">Deep Scouting commits to respecting current personal data protection regulations, particularly Regulation (EU) 2016/679 of April 27, 2016 (GDPR) and the amended "Data Protection Act."</p>
                    
                    <p>For any questions regarding the processing of your personal data or to exercise your rights, you can contact us at: contact@deepscouting.com.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 10 - Terms Modification</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Deep Scouting reserves the right to modify these Terms at any time to adapt them to technological, legal, regulatory, or commercial developments.</p>
                    
                    <p className="mb-4">Any Terms modification will be brought to users' attention by:</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Publication on www.stat12.com</li>
                      <li>Email notification to the address registered in the user account</li>
                      <li>Information message during first connection following modification</li>
                    </ul>
                    
                    <p className="mb-4">Modified Terms take effect thirty (30) days after publication, except for modifications required by regulations that may apply immediately.</p>
                    
                    <p className="mb-4">Continued use of STAT12 services after new Terms take effect constitutes acceptance thereof. If users do not accept modifications, they must stop using services and may terminate their account under conditions provided in Article 7.</p>
                    
                    <p>Users are recommended to regularly consult the Terms to learn about possible modifications.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 11 - Applicable Law and Jurisdiction</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">These Terms are governed by French law, excluding any other legislation.</p>
                    
                    <p className="mb-4">In case of dispute regarding interpretation, execution, or validity of these Terms, parties will strive to resolve their disagreement amicably. Failing amicable agreement within sixty (60) days from dispute notification by registered letter with acknowledgment of receipt, the dispute will be brought before competent courts.</p>
                    
                    <p className="mb-4">In accordance with articles L. 615-1 and following of the Consumer Code, consumers can use consumer mediation in case of dispute. Competent mediator coordinates are available upon request.</p>
                    
                    <p className="mb-4">Exclusive jurisdiction is attributed to courts within Marseille jurisdiction, including in case of interim proceedings, multiple defendants, or third-party warranty claims, even for term payment or installment payment.</p>
                    
                    <p>The reference language for interpretation and execution of these Terms is French. In case of translation to other languages, only the French version is authoritative.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Article 12 - Miscellaneous Provisions</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Entire Agreement</h3>
                    <p className="mb-4">These Terms constitute the entire agreement between Deep Scouting and users concerning STAT12 service use. They replace all previous agreements, written or oral, relating to the same subject.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Partial Nullity</h3>
                    <p className="mb-4">If one or more provisions of these Terms were declared null or inapplicable under law, regulation, or following a final decision by competent jurisdiction, other provisions retain their full force and scope.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Waiver</h3>
                    <p className="mb-4">Deep Scouting's temporary failure to invoke any provision of these Terms cannot be interpreted as waiving the right to invoke it subsequently.</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Contact</h3>
                    <p className="mb-2">For any questions regarding these Terms or STAT12 services, you can contact us:</p>
                    <p className="mb-2">📧 By email: contact@deepscouting.com</p>
                    <p className="mb-2">📞 By phone: +33 4 13 42 16 09</p>
                    <p>📮 By mail: Deep Scouting - 26 boulevard Longchamp, 13001 Marseille, France</p>
                  </div>
                </section>

                <section>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      STAT12 Terms & Conditions - Version effective January 1, 2024
                    </p>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default ConditionsGenerales;