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
                    <p className="mb-2"><strong>STAT12</strong> est édité par :</p>
                    <p className="mb-2">Deep Scouting, SAS au capital de 8 000 €</p>
                    <p className="mb-2">Siège social : 26 boulevard Longchamp, 13001 Marseille – France</p>
                    <p className="mb-2">SIRET : 912 335 296 00014 – RCS Marseille : 912 335 296</p>
                    <p className="mb-2">TVA intracommunautaire : FR65912335296</p>
                    <p className="mb-2">Représentée par Selim KEBAIER, Président</p>
                    <p className="mb-2">📧 contact@deepscouting.com</p>
                    <p>📞 04 13 42 16 09</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Hébergement</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-2">OVH SAS – 2 rue Kellermann, 59100 Roubaix – France</p>
                    <p className="mb-2">RCS Lille : 537 407 926</p>
                    <p>📞 1007</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Propriété intellectuelle</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-2">Les contenus du site (textes, images, vidéos, logos) sont la propriété exclusive de Deep Scouting ou utilisés avec autorisation.</p>
                    <p className="mb-2">Certaines images sont générées par IA.</p>
                    <p>Toute reproduction est interdite sans autorisation écrite.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Responsabilité</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p>L'utilisateur est seul responsable de l'usage des informations fournies sur le site.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p>Le site utilise des cookies pour le fonctionnement et les statistiques.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Loi applicable</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p>Droit français – Tribunaux compétents : Marseille.</p>
                  </div>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Site Editor</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-2"><strong>STAT12</strong> is published by:</p>
                    <p className="mb-2">Deep Scouting, SAS with capital of €8,000</p>
                    <p className="mb-2">Registered office: 26 boulevard Longchamp, 13001 Marseille – France</p>
                    <p className="mb-2">SIRET: 912 335 296 00014 – RCS Marseille: 912 335 296</p>
                    <p className="mb-2">VAT number: FR65912335296</p>
                    <p className="mb-2">Represented by Selim KEBAIER, President</p>
                    <p className="mb-2">📧 contact@deepscouting.com</p>
                    <p>📞 +33 4 13 42 16 09</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Hosting</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-2">OVH SAS – 2 rue Kellermann, 59100 Roubaix – France</p>
                    <p className="mb-2">RCS Lille: 537 407 926</p>
                    <p>📞 1007</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Intellectual Property</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-2">Site content (text, images, videos, logos) is the exclusive property of Deep Scouting or used with authorization.</p>
                    <p className="mb-2">Some images are AI-generated.</p>
                    <p>Any reproduction is prohibited without written authorization.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Liability</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p>The user is solely responsible for the use of information provided on the site.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p>The site uses cookies for operation and statistics.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Applicable Law</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p>French law – Competent courts: Marseille.</p>
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