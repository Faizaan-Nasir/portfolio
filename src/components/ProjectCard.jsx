export default function ProjectCard({ title, description, image, techStack, link }) {
    return (
        <div className='project-card' onClick={() => window.open(link, '_blank')}>
            <img src={image} alt={title} className='project-image' />
            <div className='descriptiton-section'>
                <div className='project-title'>{title}</div>
                <hr />
                <div className='project-description'>{description}</div>
                <div className='tech-stack-list'>{techStack.map((tech) => <span>{tech}</span>)}</div>
            </div>
        </div>
    )
}