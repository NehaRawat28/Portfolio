import pfp from "../assets/pfp.jpg"; // adjust the path based on file location

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gray-800 text-white"
      data-aos="fade-right"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-6">
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
            Hi, I’m Neha. A Full Stack Developer who builds modern, scalable web
            and mobile apps. I’m not a perfectionist, but I am the type who will
            fix a bug at 2 AM because “it was bothering me.” I love clean code,
            smoother user experiences, and learning new things without
            pretending I know everything (because honestly… who does?). If you
            need someone curious, practical, and mildly obsessed with shipping
            neat products , yup! that’s me.
          </p>
        </div>
      </div>
    </section>
  );
}
