const Hero = () => (
  <section className="relative flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-4 bg-gradient-to-br from-[#DFD0B8] via-[#948979]/30 to-[#393E46]/10 overflow-hidden">
    {/* Decorative shape */}
    <div className="absolute -left-24 top-10 w-72 h-72 bg-[#948979]/20 rounded-full blur-2xl z-0" />
    {/* Image side */}
    <div className="relative z-10 w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
        alt="Software Engineering Illustration"
        className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-[#948979]/30 bg-[#DFD0B8]"
        loading="lazy"
      />
      {/* Decorative overlay */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#393E46]/20 rounded-full blur-2xl z-0" />
    </div>
    {/* Text side */}
    <div className="relative z-10 w-full md:w-1/2 max-w-xl mx-auto text-center md:text-left flex flex-col items-center md:items-start">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#222831] animate-fade-in drop-shadow-lg">
        Become a Leader in Software Engineering
      </h2>
      <p className="text-lg sm:text-xl text-[#393E46] mb-10 animate-slide-in">
        Our MSc Software Engineer program equips you with advanced skills in
        software design, development, and project management. Join a community
        of innovators and shape the future of technology.
      </p>
      <a href="#apply">
        <button className="bg-[#393E46] hover:bg-[#222831] text-[#DFD0B8] px-10 py-4 rounded-full text-xl font-semibold shadow-xl border-2 border-[#948979] transition-all duration-200 animate-bounce focus:outline-none focus:ring-2 focus:ring-[#948979]">
          Apply Now
        </button>
      </a>
    </div>
  </section>
);

export default Hero;
