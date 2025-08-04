import { useState } from 'react';
import { Mail, Calendar, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { DemoDialog } from '@/components/DemoDialog';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    club: '',
    role: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Préparer les données pour FormSubmit
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('club', formData.club);
      submitData.append('role', formData.role);
      submitData.append('message', formData.message);
      
      // Champs cachés pour FormSubmit
      submitData.append('_subject', `Nouveau contact depuis DeepScouting - ${formData.firstName} ${formData.lastName}`);
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');
      
      // Remplacez 'contact@deepscouting.com' par votre vraie adresse email
      const response = await fetch('https://formsubmit.co/contact@deepscouting.com', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        toast({
          title: t('contactToastTitle'),
          description: t('contactToastDescription'),
        });
        
        // Réinitialiser le formulaire
        setFormData({ 
          firstName: '', 
          lastName: '', 
          email: '', 
          club: '', 
          role: '', 
          message: '' 
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{t('contactFormTitle')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        {t('contactFirstName')}
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder={t('contactFirstNamePlaceholder')}
                        required
                        className="rounded-xl"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        {t('contactLastName')}
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={t('contactLastNamePlaceholder')}
                        required
                        className="rounded-xl"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('contactEmail')}
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contactEmailPlaceholder')}
                      required
                      className="rounded-xl"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="club" className="block text-sm font-medium mb-2">
                        {t('contactClub')}
                      </label>
                      <Input
                        type="text"
                        id="club"
                        name="club"
                        value={formData.club}
                        onChange={handleChange}
                        placeholder={t('contactClubPlaceholder')}
                        required
                        className="rounded-xl"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium mb-2">
                        {t('contactRole')}
                      </label>
                      <Input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder={t('contactRolePlaceholder')}
                        required
                        className="rounded-xl"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('contactMessage')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contactMessagePlaceholder')}
                      rows={4}
                      required
                      className="rounded-xl"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full rounded-xl" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Envoi en cours...' : t('contactSend')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Demo Booking */}
            <div className="space-y-6">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{t('contactDemoTitle')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {t('contactDemoDescription')}
                  </p>
                  <Button 
                    className="w-full rounded-xl" 
                    size="lg"
                    variant="outline"
                    onClick={() => setIsDemoDialogOpen(true)}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {t('contactCalendly')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <DemoDialog 
        isOpen={isDemoDialogOpen} 
        onClose={() => setIsDemoDialogOpen(false)} 
      />
    </section>
  );
};

export default ContactSection;