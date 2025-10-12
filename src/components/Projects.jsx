export default function Projects() {
  const projects = [
    {
      title: "Colivio",
      description: `Developed a platform to help women find compatible roommates in co-living spaces through AI-based matchmaking. 
Focused on building a secure, user-friendly, and responsive solution to enhance safety and convenience in shared living.`,
      codeLink: "https://github.com/NehaRawat28/colivio",
    },
    {
      title: "Real-time Chat App",
      description: `Developed a chat web app using React and Redux with real-time messaging powered by WebSockets and a 
Node.js backend.`,
      codeLink: "https://github.com/NehaRawat28/chat-app",
    },
    {
      title: "MyUniPapers",
      description: `Developed a full-stack university paper web app enabling students to search, filter, and download papers 
and notes. Built user and admin dashboards using React.js and managed uploads via Node.js, Express, and 
MongoDB. Integrated secure PDF preview, download, and admin-only content control.`,
      codeLink: "https://github.com/NehaRawat28/myunipapers",
    },
    {
      title: "AI Grading System",
      description: "AI-powered grading & feedback system using GPT API.",
      codeLink: "https://github.com/YourUsername/ai-grading-system",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-800 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        My <span className="text-green-400">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition transform"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex justify-center">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-green-500 hover:bg-green-600 rounded-lg transition"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
