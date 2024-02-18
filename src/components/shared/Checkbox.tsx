import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-center ">
      <div className="relative">
        <input
          type="checkbox"
          className="opacity-0 absolute h-5 w-5 "
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div
          className={`${checked ? "bg-primary-500 border-0" : 'bg-transparent'}   duration-300 ease-out rounded-md border  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:ring ring-primary-400`}
        >
          {checked && (
            <svg
              className="fill-current w-3 h-3 text-white pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>
      </div>
      <AnimatePresence>
      </AnimatePresence>
      <div className={` ${checked ? " text-primary-500 decoration-primary-500" : ""} relative duration-500 ease-out`}>
        {label}
      {checked && <motion.div  animate={{scaleX:[0,1.1]}} className='h-0.5 top-[50%] w-full absolute bg-primary-500 origin-left'/>}
        </div>
    </label>
  );
};

export default Checkbox;
