interface CategoryBtnProps {
  id: string
  title: string
  count: number
}

export default function CategoryBtn({ id, title, count }: CategoryBtnProps) {
  return (
    <a
      className="buttons__category-btn flex justify-between bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer"
      href={`/?categoryId=${id}`}
    >
      <span>{title}</span>
      <span className="text-gray-600">({count})</span>
    </a>
  )
}
