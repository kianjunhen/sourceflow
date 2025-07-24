import Button from "../buttons/Button.jsx";
import logo from "../../assets/logo.svg";
import NavItem from "../navitems/NavItems.jsx";

const Navbar = () => {
  const navItems = [
    {
      name: "For jobseekers",
      href: "#jobseekers",
      subItems: [
        { name: "Jobseekers 1", href: "#jobseekers-1" },
        { name: "Jobseekers 2", href: "#jobseekers-2" },
      ],
    },
    {
      name: "For clients",
      href: "#clients",
      subItems: [
        { name: "Clients 1", href: "#clients-1" },
        { name: "Clients 2", href: "#clients-2" },
      ],
    },
    {
      name: "Sectors",
      href: "#sectors",
      subItems: [
        { name: "Sector 1", href: "#sector-1" },
        { name: "Sector 2", href: "#sector-2" },
      ],
    },
    {
      name: "Resources",
      href: "#resources",
      subItems: [
        { name: "Resource 1", href: "#resource-1" },
        { name: "Resource 2", href: "#resource-2" },
      ],
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="my-5 flex justify-between items-center lg:mx-0 gap-4 max-w-screen-xl mx-auto px-4">
        <div className="flex flex-row items-center gap-1">
          <div className="block md:hidden">
            <NavItem items={navItems} />
          </div>
          <img src={logo} alt="Logo" className="md:h-[44px] md:w-[244px]" />
        </div>

        <div className="hidden md:block">
          <NavItem items={navItems} />
        </div>

        <div className="flex gap-1 md:gap-2">
          <Button variant="warning">Upload CV</Button>
          <Button variant="danger">Contact us</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
