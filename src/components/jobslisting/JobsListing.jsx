import { useState } from "react";
import JobList from "./JobList.Jsx";
import chevronWithBackground from "../../assets/chevronWithBackground.svg";

const JobsListing = () => {
  const jobData = [
    {
      title: "Software Engineer I",
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
      title: "Software Engineer II",
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
      title: "Software Engineer III",
      location: "London",
      skill: "python",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postDate: "29/08/2023",
      bgColor: "bg-[#F79C7C]",
      link: "https://example.com/job3",
    },
    {
      title: "Senior Software Engineer",
      location: "London",
      skill: "python",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postDate: "29/08/2023",
      bgColor: "bg-[#FCE56E]",
      link: "https://example.com/job4",
    },
  ];

  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const pageSize = 3;
  const totalPages = Math.ceil(jobData.length / pageSize);

  const currentJobs = showAll
    ? jobData
    : jobData.slice(page * pageSize, (page + 1) * pageSize);

  const goNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const goPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleViewMore = () => {
    if (showAll) setPage(0);
    setShowAll(!showAll);
  };

  return (
    <div className="relative py-16">
      <div className="absolute inset-0 left-1/2 -translate-x-[50vw] w-[calc(100vw-8px)] h-full bg-[#D7E7FB] -z-10"></div>

      <div className="text-[#0E2152] text-[56px] font-bold text-center">
        Latest Jobs
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 justify-items-center mt-6 mx-2 mr-4 lg:mx-0">
        {currentJobs.map((job, index) => (
          <JobList key={index} index={index} {...job} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 mx-2 mr-4 lg:mx-0">
        {!showAll && (
          <div className="flex gap-3">
            <button
              onClick={goPrev}
              disabled={page === 0}
              className={`w-8 h-8 rounded-full flex items-center justify-center rotate-180 ${
                page === 0 ? "opacity-20 cursor-not-allowed" : "opacity-100"
              }`}
            >
              <img src={chevronWithBackground} />
            </button>
            <button
              onClick={goNext}
              disabled={page >= totalPages - 1}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                page >= totalPages - 1
                  ? "opacity-20 cursor-not-allowed"
                  : "opacity-100"
              }`}
            >
              <img src={chevronWithBackground} />
            </button>
          </div>
        )}
        <div
          className="text-[#0E2152] text-base font-medium cursor-pointer ml-auto"
          onClick={handleViewMore}
        >
          {showAll ? "Collapse" : "View more jobs"}
        </div>
      </div>
    </div>
  );
};

export default JobsListing;
