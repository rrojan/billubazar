import Image from "next/image"
import { NewProductBtn } from "../Buttons/NewProductBtn"
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"

export const Header = () => {
  return (
    <header className="layout__header flex justify-between items-center mb-4">
      <h1 className="text-xl font-bold flex items-center">
        <Image
          alt="Banner lol"
          className="w-[60px] h-[60px] transition-transform duration-300 ease-in-out hover:scale-110 object-cover"
          src="/images/logo.jpg"
          width={200}
          height={200}
        />
        BilluBazar
      </h1>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-black text-white py-2 px-4 rounded hover:scale-[1.03] hover:shadow-md">
            Login
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className="flex gap-4">
          <SignOutButton>
            <button className="bg-white text-black border-[1px] border-black py-2 px-4 rounded">
              Sign out
            </button>
          </SignOutButton>
          <NewProductBtn />
        </div>
      </SignedIn>
    </header>
  )
}
