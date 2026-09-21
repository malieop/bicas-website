export default function Contactos() {
    return (
        <section className="contact-section">
            <h2>📞 Contactos</h2>
            <p>Gostaríamos de ouvir de si! Quer tenha dúvidas, queira inscrever-se nas nossas aulas ou deseje colaborar connosco, estamos aqui para ajudar.</p>
            
            <div className="contact-info">
                <div className="contact-item">
                    <h3>✉️ Email</h3>
                    <p><a href="mailto:bicasgeral@gmail.com">bicasgeral@gmail.com</a></p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Respondemos a todos os emails em até 24 horas.</p>
                </div>

                <div className="contact-item">
                    <h3>📱 Telefone / WhatsApp</h3>
                    <p><a href="tel:+351912345678">+351 91 234 5678</a></p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Disponível de segunda a sexta, das 10h às 20h.</p>
                </div>

                <div className="contact-item">
                    <h3>📍 Localização</h3>
                    <p><strong>Parque das Sete Bicas</strong><br />Av. Sra. da Hora 360, 4460-421 Sra. da Hora</p>
                    <p style={{ fontSize: '0.85rem', marginTop: '0.65rem' }}>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=Parque+das+Sete+Bicas+Av.+Sra.+da+Hora+360+4460-421+Sra.+da+Hora" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: 'var(--color-secondary)', textDecoration: 'underline' }}
                        >
                            Ver no Google Maps ↗
                        </a>
                        {' · '}
                        <a 
                            href="https://www.openstreetmap.org/search?query=Parque+das+Sete+Bicas+Senhora+da+Hora" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: 'var(--color-secondary)', textDecoration: 'underline' }}
                        >
                            OpenStreetMap ↗
                        </a>
                    </p>
                </div>

                <div className="contact-item">
                    <h3>🕐 Horário de Funcionamento</h3>
                    <p><strong>Segunda a Sexta:</strong> 10:00 - 21:00</p>
                    <p><strong>Sábado:</strong> 10:00 - 18:00</p>
                    <p><strong>Domingo:</strong> Fechado</p>
                </div>
            </div>

            <h3>Redes Sociais</h3>
            <p>Siga-nos nas redes sociais para atualizações, vídeos de aulas e anúncios de eventos especiais:</p>
            
            <div style={{ marginTop: '1.5rem' }}>
                <p>
                    <a href="#" style={{ color: '#c4b5fd', textDecoration: 'none', marginRight: '1rem', fontWeight: '600' }}>
                        📘 Facebook
                    </a>
                    <a href="#" style={{ color: '#c4b5fd', textDecoration: 'none', marginRight: '1rem', fontWeight: '600' }}>
                        📷 Instagram
                    </a>
                    <a href="#" style={{ color: '#c4b5fd', textDecoration: 'none', fontWeight: '600' }}>
                        🎵 TikTok
                    </a>
                </p>
            </div>

            <h3 style={{ marginTop: '2rem' }}>Formulário de Contacto</h3>
            <p>Tem uma pergunta? Envie-nos uma mensagem e entraremos em contacto em breve!</p>
            
            <form style={{ marginTop: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                    <input 
                        type="text" 
                        placeholder="Seu Nome" 
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            padding: '0.75rem',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            fontSize: '1rem'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <input 
                        type="email" 
                        placeholder="Seu Email" 
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            padding: '0.75rem',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            fontSize: '1rem'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <textarea 
                        placeholder="Sua Mensagem" 
                        rows="5"
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            padding: '0.75rem',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            fontSize: '1rem',
                            fontFamily: 'inherit',
                            resize: 'vertical'
                        }}
                    ></textarea>
                </div>
                <button 
                    type="submit"
                    style={{
                        backgroundColor: '#8b5cf6',
                        color: 'white',
                        padding: '0.75rem 2rem',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#7c3aed'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#8b5cf6'}
                >
                    Enviar Mensagem
                </button>
            </form>
        </section>
    );
}
