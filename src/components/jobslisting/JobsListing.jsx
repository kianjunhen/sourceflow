import JobList from "./JobList.Jsx";
import chevronWithBackground from "../../assets/chevronWithBackground.svg";

const JobsListing = () => {
  const jobData = [
    {
      title: "Software Engineer",
      location: "London",
      skill: "python",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postDate: "29/08/2023",
      bgColor: "bg-[#FCE56E]",
      link: "https://example.com/job1",
    },
    {
      title: "Software Engineer",
      location: "London",
      skill: "python",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postDate: "29/08/2023",
      bgColor: "bg-[#0047AB]",
      link: "https://example.com/job2",
    },
    {
      title: "Software Engineer",
      location: "London",
      skill: "python",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postDate: "29/08/2023",
      bgColor: "bg-[#F79C7C]",
      link: "https://example.com/job3",
    },
  ];

  return (
    <div className="relative py-16">
      <div className="absolute inset-0 left-1/2 -translate-x-[50vw] [width:calc(100vw_-_8px)] h-full bg-[#D7E7FB] -z-10"></div>
      <div className="text-[#0E2152] text-[56px] font-bold text-center">
        Latest Jobs
      </div>
      <div className="inset-0 grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 justify-items-center grid mt-6 mx-2 mr-4 lg:mx-0">
        {jobData.map((job, index) => (
          <JobList key={index} index={index} {...job} />
        ))}
      </div>

      <div className="flex justify-between items-center m-auto mt-6 inset-0 mx-2 mr-4 lg:mx-0">
        <div className="flex justify-center gap-3">
          <button className="w-8 h-8 rounded-full flex items-center justify-center rotate-180 opacity-50">
            <img src={chevronWithBackground} />
          </button>
          <button className="w-8 h-8 rounded-full text-white flex items-center justify-center">
            <img src={chevronWithBackground} />
          </button>
        </div>

        <div className="text-right text-[#0E2152] text-base font-medium cursor-pointer">
          View more jobs
        </div>
      </div>
    </div>
  );
};

export default JobsListing;
