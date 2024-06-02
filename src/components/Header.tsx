import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"
import SearchInput from "./SearchInput"
import GenreDropdown from "./GenreDropdown"

function Header() {
  return (
    <header className="w-full fixed z-50 top-0 p-5 flex items-center justify-between bg-gradient-to-t from-gray-200/0
    via-gray-900/25 to-gray-900">

      <Link href="/" className="flex items-end gap-2">
        <Image
          src="/cutie.png"
          alt="Disney 2.0 logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />
        {/* <span className="text-xl font-medium text-white">
          Cutie
        </span> */}
      </Link>

      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header
