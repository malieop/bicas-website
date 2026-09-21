import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Aulas from './components/Aulas';
import Horarios from './components/Horarios';
import Contactos from './components/Contactos';
import Footer from './components/Footer';

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [targetAnchor, setTargetAnchor] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleNavClick = (section, category = 'all') => {
        setTargetAnchor(null);
        setSelectedCategory(category);
        setActiveSection(section);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavigateToClass = (anchor) => {
        setTargetAnchor(anchor);
        setSelectedCategory('all');
        setActiveSection('aulas');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderSection = () => {
        switch(activeSection) {
            case 'home':
                return <Home onNavigateToClass={handleNavigateToClass} />;
            case 'aulas':
                return (
                    <Aulas 
                        targetAnchor={targetAnchor} 
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                );
            case 'calendario':
            case 'horarios':
                return <Horarios />;
            case 'contactos':
                return <Contactos />;
            default:
                return <Home onNavigateToClass={handleNavigateToClass} />;
        }
    };

    return (
        <div className="site-wrapper">
            <Header 
                activeSection={activeSection} 
                selectedCategory={selectedCategory}
                onNavClick={handleNavClick} 
            />
            <main className={activeSection === 'home' ? 'main-home' : 'main-content'}>
                {renderSection()}
            </main>
            <Footer />
        </div>
    );
}
