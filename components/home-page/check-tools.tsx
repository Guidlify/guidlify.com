import Image from "next/legacy/image"
import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "Event Management",
    subtitle: "Core features",
    description: "Essential tools for creating and managing events. Start with a solid foundation.",
    icon: "/home-page/event-locations/location-1.png"
  },
  {
    title: "Analytics Hub",
    subtitle: "Advanced features",
    description: "Ready-made dashboards and advanced analytics for event performance tracking.",
    icon: "/home-page/event-locations/location-2.png"
  },
  {
    title: "Marketing Suite",
    subtitle: "Beautiful promotion",
    description: "Launch event marketing campaigns in minutes, not days.",
    icon: "/home-page/event-locations/location-3.png"
  },
  {
    title: "Attendee Portal",
    subtitle: "Personal experience",
    description: "Create stunning event experiences with full control and customization.",
    icon: "/home-page/event-locations/location-4.png"
  },
  {
    title: "Sponsor Hub",
    subtitle: "Funding solution",
    description: "Connect with sponsors and manage partnerships with built-in tools.",
    icon: "/home-page/event-locations/location-5.png"
  },
  {
    title: "Coming soon",
    subtitle: "View our roadmap",
    description: "Stay tuned for more tools, updates and resources for event organizers!",
    icon: "/home-page/event-locations/location-6.png"
  }
]

const ToolsSection = () => {
  return (
    <section className="py-24 bg-[#0A0B0D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-4xl tracking-tight text-white sm:text-5xl">
            All-in-one toolkit for event organizers
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to build, launch, and scale your next big event
          </p>
          <div className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1C1D21] border border-[#2A2B30] px-6 py-2 text-sm text-gray-300">
            Access all with a single subscription
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#1C1D21] rounded-2xl p-6 hover:bg-[#23242A] transition-all duration-300 border border-[#2A2B30]"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 flex-shrink-0 rounded-xl bg-[#23242A] p-2.5 border border-[#2A2B30]">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {feature.subtitle}
                  </p>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection 