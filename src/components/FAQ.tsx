import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Comment fonctionne Soulful Connections ?",
    answer: "Soulful Connections est une plateforme de rencontre premium dédiée à la communauté musulmane. Nous utilisons un algorithme sophistiqué pour vous mettre en relation avec des personnes partageant vos valeurs et vos aspirations."
  },
  {
    question: "Comment puis-je m'inscrire ?",
    answer: "L'inscription est simple et rapide. Cliquez sur le bouton 'S'inscrire', remplissez votre profil avec des informations authentiques, et commencez votre parcours vers une rencontre significative."
  },
  {
    question: "Est-ce que mes informations sont sécurisées ?",
    answer: "Absolument. La sécurité et la confidentialité de nos membres sont notre priorité. Nous utilisons un cryptage de pointe et ne partageons jamais vos informations personnelles."
  },
  {
    question: "Puis-je utiliser l'application gratuitement ?",
    answer: "Nous proposons une version gratuite avec des fonctionnalités de base. Pour une expérience optimale et des fonctionnalités premium, nous recommandons notre abonnement Premium."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Questions fréquentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/20">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
