import { Section } from '@/components/layouts/section';
import { projectsData } from '@/constant/projects-data';
import Image from 'next/image';

const Projects = () => {
  return (
    <Section
      title="Transforming Ideas into Digital Excellence"
      subtitle="Explore our past projects and see how we've helped businesses grow with innovative IT solutions"
      id="projects"
    >
      <div className="grid gap-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div key={project.title}>
            <Image
              width={400}
              height={400}
              alt={project.title}
              src={project.image}
              className="aspect-square w-full rounded-3xl object-cover"
            />
            <h3 className="text-md-semibold md:text-lg-semibold text-neutral-25 mt-4 md:mt-6">
              {project.title}
            </h3>
            <p className="text-sm-regular md:text-md-regular mt-2 text-neutral-400 md:mt-4">
              {project.year}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
