export default function Footer() {
    const address = "Parque das Sete Bicas, Av. Sra. da Hora 360, 4460-421 Sra. da Hora";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const openStreetMapUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent("Parque das Sete Bicas Senhora da Hora")}`;
    const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-grid">
                    {/* Left: Brand, Phrase, Contacts */}
                    <div className="footer-col-left">
                        <div className="footer-brand">
                            <span className="footer-title">Bicas</span>
                            <span className="footer-subtitle">Associação Cultural</span>
                        </div>

                        <p className="footer-helper-phrase">
                            &ldquo;Qualquer questão estamos por aqui&rdquo;
                        </p>

                        <div className="footer-links">
                            <a 
                                href="mailto:bicasgeral@gmail.com" 
                                className="footer-link"
                                title="Enviar email para Bicas"
                            >
                                <span className="footer-link-icon">✉️</span>
                                <span>bicasgeral@gmail.com</span>
                            </a>

                            <a 
                                href="https://www.instagram.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer-link"
                                title="Seguir Bicas no Instagram"
                            >
                                <svg 
                                    className="footer-svg-icon" 
                                    viewBox="0 0 24 24" 
                                    width="18" 
                                    height="18" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Address and Free Maps Options */}
                    <div className="footer-col-right">
                        <h4 className="footer-address-title">📍 Onde Estamos</h4>
                        <p className="footer-address-text">{address}</p>

                        {/* Free Map Embed Preview (No API key required) */}
                        <div className="footer-map-frame-wrapper">
                            <iframe
                                title="Mapa Parque das Sete Bicas"
                                src={mapEmbedUrl}
                                className="footer-map-iframe"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Free Map Navigation Options */}
                        <div className="footer-map-actions">
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-map-btn"
                                title="Abrir no Google Maps (Gratuito)"
                            >
                                <span>🗺️ Google Maps</span>
                                <span className="footer-map-arrow">↗</span>
                            </a>
                            <a
                                href={openStreetMapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-map-btn"
                                title="Abrir no OpenStreetMap (Gratuito & Open Source)"
                            >
                                <span>🌍 OpenStreetMap</span>
                                <span className="footer-map-arrow">↗</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Bicas - Associação Cultural. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
