import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Vidhya Narayanan",
    role: "Local Gardener",
    content: "Floris has transformed my crop monitoring. The AI detects issues days before I can see them visually. I'm able to take action before it's too late.",
    rating: 5
  },
  {
    name: "Anonymous",
    role: "Greenhouse Manager",
    content: "The edge AI processing is a game-changer. We get instant alerts even when our internet is down, and the modular design lets us scale from 10 to 100 sensors seamlessly. ROI was achieved in 6 months.",
    rating: 5
  },
  {
    name: "Prachi Gupta",
    role: "Community Gardener",
    content: "As a researcher, I appreciate the scientific accuracy of Floris. The hybrid AI combining visual and sensor data provides insights we couldn't get before. The data privacy features are exactly what we needed.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 gradient-text">
            What Our Users Say
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Join a community of growers who trust Floris for their crop protection needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 card-hover border border-white/50">
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-secondary-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                <div className="text-sm text-secondary-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 