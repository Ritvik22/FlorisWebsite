import { Shield, Lock, Database, Coins } from 'lucide-react'

export default function Web3Section() {
  return (
    <section id="web3" className="section-padding bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Web3 Ready</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 gradient-text">
            Data Privacy & Ownership
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Your data belongs to you. Floris ensures complete privacy and ownership 
            with plans for blockchain-based data sharing and rewards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Encrypted Data Storage</h3>
                  <p className="text-secondary-600">All your plant data is encrypted and stored locally, ensuring complete privacy and security.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">User Data Ownership</h3>
                  <p className="text-secondary-600">You own 100% of your data. Share it, sell it, or keep it private - the choice is yours.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Coins className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Blockchain Rewards</h3>
                  <p className="text-secondary-600">Coming soon: Earn tokens by contributing anonymized data to the community network.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-4">Wallet Connect</h3>
              <p className="text-secondary-600 mb-6">Connect your wallet to access advanced features and earn rewards.</p>
              <button className="btn-secondary w-full">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 