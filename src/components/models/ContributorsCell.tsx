

type Props = {
  contributors: string[];
};

const ContributorsCell = ({ contributors }: Props) => {
  return (
    <div>
      {contributors.map((imageSrc, index) => (
        <img key={index} src={imageSrc} alt={`Contributor ${index + 1}`} />
      ))}
    </div>
  );
};

export default ContributorsCell
