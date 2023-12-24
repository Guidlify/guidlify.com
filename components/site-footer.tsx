import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const footerData = [
    {
      title: "About",
      items: ["Company", "Store", "Open Source", "Research"],
    },
    {
      title: "Resources",
      items: ["Tools", "Blog", "Tutorials", "FAQs"],
    },
    {
      title: "Support",
      items: ["Contact Us", "Developers", "Documentation", "Integrations"],
    },
    {
      title: "Legal",
      items: ["Policy", "Terms", "Privacy", "Cookies"],
    },
  ]
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:py-0">
        <div className="flex flex-1 flex-col items-center gap-4 md:flex-row md:gap-2 md:px-0 lg:items-start">
          <div className="mr-4 xs:col-span-5 xs:pb-8 lg:col-span-1 lg:pb-0">
            <Image
              src={"/guidlify-brand-logo.svg"}
              alt=""
              width={150}
              height={80}
            />
          </div>

          <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-4 px-4 pb-4">
            {footerData.map((column, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 xs:col-span-5 xs:w-full xs:text-center sm:col-span-2 sm:w-auto sm:shrink-0 sm:pb-0 sm:text-left lg:col-span-1"
              >
                <p className="font-semibold">{column.title}</p>
                {column.items.map((item, itemIndex) => (
                  <p
                    key={itemIndex}
                    className="md:text-md cursor-pointer text-sm transition duration-200 hover:underline"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <ModeToggle />
      </div>

      <div className="container flex flex-col items-center justify-between gap-4 py-4  md:flex-row md:border-t md:border-muted-foreground/30">
        <h1 className="flex">
          <div className="mr-2">
            <Icons.Discord className="h-6 w-6 text-[#5865F2]" />
          </div>
          <div className="mr-2">
            <Icons.X className="h-5 w-5" />
          </div>
        </h1>
        <h1 className="xs:text-md sm:text-sm">Copyright © 2023 Guidlify</h1>
      </div>
    </footer>
  )
}
