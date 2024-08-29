import Lottie from "react-lottie";
import animationData from "@/assets/heart-instantchat";

const Logo = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="flex p-5 justify-start items-center gap-0 pr-10">
      <Lottie options={defaultOptions} height={42} width={80} />
      <span className="text-3xl font-semibold">InstantChat</span>
    </div>
  );
};

export default Logo;
