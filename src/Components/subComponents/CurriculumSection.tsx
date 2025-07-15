const CurriculumHeading = () => (
  <h3 className="text-2xl font-bold mb-2 text-[#222831]">
    Curriculum Highlights
  </h3>
);

const CurriculumList = () => (
  <ul className="list-disc list-inside text-[#393E46] space-y-2">
    <li>Advanced Software Design & Architecture</li>
    <li>Cloud-Native Development</li>
    <li>Artificial Intelligence & Machine Learning</li>
    <li>Agile Project Management</li>
    <li>DevOps & Continuous Delivery</li>
  </ul>
);

const CurriculumSection = () => (
  <section
    id="curriculum"
    className="my-12 bg-[#DFD0B8] p-6 rounded-lg shadow border border-[#948979]"
  >
    <CurriculumHeading />
    <CurriculumList />
  </section>
);

export default CurriculumSection;
