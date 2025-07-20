import pfp from "../assets/pfp.jpg"; // adjust the path based on file location

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gray-800 text-white"
      data-aos="fade-right"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={pfp}
            alt="Neha"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-green-500 mx-auto md:mx-0"
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m Neha, a passionate Full Stack Developer who loves creating
            modern, scalable web and mobile applications. I specialize in
            React.js, Node.js, and MongoDB, focusing on building seamless user
            experiences and clean, maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}
