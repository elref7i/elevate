import { getProducts } from '@/app/lib/api/products.api';
import ProductClient from '../_components/ProductClient';

export default async function Page({ params }: { params: string }) {
  console.log(params);
  const data = await getProducts();
  return (
    <>
      <div>Product Dynamic Route</div>

      <div className="flex gap-5 justify-center items-center">
        <ul className="py-5 bg-slate-300 text-blue-700">
          {data.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
        <ProductClient data={data} />
      </div>
    </>
  );
}
