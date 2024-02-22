import { projects } from "../data/projects";
import Project from "./Project";

export default function Projects() {
    return (
        <>
            <h2 className='font-medium text-center text-5xl py-12'>Proyectos</h2>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 mx-6 md:mx-24 lg:mx-48'>
                {projects.map(project => (
                    <Project 
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </>
    )
}
