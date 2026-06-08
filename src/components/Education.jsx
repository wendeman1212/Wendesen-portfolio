const Education = () => {
  const courses = [
    'Data Structures',
    'Algorithms',
    'Database Systems',
    'Operating Systems',
    'Web Development',
    'Software Engineering',
    'Computer Networks',
    'Object-Oriented Programming',
  ]

  return (
    <section id="education" className="py-20 border-b border-gray-800 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="text-[2.2rem] font-extrabold mb-12 text-center tracking-tight text-white">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</span> & Background
        </h2>
        
        <div className="bg-gray-800 rounded-[28px] p-8 mb-8 border border-gray-700">
          <div className="flex items-center gap-4 mb-5">
            <i className="fas fa-university text-[2.5rem] text-blue-400"></i>
            <div>
              <h3 className="text-[1.6rem] font-bold text-white">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-400">Debre Berhan University</p>
            </div>
          </div>
          <p className="font-semibold mb-4">Relevant Coursework:</p>
          <div className="flex flex-wrap gap-3">
            {courses.map((course) => (
              <span
                key={course}
                className="bg-gray-700 px-3.5 py-1.5 rounded-full text-sm font-medium text-gray-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-[24px] border-l-4 border-blue-500">
          <h3 className="font-bold mb-2 text-white">
            <i className="fas fa-trophy"></i> Capstone Project:
          </h3>
          <p>Developing a full-stack student collaboration platform using React, Node.js, MySQL — designed to enhance learning at Debre Berhan University.</p>
        </div>
      </div>
    </section>
  )
}

export default Education
