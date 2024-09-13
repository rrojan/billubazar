import { PropsWithChildren } from "react"
import { cn } from "~/utils/tailwind"

export const SectionHeading = ({ children }: PropsWithChildren) => {
  return (
    <div className="mb-4">
      <h2
        className={cn(
          "uppercase text-3xl text-gray-600 tracking-wide text-center",
        )}
      >
        {children}
      </h2>
    </div>
  )
}
