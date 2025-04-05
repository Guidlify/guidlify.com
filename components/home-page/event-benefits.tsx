import { Users, Calendar, MapPin, TrendingUp, Award, Zap } from "lucide-react"

const benefits = [
  {
    title: "Expand Your Network",
    description: "Connect with industry leaders, potential partners, and like-minded professionals.",
    icon: Users,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Stay Updated",
    description: "Get the latest insights, trends, and innovations in your industry.",
    icon: Calendar,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Discover Opportunities",
    description: "Find new business opportunities, partnerships, and career prospects.",
    icon: MapPin,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Grow Your Business",
    description: "Learn strategies to scale your business and increase revenue.",
    icon: TrendingUp,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Build Credibility",
    description: "Establish yourself as an industry expert and thought leader.",
    icon: Award,
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    title: "Get Inspired",
    description: "Find motivation and fresh ideas to drive your projects forward.",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-500"
  }
]

const EventBenefits = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-4xl tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Why Attend Our Events?
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the value and opportunities that await you at our events
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${benefit.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center rounded-full bg-violet-600 px-8 py-4 text-white transition-all duration-300 hover:bg-violet-700">
            Join Our Next Event
          </button>
        </div>
      </div>
    </section>
  )
}

export default EventBenefits 