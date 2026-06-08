const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C++', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'HTML / CSS', level: 90 },
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'MySQL / GitHub', level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 border-b border-gray-800 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="text-[2.2rem] font-extrabold mb-12 text-center tracking-tight text-white">
          Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="flex flex-wrap gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex-1 min-w-[300px] bg-gray-800 rounded-[32px] p-7 border border-gray-700">
              <h3 className="font-bold text-lg mb-6 text-white">{category.title}</h3>
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3 font-semibold text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden mb-5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
