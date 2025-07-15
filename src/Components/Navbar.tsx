import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Apply", href: "#apply" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92vw] max-w-5xl z-50">
      <div className="relative bg-[#393E46]/80 backdrop-blur-xl shadow-2xl flex items-center justify-between px-8 py-3 rounded-full border border-[#948979] transition-all duration-300 ring-1 ring-[#DFD0B8]/20">
        <div className="flex items-center gap-3 text-2xl font-extrabold text-[#DFD0B8] tracking-wide drop-shadow-sm">
          <span className="bg-[#948979]/20 p-2 rounded-full">
            <FaGraduationCap className="text-[#948979] text-xl" />
          </span>
          MSc Software Engineer
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 text-[#DFD0B8] font-medium text-lg">
          {navLinks.map(({ label, href }) => (
            <li key={href} className="group">
              <a
                href={href}
                className="relative px-2 py-1 hover:text-[#948979] transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                <span>{label}</span>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#948979] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu icon */}
        <div
          className="md:hidden text-[#DFD0B8] text-2xl cursor-pointer relative z-30"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <span>&#10005;</span> : <span>&#9776;</span>}
        </div>
        {/* Mobile dropdown overlay */}
        {open && (
          <>
            <div
              className="fixed inset-0 z-20 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            />
            <ul
              className="absolute top-full left-0 w-full bg-[#393E46]/95 backdrop-blur-xl rounded-b-2xl shadow-2xl flex flex-col items-center py-6 gap-4 md:hidden animate-fade-in-up z-30 transition-transform duration-300 scale-95 opacity-0 will-change-transform"
              style={{ animation: open ? "fadeInUp 0.3s forwards" : undefined }}
            >
              {navLinks.map(({ label, href }) => (
                <li key={href} className="group w-full flex justify-center">
                  <a
                    href={href}
                    className="block text-[#DFD0B8] text-lg font-medium px-8 py-3 rounded-full hover:bg-[#948979]/20 hover:text-[#948979] transition-colors duration-150 relative w-full text-center"
                    onClick={() => setOpen(false)}
                  >
                    <span>{label}</span>
                    <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2/3 h-0.5 bg-[#948979] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                  </a>
                </li>
              ))}
            </ul>
            <style>{`
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
              }
            `}</style>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
