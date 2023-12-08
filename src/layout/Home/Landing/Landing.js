import Navbar from "../../../components/Navbar/Navbar";
import "../../../index.css";
import Headphone from "../../../assets/headphone.png";
import "animate.css";
function Landing() {
  return (
    <>
      <Navbar />
      <div className="landing bg-landingBg h-screen bg-no-repeat bg-cover flex flex-col items-center justify-center relative">
        <img
          src={Headphone}
          alt="headphone"
          className="absolute w-[500px] left-5 bottom-14 animate__animated animate__fadeInLeft animate__delay-1s"
        />
        <h1 className="text-white capitalize font-main font-light text-8xl relative z-10 w-[540px] text-center animate__animated animate__fadeIn animate__delay-2s">
          find your perfect <span className="text-hover-color">piece</span>
        </h1>
      </div>
    </>
  );
}

export default Landing;
