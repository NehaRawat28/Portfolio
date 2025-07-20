export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Indux Solar",
      duration: "Apr 2025 – June 2025",
      details: [
        `Contributed to the development of web and mobile applications using React.js, 
React Native, Node.js, Express.js, and MongoDB`,
        `Built and enhanced multiple front-end and back-end features, ensuring seamless 
user experiences across platforms.`,
        `Worked in an Agile environment, participating in sprint planning, standups, and 
code reviews.`,
      ],
    },
    {
      role: "Frontend Web Developer Intern",
      company: "Coding Bits",
      duration: "June 2025 – Aug 2025",
      details: [
        "Built responsive websites and landing pages for clients using React, Tailwind CSS, and JavaScript.",
        "Implemented authentication, role-based dashboards, and CRUD APIs.",
        "Collaborated with designers and improved UI/UX for better user engagement.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-gray-800 text-white text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Professional <span className="text-green-400">Experience</span>
      </h2>

      <div className="max-w-4xl mx-auto px-6 space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg text-left hover:scale-[1.02] transition transform"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <h3 className="text-xl font-semibold text-green-400">
                {exp.role}
              </h3>
              <span className="text-gray-400 text-sm">{exp.duration}</span>
            </div>
            <p className="text-lg font-medium mb-2">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
