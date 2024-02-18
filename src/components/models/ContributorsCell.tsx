type Props = {
  contributors: string[];
};

const ContributorsCell = ({ contributors }: Props) => {
  return (
    <div className="flex -space-x-3 justify-center ">
      {contributors.map((imageSrc,i) => (
        <img
          key={`c-${imageSrc}-${i}`}
          className="w-6 bg-gray-700 h-6 ring-2 ring-white rounded-full "
          src={imageSrc}
          alt=""
        />
      ))}
    </div>
  );
};

export default ContributorsCell;
