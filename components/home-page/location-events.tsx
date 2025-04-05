import Image from "next/legacy/image"
import { Calendar, MapPin, Users } from "lucide-react"

const popularEvents = [
  {
    title: "Web Summit 2024",
    date: "November 11-14, 2024",
    location: "Lisbon, Portugal",
    attendees: "70,000+ attending",
    image: "/home-page/event-locations/location-1.png",
    category: "Conference"
  },
  {
    title: "Google I/O",
    date: "May 14-15, 2024",
    location: "Mountain View, California",
    attendees: "5,000+ attending",
    image: "/home-page/event-locations/location-2.png",
    category: "Conference"
  },
  {
    title: "TechCrunch Disrupt",
    date: "October 28-30, 2024",
    location: "San Francisco, USA",
    attendees: "10,000+ attending",
    image: "/home-page/event-locations/location-3.png",
    category: "Conference"
  },
  {
    title: "DevOps World",
    date: "September 17-19, 2024",
    location: "Las Vegas, Nevada",
    attendees: "3,000+ attending",
    image: "/home-page/event-locations/location-4.png",
    category: "Conference"
  }
]

const LocationEvents = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl tracking-wide sm:text-4xl md:text-5xl">
            Popular Tech Events
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover trending tech events worldwide
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularEvents.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 rounded-full bg-violet-600 px-3 py-1 text-sm font-medium text-white">
                  {event.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold line-clamp-2">{event.title}</h3>
                <div className="mt-2 flex items-center space-x-2 text-sm text-gray-200">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="mt-1 flex items-center space-x-2 text-sm text-gray-200">
                  <MapPin className="h-4 w-4" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
                <div className="mt-1 flex items-center space-x-2 text-sm text-gray-200">
                  <Users className="h-4 w-4" />
                  <span>{event.attendees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="rounded-full bg-violet-600 px-8 py-3 text-white transition-all duration-300 hover:bg-violet-700">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}

export default LocationEvents 