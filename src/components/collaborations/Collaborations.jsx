import microsoftLogo from "../../assets/microsoftLogo.png";
import oracleLogo from "../../assets/oracleLogo.png";
import atlassianLogo from "../../assets/atlassianLogo.png";
import cloudflareLogo from "../../assets/cloudflareLogo.png";
import vmwareLogo from "../../assets/vmwareLogo.png";

const Collaborations = () => {
  const collaborationsList = [
    { name: "Microsoft", img: microsoftLogo },
    { name: "Oracle", img: oracleLogo },
    { name: "Atlassian", img: atlassianLogo },
    { name: "Cloudflare", img: cloudflareLogo },
    { name: "VMware", img: vmwareLogo },
  ];

  return (
    <div className="my-12 flex gap-6 flex-col mx-2 lg:mx-0">
      <div className="text-base text-[#D2D2D2] font-bold">Who we work with</div>
      <div className="flex justify-center md:justify-between items-center flex-wrap gap-4">
        {collaborationsList.map((collaboration) => (
          <img
            src={collaboration.img}
            alt={collaboration.name}
            key={collaboration.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Collaborations;
