const Projects = () => {
  const projects = [
    {
      icon: 'fas fa-users',
      title: 'CollabSpace',
      description: 'Full-stack student collaboration platform with real-time chat, file sharing, and task boards. (Capstone project)',
      tech: ['React', 'Node.js', 'Socket.io', 'MySQL'],
    },
    {
      icon: 'fas fa-chart-simple',
      title: 'Weather Dashboard',
      description: 'Interactive weather app with 5-day forecast, geolocation, and chart visualizations using OpenWeather API.',
      tech: ['JavaScript', 'Chart.js', 'REST API'],
    },
    {
      icon: 'fas fa-book',
      title: 'Library Management System',
      description: 'Full-stack app for managing book loans, members, and inventory with role-based authentication.',
      tech: ['Python/Django', 'PostgreSQL', 'Bootstrap'],
    },
  ]

  return (
    <section id="projects" className="py-20 border-b border-gray-800 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="text-[2.2rem] font-extrabold mb-12 text-center tracking-tight text-white">
          Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-[28px] p-7 transition-all duration-250 border border-gray-700 hover:-translate-y-1.5 hover:border-blue-500 hover:shadow-[0_20px_30px_-12px_rgba(59,130,246,0.3)]"
            >
              <i
                className={`${project.icon} text-[2rem] text-blue-400 mb-4`}
              ></i>
              <h3 className="font-bold text-xl mb-3 text-white">{project.title}</h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 px-3 py-1 rounded-full text-xs font-semibold inline-block mr-2 mt-2 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
