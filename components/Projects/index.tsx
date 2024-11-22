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
    adaptiveHeight: false,
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
        <ul className="m-0 flex items-center justify-center gap-0"> {dots} </ul>
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
      <div className="mb-5">
        <h2 className="mb-0 font-inter text-2xl font-bold leading-none text-foreground sm:text-3xl">
          Projects
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-lg border bg-background outline-primary">
        <div className="projects-slider sm:h-[320px]">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="p-4 outline-none md:p-8">
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
