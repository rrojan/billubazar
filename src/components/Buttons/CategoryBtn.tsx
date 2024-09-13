interface CategoryBtnProps {
  title: string
  count: number
}

export default function CategoryBtn({ title, count }: CategoryBtnProps) {
  return (
    <div className="buttons__category-btn flex justify-between bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer">
      <span>{title}</span>
      <span className="text-gray-600">({count})</span>
    </div>
  )
}
