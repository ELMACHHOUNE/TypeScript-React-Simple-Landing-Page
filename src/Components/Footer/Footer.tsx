import { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Legal from "./Legal";
import Terms from "./Terms";
import Cookies from "./Cookies";

const COOKIES_KEY = "msc_cookies_consent";

const Modal = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-[#DFD0B8] rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#393E46] hover:text-[#948979] text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  // For demo, set isLoggedIn to true. Replace with real auth logic.
  const isLoggedIn = true;
  const [modal, setModal] = useState<null | "legal" | "terms" | "cookies">(
    null
  );
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    if (isLoggedIn && !localStorage.getItem(COOKIES_KEY)) {
      setShowCookieBanner(true);
    }
  }, [isLoggedIn]);

  // Listen for consent change to hide banner
  useEffect(() => {
    const handler = () => {
      if (localStorage.getItem(COOKIES_KEY)) setShowCookieBanner(false);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  return (
    <>
      <footer className="bg-gradient-to-t from-[#222831] to-[#393E46] text-[#DFD0B8] pt-10 pb-6 px-4 mt-16 border-t-2 border-[#948979] shadow-inner">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Media */}
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#948979] transition-colors text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#948979] transition-colors text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#948979] transition-colors text-2xl"
            >
              <FaGithub />
            </a>
          </div>
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <button
              onClick={() => setModal("legal")}
              className="hover:text-[#948979] transition-colors"
            >
              Legal
            </button>
            <span className="hidden md:inline">|</span>
            <button
              onClick={() => setModal("terms")}
              className="hover:text-[#948979] transition-colors"
            >
              Terms
            </button>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-[#948979]">
          &copy; {new Date().getFullYear()} MSc Software Engineer. All rights
          reserved.
        </div>
        <Modal open={modal === "legal"} onClose={() => setModal(null)}>
          <Legal />
        </Modal>
        <Modal open={modal === "terms"} onClose={() => setModal(null)}>
          <Terms />
        </Modal>
        <Modal open={modal === "cookies"} onClose={() => setModal(null)}>
          <Cookies />
        </Modal>
      </footer>
      {/* Cookie consent banner at the bottom if logged in and not accepted/refused */}
      {isLoggedIn && showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pointer-events-none">
          <div className="pointer-events-auto bg-[#DFD0B8] border-t-2 border-[#948979] shadow-2xl rounded-t-2xl px-6 py-4 mb-2 max-w-xl w-full flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in-up">
            <div className="text-[#222831] text-sm font-medium">
              We use cookies to enhance your experience. Please accept or refuse
              cookies.
            </div>
            <div className="flex gap-3">
              <button
                className="bg-[#393E46] text-[#DFD0B8] px-5 py-2 rounded-full font-semibold shadow hover:bg-[#222831] border border-[#948979] transition"
                onClick={() => {
                  localStorage.setItem(COOKIES_KEY, "accepted");
                  setShowCookieBanner(false);
                }}
              >
                Accept
              </button>
              <button
                className="bg-transparent text-[#393E46] px-5 py-2 rounded-full font-semibold border border-[#948979] hover:bg-[#948979]/10 transition"
                onClick={() => {
                  localStorage.setItem(COOKIES_KEY, "refused");
                  setShowCookieBanner(false);
                }}
              >
                Refuse
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
