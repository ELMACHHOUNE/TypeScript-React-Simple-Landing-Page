const AboutHeading = () => (
  <h3 className="text-2xl font-bold mb-2 text-[#222831]">About the Program</h3>
);

const AboutDescription = () => (
  <p className="text-[#393E46] mb-4">
    The MSc Software Engineer program is designed for aspiring professionals who
    want to deepen their expertise in software engineering, covering advanced
    topics in architecture, cloud computing, AI, and project management.
  </p>
);

const AboutSection = () => (
  <section
    id="about"
    className="my-12 bg-[#DFD0B8] p-6 rounded-lg shadow border border-[#948979]"
  >
    <AboutHeading />
    <AboutDescription />
  </section>
);

export default AboutSection;
