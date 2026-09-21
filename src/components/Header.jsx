import { useState } from 'react';
import Logo from './Logo';

const menuItems = [
    { id: 'aulas', label: 'Aulas' },
    { id: 'calendario', label: 'Calendário' },
    { id: 'contactos', label: 'Contactos' }
];

export default function Header({ activeSection = 'home', selectedCategory = 'all', onNavClick }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleItemClick = (id, category = 'all') => {
        if (onNavClick) {
            onNavClick(id, category);
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="header-inner">
                {/* Left Brand: SVG + Title + Subtitle */}
                <div 
                    className="header-brand" 
                    onClick={() => handleItemClick('home')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleItemClick('home');
                        }
                    }}
                    title="Bicas - Início"
                >
                    <Logo className="logo-svg" />
                    <div className="brand-text">
                        <span className="brand-title">Bicas</span>
                        <span className="brand-subtitle">Associação Cultural</span>
                    </div>
                </div>

                {/* Center: Desktop Navigation */}
                <nav className="header-nav-desktop" aria-label="Navegação Principal">
                    <ul className="nav-list">
                        {menuItems.map(item => (
                            <li 
                                key={item.id} 
                                className={item.id === 'aulas' ? 'nav-item-dropdown' : ''}
                            >
                                <button 
                                    type="button"
                                    onClick={() => handleItemClick(item.id, 'all')}
                                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                    aria-haspopup={item.id === 'aulas' ? 'true' : undefined}
                                >
                                    <span>{item.label}</span>
                                    {item.id === 'aulas' && (
                                        <span className="nav-dropdown-chevron">▾</span>
                                    )}
                                </button>

                                {item.id === 'aulas' && (
                                    <div className="nav-submenu">
                                        <button
                                            type="button"
                                            className={`nav-submenu-item ${activeSection === 'aulas' && selectedCategory === 'Dança' ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleItemClick('aulas', 'Dança');
                                            }}
                                        >
                                            <span className="submenu-icon">🩰</span>
                                            <span>Dança</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`nav-submenu-item ${activeSection === 'aulas' && selectedCategory === 'Música' ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleItemClick('aulas', 'Música');
                                            }}
                                        >
                                            <span className="submenu-icon">🎵</span>
                                            <span>Música</span>
                                        </button>
                                        <div className="nav-submenu-divider"></div>
                                        <button
                                            type="button"
                                            className={`nav-submenu-item nav-submenu-all ${activeSection === 'aulas' && selectedCategory === 'all' ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleItemClick('aulas', 'all');
                                            }}
                                        >
                                            <span>Todas as Aulas</span>
                                        </button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right: Hamburger button for smartphones */}
                <div className="header-right">
                    <button 
                        type="button"
                        className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Menu móvel">
                <ul className="mobile-nav-list">
                    {menuItems.map(item => {
                        if (item.id === 'aulas') {
                            return (
                                <li key={item.id} className="mobile-nav-item-group">
                                    <button
                                        type="button"
                                        onClick={() => handleItemClick('aulas', 'all')}
                                        className={`mobile-nav-link ${activeSection === 'aulas' ? 'active' : ''}`}
                                    >
                                        <span>Aulas</span>
                                        {activeSection === 'aulas' && <span>•</span>}
                                    </button>
                                    <div className="mobile-submenu">
                                        <button
                                            type="button"
                                            onClick={() => handleItemClick('aulas', 'Dança')}
                                            className={`mobile-submenu-link ${activeSection === 'aulas' && selectedCategory === 'Dança' ? 'active' : ''}`}
                                        >
                                            <span>🩰 Dança</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleItemClick('aulas', 'Música')}
                                            className={`mobile-submenu-link ${activeSection === 'aulas' && selectedCategory === 'Música' ? 'active' : ''}`}
                                        >
                                            <span>🎵 Música</span>
                                        </button>
                                    </div>
                                </li>
                            );
                        }
                        return (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    onClick={() => handleItemClick(item.id)}
                                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                                >
                                    <span>{item.label}</span>
                                    {activeSection === item.id && <span>•</span>}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
