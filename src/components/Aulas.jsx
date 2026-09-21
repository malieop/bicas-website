import { useEffect } from 'react';
import AulaCard from './AulaCard';

export default function Aulas({ targetAnchor, selectedCategory = 'all', onSelectCategory }) {
    const classes = [
        {
            anchor: 'danca-contemporanea',
            name: 'Dança Contemporânea',
            category: 'Dança',
            icon: '🩰',
            image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80',
            description: 'Explore movimentos fluídos, expressivos e criatividade corporal. Perfeito para iniciantes e praticantes avançados desenvolverem consciência e técnica.',
            schedules: [
                { day: 'Segunda-Feira', time: '18:00 - 19:30' },
                { day: 'Quarta-Feira', time: '20:00 - 21:30' },
                { day: 'Sexta-Feira', time: '18:00 - 19:30' }
            ],
            contact: {
                info: 'Aulas abertas para novos alunos. Pode realizar uma aula experimental gratuita mediante marcação prévia.'
            }
        },
        {
            anchor: 'hip-hop-urban',
            name: 'Hip-Hop e Urban',
            category: 'Dança',
            icon: '⚡',
            image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=1200&auto=format&fit=crop&q=80',
            description: 'Aprenda os movimentos icónicos do hip-hop, popping, locking e freestyle. Uma experiência dinâmica, com ritmo acelerado e cheia de energia positiva.',
            schedules: [
                { day: 'Terça-Feira', time: '17:00 - 18:30' },
                { day: 'Quinta-Feira', time: '17:00 - 18:30' }
            ],
            contact: {
                info: 'Turmas divididas por idades e níveis de evolução coreográfica.'
            }
        },
        {
            anchor: 'ballet-classico',
            name: 'Ballet Clássico',
            category: 'Dança',
            icon: '🩰',
            image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1200&auto=format&fit=crop&q=80',
            description: 'Técnica pura, postura, flexibilidade e elegância. Aulas estruturadas pedagogicamente para desenvolver disciplina, equilíbrio e sensibilidade artística.',
            schedules: [
                { day: 'Segunda-Feira', time: '10:00 - 11:00' },
                { day: 'Quarta-Feira', time: '10:00 - 11:00' },
                { day: 'Sexta-Feira', time: '10:00 - 11:00' }
            ],
            contact: {
                info: 'Preparação para apresentações e exames ao longo do ano.'
            }
        },
        {
            anchor: 'guitarra',
            name: 'Aulas de Guitarra',
            category: 'Música',
            icon: '🎸',
            image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&auto=format&fit=crop&q=80',
            description: 'Do nível introdutório ao avançado. Aprenda acordes, escalas, leitura, repertório variado (clássico, pop, rock, acústico) e desenvolvimento técnico.',
            schedules: [
                { day: 'Segunda-Feira', time: '19:30 - 21:00', note: 'Iniciante' },
                { day: 'Quarta-Feira', time: '18:00 - 19:30', note: 'Avançado' }
            ],
            contact: {
                info: 'Aulas em pequenos grupos ou acompanhamento individualizado.'
            }
        },
        {
            anchor: 'piano',
            name: 'Piano',
            category: 'Música',
            icon: '🎹',
            image: 'https://images.unsplash.com/photo-1520523839898-507127027b40?w=1200&auto=format&fit=crop&q=80',
            description: 'Desde a iniciação musical até ao nível profissional. Teoria musical integrada, técnica de teclado, leitura de partituras e interpretação de peças.',
            schedules: [
                { day: 'Terça-Feira', time: '10:00 - 11:30', note: 'Iniciante' },
                { day: 'Quinta-Feira', time: '10:00 - 11:30', note: 'Intermédio' }
            ],
            contact: {
                info: 'Sessões individuais ou em pares com horários flexíveis.'
            }
        },
        {
            anchor: 'percussao',
            name: 'Percussão',
            category: 'Música',
            icon: '🥁',
            image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1200&auto=format&fit=crop&q=80',
            description: 'Ritmos tradicionais e contemporâneos. Explore a riqueza e variedade da percussão global, coordenação motora, polirritmia e dinâmicas de grupo.',
            schedules: [
                { day: 'Terça-Feira', time: '19:00 - 20:30' },
                { day: 'Quinta-Feira', time: '19:00 - 20:30' }
            ],
            contact: {
                info: 'Instrumentos disponibilizados nas instalações da associação.'
            }
        }
    ];

    useEffect(() => {
        if (targetAnchor) {
            const targetClass = classes.find(c => c.anchor === targetAnchor);
            if (targetClass && selectedCategory !== 'all' && selectedCategory !== targetClass.category) {
                if (onSelectCategory) {
                    onSelectCategory(targetClass.category);
                }
            }
            const timer = setTimeout(() => {
                const element = document.getElementById(targetAnchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.classList.add('highlight-target');
                    const clearPulse = setTimeout(() => {
                        element.classList.remove('highlight-target');
                    }, 2400);
                    return () => clearTimeout(clearPulse);
                }
            }, 120);
            return () => clearTimeout(timer);
        }
    }, [targetAnchor]);

    const displayedClasses = selectedCategory === 'all'
        ? classes
        : classes.filter(c => c.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <section className="classes-page-section">
            <div className="section-header">
                <span className="section-tag">Programas e Modalidades</span>
                <h2>
                    🎓 Aulas
                    {selectedCategory !== 'all' && ` — ${selectedCategory}`}
                </h2>
                <p>
                    {selectedCategory === 'Dança' && 'Conheça as nossas modalidades de dança, orientadas para a consciência corporal, disciplina e expressividade artística.'}
                    {selectedCategory === 'Música' && 'Descubra as nossas disciplinas musicais, com ensino teórico-prático personalizado para todas as idades.'}
                    {selectedCategory === 'all' && 'Oferecemos uma variedade de aulas de dança e música para todas as idades e níveis de experiência. Cada modalidade é orientada por profissionais dedicados à evolução artística dos alunos.'}
                </p>

                {/* In-page filter tabs */}
                <div className="classes-filter-bar" role="tablist" aria-label="Filtrar tipo de aulas">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={selectedCategory === 'all'}
                        className={`classes-filter-tab ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => onSelectCategory && onSelectCategory('all')}
                    >
                        Todas as Aulas ({classes.length})
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={selectedCategory === 'Dança'}
                        className={`classes-filter-tab ${selectedCategory === 'Dança' ? 'active' : ''}`}
                        onClick={() => onSelectCategory && onSelectCategory('Dança')}
                    >
                        🩰 Dança ({classes.filter(c => c.category === 'Dança').length})
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={selectedCategory === 'Música'}
                        className={`classes-filter-tab ${selectedCategory === 'Música' ? 'active' : ''}`}
                        onClick={() => onSelectCategory && onSelectCategory('Música')}
                    >
                        🎵 Música ({classes.filter(c => c.category === 'Música').length})
                    </button>
                </div>
            </div>
            
            <div className="classes-banners-list">
                {displayedClasses.map((classe, index) => (
                    <AulaCard
                        key={classe.anchor}
                        index={index}
                        anchor={classe.anchor}
                        name={classe.name}
                        category={classe.category}
                        icon={classe.icon}
                        image={classe.image}
                        description={classe.description}
                        schedules={classe.schedules}
                        contact={classe.contact}
                        isHighlighted={targetAnchor === classe.anchor}
                    />
                ))}
            </div>

            <div className="classes-info-box">
                <h3>Como Inscrever-se</h3>
                <p>
                    Para se inscrever em qualquer uma das nossas aulas ou marcar uma aula experimental gratuita, 
                    entre em contacto connosco através da página de <strong>Contactos</strong> ou envie-nos uma mensagem pelo WhatsApp.
                </p>
                
                <h3>Valores e Condições</h3>
                <p>
                    Os valores variam de acordo com a modalidade e a frequência semanal. 
                    Disponibilizamos planos combinados com desconto para quem frequenta mais de uma disciplina.
                </p>
            </div>
        </section>
    );
}
