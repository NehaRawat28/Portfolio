export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-green-400">Neha</h1>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm md:text-base">
          <a href="#hero" className="hover:text-green-400">Home</a>
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#skills" className="hover:text-green-400">Skills</a>
          <a href="#experience" className="hover:text-green-400">Experience</a>
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
