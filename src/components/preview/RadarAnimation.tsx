const RadarAnimation = () => {
  return (
    <div className="h-full aspect-square relative ">
      <div className="flex items-center absolute justify-center h-full w-full">
        <div className=" origin-center  absolute opacity-100 h-8 w-8 border border-primary-500 rounded-full circle-1" />
        <div className=" origin-center  absolute opacity-100 h-16 w-16 border border-primary-500 rounded-full circle-2" />
        <div className=" origin-center  absolute opacity-100 h-24 w-24 border border-primary-500 rounded-full circle-3" />
      </div>

      <div className=" h-[50%]  aspect-square absolute animate-[spin_3s_linear_0s_infinite] flex items-center justify-center  origin-bottom-right !  bg-gradient-to-bl from-primary-400 to-transparent rounded-tl-full"></div>
    </div>
  );
};
export default RadarAnimation;
