import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import subtleTechBackground from '@/assets/subtle-tech-background.jpg';
import '../assets/point-cloud-concepts.css';

const PointCloudDemo = () => {
  const [selectedConcept, setSelectedConcept] = useState(1);

  const concepts = [
    {
      id: 1,
      name: "Football Tech Matrix",
      description: "Enhanced visibility with data visualization aesthetic - bright, crisp points with football field accents",
      className: "floating-dots-concept1"
    },
    {
      id: 2, 
      name: "Dynamic Sports Analytics",
      description: "High contrast with movement patterns - athletic motion with intensity pulses",
      className: "floating-dots-concept2"
    },
    {
      id: 3,
      name: "Pro Stadium Analytics", 
      description: "Sophisticated with depth - professional grade with breathing effects and layered points",
      className: "floating-dots-concept3"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Point Cloud Effect Concepts</h1>
        <p className="text-lg text-muted-foreground text-center mb-8">
          Choose your preferred homepage background animation
        </p>
        
        {/* Concept Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {concepts.map((concept) => (
            <Button
              key={concept.id}
              variant={selectedConcept === concept.id ? "default" : "outline"}
              onClick={() => setSelectedConcept(concept.id)}
              className="px-6 py-3"
            >
              Concept {concept.id}
            </Button>
          ))}
        </div>

        {/* Current Concept Info */}
        <Card className="p-6 mb-8 text-center">
          <h3 className="text-xl font-semibold mb-2">
            {concepts.find(c => c.id === selectedConcept)?.name}
          </h3>
          <p className="text-muted-foreground">
            {concepts.find(c => c.id === selectedConcept)?.description}
          </p>
        </Card>
      </div>

      {/* Demo Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={subtleTechBackground}
            alt="Tech Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60"></div>
        </div>

        {/* Selected Point Cloud Effect */}
        <div className={`${concepts.find(c => c.id === selectedConcept)?.className}`}></div>

        {/* Demo Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            La Data au service<br />de vos performances
          </h1>
          <h2 className="text-3xl font-light mb-8 text-primary/90">
            Amateurs comme pros
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed font-light">
            Grâce à notre IA révolutionnaire, nous transformons vos vidéos de match en rapports d'analyse avancée
          </p>
          <Button 
            size="lg" 
            className="neon-button text-white px-8 py-6 text-lg font-semibold rounded-xl hover:bg-primary/20 hover:shadow-[0_0_40px_rgba(93,206,180,0.8)] transform transition-all duration-300 hover:scale-105"
          >
            Réserve ta démo
          </Button>
        </div>
      </section>

      {/* Instructions */}
      <div className="container mx-auto px-4 py-8">
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">How to Apply</h3>
          <p className="text-muted-foreground">
            Once you choose your preferred concept, I'll update the main homepage with the selected effect.
            Each concept offers a different balance of visibility, movement, and aesthetic appeal.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default PointCloudDemo;