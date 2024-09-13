import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"
import Image from "next/image"
import { Btn } from "~/components/Buttons/Btn"
import { NewProductBtn } from "~/components/Buttons/NewProductBtn"

export const Header = () => {
  return (
    <header className="layout__header flex flex-col sm:flex-row justify-between items-center mb-4">
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
      <div>
        <SignedOut>
          <SignInButton mode="modal">
            <Btn className="w-auto py-2 px-4">Login</Btn>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex gap-1 sm:gap-4">
            <SignOutButton>
              <Btn className="w-[100px]" variant="secondary">
                Sign out
              </Btn>
            </SignOutButton>
            <NewProductBtn />
          </div>
        </SignedIn>
      </div>
    </header>
  )
}
