import { Project as ProjectType } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/sanity-image/SanityImage';
import PageTransitionLink from '../../ui/PageTransitionLink';
import { motion } from 'framer-motion';
import { fadeInAndSlideUp } from '../../anim';
import { smoothCurve } from '@/utils/constants';
import { useRef } from 'react';

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
  const listContainerRef = useRef<HTMLUListElement>(null);

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
        className="text-light relative w-full"
      >
        <div className="group flex aspect-square h-full w-full items-center justify-center overflow-hidden">
          <SanityImage
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={mainImage}
            alt={title}
            className="aspect-auto object-cover transition-transform duration-500 ease-smooth-curve group-hover:scale-105"
          />
        </div>
        <div className="w-full pt-xs lg:pt-[45px]">
          <motion.h3
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: smoothCurve, duration: 1 }}
            className="heading-xl text-white opacity-0"
          >
            {title}
          </motion.h3>
          <div className="flex flex-wrap">
            <div className="flex items-center">
              {!!client && (
                <motion.p
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, ease: smoothCurve, duration: 1 }}
                  viewport={{ once: true }}
                  className="heading-m opacity-0"
                >
                  {client}
                </motion.p>
              )}

              {!!client && !!categories?.length && <DoubleDashed />}
            </div>

            {!!categories?.length && (
              <ul ref={listContainerRef} className="heading-m flex">
                {categories?.map(({ title, _id }, index) => (
                  <motion.li
                    key={_id}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.2 + 0.05 * index,
                      ease: smoothCurve,
                      duration: 1,
                    }}
                    viewport={{ once: true, root: listContainerRef }}
                    className="overflow-hidden text-ellipsis whitespace-pre opacity-0"
                  >
                    {title + (index < categories.length - 1 ? ', ' : '')}
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </PageTransitionLink>
  );
};
export default ProjectCard;

const DoubleDashed = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, ease: smoothCurve, duration: 1 }}
      viewport={{ once: true }}
      className="mx-3 h-[2px] w-[24px] bg-white opacity-0 sm:w-[36px]"
    ></motion.div>
  );
};
