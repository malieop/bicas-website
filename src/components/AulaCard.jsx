export default function AulaCard({
    anchor,
    name,
    category,
    icon,
    image,
    description,
    schedules = [],
    contact,
    isHighlighted = false,
    index = 0
}) {
    const isReverse = index % 2 === 1;

    return (
        <article
            id={anchor}
            className={`class-banner ${isReverse ? 'class-banner-reverse' : ''} ${isHighlighted ? 'highlight-target' : ''}`}
        >
            <div className="class-banner-media">
                {image ? (
                    <img 
                        src={image} 
                        alt={`Aula de ${name} na Bicas`} 
                        className="class-banner-img"
                        loading="lazy" 
                    />
                ) : (
                    <div className="class-banner-placeholder">
                        <span className="class-banner-placeholder-icon">{icon}</span>
                        <span className="class-banner-placeholder-text">Foto da Aula / Formador</span>
                    </div>
                )}
                <div className="class-banner-overlay-badge">
                    <span className="class-banner-category">{category}</span>
                </div>
            </div>

            <div className="class-banner-content">
                <div className="class-banner-top-meta">
                    <span className="class-banner-icon">{icon}</span>
                    <span className="class-banner-category-inline">{category}</span>
                </div>

                <h3 className="class-banner-title">{name}</h3>

                <p className="class-banner-description">{description}</p>

                {schedules && schedules.length > 0 && (
                    <div className="class-banner-schedules">
                        <h4 className="class-banner-section-title">
                            <span>⏰</span> Horários Disponíveis
                        </h4>
                        <div className="class-schedules-pills">
                            {schedules.map((item, idx) => (
                                <div key={idx} className="class-schedule-pill">
                                    <span className="schedule-pill-day">{item.day}</span>
                                    <span className="schedule-pill-time">{item.time}</span>
                                    {item.note && (
                                        <span className="schedule-pill-note">{item.note}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Optional Contact Section if passed */}
                {contact && (
                    <div className="class-banner-contact">
                        <h4 className="class-banner-section-title">
                            <span>👤</span> Contacto / Formador
                        </h4>
                        {typeof contact === 'string' ? (
                            <p className="class-contact-text">{contact}</p>
                        ) : (
                            <div className="class-contact-info-block">
                                {contact.name && (
                                    <p className="class-contact-item class-contact-name">
                                        <strong>Formador(a):</strong> {contact.name}
                                    </p>
                                )}
                                {contact.info && (
                                    <p className="class-contact-item class-contact-note">
                                        {contact.info}
                                    </p>
                                )}
                                <div className="class-contact-actions">
                                    {contact.email && (
                                        <a href={`mailto:${contact.email}`} className="class-contact-badge-btn email">
                                            ✉️ {contact.email}
                                        </a>
                                    )}
                                    {contact.phone && (
                                        <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="class-contact-badge-btn phone">
                                            📱 {contact.phone}
                                        </a>
                                    )}
                                    {contact.whatsapp && (
                                        <a 
                                            href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="class-contact-badge-btn whatsapp"
                                        >
                                            💬 WhatsApp
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="class-banner-actions">
                    <a
                        href={`mailto:bicasgeral@gmail.com?subject=${encodeURIComponent(`Inscrição / Informações - ${name}`)}`}
                        className="class-banner-enroll-btn"
                        title={`Inscrever ou tirar dúvidas sobre ${name}`}
                    >
                        <span>Inscrever ou Tirar Dúvidas</span>
                        <span className="class-enroll-arrow">→</span>
                    </a>
                </div>
            </div>
        </article>
    );
}
