const steps = [
  {
    title: "Setup & Deploy",
    description: "Plug in your Floris sensors and cameras. The system automatically calibrates and recognizes your plants.",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "AI Analysis",
    description: "Our hybrid AI continuously monitors plant health using computer vision and environmental sensors.",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-50 to-emerald-50"
  },
  {
    title: "Get Solutions",
    description: "Receive instant alerts and automated treatment recommendations when issues are detected.",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500 to-emerald-500"
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 gradient-text">
            How It Works
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Get started with Floris in three simple steps. Our system does the heavy lifting 
            while you focus on growing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl`}>
                <span className="text-white font-bold text-2xl">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-2xl mb-6 text-secondary-900">{step.title}</h3>
              <p className="text-secondary-600 leading-relaxed text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 