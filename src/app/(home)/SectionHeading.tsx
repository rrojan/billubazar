import { PropsWithChildren } from "react"
import { cn } from "~/utils/tailwind"

interface SectionHeadingProps extends PropsWithChildren {
  id: string
  className?: string
}

export const SectionHeading = ({
  id,
  className,
  children,
}: SectionHeadingProps) => {
  return (
    <div className="mb-6">
      <h2
        id={id}
        className={cn(
          "uppercase text-3xl text-gray-600 tracking-wide text-center",
          className,
        )}
      >
        {children}
      </h2>
    </div>
  )
}
