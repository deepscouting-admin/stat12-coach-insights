import { useState } from 'react';
import { Mail, Calendar, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    
    setFormData({ email: '', message: '' });
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
            Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans votre découverte de STAT12.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Nous contacter</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="votre.email@exemple.com"
                      required
                      className="rounded-xl"
                    />
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
                      placeholder="Parlez-nous de votre club et de vos besoins..."
                      rows={5}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full rounded-xl" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    {t('contactSend')}
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
                    <span>Planifier une démonstration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Découvrez STAT12 en action avec une démonstration personnalisée de 30 minutes.
                  </p>
                  <Button 
                    className="w-full rounded-xl" 
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('https://calendly.com/stat12', '_blank')}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {t('contactCalendly')}
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      Réponse garantie sous 24h
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Notre équipe s'engage à vous répondre rapidement pour vous accompagner dans votre projet.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;