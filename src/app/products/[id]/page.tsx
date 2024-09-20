import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { SectionHeading } from "~/app/(home)/SectionHeading"
import DBClient from "~/lib/db"
import { ProductSpec } from "./ProductSpec"

interface ProductDetailsPageProps {
  params: {
    id: string
  }
}

const ProductDetailsPage = async ({
  params: { id },
}: ProductDetailsPageProps) => {
  const db = DBClient.getInstance()
  const product = await db.product.findFirst({
    where: { id },
  })

  if (!product) {
    return redirect("/")
  }

  return (
    <div className="page__product-details text-gray-600">
      <div className="text-right">
        <Link href="/" className="text-gray-500 underline mt-8">
          Go back
        </Link>
      </div>

      <article className="product-details__container mt-8">
        <SectionHeading id="product-title" className="font-bold">
          {product.title}
        </SectionHeading>
        <div className="flex justify-center">
          <Image
            src={product.imgUrl}
            alt={product.title}
            className="w-full h-[420px] object-cover object-top rounded-lg  p-0 sm:px-24"
            width={2000}
            height={2000}
          />
        </div>

        <div className="product-details__content p-0 sm:px-24">
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 text-left sm:text-center">
            <ProductSpec title="Seller" value={product.seller} />
            <ProductSpec title="Price" value={product.price} />
            <ProductSpec title="Address" value={product.address} />
          </div>

          <div className="mt-12">
            <span className="font-bold">Description:</span>
            <br />
            <div className="mt-4">&nbsp;&nbsp;{product.description}</div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ProductDetailsPage
