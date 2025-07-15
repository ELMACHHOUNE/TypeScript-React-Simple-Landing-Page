const ApplyHeading = () => (
  <h3 className="text-2xl font-bold mb-4 text-[#222831]">
    Ready to take the next step?
  </h3>
);

const ApplyDescription = () => (
  <p className="text-[#393E46] mb-6">
    Apply now and join a vibrant community of future tech leaders.
  </p>
);

const ApplyButton = () => (
  <a href="#" className="inline-block">
    <button className="bg-[#393E46] hover:bg-[#222831] text-[#DFD0B8] px-8 py-3 rounded-full shadow-lg border-2 border-[#948979] transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-[#948979]">
      Start Your Application
    </button>
  </a>
);

const ApplySection = () => (
  <section
    id="apply"
    className="my-12 text-center bg-[#DFD0B8] p-6 rounded-lg shadow border border-[#948979]"
  >
    <ApplyHeading />
    <ApplyDescription />
    <ApplyButton />
  </section>
);

export default ApplySection;
