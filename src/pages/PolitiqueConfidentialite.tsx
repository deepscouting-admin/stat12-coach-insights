import { useLanguage } from '@/contexts/LanguageContext';
import LegalNavigation from '@/components/LegalNavigation';
import FooterSection from '@/components/sections/FooterSection';

const PolitiqueConfidentialite = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <LegalNavigation />
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
                    <p className="mb-4">Conformément au Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016, relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données (RGPD), nous vous informons de l'identité du responsable du traitement de vos données personnelles :</p>
                    
                    <p className="mb-2"><strong>Deep Scouting</strong> – SAS au capital de 8 000 euros</p>
                    <p className="mb-2">Siège social : 26 boulevard Longchamp, 13001 Marseille, France</p>
                    <p className="mb-2">SIRET : 912 335 296 00014</p>
                    <p className="mb-2">Représentée par Monsieur Selim KEBAIER, Président</p>
                    <p>📧 Contact DPO : contact@deepscouting.com</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Données collectées</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Dans le cadre de l'utilisation de nos services, nous sommes amenés à collecter et traiter les catégories de données personnelles suivantes :</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Données d'identification et de contact</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Nom et prénom</li>
                      <li>Adresse électronique</li>
                      <li>Numéro de téléphone</li>
                      <li>Nom du club ou organisation</li>
                      <li>Fonction ou rôle</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Données techniques</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages visitées et durée des visites</li>
                      <li>Date et heure de connexion</li>
                      <li>Données de géolocalisation approximative (pays, ville)</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Données d'utilisation</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Historique des actions sur la plateforme</li>
                      <li>Préférences et paramètres de compte</li>
                      <li>Réponses aux formulaires et enquêtes</li>
                      <li>Communications avec notre support client</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Finalités du traitement</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Vos données personnelles sont traitées pour les finalités suivantes :</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Fourniture des services</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Création et gestion de votre compte utilisateur</li>
                      <li>Accès aux fonctionnalités de la plateforme STAT12</li>
                      <li>Génération et envoi des rapports d'analyse</li>
                      <li>Support technique et assistance utilisateur</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Communication et marketing</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Information sur nos nouveaux services et fonctionnalités</li>
                      <li>Envoi de newsletters et communications promotionnelles</li>
                      <li>Organisation de démonstrations et webinaires</li>
                      <li>Enquêtes de satisfaction et retours d'expérience</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Amélioration des services</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Analyse d'audience et mesure de performance</li>
                      <li>Optimisation de l'expérience utilisateur</li>
                      <li>Développement de nouvelles fonctionnalités</li>
                      <li>Détection et prévention de la fraude</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Obligations légales</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Respect des obligations comptables et fiscales</li>
                      <li>Réponse aux demandes des autorités compétentes</li>
                      <li>Conservation des données pour preuve en cas de litige</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Base légale du traitement</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Conformément à l'article 6 du RGPD, le traitement de vos données personnelles est fondé sur les bases légales suivantes :</p>
                    
                    <ul className="list-disc list-inside space-y-3">
                      <li><strong>Consentement (article 6.1.a)</strong> : pour l'envoi de communications marketing et newsletters</li>
                      <li><strong>Exécution d'un contrat (article 6.1.b)</strong> : pour la fourniture des services STAT12 et la gestion de votre compte</li>
                      <li><strong>Intérêt légitime (article 6.1.f)</strong> : pour l'amélioration de nos services, la sécurité de la plateforme et la prospection commerciale auprès de nos clients existants</li>
                      <li><strong>Obligation légale (article 6.1.c)</strong> : pour le respect de nos obligations comptables, fiscales et réglementaires</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Destinataires des données</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Vos données personnelles peuvent être communiquées aux catégories de destinataires suivants :</p>
                    
                    <ul className="list-disc list-inside space-y-2">
                      <li>Personnel autorisé de Deep Scouting dans le cadre de leurs fonctions</li>
                      <li>Prestataires techniques (hébergement, maintenance, support)</li>
                      <li>Prestataires de services marketing et communication (sous contrat de sous-traitance)</li>
                      <li>Organismes publics, uniquement en cas d'obligation légale</li>
                      <li>Conseils juridiques et experts-comptables dans le cadre de nos obligations</li>
                    </ul>
                    
                    <p className="mt-4">Tous nos prestataires sont sélectionnés avec soin et s'engagent contractuellement à respecter la confidentialité et la sécurité de vos données.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Transferts hors Union européenne</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Vos données personnelles sont principalement traitées au sein de l'Union européenne. Toutefois, certains de nos prestataires techniques peuvent être situés en dehors de l'UE.</p>
                    
                    <p className="mb-4">Dans ce cas, nous nous assurons que :</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Le pays de destination fait l'objet d'une décision d'adéquation de la Commission européenne, ou</li>
                      <li>Des garanties appropriées sont mises en place (clauses contractuelles types, certifications), et</li>
                      <li>Vos droits demeurent effectivement protégés</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Durée de conservation</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Vos données personnelles sont conservées pour les durées suivantes :</p>
                    
                    <ul className="list-disc list-inside space-y-3">
                      <li><strong>Clients actifs</strong> : pendant toute la durée de la relation contractuelle + 3 ans à compter de la fin du contrat (à des fins de preuve)</li>
                      <li><strong>Prospects et contacts commerciaux</strong> : 3 ans maximum à compter du dernier contact</li>
                      <li><strong>Données de connexion et logs</strong> : 12 mois maximum</li>
                      <li><strong>Cookies et traceurs</strong> : 13 mois maximum</li>
                      <li><strong>Documents comptables</strong> : 10 ans (obligation légale)</li>
                      <li><strong>Données d'opposition marketing</strong> : 3 ans (pour respecter votre opposition)</li>
                    </ul>
                    
                    <p className="mt-4">À l'issue de ces durées, vos données sont soit supprimées, soit anonymisées de manière irréversible.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Sécurité des données</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour assurer la sécurité de vos données personnelles :</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Mesures techniques</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Chiffrement des données sensibles</li>
                      <li>Protocoles de communication sécurisés (HTTPS/TLS)</li>
                      <li>Contrôles d'accès et authentification forte</li>
                      <li>Sauvegardes régulières et sécurisées</li>
                      <li>Surveillance et détection d'intrusion</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Mesures organisationnelles</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Formation du personnel à la protection des données</li>
                      <li>Politique de confidentialité interne</li>
                      <li>Procédures de gestion des incidents</li>
                      <li>Audits de sécurité réguliers</li>
                      <li>Contrats de sous-traitance sécurisés</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Vos droits (RGPD)</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Droit d'accès (article 15)</h3>
                        <p>Vous pouvez demander l'accès à vos données personnelles et obtenir des informations sur leur traitement.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Droit de rectification (article 16)</h3>
                        <p>Vous pouvez demander la correction de données inexactes ou incomplètes.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Droit à l'effacement (article 17)</h3>
                        <p>Vous pouvez demander la suppression de vos données dans certains cas.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Droit d'opposition (article 21)</h3>
                        <p>Vous pouvez vous opposer au traitement de vos données, notamment à des fins de prospection commerciale.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Droit à la limitation (article 18)</h3>
                        <p>Vous pouvez demander la limitation du traitement dans certaines circonstances.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Droit à la portabilité (article 20)</h3>
                        <p>Vous pouvez recevoir vos données dans un format structuré et les transmettre à un autre responsable de traitement.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Droit de retrait du consentement</h3>
                        <p>Lorsque le traitement est fondé sur votre consentement, vous pouvez le retirer à tout moment.</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <p className="mb-2"><strong>Pour exercer vos droits, contactez-nous :</strong></p>
                      <p className="mb-2">📧 Par email : contact@deepscouting.com</p>
                      <p className="mb-2">📮 Par courrier : Deep Scouting – 26 boulevard Longchamp, 13001 Marseille, France</p>
                      <p className="text-sm text-muted-foreground">Nous vous répondrons dans un délai d'un mois et pourrons vous demander de justifier votre identité.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Droit de réclamation</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Si vous estimez que le traitement de vos données personnelles porte atteinte à vos droits, vous pouvez introduire une réclamation auprès de l'autorité de contrôle compétente :</p>
                    
                    <p className="mb-2"><strong>CNIL (Commission Nationale de l'Informatique et des Libertés)</strong></p>
                    <p className="mb-2">Adresse : 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
                    <p className="mb-2">Téléphone : 01 53 73 22 22</p>
                    <p>Site web : www.cnil.fr</p>
                  </div>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Data Controller</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">In accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (GDPR), we inform you of the identity of the data controller:</p>
                    
                    <p className="mb-2"><strong>Deep Scouting</strong> – SAS with share capital of €8,000</p>
                    <p className="mb-2">Registered office: 26 boulevard Longchamp, 13001 Marseille, France</p>
                    <p className="mb-2">SIRET: 912 335 296 00014</p>
                    <p className="mb-2">Represented by Mr. Selim KEBAIER, President</p>
                    <p>📧 DPO Contact: contact@deepscouting.com</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Personal Data Collected</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">As part of using our services, we collect and process the following categories of personal data:</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Identification and Contact Data</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>First and last name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Club or organization name</li>
                      <li>Position or role</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Technical Data</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Pages visited and visit duration</li>
                      <li>Connection date and time</li>
                      <li>Approximate geolocation data (country, city)</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Usage Data</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Platform activity history</li>
                      <li>Account preferences and settings</li>
                      <li>Form and survey responses</li>
                      <li>Customer support communications</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Processing Purposes</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Your personal data is processed for the following purposes:</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Service Provision</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Creating and managing your user account</li>
                      <li>Access to STAT12 platform features</li>
                      <li>Generation and delivery of analysis reports</li>
                      <li>Technical support and user assistance</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Communication and Marketing</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Information about new services and features</li>
                      <li>Newsletter and promotional communications</li>
                      <li>Organization of demonstrations and webinars</li>
                      <li>Satisfaction surveys and feedback</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Service Improvement</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Audience analysis and performance measurement</li>
                      <li>User experience optimization</li>
                      <li>Development of new features</li>
                      <li>Fraud detection and prevention</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Legal Obligations</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Compliance with accounting and tax obligations</li>
                      <li>Response to competent authority requests</li>
                      <li>Data retention for evidence in case of disputes</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Legal Basis for Processing</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">In accordance with Article 6 of the GDPR, the processing of your personal data is based on the following legal bases:</p>
                    
                    <ul className="list-disc list-inside space-y-3">
                      <li><strong>Consent (article 6.1.a)</strong>: for sending marketing communications and newsletters</li>
                      <li><strong>Contract performance (article 6.1.b)</strong>: for providing STAT12 services and managing your account</li>
                      <li><strong>Legitimate interest (article 6.1.f)</strong>: for service improvement, platform security, and commercial prospecting to existing clients</li>
                      <li><strong>Legal obligation (article 6.1.c)</strong>: for compliance with accounting, tax, and regulatory obligations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Data Recipients</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Your personal data may be communicated to the following categories of recipients:</p>
                    
                    <ul className="list-disc list-inside space-y-2">
                      <li>Authorized Deep Scouting personnel in the course of their duties</li>
                      <li>Technical service providers (hosting, maintenance, support)</li>
                      <li>Marketing and communication service providers (under subcontract agreements)</li>
                      <li>Public bodies, only in case of legal obligation</li>
                      <li>Legal advisors and accountants in the context of our obligations</li>
                    </ul>
                    
                    <p className="mt-4">All our service providers are carefully selected and contractually commit to respecting the confidentiality and security of your data.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Transfers Outside the European Union</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Your personal data is mainly processed within the European Union. However, some of our technical service providers may be located outside the EU.</p>
                    
                    <p className="mb-4">In such cases, we ensure that:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>The destination country is subject to an adequacy decision by the European Commission, or</li>
                      <li>Appropriate safeguards are in place (standard contractual clauses, certifications), and</li>
                      <li>Your rights remain effectively protected</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Data Retention Periods</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">Your personal data is retained for the following periods:</p>
                    
                    <ul className="list-disc list-inside space-y-3">
                      <li><strong>Active customers</strong>: throughout the contractual relationship + 3 years from contract end (for evidence purposes)</li>
                      <li><strong>Prospects and commercial contacts</strong>: 3 years maximum from last contact</li>
                      <li><strong>Connection data and logs</strong>: 12 months maximum</li>
                      <li><strong>Cookies and tracers</strong>: 13 months maximum</li>
                      <li><strong>Accounting documents</strong>: 10 years (legal obligation)</li>
                      <li><strong>Marketing opt-out data</strong>: 3 years (to respect your opt-out)</li>
                    </ul>
                    
                    <p className="mt-4">At the end of these periods, your data is either deleted or irreversibly anonymized.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Data Security</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">We implement appropriate technical and organizational measures to ensure the security of your personal data:</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Technical Measures</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Encryption of sensitive data</li>
                      <li>Secure communication protocols (HTTPS/TLS)</li>
                      <li>Access controls and strong authentication</li>
                      <li>Regular and secure backups</li>
                      <li>Monitoring and intrusion detection</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3 text-primary">Organizational Measures</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Staff training on data protection</li>
                      <li>Internal confidentiality policy</li>
                      <li>Incident management procedures</li>
                      <li>Regular security audits</li>
                      <li>Secure subcontract agreements</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Your Rights (GDPR)</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">In accordance with the GDPR, you have the following rights regarding your personal data:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Right of access (article 15)</h3>
                        <p>You can request access to your personal data and obtain information about their processing.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Right to rectification (article 16)</h3>
                        <p>You can request correction of inaccurate or incomplete data.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Right to erasure (article 17)</h3>
                        <p>You can request deletion of your data in certain cases.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Right to object (article 21)</h3>
                        <p>You can object to data processing, particularly for commercial prospecting purposes.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Right to restriction (article 18)</h3>
                        <p>You can request processing limitation in certain circumstances.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Right to portability (article 20)</h3>
                        <p>You can receive your data in a structured format and transmit it to another data controller.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Right to withdraw consent</h3>
                        <p>When processing is based on your consent, you can withdraw it at any time.</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <p className="mb-2"><strong>To exercise your rights, contact us:</strong></p>
                      <p className="mb-2">📧 By email: contact@deepscouting.com</p>
                      <p className="mb-2">📮 By mail: Deep Scouting – 26 boulevard Longchamp, 13001 Marseille, France</p>
                      <p className="text-sm text-muted-foreground">We will respond within one month and may ask you to prove your identity.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Right to Lodge a Complaint</h2>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <p className="mb-4">If you believe that the processing of your personal data infringes your rights, you can lodge a complaint with the competent supervisory authority:</p>
                    
                    <p className="mb-2"><strong>CNIL (Commission Nationale de l'Informatique et des Libertés)</strong></p>
                    <p className="mb-2">Address: 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
                    <p className="mb-2">Phone: 01 53 73 22 22</p>
                    <p>Website: www.cnil.fr</p>
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