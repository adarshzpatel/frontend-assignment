import { AnimatePresence } from "framer-motion";
import ContributorsCell from "./ContributorsCell";
import ModelBrand from "./ModelBrand";
import Rating from "./Rating";
import { motion } from "framer-motion";
export type ModelRowProps = {
  id: string;
  name: string;
  logoSrc: string;
  version: string;
  license: string;
  contributors: string[];
  rating: 1 | 2 | 3 | 4 | 5;
  description: string;
  expanded: boolean;
};

const ModelRow = ({
  id,
  name,
  logoSrc,
  version,
  license,
  contributors,
  rating,
  description,
  expanded,
  handleClick,
}: ModelRowProps & { handleClick: (id: string) => void }) => {
  return (

    <motion.div layout  animate={{}}>
      <motion.div layout
        onClick={() => handleClick(id)}
        key={`model-${id}`}
        className={`hover:bg-gray-900/50 rounded-lg  ${
          expanded && "bg-gray-900/50 rounded-b-none"
        } duration-400 transition-colors  flex items-center `}
        >
        <div className="min-w-[160px] flex-[1.6]  pl-7 pr-2 py-3">
          <ModelBrand name={name} logoSrc={logoSrc} />
        </div>
        <div className="min-w-[80px] flex-[0.8] text-white/60 text-center  px-2 py-3">
          {version}
        </div>
        <div className="min-w-[80px] flex-[0.8] whitespace-nowrap  text-white/60 text-center   px-2 py-3">
          {license}
        </div>
        <div className="min-w-[80px] flex-[0.8] px-2 py-3">
          <ContributorsCell contributors={contributors} />
        </div>
        <div className="min-w-[116px] flex-[1.16] pl-2 pr-7">
          <Rating rating={rating} />
        </div>
      </motion.div>
      <AnimatePresence>

        {expanded && (
          <motion.div
          layout
          initial={{
            opacity:0,

            y:-20
          }}
          animate={{
            y:0,
            opacity:1,

          }}
          exit={{
            opacity:0,
          }}
          
          className="bg-gray-900 origin-top p-4 rounded-b-lg text-white/60 w-full  "
          >
            {description}
          </motion.div>
        )}
        </AnimatePresence>
    </motion.div>
  );
};

export default ModelRow;
