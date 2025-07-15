import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

type HeaderProps = {
  title: string;
};

const features = [
  "Industry-focused curriculum",
  "Expert faculty & mentors",
  "Flexible online learning",
  "Career support & networking",
];

const codeSnippet = `function buildFuture(engineer) {
  engineer.learn(["AI", "Cloud", "DevOps"]);
  engineer.collaborate();
  engineer.innovate();
  return engineer.lead();
}`;

const TYPING_SPEED = 28;

function TypingCode() {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const idx = useRef(0);

  useEffect(() => {
    if (idx.current < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + codeSnippet[idx.current]);
        idx.current++;
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else {
      // Blinking cursor
      const blink = setInterval(() => setShowCursor((c) => !c), 500);
      return () => clearInterval(blink);
    }
  }, [displayed]);

  return (
    <div className="bg-[#181c23] rounded-xl shadow-2xl border border-[#393E46] w-full max-w-lg mx-auto mt-4">
      {/* Editor top bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#393E46] bg-[#23272f] rounded-t-xl">
        <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
        <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
        <span className="ml-4 text-xs text-[#948979] font-mono">
          buildFuture.js
        </span>
      </div>
      <pre
        className="text-[#DFD0B8] text-left text-sm sm:text-base font-mono px-6 py-4 overflow-x-auto relative animate-fade-in"
        style={{ minHeight: 120 }}
      >
        <span className="text-[#948979]">{"> "}</span>
        {displayed}
        <span
          className={`inline-block w-2 h-5 align-middle ${
            showCursor ? "bg-[#DFD0B8]" : "bg-transparent"
          } animate-blink`}
        />
        <style>{`
          @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
          .animate-blink { animation: blink 1s step-end infinite; }
        `}</style>
      </pre>
    </div>
  );
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#222831] overflow-hidden px-4 py-12">
      {/* Blurred background image */}
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
        alt="Modern tech background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm z-0"
        loading="lazy"
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-12">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-[#DFD0B8] drop-shadow-lg animate-fade-in">
            {title}
          </h1>
          <p className="flex items-center gap-3 text-md md:text-md font-semibold text-[#948979] bg-[#222831]/80 px-6 py-3 rounded-full shadow border border-[#393E46] mb-8 animate-slide-in justify-center md:justify-start">
            <span>
              Advance your career with our MSc in Software Engineering
            </span>
            <FaArrowRight className="text-[#948979] text-lg animate-bounce-x" />
          </p>
          <a
            href="#apply"
            className="flex justify-center md:justify-start w-full md:w-auto"
          >
            <button className="bg-[#393E46] hover:bg-[#222831] text-[#DFD0B8] px-8 py-3 rounded-full text-lg font-semibold shadow-xl border-2 border-[#948979] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#948979] mb-8">
              Start Your Application
            </button>
          </a>
          {/* Features: Vertical timeline style */}
          <div className="flex flex-col gap-6 mt-6 w-full max-w-xs md:max-w-sm mx-auto md:mx-0">
            {features.map((feature, idx) => (
              <div key={feature} className="flex items-start gap-4 relative">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#393E46] border-2 border-[#948979] shadow text-[#948979]">
                    <FaCheckCircle className="text-lg" />
                  </span>
                  {idx < features.length - 1 && (
                    <span className="w-1 h-8 bg-gradient-to-b from-[#948979] to-[#393E46] opacity-60 mt-1 mb-1 rounded-full" />
                  )}
                </div>
                <div className="flex-1 text-left text-[#DFD0B8] bg-[#393E46]/30 px-4 py-3 rounded-xl shadow border border-[#948979]/20 font-medium">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block h-96 w-px bg-gradient-to-b from-[#948979] via-[#393E46] to-[#222831] opacity-60 mx-8 rounded-full" />
        {/* Right: Code editor */}
        <div className="flex-1 flex items-center justify-center w-full">
          <TypingCode />
        </div>
      </div>
      <style>{`
        @keyframes bounceX { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(8px); } }
        .animate-bounce-x { animation: bounceX 1.2s infinite; }
      `}</style>
    </header>
  );
};

export default Header;
