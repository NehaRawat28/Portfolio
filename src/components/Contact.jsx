import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-900 text-white text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Let’s <span className="text-green-400">Connect</span>
      </h2>

      <p className="text-lg text-gray-400 max-w-md mx-auto mb-8">
        I’m always open to new opportunities, collaborations, or just a friendly
        chat. Feel free to reach out!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Email */}
        <a
          href="mailto:nr.neha9990@gmail.com?subject=Hello Neha!&body=I came across your portfolio and..."
          className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition"
        >
          <FaEnvelope className="text-white text-xl" /> Email Me
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-green-500 hover:bg-green-600 rounded-lg transition"
        >
          <FaLinkedin className="text-blue-400 text-xl" /> LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-green-500 hover:bg-green-600 rounded-lg transition"
        >
          <FaGithub className="text-gray-300 text-xl" /> GitHub
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-green-500 hover:bg-green-600 rounded-lg transition"
        >
          <FaTwitter className="text-blue-400 text-xl" /> Twitter
        </a>
      </div>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Neha | Let's Connect |{" "}
        <a
          href="mailto:nr.neha0000@gmail.com"
          className="text-green-400 hover:underline"
        >
          nr.neha0000@gmail.com
        </a>
      </p>
    </section>
  );
}
