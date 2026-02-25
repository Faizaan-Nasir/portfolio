export default function Article({ title, description, onClick }) {
    const LIMIT = (window.innerWidth > 600) ? 270 : 160;
    const isLong = description.length > LIMIT;

    return (
        <div className="article">
            <h2>{title}</h2>
            <p className="description">
                {description.slice(0, LIMIT) + "..."}
                {isLong && (
                    <span className="read-more" onClick={onClick}>
                        read more
                    </span>
                )}
            </p>
        </div>
    );
}