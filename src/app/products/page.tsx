import Link from 'next/link';
import { getProducts } from '../lib/api/products.api';
import ProductClient from './_components/ProductClient';

export default async function Page() {
  const data = await getProducts();
  return (
    <>
      <div className="flex gap-5 justify-center items-center">
        <ul className="py-5 bg-slate-300 text-blue-700">
          {data.map((product) => (
            <Link
              className="block"
              href={`products/${product.id}`}
              key={product.id}
            >
              {product.title}
            </Link>
          ))}
        </ul>
        <ProductClient data={data} />
      </div>
    </>
  );
}
