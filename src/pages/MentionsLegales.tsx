import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/sections/FooterSection';
import { useState } from 'react';

const MentionsLegales = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
            {language === 'fr' ? 'Mentions légales' : 'Legal Notice'}
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            {language === 'fr' ? (
              <>
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Éditeur du site</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">En application de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site www.stat12.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Propriétaire et éditeur</h3>
                    <p className="mb-2"><strong>STAT12</strong> est édité par :</p>
                    <p className="mb-2">Deep Scouting, SAS au capital de 8 000 euros</p>
                    <p className="mb-2">Siège social : 26 boulevard Longchamp, 13001 Marseille – France</p>
                    <p className="mb-2">SIRET : 912 335 296 00014 – RCS Marseille : 912 335 296</p>
                    <p className="mb-2">Code APE : 6202A (Conseil en systèmes et logiciels informatiques)</p>
                    <p className="mb-2">TVA intracommunautaire : FR65912335296</p>
                    <p className="mb-2">Représentée par Monsieur Selim KEBAIER, Président</p>
                    <p className="mb-2">📧 Courrier électronique : contact@deepscouting.com</p>
                    <p className="mb-2">📞 Téléphone : 04 13 42 16 09</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary mt-6">Directeur de la publication</h3>
                    <p>Le directeur de la publication est Monsieur Selim KEBAIER, en sa qualité de Président de la société Deep Scouting.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Hébergement</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Le site est hébergé par :</p>
                    <p className="mb-2"><strong>OVH SAS</strong></p>
                    <p className="mb-2">Siège social : 2 rue Kellermann, 59100 Roubaix – France</p>
                    <p className="mb-2">RCS Lille Métropole : 424 761 419 00045</p>
                    <p className="mb-2">Code APE : 2620Z</p>
                    <p className="mb-2">N° TVA : FR 22 424 761 419</p>
                    <p>📞 Téléphone : 1007 (depuis la France)</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Propriété intellectuelle</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                    
                    <p className="mb-4">Les marques, logos, signes et tous autres contenus du site font l'objet d'un droit de propriété intellectuelle et sont protégés par le Code de la propriété intellectuelle. L'utilisateur s'engage à ne pas porter atteinte aux droits de propriété intellectuelle et reconnaît que la reproduction totale ou partielle des marques, logos, signes et contenus de ce site est interdite.</p>
                    
                    <p className="mb-4">Le nom STAT12, ainsi que tous les éléments composant le site (notamment les textes, images, vidéos, logos, icônes, sons, logiciels, base de données, graphismes, etc.) sont la propriété exclusive de Deep Scouting ou utilisés avec l'autorisation expresse de leurs propriétaires respectifs.</p>
                    
                    <p className="mb-4">Certaines images et visuels présents sur le site sont générés par intelligence artificielle et demeurent soumis aux droits de propriété intellectuelle de Deep Scouting.</p>
                    
                    <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Deep Scouting.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Responsabilité</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.</p>
                    
                    <p className="mb-4">Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par courrier électronique à l'adresse contact@deepscouting.com en décrivant le problème de la façon la plus précise possible.</p>
                    
                    <p className="mb-4">Deep Scouting se réserve le droit de corriger, à tout moment et sans préavis, le contenu de son site.</p>
                    
                    <p className="mb-4">Deep Scouting ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.</p>
                    
                    <p>L'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour. Il demeure seul responsable de l'usage qu'il fait des informations et des données fournies sur le site.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies et données de connexion</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Le site www.stat12.com utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site.</p>
                    
                    <p className="mb-4">Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple. Vous pouvez vous opposer à l'enregistrement de cookies en configurant votre navigateur selon les modalités détaillées sur le site de la CNIL.</p>
                    
                    <p className="mb-4">Sont notamment utilisés :</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Des cookies techniques nécessaires au bon fonctionnement du site</li>
                      <li>Des cookies de mesure d'audience anonymisés pour améliorer nos services</li>
                      <li>Des cookies de préférences pour mémoriser vos choix (langue, etc.)</li>
                    </ul>
                    
                    <p>La durée de conservation de ces cookies n'excède pas 13 mois, conformément à la réglementation en vigueur.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Loi applicable et juridiction compétente</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Tout litige en relation avec l'utilisation du site www.stat12.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Marseille, y compris en cas de pluralité de défendeurs ou d'appel en garantie.</p>
                    
                    <p className="mb-4">La langue de référence pour le règlement de contentieux éventuels est le français.</p>
                    
                    <p>Les présentes mentions légales peuvent être modifiées à tout moment selon l'évolution de la réglementation ou du site. Il est donc conseillé de les consulter régulièrement.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Contact</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-2">Pour toute question relative aux présentes mentions légales ou au fonctionnement du site, vous pouvez nous contacter :</p>
                    <p className="mb-2">📧 Par courrier électronique : contact@deepscouting.com</p>
                    <p className="mb-2">📞 Par téléphone : 04 13 42 16 09</p>
                    <p>📮 Par courrier postal : Deep Scouting - 26 boulevard Longchamp, 13001 Marseille, France</p>
                  </div>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Site Editor</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">In accordance with Article 6 of French Law No. 2004-575 of June 21, 2004 on confidence in the digital economy, users of the www.stat12.com website are hereby informed of the identity of the various parties involved in its creation and monitoring:</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Owner and Publisher</h3>
                    <p className="mb-2"><strong>STAT12</strong> is published by:</p>
                    <p className="mb-2">Deep Scouting, SAS with share capital of €8,000</p>
                    <p className="mb-2">Registered office: 26 boulevard Longchamp, 13001 Marseille – France</p>
                    <p className="mb-2">SIRET: 912 335 296 00014 – RCS Marseille: 912 335 296</p>
                    <p className="mb-2">APE Code: 6202A (Computer systems and software consulting)</p>
                    <p className="mb-2">EU VAT number: FR65912335296</p>
                    <p className="mb-2">Represented by Mr. Selim KEBAIER, President</p>
                    <p className="mb-2">📧 Email: contact@deepscouting.com</p>
                    <p className="mb-2">📞 Phone: +33 4 13 42 16 09</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary mt-6">Publication Director</h3>
                    <p>The publication director is Mr. Selim KEBAIER, in his capacity as President of Deep Scouting.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Web Hosting</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">The site is hosted by:</p>
                    <p className="mb-2"><strong>OVH SAS</strong></p>
                    <p className="mb-2">Registered office: 2 rue Kellermann, 59100 Roubaix – France</p>
                    <p className="mb-2">RCS Lille Métropole: 424 761 419 00045</p>
                    <p className="mb-2">APE Code: 2620Z</p>
                    <p className="mb-2">VAT number: FR 22 424 761 419</p>
                    <p>📞 Phone: 1007 (from France)</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Intellectual Property</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">This entire site falls under French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.</p>
                    
                    <p className="mb-4">The trademarks, logos, signs and all other content of the site are subject to intellectual property rights and are protected by the Intellectual Property Code. The user undertakes not to infringe intellectual property rights and acknowledges that total or partial reproduction of trademarks, logos, signs and content of this site is prohibited.</p>
                    
                    <p className="mb-4">The name STAT12, as well as all elements composing the site (notably texts, images, videos, logos, icons, sounds, software, databases, graphics, etc.) are the exclusive property of Deep Scouting or used with the express authorization of their respective owners.</p>
                    
                    <p className="mb-4">Some images and visuals present on the site are generated by artificial intelligence and remain subject to the intellectual property rights of Deep Scouting.</p>
                    
                    <p>Any reproduction, representation, modification, publication, adaptation of all or part of the site elements, whatever the means or process used, is prohibited, except with prior written authorization from Deep Scouting.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Liability</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">The information contained on this site is as accurate as possible and the site is updated at different periods of the year, but may nevertheless contain inaccuracies or omissions.</p>
                    
                    <p className="mb-4">If you notice a gap, error or what appears to be a malfunction, please report it by email to contact@deepscouting.com, describing the problem as precisely as possible.</p>
                    
                    <p className="mb-4">Deep Scouting reserves the right to correct the content of its site at any time and without notice.</p>
                    
                    <p className="mb-4">Deep Scouting cannot be held responsible for direct and indirect damage caused to user equipment when accessing the site, resulting either from the use of equipment that does not meet the specified requirements, or from the appearance of a bug or incompatibility.</p>
                    
                    <p>The site user undertakes to access the site using recent equipment, containing no viruses and with an updated latest generation browser. They remain solely responsible for the use they make of the information and data provided on the site.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies and Connection Data</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">The www.stat12.com site uses cookies to improve user experience and compile visitor statistics. A cookie is a small file that does not allow user identification but records information related to computer navigation on a site.</p>
                    
                    <p className="mb-4">The data thus obtained allows obtaining frequency measurements, for example. You can oppose the recording of cookies by configuring your browser according to the procedures detailed on the CNIL website.</p>
                    
                    <p className="mb-4">The following are notably used:</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Technical cookies necessary for proper site functioning</li>
                      <li>Anonymous audience measurement cookies to improve our services</li>
                      <li>Preference cookies to remember your choices (language, etc.)</li>
                    </ul>
                    
                    <p>The retention period for these cookies does not exceed 13 months, in accordance with current regulations.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Applicable Law and Jurisdiction</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Any dispute in connection with the use of the www.stat12.com site is subject to French law. Exclusive jurisdiction is attributed to the competent courts of Marseille, including in case of multiple defendants or third-party warranty claims.</p>
                    
                    <p className="mb-4">The reference language for the settlement of potential disputes is French.</p>
                    
                    <p>These legal notices may be modified at any time according to changes in regulations or the site. It is therefore advisable to consult them regularly.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Contact</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-2">For any questions regarding these legal notices or site operation, you can contact us:</p>
                    <p className="mb-2">📧 By email: contact@deepscouting.com</p>
                    <p className="mb-2">📞 By phone: +33 4 13 42 16 09</p>
                    <p>📮 By mail: Deep Scouting - 26 boulevard Longchamp, 13001 Marseille, France</p>
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

export default MentionsLegales;