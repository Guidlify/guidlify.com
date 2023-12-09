"use client"

import Image from "next/legacy/image"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const eventData = [
  {
    title: "WebX Manila",
    description:
      "Back at it again with another big event at Manila. Are you guys all excited? We are about to drop...",
    location: "Manilla",
    starCount: "20k",
    date: "November 2023",
  },
  {
    title: "WebX Manila",
    description:
      "Back at it again with another big event at Manila. Are you guys all excited? We are about to drop...",
    location: "Manilla",
    starCount: "20k",
    date: "November 2023",
  },
  {
    title: "WebX Manila",
    description:
      "Back at it again with another big event at Manila. Are you guys all excited? We are about to drop...",
    location: "Manilla",
    starCount: "20k",
    date: "November 2023",
  },
]

const badgeSponsorData = {
  badges: [
    {
      title: "Badges",
      items: [
        {
          name: "Beta Tester Badge",
          url: "/organization/beta-tester-badge.png",
        },
        {
          name: "Month Event Badge",
          url: "/organization/month-event.png",
        },
      ],
    },
  ],
  sponsor: [
    {
      title: "Sponsors",
      items: [
        {
          name: "WebXDAO",
          url: "/organization/webxdao.png",
        },
        {
          name: "WebXGuild",
          url: "/organization/webxguild.png",
        },
      ],
    },
  ],
  sponsoring: [
    {
      title: "Sponsoring",
      items: [
        {
          name: "WebX Manila",
          date: "10/24/2023",
        },
        {
          name: "ETHGlobal",
          date: "12/23/2023",
        },
      ],
    },
  ],
}

interface BadgeSectionProps {
  title: string
  items: { name: string; url: string }[]
}

const BadgeSection: React.FC<BadgeSectionProps> = ({ title, items }) => (
  <div>
    <h1 className="mb-2 text-xl font-bold">{title}</h1>
    <div className="mb-4 flex space-x-2 pl-4">
      {items.map((item) => (
        <div key={item.name}>
          <Image
            alt={item.name}
            src={item.url}
            width={44}
            height={44}
            className="mr-2"
          />
        </div>
      ))}
    </div>
  </div>
)

const OrganizationPage = () => {
  return (
    <div className="container mb-20">
      <Image
        alt="banner of organization"
        src={"/organization/banner.png"}
        width={1200}
        height={300}
        layout="responsive"
      />
      <div className="">
        <div className="relative mb-4 mt-[-100px] flex items-center justify-center">
          <div className="relative">
            <Image
              alt="pic"
              src={"/organization/avatar.png"}
              width={200}
              height={200}
              className="rounded-full"
            />
            <div className="absolute bottom-10 right-0 h-[30px] w-[30px] rounded-full bg-red-500"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex">
            <div className="text-xl font-bold">WebX Guild</div>
            <div className="ml-2">
              <Image
                alt="virified badge for organization"
                src={"/organization/verified.png"}
                width={20}
                height={20}
              />
            </div>
          </div>
          @webxguild
          <p className="max-w-[600px] pt-6">
            At WebX DAO, we&apos;re dedicated to staying at the forefront of the
            ever-evolving web. From web3 and web5 to the metaverse and DeFi!
          </p>
          <div className="mt-12 flex items-center">
            {/* <div className="flex"> */}
            <Icons.youtube className="mr-2 h-4 w-4 shrink-0" />
            <Icons.twitch className="mr-2 h-4 w-4 shrink-0" />
            <Icons.X className="mr-2 h-4 w-4 shrink-0" />
            <Icons.globe className="mr-2 h-4 w-4 shrink-0" />
            {/* </div> */}
          </div>
          <div className="mt-[-30px] flex w-full items-end justify-end">
            <Button className="bg-violet-500">
              <Icons.plusSquare className="mr-2 h-4 w-4 shrink-0" />
              Create Event
            </Button>
            <div className="ml-2 flex items-center justify-center">
              <Button className="bg-violet-500">
                <Icons.gripHorizontal className="h-4 w-4 shrink-0" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-b-1 mt-6 w-full border" />
        <div className="mt-16 flex justify-start">
          <div className="flex-1 flex-col">
            <BadgeSection {...badgeSponsorData.badges[0]} />
            <BadgeSection {...badgeSponsorData.sponsor[0]} />
            <div>
              <h1 className="mb-3 text-xl font-bold">Sponsoring</h1>
              <div className="mb-4 flex flex-col space-y-1">
                {badgeSponsorData.sponsoring[0].items.map((item, index) => (
                  <div key={index}>{`${item.name} (${item.date})`}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-894 flex-col">
            <h1 className="pb-4 text-xl font-bold">Upcoming Events</h1>
            {eventData.map((eventInfo) => (
              <div className="bg-image-container mb-8 h-[114px] w-[800px] rounded-lg p-4 text-white">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 flex justify-between pt-2">
                  <div className="pl-2 pr-6">
                    <div className="pb-1 text-sm font-bold">
                      {eventInfo.title}
                    </div>
                    <p className="pb-4 text-xs">{eventInfo.description}</p>
                  </div>
                  <div className="mr-4 flex h-10 items-center rounded-lg bg-white px-4 text-sm tracking-wide text-black">
                    <Icons.star className="mr-2 h-4 w-4" /> Star
                    <hr className="mx-2 w-[20px] translate-y-[1px] rotate-90 border border-gray-900 opacity-30" />
                    <Icons.chevronDown className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative z-10 flex space-x-5 pb-1 pl-2 text-xs">
                  <div className="flex items-center justify-center">
                    <div className="mr-2 h-[10px] w-[10px] rounded-full border border-blue-600"></div>
                    {eventInfo.location}
                  </div>
                  <div className="flex items-center justify-center">
                    <Icons.star className="mr-1 h-3 w-3 shrink-0" />
                    {eventInfo.starCount}
                  </div>
                  <div className="">When: {eventInfo.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b-1 mt-16 w-full border" />
        {/*  */}
      </div>
    </div>
  )
}

export default OrganizationPage
