import ClassCard from './ClassCard';

export default function Home({ onNavigateToClass }) {
    const classes = [
        {
            title: 'Dança Contemporânea',
            category: 'Dança',
            anchor: 'danca-contemporanea',
            image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80'
        },
        {
            title: 'Hip-Hop e Urban',
            category: 'Dança',
            anchor: 'hip-hop-urban',
            image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&auto=format&fit=crop&q=80'
        },
        {
            title: 'Ballet Clássico',
            category: 'Dança',
            anchor: 'ballet-classico',
            image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&auto=format&fit=crop&q=80'
        },
        {
            title: 'Aulas de Guitarra',
            category: 'Música',
            anchor: 'guitarra',
            image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop&q=80'
        },
        {
            title: 'Piano',
            category: 'Música',
            anchor: 'piano',
            image: 'https://images.unsplash.com/photo-1520523839898-507127027b40?w=800&auto=format&fit=crop&q=80'
        },
        {
            title: 'Percussão',
            category: 'Música',
            anchor: 'percussao',
            image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&auto=format&fit=crop&q=80'
        }
    ];

    const scrollToClasses = () => {
        const el = document.getElementById('classes-section');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home-container">
            {/* 1st Page (Full Viewport): Banner with School Drawing & Smooth Fade-Out */}
            <section className="hero-banner-section" aria-label="Apresentação Bicas">
                <div className="hero-banner-wrapper">
                    <img 
                        src="/capa sem logo_bicas.jpg" 
                        alt="Edifício da Bicas - Associação Cultural" 
                        className="hero-banner-img"
                    />
                    <div className="hero-banner-fade"></div>
                    <div className="hero-banner-content">
                        <span className="hero-pill">Associação Cultural</span>
                        <h1 className="hero-title">Bem-vindo à Bicas</h1>
                        <p className="hero-subtitle">
                            Um espaço dedicado à dança, à música e à partilha artística para todas as idades.
                        </p>
                        <button 
                            type="button" 
                            className="hero-scroll-btn" 
                            onClick={scrollToClasses}
                            aria-label="Descer para as aulas"
                        >
                            <span>Conheça as nossas aulas</span>
                            <span className="scroll-arrow">↓</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* 2nd Page: Existent Classes Section (Begins right after 1st page fold) */}
            <section id="classes-section" className="home-classes-section">
                <div className="section-header">
                    <span className="section-tag">Formação Artística</span>
                    <h2>As Nossas Aulas</h2>
                    <p className="section-intro">
                        Explore as modalidades disponíveis. Selecione uma aula para consultar programas, níveis e horários detalhados.
                    </p>
                </div>

                <div className="home-classes-grid">
                    {classes.map((item) => (
                        <ClassCard 
                            key={item.anchor}
                            title={item.title}
                            category={item.category}
                            anchor={item.anchor}
                            image={item.image}
                            onNavigate={onNavigateToClass}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
