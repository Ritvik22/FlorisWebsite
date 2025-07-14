import { Check, X } from 'lucide-react'

const competitors = [
  { name: "Fermata/Croptimus", features: [true, false, false, false, false, false] },
  { name: "Taranis", features: [true, false, false, false, false, false] },
  { name: "Arable Mark", features: [false, true, false, false, false, false] },
  { name: "MiFlora", features: [false, false, false, false, false, false] },
  { name: "Parrot Flower Power", features: [false, false, false, false, false, false] }
]

const features = [
  "Hybrid Multimodal AI",
  "Edge Processing",
  "Modular Hardware",
  "Self-Calibrating",
  "Community Data",
  "Web3 Ready"
]

export default function Comparison() {
  return (
    <section id="comparison" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 gradient-text">
            Floris vs. Competition
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            See how Floris stands out from traditional crop monitoring solutions with our 
            comprehensive feature set.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="glass-effect rounded-3xl overflow-hidden border border-white/50 shadow-2xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary-50 to-primary-100">
                  <th className="text-left p-8 font-semibold text-secondary-900 text-lg">Feature</th>
                  <th className="text-center p-8 font-semibold text-primary-600 text-lg">Floris</th>
                  {competitors.map((competitor, index) => (
                    <th key={index} className="text-center p-8 font-semibold text-secondary-600 text-lg">
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-secondary-100 hover:bg-secondary-50/30 transition-colors">
                    <td className="p-8 font-medium text-secondary-900 text-lg">{feature}</td>
                    <td className="text-center p-8">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </td>
                    {competitors.map((competitor, compIndex) => (
                      <td key={compIndex} className="text-center p-8">
                        {competitor.features[index] ? (
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                            <X className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
} 