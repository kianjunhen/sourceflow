import Chips from "./chips/Chips";
import locationSvg from "../../assets/location.svg";
import moneySvg from "../../assets/money.svg";
import { formatTitle, isColorBright } from "../../utils/Misc";

const JobList = ({
  skill,
  index,
  title,
  location,
  salary,
  description,
  postDate,
  bgColor,
  link,
}) => {
  const isBright = isColorBright(bgColor.replace("bg-[", "").replace("]", ""));
  const textColor = isBright ? "text-[#064EA4]" : "text-white";
  const iconClass = isBright ? "" : "invert brightness-0";

  return (
    <div
      className={`p-4 md:p-8 rounded-[30px] ${bgColor} w-full md:w-fit text-left shadow-md flex flex-col gap-4 ${textColor}`}
    >
      <Chips title={skill} />
      <div className="text-[30px] font-bold">{formatTitle(title)}</div>
      <div className="flex flex-col items-left text-base gap-2">
        <span className="flex flex-row gap-2">
          <img src={locationSvg} className={iconClass} />{" "}
          {formatTitle(location)}
        </span>
        <span className="flex flex-row gap-2">
          <img src={moneySvg} className={iconClass} /> {salary}
        </span>
      </div>
      <div className="text-base">{description}</div>
      <button
        className="bg-white text-[#064EA4] font-semibold text-sm py-3 rounded-full"
        onClick={() => window.open(link, "_blank")}
      >
        View this job
      </button>
      <p className={`text-xs mt-2 opacity-60 ${textColor}`}>
        Posted on {postDate}
      </p>
    </div>
  );
};

export default JobList;
