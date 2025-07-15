import Image from 'next/image'

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Meet the passionate founders behind Floris, dedicated to revolutionizing 
            crop protection through AI-powered solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Ritvik Shah */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image 
                  src="/ritvik.jpg" 
                  alt="Ritvik Shah" 
                  width={128} 
                  height={128} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-primary-900 mb-2">
                Ritvik Shah
              </h3>
            </div>
            <div className="space-y-4">
              
              <p className="text-secondary-700 leading-relaxed text-center">
                Ritvik is an engineer with a passion for building scalable and efficient systems. He is a quick learner and a team player.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/ritvik-shah-329811293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Rishi Yedavalli */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image 
                  src="/rishi.jpg" 
                  alt="Rishi Yedavalli" 
                  width={128} 
                  height={128} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-primary-900 mb-2">
                Rishi Yedavalli
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-secondary-700 leading-relaxed text-center">
                Rishi is an engineer with a passion for building scalable and efficient systems. He is a quick learner and a team player.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/rishi-yedavalli-a3a7512a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-secondary-600">
            Together, we're building the future of intelligent agriculture.
          </p>
        </div>
      </div>
    </section>
  )
} 