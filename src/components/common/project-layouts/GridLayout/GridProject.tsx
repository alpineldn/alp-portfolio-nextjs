import { Project as ProjectType } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/sanity-image/SanityImage';
import PageTransitionLink from '../../ui/PageTransitionLink';
import { motion } from 'framer-motion';
import { fadeInAndSlideUp } from '../../anim';
import { smoothCurve } from '@/utils/constants';

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
      dataType="link"
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
          <motion.h3
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              ease: smoothCurve,
              duration: 1,
            }}
            className="h3 border-b-2 border-light/20 py-6 text-light opacity-0"
          >
            {title}
          </motion.h3>
          <div className="flex justify-between py-5">
            <motion.p
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                ease: smoothCurve,
                duration: 1,
              }}
              viewport={{ once: true, margin: '-200px' }}
              className="body-1 opacity-0"
            >
              {client}
            </motion.p>
            <ul className="body-1">
              {categories.map(({ title, _id }, index) => (
                <motion.li
                  key={_id}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.4 + 0.2 * index,
                    ease: smoothCurve,
                    duration: 1,
                  }}
                  viewport={{ once: true, margin: '-200px' }}
                  className="opacity-0"
                >
                  {title} {index !== categories.length - 1 && ', '}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </PageTransitionLink>
  );
};
export default ProjectCard;
