"use client"

import Image from "next/legacy/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        href="/"
        className="items-center space-x-2 xs:inline-flex sm:inline-flex md:flex"
      >
        <span className="hidden font-bold sm:inline-block">
          <Image
            src={"/guidlify-brand-logo.svg"}
            alt="brand logo of guidlify"
            width={150}
            height={80}
          />
        </span>
        <span className="font-bold xs:inline-block sm:hidden">
          <Image
            src={"/guidlify-brand-logo-notext.svg"}
            alt="brand logo of guidlify"
            width={60}
            height={40}
          />
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80",
                    !item.disabled && pathname == item.href && "text-primary"
                  )}
                  {...(!item.disabled && { pathname: item.href })}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
