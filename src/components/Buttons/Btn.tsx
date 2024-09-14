import { PropsWithChildren } from "react"
import { cn } from "~/utils/tailwind"

type BtnVariant = "primary" | "secondary"

interface BtnProps extends PropsWithChildren {
  variant?: BtnVariant
  type?: "submit" | "button"
  handleClick?: () => unknown
  className?: string
}

export const Btn = ({
  variant = "primary",
  type = "button",
  handleClick,
  className,
  children,
}: BtnProps) => {
  const btnClassNames: Record<BtnVariant, string> = {
    primary:
      "bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none transition duration-300 border-[1px] border-black",
    secondary:
      "text-black w-full py-3 rounded-lg border-[1px] border-gray-300 hover:bg-gray-200 hover:border-gray-200 focus:ring-4 focus:ring-gray-300 focus:outline-none transition duration-300",
  }

  return (
    <button
      className={cn(
        `buttons__btn--${variant}`,
        btnClassNames[variant],
        className,
      )}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
