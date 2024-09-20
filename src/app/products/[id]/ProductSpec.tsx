interface ProductSpecProps {
  title: string
  value: string | number
}

export const ProductSpec = ({ title, value }: ProductSpecProps) => (
  <div className="text-sm">
    <span className="font-bold">{title}:&nbsp;</span>
    <span>{value}</span>
  </div>
)
