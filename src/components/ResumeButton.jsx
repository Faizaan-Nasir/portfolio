export default function ResumeButton({ showMore, link }) {
    return (
        <div className='resume-button' onClick={() => { window.open(link) }}>
            Resumé
        </div>
    )
}