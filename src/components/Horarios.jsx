export default function Horarios() {
    const schedule = [
        {
            dia: 'Segunda-Feira',
            aulas: [
                { horario: '10:00 - 11:00', aula: 'Ballet Clássico' },
                { horario: '18:00 - 19:30', aula: 'Dança Contemporânea' },
                { horario: '19:30 - 21:00', aula: 'Guitarra (Iniciante)' }
            ]
        },
        {
            dia: 'Terça-Feira',
            aulas: [
                { horario: '10:00 - 11:30', aula: 'Piano (Iniciante)' },
                { horario: '17:00 - 18:30', aula: 'Hip-Hop e Urban' },
                { horario: '19:00 - 20:30', aula: 'Percussão' }
            ]
        },
        {
            dia: 'Quarta-Feira',
            aulas: [
                { horario: '10:00 - 11:00', aula: 'Ballet Clássico' },
                { horario: '18:00 - 19:30', aula: 'Guitarra (Avançado)' },
                { horario: '20:00 - 21:30', aula: 'Dança Contemporânea' }
            ]
        },
        {
            dia: 'Quinta-Feira',
            aulas: [
                { horario: '10:00 - 11:30', aula: 'Piano (Intermédio)' },
                { horario: '17:00 - 18:30', aula: 'Hip-Hop e Urban' },
                { horario: '19:00 - 20:30', aula: 'Percussão' }
            ]
        },
        {
            dia: 'Sexta-Feira',
            aulas: [
                { horario: '10:00 - 11:00', aula: 'Ballet Clássico' },
                { horario: '18:00 - 19:30', aula: 'Dança Contemporânea' },
                { horario: '20:00 - 21:30', aula: 'Jam Session (Aberto)' }
            ]
        },
        {
            dia: 'Sábado',
            aulas: [
                { horario: '10:00 - 11:30', aula: 'Aulas Especiais' },
                { horario: '14:00 - 15:30', aula: 'Workshops' },
                { horario: '19:00 - 22:00', aula: 'Jam Session Especial' }
            ]
        }
    ];

    return (
        <section>
            <h2>📅 Calendário e Atividades</h2>
            <p className="activities-plan-intro">
                Este é o plano de atividades da Associação para o ano letivo, onde pode consultar quando acontecem os espetáculos, festas temáticas, mercados e eventos:
            </p>

            {/* Activities Plan Posters - Followed one another */}
            <div className="activities-posters">
                <a 
                    href={`${import.meta.env.BASE_URL}1-periodo.jpeg`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="activity-poster-link"
                    title="Clique para abrir imagem em tamanho real"
                >
                    <img 
                        src={`${import.meta.env.BASE_URL}1-periodo.jpeg`} 
                        alt="Plano de Atividades 26/27 - 1º e 2º Período" 
                        className="activity-poster-img"
                    />
                </a>

                <a 
                    href={`${import.meta.env.BASE_URL}3-periodo.jpeg`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="activity-poster-link"
                    title="Clique para abrir imagem em tamanho real"
                >
                    <img 
                        src={`${import.meta.env.BASE_URL}3-periodo.jpeg`} 
                        alt="Plano de Atividades 26/27 - 3º Período e Dança Desportiva" 
                        className="activity-poster-img"
                    />
                </a>
            </div>

            {/* Weekly Classes Schedule */}
            <div className="weekly-schedule-container">
                <h3>⏰ Horários Semanais das Aulas</h3>
                <p>Aqui pode consultar os horários de cada dia da semana. Os horários podem sofrer alterações pontuais, por isso confirme sempre connosco.</p>
                
                <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
                    {schedule.map((dia, index) => (
                        <div key={index} style={{ marginBottom: '2rem' }}>
                            <h4 style={{ color: 'var(--color-primary-deep)', marginBottom: '0.5rem', fontSize: '1.15rem' }}>{dia.dia}</h4>
                            <table className="schedule-table" style={{ marginTop: '0.5rem' }}>
                                <thead>
                                    <tr>
                                        <th>Horário</th>
                                        <th>Aula</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dia.aulas.map((aula, aulaIndex) => (
                                        <tr key={aulaIndex}>
                                            <td>{aula.horario}</td>
                                            <td>{aula.aula}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>

            <div className="classes-info-box">
                <h3>Informações Importantes</h3>
                <p><span className="accent-text">Aulas Experimentais:</span> As primeiras aulas podem ser experimentadas gratuitamente. Venha conhecer os instrutores e o ambiente!</p>
                <p><span className="accent-text">Cancelamentos:</span> Se não puder comparecer, favor avisar com antecedência através do email ou WhatsApp.</p>
                <p><span className="accent-text">Férias:</span> As aulas têm interrupção durante as férias escolares. Informe-se connosco sobre datas específicas.</p>
            </div>
        </section>
    );
}
