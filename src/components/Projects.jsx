import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Dropdown from './Dropdown';

export default function Projects({ client }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    client.getEntries({ content_type: 'projects' })
      .then((response) => setProjects(response.items))
      .catch(console.error);
  }, [client]);
  const categories = [...new Set(projects.map((project) => project.fields.category))];
  const [selectedCategory, setSelectedCategory] = useState('Show All');
  return (
    <>
      <h1 className='content-title'>Projects</h1>
      <hr className='hr-content' />
      <Dropdown categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className='projects-grid'>
        {projects.map((project) => (
          selectedCategory === 'Show All' || project.fields.category === selectedCategory ? (
            < ProjectCard
              title={project.fields.title}
              description={project.fields.description}
              image={project.fields.projectImage.fields.file.url}
              techStack={project.fields.techStackList.split(' ')}
              link={project.fields.link}
            />) : null
        ))}
      </div>
    </>
  )
}