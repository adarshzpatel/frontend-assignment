
import ModelBrand from "./ModelBrand";
import Rating from "./Rating";
import Dropdown from "../layout/Dropdown";

const FilterDropdown = () => {
  return (
    <Dropdown
      triggerText="Model"
      defaultSelected={new Set(["UI/UX Design", "Frontend", "Backend"])}
      options={["UI/UX Design", "Frontend", "Backend","Fullstack","Graphic Designer","Web Designer","QA"]}
      triggerClassNames="bg-gray-900 focus:bg-gray-950/75 hover:bg-gray-950/75 rounded-lg flex text-white/60 hover:text-white focus:text-white focus:outline-none focus:ring-1 hover:ring ring-primary-500/75 py-1 text-sm pl-4 pr-1 rounded-full  "
    />
  );
};

type Model = {
  name: string;
  logoSrc?: string;
  version: string;
  license: string;
  contributors: string[];
  rating: 1 | 2 | 3 | 4 | 5;
};
const AiModels = () => {
  const models: Model[] = [
    {
      
      name: "ChatGpt",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "1.0.0",
      license: "MIT",
      contributors: ["John Doe", "Jane Smith"],
      rating: 4,
    },
    {
      name: "TensorFlow",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "2.3.0",
      license: "Apache 2.0",
      contributors: ["Alice Johnson"],
      rating: 5,
    },
    {
      name: "Bard",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "0.5.2",
      license: "GPLv3",
      contributors: ["Bob Williams", "Emily Davis"],
      rating: 3,
    },
    {
      name: "Sora",
      logoSrc:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      version: "1.2.1",
      license: "BSD 3-Clause",
      contributors: ["Michael Brown"],
      rating: 4,
    },
  ];
  return (
    <div className="p-1">
      <div className="bg-neutral-900/50 rounded-t-lg p-8 pb-3">
        <h2 className="text-2xl">Ai Models</h2>
        <div className="flex gap-2 mt-3">
          <FilterDropdown />
          <FilterDropdown />
          <FilterDropdown />
        </div>
      </div>
      <table
        cellPadding="0"
        cellSpacing="0"
        width="100%"
        className="border-spacing-x-20 border-collapse "
      >
        <thead className="bg-gray-900/50">
          <tr>
            <th>Models</th>
            <th>Versions</th>
            <th>License</th>
            <th>Contributors</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {models.map((it,index) => (
            <tr key={`model-${index}`}>
              <td>
                <ModelBrand name={it.name} logoSrc={it.logoSrc} />
              </td>
              <td>{it.version}</td>
              <td>{it.license}</td>
              <td>{it.license}</td>
              <td>
                <Rating rating={it.rating} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AiModels;
