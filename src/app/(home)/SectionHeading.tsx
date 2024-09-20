import { PropsWithChildren } from "react"
import { cn } from "~/utils/tailwind"

interface SectionHeadingProps extends PropsWithChildren {
  id: string
}

export const SectionHeading = ({ id, children }: SectionHeadingProps) => {
  return (
    <div className="mb-4">
      <h2
        id={id}
        className={cn(
          "uppercase text-3xl text-gray-600 tracking-wide text-center",
        )}
      >
        {children}
      </h2>
    </div>
  )
}
