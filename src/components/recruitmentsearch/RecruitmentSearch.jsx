import background from "../../assets/background.svg";
import personal from "../../assets/persona.png";

const RecruitmentSearch = () => {
  return (
    <div className="relative">
      <div className="relative inset-0 left-1/2 -translate-x-[50vw] z-[-1] [width:calc(100vw_-_8px)]">
        <img
          src={background}
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 mx-2 mr-4 lg:mx-0 flex justify-between z-10 gap-2 md:gap-[40px]">
        <div className="flex-col items-start justify-center flex w-full">
          <div className="text-[#FFFFFF] text-[12px] md:text-base">
            Software Recruitment Specialists
          </div>
          <div className="text-[#FFFFFF] text-base md:text-[40px] lg:text-[66px]">
            Elevate your career
          </div>
          <div className="mt-2 w-full">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="E.g. networking"
                className="flex-grow px-2 md:px-4 md:py-[12px] w-inherit text-[12px] md:text-base font-bold text-[#AAAAAA] py-2 shadow-sm rounded-l-full focus:outline-none"
              />
              <button className="px-2 py-1 md:px-4 md:py-[12px] font-bold text-[12px] md:text-base bg-[#FCDF69] text-[#25210E] border border-gray-300 border-l-0 rounded-r-full">
                Search jobs
              </button>
            </div>
          </div>
        </div>
        <img
          src={personal}
          alt="Personal"
          className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[507px] lg:h-[480px] object-cover rounded-[30px] mt-auto mb-auto lg:mr-12"
        />
      </div>
    </div>
  );
};

export default RecruitmentSearch;
