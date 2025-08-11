import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/sections/FooterSection';
import { useState } from 'react';

const PolitiqueConfidentialite = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
            {language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            {language === 'fr' ? (
              <>
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Responsable du traitement</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-2">Deep Scouting – SAS au capital de 8 000 €</p>
                    <p>📧 contact@deepscouting.com</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Données collectées</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <ul className="space-y-2">
                      <li>• Identité et coordonnées (nom, e-mail, téléphone)</li>
                      <li>• Données de navigation</li>
                      <li>• Réponses aux formulaires</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Finalités</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <ul className="space-y-2">
                      <li>• Fourniture des services</li>
                      <li>• Communication marketing</li>
                      <li>• Analyse d'audience</li>
                      <li>• Gestion des relations clients</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Base légale</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p>Consentement, exécution d'un contrat, intérêt légitime.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Durée de conservation</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <ul className="space-y-2">
                      <li>• Clients : durée du contrat + 3 ans</li>
                      <li>• Prospects : 3 ans max</li>
                      <li>• Cookies : 13 mois</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Vos droits (RGPD)</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Accès, rectification, suppression, opposition, limitation, portabilité, retrait du consentement.</p>
                    <p className="mb-2">📧 contact@deepscouting.com</p>
                    <p>📮 Deep Scouting – 26 boulevard Longchamp, 13001 Marseille, France</p>
                  </div>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Data Controller</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-2">Deep Scouting – SAS with capital of €8,000</p>
                    <p>📧 contact@deepscouting.com</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Data Collected</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <ul className="space-y-2">
                      <li>• Identity and contact details (name, email, phone)</li>
                      <li>• Navigation data</li>
                      <li>• Form responses</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Purposes</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <ul className="space-y-2">
                      <li>• Service provision</li>
                      <li>• Marketing communication</li>
                      <li>• Audience analysis</li>
                      <li>• Customer relationship management</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Legal Basis</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p>Consent, contract execution, legitimate interest.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Retention Period</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <ul className="space-y-2">
                      <li>• Customers: contract duration + 3 years</li>
                      <li>• Prospects: 3 years maximum</li>
                      <li>• Cookies: 13 months</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Your Rights (GDPR)</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Access, rectification, deletion, opposition, limitation, portability, withdrawal of consent.</p>
                    <p className="mb-2">📧 contact@deepscouting.com</p>
                    <p>📮 Deep Scouting – 26 boulevard Longchamp, 13001 Marseille, France</p>
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

export default PolitiqueConfidentialite;