import { Brain, Zap, Puzzle, Shield, Users, Bot } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "Hybrid Multimodal AI",
    description: "Camera + sensors (temp, humidity, moisture, pH, EC) working together for comprehensive plant analysis",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: Puzzle,
    title: "Plug-and-Play Modular Hardware",
    description: "Scales from a home plant to a farm network with easy setup and expansion",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-50 to-emerald-50"
  },
  {
    icon: Zap,
    title: "Edge AI",
    description: "Works offline, all analysis local, instant alerts and solutions without internet dependency",
    color: "from-yellow-500 to-orange-500",
    gradient: "from-yellow-50 to-orange-50"
  },
  {
    icon: Bot,
    title: "Self-Calibrating, Plant-Aware",
    description: "Auto-recognizes plant type and growth stage for personalized care recommendations",
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-50 to-pink-50"
  },
  {
    icon: Users,
    title: "Community Outbreak Shield",
    description: "Real-time pest/disease risk maps powered by community data sharing",
    color: "from-red-500 to-rose-500",
    gradient: "from-red-50 to-rose-50"
  },
  {
    icon: Shield,
    title: "Automated Treatment Assistant",
    description: "Step-by-step solutions and product ordering for immediate plant care",
    color: "from-indigo-500 to-blue-500",
    gradient: "from-indigo-50 to-blue-50"
  }
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 gradient-text">
            Why Floris is Different
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Our unique combination of technologies and features sets us apart from traditional 
            crop monitoring solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card bg-gradient-to-br ${feature.gradient} border border-white/50`}>
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-secondary-900">{feature.title}</h3>
              <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 