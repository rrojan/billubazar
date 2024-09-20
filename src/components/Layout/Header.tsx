import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"
import Image from "next/image"
import { Btn } from "~/components/Buttons/Btn"
import { NewProductBtn } from "~/components/Buttons/NewProductBtn"

export const Header = () => {
  return (
    <header className="layout__header flex flex-col sm:flex-row justify-between items-center mb-4">
      <a href="/">
        <h1 className="text-4xl sm:text-xl font-bold flex items-center mb-6 sm:mb-0">
          <Image
            alt="Banner lol"
            className="w-[60px] h-[60px] object-cover"
            src="/images/logo.jpg"
            width={200}
            height={200}
          />
          BilluBazar
        </h1>
      </a>
      <div>
        <SignedOut>
          <SignInButton mode="modal">
            <Btn className="w-auto py-2 px-4">Login</Btn>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex justify-center h-[50px] gap-4">
            <SignOutButton>
              <Btn className="w-[130px]" variant="secondary">
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
