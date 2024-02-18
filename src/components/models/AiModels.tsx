import { useState } from "react";
import Dropdown from "../shared/Dropdown";
import ModelRow, { ModelRowProps } from "./ModelRow";
import { FiChevronDown } from "react-icons/fi";
import { LayoutGroup, motion } from "framer-motion";

const FilterDropdown = () => {
  return (
    <Dropdown
      triggerText="Model"
      defaultSelected={new Set(["UI/UX Design", "Frontend", "Backend"])}
      options={[
        "UI/UX Design",
        "Frontend",
        "Backend",
        "Fullstack",
        "Graphic Designer",
        "Web Designer",
        "QA",
      ]}
      chevronIcon={<FiChevronDown className="h-4 w-4" />}
      triggerClassNames="bg-gray-900 focus:bg-gray-950/75 hover:bg-gray-950/75 rounded-lg flex text-white/60 hover:text-white focus:text-white focus:outline-none focus:ring-1 hover:ring-1 ring-primary-500 py-1 text-sm px-3 py-2 rounded-full  "
    />
  );
};

const AiModels = () => {
  const [models, setModels] = useState<ModelRowProps[]>([
    {
      id: "1",
      name: "ChatGpt",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "1.0.0",
      license: "MIT",
      contributors: [
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Felixasda",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=xyfa",
      ],
      rating: 4,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ad quod. Explicabo, tenetur saepe iure eaque sunt quos laudantium a? Officiis aperiam laboriosam modi nemo rerum minus optio ducimus commodi.",
      expanded: false,
    },
    {
      id: "2",
      name: "TensorFlow",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "2.3.0",
      license: "Apache 2.0",
      contributors: [
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Felixasda",
      ],
      rating: 5,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ad quod. Explicabo, tenetur saepe iure eaque sunt quos laudantium a? Officiis aperiam laboriosam modi nemo rerum minus optio ducimus commodi.",
      expanded: false,
    },
    {
      id: "3",
      name: "Bard",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "0.5.2",
      license: "GPLv3",
      contributors: [
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Feliwxasda",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Felweixasda",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=lixasda",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=<A></A>elixasda",
      ],
      rating: 2,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ad quod. Explicabo, tenetur saepe iure eaque sunt quos laudantium a? Officiis aperiam laboriosam modi nemo rerum minus optio ducimus commodi.",
      expanded: false,
    },
    {
      id: "4",
      name: "Sora",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "1.2.1",
      license: "BSD 3-Clause",
      contributors: [
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=d",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=4",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Felia",
      ],
      rating: 4,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ad quod. Explicabo, tenetur saepe iure eaque sunt quos laudantium a? Officiis aperiam laboriosam modi nemo rerum minus optio ducimus commodi.",
      expanded: false,
    },
    {
      id: "5",
      name: "Llama",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "1.2.1",
      license: "Private",
      contributors: [
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=d",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=4",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Felia",
      ],
      rating: 4,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ad quod. Explicabo, tenetur saepe iure eaque sunt quos laudantium a? Officiis aperiam laboriosam modi nemo rerum minus optio ducimus commodi.",
      expanded: false,
    },
    {
      id: "6",
      name: "Mistral",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "1.2.1",
      license: "MIT",
      contributors: [
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=d",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=4",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Felia",
      ],
      rating: 4,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ad quod. Explicabo, tenetur saepe iure eaque sunt quos laudantium a? Officiis aperiam laboriosam modi nemo rerum minus optio ducimus commodi.",
      expanded: false,
    },
    {
      id: "7",
      name: "Sora",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "1.2.1",
      license: "Private",
      contributors: [
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=d",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=4",
        "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Felia",
      ],
      rating: 4,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ad quod. Explicabo, tenetur saepe iure eaque sunt quos laudantium a? Officiis aperiam laboriosam modi nemo rerum minus optio ducimus commodi.",
      expanded: false,
    },
  ]);

  const toggleExpand = (id: string) => {
    setModels((prevModels) =>
      prevModels.map((model) =>
        model.id === id ? { ...model, expanded: !model.expanded } : model
      )
    );
  };

  return (
    <div className="p-1 h-full">
      <div className="bg-neutral-900/50 rounded-t-lg p-8 pb-3">
        <h2 className="text-2xl">Ai Models</h2>
        <div className="flex gap-3 mt-3">
          <FilterDropdown />
          <FilterDropdown />
          <FilterDropdown />
        </div>
      </div>

      <div className="flex items-center  justify-between text-sm text-white/60 mb-1 bg-gray-900/50 rounded-b-lg">
        <div className="min-w-[160px] flex-[1.6]  pl-7 pr-2 py-3">Model</div>
        <div className="min-w-[80px] flex-[0.8] text-center  px-2 py-3">
          Version
        </div>
        <div className="min-w-[80px] flex-[0.8] text-center  px-2 py-3">
          License
        </div>
        <div className="min-w-[80px] flex-[0.8]  tex-center px-2 py-3">
          Contributors
        </div>
        <div className="min-w-[116px] flex-[1.14] text-center pl-2 pr-7 py-3">
          Rating
        </div>
      </div>
      <div className="flex flex-col gap-1 overflow-y-scroll scroll-smooth  h-[calc(100%-172px)] rounded-lg">
        <LayoutGroup>
          {models.map((it) => (
            <ModelRow
              handleClick={toggleExpand}
              key={`model-row-${it.name}-${it.id}`}
              {...it}
            />
          ))}
        </LayoutGroup>
      </div>
    </div>
  );
};

export default AiModels;
