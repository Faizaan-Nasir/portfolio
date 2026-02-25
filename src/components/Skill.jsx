export default function Skill({ skillName, skillImage }) {
    return (
        <img src={skillImage} alt={skillName} className='skill-image' />
    );
}