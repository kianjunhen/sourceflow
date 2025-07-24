import pythonLogo from "../../../assets/python.svg";
import { formatTitle } from "../../../utils/Misc";

const Chips = ({ title }) => {
  const getLogo = ({ title }) => {
    switch (title) {
      case "python":
        return pythonLogo;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#FFFFFF] rounded-[5px] py-[3px] px-[3px] w-fit flex gap-[6px] items-center">
      <img src={getLogo({ title })} />
      <div className="text-[14px] text-[#064EA4] ">{formatTitle(title)}</div>
    </div>
  );
};

export default Chips;
