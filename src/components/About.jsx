import { useState, useEffect } from 'react';
import Skill from './Skill';

export default function About({ client }) {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        client.getEntries({ content_type: 'skills' })
            .then((response) => setSkills(response.items))
            .catch(console.error);
    }, [client]);
    return (
        <div className='about'>
            <h1 className='content-title'>About Me</h1>
            <hr className='hr-content' />
            <p className='about-description'>
                Hey, I’m Faizaan Nasir. I have picked up several frameworks like React, FastAPI and Qt for web and application development over the years in my pursuit of becoming a software developer. Solving problems faced by users through responsive and accessible software drives me to keep improving as a developer.
                <br /><br />
                Recently, I’ve been exploring machine learning with PyTorch. It's been an exciting journey learning and exploring the potential that machine learning and artificial intelligence holds for the future.
                <br /><br />
                Outside of projects, I spend time on competitive programming. I’ve solved over 250 problems on LeetCode and participated in a few hackathons along the way. For me, coding is equal parts challenge and curiosity, and that’s what keeps me motivated to keep learning and experimenting.
            </p>
            <h2 className='skills-title'>Skills:</h2>
            <section className='skills-section'>
                {skills.map((skill) => (
                    <Skill skillName={skill.fields.skillName} skillImage={skill.fields.skillImage.fields.file.url} />
                ))}
            </section>
        </div>
    )
}