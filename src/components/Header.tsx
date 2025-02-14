import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-serif font-bold text-primary">
              Soulful
            </a>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Fonctionnalités
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Tarifs
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </a>
            <a
              href="/inscription"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              S'inscrire
            </a>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#features"
              className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="/inscription"
              className="block px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              S'inscrire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
