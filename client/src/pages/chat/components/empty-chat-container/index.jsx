import LottieAnimation from "@/components/common/lottie-animation";

const EmptyChatContainer = () => {
  return (
    <div className="flex-1 md:bg-gradient-to-t from-[#c69cd6] to-[#eadcf2] md:flex  flex-col justify-center items-center hidden duration-1000 transition-all">
      <LottieAnimation />
      <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-1000 text-center">
        <h3 className="poppins-medium">
          Welcome
          <span className="text-[#764487]">!</span> You're now connected to the  
          <span className="text-[#764487]"> InstantChat </span>
          App<span className="text-[#764487]">.</span>
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
