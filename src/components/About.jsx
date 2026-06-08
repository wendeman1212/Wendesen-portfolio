const About = () => {
  return (
    <section id="about" className="py-20 border-b border-gray-800 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="text-[2.2rem] font-extrabold mb-12 text-center tracking-tight text-white">
          About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="max-w-[900px] mx-auto">
          <p className="text-[1.1rem] mb-6 text-center text-gray-300">
            I'm Wendesen Kebede, a Computer Science undergraduate at Debre Berhan University. I build complete web applications from frontend to backend, ensuring smooth user experiences and robust server-side logic.
          </p>
          <div className="flex justify-center gap-6 flex-wrap mb-8">
            <span>
              <i className="fas fa-check-circle text-blue-400"></i> Frontend (React, JS)
            </span>
            <span>
              <i className="fas fa-check-circle text-blue-400"></i> Backend (Node, Python)
            </span>
            <span>
              <i className="fas fa-check-circle text-blue-400"></i> Databases (MySQL)
            </span>
          </div>
          <div className="bg-gray-800 p-7 rounded-[28px] text-center border border-gray-700">
            <p>
              <strong>🎯 Career Objective:</strong> Seeking a Full-Stack Developer or Software Engineering role where I can leverage my skills in C++, Python, Java, and modern web technologies, contribute to impactful projects, and grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
