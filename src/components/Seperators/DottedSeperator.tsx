import { cn } from "~/utils/tailwind"
import { GenericSeperatorProps } from "~/components/Seperators/types"

export const DottedSeperator = ({ className }: GenericSeperatorProps) => {
  return (
    <div
      className={cn(
        "seperators__dotted-seperator",
        "flex justify-center text-2xl mb-8",
        className,
      )}
    >
      {/* lol */}. . . . . . . . . . . . . . .
    </div>
  )
}
