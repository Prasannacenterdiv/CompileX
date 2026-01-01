import image from "../assets/image.png";

const Navbar = () => {
  return (
    <nav
      className="
        w-full px-5 py-3
        flex items-center justify-between

        bg-black/40
        backdrop-blur-2xl backdrop-saturate-150

        border-b border-white/10
        shadow-xl shadow-black/50

        text-gray-200
      "
    >
      <div className="flex items-center gap-2 cursor-pointer select-none">
        <span className="text-lg font-semibold tracking-wide text-gray-100">
          Compile-X
        </span>
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-400">
        <span className="opacity-70">Built by</span>

        <a
          href="https://www.linkedin.com/in/prasanna-pratap-singh-323238318/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            hover:text-gray-200 transition
          "
        >
          <img
            src={image}
            alt="Prasanna"
            className="
              w-9 h-9 rounded-full
              border border-white/15
              bg-black/30

              hover:scale-105
              hover:shadow-md hover:shadow-emerald-500/20
              transition-all duration-200
            "
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
