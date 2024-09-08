import React from 'react';

// Sample data for projects
const projects = [
    {
        id: 1,
        title: 'Project One',
        img: 'https://images.pexels.com/photos/948050/pexels-photo-948050.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'This is a brief description of Project One.',
        techStack: ['React', 'Node.js', 'Express']
    },
    {
        id: 2,
        title: 'Project Two',
        img: 'https://images.pexels.com/photos/948050/pexels-photo-948050.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'This is a brief description of Project Two.',
        techStack: ['Angular', 'Spring Boot', 'MongoDB']
    },
    {
        id: 3,
        title: 'Project Three',
        img: 'https://images.pexels.com/photos/948050/pexels-photo-948050.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'This is a brief description of Project Three.',
        techStack: ['Vue.js', 'Django', 'PostgreSQL']
    },
    {
        id: 4,
        title: 'Project Four',
        img: 'https://images.pexels.com/photos/948050/pexels-photo-948050.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'This is a brief description of Project Four.',
        techStack: ['Laravel', 'MySQL', 'Redis']
    },
    {
        id: 5,
        title: 'Project Five',
        img: 'https://images.pexels.com/photos/948050/pexels-photo-948050.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'This is a brief description of Project Five.',
        techStack: ['Flutter', 'Dart', 'Firebase']
    },
    {
        id: 6,
        title: 'Project Six',
        img: 'https://images.pexels.com/photos/948050/pexels-photo-948050.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'This is a brief description of Project Six.',
        techStack: ['Swift', 'Xcode', 'CoreData']
    },
    // Add more projects as needed
];

const ProjectCard = ({ title, img, description, techStack }) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={img} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                        <span key={index} className="bg-gray-700 px-2 py-1 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        img={project.img}
                        description={project.description}
                        techStack={project.techStack}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
