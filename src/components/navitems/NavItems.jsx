import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import chevron from "../../assets/chevron.svg";

const NavItem = ({ items }) => {
  const [open, setOpen] = useState(false);

  if (!items || items.length === 0) return null;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[30px] items-center">
        {items.map((item) => (
          <div key={item.name} className="relative group">
            <span className="cursor-pointer text-[#1A1A1A] hover:text-black text-base flex items-center">
              {item.name}
              <img
                src={chevron}
                alt="Chevron"
                className="inline h-[24px] w-[24px] group-hover:rotate-180 transition-transform"
              />
            </span>

            {item.subItems && (
              <div className="absolute top-full left-0 w-48 bg-white border rounded shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                {item.subItems.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="text-[#064EA4]"
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>
        <nav className="flex flex-col px-4 py-4 gap-2">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col items-start w-full">
              <span className="text-base font-medium mb-2">{item.name}</span>
              {item.subItems &&
                item.subItems.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    className="pl-4 py-1 text-sm items-start text-left text-gray-600 hover:bg-gray-100 w-full rounded"
                  >
                    {subItem.name}
                  </a>
                ))}
            </div>
          ))}
        </nav>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default NavItem;
