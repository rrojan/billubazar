import { PropsWithChildren } from "react"

export const EmptyStateText = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full text-gray-400 py-8 text-center tracking-wider">
      {children}
    </div>
  )
}
