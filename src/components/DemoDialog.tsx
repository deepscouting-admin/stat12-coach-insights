import { useState } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface DemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoDialog = ({ isOpen, onClose }: DemoDialogProps) => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
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
      submitData.append('message', formData.message || 'Aucune information complémentaire');
      
      // Champs cachés pour FormSubmit - spécifiques à la demande de démo
      submitData.append('_subject', `🎯 DEMANDE DE DÉMO - ${formData.firstName} ${formData.lastName} (${formData.club})`);
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');
      
      // Vous pouvez utiliser la même adresse email ou une différente pour les demandes de démo
      const response = await fetch('https://formsubmit.co/contact@deepscouting.com', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        toast({
          title: t('demoSubmitted'),
          description: t('demoSubmittedDescription'),
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
        onClose();
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi de votre demande.",
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {t('demoTitle')}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">{t('firstName')}</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder={t('firstNamePlaceholder')}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="lastName">{t('lastName')}</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder={t('lastNamePlaceholder')}
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">{t('email')}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t('emailPlaceholder')}
              disabled={isSubmitting}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="club">{t('club')}</Label>
              <Input
                id="club"
                name="club"
                value={formData.club}
                onChange={handleChange}
                required
                placeholder={t('clubPlaceholder')}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="role">{t('role')}</Label>
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                placeholder={t('rolePlaceholder')}
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="message">{language === 'fr' ? 'Autres infos' : 'Additional info'}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={language === 'fr' ? 'Informations complémentaires (optionnel)' : 'Additional information (optional)'}
              rows={4}
              disabled={isSubmitting}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (language === 'fr' ? 'Envoi en cours...' : 'Sending...') : (language === 'fr' ? 'Réserver' : 'Book')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};