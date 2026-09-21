export default function Navigation({ activeSection, onNavClick }) {
    const menuItems = [
        { id: 'aulas', label: 'Aulas' },
        { id: 'calendario', label: 'Calendário' },
        { id: 'contactos', label: 'Contactos' }
    ];

    return (
        <nav>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <a 
                            onClick={() => onNavClick(item.id)}
                            className={activeSection === item.id ? 'active' : ''}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
