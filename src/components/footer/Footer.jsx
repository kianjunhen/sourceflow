import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  const logoSection = () => {
    return (
      <div className="flex gap-6 items-center md:items-start flex-col md:justify-center">
        <img src={logo} className="invert brightness-0 w-[232px]" />
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/company/sourceflow/?originalSubdomain=uk"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://www.facebook.com/SourceFlowSoftware/"
            aria-label="Facebook"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram/teamsourceflow" aria-label="Instagram">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://x.com/source_flow" aria-label="Twitter">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    );
  };

  const usefulLinks = () => {
    return (
      <>
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-[33px]">Explore</h3>
          <ul className="text-base mt-6 flex flex-col items-start gap-4">
            <li>
              <a href="#">Homepage</a>
            </li>
            <li>
              <a href="#">For jobseekers</a>
            </li>
            <li>
              <a href="#">For clients</a>
            </li>
            <li>
              <a href="#">Our sectors</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="font-bold text-[33px]">Sectors</h3>
          <ul className="text-base mt-6 flex flex-col items-start gap-4">
            <li>
              <a href="#">Software engineering</a>
            </li>
            <li>
              <a href="#">DevOps</a>
            </li>
            <li>
              <a href="#">Cloud</a>
            </li>
            <li>
              <a href="#">Infrastructure</a>
            </li>
            <li>
              <a href="#">Testing</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="font-bold text-[33px]">Services</h3>
          <ul className="text-base mt-6 flex flex-col items-start gap-4">
            <li>
              <a href="#">Nav item</a>
            </li>
            <li>
              <a href="#">Nav item</a>
            </li>
            <li>
              <a href="#">Nav item</a>
            </li>
            <li>
              <a href="#">Nav item</a>
            </li>
            <li>
              <a href="#">Nav item</a>
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <footer className="relative py-16  text-white">
      <div className="absolute inset-0 left-1/2 -translate-x-[50vw] w-[calc(100vw-8px)] h-full bg-[#064EA4] -z-10"></div>

      <div className="grid items-center md:grid-cols-4 md:items-start gap-4 lg:gap-[24px] mx-2 mr-4 lg:mx-0">
        <div className="hidden md:block">{logoSection()}</div>

        <div className="hidden md:contents">{usefulLinks()}</div>

        <div className="flex items-center m-auto md:hidden">
          {logoSection()}
        </div>
        <div className="grid mt-4 md:hidden gap-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
          {usefulLinks()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
