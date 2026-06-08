const Hero = () => {
  return (
    <section id="home" className="py-[60px] min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-wrap items-center justify-between gap-[50px]">
          <div className="flex-1 min-w-[300px] animate-fade-in-left">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-semibold text-xs mb-6 animate-bounce-slow">
              <i className="fas fa-graduation-cap"></i>
              Computer Science Undergraduate • Debre Berhan University
            </div>
            <h1 className="text-[3.2rem] font-extrabold leading-tight mb-5 text-white">
              I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text">Wendesen Kebede</span>
              <br />
              Full-Stack <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text">Developer</span>
            </h1>
            <p className="text-[1.1rem] text-gray-300 mb-7 max-w-[550px]">
              Computer Science undergraduate at Debre Berhan University, specializing in React, Node.js, and modern web technologies. Passionate about building scalable applications.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full no-underline font-bold transition-all duration-200 inline-flex items-center gap-2.5 cursor-pointer border-none text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_6px_14px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.7)] hover:-translate-y-1 hover:scale-105 animate-pulse-glow"
              >
                <i className="fas fa-paper-plane"></i>
                Hire Me
              </a>
            </div>
          </div>
          <div className="flex-1 min-w-[280px] flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[42%_58%_39%_61%/_51%_44%_56%_49%] animate-spin-slow blur-xl opacity-50"></div>
              <img
                src="/profile.png"
                alt="Wendesen Kebede"
                className="max-w-[280px] w-full rounded-[42%_58%_39%_61%/_51%_44%_56%_49%] shadow-[0_25px_35px_-12px_rgba(0,0,0,0.5)] bg-gray-700 relative z-10 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
