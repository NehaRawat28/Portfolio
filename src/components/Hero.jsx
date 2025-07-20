import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
  id="hero"
  className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4"
  data-aos="fade-up"
>

      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I’m <span className="text-green-400">Neha</span> 👋
      </h1>

      {/* ✅ Typing animation */}
      <h2 className="text-lg md:text-2xl mt-4 max-w-xl">
        <Typewriter
          words={[
            "Full Stack Developer",
            "React | Node.js | MongoDB",
            "I build beautiful web apps 💻",
          ]}
          loop={true}         // keep looping
          cursor
          cursorStyle="|"
          typeSpeed={80}      // typing speed
          deleteSpeed={50}    // backspacing speed
          delaySpeed={1500}   // pause before next word
        />
      </h2>

      <div className="mt-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white transition duration-300 shadow-lg"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
