import { useEffect, useState } from "react";

const COOKIES_KEY = "msc_cookies_consent";

const Cookies = () => {
  const [consent, setConsent] = useState<null | "accepted" | "refused">(null);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIES_KEY);
    if (saved === "accepted" || saved === "refused") {
      setConsent(saved);
    }
  }, []);

  const handleConsent = (value: "accepted" | "refused") => {
    setConsent(value);
    localStorage.setItem(COOKIES_KEY, value);
  };

  return (
    <div className="p-6 text-[#222831]">
      <h2 className="text-xl font-bold mb-2 text-[#948979]">Cookies Policy</h2>
      <p className="mb-2">
        We use cookies to enhance your browsing experience, analyze site
        traffic, and personalize content.
      </p>
      <p className="mb-2">
        By continuing to use this site, you consent to our use of cookies in
        accordance with our policy.
      </p>
      <p className="mb-4">
        For more information, please review our full cookies policy or contact
        us.
      </p>
      <div className="flex gap-4 mt-4">
        <button
          className="bg-[#393E46] text-[#DFD0B8] px-5 py-2 rounded-full font-semibold shadow hover:bg-[#222831] border border-[#948979] transition"
          onClick={() => handleConsent("accepted")}
        >
          Accept
        </button>
        <button
          className="bg-transparent text-[#393E46] px-5 py-2 rounded-full font-semibold border border-[#948979] hover:bg-[#948979]/10 transition"
          onClick={() => handleConsent("refused")}
        >
          Refuse
        </button>
      </div>
      {consent && (
        <div className="mt-6 text-sm text-[#948979]">
          Your choice: <span className="font-bold">{consent}</span>
        </div>
      )}
    </div>
  );
};

export default Cookies;
