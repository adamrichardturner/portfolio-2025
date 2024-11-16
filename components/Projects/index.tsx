import Slider from 'react-slick';
import { motion } from 'framer-motion';
import projectsData from '@/utils/projectsData.json';
import ProjectCard from './ProjectCard';
import { Project } from '@/types/project';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    autoplaySpeed: 5000,
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
      <div className="mb-6">
        <h2 className="mb-0 text-3xl font-bold leading-none">Projects</h2>
        <span className="text-sm text-gray-400">
          A curated selection of some of my favourite projects
        </span>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-gray-700 bg-black">
        <div className="projects-slider">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="p-8 outline-none">
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
