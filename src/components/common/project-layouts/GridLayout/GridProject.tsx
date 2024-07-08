import { Project as ProjectType } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/sanity-image/SanityImage';
import PageTransitionLink from '../../ui/PageTransitionLink';
import { motion } from 'framer-motion';
import { fadeInAndSlideUp } from '../../anim';

interface ProjectProps extends ProjectType {
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  slug,
  mainImage,
  title,
  categories,
  client,
}) => {
  return (
    <PageTransitionLink
      className="interactable md:even:translate-y-[30%]"
      href={`/work/${slug.current}`}
    >
      <motion.div
        variants={fadeInAndSlideUp}
        initial="initial"
        whileInView="enter"
        viewport={{ once: true }}
        exit="exit"
        className="relative w-full text-light"
      >
        <div className="group flex aspect-square h-full w-full items-center justify-center overflow-hidden">
          <SanityImage
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={mainImage}
            alt={title}
            className="aspect-auto object-cover transition-transform duration-500 ease-smooth-curve group-hover:scale-105"
          />
        </div>
        <div className="w-full py-4">
          <h3 className="h3 border-b-2 py-6 text-light">{title}</h3>
          <div className="flex justify-between py-5">
            <p className="body-2">{client}</p>
            <ul className="body-2 text-light">
              {categories.map(({ title, _id }, index) => (
                <li key={_id}>
                  {title} {index !== categories.length - 1 && ', '}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </PageTransitionLink>
  );
};
export default ProjectCard;
