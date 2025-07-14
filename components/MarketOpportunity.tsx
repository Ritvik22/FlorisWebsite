import { Home, Building2, Leaf } from 'lucide-react'

const markets = [
  {
    icon: Home,
    title: "Home Gardeners",
    description: "Perfect for indoor plants, gardens, and small-scale growing operations",
    stats: "40M+ households in the US"
  },
  {
    icon: Building2,
    title: "Commercial Farms",
    description: "Scalable solutions for large agricultural operations and greenhouses",
    stats: "$12B market opportunity"
  },
  {
    icon: Leaf,
    title: "Greenhouses",
    description: "Precision monitoring for controlled environment agriculture",
    stats: "Growing 15% annually"
  }
]

export default function MarketOpportunity() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 gradient-text">
            Market Opportunity
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Floris serves a diverse market from home gardeners to commercial farms, 
            addressing the growing need for intelligent crop protection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {markets.map((market, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 text-center card-hover border border-white/50">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <market.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-secondary-900">{market.title}</h3>
              <p className="text-secondary-600 mb-4 leading-relaxed">{market.description}</p>
              <p className="text-sm font-medium text-primary-600">{market.stats}</p>
            </div>
          ))}
        </div>

        <div className="glass-effect rounded-xl p-8 text-center border border-white/50">
          <h3 className="font-display font-bold text-2xl mb-6 text-secondary-900">Global Smart Agriculture Market</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">$23.14B</div>
              <div className="text-secondary-600">Market Size (2023)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">13.5%</div>
              <div className="text-secondary-600">Annual Growth Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">$45.2B</div>
              <div className="text-secondary-600">Projected (2030)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 