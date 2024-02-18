const ModelBrand = ({ name, logoSrc }: { name: string; logoSrc?: string }) => {
  return (
    <div className="flex gap-2 items-center font-medium text-white">
      {logoSrc && (
        <img src={logoSrc} className="h-6 w-6 rounded-full object-cover" />
      )}
      {name}
    </div>
  );
};

export default ModelBrand;
