import ReactMarkdown from "react-markdown";
import Cross from '../assets/Cross.png'

export default function ExpandedArticle({ title, description, onClick }) {
    return (
        <div className='overlay-shadow'>
            <div className='expanded-article'>
                <h2>{title}</h2>
                <hr />
                <img src={Cross} onClick={onClick} alt='close-window' className='cross' />
                <div className='article-description'><ReactMarkdown>{description}</ReactMarkdown></div>
            </div>
        </div>
    )
}