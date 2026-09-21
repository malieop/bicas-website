export default function ClassCard({ title, image, category, anchor, onNavigate }) {
    const handleClick = (e) => {
        if (e) e.preventDefault();
        if (onNavigate) {
            onNavigate(anchor);
        }
    };

    return (
        <article 
            className="class-card" 
            onClick={handleClick} 
            role="button" 
            tabIndex={0} 
            onKeyDown={(e) => { 
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick(e);
                }
            }}
        >
            <div className="class-card-image-wrap">
                {image ? (
                    <img src={image} alt={title} className="class-card-image" loading="lazy" />
                ) : (
                    <div className="class-card-placeholder">
                        <span>{title.includes('Dança') || title.includes('Ballet') || title.includes('Hip-Hop') ? '🩰' : '🎵'}</span>
                    </div>
                )}
                {category && <span className="class-card-category">{category}</span>}
            </div>
            <div className="class-card-body">
                <h3 className="class-card-title">{title}</h3>
                <a 
                    href={`#${anchor}`} 
                    onClick={handleClick}
                    className="class-card-link"
                    tabIndex={-1}
                >
                    <span>Ver detalhes</span>
                    <span className="class-card-arrow">→</span>
                </a>
            </div>
        </article>
    );
}
