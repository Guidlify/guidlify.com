import React, { useEffect, useState } from "react"
import Image from "next/legacy/image"
import { ChevronsRight } from "lucide-react"

interface eventLocationsDataProps {
  src: string
  alt: string
  heading?: string
  subtext: string
}

const eventLocationsData: eventLocationsDataProps[] = [
  {
    src: "location-1.png",
    alt: "Location 1",
    heading: "Experience it all around the world.",
    subtext: "An event to remember.",
  },
  {
    src: "location-2.png",
    alt: "Location 2",
    subtext: "Toronto, Canada.",
  },
  {
    src: "location-3.png",
    alt: "Location 3",
    subtext: "Toronto, Canada.",
  },
  {
    src: "location-4.png",
    alt: "Location 4",
    subtext: "Toronto, Canada.",
  },
  {
    src: "location-5.png",
    alt: "Location 5",
    subtext: "Toronto, Canada.",
  },
  {
    src: "location-6.png",
    alt: "Location 6",
    subtext: "Toronto, Canada.",
  },
]

const EventLocations = () => {
  const [shuffledData, setShuffledData] = useState<
    Array<Array<eventLocationsDataProps>>
  >([])

  const numRows = 2

  useEffect(() => {
    const shuffleArray = () => {
      const shuffledRows = Array.from({ length: numRows }, () => {
        const shuffledVal = [...eventLocationsData]
        for (let i = shuffledVal.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[shuffledVal[i], shuffledVal[j]] = [shuffledVal[j], shuffledVal[i]]
        }
        return shuffledVal
      })
      const duplicatedData = shuffledRows.map((row) => [...row, ...row])
      setShuffledData(duplicatedData)
    }

    shuffleArray()
  }, [])

  return (
    <div id="infinite" className="slider w-full">
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div key={rowIndex} className={`row-${rowIndex} barrier`}>
          <ul className="lane w-full">
            {shuffledData[rowIndex]?.map((item, index) => (
              <>
                <li className="event-location w-full">
                  <div
                    className="card relative shrink-0 transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-slate-800"
                    key={index}
                  >
                    <Image
                      alt={item.alt}
                      src={`/home-page/event-locations/${item.src}`}
                      height={303}
                      width={463}
                      className="opacity-60"
                      priority={true}
                    />
                    <div className="card-content absolute inset-x-0 bottom-[-2px] bg-gradient-to-b from-transparent to-white px-6 pb-10 text-black dark:to-[#030711]">
                      {item.heading === undefined ? (
                        <div className="text-md flex pb-2 font-semibold tracking-wide md:text-lg">
                          <span className="pr-2">
                            <ChevronsRight />
                          </span>{" "}
                          {item.subtext}
                        </div>
                      ) : (
                        <div className="pb-2 pl-4 pr-16 font-semibold md:pb-6">
                          <div className="pb-4 text-xl font-bold sm:text-2xl md:text-3xl xl:text-4xl">
                            {item.heading}
                          </div>{" "}
                          <div className="text-xs md:text-sm">
                            {item.subtext}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default EventLocations
