const AboutSection = () => { 
  const timelineItems = [
    {
      year: "2023",
      title: "Production Operator",
      company: "PT Sanitya Utama",
      description: "Ensured product quality standards and improved production efficiency"
    },
    {
      year: "2022",
      title: "Freelance Musician",
      company: "Independent",
      description: "Published articles and released electronic music"
    },
    {
      year: "2020",
      title: "Data Entry (Internship)",
      company: "Telkom Nanjung",
      description: "Processed and validated data with high accuracy in a fast-paced environment"
    }
  ];

  return (
    <section className="section-black py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Who I Am
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300 text-justify">
                I’m a versatile professional with a passion for technology, data management, and creative expression. 
                With experience in administration, IT support, data processing, and music production, 
                I also enjoy exploring “vibe coding” creating functional, aesthetic, 
                and experimental digital projects without being tied to conventional frameworks.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-300 text-justify">
                My approach blends analytical thinking with adaptability whether 
                I’m managing complex datasets, optimizing workflows, experimenting with interactive code concepts, or producing music. 
                I believe that merging technical skills with creativity opens the door to fresh ideas and impactful solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-accent font-semibold">Interests</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• AI & Machine Learning</li>
                  <li>• Vibe Coding</li>
                  <li>• Creative Writing & Storytelling</li>
                  <li>• Sound Design</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-accent font-semibold">Personality</h4>
                <p className="text-gray-300">INFP/ENFP</p>
                <p className="text-sm text-gray-400 text-justify">
                  Empathetic, adaptable, and driven by creativity with a sense of harmony.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8 animate-slide-up">
            <h3 className="text-2xl font-semibold text-accent mb-8">Career Highlights</h3>
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-accent/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-accent font-bold">{item.year}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{item.company}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;