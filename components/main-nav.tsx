import Link from "next/link"
import Image from "next/legacy/image"

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Guidlify Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold text-gray-900">
                Guidlify
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="bg-gray-100 rounded-full p-1">
              <Link
                href="/events"
                className="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-full transition-all"
              >
                Find Events
              </Link>
              <Link
                href="/packs"
                className="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-full transition-all"
              >
                Event Packs
              </Link>
              <Link
                href="/community"
                className="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-full transition-all"
              >
                Community
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar 