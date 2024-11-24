import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import projectsData from '@/utils/projectsData.json';
import ProjectCard from './ProjectCard';
import { Project } from '@/types/project';
import LoadingDots from '../LoadingDots';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
  loading: () => <LoadingDots />,
});

const Projects = () => {
  const projects = projectsData.projects as Project[];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'ease-in-out',
    className: 'center',
    centerMode: false,
    customPaging: (i: number) => (
      <button
        aria-label={`Go to project ${i + 1}`}
        className="hidden !h-2 !w-2 rounded-full bg-white transition hover:bg-white md:block"
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="mt-2 flex items-center justify-center gap-0">
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      <h2 className="mb-2 font-inter text-xl font-bold leading-none text-foreground sm:text-3xl">
        Projects
      </h2>

      <p className="max-w-[400px] pb-2 text-[12px] text-primary">
        I cannot share my professional work for obvious reasons. <br />
        Here are a selection of side projects I enjoyed building.
      </p>

      <div className="relative overflow-hidden rounded-xl border bg-lightBackground outline-primary">
        <div className="projects-slider p-0 sm:p-1">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="p-4 outline-none sm:p-6">
                <ProjectCard project={project} isDragging={false} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
