export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10 text-gray-500 text-sm px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-white font-semibold">AICE CEC</p>
          <p>College of Engineering Chengannur</p>
        </div>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#join" className="hover:text-white transition-colors">Join</a>
          <a href="https://github.com" target="_blank" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <p>© {new Date().getFullYear()} AICE. All rights reserved.</p>
      </div>
    </footer>
  );
}